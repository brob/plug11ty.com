const svgContents = require("eleventy-plugin-svg-contents");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addCollection("plugins", function(collectionApi) {
    return collectionApi.getFilteredByTag('plugins').sort((a, b) => {
      if (a.data.title.toLowerCase() > b.data.title.toLowerCase()) return -1;
      else if (a.data.title.toLowerCase() < b.data.title.toLowerCase()) return 1;
      else return 0;
    }).reverse()
  });
  eleventyConfig.addCollection("categories", function(collectionApi) {
    return collectionApi.getFilteredByTag('categories');
  });

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
}