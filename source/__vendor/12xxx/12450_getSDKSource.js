// Module ID: 12450
// Function ID: 12451
// Name: getSDKSource
// Dependencies: []

// Module 12450 (getSDKSource)
arg5.getSDKSource = function getSDKSource() {
  return "npm";
};
arg5.isBrowserBundle = function isBrowserBundle() {
  let prop = typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined";
  if (typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined") {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
};
