// Module ID: 831
// Function ID: 9257
// Name: hasSpansEnabled
// Dependencies: [0]

// Module 831 (hasSpansEnabled)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.hasSpansEnabled = function hasSpansEnabled(options) {
  let tmp = options;
  if ("boolean" === typeof globalThis.__SENTRY_TRACING__) {
    if (!globalThis.__SENTRY_TRACING__) {
      return false;
    }
  }
  if (!tmp) {
    options = undefined;
    const client = arg1(arg6[0]).getClient();
    if (null != client) {
      options = client.getOptions();
    }
    tmp = options;
    const obj = arg1(arg6[0]);
  }
  let tmp6 = !tmp;
  if (!tmp6) {
    tmp6 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
    const tmp8 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
  }
  return !tmp6;
};
