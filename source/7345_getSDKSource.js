// Module ID: 7345
// Function ID: 59226
// Name: getSDKSource
// Dependencies: []

// Module 7345 (getSDKSource)
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
