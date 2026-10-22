// Module ID: 12556
// Function ID: 12557
// Dependencies: [12526, 12557, 12547, 12525, 12533, 12535, 12552]
// Exports: freezeDscOnSpan, getDynamicSamplingContextFromClient, getDynamicSamplingContextFromScope, spanToBaggageHeader

// Module 12556
import _mod12525 from "module_12525" /* 12525 */;
import _mod12526 from "module_12526" /* 12526 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12533 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 12535 */;
import _mod12547 from "module_12547" /* 12547 */;
import _mod12552 from "module_12552" /* 12552 */;

let tmp3;
const _mod12557 = tmp3(12557);
function getDynamicSamplingContextFromSpan(spanContext) {
  const obj = _mod12547;
  const client = obj.getClient();
  if (client) {
    const tmpResult = _mod12525;
    const rootSpan = tmpResult.getRootSpan(spanContext);
    if (rootSpan[_frozenDsc]) {
      return rootSpan[_frozenDsc];
    } else {
      const traceState = rootSpan.spanContext().traceState;
      const value = traceState && traceState.get("sentry.dsc");
      let result = value;
      if (result) {
        const tmpResult6 = BAGGAGE_HEADER_NAME;
        result = tmpResult6.baggageHeaderToDynamicSamplingContext(value);
      }
      if (result) {
        return result;
      } else {
        const traceId = spanContext.spanContext().traceId;
        const options = client.getOptions();
        const publicKey = (client.getDsn() || {}).publicKey;
        client.getDsn() || {};
        let DEFAULT_ENVIRONMENT = options.environment;
        const dropUndefinedKeys = _mod12526.dropUndefinedKeys;
        _mod12526;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(12557).DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId };
        const dropUndefinedKeysResult = dropUndefinedKeys(obj2);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult8 = _mod12525;
        const spanToJSONResult = tmpResult8.spanToJSON(rootSpan);
        const tmp14 = spanToJSONResult.data || {};
        const tmp15 = tmp14[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp15) {
          const _HermesInternal = HermesInternal;
          dropUndefinedKeysResult.sample_rate = "" + tmp15;
        }
        const description = spanToJSONResult.description;
        const tmp18 = "url" !== tmp14[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmp18) {
          dropUndefinedKeysResult.transaction = description;
        }
        const tmpResult9 = _mod12552;
        if (tmpResult9.hasTracingEnabled()) {
          const _String = String;
          const tmpResult10 = _mod12525;
          dropUndefinedKeysResult.sampled = String(tmpResult10.spanIsSampled(rootSpan));
        }
        client.emit("createDsc", dropUndefinedKeysResult, rootSpan);
        return dropUndefinedKeysResult;
      }
    }
  } else {
    return {};
  }
}
const _frozenDsc = "_frozenDsc";

export const freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const obj = _mod12526;
  const result = obj.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const publicKey = (getOptions.getDsn() || {}).publicKey;
  getOptions.getDsn() || {};
  let DEFAULT_ENVIRONMENT = options.environment;
  const dropUndefinedKeys = _mod12526.dropUndefinedKeys;
  _mod12526;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod12557.DEFAULT_ENVIRONMENT;
  }
  const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id };
  const dropUndefinedKeysResult = dropUndefinedKeys(obj);
  getOptions.emit("createDsc", dropUndefinedKeysResult);
  return dropUndefinedKeysResult;
};
export const getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const traceId = propagationContext.traceId;
    const options = getOptions.getOptions();
    const publicKey = (getOptions.getDsn() || {}).publicKey;
    getOptions.getDsn() || {};
    let DEFAULT_ENVIRONMENT = options.environment;
    const dropUndefinedKeys = _mod12526.dropUndefinedKeys;
    _mod12526;
    const tmp5 = require;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = tmp5(12557).DEFAULT_ENVIRONMENT;
    }
    const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId };
    const dropUndefinedKeysResult = dropUndefinedKeys(obj);
    getOptions.emit("createDsc", dropUndefinedKeysResult);
    dsc = dropUndefinedKeysResult;
  }
  return dsc;
};
export { getDynamicSamplingContextFromSpan };
export const spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  const obj = BAGGAGE_HEADER_NAME;
  return obj.dynamicSamplingContextToSentryBaggageHeader(tmp);
};
