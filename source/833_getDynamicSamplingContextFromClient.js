// Module ID: 833
// Function ID: 9279
// Name: getDynamicSamplingContextFromClient
// Dependencies: [799, 834, 814, 825, 796, 816, 812, 831, 797]

// Module 833 (getDynamicSamplingContextFromClient)
let require = arg1;
const dependencyMap = arg6;
function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const obj = {};
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = require(834).DEFAULT_ENVIRONMENT;
  }
  obj.environment = DEFAULT_ENVIRONMENT;
  obj.release = options.release;
  obj.public_key = getOptions.getDsn() || {}.publicKey;
  obj.trace_id = trace_id;
  const tmp2 = getOptions.getDsn() || {};
  obj.org_id = require(814) /* dsnFromString */.extractOrgIdFromClient(getOptions);
  getOptions.emit("createDsc", obj);
  return obj;
}
function getDynamicSamplingContextFromSpan(spanContext) {
  function applyLocalSampleRateToDsc(result1) {
    let tmp = "number" !== typeof closure_0;
    if (tmp) {
      tmp = "string" !== typeof closure_0;
    }
    if (!tmp) {
      const _HermesInternal = HermesInternal;
      result1.sample_rate = "" + closure_0;
    }
    return result1;
  }
  const client = require(825) /* getCurrentScope */.getClient();
  if (client) {
    const rootSpan = require(796) /* convertSpanLinksForEnvelope */.getRootSpan(spanContext);
    const obj3 = require(796) /* convertSpanLinksForEnvelope */;
    const spanToJSONResult = require(796) /* convertSpanLinksForEnvelope */.spanToJSON(rootSpan);
    const data = spanToJSONResult.data;
    const traceState = rootSpan.spanContext().traceState;
    let value;
    if (null != traceState) {
      let str = "sentry.sample_rate";
      value = traceState.get("sentry.sample_rate");
    }
    if (null == value) {
      value = data[require(undefined, 816).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    }
    if (null == value) {
      value = data[require(undefined, 816).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
    }
    require = value;
    if (rootSpan[_frozenDsc]) {
      const result = applyLocalSampleRateToDsc(tmp11);
      return tmp11;
    } else {
      value = undefined;
      if (null != traceState) {
        value = traceState.get("sentry.dsc");
      }
      let result1 = value;
      if (value) {
        result1 = require(812) /* parseBaggageHeader */.baggageHeaderToDynamicSamplingContext(value);
        const obj6 = require(812) /* parseBaggageHeader */;
      }
      if (result1) {
        const result2 = applyLocalSampleRateToDsc(result1);
        return result1;
      } else {
        const tmp17 = getDynamicSamplingContextFromClient(spanContext.spanContext().traceId, client);
        const description = spanToJSONResult.description;
        if (tmp20) {
          tmp17.transaction = description;
        }
        tmp20 = "url" !== data[require(undefined, 816).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (obj7.hasSpansEnabled()) {
          const _String = String;
          tmp17.sampled = String(require(796) /* convertSpanLinksForEnvelope */.spanIsSampled(rootSpan));
          let value1;
          if (null != traceState) {
            value1 = traceState.get("sentry.sample_rand");
          }
          if (null == value1) {
            const scope = require(797) /* unwrapScopeFromWeakRef */.getCapturedScopesOnSpan(rootSpan).scope;
            str = undefined;
            if (null != scope) {
              str = scope.getPropagationContext().sampleRand.toString();
              const str5 = scope.getPropagationContext().sampleRand;
            }
            value1 = str;
            const obj9 = require(797) /* unwrapScopeFromWeakRef */;
          }
          tmp17.sample_rand = value1;
          const obj8 = require(796) /* convertSpanLinksForEnvelope */;
        }
        const result3 = applyLocalSampleRateToDsc(tmp17);
        client.emit("createDsc", tmp17, rootSpan);
        return tmp17;
      }
    }
    const obj5 = require(796) /* convertSpanLinksForEnvelope */;
  } else {
    return {};
  }
  const obj = require(825) /* getCurrentScope */;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _frozenDsc = "_frozenDsc";
arg5.freezeDscOnSpan = function freezeDscOnSpan(arg0, arg1) {
  const result = require(799) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _frozenDsc, arg1);
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
  return require(812) /* parseBaggageHeader */.dynamicSamplingContextToSentryBaggageHeader(tmp);
};
