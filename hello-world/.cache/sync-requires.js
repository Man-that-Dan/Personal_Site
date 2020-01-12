const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-components-feature-js": hot(preferDefault(require("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/Feature.js"))),
  "component---src-pages-components-feature-reverse-js": hot(preferDefault(require("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/FeatureReverse.js"))),
  "component---src-pages-components-header-js": hot(preferDefault(require("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/Header.js"))),
  "component---src-pages-components-nav-bar-js": hot(preferDefault(require("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/NavBar.js"))),
  "component---src-pages-components-side-bar-js": hot(preferDefault(require("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/SideBar.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/index.js")))
}

