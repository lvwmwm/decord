// Module ID: 12334
// Function ID: 12335
// Dependencies: [12304, 12335, 12325, 12303, 12311, 12313, 12330]
// Exports: freezeDscOnSpan, getDynamicSamplingContextFromClient, getDynamicSamplingContextFromScope, spanToBaggageHeader

// Module 12334
import _mod12303 from "module_12303" /* 12303 */;
import _mod12304 from "module_12304" /* 12304 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12311 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 12313 */;
import _mod12325 from "module_12325" /* 12325 */;
import _mod12330 from "module_12330" /* 12330 */;

let tmp3;
const _mod12335 = tmp3(12335);
function getDynamicSamplingContextFromSpan(spanContext) {
  const obj = _mod12325;
  const client = obj.getClient();
  if (client) {
    const tmpResult = _mod12303;
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
        const dropUndefinedKeys = _mod12304.dropUndefinedKeys;
        _mod12304;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(12335).DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId };
        const dropUndefinedKeysResult = dropUndefinedKeys(obj2);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult8 = _mod12303;
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
        const tmpResult9 = _mod12330;
        if (tmpResult9.hasTracingEnabled()) {
          const _String = String;
          const tmpResult10 = _mod12303;
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
  const obj = _mod12304;
  const result = obj.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const publicKey = (getOptions.getDsn() || {}).publicKey;
  getOptions.getDsn() || {};
  let DEFAULT_ENVIRONMENT = options.environment;
  const dropUndefinedKeys = _mod12304.dropUndefinedKeys;
  _mod12304;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod12335.DEFAULT_ENVIRONMENT;
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
    const dropUndefinedKeys = _mod12304.dropUndefinedKeys;
    _mod12304;
    const tmp5 = require;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = tmp5(12335).DEFAULT_ENVIRONMENT;
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
