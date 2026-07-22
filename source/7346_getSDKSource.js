// Module ID: 7346
// Function ID: 59249
// Name: getSDKSource
// Dependencies: []

// Module 7346 (getSDKSource)
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
