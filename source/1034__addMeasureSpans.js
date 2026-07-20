// Module ID: 1034
// Function ID: 11122
// Name: _addMeasureSpans
// Dependencies: []
// Exports: addPerformanceEntries, startTrackingInteractions, startTrackingLongAnimationFrames, startTrackingLongTasks, startTrackingWebVitals

// Module 1034 (_addMeasureSpans)
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
      let items = ["shadowHorizontal", "CMR"];
      if (!items.includes(detail.entryType)) {
        let tmp8 = require;
        let tmp9 = dependencyMap;
        let num2 = 10;
        let obj2 = require(dependencyMap[10]);
        let flag = false;
        let navigationEntry = obj2.getNavigationEntry(false);
        let num3 = 2;
        let obj3 = require(dependencyMap[2]);
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
        let tmp16 = callback2;
        let tmp17 = require;
        let tmp18 = dependencyMap;
        let num6 = 3;
        let str2 = "auto.resource.browser.metrics";
        let tmp19 = callback2({}, require(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.resource.browser.metrics");
        if (sum !== sum1) {
          let flag2 = true;
          tmp19.sentry.browser.measure_happened_before_request = true;
          tmp19.sentry.browser.measure_start_time = sum;
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
              let tmp55 = callback;
              let tmp56 = callback(tmp34, 2);
              [tmp57, tmp58] = tmp56;
              let tmp59 = tmp58;
              if (tmp58) {
                let tmp36 = require;
                let tmp37 = dependencyMap;
                let obj5 = require(dependencyMap[3]);
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
            let obj4 = require(dependencyMap[3]);
            let tmp26 = detail;
            if (obj4.isPrimitive(tmp22)) {
              let tmp29 = tmp19;
              let tmp30 = detail;
              tmp20.sentry.browser.measure.detail = tmp22;
            } else {
              let tmp27 = tmp19;
              let _JSON = JSON;
              let tmp28 = detail;
              tmp20.sentry.browser.measure.detail = JSON.stringify(tmp22);
            }
          }
        }
        while (true) {
          if (sum > sum2) {
            break;
          } else {
            let tmp47 = require;
            let tmp48 = dependencyMap;
            let obj6 = require(dependencyMap[2]);
            let obj = {};
            ({ name: obj7.name, entryType: obj7.op } = detail);
            obj.attributes = tmp19;
            let tmp49 = activeSpan;
            let tmp50 = obj6;
            let tmp51 = sum;
            let tmp52 = sum2;
            let tmp53 = obj;
            let startAndEndSpanResult = obj6.startAndEndSpan(activeSpan, sum, sum2, obj);
            // break
          }
          break;
        }
      } else {
        let tmp5 = require;
        let tmp6 = dependencyMap;
        let num = 3;
        obj = require(dependencyMap[3]);
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
  const require = activeSpan;
  const dependencyMap = requestStart;
  let closure_2 = arg2;
  const items = ["ON", "VOICE_CHANNEL_BLOCKED_USER_WARNING", "ON", "TOADSTOOL", "%RangeError%"];
  const item = items.forEach((arg0) => {
    callback(arg0, arg1, arg0, arg2);
  });
  _addPerformanceNavigationTiming(activeSpan, requestStart, "secureConnection", arg2, "TLS/SSL");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "fetch", arg2, "cache");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "domainLookup", arg2, "DNS");
  let obj = require(dependencyMap[2]);
  const sum = arg2 + obj.msToSec(requestStart.requestStart);
  const sum1 = arg2 + require(dependencyMap[2]).msToSec(requestStart.responseEnd);
  const obj2 = require(dependencyMap[2]);
  const sum2 = arg2 + require(dependencyMap[2]).msToSec(requestStart.responseStart);
  if (requestStart.responseEnd) {
    const obj4 = require(dependencyMap[2]);
    obj = { op: "browser.request", name: requestStart.name, attributes: callback2({}, require(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics") };
    obj4.startAndEndSpan(activeSpan, sum, sum1, obj);
    const obj6 = require(dependencyMap[2]);
    obj = { op: "browser.response", name: requestStart.name, attributes: callback2({}, require(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics") };
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
  let tmp5 = tmp4;
  if (redirectCount["" + domainLookup + "Start"]) {
    tmp5 = tmp3;
  }
  if (tmp5) {
    let obj = require(dependencyMap[2]);
    let obj1 = require(dependencyMap[2]);
    const sum = arg3 + obj1.msToSec(tmp4);
    const sum1 = arg3 + require(dependencyMap[2]).msToSec(tmp3);
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
    obj1.http.redirect_count = redirectCount;
    obj = obj1;
    const obj3 = require(dependencyMap[2]);
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
        const tmp6 = callback2({}, require(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.resource.browser.metrics");
        let obj = require(dependencyMap[3]);
        const url = obj.parseUrl(arr);
        if (url.protocol) {
          const parts = url.protocol.split(":");
          tmp6.url.scheme = parts.pop();
          const str4 = url.protocol;
        }
        if (url.host) {
          tmp6.server.address = url.host;
        }
        tmp6.url.same_origin = arr.includes(require(dependencyMap[4]).WINDOW.location.origin);
        const items = [["Worker", "XMLHttpRequest"], [null, null], [false, false], [false, false], [null, null], []];
        _setResourceRequestAttributes(initiatorType, tmp6, items);
        const _Object = Object;
        const sum = arg5 + arg3;
        const merged = Object.assign({}, tmp6, require(dependencyMap[11]).resourceTimingToSpanAttributes(initiatorType));
        const sum1 = sum + arg4;
        const obj3 = require(dependencyMap[2]);
        obj = { name: arr.replace(require(dependencyMap[4]).WINDOW.location.origin, ""), op: str2, attributes: merged };
        obj3.startAndEndSpan(activeSpan, sum, sum1, obj);
        const obj2 = require(dependencyMap[11]);
      }
    }
  }
}
function _setResourceRequestAttributes(initiatorType, arg1, items) {
  const require = initiatorType;
  const dependencyMap = arg1;
  const item = items.forEach((arg0) => {
    const tmp = callback(arg0, 2);
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
      arg1[tmp[1]] = tmp2;
    }
  });
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_6 = 0;
let closure_7 = {};

export { _addMeasureSpans };
export { _addNavigationSpans };
export { _addResourceSpans };
export { _setResourceRequestAttributes };
export const addPerformanceEntries = function addPerformanceEntries(setAttribute, recordClsOnPageloadSpan) {
  let requestStart;
  let responseStart;
  const require = setAttribute;
  const dependencyMap = recordClsOnPageloadSpan;
  let obj = require(dependencyMap[2]);
  const browserPerformanceAPI = obj.getBrowserPerformanceAPI();
  const result = require(dependencyMap[3]).browserPerformanceTimeOrigin();
  if (null != browserPerformanceAPI) {
    if (browserPerformanceAPI.getEntries) {
      if (result) {
        const msToSecResult = require(dependencyMap[2]).msToSec(result);
        let closure_2 = msToSecResult;
        const entries = browserPerformanceAPI.getEntries();
        const obj4 = require(dependencyMap[2]);
        const spanToJSONResult = require(dependencyMap[3]).spanToJSON(setAttribute);
        const op = spanToJSONResult.op;
        let closure_3 = op;
        let start_timestamp = spanToJSONResult.start_timestamp;
        const substr = entries.slice(closure_6);
        const item = substr.forEach((startTime, self) => {
          let obj = startTime(self[2]);
          const msToSecResult = obj.msToSec(startTime.startTime);
          const msToSecResult1 = startTime(self[2]).msToSec(Math.max(0, startTime.duration));
          const entryType = startTime.entryType;
          if ("navigation" === entryType) {
            callback2(startTime, startTime, msToSecResult);
          } else {
            if ("mark" !== entryType) {
              if ("paint" !== entryType) {
                if ("measure" !== entryType) {
                  if ("resource" === entryType) {
                    callback3(startTime, startTime, startTime.name, msToSecResult, msToSecResult1, msToSecResult, self.ignoreResourceSpans);
                  }
                }
              }
            }
            callback(startTime, startTime, msToSecResult, msToSecResult1, msToSecResult, self.ignorePerformanceApiSpans);
            const tmp16 = startTime.startTime < startTime(self[8]).getVisibilityWatcher().firstHiddenTime;
            if (tmp17) {
              obj = { value: startTime.startTime, unit: "millisecond" };
              closure_7.fp = obj;
            }
            if (tmp19) {
              obj = { value: startTime.startTime, unit: "millisecond" };
              closure_7.fcp = obj;
            }
            const obj3 = startTime(self[8]);
            const tmp17 = "first-paint" === startTime.name && tmp16;
            const tmp19 = "first-contentful-paint" === startTime.name && tmp16;
          }
        });
        const _Math = Math;
        closure_6 = Math.max(entries.length - 1, 0);
        const _navigator = require(dependencyMap[4]).WINDOW.navigator;
        if (_navigator) {
          const connection = _navigator.connection;
          if (connection) {
            if (connection.effectiveType) {
              const attr = setAttribute.setAttribute("effectiveConnectionType", connection.effectiveType);
            }
            if (connection.type) {
              const attr1 = setAttribute.setAttribute("connectionType", connection.type);
            }
            if (obj6.isMeasurementValue(connection.rtt)) {
              obj = { value: connection.rtt, unit: "millisecond" };
              closure_7.connection.rtt = obj;
            }
            const obj6 = require(dependencyMap[2]);
          }
          if (obj8.isMeasurementValue(_navigator.deviceMemory)) {
            const _HermesInternal = HermesInternal;
            const attr2 = setAttribute.setAttribute("deviceMemory", "" + _navigator.deviceMemory + " GB");
          }
          const obj8 = require(dependencyMap[2]);
          if (obj9.isMeasurementValue(_navigator.hardwareConcurrency)) {
            const _String = String;
            const attr3 = setAttribute.setAttribute("hardwareConcurrency", String(_navigator.hardwareConcurrency));
          }
          const obj9 = require(dependencyMap[2]);
        }
        if ("pageload" === op) {
          const navigationEntry = require(dependencyMap[10]).getNavigationEntry(false);
          if (navigationEntry) {
            ({ responseStart, requestStart } = navigationEntry);
            if (requestStart <= responseStart) {
              obj = { value: responseStart - requestStart, unit: "millisecond" };
              tmp29.ttfb.requestTime = obj;
            }
          }
          if (!recordClsOnPageloadSpan.recordClsOnPageloadSpan) {
            delete r6.cls;
          }
          if (!recordClsOnPageloadSpan.recordLcpOnPageloadSpan) {
            delete r6.lcp;
          }
          const _Object = Object;
          const entries1 = Object.entries(closure_7);
          const item1 = entries1.forEach((arg0) => {
            const tmp = msToSecResult(arg0, 2);
            arg0(arg1[3]).setMeasurement(tmp[0], tmp[1].value, tmp[1].unit);
          });
          const attr4 = setAttribute.setAttribute("performance.timeOrigin", msToSecResult);
          const obj12 = require(dependencyMap[10]);
          const tmp29 = closure_7;
          const attr5 = setAttribute.setAttribute("performance.activationStart", require(dependencyMap[9]).getActivationStart());
          function _setWebVitalAttributes(setAttribute, recordLcpOnPageloadSpan) {
            recordLcpOnPageloadSpan = user;
            if (user) {
              recordLcpOnPageloadSpan = recordLcpOnPageloadSpan.recordLcpOnPageloadSpan;
            }
            if (recordLcpOnPageloadSpan) {
              if (user.element) {
                const attr = setAttribute.setAttribute("lcp.element", setAttribute(recordLcpOnPageloadSpan[3]).htmlTreeAsString(user.element));
                const obj = setAttribute(recordLcpOnPageloadSpan[3]);
              }
              if (user.id) {
                const attr1 = setAttribute.setAttribute("lcp.id", user.id);
              }
              if (user.url) {
                const trimmed = user.url.trim();
                const attr2 = setAttribute.setAttribute("lcp.url", trimmed.slice(0, 200));
                const str3 = user.url;
              }
              if (null != user.loadTime) {
                const attr3 = setAttribute.setAttribute("lcp.loadTime", user.loadTime);
              }
              if (null != user.renderTime) {
                const attr4 = setAttribute.setAttribute("lcp.renderTime", user.renderTime);
              }
              const attr5 = setAttribute.setAttribute("lcp.size", user.size);
            }
            if (tmp21) {
              const sources = _undefined.sources;
              const item = sources.forEach((node) => {
                const combined = "cls.source." + arg1 + 1;
                return node.setAttribute(combined, node(closure_1[3]).htmlTreeAsString(node.node));
              });
            }
          }(setAttribute, recordClsOnPageloadSpan);
          const obj11 = require(dependencyMap[9]);
        }
        start_timestamp = undefined;
        let closure_5;
        closure_7 = {};
        const obj5 = require(dependencyMap[3]);
      }
    }
  }
};
export const startTrackingInteractions = function startTrackingInteractions() {
  const result = require(dependencyMap[7]).addPerformanceInstrumentationHandler("event", (arg0) => {
    const entries = arg0.entries;
    let obj = callback(closure_1[3]);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp18 = nextResult;
        if ("click" === nextResult.name) {
          let tmp19 = callback;
          let tmp20 = closure_1;
          let obj3 = callback(closure_1[2]);
          let obj4 = callback(closure_1[3]);
          let tmp21 = nextResult;
          let msToSecResult = obj3.msToSec(obj4.browserPerformanceTimeOrigin() + tmp18.startTime);
          let tmp23 = msToSecResult;
          let obj5 = callback(closure_1[2]);
          let msToSecResult1 = obj5.msToSec(tmp18.duration);
          obj = {};
          let obj7 = callback(closure_1[3]);
          obj.name = obj7.htmlTreeAsString(tmp18.target);
          let _HermesInternal = HermesInternal;
          obj.op = "ui.interaction." + tmp18.name;
          obj.startTime = msToSecResult;
          let tmp25 = callback2;
          obj.attributes = callback2({}, callback(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics");
          let tmp26 = obj;
          let obj8 = callback(closure_1[3]);
          let componentName = obj8.getComponentName(tmp18.target);
          if (componentName) {
            let tmp7 = obj;
            let tmp8 = componentName;
            tmp26.attributes.ui.component_name = tmp28;
          }
          let tmp9 = callback;
          let tmp10 = closure_1;
          let obj2 = callback(closure_1[2]);
          let tmp11 = activeSpan;
          let tmp12 = msToSecResult;
          let tmp13 = msToSecResult1;
          let tmp14 = obj;
          let tmp15 = obj2;
          let tmp16 = tmp23;
          let startAndEndSpanResult = obj2.startAndEndSpan(tmp2, msToSecResult, tmp23 + msToSecResult1, tmp26);
        }
        // continue
      }
    }
  });
};
export const startTrackingLongAnimationFrames = function startTrackingLongAnimationFrames() {
  const performanceObserver = new globalThis.PerformanceObserver((getEntries) => {
    let sourceCharPosition;
    let sourceFunctionName;
    let sourceURL;
    let obj = callback(closure_1[3]);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const entries = getEntries.getEntries();
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp42 = nextResult;
        if (nextResult.scripts[0]) {
          let tmp7 = callback;
          let tmp8 = closure_1;
          let obj2 = callback(closure_1[2]);
          let obj3 = callback(closure_1[3]);
          let tmp9 = nextResult;
          let msToSecResult = obj2.msToSec(obj3.browserPerformanceTimeOrigin() + tmp42.startTime);
          let obj4 = callback(closure_1[3]);
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
          let tmp16 = callback;
          let tmp17 = closure_1;
          let obj5 = callback(closure_1[2]);
          let tmp18 = nextResult;
          let msToSecResult1 = obj5.msToSec(tmp42.duration);
          let tmp20 = callback2;
          let tmp21 = callback2({}, callback(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics");
          let tmp22 = tmp21;
          ({ sourceURL, sourceFunctionName, sourceCharPosition, invoker: tmp21.browser.script.invoker, invokerType: tmp21.browser.script.invoker_type } = tmp42.scripts[0]);
          if (sourceURL) {
            let tmp24 = tmp21;
            let tmp25 = sourceURL;
            tmp22.code.filepath = tmp23;
          }
          let tmp26 = sourceFunctionName;
          if (sourceFunctionName) {
            let tmp27 = tmp21;
            let tmp28 = sourceFunctionName;
            tmp22.code.function = sourceFunctionName;
          }
          let tmp29 = sourceCharPosition;
          if (-1 !== sourceCharPosition) {
            let tmp30 = tmp21;
            let tmp31 = sourceCharPosition;
            tmp22.browser.script.source_char_position = sourceCharPosition;
          }
          let tmp32 = callback;
          let tmp33 = closure_1;
          let obj6 = callback(closure_1[2]);
          let tmp34 = activeSpan;
          let tmp35 = msToSecResult;
          let tmp36 = msToSecResult1;
          obj = { -9223372036854775808: false, 0: "auto.browser.global_handlers.onerror" };
          let tmp37 = tmp21;
          obj.attributes = tmp22;
          let tmp38 = obj6;
          let tmp39 = msToSecResult;
          let tmp40 = obj;
          let startAndEndSpanResult = obj6.startAndEndSpan(tmp2, msToSecResult, msToSecResult + msToSecResult1, obj);
        }
        // continue
      }
    }
  });
  performanceObserver.observe({});
};
export const startTrackingLongTasks = function startTrackingLongTasks() {
  const result = require(dependencyMap[7]).addPerformanceInstrumentationHandler("longtask", (arg0) => {
    let op;
    let start_timestamp;
    const entries = arg0.entries;
    let obj = callback(closure_1[3]);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const obj2 = callback(closure_1[3]);
      ({ op, start_timestamp } = callback(closure_1[3]).spanToJSON(tmp2));
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp27 = callback;
        let tmp28 = closure_1;
        let obj5 = callback(closure_1[2]);
        let obj6 = callback(closure_1[3]);
        let msToSecResult = obj5.msToSec(obj6.browserPerformanceTimeOrigin() + nextResult.startTime);
        let obj7 = callback(closure_1[2]);
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
          let tmp14 = callback;
          let tmp15 = closure_1;
          let obj3 = callback(closure_1[2]);
          let tmp16 = activeSpan;
          let tmp17 = msToSecResult;
          let tmp18 = msToSecResult1;
          let sum = msToSecResult + msToSecResult1;
          obj = { -9223372036854775808: false, 0: "auto.browser.global_handlers.onunhandledrejection" };
          let tmp20 = callback2;
          obj.attributes = callback2({}, callback(closure_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.browser.metrics");
          let tmp21 = obj3;
          let tmp22 = tmp2;
          let tmp23 = msToSecResult;
          let tmp24 = sum;
          let tmp25 = obj;
          let startAndEndSpanResult = obj3.startAndEndSpan(activeSpan, msToSecResult, sum, obj);
        }
        // continue
      }
      const spanToJSONResult = callback(closure_1[3]).spanToJSON(tmp2);
    }
  });
};
export const startTrackingWebVitals = function startTrackingWebVitals(client) {
  let recordClsStandaloneSpans;
  let recordLcpStandaloneSpans;
  client = client.client;
  ({ recordClsStandaloneSpans, recordLcpStandaloneSpans } = client);
  const browserPerformanceAPI = require(closure_1[2]).getBrowserPerformanceAPI();
  if (browserPerformanceAPI) {
    if (obj2.browserPerformanceTimeOrigin()) {
      if (browserPerformanceAPI.mark) {
        const _performance = require(closure_1[4]).WINDOW.performance;
        _performance.mark("sentry-tracing-init");
      }
      if (recordLcpStandaloneSpans) {
        let result = require(closure_1[5]).trackLcpAsStandaloneSpan(client);
        const obj3 = require(closure_1[5]);
      } else {
        result = function _trackLCP() {
          return result(closure_1[7]).addLcpInstrumentationHandler((metric) => {
            const tmp = iter.entries[iter.entries.length - 1];
            if (tmp) {
              const obj = { value: iter.value, unit: "millisecond" };
              closure_7.lcp = obj;
            }
          }, true);
        }();
      }
      const require = result;
      closure_1 = function _trackTtfb() {
        return result(closure_1[7]).addTtfbInstrumentationHandler((metric) => {
          if (metric.metric.entries[metric.metric.entries.length - 1]) {
            const obj = { value: iter.value, unit: "millisecond" };
            closure_7.ttfb = obj;
          }
        });
      }();
      if (recordClsStandaloneSpans) {
        let result1 = require(closure_1[6]).trackClsAsStandaloneSpan(client);
        const obj4 = require(closure_1[6]);
      } else {
        result1 = function _trackCLS() {
          return result(closure_1[7]).addClsInstrumentationHandler((metric) => {
            const tmp = iter.entries[iter.entries.length - 1];
            if (tmp) {
              const obj = { value: iter.value, unit: "" };
              closure_7.cls = obj;
            }
          }, true);
        }();
      }
      let closure_2 = result1;
      return () => {
        if (null != result) {
          result();
        }
        callback();
        if (null != result1) {
          result1();
        }
      };
    }
    const obj2 = require(closure_1[3]);
  }
  return () => {

  };
};
