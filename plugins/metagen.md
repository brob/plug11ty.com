---
layout: /plugin.njk
title: Metagen
readmeUrl: https://raw.githubusercontent.com/tannerdolby/eleventy-plugin-metagen/master/README.md
categories:
  - utility
maintainer:
  name: tannerdolby
  url: https://tannerdolby.com
githubUrl: https://github.com/tannerdolby/eleventy-plugin-metagen
description: "An Eleventy shortcode that generates metadata containing: Open
  Graph, Twitter card, generic meta tags, CSS, JS, custom tags, and a canonical
  link."
---
# eleventy-plugin-metagen
An Eleventy [shortcode](https://www.11ty.dev/docs/shortcodes/) that generates document metadata containing: Open Graph, Twitter card, generic meta tags, CSS, JS, custom tags, and a canonical link.

## Installation
Install the plugin from [npm](https://www.npmjs.com/package/eleventy-plugin-metagen):

```
npm install eleventy-plugin-metagen
```

Add it to your [Eleventy Config](https://www.11ty.dev/docs/config/) file:

```js
const metagen = require('eleventy-plugin-metagen');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(metagen);
};
```

## What does it do?
The plugin turns [11ty shortcodes](https://www.11ty.dev/docs/shortcodes/) like this:

```nunjucks
{% metagen
  title="Eleventy Plugin Meta Generator",
  desc="An eleventy shortcode for generating meta tags.",
  url="https://tannerdolby.com",
  img="https://tannerdolby.com/images/arch-spiral-large.jpg",
  img_alt="Archimedean Spiral",
  twitter_card_type="summary_large_image",
  twitter_handle="tannerdolby",
  name="Tanner Dolby",
  generator="eleventy",
  comments=true,
  css=["style.css", "design.css"],
  js=["foo.js", ["bar.js", "async"]],
  inline_css="h1 { color: #f06; }",
  inline_js="console.log('hello, world.');"
%}
```
into `<meta>` tags and other document metadata like this:

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Eleventy Plugin Meta Generator</title>
<meta name="author" content="Tanner Dolby">
<meta name="title" content="Eleventy Plugin Meta Generator">
<meta name="description" content="An eleventy shortcode for generating meta tags.">
<meta name="generator" content="eleventy">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tannerdolby.com">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="Eleventy Plugin Meta Generator">
<meta property="og:description" content="An eleventy shortcode for generating meta tags.">
<meta property="og:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta property="og:image:alt" content="Archimedean Spiral">
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@tannerdolby">
<meta name="twitter:creator" content="@tannerdolby">
<meta name="twitter:url" content="https://tannerdolby.com">
<meta name="twitter:title" content="Eleventy Plugin Meta Generator">
<meta name="twitter:description" content="An eleventy shortcode for generating meta tags.">
<meta name="twitter:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta name="twitter:image:alt" content="Archimedean Spiral">
<link rel="canonical" href="https://tannerdolby.com">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="design.css">
<style>h1 { color: #f06; }</style>
<script src="foo.js"></script>
<script src="bar.js" async></script>
<script>console.log('hello, world');</script>
```

## Custom Usage
For baseline social share functionality, providing arguments shown in the example usage above is recommended. If you want to add more tags not listed in the example, have a look at the plugin docs. You might only need a few `<meta>` tags instead of the whole set, simply provide the arguments you need and the ones not included won't generate `<meta>` tags.

Template variables can be used as arguments in Nunjucks and Liquid without the curly braces or quotes. See the [metagen docs](https://metagendocs.netlify.app/) for more details on plugin usage.

## Use Your Template Data
To make your metadata dynamic, you can use template data as arguments to the shortcode without quotes or braces. The following example is within a Nunjucks (.njk) file:

```nunjucks
---
title: Some title
desc: Some description
metadata:
  title: Some other title
  desc: Some other description
url: https://tannerdolby.com
image: https://tannerdolby.com/images/arch-spiral-large.jpg
alt: Archimedean spiral
type: summary_large_image 
twitter: tannerdolby
name: Tanner Dolby
---
{% metagen
    title=title or metadata.title,
    desc=desc or metadata.desc,
    url=url + page.url,
    img=image,
    img_alt=alt,
    twitter_card_type=type,
    twitter_handle=twitter,
    name=name
%}
```

Shorthand syntax:

```njk
---
metadata:
  title: foo bar
  desc: some desc
  ...
---
{% metagen metadata %}
```

## Contributing
If you notice an issue or there is metadata that you need generated which isn't supported, feel free to [open an issue](https://github.com/tannerdolby/eleventy-plugin-metagen/issues).

1. Fork this repo
2. Clone `git clone git@github.com:tannerdolby/eleventy-plugin-metagen.git`
3. Install dependencies `npm install`
4. Build `npm run build`
5. Serve locally `npm run dev`

## Meta Tag Reference
- [Open Graph](https://ogp.me/)
- [Twitter Card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)