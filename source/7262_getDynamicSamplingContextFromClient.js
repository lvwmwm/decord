// Module ID: 7262
// Function ID: 58538
// Name: getDynamicSamplingContextFromClient
// Dependencies: []

// Module 7262 (getDynamicSamplingContextFromClient)
function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  let obj = getOptions(arg6[0]);
  obj = {};
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = getOptions(arg6[1]).DEFAULT_ENVIRONMENT;
  }
  obj.environment = DEFAULT_ENVIRONMENT;
  obj.release = options.release;
  obj.public_key = getOptions.getDsn() || {}.publicKey;
  obj.trace_id = trace_id;
  const dropUndefinedKeysResult = obj.dropUndefinedKeys(obj);
  getOptions.emit("createDsc", dropUndefinedKeysResult);
  return dropUndefinedKeysResult;
}
function getDynamicSamplingContextFromSpan(spanContext) {
  const client = arg1(arg6[2]).getClient();
  if (client) {
    const rootSpan = arg1(arg6[3]).getRootSpan(spanContext);
    if (rootSpan[closure_2]) {
      return tmp4;
    } else {
      const traceState = rootSpan.spanContext().traceState;
      let value = traceState;
      if (traceState) {
        value = traceState.get("sentry.dsc");
      }
      let result = value;
      if (value) {
        result = arg1(arg6[4]).baggageHeaderToDynamicSamplingContext(value);
        const obj5 = arg1(arg6[4]);
      }
      if (result) {
        return result;
      } else {
        const tmp10 = getDynamicSamplingContextFromClient(spanContext.spanContext().traceId, client);
        const spanToJSONResult = arg1(arg6[3]).spanToJSON(rootSpan);
        const tmp14 = spanToJSONResult.data || {};
        if (null != tmp14[closure_0(undefined, closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]) {
          const _HermesInternal = HermesInternal;
          tmp10.sample_rate = "" + tmp17;
        }
        const description = spanToJSONResult.description;
        const obj6 = arg1(arg6[3]);
        if (tmp22) {
          tmp10.transaction = description;
        }
        const tmp22 = "url" !== tmp14[closure_0(undefined, closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (obj7.hasTracingEnabled()) {
          const _String = String;
          tmp10.sampled = String(arg1(arg6[3]).spanIsSampled(rootSpan));
          const obj8 = arg1(arg6[3]);
        }
        client.emit("createDsc", tmp10, rootSpan);
        return tmp10;
      }
    }
    const obj3 = arg1(arg6[3]);
  } else {
    return {};
  }
  const obj = arg1(arg6[2]);
}
let closure_2 = "_frozenDsc";
arg5.freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = arg1(arg6[0]).addNonEnumerableProperty(arg0, closure_2, arg1);
};
arg5.getDynamicSamplingContextFromClient = getDynamicSamplingContextFromClient;
arg5.getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(arg0, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    dsc = getDynamicSamplingContextFromClient(propagationContext.traceId, arg0);
  }
  return dsc;
};
arg5.getDynamicSamplingContextFromSpan = getDynamicSamplingContextFromSpan;
arg5.spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return arg1(arg6[4]).dynamicSamplingContextToSentryBaggageHeader(tmp);
};
