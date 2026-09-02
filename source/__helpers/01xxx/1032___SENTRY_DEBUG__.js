// Module ID: 1032
// Function ID: 1033
// Name: __SENTRY_DEBUG__
// Dependencies: []

// Module 1032 (__SENTRY_DEBUG__)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let __SENTRY_DEBUG__ = typeof globalThis.__SENTRY_DEBUG__ === "undefined";
if (typeof globalThis.__SENTRY_DEBUG__ !== "undefined") {
  __SENTRY_DEBUG__ = globalThis.__SENTRY_DEBUG__;
}
arg5.DEBUG_BUILD = __SENTRY_DEBUG__;
