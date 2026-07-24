// Module ID: 831
// Function ID: 9263
// Name: hasSpansEnabled
// Dependencies: [825]

// Module 831 (hasSpansEnabled)
const require = arg1;
const dependencyMap = arg6;
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
    const client = require(825) /* getCurrentScope */.getClient();
    if (null != client) {
      options = client.getOptions();
    }
    tmp = options;
    const obj = require(825) /* getCurrentScope */;
  }
  let tmp6 = !tmp;
  if (!tmp6) {
    tmp6 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
    const tmp8 = null == tmp.tracesSampleRate && !tmp.tracesSampler;
  }
  return !tmp6;
};
