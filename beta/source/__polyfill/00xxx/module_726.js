// Module ID: 726
// Function ID: 727
// Dependencies: [691, 727, 706, 717, 688, 708, 704, 724, 689]
// Exports: freezeDscOnSpan, getDynamicSamplingContextFromClient, getDynamicSamplingContextFromScope, spanToBaggageHeader

// Module 726
import _mod691 from "module_691" /* 691 */;
import MAX_BAGGAGE_STRING_LENGTH from "MAX_BAGGAGE_STRING_LENGTH" /* 704 */;
import _mod706 from "module_706" /* 706 */;
import _mod717 from "module_717" /* 717 */;
import DEFAULT_ENVIRONMENT2 from "DEFAULT_ENVIRONMENT" /* 727 */;

require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromSpan(spanContext) {
  const client = _mod717.getClient();
  if (client) {
    const rootSpan = tmp(688).getRootSpan(spanContext);
    const tmpResult = tmp(688);
    const spanToJSONResult = tmp(688).spanToJSON(rootSpan);
    const data = spanToJSONResult.data;
    const traceState = rootSpan.spanContext().traceState;
    value = undefined;
    if (traceState != null) {
      value = traceState.get("sentry.sample_rate");
    }
    if (value == null) {
      value = data[tmp(undefined, 708).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    }
    if (value == null) {
      value = data[tmp(undefined, 708).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
    }
    if (rootSpan[_frozenDsc]) {
      let tmp23 = typeof value !== "number";
      if (typeof value !== "number") {
        tmp23 = typeof value !== "string";
      }
      if (!tmp23) {
        const _HermesInternal3 = HermesInternal;
        tmp8.sample_rate = "" + value;
      }
      return tmp8;
    } else {
      value3 = undefined;
      if (traceState != null) {
        value3 = traceState.get("sentry.dsc");
      }
      let result = value3;
      if (value3) {
        result = tmp(704).baggageHeaderToDynamicSamplingContext(value3);
        const tmpResult8 = tmp(704);
      }
      if (result) {
        let tmp21 = typeof value !== "number";
        if (typeof value !== "number") {
          tmp21 = typeof value !== "string";
        }
        if (!tmp21) {
          const _HermesInternal2 = HermesInternal;
          result.sample_rate = "" + value;
        }
        return result;
      } else {
        options = client.getOptions();
        let DEFAULT_ENVIRONMENT = options.environment;
        if (!DEFAULT_ENVIRONMENT) {
          DEFAULT_ENVIRONMENT = tmp(727).DEFAULT_ENVIRONMENT;
        }
        const obj2 = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: client.getDsn() || {}.publicKey, trace_id: spanContext.spanContext().traceId, org_id: null };
        const tmp12 = client.getDsn() || {};
        obj2.org_id = tmp(706).extractOrgIdFromClient(client);
        client.emit("createDsc", obj2);
        const description = spanToJSONResult.description;
        const tmpResult9 = tmp(706);
        if (tmp14) {
          obj2.transaction = description;
        }
        tmp14 = "url" !== data[tmp(undefined, 708).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (tmpResult10.hasSpansEnabled()) {
          const _String = String;
          obj2.sampled = String(tmp(688).spanIsSampled(rootSpan));
          let value4;
          if (traceState != null) {
            value4 = traceState.get("sentry.sample_rand");
          }
          if (value4 == null) {
            const scope = tmp(689).getCapturedScopesOnSpan(rootSpan).scope;
            let str1;
            if (scope != null) {
              str1 = scope.getPropagationContext().sampleRand.toString();
              const str6 = scope.getPropagationContext().sampleRand;
            }
            value4 = str1;
            const tmpResult12 = tmp(689);
          }
          obj2.sample_rand = value4;
          const tmpResult11 = tmp(688);
        }
        let tmp18 = typeof value !== "number";
        if (typeof value !== "number") {
          tmp18 = typeof value !== "string";
        }
        if (!tmp18) {
          const _HermesInternal = HermesInternal;
          obj2.sample_rate = "" + value;
        }
        client.emit("createDsc", obj2, rootSpan);
        return obj2;
      }
    }
    const tmpResult7 = tmp(688);
  } else {
    return {};
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _frozenDsc = "_frozenDsc";

export const freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = _mod691.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
};
export const getDynamicSamplingContextFromClient = function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  options = getOptions.getOptions();
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
  }
  const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: getOptions.getDsn() || {}.publicKey, trace_id, org_id: null };
  const tmp2 = getOptions.getDsn() || {};
  obj.org_id = _mod706.extractOrgIdFromClient(getOptions);
  getOptions.emit("createDsc", obj);
  return obj;
};
export const getDynamicSamplingContextFromScope = function getDynamicSamplingContextFromScope(getOptions, getPropagationContext) {
  const propagationContext = getPropagationContext.getPropagationContext();
  let dsc = propagationContext.dsc;
  if (!dsc) {
    options = getOptions.getOptions();
    let DEFAULT_ENVIRONMENT = options.environment;
    if (!DEFAULT_ENVIRONMENT) {
      DEFAULT_ENVIRONMENT = DEFAULT_ENVIRONMENT2.DEFAULT_ENVIRONMENT;
    }
    const obj = { environment: DEFAULT_ENVIRONMENT, release: options.release, public_key: getOptions.getDsn() || {}.publicKey, trace_id: propagationContext.traceId, org_id: null };
    const tmp4 = getOptions.getDsn() || {};
    obj.org_id = _mod706.extractOrgIdFromClient(getOptions);
    getOptions.emit("createDsc", obj);
    dsc = obj;
  }
  return dsc;
};
export { getDynamicSamplingContextFromSpan };
export const spanToBaggageHeader = function spanToBaggageHeader(arg0) {
  const tmp = getDynamicSamplingContextFromSpan(arg0);
  return MAX_BAGGAGE_STRING_LENGTH.dynamicSamplingContextToSentryBaggageHeader(tmp);
};
