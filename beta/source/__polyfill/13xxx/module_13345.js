// Module ID: 13345
// Function ID: 13346
// Dependencies: [13315, 13346, 13336, 13314, 13322, 13324, 13341]
// Exports: freezeDscOnSpan, getDynamicSamplingContextFromClient, getDynamicSamplingContextFromScope, spanToBaggageHeader

// Module 13345
import _mod13314 from "module_13314" /* 13314 */;
import _mod13315 from "module_13315" /* 13315 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13322 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 13324 */;
import _mod13336 from "module_13336" /* 13336 */;
import _mod13341 from "module_13341" /* 13341 */;

let tmp3;
const _mod13346 = tmp3(13346);
function getDynamicSamplingContextFromSpan(spanContext) {
  const obj = _mod13336;
  const client = obj.getClient();
  if (client) {
    const tmpResult = _mod13314;
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
        const dropUndefinedKeys = _mod13315.dropUndefinedKeys;
        _mod13315;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(13346).DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId };
        const dropUndefinedKeysResult = dropUndefinedKeys(obj2);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult8 = _mod13314;
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
        const tmpResult9 = _mod13341;
        if (tmpResult9.hasTracingEnabled()) {
          const _String = String;
          const tmpResult10 = _mod13314;
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

export function freezeDscOnSpan(arg0, arg1) {
  const obj = _mod13315;
  const result = obj.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
}
export function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const publicKey = (getOptions.getDsn() || {}).publicKey;
  getOptions.getDsn() || {};
  let DEFAULT_ENVIRONMENT = options.environment;
  const dropUndefinedKeys = _mod13315.dropUndefinedKeys;
  _mod13315;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod13346.DEFAULT_ENVIRONMENT;
  }
  const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id };
  const dropUndefinedKeysResult = dropUndefinedKeys(obj);
  getOptions.emit("createDsc", dropUndefinedKeysResult);
  return dropUndefinedKeysResult;
}
export function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const traceId = propagationContext.traceId;
    const options = getOptions.getOptions();
    const publicKey = (getOptions.getDsn() || {}).publicKey;
    getOptions.getDsn() || {};
    let DEFAULT_ENVIRONMENT = options.environment;
    const dropUndefinedKeys = _mod13315.dropUndefinedKeys;
    _mod13315;
    const tmp5 = require;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = tmp5(13346).DEFAULT_ENVIRONMENT;
    }
    const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId };
    const dropUndefinedKeysResult = dropUndefinedKeys(obj);
    getOptions.emit("createDsc", dropUndefinedKeysResult);
    dsc = dropUndefinedKeysResult;
  }
  return dsc;
}
export { getDynamicSamplingContextFromSpan };
export function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  const obj = BAGGAGE_HEADER_NAME;
  return obj.dynamicSamplingContextToSentryBaggageHeader(tmp);
}
