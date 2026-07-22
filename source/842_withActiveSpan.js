// Module ID: 842
// Function ID: 9359
// Name: withActiveSpan
// Dependencies: []
// Exports: continueTrace, startInactiveSpan, startSpan, startSpanManual, suppressTracing

// Module 842 (withActiveSpan)
function withActiveSpan(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  const obj = getAcs();
  if (obj.withActiveSpan) {
    let withActiveSpanResult = obj.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = require(dependencyMap[2]).withScope((arg0) => {
      arg0(arg1[4])._setSpanForScope(arg0, arg0);
      return arg1(arg0);
    });
    const obj2 = require(dependencyMap[2]);
  }
  return withActiveSpanResult;
}
function startNewTrace(arg0) {
  const require = arg0;
  return require(dependencyMap[2]).withScope((setPropagationContext) => {
    const obj = { traceId: setPropagationContext(closure_1[12]).generateTraceId() };
    const obj2 = setPropagationContext(closure_1[12]);
    obj.sampleRand = setPropagationContext(closure_1[13]).safeMathRandom();
    const result = setPropagationContext.setPropagationContext(obj);
    if (setPropagationContext(closure_1[14]).DEBUG_BUILD) {
      const debug = setPropagationContext(closure_1[15]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    return callback(null, setPropagationContext);
  });
}
function createChildOrRootSpan(arg0) {
  let forceTransaction;
  let parentSpan;
  let sampled;
  let scope;
  let spanArguments;
  let spanId;
  let spanId2;
  let traceId;
  let traceId2;
  ({ parentSpan, spanArguments, forceTransaction, scope } = arg0);
  let obj = require(dependencyMap[16]);
  if (obj.hasSpansEnabled()) {
    const isolationScope = tmp(tmp2[2]).getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        let spanIsSampledResult = !scope.getScopeData().sdkProcessingMetadata[closure_4];
        if (spanIsSampledResult) {
          spanIsSampledResult = require(dependencyMap[6]).spanIsSampled(parentSpan);
          const obj7 = require(dependencyMap[6]);
        }
        if (spanIsSampledResult) {
          const SentrySpan = tmp17(tmp18[22]).SentrySpan;
          const _Object2 = Object;
          obj = { parentSpanId: spanId, traceId, sampled: spanIsSampledResult };
          const prototype3 = SentrySpan.prototype;
          let sentrySpan = new SentrySpan(Object.assign({}, spanArguments, obj));
        } else {
          const SentryNonRecordingSpan2 = tmp17(tmp18[3]).SentryNonRecordingSpan;
          obj = { traceId };
          const prototype2 = SentryNonRecordingSpan2.prototype;
          sentrySpan = new SentryNonRecordingSpan2(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        require(dependencyMap[6]).addChildSpanToSpan(parentSpan, sentrySpan);
        const obj10 = require(dependencyMap[6]);
        const client = require(dependencyMap[2]).getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const obj11 = require(dependencyMap[2]);
        require(dependencyMap[6]).addChildSpanToSpan(parentSpan, sentrySpan);
        const obj13 = require(dependencyMap[6]);
      }
      require(dependencyMap[18]).logSpanStart(sentrySpan);
      const obj20 = require(dependencyMap[18]);
      const result = require(dependencyMap[19]).setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = require(dependencyMap[17]).getDynamicSamplingContextFromSpan(parentSpan);
      const obj16 = require(dependencyMap[17]);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const _Object5 = Object;
      const obj1 = { traceId: traceId2, parentSpanId: spanId2 };
      const obj17 = require(dependencyMap[6]);
      const tmp49 = _startRootSpan(Object.assign(obj1, spanArguments), scope, require(dependencyMap[6]).spanIsSampled(parentSpan));
      const spanIsSampledResult1 = require(dependencyMap[6]).spanIsSampled(parentSpan);
      require(dependencyMap[17]).freezeDscOnSpan(tmp49, dynamicSamplingContextFromSpan);
      sentrySpan = tmp49;
      const obj19 = require(dependencyMap[17]);
    } else {
      const _Object3 = Object;
      const propagationContext = isolationScope.getPropagationContext();
      const merged = Object.assign({}, propagationContext, scope.getPropagationContext());
      const dsc = merged.dsc;
      const _Object4 = Object;
      let obj2 = {};
      ({ traceId: obj14.traceId, parentSpanId: obj14.parentSpanId, sampled } = merged);
      const tmp38 = _startRootSpan(Object.assign(obj2, spanArguments), scope, sampled);
      sentrySpan = tmp38;
      if (dsc) {
        require(dependencyMap[17]).freezeDscOnSpan(tmp38, dsc);
        sentrySpan = tmp38;
        const obj15 = require(dependencyMap[17]);
      }
    }
    const tmpResult = tmp(tmp2[2]);
  } else {
    const SentryNonRecordingSpan = tmp(tmp2[3]).SentryNonRecordingSpan;
    const prototype = SentryNonRecordingSpan.prototype;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan();
    if (forceTransaction) {
      const _Object = Object;
      let obj3 = { "Null": "r", nm: "isArray", transaction: spanArguments.name };
      obj2 = require(dependencyMap[17]);
      const merged1 = Object.assign(obj3, obj2.getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      obj3 = require(dependencyMap[17]);
      obj3.freezeDscOnSpan(sentryNonRecordingSpan, merged1);
    }
    return sentryNonRecordingSpan;
  }
}
function parseSentrySpanArguments(experimental) {
  const merged = Object.assign({ isStandalone: experimental.experimental || {}.standalone }, experimental);
  if (experimental.startTime) {
    const _Object = Object;
    const merged1 = Object.assign({}, merged);
    merged1.startTimestamp = require(dependencyMap[6]).spanTimeInputToSeconds(experimental.startTime);
    delete r0.startTime;
    return merged1;
  } else {
    return merged;
  }
  const obj = { isStandalone: experimental.experimental || {}.standalone };
  const tmp = experimental.experimental || {};
}
function getAcs() {
  const mainCarrier = require(dependencyMap[8]).getMainCarrier();
  const obj = require(dependencyMap[8]);
  return require(dependencyMap[9]).getAsyncContextStrategy(mainCarrier);
}
function _startRootSpan(name, getPropagationContext) {
  let tmp = arg2;
  let obj = require(dependencyMap[2]);
  const client = obj.getClient();
  let options;
  if (null != client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  name = name.name;
  let str = "";
  if (undefined !== name) {
    str = name;
  }
  obj = { spanAttributes: Object.assign({}, name.attributes), spanName: str, parentSampled: tmp };
  if (null != client) {
    obj = { decision: false };
    client.emit("beforeSampling", obj, obj);
  }
  const parentSampled = obj.parentSampled;
  if (null != parentSampled) {
    tmp = parentSampled;
  }
  const spanAttributes = obj.spanAttributes;
  const propagationContext = getPropagationContext.getPropagationContext();
  if (getPropagationContext.getScopeData().sdkProcessingMetadata[closure_4]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    const obj1 = { name: str, parentSampled: tmp, attributes: spanAttributes };
    const obj6 = require(dependencyMap[20]);
    const dsc = propagationContext.dsc;
    let sample_rate;
    if (null != dsc) {
      sample_rate = dsc.sample_rate;
    }
    obj1.parentSampleRate = require(dependencyMap[21]).parseSampleRate(sample_rate);
    sampleSpanResult = obj6.sampleSpan(options, obj1, propagationContext.sampleRand);
    const obj8 = require(dependencyMap[21]);
  }
  const tmp8 = callback(sampleSpanResult, 3);
  const first = tmp8[0];
  const obj2 = {};
  let tmp13;
  if (undefined !== tmp8[1]) {
    if (tmp8[2]) {
      tmp13 = tmp10;
    }
  }
  obj2.attributes = Object.assign(callback2(callback2({}, require(dependencyMap[23]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), require(dependencyMap[23]).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp13), spanAttributes);
  obj2.sampled = first;
  const sentrySpan = new require(dependencyMap[22]).SentrySpan(Object.assign({}, name, obj2));
  if (tmp15) {
    if (require(dependencyMap[14]).DEBUG_BUILD) {
      const debug = require(dependencyMap[15]).debug;
      debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
    }
    client.recordDroppedEvent("sample_rate", "transaction");
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
function getParentSpan(arg0, arg1) {
  if (arg1) {
    return arg1;
  } else if (null !== arg1) {
    const _getSpanForScopeResult = require(dependencyMap[4])._getSpanForScope(arg0);
    if (_getSpanForScopeResult) {
      const client = require(dependencyMap[2]).getClient();
      if (client) {
        let options = client.getOptions();
      } else {
        options = {};
      }
      let rootSpan = _getSpanForScopeResult;
      if (options.parentSpanIsAlwaysRootSpan) {
        rootSpan = require(dependencyMap[6]).getRootSpan(_getSpanForScopeResult);
        const obj5 = require(dependencyMap[6]);
      }
      return rootSpan;
    }
    const obj = require(dependencyMap[4]);
  }
}
function getActiveSpanWrapper(arg0) {
  const require = arg0;
  return undefined !== arg0 ? (arg0) => callback(arg0, arg0) : (arg0) => arg0();
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = function continueTrace(arg0, arg1) {
  let baggage;
  const require = arg1;
  const mainCarrier = require(dependencyMap[8]).getMainCarrier();
  const obj = require(dependencyMap[8]);
  const asyncContextStrategy = require(dependencyMap[9]).getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: closure_1, baggage } = arg0);
    let closure_2 = baggage;
    const client = require(dependencyMap[2]).getClient();
    const obj4 = require(dependencyMap[2]);
    const result = require(dependencyMap[10]).baggageHeaderToDynamicSamplingContext(baggage);
    if (client) {
      let org_id;
      if (null != result) {
        org_id = result.org_id;
      }
      if (!obj6.shouldContinueTrace(client, org_id)) {
        let withScopeResult = startNewTrace(arg1);
      }
      return withScopeResult;
    }
    const obj5 = require(dependencyMap[10]);
    withScopeResult = require(dependencyMap[2]).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(arg1(closure_1[11]).propagationContextFromHeaders(closure_1, baggage));
      const obj = arg1(closure_1[11]);
      arg1(closure_1[4])._setSpanForScope(setPropagationContext, undefined);
      return arg1();
    });
    const obj7 = require(dependencyMap[2]);
  }
};
export const startInactiveSpan = function startInactiveSpan(scope) {
  let parentSpan;
  const require = scope;
  const obj = getAcs();
  if (obj.startInactiveSpan) {
    return obj.startInactiveSpan(scope);
  } else {
    let closure_1 = parseSentrySpanArguments(scope);
    ({ forceTransaction: closure_2, parentSpan } = scope);
    let closure_3 = parentSpan;
    if (scope.scope) {
      let fn = (arg0) => arg0(closure_1[2]).withScope(arg0.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? (arg0) => callback(parentSpan, arg0) : (arg0) => arg0();
    }
    return fn(() => {
      let obj = arg0(closure_1[2]);
      const currentScope = obj.getCurrentScope();
      const tmp2 = callback3(currentScope, parentSpan);
      if (arg0.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = arg0(closure_1[3]).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      obj = { parentSpan: tmp2, spanArguments: closure_1, forceTransaction: closure_2, scope: currentScope };
      sentryNonRecordingSpan = callback2(obj);
    });
  }
};
export { startNewTrace };
export const startSpan = function startSpan(arg0, arg1) {
  let scope;
  const require = arg0;
  const dependencyMap = arg1;
  const obj = getAcs();
  if (obj.startSpan) {
    return obj.startSpan(arg0, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(arg0);
    ({ forceTransaction: closure_3, parentSpan: closure_4, scope } = arg0);
    let cloneResult;
    if (null != scope) {
      cloneResult = scope.clone();
    }
    return require(dependencyMap[2]).withScope(cloneResult, () => callback(closure_4)(() => {
      let obj = sentryNonRecordingSpan(closure_1[2]);
      const currentScope = obj.getCurrentScope();
      const tmp2 = callback2(currentScope, closure_4);
      if (sentryNonRecordingSpan.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = sentryNonRecordingSpan(closure_1[3]).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        sentryNonRecordingSpan(closure_1[4])._setSpanForScope(currentScope, sentryNonRecordingSpan);
        const obj3 = sentryNonRecordingSpan(closure_1[4]);
        return sentryNonRecordingSpan(closure_1[5]).handleCallbackErrors(() => callback(sentryNonRecordingSpan), () => {
          let obj = sentryNonRecordingSpan(closure_1[6]);
          const status = obj.spanToJSON(sentryNonRecordingSpan).status;
          let tmp = !sentryNonRecordingSpan.isRecording();
          if (!tmp) {
            let tmp2 = status;
            if (status) {
              tmp2 = "ok" !== status;
            }
            tmp = tmp2;
          }
          if (!tmp) {
            obj = { code: sentryNonRecordingSpan(closure_1[7]).SPAN_STATUS_ERROR, message: "internal_error" };
            sentryNonRecordingSpan.setStatus(obj);
          }
        }, () => {
          sentryNonRecordingSpan.end();
        });
      }
      obj = { parentSpan: tmp2, spanArguments: closure_2, forceTransaction: closure_3, scope: currentScope };
      sentryNonRecordingSpan = callback(obj);
    }));
  }
};
export const startSpanManual = function startSpanManual(arg0, arg1) {
  let scope;
  const require = arg0;
  const dependencyMap = arg1;
  const obj = getAcs();
  if (obj.startSpanManual) {
    return obj.startSpanManual(arg0, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(arg0);
    ({ forceTransaction: closure_3, parentSpan: closure_4, scope } = arg0);
    let cloneResult;
    if (null != scope) {
      cloneResult = scope.clone();
    }
    return require(dependencyMap[2]).withScope(cloneResult, () => callback(closure_4)(() => {
      let obj = sentryNonRecordingSpan(closure_1[2]);
      const currentScope = obj.getCurrentScope();
      const tmp2 = callback2(currentScope, closure_4);
      if (sentryNonRecordingSpan.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = sentryNonRecordingSpan(closure_1[3]).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        sentryNonRecordingSpan(closure_1[4])._setSpanForScope(currentScope, sentryNonRecordingSpan);
        const obj3 = sentryNonRecordingSpan(closure_1[4]);
        return sentryNonRecordingSpan(closure_1[5]).handleCallbackErrors(() => callback(sentryNonRecordingSpan, () => closure_0.end()), () => {
          let obj = sentryNonRecordingSpan(closure_1[6]);
          const status = obj.spanToJSON(sentryNonRecordingSpan).status;
          let tmp = !sentryNonRecordingSpan.isRecording();
          if (!tmp) {
            let tmp2 = status;
            if (status) {
              tmp2 = "ok" !== status;
            }
            tmp = tmp2;
          }
          if (!tmp) {
            obj = { code: sentryNonRecordingSpan(closure_1[7]).SPAN_STATUS_ERROR, message: "internal_error" };
            sentryNonRecordingSpan.setStatus(obj);
          }
        });
      }
      obj = { parentSpan: tmp2, spanArguments: closure_2, forceTransaction: closure_3, scope: currentScope };
      sentryNonRecordingSpan = callback(obj);
    }));
  }
};
export const suppressTracing = function suppressTracing(arg0) {
  const require = arg0;
  const obj = getAcs();
  if (obj.suppressTracing) {
    let suppressTracingResult = obj.suppressTracing(arg0);
  } else {
    suppressTracingResult = require(dependencyMap[2]).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata(callback({}, closure_4, true));
      const result1 = setSDKProcessingMetadata.setSDKProcessingMetadata(callback({}, closure_4, undefined));
      return setSDKProcessingMetadata();
    });
    const obj2 = require(dependencyMap[2]);
  }
  return suppressTracingResult;
};
export { withActiveSpan };
