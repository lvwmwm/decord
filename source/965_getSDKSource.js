// Module ID: 965
// Function ID: 10437
// Name: getSDKSource
// Dependencies: []

// Module 965 (getSDKSource)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
