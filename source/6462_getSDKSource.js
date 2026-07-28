// Module ID: 6462
// Function ID: 57854
// Name: getSDKSource
// Dependencies: []

// Module 6462 (getSDKSource)
arg5.getSDKSource = function getSDKSource() {
  return "npm";
};
arg5.isBrowserBundle = function isBrowserBundle() {
  let prop = "undefined" !== typeof globalThis.__SENTRY_BROWSER_BUNDLE__;
  if (prop) {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
};
