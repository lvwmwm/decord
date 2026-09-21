// Module ID: 735
// Function ID: 736
// Dependencies: [32, 717, 725, 713, 736, 688, 709, 694, 710, 704, 703, 698, 700, 692, 693, 724, 726, 730, 689, 737, 705, 729, 708]
// Exports: continueTrace, startInactiveSpan, startNewTrace, startSpan, startSpanManual, suppressTracing, withActiveSpan

// Module 735
import _mod692 from "module_692" /* 692 */;
import _mod694 from "module_694" /* 694 */;
import generateSpanId from "generateSpanId" /* 698 */;
import safeDateNow from "safeDateNow" /* 700 */;
import _mod703 from "module_703" /* 703 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 708 */;
import _mod710 from "module_710" /* 710 */;
import _getSpanForScope from "_getSpanForScope" /* 713 */;
import _mod717 from "module_717" /* 717 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

function createChildOrRootSpan(arg0) {
  ({ parentSpan, spanArguments, forceTransaction, scope } = arg0);
  if (obj.hasSpansEnabled()) {
    const isolationScope = tmp(717).getIsolationScope();
    if (parentSpan) {
      if (!forceTransaction) {
        ({ traceId, spanId } = parentSpan.spanContext());
        const tmp12 = scope.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__];
        let spanIsSampledResult = !tmp12;
        if (!tmp12) {
          spanIsSampledResult = tmp(688).spanIsSampled(parentSpan);
          const tmpResult13 = tmp(688);
        }
        if (spanIsSampledResult) {
          const obj2 = {};
          const merged = Object.assign(spanArguments);
          obj2.parentSpanId = spanId;
          obj2.traceId = traceId;
          obj2.sampled = spanIsSampledResult;
          let sentrySpan = new tmp(729).SentrySpan(obj2);
        } else {
          const obj3 = { traceId };
          sentrySpan = new tmp(725).SentryNonRecordingSpan(obj3);
        }
        const spanContextResult = parentSpan.spanContext();
        tmp(688).addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult14 = tmp(688);
        const client = tmp(717).getClient();
        if (client) {
          client.emit("spanStart", sentrySpan);
          if (spanArguments.endTimestamp) {
            client.emit("spanEnd", sentrySpan);
          }
        }
        const tmpResult15 = tmp(717);
        tmp(688).addChildSpanToSpan(parentSpan, sentrySpan);
        const tmpResult16 = tmp(688);
      }
      tmp(730).logSpanStart(sentrySpan);
      const tmpResult17 = tmp(730);
      const result = tmp(689).setCapturedScopesOnSpan(sentrySpan, scope, isolationScope);
      return sentrySpan;
    }
    if (parentSpan) {
      const dynamicSamplingContextFromSpan = tmp(726).getDynamicSamplingContextFromSpan(parentSpan);
      const tmpResult19 = tmp(726);
      ({ traceId: traceId2, spanId: spanId2 } = parentSpan.spanContext());
      const spanContextResult1 = parentSpan.spanContext();
      const obj4 = { traceId: traceId2, parentSpanId: spanId2 };
      const tmpResult20 = tmp(688);
      const merged1 = Object.assign(spanArguments);
      const tmp45 = _startRootSpan(obj4, scope, tmp(688).spanIsSampled(parentSpan));
      const spanIsSampledResult1 = tmp(688).spanIsSampled(parentSpan);
      tmp(726).freezeDscOnSpan(tmp45, dynamicSamplingContextFromSpan);
      sentrySpan = tmp45;
      const tmpResult21 = tmp(726);
    } else {
      const obj5 = {};
      const merged2 = Object.assign(isolationScope.getPropagationContext());
      const merged3 = Object.assign(scope.getPropagationContext());
      const dsc = obj5.dsc;
      const obj6 = { traceId: null, parentSpanId: null };
      ({ traceId: obj15.traceId, parentSpanId: obj15.parentSpanId } = obj5);
      const merged4 = Object.assign(spanArguments);
      const tmp36 = _startRootSpan(obj6, scope, obj5.sampled);
      sentrySpan = tmp36;
      if (dsc) {
        tmp(726).freezeDscOnSpan(tmp36, dsc);
        sentrySpan = tmp36;
        const tmpResult22 = tmp(726);
      }
    }
    const tmpResult = tmp(717);
  } else {
    const sentryNonRecordingSpan = new tmp(725).SentryNonRecordingSpan();
    if (forceTransaction) {
      const obj7 = { sampled: "false", sample_rate: "0", transaction: spanArguments.name };
      const merged5 = Object.assign(tmp(726).getDynamicSamplingContextFromSpan(sentryNonRecordingSpan));
      const tmpResult23 = tmp(726);
      tmp(726).freezeDscOnSpan(sentryNonRecordingSpan, obj7);
      const tmpResult24 = tmp(726);
    }
    return sentryNonRecordingSpan;
  }
}
function _startRootSpan(name, getPropagationContext, parentSampled) {
  const client = _mod717.getClient();
  options = undefined;
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
  const obj2 = { spanAttributes: null, spanName: null, parentSampled: null };
  const merged = Object.assign(name.attributes);
  obj2.spanAttributes = {};
  obj2.spanName = str;
  obj2.parentSampled = parentSampled;
  if (client != null) {
    client.emit("beforeSampling", obj2, { decision: false });
  }
  parentSampled = obj2.parentSampled;
  const spanAttributes = obj2.spanAttributes;
  const propagationContext = getPropagationContext.getPropagationContext();
  if (getPropagationContext.getScopeData().sdkProcessingMetadata[__SENTRY_SUPPRESS_TRACING__]) {
    const items = [false];
    let sampleSpanResult = items;
  } else {
    const obj4 = { name: str, parentSampled, attributes: spanAttributes, parentSampleRate: null };
    const tmpResult = tmp(737);
    const dsc = propagationContext.dsc;
    let sample_rate;
    if (dsc != null) {
      sample_rate = dsc.sample_rate;
    }
    obj4.parentSampleRate = tmp(705).parseSampleRate(sample_rate);
    sampleSpanResult = tmpResult.sampleSpan(options, obj4, propagationContext.sampleRand);
    const tmpResult2 = tmp(705);
  }
  const obj3 = {};
  [tmp9, tmp10, tmp11] = sampleSpanResult;
  const obj5 = {};
  const merged1 = Object.assign(name);
  const obj6 = { [SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom" };
  let tmp13;
  if (undefined !== tmp10) {
    if (tmp11) {
      tmp13 = tmp10;
    }
  }
  obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] = tmp13;
  const merged2 = Object.assign(spanAttributes);
  obj5.attributes = obj6;
  obj5.sampled = tmp9;
  const sentrySpan = new tmp(729).SentrySpan(obj5);
  let tmp16 = !tmp9;
  if (!tmp9) {
    tmp16 = client;
  }
  if (tmp16) {
    if (tmp(692).DEBUG_BUILD) {
      const debug = tmp(693).debug;
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
  _require = arg1;
  let mainCarrier = require("module_694").getMainCarrier();
  let obj = require("module_694");
  let asyncContextStrategy = require("module_710").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.continueTrace) {
    return asyncContextStrategy.continueTrace(arg0, arg1);
  } else {
    ({ sentryTrace: dependencyMap, baggage } = arg0);
    const client = tmp(717).getClient();
    let tmpResult = tmp(717);
    let result = tmp(704).baggageHeaderToDynamicSamplingContext(baggage);
    if (client) {
      let org_id;
      if (result != null) {
        org_id = result.org_id;
      }
      if (!tmpResult6.shouldContinueTrace(client, org_id)) {
        closure_129_0 = arg1;
        let withScopeResult = tmp(717).withScope((setPropagationContext) => {
          const obj = { traceId: generateSpanId.generateTraceId(), sampleRand: null };
          obj.sampleRand = safeDateNow.safeMathRandom();
          const result = setPropagationContext.setPropagationContext(obj);
          if (_mod692.DEBUG_BUILD) {
            const debug = tmp(693).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
          }
          c0 = null;
          closure_1 = closure_0;
          const tmp6 = closure_0;
          const mainCarrier = _mod694.getMainCarrier();
          const tmpResult = _mod694;
          const asyncContextStrategy = _mod710.getAsyncContextStrategy(mainCarrier);
          if (asyncContextStrategy.withActiveSpan) {
            let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, tmp6);
          } else {
            withActiveSpanResult = tmp(717).withScope((arg0) => {
              closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
              return closure_1(arg0);
            });
            const tmpResult4 = tmp(717);
          }
          return withActiveSpanResult;
        });
        const tmpResult7 = tmp(717);
      }
      return withScopeResult;
    }
    const tmpResult5 = tmp(704);
    withScopeResult = tmp(717).withScope((setPropagationContext) => {
      const result = setPropagationContext.setPropagationContext(_mod703.propagationContextFromHeaders(dependencyMap, baggage));
      _getSpanForScope._setSpanForScope(setPropagationContext, undefined);
      return closure_0();
    });
    const tmpResult8 = tmp(717);
  }
};
export const startInactiveSpan = function startInactiveSpan(experimental) {
  _require = experimental;
  let mainCarrier = require("module_694").getMainCarrier();
  let obj = require("module_694");
  const tmp3 = _require;
  const tmp4 = obj4;
  let asyncContextStrategy = require("module_710").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startInactiveSpan) {
    return asyncContextStrategy.startInactiveSpan(experimental);
  } else {
    const obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(tmp4[5]).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(tmp4[5]);
    }
    obj4 = tmp10;
    ({ forceTransaction: _slicedToArray, parentSpan } = experimental);
    if (experimental.scope) {
      let fn = (arg0) => _mod717.withScope(experimental.scope, arg0);
    } else {
      fn = undefined !== parentSpan ? ((arg0) => {
        closure_0 = parentSpan;
        closure_1 = arg0;
        const mainCarrier = _mod694.getMainCarrier();
        const tmp = parentSpan;
        const asyncContextStrategy = _mod710.getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = _mod717.withScope((arg0) => {
            closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
            return closure_1(arg0);
          });
          const tmp2Result = _mod717;
        }
        return withActiveSpanResult;
      }) : ((fn) => fn());
    }
    return fn(() => {
      const currentScope = _mod717.getCurrentScope();
      let tmp5 = parentSpan;
      if (!parentSpan) {
        if (null !== tmp4) {
          const _getSpanForScopeResult = tmp(713)._getSpanForScope(currentScope);
          if (_getSpanForScopeResult) {
            const client = tmp(717).getClient();
            if (client) {
              options = client.getOptions();
            } else {
              options = {};
            }
            let rootSpan = _getSpanForScopeResult;
            if (options.parentSpanIsAlwaysRootSpan) {
              rootSpan = tmp(688).getRootSpan(_getSpanForScopeResult);
              const tmpResult4 = tmp(688);
            }
            tmp5 = rootSpan;
            const tmpResult3 = tmp(717);
          }
          const tmpResult = tmp(713);
        }
      }
      if (experimental.onlyIfParent) {
        if (!tmp5) {
          let sentryNonRecordingSpan = new tmp(725).SentryNonRecordingSpan();
        }
        return sentryNonRecordingSpan;
      }
      sentryNonRecordingSpan = createChildOrRootSpan({ parentSpan: tmp5, spanArguments: obj4, forceTransaction, scope: currentScope });
    });
  }
  const obj2 = require("module_710");
};
export const startNewTrace = function startNewTrace(arg0) {
  _require = arg0;
  return require("module_717").withScope((setPropagationContext) => {
    const obj = { traceId: generateSpanId.generateTraceId(), sampleRand: null };
    obj.sampleRand = safeDateNow.safeMathRandom();
    const result = setPropagationContext.setPropagationContext(obj);
    if (_mod692.DEBUG_BUILD) {
      const debug = tmp(693).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Starting a new trace with id " + setPropagationContext.getPropagationContext().traceId);
    }
    c0 = null;
    closure_1 = closure_0;
    const tmp6 = closure_0;
    const mainCarrier = _mod694.getMainCarrier();
    const tmpResult = _mod694;
    const asyncContextStrategy = _mod710.getAsyncContextStrategy(mainCarrier);
    if (asyncContextStrategy.withActiveSpan) {
      let withActiveSpanResult = asyncContextStrategy.withActiveSpan(null, tmp6);
    } else {
      withActiveSpanResult = tmp(717).withScope((arg0) => {
        closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
        return closure_1(arg0);
      });
      const tmpResult4 = tmp(717);
    }
    return withActiveSpanResult;
  });
};
export const startSpan = function startSpan(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  const mainCarrier = require("module_694").getMainCarrier();
  const obj = require("module_694");
  const asyncContextStrategy = require("module_710").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpan) {
    return asyncContextStrategy.startSpan(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(688).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(688);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    return tmp3(717).withScope(cloneResult, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(694).getMainCarrier();
        const obj = closure_0(694);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(710).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(717).withScope((arg0) => {
            closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(717);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        const currentScope = sentryNonRecordingSpan(717).getCurrentScope();
        let tmp5 = closure_4;
        if (!closure_4) {
          if (null !== tmp4) {
            const _getSpanForScopeResult = tmp(713)._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              const client = tmp(717).getClient();
              if (client) {
                options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = tmp(688).getRootSpan(_getSpanForScopeResult);
                const tmpResult6 = tmp(688);
              }
              tmp5 = rootSpan;
              const tmpResult5 = tmp(717);
            }
            const tmpResult = tmp(713);
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(725).SentryNonRecordingSpan();
          }
          tmp(713)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult7 = tmp(713);
          return tmp(736).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan), () => {
            const status = sentryNonRecordingSpan(dependencyMap[5]).spanToJSON(sentryNonRecordingSpan).status;
            const isRecordingResult = sentryNonRecordingSpan.isRecording();
            let tmp4 = !isRecordingResult;
            if (isRecordingResult) {
              let tmp5 = status;
              if (status) {
                tmp5 = "ok" !== status;
              }
              tmp4 = tmp5;
            }
            if (!tmp4) {
              const obj3 = { code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              sentryNonRecordingSpan.setStatus(obj3);
            }
          }, () => {
            sentryNonRecordingSpan.end();
          });
        }
        sentryNonRecordingSpan = closure_1_4({ parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope });
      });
    });
  }
  const obj2 = require("module_710");
};
export const startSpanManual = function startSpanManual(experimental, arg1) {
  _require = experimental;
  dependencyMap = arg1;
  let mainCarrier = require("module_694").getMainCarrier();
  let obj = require("module_694");
  let asyncContextStrategy = require("module_710").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.startSpanManual) {
    return asyncContextStrategy.startSpanManual(experimental, arg1);
  } else {
    let obj3 = { isStandalone: experimental.experimental || {}.standalone };
    const merged = Object.assign(experimental);
    let tmp10 = obj3;
    if (experimental.startTime) {
      let obj4 = {};
      const merged1 = Object.assign(obj3);
      obj4.startTimestamp = tmp3(688).spanTimeInputToSeconds(experimental.startTime);
      delete tmp[tmp2];
      tmp10 = obj4;
      const tmp3Result = tmp3(688);
    }
    obj4 = tmp10;
    ({ forceTransaction: __SENTRY_SUPPRESS_TRACING__, parentSpan: createChildOrRootSpan, scope } = experimental);
    let cloneResult;
    if (scope != null) {
      cloneResult = scope.clone();
    }
    return tmp3(717).withScope(cloneResult, () => {
      closure_0 = createChildOrRootSpan;
      return undefined !== createChildOrRootSpan ? ((arg0) => {
        dependencyMap = arg0;
        const mainCarrier = closure_0(694).getMainCarrier();
        const obj = closure_0(694);
        const tmp = closure_0;
        const tmp2 = closure_0;
        const asyncContextStrategy = closure_0(710).getAsyncContextStrategy(mainCarrier);
        if (asyncContextStrategy.withActiveSpan) {
          let withActiveSpanResult = asyncContextStrategy.withActiveSpan(tmp, arg0);
        } else {
          withActiveSpanResult = tmp2(717).withScope((arg0) => {
            closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
            return closure_1(arg0);
          });
          const tmp2Result = tmp2(717);
        }
        return withActiveSpanResult;
      }) : ((fn) => fn())(() => {
        const currentScope = sentryNonRecordingSpan(717).getCurrentScope();
        let tmp5 = closure_4;
        if (!closure_4) {
          if (null !== tmp4) {
            const _getSpanForScopeResult = tmp(713)._getSpanForScope(currentScope);
            if (_getSpanForScopeResult) {
              const client = tmp(717).getClient();
              if (client) {
                options = client.getOptions();
              } else {
                options = {};
              }
              let rootSpan = _getSpanForScopeResult;
              if (options.parentSpanIsAlwaysRootSpan) {
                rootSpan = tmp(688).getRootSpan(_getSpanForScopeResult);
                const tmpResult6 = tmp(688);
              }
              tmp5 = rootSpan;
              const tmpResult5 = tmp(717);
            }
            const tmpResult = tmp(713);
          }
        }
        if (sentryNonRecordingSpan.onlyIfParent) {
          if (!tmp5) {
            sentryNonRecordingSpan = new tmp(725).SentryNonRecordingSpan();
          }
          tmp(713)._setSpanForScope(currentScope, sentryNonRecordingSpan);
          const tmpResult7 = tmp(713);
          return tmp(736).handleCallbackErrors(() => dependencyMap(sentryNonRecordingSpan, () => sentryNonRecordingSpan.end()), () => {
            const status = sentryNonRecordingSpan(dependencyMap[5]).spanToJSON(sentryNonRecordingSpan).status;
            const isRecordingResult = sentryNonRecordingSpan.isRecording();
            let tmp4 = !isRecordingResult;
            if (isRecordingResult) {
              let tmp5 = status;
              if (status) {
                tmp5 = "ok" !== status;
              }
              tmp4 = tmp5;
            }
            if (!tmp4) {
              const obj3 = { code: sentryNonRecordingSpan(dependencyMap[6]).SPAN_STATUS_ERROR, message: "internal_error" };
              sentryNonRecordingSpan.setStatus(obj3);
            }
          });
        }
        sentryNonRecordingSpan = closure_1_4({ parentSpan: tmp5, spanArguments, forceTransaction, scope: currentScope });
      });
    });
  }
  const obj2 = require("module_710");
};
export const suppressTracing = function suppressTracing(arg0) {
  _require = arg0;
  const mainCarrier = require("module_694").getMainCarrier();
  const obj = require("module_694");
  const tmp = _require;
  const asyncContextStrategy = require("module_710").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.suppressTracing) {
    let suppressTracingResult = asyncContextStrategy.suppressTracing(arg0);
  } else {
    suppressTracingResult = tmp(717).withScope((setSDKProcessingMetadata) => {
      const result = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: true });
      const result1 = setSDKProcessingMetadata.setSDKProcessingMetadata({ [closure_2_3]: undefined });
      return closure_0();
    });
    const tmpResult = tmp(717);
  }
  return suppressTracingResult;
};
export const withActiveSpan = function withActiveSpan(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const mainCarrier = require("module_694").getMainCarrier();
  const obj = require("module_694");
  const tmp = _require;
  const asyncContextStrategy = require("module_710").getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.withActiveSpan) {
    let withActiveSpanResult = asyncContextStrategy.withActiveSpan(arg0, arg1);
  } else {
    withActiveSpanResult = tmp(717).withScope((arg0) => {
      closure_0(obj4[3])._setSpanForScope(arg0, closure_0);
      return closure_1(arg0);
    });
    const tmpResult = tmp(717);
  }
  return withActiveSpanResult;
};
