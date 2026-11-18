// Module ID: 687
// Function ID: 688
// Name: DEBUG_BUILD
// Dependencies: []

// Module 687 (DEBUG_BUILD)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const DEBUG_BUILD = typeof globalThis.__SENTRY_DEBUG__ === "undefined" || globalThis.__SENTRY_DEBUG__;
