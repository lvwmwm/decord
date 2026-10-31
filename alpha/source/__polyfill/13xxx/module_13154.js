// Module ID: 13154
// Function ID: 13155
// Dependencies: []
// Exports: getSDKSource, isBrowserBundle

// Module 13154

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
