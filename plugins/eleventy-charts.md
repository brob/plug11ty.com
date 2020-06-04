---
layout: /plugin.njk
title: Eleventy Charts
categories:
  - content
  - markdown
maintainer:
  name: idris maps
  url: https://idris-maps.com/
githubUrl: https://github.com/idris-maps/eleventy-charts
description: An eleventy plugin to create charts
---
An [`eleventy`](https://www.11ty.dev/) plugin to create charts

## Usage

```shell
npm install eleventy-charts --save-dev
```

In your `.eleventy.js`-file:

```js
const charts = require('eleventy-charts')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(charts)
}
```

In your markdown, use codeblocks with one of the following languages:

* `area-chart`
* `bar-chart`
* `line-chart`
* `multiline-chart`
* `pie-chart`
* `vega-lite`
* `vega`
* `vegalite`

[`vega`](https://vega.github.io/vega/) and [`vegalite`](https://vega.github.io/vega-lite/) are json objects.

The others are `csv` with options set as front-matter.

See the [examples markdown](https://raw.githubusercontent.com/idris-maps/eleventy-charts/master/examples.md) and how they are [rendered](http://eleventy-charts.surge.sh/).