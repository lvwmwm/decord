// Module ID: 13036
// Function ID: 13037
// Dependencies: [13031]
// Exports: hasTracingEnabled

// Module 13036
import _mod13031 from "module_13031" /* 13031 */;


export function hasTracingEnabled(tracesSampler) {
  if (typeof globalThis.__SENTRY_TRACING__ === "boolean") {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  let tmp = tracesSampler;
  const obj = _mod13031;
  const client = obj.getClient();
  if (!tracesSampler) {
    tmp = client && client.getOptions();
    client && client.getOptions();
  }
  let tmp3 = tmp;
  if (tmp3) {
    const enableTracing = tmp.enableTracing || "tracesSampleRate" in tmp || "tracesSampler" in tmp;
    tmp3 = enableTracing;
  }
  return tmp3;
}
