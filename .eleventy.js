const svgContents = require("eleventy-plugin-svg-contents");
module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addCollection("plugins", function(collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTag('plugins');
  });


  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
}