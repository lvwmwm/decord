// Module ID: 833
// Function ID: 9277
// Name: getDynamicSamplingContextFromClient
// Dependencies: []

// Module 833 (getDynamicSamplingContextFromClient)
function getDynamicSamplingContextFromClient(trace_id, getOptions) {
  const options = getOptions.getOptions();
  const obj = {};
  let DEFAULT_ENVIRONMENT = options.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = getOptions(arg6[1]).DEFAULT_ENVIRONMENT;
  }
  obj.environment = DEFAULT_ENVIRONMENT;
  obj.release = options.release;
  obj.public_key = getOptions.getDsn() || {}.publicKey;
  obj.trace_id = trace_id;
  const tmp2 = getOptions.getDsn() || {};
  obj.org_id = getOptions(arg6[2]).extractOrgIdFromClient(getOptions);
  getOptions.emit("createDsc", obj);
  return obj;
}
function getDynamicSamplingContextFromSpan(spanContext) {
  function applyLocalSampleRateToDsc(result1) {
    let tmp = "number" !== typeof value;
    if (tmp) {
      tmp = "string" !== typeof value;
    }
    if (!tmp) {
      const _HermesInternal = HermesInternal;
      result1.sample_rate = "" + value;
    }
    return result1;
  }
  const client = arg1(arg6[3]).getClient();
  if (client) {
    const rootSpan = arg1(arg6[4]).getRootSpan(spanContext);
    const obj3 = arg1(arg6[4]);
    const spanToJSONResult = arg1(arg6[4]).spanToJSON(rootSpan);
    const data = spanToJSONResult.data;
    const traceState = rootSpan.spanContext().traceState;
    let value;
    if (null != traceState) {
      let str = "sentry.sample_rate";
      value = traceState.get("sentry.sample_rate");
    }
    if (null == value) {
      value = data[closure_0(undefined, closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
    }
    if (null == value) {
      value = data[closure_0(undefined, closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
    }
    const arg1 = value;
    if (rootSpan[closure_2]) {
      const result = applyLocalSampleRateToDsc(tmp11);
      return tmp11;
    } else {
      value = undefined;
      if (null != traceState) {
        value = traceState.get("sentry.dsc");
      }
      let result1 = value;
      if (value) {
        result1 = arg1(arg6[6]).baggageHeaderToDynamicSamplingContext(value);
        const obj6 = arg1(arg6[6]);
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
        const tmp20 = "url" !== data[closure_0(undefined, closure_1[5]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && description;
        if (obj7.hasSpansEnabled()) {
          const _String = String;
          tmp17.sampled = String(arg1(arg6[4]).spanIsSampled(rootSpan));
          let value1;
          if (null != traceState) {
            value1 = traceState.get("sentry.sample_rand");
          }
          if (null == value1) {
            const scope = arg1(arg6[8]).getCapturedScopesOnSpan(rootSpan).scope;
            str = undefined;
            if (null != scope) {
              str = scope.getPropagationContext().sampleRand.toString();
              const str5 = scope.getPropagationContext().sampleRand;
            }
            value1 = str;
            const obj9 = arg1(arg6[8]);
          }
          tmp17.sample_rand = value1;
          const obj8 = arg1(arg6[4]);
        }
        const result3 = applyLocalSampleRateToDsc(tmp17);
        client.emit("createDsc", tmp17, rootSpan);
        return tmp17;
      }
    }
    const obj5 = arg1(arg6[4]);
  } else {
    return {};
  }
  const obj = arg1(arg6[3]);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
  return arg1(arg6[6]).dynamicSamplingContextToSentryBaggageHeader(tmp);
};
