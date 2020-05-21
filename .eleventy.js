const svgContents = require("eleventy-plugin-svg-contents");
module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addCollection("plugins", function(collectionApi) {
    return collectionApi.getFilteredByTag('plugins').sort((a, b) => {
      if (a.data.title > b.data.title) return -1;
      else if (a.data.title < b.data.title) return 1;
      else return 0;
    }).reverse()
  });
  eleventyConfig.addCollection("categories", function(collectionApi) {
    return collectionApi.getFilteredByTag('categories');
  });

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
}