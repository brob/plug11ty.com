---
layout: /plugin.njk
title: Sanity Image Helper
categories:
  - images
  - universal
maintainer:
  name: Bryan Robinson
  url: https://bryanlrobinson.com
githubUrl: https://github.com/brob/eleventy-plugin-sanity-image
description: A plugin to make using Sanity's Asset Pipeline easier in 11ty
---
# Use Sanity's Asset Pipeline with 11ty

## Alpha Release

This plugin is a template helper to connect Sanity's Asset Pipelines to your 11ty templates for images. This is currently in early stages.

## Installation

```shell
npm install eleventy-plugin-sanity-image
```

Then in your `.eleventy.js` file, you'll need to require this package and initialize your plugin.

```js
const sanityImage = require('../../eleventy-plugin-sanity-image/';
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sanityImage, {
    client: sanityClient // This is your Sanity connection object
  })
}
```

Once this is initialized, you've got access to 3 new shortcodes:

```twig
// Get sanity cdn URLs for your image with optional mutations
{% imageUrlFor sanityImageObject, optionalWidthValue %}
{% croppedUrlFor sanityImageObject, widthValue, heightValue %}

// Get a responsive <img> with srcset and sizes
{% responsiveImage sanityImageObject, "comma delimited list of image sizes for srcset", "html sizes attr content", "optional classes listed"}
```

## `imageUrlFor`

The `imageUrlFor` tag will return a URL to your image on the Sanity CDN. You can pass it a width to get a specific-width image.

If you want your image to respect the crop and hotspot functionality in your Studio, be sure to pass the entire image object and not just the reference to the asset (though this will work, it just won't respect an editor's choices).


## `croppedUrlFor`

The `croppedUrlFor` tag will return a URL for your image on the Sanity CDN cropped to the specify width and height specified. If you.

If you want your image to respect the crop and hotspot functionality in your Studio, be sure to pass the entire image object and not just the reference to the asset (though this will work, it just won't respect an editor's choices).

## `responsiveImage`

The `responsiveImage` shortcode will return an `img` element with responsive `srcset` and `sizes` with properly sized images pulled from Sanity's asset pipeline.

### Arguments

The responsiveImage tag accepts 4 arguments

### `sanityImageObject` (required)

The first argument in the tag is the required image object. If you want the image to respect a user's crop/hotspot in your Studio.

### `srcSet` (optional)

The second argument in the tag is the optional `srcset` override. This will be a string of comma-delimited numbers: `"300, 500, 800, 1000"`. This will create a `srcset` attribute with those image sizes (in pixels). The images will be returned from Sanity's asset pipeline with those widths.

### `sizes` (optional)

The third argument is the optional `sizes` override. By default, the plugin assumes `sizes="100vw"` for maximum flexibility. There are plenty of responsive-related reasons for overriding this option. For more information on the (sometimes confusing) `sizes` attr, see this [CSS Tricks article](https://css-tricks.com/responsive-images-css/#sizes-in-css).

### `classes` (optional)

If you want to add a class to the image that's being added, you can provide a final argument to add a space-delimited list of classes to go in the html `class` attr.