---
layout: /plugin.njk
title: Table of Contents (TOC)
categories:
  - content
  - utility
  - universal
maintainer:
  name: James Steinbach
  url: https://jamessteinbach.com/
githubUrl: https://github.com/jdsteinbach/eleventy-plugin-toc
description: This Eleventy plugin will generate a TOC from page content using an
  Eleventy filter.
---
## Default Options

```js
{
  tags: ['h2', 'h3', 'h4'], // which heading tags are selected
                            // headings must each have an ID attribute
  wrapper: 'nav',           // element to put around the root `ol`
  wrapperClass: 'toc'       // class for the element around the root `ol`
}
```

## Usage

### 1. Install the plugin

```bash
npm i --save-dev eleventy-plugin-toc
```

### 2. Add the plugin to Eleventy config

Note: you'll need to make sure you have `id`s on heading elements before this plugin will create a TOC. If there aren't `id`s, there will be nothing for links in this TOC to link to. (I recommend using [`markdown-it-anchor`](https://www.npmjs.com/package/markdown-it-anchor) to add those `id`s to the headings: [Eleventy config example](https://github.com/11ty/11ty.io/blob/master/.eleventy.js#L67-L81))

```js
// .eleventy.js

const pluginTOC = require('eleventy-plugin-toc')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginTOC)
}
```

### 3. Use the filter in your template

```twig
{% raw %}<article>
  {{ content }}
</article>
<aside>
  {{ content | toc }}
</aside>{% endraw %}
```

### 4. Override default options if necessary

Pass a stringified JSON object (must be `JSON.parse()`-able) as an option for in your template. Because this is an object, you only need to include the key-value pairs you need to override; [defaults](#default-options) will be preserved.

```twig
{% raw %}<aside>
  {{ content | toc: '{"tags":["h2","h3"],"wrapper":"div","wrapperClass":"content-tableau"}' }}
</article>{% endraw %}
```