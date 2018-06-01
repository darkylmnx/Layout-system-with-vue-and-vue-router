const baseUrl =
  process.env.NODE_ENV === "production"
    ? "/Layout-system-with-vue-and-vue-router/"
    : "/";

module.exports = {
  outputDir: "docs",
  baseUrl: baseUrl
};
