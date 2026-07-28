// Module ID: 6383
// Function ID: 57177
// Name: getDynamicSamplingContextFromClient
// Dependencies: [6353, 6384, 6374, 6352, 6360, 6362, 6379]

// Module 6383 (getDynamicSamplingContextFromClient)
const require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  let obj = require(6353) /* addNonEnumerableProperty */;
  obj = {};
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = require(6384).DEFAULT_ENVIRONMENT;
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
  const client = require(6374) /* getCurrentScope */.getClient();
  if (client) {
    const rootSpan = require(6352) /* spanTimeInputToSeconds */.getRootSpan(spanContext);
    if (rootSpan[_frozenDsc]) {
      return tmp4;
    } else {
      const traceState = rootSpan.spanContext().traceState;
      let value = traceState;
      if (traceState) {
        value = traceState.get("sentry.dsc");
      }
      let result = value;
      if (value) {
        result = require(6360) /* parseBaggageHeader */.baggageHeaderToDynamicSamplingContext(value);
        const obj5 = require(6360) /* parseBaggageHeader */;
      }
      if (result) {
        return result;
      } else {
        const tmp10 = getDynamicSamplingContextFromClient(spanContext.spanContext().traceId, client);
        const spanToJSONResult = require(6352) /* spanTimeInputToSeconds */.spanToJSON(rootSpan);
        const tmp14 = spanToJSONResult.data || {};
        const tmp17 = tmp14[require(undefined, 6362).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp17) {
          const _HermesInternal = HermesInternal;
          tmp10.sample_rate = "" + tmp17;
        }
        const description = spanToJSONResult.description;
        const obj6 = require(6352) /* spanTimeInputToSeconds */;
        if (tmp22) {
          tmp10.transaction = description;
        }
        tmp22 = "url" !== tmp14[require(undefined, 6362).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (obj7.hasTracingEnabled()) {
          const _String = String;
          tmp10.sampled = String(require(6352) /* spanTimeInputToSeconds */.spanIsSampled(rootSpan));
          const obj8 = require(6352) /* spanTimeInputToSeconds */;
        }
        client.emit("createDsc", tmp10, rootSpan);
        return tmp10;
      }
    }
    const obj3 = require(6352) /* spanTimeInputToSeconds */;
  } else {
    return {};
  }
  const obj = require(6374) /* getCurrentScope */;
}
const _frozenDsc = "_frozenDsc";
arg5.freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = require(6353) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
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
  return require(6360) /* parseBaggageHeader */.dynamicSamplingContextToSentryBaggageHeader(tmp);
};
