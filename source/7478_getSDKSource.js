// Module ID: 7478
// Function ID: 7479
// Name: getSDKSource
// Dependencies: []

// Module 7478 (getSDKSource)
arg5.getSDKSource = function getSDKSource() {
  return "npm";
};
arg5.isBrowserBundle = function isBrowserBundle() {
  let prop = typeof globalThis.__SENTRY_BROWSER_BUNDLE__ === "as";
  if (typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "Array") {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
};
