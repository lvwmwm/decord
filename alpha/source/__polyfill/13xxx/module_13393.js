// Module ID: 13393
// Function ID: 13394
// Dependencies: []
// Exports: getSDKSource, isBrowserBundle

// Module 13393

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
