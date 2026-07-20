// Module ID: 1068
// Function ID: 12259
// Name: startBrowserTracingPageLoadSpan
// Dependencies: [977, 65, 1089, 978, 977, 794]
// Exports: browserTracingIntegration

// Module 1068 (startBrowserTracingPageLoadSpan)
import getRNSentryModule from "getRNSentryModule";

function startBrowserTracingPageLoadSpan(emit, name) {
  emit.emit("startPageLoadSpan", name, arg2);
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  currentScope.setTransactionName(name.name);
  const tmp3 = getActiveIdleSpan(emit);
  if (tmp3) {
    emit.emit("afterStartPageLoadSpan", tmp3);
  }
  return tmp3;
}
function startBrowserTracingNavigationSpan(closure_0, name) {
  let isRedirect;
  let url;
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  ({ url, isRedirect } = obj);
  closure_0.emit("beforeStartNavigationSpan", name, { isRedirect });
  closure_0.emit("startNavigationSpan", name, { isRedirect });
  const currentScope = require(dependencyMap[1]).getCurrentScope();
  currentScope.setTransactionName(name.name);
  let tmp4 = url;
  if (url) {
    tmp4 = !isRedirect;
  }
  if (tmp4) {
    obj = {};
    const _Object = Object;
    obj = { url };
    obj.normalizedRequest = Object.assign({}, require(dependencyMap[3]).getHttpRequestData(), obj);
    const result = currentScope.setSDKProcessingMetadata(obj);
    const obj5 = require(dependencyMap[3]);
  }
  return getActiveIdleSpan(closure_0);
}
function getMetaContent(arg0) {
  const _document = require(dependencyMap[3]).WINDOW.document;
  let element;
  if (null != _document) {
    const _HermesInternal = HermesInternal;
    element = _document.querySelector("meta[name=" + arg0 + "]");
  }
  let attr;
  if (null != element) {
    attr = element.getAttribute("content");
  }
  return attr;
}
function getActiveIdleSpan(closure_0) {
  return closure_0[closure_4];
}
function setActiveIdleSpan(arg0, arg1) {
  const result = require(dependencyMap[1]).addNonEnumerableProperty(arg0, closure_4, arg1);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = Object.assign({}, require("_toConsumableArray").TRACING_DEFAULTS, { ignoreResourceSpans: [], ignorePerformanceApiSpans: [], _experiments: {} }, require("module_1089").defaultRequestInstrumentationOptions);
let closure_4 = "_sentry_idleSpan";

export const BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
export const browserTracingIntegration = function browserTracingIntegration(arg0) {
  let _experiments;
  function _createRouteSpan(arg0, op) {
    function emitFinish() {
      let hasItem = readyState;
      if (readyState) {
        const items = [];
        hasItem = items.includes(readyState.readyState);
      }
      if (hasItem) {
        arg0.emit("idleSpanEnableAutoFinish", startIdleSpanResult);
      }
    }
    let obj = emitFinish;
    const tmp = arguments.length > 2 && undefined !== arguments[2];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = arguments[2];
    }
    let tmp3 = "pageload" === op.op;
    let tmp4 = op;
    if (callback4) {
      tmp4 = callback4(op);
    }
    const tmp6 = tmp4.attributes || {};
    if (op.name !== tmp4.name) {
      tmp6[arg0(tmp3[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom";
      tmp4.attributes = tmp6;
    }
    if (tmp2) {
      obj.name = tmp4.name;
      obj.source = tmp6[closure_0(undefined, closure_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
      obj = {
        idleTimeout: closure_13,
        finalTimeout: closure_14,
        childSpanTimeout: closure_15,
        disableAutoFinish: tmp3,
        beforeSpanEnd(startInactiveSpanResult) {
            if (null != startInactiveSpanResult) {
              startInactiveSpanResult();
            }
            let obj = startInactiveSpanResult(tmp3[4]);
            obj = { recordClsOnPageloadSpan: !closure_10, recordLcpOnPageloadSpan: !closure_11, ignoreResourceSpans: closure_22, ignorePerformanceApiSpans: closure_23 };
            const result = obj.addPerformanceEntries(startInactiveSpanResult, obj);
            callback(startInactiveSpanResult, undefined);
            const currentScope = startInactiveSpanResult(tmp3[1]).getCurrentScope();
            obj = {};
            const propagationContext = currentScope.getPropagationContext();
            obj.traceId = startIdleSpanResult.spanContext().traceId;
            const obj3 = startInactiveSpanResult(tmp3[1]);
            obj.sampled = startInactiveSpanResult(tmp3[1]).spanIsSampled(startIdleSpanResult);
            const obj6 = startInactiveSpanResult(tmp3[1]);
            obj.dsc = startInactiveSpanResult(tmp3[1]).getDynamicSamplingContextFromSpan(startInactiveSpanResult);
            const result1 = currentScope.setPropagationContext(Object.assign({}, propagationContext, obj));
          },
        trimIdleSpanEndTimestamp: !closure_29
      };
      const startIdleSpanResult = arg0(tmp3[1]).startIdleSpan(tmp4, obj);
      let tmp23 = tmp3;
      if (tmp3) {
        tmp23 = closure_29;
      }
      callback3(arg0, startIdleSpanResult);
      if (tmp3) {
        tmp3 = !closure_29;
      }
      if (tmp3) {
        tmp3 = document;
      }
      if (tmp3) {
        const listener = document.addEventListener("readystatechange", () => {
          emitFinish();
        });
        emitFinish();
      }
      const obj5 = arg0(tmp3[1]);
    } else {
      obj = arg0(tmp3[1]);
      const result = obj.dateTimestampInSeconds();
      const _Object = Object;
      obj = { startTime: result };
      const obj2 = arg0(tmp3[1]);
      arg0(tmp3[1]).startInactiveSpan(Object.assign({}, tmp4, obj)).end(result);
      const startInactiveSpanResult = arg0(tmp3[1]).startInactiveSpan(Object.assign({}, tmp4, obj));
    }
  }
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let obj = { name: undefined, source: undefined };
    let closure_3 = obj;
    const _document = require(dependencyMap[3]).WINDOW.document;
    const _Object = Object;
    const merged = Object.assign({}, closure_3, {});
    ({ enableInp: closure_5, enableElementTiming: closure_6, enableLongTask: closure_7, enableLongAnimationFrame: closure_8, _experiments } = merged);
    ({ enableInteractions: closure_9, enableStandaloneClsSpans: closure_10, enableStandaloneLcpSpans: closure_11 } = _experiments);
    ({ beforeStartSpan: closure_12, idleTimeout: closure_13, finalTimeout: closure_14, childSpanTimeout: closure_15, markBackgroundSpan: closure_16, traceFetch: closure_17, traceXHR: closure_18, trackFetchStreamPerformance: closure_19, shouldCreateSpanForRequest: closure_20, enableHTTPTimings: closure_21, ignoreResourceSpans: closure_22, ignorePerformanceApiSpans: closure_23, instrumentPageLoad: closure_24, instrumentNavigation: closure_25, detectRedirects: closure_26, linkPreviousTrace: closure_27, consistentTraceSampling: closure_28, enableReportPageLoaded: closure_29, onRequestSpanStart: closure_30, onRequestSpanEnd: closure_31 } = merged);
    obj = {
      name: "BrowserTracing",
      setup(client) {
          let callback = client;
          function maybeEndActiveSpan() {
            const obj = callback3(callback);
            let tmp = obj;
            if (obj) {
              tmp = !callback(maybeEndActiveSpan[1]).spanToJSON(obj).timestamp;
              const obj2 = callback(maybeEndActiveSpan[1]);
            }
            if (tmp) {
              if (callback(maybeEndActiveSpan[5]).DEBUG_BUILD) {
                const debug = callback(maybeEndActiveSpan[1]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[Tracing] Finishing current active span with op: " + callback(maybeEndActiveSpan[1]).spanToJSON(obj).op);
                const obj3 = callback(maybeEndActiveSpan[1]);
              }
              const attr = obj.setAttribute(callback(maybeEndActiveSpan[1]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled");
              obj.end();
            }
          }
          let obj = callback(maybeEndActiveSpan[1]);
          const result = obj.registerSpanErrorInstrumentation();
          obj = {};
          let flag = closure_10;
          if (!closure_10) {
            flag = false;
          }
          obj.recordClsStandaloneSpans = flag;
          let flag2 = closure_11;
          if (!closure_11) {
            flag2 = false;
          }
          obj.recordLcpStandaloneSpans = flag2;
          obj.client = client;
          callback = callback(maybeEndActiveSpan[4]).startTrackingWebVitals(obj);
          if (closure_5) {
            callback(maybeEndActiveSpan[4]).startTrackingINP();
            const obj4 = callback(maybeEndActiveSpan[4]);
          }
          if (closure_6) {
            const result1 = callback(maybeEndActiveSpan[4]).startTrackingElementTiming();
            const obj5 = callback(maybeEndActiveSpan[4]);
          }
          if (closure_8) {
            if (callback(maybeEndActiveSpan[1]).GLOBAL_OBJ.PerformanceObserver) {
              if (globalThis.PerformanceObserver.supportedEntryTypes) {
                const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
                if (supportedEntryTypes.includes("long-animation-frame")) {
                  const result2 = callback(maybeEndActiveSpan[4]).startTrackingLongAnimationFrames();
                  const obj7 = callback(maybeEndActiveSpan[4]);
                }
                if (closure_9) {
                  const result3 = callback(maybeEndActiveSpan[4]).startTrackingInteractions();
                  const obj8 = callback(maybeEndActiveSpan[4]);
                }
                if (closure_26) {
                  if (document) {
                    function interactionHandler() {
                      closure_1 = callback(closure_1[1]).timestampInSeconds();
                    }
                    obj = { capture: true };
                    const listener = globalThis.addEventListener("click", interactionHandler, obj);
                    const listener1 = globalThis.addEventListener("keydown", interactionHandler, { 1649303889: null, -898315181: null });
                  }
                }
                client.on("startNavigationSpan", (arg0, isRedirect) => {
                  let obj = callback(maybeEndActiveSpan[1]);
                  if (obj.getClient() === callback) {
                    if (null != isRedirect) {
                      if (isRedirect.isRedirect) {
                        if (callback(maybeEndActiveSpan[5]).DEBUG_BUILD) {
                          const debug = callback(maybeEndActiveSpan[1]).debug;
                          debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span.");
                        }
                        const _Object2 = Object;
                        obj = { op: "navigation.redirect" };
                        callback4(callback, Object.assign(obj, arg0), false);
                      }
                    }
                    let maybeEndActiveSpan;
                    maybeEndActiveSpan();
                    let obj1 = callback(maybeEndActiveSpan[1]);
                    const isolationScope = obj1.getIsolationScope();
                    obj = { traceId: callback(maybeEndActiveSpan[1]).generateTraceId() };
                    const _Math = Math;
                    obj.sampleRand = Math.random();
                    const obj5 = callback(maybeEndActiveSpan[1]);
                    let spanId;
                    if (!obj6.hasSpansEnabled()) {
                      spanId = callback(maybeEndActiveSpan[1]).generateSpanId();
                      const obj7 = callback(maybeEndActiveSpan[1]);
                    }
                    obj.propagationSpanId = spanId;
                    const result = isolationScope.setPropagationContext(obj);
                    const obj6 = callback(maybeEndActiveSpan[1]);
                    const currentScope = callback(maybeEndActiveSpan[1]).getCurrentScope();
                    obj1 = {};
                    const obj8 = callback(maybeEndActiveSpan[1]);
                    obj1.traceId = callback(maybeEndActiveSpan[1]).generateTraceId();
                    const _Math2 = Math;
                    obj1.sampleRand = Math.random();
                    const obj11 = callback(maybeEndActiveSpan[1]);
                    let spanId1;
                    if (!obj12.hasSpansEnabled()) {
                      spanId1 = callback(maybeEndActiveSpan[1]).generateSpanId();
                      const obj13 = callback(maybeEndActiveSpan[1]);
                    }
                    obj1.propagationSpanId = spanId1;
                    const result1 = currentScope.setPropagationContext(obj1);
                    const obj2 = { normalizedRequest: undefined };
                    const result2 = currentScope.setSDKProcessingMetadata(obj2);
                    const _Object = Object;
                    const obj3 = { op: "navigation" };
                    callback4(callback, Object.assign(obj3, arg0, {}));
                    const obj12 = callback(maybeEndActiveSpan[1]);
                  }
                });
                client.on("startPageLoadSpan", (arg0) => {
                  if (arguments.length > 1) {
                    if (undefined !== arguments[1]) {
                      let obj = arguments[1];
                    }
                    if (obj2.getClient() === callback) {
                      maybeEndActiveSpan();
                      let sentryTrace = obj.sentryTrace;
                      if (!sentryTrace) {
                        sentryTrace = callback2("sentry-trace");
                      }
                      let baggage = obj.baggage;
                      if (!baggage) {
                        baggage = callback2("baggage");
                      }
                      const result = callback(maybeEndActiveSpan[1]).propagationContextFromHeaders(sentryTrace, baggage);
                      const obj3 = callback(maybeEndActiveSpan[1]);
                      const currentScope = callback(maybeEndActiveSpan[1]).getCurrentScope();
                      const result1 = currentScope.setPropagationContext(result);
                      const obj4 = callback(maybeEndActiveSpan[1]);
                      if (!obj6.hasSpansEnabled()) {
                        const propagationContext = currentScope.getPropagationContext();
                        propagationContext.propagationSpanId = callback(maybeEndActiveSpan[1]).generateSpanId();
                        const obj7 = callback(maybeEndActiveSpan[1]);
                      }
                      obj = {};
                      const obj6 = callback(maybeEndActiveSpan[1]);
                      obj.normalizedRequest = callback(maybeEndActiveSpan[3]).getHttpRequestData();
                      const result2 = currentScope.setSDKProcessingMetadata(obj);
                      const _Object = Object;
                      obj = { op: "pageload" };
                      callback4(callback, Object.assign(obj, arg0));
                      const obj9 = callback(maybeEndActiveSpan[3]);
                    }
                  }
                  obj = {};
                });
                client.on("endPageloadSpan", () => {
                  let tmp = closure_29;
                  if (closure_29) {
                    tmp = closure_2;
                  }
                  if (tmp) {
                    const attr = closure_2.setAttribute(callback(maybeEndActiveSpan[1]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded");
                    closure_2.end();
                  }
                });
              }
            }
          }
          if (closure_7) {
            const result4 = callback(maybeEndActiveSpan[4]).startTrackingLongTasks();
            const obj6 = callback(maybeEndActiveSpan[4]);
          }
        },
      afterAllSetup(getOptions) {
          let obj = getOptions(locationHref[1]);
          const locationHref = obj.getLocationHref();
          if ("off" !== closure_27) {
            let obj1 = getOptions(locationHref[6]);
            obj = { linkPreviousTrace: closure_27, consistentTraceSampling: closure_28 };
            obj1.linkTraces(getOptions, obj);
          }
          if (getOptions(locationHref[3]).WINDOW.location) {
            if (closure_24) {
              const result = getOptions(locationHref[1]).browserPerformanceTimeOrigin();
              obj = { name: getOptions(locationHref[3]).WINDOW.location.pathname };
              let result1;
              if (result) {
                result1 = result / 1000;
              }
              obj.startTime = result1;
              const obj4 = getOptions(locationHref[1]);
              const tmp10 = closure_5;
              obj.attributes = callback2(callback2({}, getOptions(locationHref[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), getOptions(locationHref[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.browser");
              tmp10(getOptions, obj);
              const tmp15 = callback2({}, getOptions(locationHref[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url");
            }
            if (closure_25) {
              const result2 = getOptions(locationHref[4]).addHistoryInstrumentationHandler((to) => {
                to = to.to;
                if (undefined === to.from) {
                  let index;
                  if (null != closure_1) {
                    index = closure_1.indexOf(to);
                  }
                  if (-1 !== index) {
                    closure_1 = undefined;
                  }
                }
                closure_1 = undefined;
                let obj = to(closure_1[1]);
                const result = obj.parseStringToURLObject(to);
                const tmp4 = callback2(to);
                let tmp5 = tmp4;
                if (tmp4) {
                  tmp5 = closure_26;
                }
                if (tmp5) {
                  const obj2 = to(closure_1[1]);
                  const spanToJSONResult = to(closure_1[1]).spanToJSON(tmp4);
                  const result1 = to(closure_1[1]).dateTimestampInSeconds();
                  let flag = false;
                  if (result1 - spanToJSONResult.start_timestamp <= 1.5) {
                    flag = true;
                    if (tmp6) {
                      flag = true;
                      if (result1 - tmp6 <= 1.5) {
                        flag = false;
                      }
                    }
                  }
                  tmp5 = flag;
                  const obj3 = to(closure_1[1]);
                }
                obj = {};
                let pathname;
                if (null != result) {
                  pathname = result.pathname;
                }
                if (!pathname) {
                  pathname = to(closure_1[3]).WINDOW.location.pathname;
                }
                obj.name = pathname;
                obj.attributes = callback(callback({}, to(closure_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), to(closure_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.browser");
                obj = { url: to, isRedirect: tmp5 };
                closure_6(to, obj, obj);
              });
              const obj6 = getOptions(locationHref[4]);
            }
          }
          if (closure_16) {
            const result3 = getOptions(locationHref[7]).registerBackgroundTabDetection();
            const obj7 = getOptions(locationHref[7]);
          }
          if (closure_9) {
            function registerInteractionListener(getOptions, closure_13, closure_14, closure_15, arg4) {
              let closure_1 = closure_13;
              if (getOptions(closure_1[3]).WINDOW.document) {
                const obj = { capture: true };
                const listener = globalThis.addEventListener("click", function registerInteractionTransaction(arg0, arg1, arg2, arg3, self) {
                  const tmp = callback(arg0);
                  if (tmp) {
                    let obj = arg0(arg1[1]);
                    const items = [null, null];
                    if (items.includes(obj.spanToJSON(tmp).op)) {
                      if (arg0(arg1[5]).DEBUG_BUILD) {
                        const debug2 = arg0(arg1[1]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.warn("[Tracing] Did not create " + "ui.action.click" + " span because a pageload or navigation span is in progress.");
                      }
                    }
                  }
                  if (closure_5) {
                    const attr = closure_5.setAttribute(arg0(arg1[1]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted");
                    closure_5.end();
                    closure_5 = undefined;
                  }
                  if (self.name) {
                    obj = { name: self.name, op: "ui.action.click" };
                    let str6 = self.source;
                    if (!str6) {
                      str6 = "url";
                    }
                    obj.attributes = arg2({}, tmp10(tmp11[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str6);
                    obj = { idleTimeout: arg1, finalTimeout: arg2, childSpanTimeout: arg3 };
                    closure_5 = tmp10(tmp11[1]).startIdleSpan(obj, obj);
                    const tmp10Result = tmp10(tmp11[1]);
                    const tmp17 = arg2;
                  } else if (tmp10(tmp11[5]).DEBUG_BUILD) {
                    const debug = arg0(arg1[1]).debug;
                    const _HermesInternal = HermesInternal;
                    debug.warn("[Tracing] Did not create " + "ui.action.click" + " transaction because _latestRouteName is missing.");
                  }
                }, obj);
              }
            }(getOptions, closure_13, closure_14, closure_15, obj);
          }
          if (closure_5) {
            const result4 = getOptions(locationHref[4]).registerInpInteractionListener();
            const obj8 = getOptions(locationHref[4]);
          }
          obj1 = { traceFetch: closure_17, traceXHR: closure_18, trackFetchStreamPerformance: closure_19, tracePropagationTargets: getOptions.getOptions().tracePropagationTargets, shouldCreateSpanForRequest: closure_20, enableHTTPTimings: closure_21, onRequestSpanStart: closure_30, onRequestSpanEnd: closure_31 };
          const result5 = getOptions(locationHref[2]).instrumentOutgoingRequests(getOptions, obj1);
        }
    };
    return obj;
  }
};
export { getMetaContent };
export { startBrowserTracingNavigationSpan };
export { startBrowserTracingPageLoadSpan };
