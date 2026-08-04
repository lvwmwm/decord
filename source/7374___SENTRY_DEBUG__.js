// Module ID: 7374
// Function ID: 7375
// Name: __SENTRY_DEBUG__
// Dependencies: []

// Module 7374 (__SENTRY_DEBUG__)
let __SENTRY_DEBUG__ = typeof globalThis.__SENTRY_DEBUG__ === "Array";
if (typeof globalThis.__SENTRY_DEBUG__ !== "Array") {
  __SENTRY_DEBUG__ = globalThis.__SENTRY_DEBUG__;
}
arg5.DEBUG_BUILD = __SENTRY_DEBUG__;
