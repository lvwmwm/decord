// Module ID: 11027
// Function ID: 11028
// Dependencies: [32, 11020, 11026, 11015, 11028, 10998, 11010, 11011, 11012, 11005, 11003, 11021, 10993, 11025, 11029, 11031, 11022, 11032, 11034, 11008]
// Exports: continueTrace, startInactiveSpan, startNewTrace, startSpan, startSpanManual, suppressTracing, withActiveSpan

// Module 11027
import _mod10998 from "module_10998" /* 10998 */;
import generatePropagationContext from "generatePropagationContext" /* 11003 */;
import _mod11005 from "module_11005" /* 11005 */;
import _mod11008 from "module_11008" /* 11008 */;
import _mod11015 from "module_11015" /* 11015 */;
import _mod11020 from "module_11020" /* 11020 */;
import _mod11021 from "module_11021" /* 11021 */;
import _mod11022 from "module_11022" /* 11022 */;
import _mod11025 from "module_11025" /* 11025 */;
import _mod11029 from "module_11029" /* 11029 */;
import _mod11031 from "module_11031" /* 11031 */;
import _mod11032 from "module_11032" /* 11032 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require, dependencyMap, setPropagationContext;

let tmp;
const _mod10993 = tmp(10993);
const _mod11011 = tmp(11011);
const _mod11012 = tmp(11012);
const f106456 = (fn) => fn();
function createChildOrRootSpan(forceTransaction) {
  let parentSpan;
  let scope;
  let spanArguments;
  let spanId;
  let spanId2;
  let traceId;
  let traceId2;
  ({ parentSpan, spanArguments, scope } = forceTransaction);
  forceTransaction = forceTransaction.forceTransaction;
  const obj = _mod11025;
  if (obj.hasTracingEnabled()) {
    let sentrySpan;
    const tmpResult = _mod11020;
    const isolationScope = tmpResult.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        parentSpan.spanContext();
        let spanIsSampledResult = !scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        if (spanIsSampledResult) {
          const tmpResult11 = _mod10998;
          spanIsSampledResult = tmpResult11.spanIsSampled(parentSpan);
        }
        if (spanIsSampledResult) {
          const obj2 = { parentSpanId: spanId, traceId, sampled: spanIsSampledResult };
          const SentrySpan = tmp(11034).SentrySpan;
          const merged = Object.assign(spanArguments);
          const self5 = this;
          const self6 = this;
          sentrySpan = new SentrySpan(obj2);
        } else {
          const self3 = this;
          const self4 = this;
          const obj3 = { traceId };
          sentrySpan = new tmp(11026).SentryNonRecordingSpan(obj3);
        }
        const tmpResult12 = _mod10998;
        tmpResult12.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult13 = _mod11020;
        const client = tmpResult13.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult14 = _mod10998;
        tmpResult14.addChildSpanToSpan(parentSpan, sentrySpan);
      }
      const tmpResult15 = _mod11031;
      tmpResult15.logSpanStart(sentrySpan);
      const tmpResult16 = _mod11022;
      const result = tmpResult16.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const tmpResult17 = _mod11029;
      const dynamicSamplingContextFromSpan = tmpResult17.getDynamicSamplingContextFromSpan(parentSpan);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult18 = _mod10998;
      const spanIsSampledResult1 = tmpResult18.spanIsSampled(parentSpan);
      const merged1 = Object.assign(spanArguments);
      const tmp35 = _startRootSpan(obj4, scope, spanIsSampledResult1);
      const tmpResult19 = _mod11029;
      tmpResult19.freezeDscOnSpan(tmp35, dynamicSamplingContextFromSpan);
      sentrySpan = tmp35;
    } else {
      const obj5 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj5.dsc;
      const obj6 = { traceId: null, parentSpanId: null };
      ({ traceId: obj12.traceId, parentSpanId: obj12.parentSpanId } = obj5);
      const sampled = obj5.sampled;
      const merged4 = Object.assign(spanArguments);
      const tmp26 = _startRootSpan(obj6, scope, sampled);
      sentrySpan = tmp26;
      if (dsc) {
        const tmpResult20 = _mod11029;
        tmpResult20.freezeDscOnSpan(tmp26, dsc);
        sentrySpan = tmp26;
      }
    }
  } else {
    const self = this;
    const self2 = this;
    const sentryNonRecordingSpan = new tmp(11026).SentryNonRecordingSpan();
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name, arg1, parentSampled) {
  let obj3;
  let obj5;
  let sampleSpanResult;
  let tmp7;
  let tmp8;
  const obj = _mod11020;
  const client = obj.getClient();
  name = name.name;
  let str = "";
  const tmp3 = client && client.getOptions() || {};
  if (undefined !== name) {
    str = name;
  }
  const attributes = name.attributes;
  if (arg1.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    sampleSpanResult = items;
  } else {
    const obj2 = { name: str, parentSampled, attributes, transactionContext: obj3 };
    obj3 = { name: str, parentSampled };
    const tmpResult = _mod11032;
    sampleSpanResult = tmpResult.sampleSpan(tmp3, obj2);
  }
  [tmp7, tmp8] = sampleSpanResult;
  const obj4 = { attributes: obj5, sampled: tmp7 };
  _slicedToArray(sampleSpanResult, 2);
  const SentrySpan = tmp(11034).SentrySpan;
  const merged = Object.assign(name);
  obj5 = { [_mod11008.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  const merged1 = Object.assign(name.attributes);
  const sentrySpan = new SentrySpan(obj4);
  if (undefined !== tmp8) {
    const attr = sentrySpan.setAttribute(tmp(11008).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, tmp8);
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  let closure_0;
  _require = arg1;
  let obj = require("module_11011");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("module_11012");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp = _require;
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage: _slicedToArray } = arg0);
    const tmpResult = tmp(11020);
    return tmpResult.withScope((setPropagationContext) => {
      const obj = _mod11005;
      const result = setPropagationContext.setPropagationContext(obj.propagationContextFromHeaders(dependencyMap, _slicedToArray));
      return closure_0();
    });
  }
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  let forceTransaction;
  let obj4;
  let parentSpan;
  let tmp4;
  let tmpResult;
  _require = experimental;
  let tmp = _require;
  let tmp2 = obj4;
  let obj = require("module_11011");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("module_11012");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    let fn;
    let obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    tmp4 = experimental.experimental || {};
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(tmp2[5]);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: _slicedToArray, parentSpan } = experimental);
    if (experimental.scope) {
      fn = (arg0) => {
        const obj = _mod11020;
        return obj.withScope(experimental.scope, arg0);
      };
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        let withActiveSpanResult;
        let closure_0 = parentSpan;
        let closure_1 = arg0;
        const obj = _mod11011;
        const mainCarrier = obj.getMainCarrier();
        const obj2 = _mod11012;
        const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
        const tmp = parentSpan;
        if (asyncContextStrategy.withActiveSpan) {
          withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          const tmp2Result = _mod11020;
          withActiveSpanResult = tmp2Result.withScope((arg0) => {
            const _setSpanForScope = closure_2_0(closure_2_1[3])._setSpanForScope;
            closure_2_0(closure_2_1[3]);
            _setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
        }
        return withActiveSpanResult;
      }) : ((fn) => fn());
    }
    return fn(function() {
      const obj = _mod11020;
      const currentScope = obj.getCurrentScope();
      const obj2 = _mod11015;
      const _getSpanForScopeResult = obj2._getSpanForScope(currentScope);
      let tmp5;
      if (_getSpanForScopeResult) {
        let options;
        const tmpResult = _mod11020;
        const client = tmpResult.getClient();
        if (client) {
          options = client.getOptions();
        } else {
          options = {};
        }
        let rootSpan = _getSpanForScopeResult;
        if (options.parentSpanIsAlwaysRootSpan) {
          const tmpResult2 = _mod10998;
          rootSpan = tmpResult2.getRootSpan(_getSpanForScopeResult);
        }
        tmp5 = rootSpan;
      }
      if (experimental.onlyIfParent) {
        let sentryNonRecordingSpan;
        if (!tmp5) {
          const self = this;
          const self2 = this;
          sentryNonRecordingSpan = new tmp(11026).SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      const obj3 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction: _slicedToArray, scope: currentScope };
      sentryNonRecordingSpan = createChildOrRootSpan(obj3);
    });
  }
};
export const startNewTrace = function startNewTrace(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("module_11020");
  return obj.withScope((setPropagationContext) => {
    let obj2;
    let withActiveSpanResult;
    setPropagationContext = setPropagationContext.setPropagationContext;
    const obj = { traceId: obj2.generateTraceId() };
    obj2 = generatePropagationContext;
    const result = setPropagationContext(obj);
    if (_mod11021.DEBUG_BUILD) {
      const logger = _mod10993.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    let c0 = null;
    let closure_1 = closure_0;
    const tmpResult = _mod11011;
    const mainCarrier = tmpResult.getMainCarrier();
    const tmpResult3 = _mod11012;
    const asyncContextStrategy = tmpResult3.getAsyncContextStrategy(mainCarrier);
    const tmp6 = closure_0;
    if (asyncContextStrategy.withActiveSpan) {
      withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, tmp6);
    } else {
      const tmpResult4 = _mod11020;
      withActiveSpanResult = tmpResult4.withScope((arg0) => {
        const _setSpanForScope = closure_2_0(closure_2_1[3])._setSpanForScope;
        closure_2_0(closure_2_1[3]);
        _setSpanForScope(arg0, c0);
        return closure_1(arg0);
      });
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  let closure_1;
  let tmp4;
  let tmpResult;
  _require = experimental;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("module_11011");
  const mainCarrier = obj.getMainCarrier();
  let obj2 = require("module_11012");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    let obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    let tmp6 = experimental;
    tmp4 = experimental.experimental || {};
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      let obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(10998);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    const tmpResult2 = tmp(11020);
    return tmpResult2.withScope(experimental.scope, () => {
      let forceTransaction;
      let spanArguments;
      let closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        let withActiveSpanResult;
        closure_1 = arg0;
        const obj = experimental(closure_2_1[7]);
        const mainCarrier = obj.getMainCarrier();
        const obj2 = experimental(closure_2_1[8]);
        const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
        const tmp = closure_0;
        const tmp2 = experimental;
        const tmp3 = closure_2_1;
        if (asyncContextStrategy.withActiveSpan) {
          withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          const tmp2Result = tmp2(tmp3[1]);
          withActiveSpanResult = tmp2Result.withScope((arg0) => {
            const _setSpanForScope = closure_2_0(closure_2_1[3])._setSpanForScope;
            closure_2_0(closure_2_1[3]);
            _setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
        }
        return withActiveSpanResult;
      }) : f106456(function() {
        let sentryNonRecordingSpan;
        let tmp = experimental;
        let tmp2 = closure_1_1;
        let obj = experimental(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let obj2 = experimental(closure_1_1[3]);
        const _getSpanForScopeResult = obj2._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          let options;
          const tmpResult = tmp(tmp2[1]);
          const client = tmpResult.getClient();
          if (client) {
            options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            const tmpResult4 = tmp(tmp2[5]);
            rootSpan = tmpResult4.getRootSpan(_getSpanForScopeResult);
          }
          tmp5 = rootSpan;
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            const self = this;
            const self2 = this;
            sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
          }
          const tmpResult5 = tmp(tmp2[3]);
          tmpResult5._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult6 = tmp(tmp2[4]);
          return tmpResult6.handleCallbackErrors(() => closure_2_1(sentryNonRecordingSpan), () => {
            const obj = sentryNonRecordingSpan(closure_1[5]);
            const status = obj.spanToJSON(sentryNonRecordingSpan).status;
            const isRecordingResult = sentryNonRecordingSpan.isRecording();
            let tmp5 = !isRecordingResult;
            const tmp = sentryNonRecordingSpan;
            const tmp2 = closure_1;
            const tmp3 = sentryNonRecordingSpan;
            if (isRecordingResult) {
              tmp5 = status && "ok" !== status;
              const tmp6 = status && "ok" !== status;
            }
            if (!tmp5) {
              const setStatus = tmp3.setStatus;
              const obj2 = { code: tmp(tmp2[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              setStatus(obj2);
            }
          }, () => sentryNonRecordingSpan.end());
        }
        const obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj3);
      });
    });
  }
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  let tmp4;
  let tmpResult;
  _require = experimental;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("module_11011");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("module_11012");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    let obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    let tmp6 = experimental;
    tmp4 = experimental.experimental || {};
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      let obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(10998);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan } = experimental);
    const tmpResult2 = tmp(11020);
    return tmpResult2.withScope(experimental.scope, () => {
      let forceTransaction;
      let spanArguments;
      let closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        let withActiveSpanResult;
        closure_1 = arg0;
        const obj = experimental(closure_2_1[7]);
        const mainCarrier = obj.getMainCarrier();
        const obj2 = experimental(closure_2_1[8]);
        const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
        const tmp = closure_0;
        const tmp2 = experimental;
        const tmp3 = closure_2_1;
        if (asyncContextStrategy.withActiveSpan) {
          withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          const tmp2Result = tmp2(tmp3[1]);
          withActiveSpanResult = tmp2Result.withScope((arg0) => {
            const _setSpanForScope = closure_2_0(closure_2_1[3])._setSpanForScope;
            closure_2_0(closure_2_1[3]);
            _setSpanForScope(arg0, c0);
            return closure_1(arg0);
          });
        }
        return withActiveSpanResult;
      }) : f106456(function() {
        let sentryNonRecordingSpan;
        function finishAndSetSpan() {
          sentryNonRecordingSpan.end();
        }
        let tmp = experimental;
        let tmp2 = closure_1_1;
        let obj = experimental(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let obj2 = experimental(closure_1_1[3]);
        const _getSpanForScopeResult = obj2._getSpanForScope(currentScope);
        let tmp5;
        if (_getSpanForScopeResult) {
          let options;
          const tmpResult = tmp(tmp2[1]);
          const client = tmpResult.getClient();
          if (client) {
            options = client.getOptions();
          } else {
            options = {};
          }
          let rootSpan = _getSpanForScopeResult;
          if (options.parentSpanIsAlwaysRootSpan) {
            const tmpResult4 = tmp(tmp2[5]);
            rootSpan = tmpResult4.getRootSpan(_getSpanForScopeResult);
          }
          tmp5 = rootSpan;
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            const self = this;
            const self2 = this;
            sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
          }
          const tmpResult5 = tmp(tmp2[3]);
          tmpResult5._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult6 = tmp(tmp2[4]);
          return tmpResult6.handleCallbackErrors(() => closure_2_1(sentryNonRecordingSpan, finishAndSetSpan), () => {
            const obj = sentryNonRecordingSpan(finishAndSetSpan[5]);
            const status = obj.spanToJSON(sentryNonRecordingSpan).status;
            const isRecordingResult = sentryNonRecordingSpan.isRecording();
            let tmp5 = !isRecordingResult;
            const tmp = sentryNonRecordingSpan;
            const tmp2 = finishAndSetSpan;
            const tmp3 = sentryNonRecordingSpan;
            if (isRecordingResult) {
              tmp5 = status && "ok" !== status;
              const tmp6 = status && "ok" !== status;
            }
            if (!tmp5) {
              const setStatus = tmp3.setStatus;
              const obj2 = { code: tmp(tmp2[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              setStatus(obj2);
            }
          });
        }
        const obj3 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj3);
      });
    });
  }
};
export const suppressTracing = function suppressTracing(arg0) {
  let closure_0;
  let suppressTracingResult;
  _require = arg0;
  const obj = require("module_11011");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("module_11012");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp = _require;
  if (asyncContextStrategy.suppressTracing) {
    suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    const tmpResult = tmp(11020);
    suppressTracingResult = tmpResult.withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      return closure_0();
    });
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  let closure_0;
  let closure_1;
  let withActiveSpanResult;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_11011");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("module_11012");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp = _require;
  if (asyncContextStrategy.withActiveSpan) {
    withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    const tmpResult = tmp(11020);
    withActiveSpanResult = tmpResult.withScope((arg0) => {
      const _setSpanForScope = closure_2_0(closure_2_1[3])._setSpanForScope;
      closure_2_0(closure_2_1[3]);
      _setSpanForScope(arg0, c0);
      return closure_1(arg0);
    });
  }
  return withActiveSpanResult;
};
