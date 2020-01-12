// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-components-feature-js": () => import("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/Feature.js" /* webpackChunkName: "component---src-pages-components-feature-js" */),
  "component---src-pages-components-feature-reverse-js": () => import("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/FeatureReverse.js" /* webpackChunkName: "component---src-pages-components-feature-reverse-js" */),
  "component---src-pages-components-header-js": () => import("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/Header.js" /* webpackChunkName: "component---src-pages-components-header-js" */),
  "component---src-pages-components-nav-bar-js": () => import("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/NavBar.js" /* webpackChunkName: "component---src-pages-components-nav-bar-js" */),
  "component---src-pages-components-side-bar-js": () => import("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/components/SideBar.js" /* webpackChunkName: "component---src-pages-components-side-bar-js" */),
  "component---src-pages-index-js": () => import("/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/DToro/Desktop/Portfolio/Personal_Site/hello-world/.cache/data.json")

