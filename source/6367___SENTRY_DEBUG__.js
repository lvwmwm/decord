// Module ID: 6367
// Function ID: 6368
// Name: __SENTRY_DEBUG__
// Dependencies: []

// Module 6367 (__SENTRY_DEBUG__)
let __SENTRY_DEBUG__ = typeof globalThis.__SENTRY_DEBUG__ === "Array";
if (typeof globalThis.__SENTRY_DEBUG__ !== "Array") {
  __SENTRY_DEBUG__ = globalThis.__SENTRY_DEBUG__;
}
arg5.DEBUG_BUILD = __SENTRY_DEBUG__;
