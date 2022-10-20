---
layout: /plugin.njk
title: Rollup
readmeUrl: https://raw.githubusercontent.com/Snapstromegon/eleventy-plugin-rollup/main/README.md
categories:
  - utility
maintainer:
  name: Snapstromegon
  url: https://hoeser.dev
githubUrl: https://github.com/Snapstromegon
description: Provide an integrated way to use rollup with eleventy.
---
# Eleventy-Plugin-Rollup

Provide an integrated way to use rollup with eleventy.

This is based on my original [blogpost about 11ty and rollup](https://www.hoeser.dev/blog/2021-02-28-11ty-and-rollup/).

The benefit of this plugin is, that the resulting page will only load the JS it needs and parts of your bundle can be shared between pages.
This is because rollup and 11ty no longer run independently from each other, but rollup knows what happens in 11ty.

## Installation

```
npm i -D eleventy-plugin-rollup rollup
```

## Usage

### Adding the plugin

#### With explicit config

```js
const rollupPlugin = require("eleventy-plugin-rollup");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rollupPlugin, {
    rollupOptions: {
      output: {
        format: "es",
        dir: "_site/js",
      },
    },
  });

  // ...
};
```

#### With existing config

```js
const rollupPlugin = require("eleventy-plugin-rollup");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rollupPlugin, {
    rollupOptions: "rollup.config.js",
  });

  // ...
};
```

### Usage in templates

```liquid
{% rollup "assets/js/some.js" | url %}
```

### Possible options

| Name            | Default                                                 | Description                                                                                                              |
| :-------------- | :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| shortcode       | rollup                                                  | Rollup Plugin shortcode name to use in templates (async shortcode required!)                                             |
| rollupOptions   | -                                                       | Your rollup config (either a valid rollup config option or a file path to a rollup config - can only include one config) |
| resolveName     | _default name with hash_                                | Lets you overwrite how the resulting bundles are called.                                                                 |
| scriptGenerator | file => `<script src="${file}" type="module"></script>` | Defines how the resulting script tag from the shortcode should work                                                      |

### Serverless

If you run a serverless setup, you have to do one of two things to get this plugin to work:

#### Option 1: Copy over all your js entrypoints to the functions folder

Since the default entrypoint naming function uses the content of the js file, it needs to be available at function execution time. You can copy the files like this:

```js
eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
  name: "possum", // The serverless function name from your permalink object
  functionsDir: "./netlify/functions/",
  copy: ["path/to/your/js/files/"],
});
```

#### Option 1: Use a custom bundle naming function

If you set the `resolveName` option of this plugin, you can avoid copying over the js files.
The example below shows a function that only hashes the file path. Be aware that the hash won't change if you change the content of the file.

```js
eleventyConfig.addPlugin(rollupPlugin, {
  rollupOptions: {
    /* ... */
  },
  resolveName: (path) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha256");
    hash.update(resolvedPath);
    const fileHash = hash.digest("hex");
    const parsedPath = path.parse(resolvedPath);
    return `${parsedPath.name}-${fileHash.substr(0, 6)}.js`;
  },
});
```

## Known limitations

### No Default Config

You have to provide some kind of rollup config since there is no default provided at the moment

### No multiple bundles in rollup config

You can't define multiple bundles/configurations inside your rollup config, since we wouldn't know which one to use as the plugin.
But you can use multiple instances of the plugin.

### Default file hashes only depend on path and direct content

If you call this plugin with file _"a.js"_ which in turn imports file _"b.js"_ and you change the content of file _"b.js"_, the hash of _"a.js"_ will remain the same.
This is done, because not all templating languages support async shortcodes and we need the filename before actually running rollup.

### No Edge functions support

We currently rely on nodejs modules and therewfore don't support Deno, which is required for Netlify Edge Functions.

## Note on watching

The recommended way of watching is adding your dependencies as a watch target to eleventy like this:

```js
// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/js/");
};
```

If this doesn't work for you, this plugin does a best-effort approach to parsing rollup.watch.include and adding those targets automatically to the elventy watch targets.
Please note that this isn't perfect and differs from the rollup behavior and does not support exclusions.