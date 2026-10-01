// Module ID: 731
// Function ID: 732
// Name: continueTrace
// Dependencies: [32, 713, 721, 709, 732, 684, 705, 690, 706, 700, 699, 694, 696, 688, 689, 720, 722, 726, 685, 733, 701, 725, 704]
// Exports: continueTrace, startInactiveSpan, startNewTrace, startSpan, startSpanManual, suppressTracing, withActiveSpan

// Module 731 (continueTrace)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 684 */;
import _mod685 from "module_685" /* 685 */;
import _mod688 from "module_688" /* 688 */;
import _mod690 from "module_690" /* 690 */;
import regExp from "regExp" /* 699 */;
import _mod701 from "module_701" /* 701 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import _mod706 from "module_706" /* 706 */;
import _getSpanForScope from "_getSpanForScope" /* 709 */;
import _mod713 from "module_713" /* 713 */;
import _mod720 from "module_720" /* 720 */;
import freezeDscOnSpan from "freezeDscOnSpan" /* 722 */;
import logSpanEnd from "logSpanEnd" /* 726 */;
import sampleSpan2 from "sampleSpan" /* 733 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require, dependencyMap, setPropagationContext;

const f71905 = (fn) => fn();
function createChildOrRootSpan(arg0) {
  let forceTransaction;
  let parentSpan;
  let scope;
  let spanArguments;
  let spanId;
  let spanId2;
  let traceId;
  let traceId2;
  ({ parentSpan, spanArguments, forceTransaction, scope } = arg0);
  const obj = _mod720;
  if (obj.hasSpansEnabled()) {
    let sentrySpan;
    const tmpResult = _mod713;
    const isolationScope = tmpResult.getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        parentSpan.spanContext();
        let spanIsSampledResult = !scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        if (spanIsSampledResult) {
          const tmpResult13 = TRACE_FLAG_NONE;
          spanIsSampledResult = tmpResult13.spanIsSampled(parentSpan);
        }
        if (spanIsSampledResult) {
          const obj2 = { parentSpanId: spanId, traceId, sampled: spanIsSampledResult };
          const SentrySpan = tmp(725).SentrySpan;
          const merged = Object.assign(spanArguments);
          const self5 = this;
          const self6 = this;
          sentrySpan = new SentrySpan(obj2);
        } else {
          const self3 = this;
          const self4 = this;
          const obj3 = { traceId };
          sentrySpan = new tmp(721).SentryNonRecordingSpan(obj3);
        }
        const tmpResult14 = TRACE_FLAG_NONE;
        tmpResult14.addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult15 = _mod713;
        const client = tmpResult15.getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult16 = TRACE_FLAG_NONE;
        tmpResult16.addChildSpanToSpan(parentSpan, sentrySpan);
      }
      const tmpResult17 = logSpanEnd;
      tmpResult17.logSpanStart(sentrySpan);
      const tmpResult18 = _mod685;
      const result = tmpResult18.setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const tmpResult19 = freezeDscOnSpan;
      const dynamicSamplingContextFromSpan = tmpResult19.getDynamicSamplingContextFromSpan(parentSpan);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult20 = TRACE_FLAG_NONE;
      const spanIsSampledResult1 = tmpResult20.spanIsSampled(parentSpan);
      const merged1 = Object.assign(spanArguments);
      const tmp38 = _startRootSpan(obj4, scope, spanIsSampledResult1);
      const tmpResult21 = freezeDscOnSpan;
      tmpResult21.freezeDscOnSpan(tmp38, dynamicSamplingContextFromSpan);
      sentrySpan = tmp38;
    } else {
      const obj5 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj5.dsc;
      const obj6 = { traceId: null, parentSpanId: null };
      ({ traceId: obj15.traceId, parentSpanId: obj15.parentSpanId } = obj5);
      const sampled = obj5.sampled;
      const merged4 = Object.assign(spanArguments);
      const tmp29 = _startRootSpan(obj6, scope, sampled);
      sentrySpan = tmp29;
      if (dsc) {
        const tmpResult22 = freezeDscOnSpan;
        tmpResult22.freezeDscOnSpan(tmp29, dsc);
        sentrySpan = tmp29;
      }
    }
  } else {
    const self = this;
    const self2 = this;
    const sentryNonRecordingSpan = new tmp(721).SentryNonRecordingSpan();
    if (forceTransaction) {
      const obj7 = { sampled: "false", sample_rate: "0", transaction: spanArguments.name };
      const tmpResult23 = freezeDscOnSpan;
      const merged5 = Object.assign(tmpResult23.getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      const tmpResult24 = freezeDscOnSpan;
      tmpResult24.freezeDscOnSpan(sentryNonRecordingSpan, obj7);
    }
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name, getPropagationContext, parentSampled) {
  let obj3;
  let obj6;
  let parseSampleRate;
  let sampleSpanResult;
  let sample_rate;
  let tmp11;
  let tmp12;
  let tmp13;
  const obj = _mod713;
  const client = obj.getClient();
  let options;
  if (client != null) {
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
  const obj2 = { spanAttributes: obj3, spanName: str, parentSampled };
  obj3 = {};
  const merged = Object.assign(name.attributes);
  if (client != null) {
    client.emit("beforeSampling", obj2, { decision: false });
  }
  parentSampled = obj2.parentSampled;
  const spanAttributes = obj2.spanAttributes;
  const propagationContext = getPropagationContext.getPropagationContext();
  if (getPropagationContext.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    sampleSpanResult = items;
  } else {
    const obj4 = { name: str, parentSampled, attributes: spanAttributes, parentSampleRate: parseSampleRate(sample_rate) };
    const sampleSpan = sampleSpan2.sampleSpan;
    sampleSpan2;
    const dsc = propagationContext.dsc;
    sample_rate = undefined;
    parseSampleRate = _mod701.parseSampleRate;
    _mod701;
    if (dsc != null) {
      sample_rate = dsc.sample_rate;
    }
    sampleSpanResult = sampleSpan(options, obj4, propagationContext.sampleRand);
  }
  [tmp11, tmp12, tmp13] = sampleSpanResult;
  const obj5 = { attributes: obj6, sampled: tmp11 };
  _slicedToArray(sampleSpanResult, 3);
  const SentrySpan = tmp(725).SentrySpan;
  const merged1 = Object.assign(name);
  obj6 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  let tmp15;
  const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = tmp(704).SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
  if (undefined !== tmp12) {
    if (tmp13) {
      tmp15 = tmp12;
    }
  }
  obj6[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] = tmp15;
  const merged2 = Object.assign(spanAttributes);
  const sentrySpan = new SentrySpan(obj5);
  const tmp18 = !tmp11 && client;
  if (tmp18) {
    if (_mod688.DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
    }
    client.recordDroppedEvent("sample_rate", "transaction");
  }
  if (client) {
    client.emit("spanStart", sentrySpan);
  }
  return sentrySpan;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __SENTRY_SUPPRESS_TRACING__ = "__SENTRY_SUPPRESS_TRACING__";

export const continueTrace = (arg0, arg1) => {
  let baggage;
  let closure_0;
  _require = arg1;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("module_690");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("module_706");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage } = arg0);
    let tmpResult = tmp(713);
    const client = tmpResult.getClient();
    const tmpResult5 = tmp(700);
    let result = tmpResult5.baggageHeaderToDynamicSamplingContext(baggage);
    if (client) {
      let withScopeResult;
      let org_id;
      const shouldContinueTrace = tmp(699).shouldContinueTrace;
      tmp(699);
      if (result != null) {
        org_id = result.org_id;
      }
      if (!shouldContinueTrace(client, org_id)) {
        _require = arg1;
        const tmpResult7 = tmp(713);
        withScopeResult = tmpResult7.withScope((setPropagationContext) => {
          let obj2;
          let obj3;
          let withActiveSpanResult;
          setPropagationContext = setPropagationContext.setPropagationContext;
          const obj = { traceId: obj2.generateTraceId(), sampleRand: obj3.safeMathRandom() };
          obj2 = closure_0(dependencyMap[11]);
          obj3 = closure_0(dependencyMap[12]);
          const result = setPropagationContext(obj);
          if (closure_0(dependencyMap[13]).DEBUG_BUILD) {
            const debug = tmp(tmp2[14]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
          }
          let c0 = null;
          dependencyMap = closure_0;
          const tmpResult = closure_0(dependencyMap[7]);
          const mainCarrier = tmpResult.getMainCarrier();
          const tmpResult3 = closure_0(dependencyMap[8]);
          const asyncContextStrategy = tmpResult3.getAsyncContextStrategy(mainCarrier);
          const tmp6 = closure_0;
          if (asyncContextStrategy.withActiveSpan) {
            withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, tmp6);
          } else {
            const tmpResult4 = closure_0(dependencyMap[1]);
            withActiveSpanResult = tmpResult4.withScope((arg0) => {
              const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
              parentSpan(obj4[3]);
              _setSpanForScope(arg0, closure_0);
              return closure_1(arg0);
            });
          }
          return withActiveSpanResult;
        });
      }
      return withScopeResult;
    }
    const tmpResult8 = tmp(713);
    withScopeResult = tmpResult8.withScope((setPropagationContext) => {
      const obj = regExp;
      const result = setPropagationContext.setPropagationContext(obj.propagationContextFromHeaders(dependencyMap, baggage));
      const obj2 = _getSpanForScope;
      obj2._setSpanForScope(setPropagationContext, undefined);
      return closure_0();
    });
  }
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  let forceTransaction;
  let obj4;
  let parentSpan;
  let tmpResult;
  _require = experimental;
  let tmp = _require;
  let tmp2 = obj4;
  let obj = require("module_690");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("module_706");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    let fn;
    const tmp4 = experimental.experimental || {};
    const obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
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
        const obj = _mod713;
        return obj.withScope(experimental.scope, arg0);
      };
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        let withActiveSpanResult;
        let closure_1 = arg0;
        const tmp = parentSpan;
        const obj = _mod690;
        const mainCarrier = obj.getMainCarrier();
        const obj2 = _mod706;
        const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          const tmp2Result = _mod713;
          withActiveSpanResult = tmp2Result.withScope((arg0) => {
            const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
            parentSpan(obj4[3]);
            _setSpanForScope(arg0, closure_0);
            return closure_1(arg0);
          });
        }
        return withActiveSpanResult;
      }) : ((fn) => fn());
    }
    return fn(function() {
      const obj = _mod713;
      const currentScope = obj.getCurrentScope();
      let tmp5 = parentSpan;
      if (!tmp5) {
        if (null !== tmp4) {
          const tmpResult = _getSpanForScope;
          const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
          if (_getSpanForScopeResult) {
            let options;
            const tmpResult3 = _mod713;
            const client = tmpResult3.getClient();
            if (client) {
              options = client.getOptions();
            } else {
              options = {};
            }
            let rootSpan = _getSpanForScopeResult;
            if (options.parentSpanIsAlwaysRootSpan) {
              const tmpResult4 = TRACE_FLAG_NONE;
              rootSpan = tmpResult4.getRootSpan(_getSpanForScopeResult);
            }
            tmp5 = rootSpan;
          }
        }
      }
      if (experimental.onlyIfParent) {
        let sentryNonRecordingSpan;
        if (!tmp5) {
          const self = this;
          const self2 = this;
          sentryNonRecordingSpan = new tmp(721).SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      const obj2 = { parentSpan: tmp5, spanArguments: obj4, forceTransaction: _slicedToArray, scope: currentScope };
      sentryNonRecordingSpan = createChildOrRootSpan(obj2);
    });
  }
};
export const startNewTrace = function startNewTrace(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("module_713");
  return obj.withScope((setPropagationContext) => {
    let obj2;
    let obj3;
    let withActiveSpanResult;
    setPropagationContext = setPropagationContext.setPropagationContext;
    const obj = { traceId: obj2.generateTraceId(), sampleRand: obj3.safeMathRandom() };
    obj2 = closure_0(dependencyMap[11]);
    obj3 = closure_0(dependencyMap[12]);
    const result = setPropagationContext(obj);
    if (closure_0(dependencyMap[13]).DEBUG_BUILD) {
      const debug = tmp(tmp2[14]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    let c0 = null;
    dependencyMap = closure_0;
    const tmpResult = closure_0(dependencyMap[7]);
    const mainCarrier = tmpResult.getMainCarrier();
    const tmpResult3 = closure_0(dependencyMap[8]);
    const asyncContextStrategy = tmpResult3.getAsyncContextStrategy(mainCarrier);
    const tmp6 = closure_0;
    if (asyncContextStrategy.withActiveSpan) {
      withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, tmp6);
    } else {
      const tmpResult4 = closure_0(dependencyMap[1]);
      withActiveSpanResult = tmpResult4.withScope((arg0) => {
        const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
        parentSpan(obj4[3]);
        _setSpanForScope(arg0, closure_0);
        return closure_1(arg0);
      });
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  let closure_1;
  let scope;
  let tmpResult;
  _require = experimental;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("module_690");
  const mainCarrier = obj.getMainCarrier();
  let obj2 = require("module_706");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    const tmp4 = experimental.experimental || {};
    const obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    let tmp6 = experimental;
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      let obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(684);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    const tmpResult2 = tmp(713);
    return tmpResult2.withScope(cloneResult, () => {
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
            const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
            parentSpan(obj4[3]);
            _setSpanForScope(arg0, closure_0);
            return closure_1(arg0);
          });
        }
        return withActiveSpanResult;
      }) : f71905(function() {
        let sentryNonRecordingSpan;
        let tmp = experimental;
        let tmp2 = closure_1_1;
        let obj = experimental(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let tmp5 = closure_4;
        if (!tmp5) {
          let tmp6 = null;
          if (null !== tmp4) {
            const tmpResult = tmp(tmp2[3]);
            const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              let options;
              const tmpResult5 = tmp(tmp2[1]);
              const client = tmpResult5.getClient();
              if (client) {
                options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                const tmpResult6 = tmp(tmp2[5]);
                rootSpan = tmpResult6.getRootSpan(_getSpanForScopeResult);
              }
              tmp5 = rootSpan;
            }
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            const self = this;
            const self2 = this;
            sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
          }
          const tmpResult7 = tmp(tmp2[3]);
          tmpResult7._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult8 = tmp(tmp2[4]);
          return tmpResult8.handleCallbackErrors(() => closure_2_1(sentryNonRecordingSpan), () => {
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
          }, () => {
            sentryNonRecordingSpan.end();
          });
        }
        let obj2 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj2);
      });
    });
  }
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  let scope;
  let tmpResult;
  _require = experimental;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("module_690");
  let mainCarrier = obj.getMainCarrier();
  let obj2 = require("module_706");
  let asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    const tmp4 = experimental.experimental || {};
    const obj3 = { isStandalone: tmp4.standalone };
    let tmp5 = obj3;
    let tmp6 = experimental;
    const merged = Object.assign(experimental);
    let tmp8 = obj3;
    if (experimental.startTime) {
      let obj4 = { startTimestamp: tmpResult.spanTimeInputToSeconds(experimental.startTime) };
      const merged1 = Object.assign(obj3);
      tmpResult = tmp(684);
      delete obj5["startTime"];
      tmp8 = obj4;
    }
    obj4 = tmp8;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    const tmpResult2 = tmp(713);
    return tmpResult2.withScope(cloneResult, () => {
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
            const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
            parentSpan(obj4[3]);
            _setSpanForScope(arg0, closure_0);
            return closure_1(arg0);
          });
        }
        return withActiveSpanResult;
      }) : f71905(function() {
        let sentryNonRecordingSpan;
        let tmp = experimental;
        let tmp2 = closure_1_1;
        let obj = experimental(closure_1_1[1]);
        const currentScope = obj.getCurrentScope();
        let tmp5 = closure_4;
        if (!tmp5) {
          let tmp6 = null;
          if (null !== tmp4) {
            const tmpResult = tmp(tmp2[3]);
            const _getSpanForScopeResult = tmpResult._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              let options;
              const tmpResult5 = tmp(tmp2[1]);
              const client = tmpResult5.getClient();
              if (client) {
                options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                const tmpResult6 = tmp(tmp2[5]);
                rootSpan = tmpResult6.getRootSpan(_getSpanForScopeResult);
              }
              tmp5 = rootSpan;
            }
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            const self = this;
            const self2 = this;
            sentryNonRecordingSpan = new tmp(tmp2[2]).SentryNonRecordingSpan();
          }
          const tmpResult7 = tmp(tmp2[3]);
          tmpResult7._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult8 = tmp(tmp2[4]);
          return tmpResult8.handleCallbackErrors(() => closure_2_1(sentryNonRecordingSpan, () => sentryNonRecordingSpan.end()), () => {
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
          });
        }
        let obj2 = { parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope };
        sentryNonRecordingSpan = closure_1_4(obj2);
      });
    });
  }
};
export const suppressTracing = function suppressTracing(arg0) {
  let closure_0;
  let suppressTracingResult;
  _require = arg0;
  let tmp2 = dependencyMap;
  const obj = require("module_690");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("module_706");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp = _require;
  if (asyncContextStrategy.suppressTracing) {
    suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    const tmpResult = tmp(713);
    suppressTracingResult = tmpResult.withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      const tmp2 = closure_0();
      const result1 = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: undefined });
      return tmp2;
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
  const obj = require("module_690");
  const mainCarrier = obj.getMainCarrier();
  const obj2 = require("module_706");
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  const tmp = _require;
  if (asyncContextStrategy.withActiveSpan) {
    withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    const tmpResult = tmp(713);
    withActiveSpanResult = tmpResult.withScope((arg0) => {
      const _setSpanForScope = parentSpan(obj4[3])._setSpanForScope;
      parentSpan(obj4[3]);
      _setSpanForScope(arg0, closure_0);
      return closure_1(arg0);
    });
  }
  return withActiveSpanResult;
};
