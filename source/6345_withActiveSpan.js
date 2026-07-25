// Module ID: 6345
// Function ID: 57047
// Name: withActiveSpan
// Dependencies: [57, 77, 6338, 6344, 6333, 6346, 6316, 6328, 6329, 6330, 6323, 6321, 6339, 6311, 6343, 6347, 6349, 6340, 6350, 6352, 6326]
// Exports: continueTrace, startInactiveSpan, startNewTrace, startSpan, startSpanManual, suppressTracing

// Module 6345 (withActiveSpan)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";

function withActiveSpan(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const obj = getAcs();
  if (obj.withActiveSpan) {
    let withActiveSpanResult = obj.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = _require(6338).withScope((arg0) => {
      callback(6333)._setSpanForScope(arg0, callback);
      return dependencyMap(arg0);
    });
    const obj2 = _require(6338);
  }
  return withActiveSpanResult;
}
function createChildOrRootSpan(forceTransaction) {
  let parentSpan;
  let sampled;
  let scope;
  let spanArguments;
  let spanId;
  let spanId2;
  let traceId;
  let traceId2;
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  let obj = require(6343) /* hasTracingEnabled */;
  if (obj.hasTracingEnabled()) {
    const isolationScope = tmp(6338).getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction.forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        let spanIsSampledResult = !scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        if (spanIsSampledResult) {
          spanIsSampledResult = require(6316) /* spanTimeInputToSeconds */.spanIsSampled(parentSpan);
          const obj4 = require(6316) /* spanTimeInputToSeconds */;
        }
        if (spanIsSampledResult) {
          const SentrySpan = tmp12(6352).SentrySpan;
          const _Object = Object;
          obj = { parentSpanId: spanId, traceId, sampled: spanIsSampledResult };
          const prototype3 = SentrySpan.prototype;
          let sentrySpan = new SentrySpan(Object.assign({}, spanArguments, obj));
        } else {
          const SentryNonRecordingSpan2 = tmp12(6344).SentryNonRecordingSpan;
          obj = { traceId };
          const prototype2 = SentryNonRecordingSpan2.prototype;
          sentrySpan = new SentryNonRecordingSpan2(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        require(6316) /* spanTimeInputToSeconds */.addChildSpanToSpan(parentSpan, sentrySpan);
        const obj7 = require(6316) /* spanTimeInputToSeconds */;
        const client = require(6338) /* getCurrentScope */.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const obj8 = require(6338) /* getCurrentScope */;
        require(6316) /* spanTimeInputToSeconds */.addChildSpanToSpan(parentSpan, sentrySpan);
        const obj10 = require(6316) /* spanTimeInputToSeconds */;
      }
      require(6349) /* logSpanEnd */.logSpanStart(sentrySpan);
      const obj17 = require(6349) /* logSpanEnd */;
      const result = require(6340) /* getCapturedScopesOnSpan */.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = require(6347) /* getDynamicSamplingContextFromClient */.getDynamicSamplingContextFromSpan(parentSpan);
      const obj13 = require(6347) /* getDynamicSamplingContextFromClient */;
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const _Object4 = Object;
      const obj1 = { traceId: traceId2, parentSpanId: spanId2 };
      const obj14 = require(6316) /* spanTimeInputToSeconds */;
      const tmp44 = _startRootSpan(Object.assign(obj1, spanArguments), scope, require(6316) /* spanTimeInputToSeconds */.spanIsSampled(parentSpan));
      const spanIsSampledResult1 = require(6316) /* spanTimeInputToSeconds */.spanIsSampled(parentSpan);
      require(6347) /* getDynamicSamplingContextFromClient */.freezeDscOnSpan(tmp44, dynamicSamplingContextFromSpan);
      sentrySpan = tmp44;
      const obj16 = require(6347) /* getDynamicSamplingContextFromClient */;
    } else {
      const _Object2 = Object;
      const propagationContext = isolationScope.getPropagationContext();
      const merged = Object.assign({}, propagationContext, scope.getPropagationContext());
      const dsc = merged.dsc;
      const _Object3 = Object;
      ({ traceId: obj11.traceId, parentSpanId: obj11.parentSpanId, sampled } = merged);
      const tmp33 = _startRootSpan(Object.assign({}, spanArguments), scope, sampled);
      sentrySpan = tmp33;
      if (dsc) {
        require(6347) /* getDynamicSamplingContextFromClient */.freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const obj12 = require(6347) /* getDynamicSamplingContextFromClient */;
      }
      const obj2 = {};
    }
    const tmpResult = tmp(6338);
  } else {
    const SentryNonRecordingSpan = tmp(6344).SentryNonRecordingSpan;
    const prototype = SentryNonRecordingSpan.prototype;
    const sentryNonRecordingSpan = new SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
}
function parseSentrySpanArguments(experimental) {
  const merged = Object.assign({ isStandalone: experimental.experimental || {}.standalone }, experimental);
  if (experimental.startTime) {
    const _Object = Object;
    const merged1 = Object.assign({}, merged);
    merged1.startTimestamp = require(6316) /* spanTimeInputToSeconds */.spanTimeInputToSeconds(experimental.startTime);
    delete tmp.startTime;
    return merged1;
  } else {
    return merged;
  }
  const obj = { isStandalone: experimental.experimental || {}.standalone };
  const tmp2 = experimental.experimental || {};
}
function getAcs() {
  const mainCarrier = require(6329) /* getSentryCarrier */.getMainCarrier();
  const obj = require(6329) /* getSentryCarrier */;
  return require(6330) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
}
function _startRootSpan(name, arg1, parentSampled) {
  let obj = require(6338) /* getCurrentScope */;
  const client = obj.getClient();
  let options = client;
  if (client) {
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
  if (arg1.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    obj = { name: str, parentSampled, attributes: name.attributes };
    obj = { name: str, parentSampled };
    obj.transactionContext = obj;
    sampleSpanResult = require(6350) /* sampleSpan */.sampleSpan(options, obj);
    const obj4 = require(6350) /* sampleSpan */;
  }
  const tmp4 = _slicedToArray(sampleSpanResult, 2);
  const sentrySpan = new require(6352) /* isSpanTimeInput */.SentrySpan(Object.assign({}, name, { attributes: Object.assign(_defineProperty({}, require(6326).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), name.attributes), sampled: tmp4[0] }));
  if (undefined !== tmp4[1]) {
    const attr = sentrySpan.setAttribute(require(6326).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp5);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
function getParentSpan(arg0) {
  const _getSpanForScopeResult = require(6333) /* _getSpanForScope */._getSpanForScope(arg0);
  if (_getSpanForScopeResult) {
    const client = require(6338) /* getCurrentScope */.getClient();
    if (client) {
      let options = client.getOptions();
    } else {
      options = {};
    }
    let rootSpan = _getSpanForScopeResult;
    if (options.parentSpanIsAlwaysRootSpan) {
      rootSpan = require(6316) /* spanTimeInputToSeconds */.getRootSpan(_getSpanForScopeResult);
      const obj5 = require(6316) /* spanTimeInputToSeconds */;
    }
    return rootSpan;
  }
  const obj = require(6333) /* _getSpanForScope */;
}
function getActiveSpanWrapper(arg0) {
  let closure_0 = arg0;
  return undefined !== arg0 ? ((arg0) => outer1_5(closure_0, arg0)) : ((arg0) => arg0());
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = function continueTrace(arg0, arg1) {
  let _slicedToArray;
  let dependencyMap;
  const _require = arg1;
  const mainCarrier = _require(6329).getMainCarrier();
  const obj = _require(6329);
  const asyncContextStrategy = _require(6330).getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    return _require(6338).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(callback(outer1_1[10]).propagationContextFromHeaders(closure_1, closure_2));
      return callback();
    });
  }
  const obj2 = _require(6330);
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
      let fn = (arg0) => scope(6338).withScope(scope.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? ((arg0) => outer1_5(parentSpan, arg0)) : ((arg0) => arg0());
    }
    return fn(() => {
      let obj = scope(6338);
      const currentScope = obj.getCurrentScope();
      const tmp2 = outer1_10(currentScope);
      if (scope.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = scope(6344).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      obj = { parentSpan: tmp2, spanArguments: dependencyMap, forceTransaction: closure_2, scope: currentScope };
      sentryNonRecordingSpan = outer1_6(obj);
    });
  }
};
export const startNewTrace = function startNewTrace(arg0) {
  const _require = arg0;
  return _require(6338).withScope((setPropagationContext) => {
    const obj = { traceId: callback(outer1_1[11]).generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (callback(outer1_1[12]).DEBUG_BUILD) {
      const logger = callback(outer1_1[13]).logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    return outer1_5(null, callback);
  });
};
export const startSpan = function startSpan(scope) {
  let __SENTRY_SUPPRESS_TRACING__;
  let _defineProperty;
  const _require = scope;
  const dependencyMap = arg1;
  let obj = getAcs();
  if (obj.startSpan) {
    return obj.startSpan(scope, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(scope);
    ({ forceTransaction: _defineProperty, parentSpan: __SENTRY_SUPPRESS_TRACING__ } = scope);
    return _require(6338).withScope(scope.scope, () => outer1_11(closure_4)(() => {
      let obj = callback(6338);
      const currentScope = obj.getCurrentScope();
      let tmp2 = outer2_10(currentScope);
      if (outer1_0.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = callback(6344).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        callback(6333)._setSpanForScope(currentScope, sentryNonRecordingSpan);
        const obj3 = callback(6333);
        return callback(6346).handleCallbackErrors(() => outer2_1(sentryNonRecordingSpan), () => {
          let obj = sentryNonRecordingSpan(6316);
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
            obj = { code: sentryNonRecordingSpan(6328).SPAN_STATUS_ERROR, message: "internal_error" };
            sentryNonRecordingSpan.setStatus(obj);
          }
        }, () => sentryNonRecordingSpan.end());
      }
      obj = { parentSpan: tmp2, spanArguments: outer1_2, forceTransaction: outer1_3, scope: currentScope };
      sentryNonRecordingSpan = outer2_6(obj);
    }));
  }
};
export const startSpanManual = function startSpanManual(scope) {
  let __SENTRY_SUPPRESS_TRACING__;
  let _defineProperty;
  const _require = scope;
  const dependencyMap = arg1;
  let obj = getAcs();
  if (obj.startSpanManual) {
    return obj.startSpanManual(scope, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(scope);
    ({ forceTransaction: _defineProperty, parentSpan: __SENTRY_SUPPRESS_TRACING__ } = scope);
    return _require(6338).withScope(scope.scope, () => outer1_11(closure_4)(() => {
      function finishAndSetSpan() {
        sentryNonRecordingSpan.end();
      }
      let obj = callback(6338);
      const currentScope = obj.getCurrentScope();
      let tmp2 = outer2_10(currentScope);
      if (outer1_0.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = callback(6344).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        callback(6333)._setSpanForScope(currentScope, sentryNonRecordingSpan);
        const obj3 = callback(6333);
        return callback(6346).handleCallbackErrors(() => outer2_1(sentryNonRecordingSpan, finishAndSetSpan), () => {
          let obj = sentryNonRecordingSpan(6316);
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
            obj = { code: sentryNonRecordingSpan(6328).SPAN_STATUS_ERROR, message: "internal_error" };
            sentryNonRecordingSpan.setStatus(obj);
          }
        });
      }
      obj = { parentSpan: tmp2, spanArguments: outer1_2, forceTransaction: outer1_3, scope: currentScope };
      sentryNonRecordingSpan = outer2_6(obj);
    }));
  }
};
export const suppressTracing = function suppressTracing(arg0) {
  const _require = arg0;
  const obj = getAcs();
  if (obj.suppressTracing) {
    let suppressTracingResult = obj.suppressTracing(arg0);
  } else {
    suppressTracingResult = _require(6338).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata(outer1_3({}, outer1_4, true));
      return callback();
    });
    const obj2 = _require(6338);
  }
  return suppressTracingResult;
};
export { withActiveSpan };
