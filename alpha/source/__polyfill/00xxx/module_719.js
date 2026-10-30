// Module ID: 719
// Function ID: 720
// Dependencies: [712]
// Exports: hasSpansEnabled

// Module 719
import _mod712 from "module_712" /* 712 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function hasSpansEnabled(options) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = options;
  if (!tmp) {
    const obj = _mod712;
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
}
