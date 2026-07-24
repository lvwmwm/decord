// Module ID: 842
// Function ID: 9361
// Name: withActiveSpan
// Dependencies: [57, 77, 825, 832, 821, 843, 796, 817, 802, 818, 812, 811, 806, 808, 800, 801, 831, 833, 837, 797, 844, 813, 836, 816]
// Exports: continueTrace, startInactiveSpan, startSpan, startSpanManual, suppressTracing

// Module 842 (withActiveSpan)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";

function withActiveSpan(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const obj = getAcs();
  if (obj.withActiveSpan) {
    let withActiveSpanResult = obj.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = _require(825).withScope((arg0) => {
      callback(821)._setSpanForScope(arg0, callback);
      return dependencyMap(arg0);
    });
    const obj2 = _require(825);
  }
  return withActiveSpanResult;
}
function startNewTrace(arg0) {
  const _require = arg0;
  return _require(825).withScope((setPropagationContext) => {
    const obj = { traceId: callback(outer1_1[12]).generateTraceId() };
    const obj2 = callback(outer1_1[12]);
    obj.sampleRand = callback(outer1_1[13]).safeMathRandom();
    const result = setPropagationContext.setPropagationContext(obj);
    if (callback(outer1_1[14]).DEBUG_BUILD) {
      const debug = callback(outer1_1[15]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    return outer1_5(null, callback);
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
  let obj = require(831) /* hasSpansEnabled */;
  if (obj.hasSpansEnabled()) {
    const isolationScope = tmp(825).getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        let spanIsSampledResult = !scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        if (spanIsSampledResult) {
          spanIsSampledResult = require(796) /* convertSpanLinksForEnvelope */.spanIsSampled(parentSpan);
          const obj7 = require(796) /* convertSpanLinksForEnvelope */;
        }
        if (spanIsSampledResult) {
          const SentrySpan = tmp17(836).SentrySpan;
          const _Object2 = Object;
          obj = { parentSpanId: spanId, traceId, sampled: spanIsSampledResult };
          const prototype3 = SentrySpan.prototype;
          let sentrySpan = new SentrySpan(Object.assign({}, spanArguments, obj));
        } else {
          const SentryNonRecordingSpan2 = tmp17(832).SentryNonRecordingSpan;
          obj = { traceId };
          const prototype2 = SentryNonRecordingSpan2.prototype;
          sentrySpan = new SentryNonRecordingSpan2(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        require(796) /* convertSpanLinksForEnvelope */.addChildSpanToSpan(parentSpan, sentrySpan);
        const obj10 = require(796) /* convertSpanLinksForEnvelope */;
        const client = require(825) /* getCurrentScope */.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const obj11 = require(825) /* getCurrentScope */;
        require(796) /* convertSpanLinksForEnvelope */.addChildSpanToSpan(parentSpan, sentrySpan);
        const obj13 = require(796) /* convertSpanLinksForEnvelope */;
      }
      require(837) /* logSpanEnd */.logSpanStart(sentrySpan);
      const obj20 = require(837) /* logSpanEnd */;
      const result = require(797) /* unwrapScopeFromWeakRef */.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = require(833) /* getDynamicSamplingContextFromClient */.getDynamicSamplingContextFromSpan(parentSpan);
      const obj16 = require(833) /* getDynamicSamplingContextFromClient */;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const _Object5 = Object;
      const obj1 = { traceId: traceId2, parentSpanId: spanId2 };
      const obj17 = require(796) /* convertSpanLinksForEnvelope */;
      const tmp49 = _startRootSpan(Object.assign(obj1, spanArguments), scope, require(796) /* convertSpanLinksForEnvelope */.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = require(796) /* convertSpanLinksForEnvelope */.spanIsSampled(parentSpan);
      require(833) /* getDynamicSamplingContextFromClient */.freezeDscOnSpan(tmp49, dynamicSamplingContextFromSpan);
      sentrySpan = tmp49;
      const obj19 = require(833) /* getDynamicSamplingContextFromClient */;
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
        require(833) /* getDynamicSamplingContextFromClient */.freezeDscOnSpan(tmp38, dsc);
        sentrySpan = tmp38;
        const obj15 = require(833) /* getDynamicSamplingContextFromClient */;
      }
    }
    const tmpResult = tmp(825);
  } else {
    const SentryNonRecordingSpan = tmp(832).SentryNonRecordingSpan;
    const prototype = SentryNonRecordingSpan.prototype;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan();
    if (forceTransaction) {
      const _Object = Object;
      let obj3 = { sampled: "false", sample_rate: "0", transaction: spanArguments.name };
      obj2 = require(833) /* getDynamicSamplingContextFromClient */;
      const merged1 = Object.assign(obj3, obj2.getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      obj3 = require(833) /* getDynamicSamplingContextFromClient */;
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
    merged1.startTimestamp = require(796) /* convertSpanLinksForEnvelope */.spanTimeInputToSeconds(experimental.startTime);
    delete tmp.startTime;
    return merged1;
  } else {
    return merged;
  }
  const obj = { isStandalone: experimental.experimental || {}.standalone };
  const tmp2 = experimental.experimental || {};
}
function getAcs() {
  const mainCarrier = require(802) /* getSentryCarrier */.getMainCarrier();
  const obj = require(802) /* getSentryCarrier */;
  return require(818) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
}
function _startRootSpan(name, getPropagationContext) {
  let tmp = arg2;
  let obj = require(825) /* getCurrentScope */;
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
  if (getPropagationContext.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    const obj1 = { name: str, parentSampled: tmp, attributes: spanAttributes };
    const obj6 = require(844) /* sampleSpan */;
    const dsc = propagationContext.dsc;
    let sample_rate;
    if (null != dsc) {
      sample_rate = dsc.sample_rate;
    }
    obj1.parentSampleRate = require(813) /* parseSampleRate */.parseSampleRate(sample_rate);
    sampleSpanResult = obj6.sampleSpan(options, obj1, propagationContext.sampleRand);
    const obj8 = require(813) /* parseSampleRate */;
  }
  const tmp8 = _slicedToArray(sampleSpanResult, 3);
  const first = tmp8[0];
  const obj2 = {};
  let tmp13;
  if (undefined !== tmp8[1]) {
    if (tmp8[2]) {
      tmp13 = tmp10;
    }
  }
  obj2.attributes = Object.assign(_defineProperty(_defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), require(816).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp13), spanAttributes);
  obj2.sampled = first;
  const sentrySpan = new require(836) /* isSpanTimeInput */.SentrySpan(Object.assign({}, name, obj2));
  if (tmp15) {
    if (require(800).DEBUG_BUILD) {
      const debug = require(801) /* consoleSandbox */.debug;
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
    const _getSpanForScopeResult = require(821) /* _getSpanForScope */._getSpanForScope(arg0);
    if (_getSpanForScopeResult) {
      const client = require(825) /* getCurrentScope */.getClient();
      if (client) {
        let options = client.getOptions();
      } else {
        options = {};
      }
      let rootSpan = _getSpanForScopeResult;
      if (options.parentSpanIsAlwaysRootSpan) {
        rootSpan = require(796) /* convertSpanLinksForEnvelope */.getRootSpan(_getSpanForScopeResult);
        const obj5 = require(796) /* convertSpanLinksForEnvelope */;
      }
      return rootSpan;
    }
    const obj = require(821) /* _getSpanForScope */;
  }
}
function getActiveSpanWrapper(arg0) {
  let closure_0 = arg0;
  return undefined !== arg0 ? ((arg0) => outer1_5(closure_0, arg0)) : ((arg0) => arg0());
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = function continueTrace(arg0, arg1) {
  let baggage;
  let dependencyMap;
  const _require = arg1;
  const mainCarrier = _require(802).getMainCarrier();
  let obj = _require(802);
  const asyncContextStrategy = _require(818).getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage } = arg0);
    const client = _require(825).getClient();
    const obj4 = _require(825);
    let result = _require(812).baggageHeaderToDynamicSamplingContext(baggage);
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
    const obj5 = _require(812);
    withScopeResult = _require(825).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(callback(outer1_1[11]).propagationContextFromHeaders(closure_1, baggage));
      const obj = callback(outer1_1[11]);
      callback(outer1_1[4])._setSpanForScope(setPropagationContext, undefined);
      return callback();
    });
    const obj7 = _require(825);
  }
};
export const startInactiveSpan = function startInactiveSpan(scope) {
  let _slicedToArray;
  let parentSpan;
  let closure_0 = scope;
  let obj = getAcs();
  if (obj.startInactiveSpan) {
    return obj.startInactiveSpan(scope);
  } else {
    let closure_1 = parseSentrySpanArguments(scope);
    ({ forceTransaction: _slicedToArray, parentSpan } = scope);
    if (scope.scope) {
      let fn = (arg0) => scope(825).withScope(scope.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? ((arg0) => outer1_5(parentSpan, arg0)) : ((arg0) => arg0());
    }
    return fn(() => {
      let obj = scope(825);
      const currentScope = obj.getCurrentScope();
      const tmp2 = outer1_11(currentScope, parentSpan);
      if (scope.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = scope(832).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      obj = { parentSpan: tmp2, spanArguments: dependencyMap, forceTransaction: closure_2, scope: currentScope };
      sentryNonRecordingSpan = outer1_7(obj);
    });
  }
};
export { startNewTrace };
export const startSpan = function startSpan(arg0, arg1) {
  let __SENTRY_SUPPRESS_TRACING__;
  let _defineProperty;
  let scope;
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = getAcs();
  if (obj.startSpan) {
    return obj.startSpan(arg0, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(arg0);
    ({ forceTransaction: _defineProperty, parentSpan: __SENTRY_SUPPRESS_TRACING__, scope } = arg0);
    let cloneResult;
    if (null != scope) {
      cloneResult = scope.clone();
    }
    return _require(825).withScope(cloneResult, () => outer1_12(closure_4)(() => {
      let obj = callback(825);
      const currentScope = obj.getCurrentScope();
      let tmp2 = outer2_11(currentScope, outer1_4);
      if (outer1_0.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = callback(832).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        callback(821)._setSpanForScope(currentScope, sentryNonRecordingSpan);
        const obj3 = callback(821);
        return callback(843).handleCallbackErrors(() => outer2_1(sentryNonRecordingSpan), () => {
          let obj = sentryNonRecordingSpan(796);
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
            obj = { code: sentryNonRecordingSpan(817).SPAN_STATUS_ERROR, message: "internal_error" };
            sentryNonRecordingSpan.setStatus(obj);
          }
        }, () => {
          sentryNonRecordingSpan.end();
        });
      }
      obj = { parentSpan: tmp2, spanArguments: outer1_2, forceTransaction: outer1_3, scope: currentScope };
      sentryNonRecordingSpan = outer2_7(obj);
    }));
  }
};
export const startSpanManual = function startSpanManual(arg0, arg1) {
  let __SENTRY_SUPPRESS_TRACING__;
  let _defineProperty;
  let scope;
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = getAcs();
  if (obj.startSpanManual) {
    return obj.startSpanManual(arg0, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(arg0);
    ({ forceTransaction: _defineProperty, parentSpan: __SENTRY_SUPPRESS_TRACING__, scope } = arg0);
    let cloneResult;
    if (null != scope) {
      cloneResult = scope.clone();
    }
    return _require(825).withScope(cloneResult, () => outer1_12(closure_4)(() => {
      let obj = callback(825);
      const currentScope = obj.getCurrentScope();
      let tmp2 = outer2_11(currentScope, outer1_4);
      if (outer1_0.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = callback(832).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        callback(821)._setSpanForScope(currentScope, sentryNonRecordingSpan);
        const obj3 = callback(821);
        return callback(843).handleCallbackErrors(() => outer2_1(sentryNonRecordingSpan, () => outer1_0.end()), () => {
          let obj = sentryNonRecordingSpan(796);
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
            obj = { code: sentryNonRecordingSpan(817).SPAN_STATUS_ERROR, message: "internal_error" };
            sentryNonRecordingSpan.setStatus(obj);
          }
        });
      }
      obj = { parentSpan: tmp2, spanArguments: outer1_2, forceTransaction: outer1_3, scope: currentScope };
      sentryNonRecordingSpan = outer2_7(obj);
    }));
  }
};
export const suppressTracing = function suppressTracing(arg0) {
  const _require = arg0;
  const obj = getAcs();
  if (obj.suppressTracing) {
    let suppressTracingResult = obj.suppressTracing(arg0);
  } else {
    suppressTracingResult = _require(825).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata(outer1_3({}, outer1_4, true));
      const result1 = setSDKProcessingMetadata.setSDKProcessingMetadata(outer1_3({}, outer1_4, undefined));
      return callback();
    });
    const obj2 = _require(825);
  }
  return suppressTracingResult;
};
export { withActiveSpan };
