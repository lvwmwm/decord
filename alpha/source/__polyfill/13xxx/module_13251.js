// Module ID: 13251
// Function ID: 13252
// Dependencies: []
// Exports: getSDKSource, isBrowserBundle

// Module 13251

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
