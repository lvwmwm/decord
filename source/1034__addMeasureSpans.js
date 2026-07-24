// Module ID: 1034
// Function ID: 11128
// Name: _addMeasureSpans
// Dependencies: [57, 77, 1035, 794, 1015, 1037, 1038, 1010, 1016, 1018, 1019, 1039]
// Exports: addPerformanceEntries, startTrackingInteractions, startTrackingLongAnimationFrames, startTrackingLongTasks, startTrackingWebVitals

// Module 1034 (_addMeasureSpans)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";

function _addMeasureSpans(activeSpan, detail) {
  let tmp57;
  let tmp58;
  let entryType;
  if (null != detail) {
    entryType = tmp.entryType;
  }
  if ("measure" === entryType) {
    const tmp4 = "Components \u269B" === detail.detail.devtools.track;
  }
  while (true) {
    if (tmp4) {
      break;
    } else {
      let items = ["mark", "measure"];
      if (!items.includes(detail.entryType)) {
        let tmp8 = require;
        let tmp9 = dependencyMap;
        let num2 = 10;
        let obj2 = require(1019) /* getNavigationEntry */;
        let flag = false;
        let navigationEntry = obj2.getNavigationEntry(false);
        let num3 = 2;
        let obj3 = require(1035) /* extractNetworkProtocol */;
        let num4 = 0;
        let num5 = 0;
        if (navigationEntry) {
          num5 = navigationEntry.requestStart;
        }
        let tmp11 = globalThis;
        let _Math = Math;
        let sum = arg4 + Math.max(arg2, obj3.msToSec(num5));
        let sum1 = arg4 + arg2;
        let tmp14 = arg3;
        let sum2 = sum1 + arg3;
        let tmp16 = _defineProperty;
        let tmp17 = require;
        let tmp18 = dependencyMap;
        let num6 = 3;
        let str2 = "auto.resource.browser.metrics";
        let tmp19 = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.resource.browser.metrics");
        if (sum !== sum1) {
          let flag2 = true;
          tmp19["sentry.browser.measure_happened_before_request"] = true;
          tmp19["sentry.browser.measure_start_time"] = sum;
        }
        let tmp20 = tmp19;
        let tmp21 = detail;
        detail = detail.detail;
        let tmp22 = detail;
        if (detail) {
          let tmp23 = detail;
          let str3 = "object";
          if ("object" === typeof tmp22) {
            let _Object = Object;
            let entries = Object.entries(detail);
            let tmp32 = entries;
            let tmp33 = entries[Symbol.iterator]();
            let str4 = "sentry.browser.measure.detail.";
            let num7 = 1;
            let tmp35 = tmp33;
            while (tmp33 !== undefined) {
              let tmp55 = _slicedToArray;
              let tmp56 = _slicedToArray(tmp34, 2);
              [tmp57, tmp58] = tmp56;
              let tmp59 = tmp58;
              if (tmp58) {
                let tmp36 = require;
                let tmp37 = dependencyMap;
                let obj5 = require(794) /* registerSpanErrorInstrumentation */;
                let tmp38 = tmp58;
                if (obj5.isPrimitive(tmp59)) {
                  let tmp44 = tmp19;
                  let tmp45 = tmp57;
                  let _HermesInternal2 = HermesInternal;
                  let tmp46 = tmp58;
                  tmp20["sentry.browser.measure.detail." + tmp57] = tmp59;
                  continue;
                }
              }
              let tmp39 = tmp58;
              if (undefined !== tmp59) {
                let tmp40 = tmp19;
                let tmp41 = tmp57;
                let _HermesInternal = HermesInternal;
                let _JSON2 = JSON;
                let tmp43 = tmp58;
                let combined = "sentry.browser.measure.detail." + tmp57;
                tmp20[combined] = JSON.stringify(tmp59);
              }
            }
          } else {
            let tmp24 = require;
            let tmp25 = dependencyMap;
            let obj4 = require(794) /* registerSpanErrorInstrumentation */;
            let tmp26 = detail;
            if (obj4.isPrimitive(tmp22)) {
              let tmp29 = tmp19;
              let tmp30 = detail;
              tmp20["sentry.browser.measure.detail"] = tmp22;
            } else {
              let tmp27 = tmp19;
              let _JSON = JSON;
              let tmp28 = detail;
              tmp20["sentry.browser.measure.detail"] = JSON.stringify(tmp22);
            }
          }
        }
        while (true) {
          if (sum > sum2) {
            break;
          } else {
            let tmp47 = require;
            let tmp48 = dependencyMap;
            let obj6 = require(1035) /* extractNetworkProtocol */;
            let obj = {};
            ({ name: obj7.name, entryType: obj7.op } = detail);
            obj.attributes = tmp19;
            let tmp49 = activeSpan;
            let tmp50 = obj6;
            let tmp51 = sum;
            let tmp52 = sum2;
            let tmp53 = obj;
            let startAndEndSpanResult = obj6.startAndEndSpan(activeSpan, sum, sum2, obj);
            break;
          }
          break;
        }
      } else {
        let tmp5 = require;
        let tmp6 = dependencyMap;
        let num = 3;
        obj = require(794) /* registerSpanErrorInstrumentation */;
        let tmp7 = arg5;
        if (obj.stringMatchesSomePattern(detail.name, arg5)) {
          break;
        }
      }
      break;
    }
  }
}
function _addNavigationSpans(activeSpan, requestStart) {
  const _require = activeSpan;
  const dependencyMap = requestStart;
  let closure_2 = arg2;
  const items = ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"];
  const item = items.forEach((arg0) => {
    outer1_10(closure_0, closure_1, arg0, closure_2);
  });
  _addPerformanceNavigationTiming(activeSpan, requestStart, "secureConnection", arg2, "TLS/SSL");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "fetch", arg2, "cache");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "domainLookup", arg2, "DNS");
  let obj = _require(1035);
  const sum = arg2 + obj.msToSec(requestStart.requestStart);
  const sum1 = arg2 + _require(1035).msToSec(requestStart.responseEnd);
  const obj2 = _require(1035);
  const sum2 = arg2 + _require(1035).msToSec(requestStart.responseStart);
  if (requestStart.responseEnd) {
    const obj4 = _require(1035);
    obj = { op: "browser.request", name: requestStart.name, attributes: _defineProperty({}, _require(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics") };
    obj4.startAndEndSpan(activeSpan, sum, sum1, obj);
    const obj6 = _require(1035);
    obj = { op: "browser.response", name: requestStart.name, attributes: _defineProperty({}, _require(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics") };
    obj6.startAndEndSpan(activeSpan, sum2, sum1, obj);
  }
}
function _addPerformanceNavigationTiming(activeSpan, requestStart, domainLookup, arg3, DNS) {
  let redirectCount = requestStart;
  let tmp = domainLookup;
  if (arguments.length > 4) {
    tmp = domainLookup;
    if (undefined !== arguments[4]) {
      tmp = arguments[4];
    }
  }
  let str = "connectEnd";
  if ("secureConnection" !== domainLookup) {
    str = "domainLookupStart";
    if ("fetch" !== domainLookup) {
      const _HermesInternal = HermesInternal;
      str = "" + domainLookup + "End";
    }
  }
  const tmp4 = redirectCount["" + domainLookup + "Start"];
  let tmp5 = tmp4;
  if (tmp4) {
    tmp5 = tmp3;
  }
  if (tmp5) {
    let obj = require(1035) /* extractNetworkProtocol */;
    let obj1 = require(1035) /* extractNetworkProtocol */;
    const sum = arg3 + obj1.msToSec(tmp4);
    const sum1 = arg3 + require(1035) /* extractNetworkProtocol */.msToSec(tmp3);
    obj = {};
    const _HermesInternal2 = HermesInternal;
    obj.op = "browser." + tmp;
    obj.name = redirectCount.name;
    if ("redirect" !== domainLookup) {
      obj = {};
      obj.attributes = Object.assign(tmp11, obj);
      obj.startAndEndSpan(activeSpan, sum, sum1, obj);
    }
    obj1 = {};
    redirectCount = redirectCount.redirectCount;
    obj1["http.redirect_count"] = redirectCount;
    obj = obj1;
    const obj3 = require(1035) /* extractNetworkProtocol */;
  }
}
function _addResourceSpans(activeSpan, initiatorType, arr, arg3, arg4, arg5, arr2) {
  if ("xmlhttprequest" !== initiatorType.initiatorType) {
    if ("fetch" !== initiatorType.initiatorType) {
      let str2 = "resource.other";
      if (initiatorType.initiatorType) {
        const _HermesInternal = HermesInternal;
        str2 = "resource." + initiatorType.initiatorType;
      }
      if (null == arr2) {
        const tmp6 = _defineProperty({}, require(794) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.resource.browser.metrics");
        let obj = require(794) /* registerSpanErrorInstrumentation */;
        const url = obj.parseUrl(arr);
        if (url.protocol) {
          const parts = url.protocol.split(":");
          tmp6["url.scheme"] = parts.pop();
          const str4 = url.protocol;
        }
        if (url.host) {
          tmp6["server.address"] = url.host;
        }
        tmp6["url.same_origin"] = arr.includes(require(1015) /* WINDOW */.WINDOW.location.origin);
        const items = [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]];
        _setResourceRequestAttributes(initiatorType, tmp6, items);
        const _Object = Object;
        const sum = arg5 + arg3;
        const merged = Object.assign({}, tmp6, require(1039) /* getAbsoluteTime */.resourceTimingToSpanAttributes(initiatorType));
        const sum1 = sum + arg4;
        const obj3 = require(1035) /* extractNetworkProtocol */;
        obj = { name: arr.replace(require(1015) /* WINDOW */.WINDOW.location.origin, ""), op: str2, attributes: merged };
        obj3.startAndEndSpan(activeSpan, sum, sum1, obj);
        const obj2 = require(1039) /* getAbsoluteTime */;
      }
    }
  }
}
function _setResourceRequestAttributes(initiatorType, arg1, items) {
  let closure_0 = initiatorType;
  let closure_1 = arg1;
  const item = items.forEach((arg0) => {
    const tmp = outer1_2(arg0, 2);
    let tmp3 = null != tmp2;
    if (tmp3) {
      let tmp5 = "number" === tmp4;
      if (tmp5) {
        tmp5 = tmp2 < 2147483647;
      }
      if (!tmp5) {
        tmp5 = "string" === tmp4;
      }
      tmp3 = tmp5;
    }
    if (tmp3) {
      closure_1[tmp[1]] = tmp2;
    }
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c6 = 0;
let closure_7 = {};

export { _addMeasureSpans };
export { _addNavigationSpans };
export { _addResourceSpans };
export { _setResourceRequestAttributes };
export const addPerformanceEntries = function addPerformanceEntries(setAttribute, recordClsOnPageloadSpan) {
  let requestStart;
  let responseStart;
  const _require = setAttribute;
  const dependencyMap = recordClsOnPageloadSpan;
  let obj = _require(1035);
  const browserPerformanceAPI = obj.getBrowserPerformanceAPI();
  const result = _require(794).browserPerformanceTimeOrigin();
  if (null != browserPerformanceAPI) {
    if (browserPerformanceAPI.getEntries) {
      if (result) {
        let msToSecResult = _require(1035).msToSec(result);
        const _slicedToArray = msToSecResult;
        const entries = browserPerformanceAPI.getEntries();
        const obj4 = _require(1035);
        const spanToJSONResult = _require(794).spanToJSON(setAttribute);
        const op = spanToJSONResult.op;
        let start_timestamp = spanToJSONResult.start_timestamp;
        const substr = entries.slice(closure_6);
        let item = substr.forEach((startTime) => {
          let obj = setAttribute(closure_1[2]);
          const msToSecResult = obj.msToSec(startTime.startTime);
          const msToSecResult1 = setAttribute(closure_1[2]).msToSec(Math.max(0, startTime.duration));
          const entryType = startTime.entryType;
          if ("navigation" === entryType) {
            outer1_9(setAttribute, startTime, closure_2);
          } else {
            if ("mark" !== entryType) {
              if ("paint" !== entryType) {
                if ("measure" !== entryType) {
                  if ("resource" === entryType) {
                    outer1_11(setAttribute, startTime, startTime.name, msToSecResult, msToSecResult1, closure_2, closure_1.ignoreResourceSpans);
                  }
                }
              }
            }
            outer1_8(setAttribute, startTime, msToSecResult, msToSecResult1, closure_2, closure_1.ignorePerformanceApiSpans);
            const tmp16 = startTime.startTime < setAttribute(closure_1[8]).getVisibilityWatcher().firstHiddenTime;
            if (tmp17) {
              obj = { value: startTime.startTime, unit: "millisecond" };
              closure_7.fp = obj;
            }
            if (tmp19) {
              obj = { value: startTime.startTime, unit: "millisecond" };
              closure_7.fcp = obj;
            }
            const obj3 = setAttribute(closure_1[8]);
            tmp17 = "first-paint" === startTime.name && tmp16;
            tmp19 = "first-contentful-paint" === startTime.name && tmp16;
          }
        });
        const _Math = Math;
        closure_6 = Math.max(entries.length - 1, 0);
        const _navigator = _require(1015).WINDOW.navigator;
        if (_navigator) {
          const connection = _navigator.connection;
          if (connection) {
            if (connection.effectiveType) {
              let attr = setAttribute.setAttribute("effectiveConnectionType", connection.effectiveType);
            }
            if (connection.type) {
              let attr1 = setAttribute.setAttribute("connectionType", connection.type);
            }
            if (obj6.isMeasurementValue(connection.rtt)) {
              obj = { value: connection.rtt, unit: "millisecond" };
              closure_7["connection.rtt"] = obj;
            }
            obj6 = _require(1035);
          }
          if (obj8.isMeasurementValue(_navigator.deviceMemory)) {
            const _HermesInternal = HermesInternal;
            let attr2 = setAttribute.setAttribute("deviceMemory", "" + _navigator.deviceMemory + " GB");
          }
          obj8 = _require(1035);
          if (obj9.isMeasurementValue(_navigator.hardwareConcurrency)) {
            const _String = String;
            let attr3 = setAttribute.setAttribute("hardwareConcurrency", String(_navigator.hardwareConcurrency));
          }
          obj9 = _require(1035);
        }
        if ("pageload" === op) {
          const navigationEntry = _require(1019).getNavigationEntry(false);
          if (navigationEntry) {
            ({ responseStart, requestStart } = navigationEntry);
            if (requestStart <= responseStart) {
              obj = { value: responseStart - requestStart, unit: "millisecond" };
              tmp30["ttfb.requestTime"] = obj;
            }
          }
          if (!recordClsOnPageloadSpan.recordClsOnPageloadSpan) {
            delete tmp.cls;
          }
          if (!recordClsOnPageloadSpan.recordLcpOnPageloadSpan) {
            delete tmp.lcp;
          }
          const _Object = Object;
          const entries1 = Object.entries(closure_7);
          const item1 = entries1.forEach((arg0) => {
            const tmp = msToSecResult(arg0, 2);
            setAttribute(closure_1[3]).setMeasurement(tmp[0], tmp[1].value, tmp[1].unit);
          });
          let attr4 = setAttribute.setAttribute("performance.timeOrigin", msToSecResult);
          const obj12 = _require(1019);
          tmp30 = closure_7;
          let attr5 = setAttribute.setAttribute("performance.activationStart", _require(1018).getActivationStart());
          (function _setWebVitalAttributes(setAttribute, recordLcpOnPageloadSpan) {
            recordLcpOnPageloadSpan = _undefined;
            if (_undefined) {
              recordLcpOnPageloadSpan = recordLcpOnPageloadSpan.recordLcpOnPageloadSpan;
            }
            if (recordLcpOnPageloadSpan) {
              if (_undefined.element) {
                const attr = setAttribute.setAttribute("lcp.element", setAttribute(closure_1[3]).htmlTreeAsString(_undefined.element));
                const obj = setAttribute(closure_1[3]);
              }
              if (_undefined.id) {
                const attr1 = setAttribute.setAttribute("lcp.id", _undefined.id);
              }
              if (_undefined.url) {
                const trimmed = _undefined.url.trim();
                const attr2 = setAttribute.setAttribute("lcp.url", trimmed.slice(0, 200));
                const str3 = _undefined.url;
              }
              if (null != _undefined.loadTime) {
                const attr3 = setAttribute.setAttribute("lcp.loadTime", _undefined.loadTime);
              }
              if (null != _undefined.renderTime) {
                const attr4 = setAttribute.setAttribute("lcp.renderTime", _undefined.renderTime);
              }
              const attr5 = setAttribute.setAttribute("lcp.size", _undefined.size);
            }
            if (tmp21) {
              const sources = _undefined2.sources;
              const item = sources.forEach((node) => {
                const combined = "cls.source." + arg1 + 1;
                return setAttribute.setAttribute(combined, setAttribute(table[3]).htmlTreeAsString(node.node));
              });
            }
          })(setAttribute, recordClsOnPageloadSpan);
          const obj11 = _require(1018);
        }
        start_timestamp = undefined;
        let c5;
        closure_7 = {};
        const obj5 = _require(794);
      }
    }
  }
};
export const startTrackingInteractions = function startTrackingInteractions() {
  const result = require(1010) /* triggerHandlers */.addPerformanceInstrumentationHandler("event", (arg0) => {
    const entries = arg0.entries;
    let obj = outer1_0(outer1_1[3]);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp18 = nextResult;
        if ("click" === nextResult.name) {
          let tmp19 = outer1_0;
          let tmp20 = outer1_1;
          let obj3 = outer1_0(outer1_1[2]);
          let obj4 = outer1_0(outer1_1[3]);
          let tmp21 = nextResult;
          let msToSecResult = obj3.msToSec(obj4.browserPerformanceTimeOrigin() + tmp18.startTime);
          let tmp23 = msToSecResult;
          let obj5 = outer1_0(outer1_1[2]);
          let msToSecResult1 = obj5.msToSec(tmp18.duration);
          obj = {};
          let obj7 = outer1_0(outer1_1[3]);
          obj.name = obj7.htmlTreeAsString(tmp18.target);
          let _HermesInternal = HermesInternal;
          obj.op = "ui.interaction." + tmp18.name;
          obj.startTime = msToSecResult;
          let tmp25 = outer1_3;
          obj.attributes = outer1_3({}, outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics");
          let tmp26 = obj;
          let obj8 = outer1_0(outer1_1[3]);
          let componentName = obj8.getComponentName(tmp18.target);
          if (componentName) {
            let tmp7 = obj;
            let tmp8 = componentName;
            tmp26.attributes["ui.component_name"] = tmp28;
          }
          let tmp9 = outer1_0;
          let tmp10 = outer1_1;
          let obj2 = outer1_0(outer1_1[2]);
          let tmp11 = activeSpan;
          let tmp12 = msToSecResult;
          let tmp13 = msToSecResult1;
          let tmp14 = obj;
          let tmp15 = obj2;
          let tmp16 = tmp23;
          let startAndEndSpanResult = obj2.startAndEndSpan(tmp2, msToSecResult, tmp23 + msToSecResult1, tmp26);
        }
        continue;
      }
    }
  });
};
export const startTrackingLongAnimationFrames = function startTrackingLongAnimationFrames() {
  const performanceObserver = new globalThis.PerformanceObserver((getEntries) => {
    let sourceCharPosition;
    let sourceFunctionName;
    let sourceURL;
    let obj = outer1_0(outer1_1[3]);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const entries = getEntries.getEntries();
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp42 = nextResult;
        if (nextResult.scripts[0]) {
          let tmp7 = outer1_0;
          let tmp8 = outer1_1;
          let obj2 = outer1_0(outer1_1[2]);
          let obj3 = outer1_0(outer1_1[3]);
          let tmp9 = nextResult;
          let msToSecResult = obj2.msToSec(obj3.browserPerformanceTimeOrigin() + tmp42.startTime);
          let obj4 = outer1_0(outer1_1[3]);
          let tmp11 = activeSpan;
          let spanToJSONResult = obj4.spanToJSON(tmp2);
          let start_timestamp = spanToJSONResult.start_timestamp;
          if ("navigation" === spanToJSONResult.op) {
            let tmp13 = start_timestamp;
            if (start_timestamp) {
              let tmp14 = msToSecResult;
              let tmp15 = start_timestamp;
            }
          }
          let tmp16 = outer1_0;
          let tmp17 = outer1_1;
          let obj5 = outer1_0(outer1_1[2]);
          let tmp18 = nextResult;
          let msToSecResult1 = obj5.msToSec(tmp42.duration);
          let tmp20 = outer1_3;
          let tmp21 = outer1_3({}, outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics");
          let tmp22 = tmp21;
          ({ sourceURL, sourceFunctionName, sourceCharPosition, invoker: tmp21["browser.script.invoker"], invokerType: tmp21["browser.script.invoker_type"] } = tmp42.scripts[0]);
          if (sourceURL) {
            let tmp24 = tmp21;
            let tmp25 = sourceURL;
            tmp22["code.filepath"] = tmp23;
          }
          let tmp26 = sourceFunctionName;
          if (sourceFunctionName) {
            let tmp27 = tmp21;
            let tmp28 = sourceFunctionName;
            tmp22["code.function"] = sourceFunctionName;
          }
          let tmp29 = sourceCharPosition;
          if (-1 !== sourceCharPosition) {
            let tmp30 = tmp21;
            let tmp31 = sourceCharPosition;
            tmp22["browser.script.source_char_position"] = sourceCharPosition;
          }
          let tmp32 = outer1_0;
          let tmp33 = outer1_1;
          let obj6 = outer1_0(outer1_1[2]);
          let tmp34 = activeSpan;
          let tmp35 = msToSecResult;
          let tmp36 = msToSecResult1;
          obj = { name: "Main UI thread blocked", op: "ui.long-animation-frame" };
          let tmp37 = tmp21;
          obj.attributes = tmp22;
          let tmp38 = obj6;
          let tmp39 = msToSecResult;
          let tmp40 = obj;
          let startAndEndSpanResult = obj6.startAndEndSpan(tmp2, msToSecResult, msToSecResult + msToSecResult1, obj);
        }
        continue;
      }
    }
  });
  performanceObserver.observe({ type: "long-animation-frame", buffered: true });
};
export const startTrackingLongTasks = function startTrackingLongTasks() {
  const result = require(1010) /* triggerHandlers */.addPerformanceInstrumentationHandler("longtask", (arg0) => {
    let op;
    let start_timestamp;
    const entries = arg0.entries;
    let obj = outer1_0(outer1_1[3]);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const obj2 = outer1_0(outer1_1[3]);
      ({ op, start_timestamp } = outer1_0(outer1_1[3]).spanToJSON(tmp2));
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp27 = outer1_0;
        let tmp28 = outer1_1;
        let obj5 = outer1_0(outer1_1[2]);
        let obj6 = outer1_0(outer1_1[3]);
        let msToSecResult = obj5.msToSec(obj6.browserPerformanceTimeOrigin() + nextResult.startTime);
        let obj7 = outer1_0(outer1_1[2]);
        let msToSecResult1 = obj7.msToSec(nextResult.duration);
        let tmp31 = op;
        let tmp32 = "navigation" === op;
        let tmp10 = tmp32;
        if (tmp32) {
          tmp10 = start_timestamp;
        }
        let tmp11 = tmp10;
        if (tmp10) {
          let tmp12 = msToSecResult;
          let tmp13 = start_timestamp;
          tmp11 = msToSecResult < start_timestamp;
        }
        if (!tmp11) {
          let tmp14 = outer1_0;
          let tmp15 = outer1_1;
          let obj3 = outer1_0(outer1_1[2]);
          let tmp16 = activeSpan;
          let tmp17 = msToSecResult;
          let tmp18 = msToSecResult1;
          let sum = msToSecResult + msToSecResult1;
          obj = { name: "Main UI thread blocked", op: "ui.long-task" };
          let tmp20 = outer1_3;
          obj.attributes = outer1_3({}, outer1_0(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics");
          let tmp21 = obj3;
          let tmp22 = tmp2;
          let tmp23 = msToSecResult;
          let tmp24 = sum;
          let tmp25 = obj;
          let startAndEndSpanResult = obj3.startAndEndSpan(activeSpan, msToSecResult, sum, obj);
        }
        continue;
      }
      const spanToJSONResult = outer1_0(outer1_1[3]).spanToJSON(tmp2);
    }
  });
};
export const startTrackingWebVitals = function startTrackingWebVitals(client) {
  let recordClsStandaloneSpans;
  let recordLcpStandaloneSpans;
  client = client.client;
  ({ recordClsStandaloneSpans, recordLcpStandaloneSpans } = client);
  const browserPerformanceAPI = require(1035) /* extractNetworkProtocol */.getBrowserPerformanceAPI();
  if (browserPerformanceAPI) {
    if (obj2.browserPerformanceTimeOrigin()) {
      if (browserPerformanceAPI.mark) {
        const _performance = require(1015) /* WINDOW */.WINDOW.performance;
        _performance.mark("sentry-tracing-init");
      }
      if (recordLcpStandaloneSpans) {
        let result = require(1037) /* _sendStandaloneLcpSpan */.trackLcpAsStandaloneSpan(client);
        const obj3 = require(1037) /* _sendStandaloneLcpSpan */;
      } else {
        result = (function _trackLCP() {
          return result(1010).addLcpInstrumentationHandler((metric) => {
            const tmp = metric.metric.entries[metric.metric.entries.length - 1];
            if (tmp) {
              const obj = { value: iter.value, unit: "millisecond" };
              outer2_7.lcp = obj;
              const outer2_4 = tmp;
            }
          }, true);
        })();
      }
      require = result;
      const dependencyMap = (function _trackTtfb() {
        return result(1010).addTtfbInstrumentationHandler((metric) => {
          if (metric.metric.entries[metric.metric.entries.length - 1]) {
            const obj = { value: iter.value, unit: "millisecond" };
            outer2_7.ttfb = obj;
          }
        });
      })();
      if (recordClsStandaloneSpans) {
        let result1 = require(1038) /* _sendStandaloneClsSpan */.trackClsAsStandaloneSpan(client);
        const obj4 = require(1038) /* _sendStandaloneClsSpan */;
      } else {
        result1 = (function _trackCLS() {
          return result(1010).addClsInstrumentationHandler((metric) => {
            const tmp = metric.metric.entries[metric.metric.entries.length - 1];
            if (tmp) {
              const obj = { value: iter.value, unit: "" };
              outer2_7.cls = obj;
              const outer2_5 = tmp;
            }
          }, true);
        })();
      }
      return () => {
        if (null != callback) {
          callback();
        }
        dependencyMap();
        if (null != result1) {
          result1();
        }
      };
    }
    obj2 = require(794) /* registerSpanErrorInstrumentation */;
  }
  return () => {

  };
};
