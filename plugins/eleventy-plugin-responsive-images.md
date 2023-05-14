---
layout: /plugin.njk
title: eleventy-plugin-responsive-images
categories:
  - images
  - markdown
  - performance
  - universal
  - content
maintainer:
  name: Adam Culpepper
  url: https://adamculpepper.net
githubUrl: https://www.npmjs.com/package/eleventy-plugin-responsive-images
description: An Eleventy plugin that adds a shortcode to enable you to add a
  responsive image from your Cloudinary account.
---


# Responsive Images - Eleventy Plugin (powered by Cloudinary)

An [Eleventy](https://11ty.dev) plugin that adds a shortcode to enable you to add a responsive image from your [Cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/xdosfzqjnaqemyshp52j) account.

[![Maintained](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)](https://github.com/adamculpepper)
[![Size](https://img.shields.io/github/size/adamculpepper/eleventy-plugin-responsive-images/.eleventy.js?label=Size&style=for-the-badge)](https://github.com/adamculpepper/eleventy-plugin-responsive-images/blob/master/.eleventy.js)
[![Stars](https://img.shields.io/github/stars/adamculpepper/eleventy-plugin-responsive-images?style=for-the-badge)](https://github.com/adamculpepper/eleventy-plugin-responsive-images/stargazers)
[![Issues](https://img.shields.io/github/issues/adamculpepper/eleventy-plugin-responsive-images?style=for-the-badge)](https://github.com/adamculpepper/eleventy-plugin-responsive-images/issues)
[![License](https://img.shields.io/github/license/adamculpepper/eleventy-plugin-responsive-images?style=for-the-badge)](https://github.com/adamculpepper/eleventy-plugin-responsive-images/blob/master/LICENSE)

## What does it do?

Turns [11ty shortcodes](https://www.11ty.io/docs/shortcodes/) like this:

```nunjucks

```

into a responsive `<img>` tag, like this:

```html

```

## Installation

**Step 1** - Install the plugin

```

```

**Step 2** - Open the Eleventy config file (probably `.eleventy.js`) and add in the `require` and `addPlugin` lines below toward the top of the file

```

```

**Step 3** - In the same file, locate the `module.exports = function(eleventyConfig) {` line, pasting the following lines somewhere below that line and then change the values.

```

```

> Your [Cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/xdosfzqjnaqemyshp52j) CloudName can be found in *Dashboard > Account Details > Cloud name*
>
> Your *hostname* will be a live url that you're deploying your JAMstack build to. 

## Usage

The following shortcode can be used with all the available options (only `src` and `sizes` are required).

```

```

Output image:

<img src="https://res.cloudinary.com/demo/image/upload/w_300,h_200,c_crop/sample.jpg" alt="Cloudinary Sample Image">

## Options

| Attribute           | Example Value            | Description                              |
| ------------------- | ------------------------ | ---------------------------------------- |
| `src` \[required]   | "*/images/cat.jpg*"      | path to image file                       |
| `width` \[required] | "*300*"                  | largest image width (in pixels)          |
| `height`            | "*250*"                  | largest image height (in pixels)         |
| `sizes`             | "*300, 400, 500, 600*"   | all sizes (in widths) you want to output |
| `alt`               | "*Cat Photo*"            | image alt tag                            |
| `loading`           | *"lazy"* or *"eager"*    | Lazy load the image or load immediatly   |
| `class`             | "*class1 class2 class3*" | single class names seperated by spaces   |

> **Notes**
>
> * variables can be used as attribute values. Syntax varies by the template rendering engine used
> * error handling will print out in place of your image if you miss a required attribute

### Helpful

* Make sure that the domains where you're hosting your photos are whitelisted in your Cloudinary settings, under *Settings > Security > Allowed fetch domains*. If you leave the field blank Cloudinary will [`fetch`](https://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url) from any domain.
* [Cloudinary Documentation](https://cloudinary.com/documentation)
* [Responsive Image Breakpoints Generator](http://responsivebreakpoints.com)
* Some useful default image transformations to consider
  		- [Automatic format selection](https://cloudinary.com/documentation/image_transformations#automatic_format_selection)
  		- [Resizing and cropping images](https://cloudinary.com/documentation/image_transformations#resizing_and_cropping_images)
  		- [Adjusting image quality](https://cloudinary.com/documentation/image_transformations#adjusting_image_quality)

### Todo

* add in default settings
* add in template shortcode syntax for attribute variables (nunjucks, liquid, etc.)
* remove `sizes` being required
* consider adding the other image attributes (`crossorigin`, `ismap`, `longdesc`, `referrerpolicy`, `usemap`)

## Other great 11ty image plugins

* [eleventy-respimg](https://github.com/eeeps/eleventy-respimg)
* [eleventy-plugin-cloudinary](https://github.com/juanfernandes/eleventy-plugin-cloudinary)
* [eleventy-plugin-images-responsiver](https://github.com/nhoizey/images-responsiver)