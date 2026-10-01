// Module ID: 720
// Function ID: 721
// Dependencies: [713]
// Exports: hasSpansEnabled

// Module 720
import _mod713 from "module_713" /* 713 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const hasSpansEnabled = function hasSpansEnabled(options) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = options;
  if (!tmp) {
    const obj = _mod713;
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
