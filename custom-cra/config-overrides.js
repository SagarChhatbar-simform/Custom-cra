const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  adjustWorkbox
} = require("customize-cra");


module.exports = override(

  addDecoratorsLegacy(),


  disableEsLint(),


  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports


  // adjust the underlying workbox
  adjustWorkbox(wb =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat("index.html")
    })
  )
);