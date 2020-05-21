const svgContents = require("eleventy-plugin-svg-contents");
module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addCollection("plugins", function(collectionApi) {
    return collectionApi.getFilteredByTag('plugins');
  });
  eleventyConfig.addCollection("categories", function(collectionApi) {
    return collectionApi.getFilteredByTag('categories');
  });

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
}