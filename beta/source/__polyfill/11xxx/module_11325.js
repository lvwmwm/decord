// Module ID: 11325
// Function ID: 11326
// Dependencies: []
// Exports: getSDKSource, isBrowserBundle

// Module 11325

export function getSDKSource() {
  return "npm";
}
export const isBrowserBundle = function isBrowserBundle() {
  let prop = typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined";
  if (typeof globalThis.__SENTRY_BROWSER_BUNDLE__ !== "undefined") {
    prop = globalThis.__SENTRY_BROWSER_BUNDLE__;
  }
  return prop;
};
