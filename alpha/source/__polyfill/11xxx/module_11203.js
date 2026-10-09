// Module ID: 11203
// Function ID: 11204
// Dependencies: [11173, 11204, 11194, 11172, 11180, 11182, 11199]
// Exports: freezeDscOnSpan, getDynamicSamplingContextFromClient, getDynamicSamplingContextFromScope, spanToBaggageHeader

// Module 11203
import _mod11172 from "module_11172" /* 11172 */;
import _mod11173 from "module_11173" /* 11173 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11180 */;
import _mod11182 from "module_11182" /* 11182 */;
import _mod11194 from "module_11194" /* 11194 */;
import _mod11199 from "module_11199" /* 11199 */;

let tmp3;
const _mod11204 = tmp3(11204);
function getDynamicSamplingContextFromSpan(spanContext) {
  const obj = _mod11194;
  const client = obj.getClient();
  if (client) {
    const tmpResult = _mod11172;
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
        const dropUndefinedKeys = _mod11173.dropUndefinedKeys;
        _mod11173;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(11204).DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: publicKey, trace_id: traceId };
        const dropUndefinedKeysResult = dropUndefinedKeys(obj2);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult8 = _mod11172;
        const spanToJSONResult = tmpResult8.spanToJSON(rootSpan);
        const tmp14 = spanToJSONResult.data || {};
        const tmp15 = tmp14[_mod11182.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp15) {
          const _HermesInternal = HermesInternal;
          dropUndefinedKeysResult.sample_rate = "" + tmp15;
        }
        const description = spanToJSONResult.description;
        const tmp18 = "url" !== tmp14[_mod11182.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmp18) {
          dropUndefinedKeysResult.transaction = description;
        }
        const tmpResult9 = _mod11199;
        if (tmpResult9.hasTracingEnabled()) {
          const _String = String;
          const tmpResult10 = _mod11172;
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
  const obj = _mod11173;
  const result = obj.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const publicKey = (getOptions.getDsn() || {}).publicKey;
  getOptions.getDsn() || {};
  let DEFAULT_ENVIRONMENT = options.environment;
  const dropUndefinedKeys = _mod11173.dropUndefinedKeys;
  _mod11173;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod11204.DEFAULT_ENVIRONMENT;
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
    const dropUndefinedKeys = _mod11173.dropUndefinedKeys;
    _mod11173;
    const tmp5 = require;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = tmp5(11204).DEFAULT_ENVIRONMENT;
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
