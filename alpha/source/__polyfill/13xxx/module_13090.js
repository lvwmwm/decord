// Module ID: 13090
// Function ID: 13091
// Dependencies: [13060, 13091, 13081, 13059, 13067, 13069, 13086]
// Exports: freezeDscOnSpan, getDynamicSamplingContextFromClient, getDynamicSamplingContextFromScope, spanToBaggageHeader

// Module 13090
import _mod13060 from "module_13060" /* 13060 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13067 */;
import _mod13081 from "module_13081" /* 13081 */;

const _mod13091 = tmp3(13091);
require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  const client = _mod13081.getClient();
  if (client) {
    const rootSpan = tmp(13059).getRootSpan(spanContext);
    if (rootSpan[_frozenDsc]) {
      return tmp5;
    } else {
      const traceState = rootSpan.spanContext().traceState;
      value = traceState;
      if (traceState) {
        value = traceState.get("sentry.dsc");
      }
      let result = value;
      if (value) {
        result = tmp(13067).baggageHeaderToDynamicSamplingContext(value);
        const tmpResult6 = tmp(13067);
      }
      if (result) {
        return result;
      } else {
        const options = client.getOptions();
        const tmp9 = client.getDsn() || {};
        let DEFAULT_ENVIRONMENT = options.environment;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(13091).DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: tmp9.publicKey, trace_id: spanContext.spanContext().traceId };
        const dropUndefinedKeysResult = tmp(13060).dropUndefinedKeys(obj2);
        client.emit("createDsc", dropUndefinedKeysResult);
        const tmpResult7 = tmp(13060);
        const spanToJSONResult = tmp(13059).spanToJSON(rootSpan);
        const tmp13 = spanToJSONResult.data || {};
        const tmp14 = tmp13[tmp(undefined, 13069).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
        if (null != tmp14) {
          const _HermesInternal = HermesInternal;
          dropUndefinedKeysResult.sample_rate = "" + tmp14;
        }
        const description = spanToJSONResult.description;
        const tmpResult8 = tmp(13059);
        if (tmp17) {
          dropUndefinedKeysResult.transaction = description;
        }
        tmp17 = "url" !== tmp13[tmp(undefined, 13069).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult9.hasTracingEnabled()) {
          const _String = String;
          dropUndefinedKeysResult.sampled = String(tmp(13059).spanIsSampled(rootSpan));
          const tmpResult10 = tmp(13059);
        }
        client.emit("createDsc", dropUndefinedKeysResult, rootSpan);
        return dropUndefinedKeysResult;
      }
    }
    const tmpResult = tmp(13059);
  } else {
    return {};
  }
}
const _frozenDsc = "_frozenDsc";

export const freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = _mod13060.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const tmp2 = getOptions.getDsn() || {};
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod13091.DEFAULT_ENVIRONMENT;
  }
  const dropUndefinedKeysResult = _mod13060.dropUndefinedKeys({ environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: tmp2.publicKey, trace_id });
  getOptions.emit("createDsc", dropUndefinedKeysResult);
  return dropUndefinedKeysResult;
};
export const getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    const options = getOptions.getOptions();
    const tmp4 = getOptions.getDsn() || {};
    const tmp5 = require;
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = tmp5(13091).DEFAULT_ENVIRONMENT;
    }
    const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: tmp4.publicKey, trace_id: propagationContext.traceId };
    const dropUndefinedKeysResult = _mod13060.dropUndefinedKeys(obj2);
    getOptions.emit("createDsc", dropUndefinedKeysResult);
    dsc = dropUndefinedKeysResult;
  }
  return dsc;
};
export { getDynamicSamplingContextFromSpan };
export const spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(tmp);
};
