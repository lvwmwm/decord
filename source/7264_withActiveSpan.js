// Module ID: 7264
// Function ID: 58509
// Name: withActiveSpan
// Dependencies: []
// Exports: continueTrace, startInactiveSpan, startNewTrace, startSpan, startSpanManual, suppressTracing

// Module 7264 (withActiveSpan)
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
  let obj = require(dependencyMap[14]);
  if (obj.hasTracingEnabled()) {
    const isolationScope = tmp(tmp2[2]).getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction.forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        let spanIsSampledResult = !scope.getScopeData().sdkProcessingMetadata[closure_4];
        if (spanIsSampledResult) {
          spanIsSampledResult = require(dependencyMap[6]).spanIsSampled(parentSpan);
          const obj4 = require(dependencyMap[6]);
        }
        if (spanIsSampledResult) {
          const SentrySpan = tmp12(tmp13[19]).SentrySpan;
          const _Object = Object;
          obj = { parentSpanId: spanId, traceId, sampled: spanIsSampledResult };
          const prototype3 = SentrySpan.prototype;
          let sentrySpan = new SentrySpan(Object.assign({}, spanArguments, obj));
        } else {
          const SentryNonRecordingSpan2 = tmp12(tmp13[3]).SentryNonRecordingSpan;
          obj = { traceId };
          const prototype2 = SentryNonRecordingSpan2.prototype;
          sentrySpan = new SentryNonRecordingSpan2(obj);
        }
        const spanContextResult = parentSpan.spanContext();
        require(dependencyMap[6]).addChildSpanToSpan(parentSpan, sentrySpan);
        const obj7 = require(dependencyMap[6]);
        const client = require(dependencyMap[2]).getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const obj8 = require(dependencyMap[2]);
        require(dependencyMap[6]).addChildSpanToSpan(parentSpan, sentrySpan);
        const obj10 = require(dependencyMap[6]);
      }
      require(dependencyMap[16]).logSpanStart(sentrySpan);
      const obj17 = require(dependencyMap[16]);
      const result = require(dependencyMap[17]).setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = require(dependencyMap[15]).getDynamicSamplingContextFromSpan(parentSpan);
      const obj13 = require(dependencyMap[15]);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const _Object4 = Object;
      const obj1 = { traceId: traceId2, parentSpanId: spanId2 };
      const obj14 = require(dependencyMap[6]);
      const tmp44 = _startRootSpan(Object.assign(obj1, spanArguments), scope, require(dependencyMap[6]).spanIsSampled(parentSpan));
      const spanIsSampledResult1 = require(dependencyMap[6]).spanIsSampled(parentSpan);
      require(dependencyMap[15]).freezeDscOnSpan(tmp44, dynamicSamplingContextFromSpan);
      sentrySpan = tmp44;
      const obj16 = require(dependencyMap[15]);
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
        require(dependencyMap[15]).freezeDscOnSpan(tmp33, dsc);
        sentrySpan = tmp33;
        const obj12 = require(dependencyMap[15]);
      }
      const obj2 = {};
    }
    const tmpResult = tmp(tmp2[2]);
  } else {
    const SentryNonRecordingSpan = tmp(tmp2[3]).SentryNonRecordingSpan;
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
function _startRootSpan(name, arg1, parentSampled) {
  let obj = require(dependencyMap[2]);
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
  if (arg1.getScopeData().sdkProcessingMetadata[closure_4]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    obj = { name: str, parentSampled, attributes: name.attributes };
    obj = { name: str, parentSampled };
    obj.transactionContext = obj;
    sampleSpanResult = require(dependencyMap[18]).sampleSpan(options, obj);
    const obj4 = require(dependencyMap[18]);
  }
  const tmp4 = callback(sampleSpanResult, 2);
  const sentrySpan = new require(dependencyMap[19]).SentrySpan(Object.assign({}, name, { attributes: Object.assign(callback2({}, require(dependencyMap[20]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), name.attributes), sampled: tmp4[0] }));
  if (undefined !== tmp4[1]) {
    const attr = sentrySpan.setAttribute(require(dependencyMap[20]).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp5);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
function getParentSpan(arg0) {
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
function getActiveSpanWrapper(arg0) {
  const require = arg0;
  return undefined !== arg0 ? (arg0) => callback(arg0, arg0) : (arg0) => arg0();
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = function continueTrace(arg0, arg1) {
  const require = arg1;
  const mainCarrier = require(dependencyMap[8]).getMainCarrier();
  const obj = require(dependencyMap[8]);
  const asyncContextStrategy = require(dependencyMap[9]).getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: closure_1, baggage: closure_2 } = arg0);
    return require(dependencyMap[2]).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(arg1(closure_1[10]).propagationContextFromHeaders(closure_1, closure_2));
      return arg1();
    });
  }
  const obj2 = require(dependencyMap[9]);
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
      const tmp2 = callback3(currentScope);
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
export const startNewTrace = function startNewTrace(arg0) {
  const require = arg0;
  return require(dependencyMap[2]).withScope((setPropagationContext) => {
    const obj = { traceId: setPropagationContext(closure_1[11]).generateTraceId() };
    const result = setPropagationContext.setPropagationContext(obj);
    if (setPropagationContext(closure_1[12]).DEBUG_BUILD) {
      const logger = setPropagationContext(closure_1[13]).logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    return callback(null, setPropagationContext);
  });
};
export const startSpan = function startSpan(scope) {
  const require = scope;
  const dependencyMap = arg1;
  const obj = getAcs();
  if (obj.startSpan) {
    return obj.startSpan(scope, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(scope);
    ({ forceTransaction: closure_3, parentSpan: closure_4 } = scope);
    return require(dependencyMap[2]).withScope(scope.scope, () => callback(closure_4)(() => {
      let obj = sentryNonRecordingSpan(closure_1[2]);
      const currentScope = obj.getCurrentScope();
      const tmp2 = callback2(currentScope);
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
        }, () => sentryNonRecordingSpan.end());
      }
      obj = { parentSpan: tmp2, spanArguments: closure_2, forceTransaction: closure_3, scope: currentScope };
      sentryNonRecordingSpan = callback(obj);
    }));
  }
};
export const startSpanManual = function startSpanManual(scope) {
  const require = scope;
  const dependencyMap = arg1;
  const obj = getAcs();
  if (obj.startSpanManual) {
    return obj.startSpanManual(scope, arg1);
  } else {
    let closure_2 = parseSentrySpanArguments(scope);
    ({ forceTransaction: closure_3, parentSpan: closure_4 } = scope);
    return require(dependencyMap[2]).withScope(scope.scope, () => callback(closure_4)(() => {
      function finishAndSetSpan(sentryNonRecordingSpan, finishAndSetSpan) {
        sentryNonRecordingSpan.end();
      }
      let obj = sentryNonRecordingSpan(finishAndSetSpan[2]);
      const currentScope = obj.getCurrentScope();
      const tmp2 = callback2(currentScope);
      if (sentryNonRecordingSpan.onlyIfParent) {
        if (!tmp2) {
          const SentryNonRecordingSpan = sentryNonRecordingSpan(finishAndSetSpan[3]).SentryNonRecordingSpan;
          const prototype = SentryNonRecordingSpan.prototype;
          let sentryNonRecordingSpan = new SentryNonRecordingSpan();
        }
        sentryNonRecordingSpan(finishAndSetSpan[4])._setSpanForScope(currentScope, sentryNonRecordingSpan);
        const obj3 = sentryNonRecordingSpan(finishAndSetSpan[4]);
        return sentryNonRecordingSpan(finishAndSetSpan[5]).handleCallbackErrors(() => finishAndSetSpan(sentryNonRecordingSpan, finishAndSetSpan), () => {
          let obj = sentryNonRecordingSpan(finishAndSetSpan[6]);
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
            obj = { code: sentryNonRecordingSpan(finishAndSetSpan[7]).SPAN_STATUS_ERROR, message: "internal_error" };
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
      return setSDKProcessingMetadata();
    });
    const obj2 = require(dependencyMap[2]);
  }
  return suppressTracingResult;
};
export { withActiveSpan };
