// Module ID: 9846
// Function ID: 9847
// Dependencies: []
// Exports: getSDKSource, isBrowserBundle

// Module 9846

export function getSDKSource() {
  return "npm";
}
export function isBrowserBundle() {
  let prop = typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined";
  if (typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined") {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
}
