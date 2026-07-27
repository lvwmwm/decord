// Module ID: 6426
// Function ID: 57765
// Name: getSDKSource
// Dependencies: []

// Module 6426 (getSDKSource)
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
