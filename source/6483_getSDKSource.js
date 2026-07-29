// Module ID: 6483
// Function ID: 6484
// Name: getSDKSource
// Dependencies: []

// Module 6483 (getSDKSource)
arg5.getSDKSource = function getSDKSource() {
  return "npm";
};
arg5.isBrowserBundle = function isBrowserBundle() {
  let prop = typeof globalThis.__SENTRY_BROWSER_BUNDLE__ === "ta";
  if (typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "Array") {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
};
