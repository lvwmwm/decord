// Module ID: 12825
// Function ID: 12826
// Name: __SENTRY_DEBUG__
// Dependencies: []

// Module 12825 (__SENTRY_DEBUG__)
let __SENTRY_DEBUG__ = typeof globalThis.__SENTRY_DEBUG__ === "undefined";
if (typeof globalThis.__SENTRY_DEBUG__ !== "undefined") {
  __SENTRY_DEBUG__ = globalThis.__SENTRY_DEBUG__;
}
arg5.DEBUG_BUILD = __SENTRY_DEBUG__;
