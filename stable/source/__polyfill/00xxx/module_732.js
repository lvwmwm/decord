// Module ID: 732
// Function ID: 733
// Dependencies: [725]
// Exports: hasSpansEnabled

// Module 732
import _mod725 from "module_725" /* 725 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const hasSpansEnabled = function hasSpansEnabled(options) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = options;
  if (!tmp) {
    const obj = _mod725;
    const client = obj.getClient();
    options = undefined;
    if (client != null) {
      options = client.getOptions();
    }
    tmp = options;
  }
  let tmp6 = !tmp;
  if (tmp) {
    tmp6 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
  }
  return !tmp6;
};
