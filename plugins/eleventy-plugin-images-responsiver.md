---
layout: /plugin.njk
title: eleventy-plugin-images-responsiver
categories:
  - images
maintainer:
  name: Nicolas Hoizey
  url: https://nicolas-hoizey.com
githubUrl: https://github.com/nhoizey/eleventy-plugin-images-responsiver
description: eleventy-plugin-images-responsiver is a simple solution for most
  responsive images needs with Eleventy. Responsive Images are difficult to
  implement, but they’re required to provide a good performance to Web users.
  This Eleventy plugin allows authors to use the simple and standard Markdown
  syntax for images and yet get responsive images in the generated HTML.
---
`eleventy-plugin-images-responsiver` is a simple solution for most responsive images needs with Eleventy. Responsive Images are difficult to implement, but they’re required to provide a good performance to Web users.

`eleventy-plugin-images-responsiver` is the glue between Eleventy plugin and transformations system and `images-responsiver`, a generic HTML transformation Node.js module for simple responsive images.

This Eleventy plugin allows authors to use the simple and standard Markdown syntax for images (`![alt text](image.jpg "title text")`) and yet get responsive images in the generated HTML, with `srcset` and `sizes` attributes. Eleventy uses Markdown-it to transform Markdown content into HTML, and then runs the transform added by `eleventy-plugin-images-responsiver`, which calls `images-responsiver` to actually transform the HTML.