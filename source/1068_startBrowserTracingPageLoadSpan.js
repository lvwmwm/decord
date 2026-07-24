// Module ID: 1068
// Function ID: 12265
// Name: startBrowserTracingPageLoadSpan
// Dependencies: [77, 794, 1066, 1004, 1009, 1048, 1069, 1071]
// Exports: browserTracingIntegration

// Module 1068 (startBrowserTracingPageLoadSpan)
import _defineProperty from "_defineProperty";

function startBrowserTracingPageLoadSpan(closure_0, name) {
  closure_0.emit("startPageLoadSpan", name, arg2);
  const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
  currentScope.setTransactionName(name.name);
  const tmp3 = getActiveIdleSpan(closure_0);
  if (tmp3) {
    closure_0.emit("afterStartPageLoadSpan", tmp3);
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
  const currentScope = require(794) /* registerSpanErrorInstrumentation */.getCurrentScope();
  currentScope.setTransactionName(name.name);
  let tmp4 = url;
  if (url) {
    tmp4 = !isRedirect;
  }
  if (tmp4) {
    obj = {};
    const _Object = Object;
    obj = { url };
    obj.normalizedRequest = Object.assign({}, require(1004) /* ignoreNextOnError */.getHttpRequestData(), obj);
    const result = currentScope.setSDKProcessingMetadata(obj);
    const obj5 = require(1004) /* ignoreNextOnError */;
  }
  return getActiveIdleSpan(closure_0);
}
function getMetaContent(arg0) {
  const _document = require(1004) /* ignoreNextOnError */.WINDOW.document;
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
  return closure_0[_sentry_idleSpan];
}
function setActiveIdleSpan(arg0, arg1) {
  const result = require(794) /* registerSpanErrorInstrumentation */.addNonEnumerableProperty(arg0, _sentry_idleSpan, arg1);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = { instrumentNavigation: true, instrumentPageLoad: true, markBackgroundSpan: true, enableLongTask: true, enableLongAnimationFrame: true, enableInp: true, enableElementTiming: true, ignoreResourceSpans: [], ignorePerformanceApiSpans: [], detectRedirects: true, linkPreviousTrace: "in-memory", consistentTraceSampling: false, enableReportPageLoaded: false, _experiments: {} };
let closure_3 = Object.assign({}, require("registerSpanErrorInstrumentation").TRACING_DEFAULTS, obj, require("addHTTPTimings").defaultRequestInstrumentationOptions);
const _sentry_idleSpan = "_sentry_idleSpan";

export const BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
export const browserTracingIntegration = function browserTracingIntegration(arg0) {
  let _experiments;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_27;
  let closure_28;
  let closure_29;
  let closure_30;
  let closure_31;
  let getActiveIdleSpan;
  let getMetaContent;
  let setActiveIdleSpan;
  let startBrowserTracingNavigationSpan;
  let startBrowserTracingPageLoadSpan;
  function _createRouteSpan(arg0, op) {
    let closure_0 = arg0;
    function emitFinish() {
      let hasItem = outer1_4;
      if (outer1_4) {
        const items = ["interactive", "complete"];
        hasItem = items.includes(outer1_4.readyState);
      }
      if (hasItem) {
        lib.emit("idleSpanEnableAutoFinish", closure_2);
      }
    }
    const tmp = arguments.length > 2 && undefined !== arguments[2];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = arguments[2];
    }
    let tmp3 = "pageload" === op.op;
    let closure_1 = tmp3;
    let tmp4 = op;
    if (callback) {
      tmp4 = callback(op);
    }
    const tmp6 = tmp4.attributes || {};
    if (op.name !== tmp4.name) {
      tmp6[outer1_0(outer1_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom";
      tmp4.attributes = tmp6;
    }
    if (tmp2) {
      emitFinish.name = tmp4.name;
      emitFinish.source = tmp6[outer1_0(undefined, outer1_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
      let obj = {
        idleTimeout: closure_13,
        finalTimeout: closure_14,
        childSpanTimeout: closure_15,
        disableAutoFinish: tmp3,
        beforeSpanEnd(closure_12) {
            if (null != lib) {
              lib();
            }
            let obj = outer2_0(outer2_1[4]);
            obj = { recordClsOnPageloadSpan: !outer1_10, recordLcpOnPageloadSpan: !outer1_11, ignoreResourceSpans: outer1_22, ignorePerformanceApiSpans: outer1_23 };
            const result = obj.addPerformanceEntries(closure_12, obj);
            outer2_9(lib, undefined);
            const currentScope = outer2_0(outer2_1[1]).getCurrentScope();
            obj = {};
            const propagationContext = currentScope.getPropagationContext();
            obj.traceId = startIdleSpanResult.spanContext().traceId;
            const obj3 = outer2_0(outer2_1[1]);
            obj.sampled = outer2_0(outer2_1[1]).spanIsSampled(startIdleSpanResult);
            const obj6 = outer2_0(outer2_1[1]);
            obj.dsc = outer2_0(outer2_1[1]).getDynamicSamplingContextFromSpan(closure_12);
            const result1 = currentScope.setPropagationContext(Object.assign({}, propagationContext, obj));
          },
        trimIdleSpanEndTimestamp: !closure_29
      };
      const startIdleSpanResult = outer1_0(outer1_1[1]).startIdleSpan(tmp4, obj);
      let closure_2 = startIdleSpanResult;
      let tmp23 = tmp3;
      if (tmp3) {
        tmp23 = closure_29;
      }
      if (tmp23) {
        closure_2 = startIdleSpanResult;
      }
      outer1_9(arg0, startIdleSpanResult);
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
      const obj5 = outer1_0(outer1_1[1]);
    } else {
      obj = outer1_0(outer1_1[1]);
      let result = obj.dateTimestampInSeconds();
      const _Object = Object;
      obj = { startTime: result };
      const obj2 = outer1_0(outer1_1[1]);
      outer1_0(outer1_1[1]).startInactiveSpan(Object.assign({}, tmp4, obj)).end(result);
      const startInactiveSpanResult = outer1_0(outer1_1[1]).startInactiveSpan(Object.assign({}, tmp4, obj));
    }
  }
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let obj = { name: undefined, source: undefined };
    const document = require(1004) /* ignoreNextOnError */.WINDOW.document;
    let _Object = Object;
    const merged = Object.assign({}, obj, {});
    ({ enableInp: startBrowserTracingPageLoadSpan, enableElementTiming: startBrowserTracingNavigationSpan, enableLongTask: getMetaContent, enableLongAnimationFrame: getActiveIdleSpan, _experiments } = merged);
    ({ enableInteractions: setActiveIdleSpan, enableStandaloneClsSpans: closure_10, enableStandaloneLcpSpans: closure_11 } = _experiments);
    ({ beforeStartSpan: closure_12, idleTimeout: closure_13, finalTimeout: closure_14, childSpanTimeout: closure_15, markBackgroundSpan: closure_16, traceFetch: closure_17, traceXHR: closure_18, trackFetchStreamPerformance: closure_19, shouldCreateSpanForRequest: closure_20, enableHTTPTimings: closure_21, ignoreResourceSpans: closure_22, ignorePerformanceApiSpans: closure_23, instrumentPageLoad: closure_24, instrumentNavigation: closure_25, detectRedirects: closure_26, linkPreviousTrace: closure_27, consistentTraceSampling: closure_28, enableReportPageLoaded: closure_29, onRequestSpanStart: closure_30, onRequestSpanEnd: closure_31 } = merged);
    obj = {
      name: "BrowserTracing",
      setup(client) {
          let closure_0 = client;
          function maybeEndActiveSpan() {
            const obj = outer2_8(closure_0);
            let tmp = obj;
            if (obj) {
              tmp = !outer2_0(outer2_1[1]).spanToJSON(obj).timestamp;
              const obj2 = outer2_0(outer2_1[1]);
            }
            if (tmp) {
              if (outer2_0(outer2_1[5]).DEBUG_BUILD) {
                const debug = outer2_0(outer2_1[1]).debug;
                const _HermesInternal = HermesInternal;
                debug.log("[Tracing] Finishing current active span with op: " + outer2_0(outer2_1[1]).spanToJSON(obj).op);
                const obj3 = outer2_0(outer2_1[1]);
              }
              const attr = obj.setAttribute(outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled");
              obj.end();
            }
          }
          let obj = outer1_0(outer1_1[1]);
          let result = obj.registerSpanErrorInstrumentation();
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
          closure_0 = outer1_0(outer1_1[4]).startTrackingWebVitals(obj);
          if (closure_5) {
            outer1_0(outer1_1[4]).startTrackingINP();
            let obj4 = outer1_0(outer1_1[4]);
          }
          if (closure_6) {
            let result1 = outer1_0(outer1_1[4]).startTrackingElementTiming();
            let obj5 = outer1_0(outer1_1[4]);
          }
          if (closure_8) {
            if (outer1_0(outer1_1[1]).GLOBAL_OBJ.PerformanceObserver) {
              if (globalThis.PerformanceObserver.supportedEntryTypes) {
                const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
                if (supportedEntryTypes.includes("long-animation-frame")) {
                  let result2 = outer1_0(outer1_1[4]).startTrackingLongAnimationFrames();
                  let obj7 = outer1_0(outer1_1[4]);
                }
                if (closure_9) {
                  const result3 = outer1_0(outer1_1[4]).startTrackingInteractions();
                  let obj8 = outer1_0(outer1_1[4]);
                }
                if (closure_26) {
                  if (document) {
                    function interactionHandler() {
                      const maybeEndActiveSpan = outer2_0(outer2_1[1]).timestampInSeconds();
                    }
                    obj = { capture: true };
                    const listener = globalThis.addEventListener("click", interactionHandler, obj);
                    const listener1 = globalThis.addEventListener("keydown", interactionHandler, { capture: true, passive: true });
                  }
                }
                client.on("startNavigationSpan", (arg0, isRedirect) => {
                  let obj = outer2_0(outer2_1[1]);
                  if (obj.getClient() === closure_0) {
                    if (null != isRedirect) {
                      if (isRedirect.isRedirect) {
                        if (outer2_0(outer2_1[5]).DEBUG_BUILD) {
                          const debug = outer2_0(outer2_1[1]).debug;
                          debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span.");
                        }
                        const _Object2 = Object;
                        obj = { op: "navigation.redirect" };
                        outer1_32(closure_0, Object.assign(obj, arg0), false);
                      }
                    }
                    let maybeEndActiveSpan;
                    maybeEndActiveSpan();
                    let obj1 = outer2_0(outer2_1[1]);
                    const isolationScope = obj1.getIsolationScope();
                    obj = { traceId: outer2_0(outer2_1[1]).generateTraceId() };
                    const _Math = Math;
                    obj.sampleRand = Math.random();
                    const obj5 = outer2_0(outer2_1[1]);
                    let spanId;
                    if (!obj6.hasSpansEnabled()) {
                      spanId = outer2_0(outer2_1[1]).generateSpanId();
                      const obj7 = outer2_0(outer2_1[1]);
                    }
                    obj.propagationSpanId = spanId;
                    const result = isolationScope.setPropagationContext(obj);
                    obj6 = outer2_0(outer2_1[1]);
                    const currentScope = outer2_0(outer2_1[1]).getCurrentScope();
                    obj1 = {};
                    const obj8 = outer2_0(outer2_1[1]);
                    obj1.traceId = outer2_0(outer2_1[1]).generateTraceId();
                    const _Math2 = Math;
                    obj1.sampleRand = Math.random();
                    const obj11 = outer2_0(outer2_1[1]);
                    let spanId1;
                    if (!obj12.hasSpansEnabled()) {
                      spanId1 = outer2_0(outer2_1[1]).generateSpanId();
                      const obj13 = outer2_0(outer2_1[1]);
                    }
                    obj1.propagationSpanId = spanId1;
                    const result1 = currentScope.setPropagationContext(obj1);
                    const obj2 = { normalizedRequest: undefined };
                    const result2 = currentScope.setSDKProcessingMetadata(obj2);
                    const _Object = Object;
                    const obj3 = { op: "navigation" };
                    outer1_32(closure_0, Object.assign(obj3, arg0, { parentSpan: null, forceTransaction: true }));
                    obj12 = outer2_0(outer2_1[1]);
                  }
                });
                client.on("startPageLoadSpan", (arg0) => {
                  if (arguments.length > 1) {
                    if (undefined !== arguments[1]) {
                      let obj = arguments[1];
                    }
                    if (obj2.getClient() === closure_0) {
                      maybeEndActiveSpan();
                      let sentryTrace = obj.sentryTrace;
                      if (!sentryTrace) {
                        sentryTrace = outer2_7("sentry-trace");
                      }
                      let baggage = obj.baggage;
                      if (!baggage) {
                        baggage = outer2_7("baggage");
                      }
                      const result = outer2_0(outer2_1[1]).propagationContextFromHeaders(sentryTrace, baggage);
                      const obj3 = outer2_0(outer2_1[1]);
                      const currentScope = outer2_0(outer2_1[1]).getCurrentScope();
                      const result1 = currentScope.setPropagationContext(result);
                      const obj4 = outer2_0(outer2_1[1]);
                      if (!obj6.hasSpansEnabled()) {
                        const propagationContext = currentScope.getPropagationContext();
                        propagationContext.propagationSpanId = outer2_0(outer2_1[1]).generateSpanId();
                        const obj7 = outer2_0(outer2_1[1]);
                      }
                      obj = {};
                      obj6 = outer2_0(outer2_1[1]);
                      obj.normalizedRequest = outer2_0(outer2_1[3]).getHttpRequestData();
                      const result2 = currentScope.setSDKProcessingMetadata(obj);
                      const _Object = Object;
                      obj = { op: "pageload" };
                      outer1_32(closure_0, Object.assign(obj, arg0));
                      const obj9 = outer2_0(outer2_1[3]);
                    }
                  }
                  obj = {};
                });
                client.on("endPageloadSpan", () => {
                  let tmp = outer1_29;
                  if (outer1_29) {
                    tmp = outer1_2;
                  }
                  if (tmp) {
                    const attr = outer1_2.setAttribute(outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded");
                    outer1_2.end();
                  }
                });
              }
            }
          }
          if (closure_7) {
            const result4 = outer1_0(outer1_1[4]).startTrackingLongTasks();
            let obj6 = outer1_0(outer1_1[4]);
          }
        },
      afterAllSetup(getOptions) {
          let closure_0 = getOptions;
          let obj = outer1_0(outer1_1[1]);
          const locationHref = obj.getLocationHref();
          if ("off" !== closure_27) {
            let obj1 = outer1_0(outer1_1[6]);
            obj = { linkPreviousTrace: closure_27, consistentTraceSampling: closure_28 };
            obj1.linkTraces(getOptions, obj);
          }
          if (outer1_0(outer1_1[3]).WINDOW.location) {
            if (closure_24) {
              let result = outer1_0(outer1_1[1]).browserPerformanceTimeOrigin();
              obj = { name: outer1_0(outer1_1[3]).WINDOW.location.pathname };
              let result1;
              if (result) {
                result1 = result / 1000;
              }
              obj.startTime = result1;
              const obj4 = outer1_0(outer1_1[1]);
              const tmp10 = outer1_5;
              obj.attributes = outer1_2(outer1_2({}, outer1_0(outer1_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), outer1_0(outer1_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.pageload.browser");
              tmp10(getOptions, obj);
              const tmp15 = outer1_2({}, outer1_0(outer1_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url");
            }
            if (closure_25) {
              const result2 = outer1_0(outer1_1[4]).addHistoryInstrumentationHandler((to) => {
                to = to.to;
                if (undefined === to.from) {
                  let index;
                  if (null != c1) {
                    index = c1.indexOf(to);
                  }
                  if (-1 !== index) {
                    c1 = undefined;
                  }
                }
                c1 = undefined;
                let obj = outer2_0(outer2_1[1]);
                const result = obj.parseStringToURLObject(to);
                const tmp4 = outer2_8(closure_0);
                let tmp5 = tmp4;
                if (tmp4) {
                  tmp5 = outer1_26;
                }
                if (tmp5) {
                  const obj2 = outer2_0(outer2_1[1]);
                  const spanToJSONResult = outer2_0(outer2_1[1]).spanToJSON(tmp4);
                  const result1 = outer2_0(outer2_1[1]).dateTimestampInSeconds();
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
                  const obj3 = outer2_0(outer2_1[1]);
                }
                obj = {};
                let pathname;
                if (null != result) {
                  pathname = result.pathname;
                }
                if (!pathname) {
                  pathname = outer2_0(outer2_1[3]).WINDOW.location.pathname;
                }
                obj.name = pathname;
                obj.attributes = outer2_2(outer2_2({}, outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url"), outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.navigation.browser");
                obj = { url: to, isRedirect: tmp5 };
                outer2_6(closure_0, obj, obj);
              });
              const obj6 = outer1_0(outer1_1[4]);
            }
          }
          if (closure_16) {
            const result3 = outer1_0(outer1_1[7]).registerBackgroundTabDetection();
            const obj7 = outer1_0(outer1_1[7]);
          }
          if (closure_9) {
            (function registerInteractionListener(getOptions, closure_13, closure_14, closure_15, arg4) {
              let closure_0 = getOptions;
              let closure_1 = closure_13;
              let closure_2 = closure_14;
              let closure_3 = closure_15;
              let closure_4 = arg4;
              if (outer2_0(outer2_1[3]).WINDOW.document) {
                let obj = { capture: true };
                const listener = globalThis.addEventListener("click", function registerInteractionTransaction() {
                  const tmp = outer3_8(closure_0);
                  if (tmp) {
                    let obj = outer3_0(outer3_1[1]);
                    const items = ["navigation", "pageload"];
                    if (items.includes(obj.spanToJSON(tmp).op)) {
                      if (outer3_0(outer3_1[5]).DEBUG_BUILD) {
                        const debug2 = outer3_0(outer3_1[1]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.warn("[Tracing] Did not create " + "ui.action.click" + " span because a pageload or navigation span is in progress.");
                      }
                    }
                  }
                  if (closure_5) {
                    const attr = closure_5.setAttribute(outer3_0(outer3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted");
                    closure_5.end();
                    closure_5 = undefined;
                  }
                  if (user.name) {
                    obj = { name: user.name, op: "ui.action.click" };
                    let str6 = user.source;
                    if (!str6) {
                      str6 = "url";
                    }
                    obj.attributes = outer3_2({}, tmp10(tmp11[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, str6);
                    obj = { idleTimeout: closure_1, finalTimeout: closure_2, childSpanTimeout: closure_3 };
                    closure_5 = tmp10(tmp11[1]).startIdleSpan(obj, obj);
                    const tmp10Result = tmp10(tmp11[1]);
                    const tmp17 = outer3_2;
                  } else if (tmp10(tmp11[5]).DEBUG_BUILD) {
                    const debug = outer3_0(outer3_1[1]).debug;
                    const _HermesInternal = HermesInternal;
                    debug.warn("[Tracing] Did not create " + "ui.action.click" + " transaction because _latestRouteName is missing.");
                  }
                }, obj);
              }
            })(getOptions, closure_13, closure_14, closure_15, obj);
          }
          if (closure_5) {
            const result4 = outer1_0(outer1_1[4]).registerInpInteractionListener();
            const obj8 = outer1_0(outer1_1[4]);
          }
          obj1 = { traceFetch: closure_17, traceXHR: closure_18, trackFetchStreamPerformance: closure_19, tracePropagationTargets: getOptions.getOptions().tracePropagationTargets, shouldCreateSpanForRequest: closure_20, enableHTTPTimings: closure_21, onRequestSpanStart: closure_30, onRequestSpanEnd: closure_31 };
          const result5 = outer1_0(outer1_1[2]).instrumentOutgoingRequests(getOptions, obj1);
        }
    };
    return obj;
  }
};
export { getMetaContent };
export { startBrowserTracingNavigationSpan };
export { startBrowserTracingPageLoadSpan };
