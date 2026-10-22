// Module ID: 12496
// Function ID: 12497
// Dependencies: []
// Exports: getSDKSource, isBrowserBundle

// Module 12496

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
