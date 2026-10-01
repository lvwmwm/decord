// Module ID: 923
// Function ID: 924
// Dependencies: [32, 924, 682, 904, 926, 927, 899, 905, 907, 908, 928]
// Exports: _setResourceRequestAttributes, addPerformanceEntries, startTrackingInteractions, startTrackingLongAnimationFrames, startTrackingLongTasks, startTrackingWebVitals

// Module 923
import _mod682 from "module_682" /* 682 */;
import _mod899 from "module_899" /* 899 */;
import _mod904 from "module_904" /* 904 */;
import _mod908 from "module_908" /* 908 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 924 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 928 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require, closure_3, closure_4, closure_5, dependencyMap, user;

let tmp;
const _mod905 = tmp(905);
function _addMeasureSpans(activeSpan, entryType, msToSecResult, msToSecResult1, msToSecResult2, ignorePerformanceApiSpans) {
  function isReact19MeasureEntry(entryType) {
    entryType = undefined;
    if (entryType != null) {
      entryType = entryType.entryType;
    }
    if ("measure" === entryType) {
      try {
        return "Components \u269B" === entryType.detail.devtools.track;
      } catch (err) {
      }
    }
  }
  function _addDetailToSpanAttributes(arg0, detail) {
    let tmp17;
    let tmp18;
    try {
      detail = detail.detail;
      if (detail) {
        if (typeof detail === "object") {
          const _Object = Object;
          const entries = Object.entries(detail);
          const tmp11 = entries[Symbol.iterator]();
          if (tmp11 !== undefined) {
            [tmp17, tmp18] = tmp13;
            _slicedToArray(tmp13, 2);
            if (tmp18) {
              const obj = require("module_682");
              if (obj.isPrimitive(tmp18)) {
                const _HermesInternal2 = HermesInternal;
                arg0["sentry.browser.measure.detail." + tmp17] = tmp18;
              }
            }
            if (undefined !== tmp18) {
              try {
                const _HermesInternal = HermesInternal;
                const _JSON2 = JSON;
                const combined = "sentry.browser.measure.detail." + tmp17;
                arg0[combined] = JSON.stringify(tmp18);
              } catch (err) {
              }
            }
          }
        } else {
          const obj2 = require("module_682");
          if (obj2.isPrimitive(detail)) {
            arg0["sentry.browser.measure.detail"] = detail;
          } else {
            try {
              const _JSON = JSON;
              arg0["sentry.browser.measure.detail"] = JSON.stringify(detail);
            } catch (err) {
            }
          }
        }
      }
    } catch (err) {
    }
  }
  if (!isReact19MeasureEntry(entryType)) {
    const items = ["mark", "measure"];
    if (!items.includes(entryType.entryType)) {
      let obj2 = _mod908;
      const navigationEntry = obj2.getNavigationEntry(false);
      let num = 0;
      const msToSec = extractNetworkProtocol.msToSec;
      if (navigationEntry) {
        num = navigationEntry.requestStart;
      }
      let tmp11 = globalThis;
      const _Math = Math;
      const sum = msToSecResult2 + Math.max(msToSecResult, msToSec(num));
      const sum1 = msToSecResult2 + msToSecResult;
      const sum2 = sum1 + msToSecResult1;
      const obj3 = {};
      obj3[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.resource.browser.metrics";
      if (sum !== sum1) {
        obj3["sentry.browser.measure_happened_before_request"] = true;
        obj3["sentry.browser.measure_start_time"] = sum;
      }
      _addDetailToSpanAttributes(obj3, entryType);
      if (sum <= sum2) {
        const tmp4Result = extractNetworkProtocol;
        const obj4 = { name: null, op: null, attributes: obj3 };
        ({ name: obj5.name, entryType: obj5.op } = entryType);
        const tmp17 = tmp4Result;
        const tmp18 = activeSpan;
        tmp4Result.startAndEndSpan(activeSpan, sum, sum2, obj4);
      }
    } else {
      let obj = _mod682;
    }
  }
}
function _addNavigationSpans(activeSpan, requestStart, msToSecResult) {
  let obj5;
  let obj7;
  _require = activeSpan;
  dependencyMap = requestStart;
  let closure_2 = msToSecResult;
  const items = ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"];
  const item = items.forEach((item) => {
    _addPerformanceNavigationTiming(activeSpan, requestStart, item, _slicedToArray);
  });
  _addPerformanceNavigationTiming(activeSpan, requestStart, "secureConnection", msToSecResult, "TLS/SSL");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "fetch", msToSecResult, "cache");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "domainLookup", msToSecResult, "DNS");
  const obj = require("extractNetworkProtocol");
  const sum = msToSecResult + obj.msToSec(requestStart.requestStart);
  const obj2 = require("extractNetworkProtocol");
  const sum1 = msToSecResult + obj2.msToSec(requestStart.responseEnd);
  const obj3 = require("extractNetworkProtocol");
  const sum2 = msToSecResult + obj3.msToSec(requestStart.responseStart);
  if (requestStart.responseEnd) {
    const obj4 = { op: "browser.request", name: requestStart.name, attributes: obj5 };
    obj5 = {};
    obj5[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    const tmp5Result = require("extractNetworkProtocol");
    tmp5Result.startAndEndSpan(activeSpan, sum, sum1, obj4);
    const obj6 = { op: "browser.response", name: requestStart.name, attributes: obj7 };
    obj7 = {};
    obj7[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    const tmp5Result2 = require("extractNetworkProtocol");
    tmp5Result2.startAndEndSpan(activeSpan, sum2, sum1, obj6);
  }
}
function _addPerformanceNavigationTiming(activeSpan, name, domainLookup, msToSecResult, DNS) {
  let tmp = DNS;
  if (DNS === undefined) {
    tmp = domainLookup;
  }
  let str = "connectEnd";
  if ("secureConnection" !== domainLookup) {
    str = "domainLookupStart";
    if ("fetch" !== domainLookup) {
      const _HermesInternal = HermesInternal;
      str = "" + domainLookup + "End";
    }
  }
  const tmp4 = name["" + domainLookup + "Start"];
  const tmp5 = tmp4 && name[str];
  if (tmp5) {
    const startAndEndSpan = extractNetworkProtocol.startAndEndSpan;
    const obj = extractNetworkProtocol;
    const sum = msToSecResult + obj.msToSec(tmp4);
    const obj2 = extractNetworkProtocol;
    const sum1 = msToSecResult + obj2.msToSec(tmp3);
    const obj3 = { op: "browser." + tmp, name: name.name, attributes: null };
    const _HermesInternal2 = HermesInternal;
    const obj4 = {};
    obj4[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    if ("redirect" === domainLookup) {
      let obj6;
      if (null != name.redirectCount) {
        obj6 = { "http.redirect_count": name.redirectCount };
        const obj5 = { "http.redirect_count": name.redirectCount };
      }
      const merged = Object.assign(obj6);
      obj3.attributes = obj4;
      startAndEndSpan(activeSpan, sum, sum1, obj3);
    }
    obj6 = {};
  }
}
function _addResourceSpans(activeSpan, initiatorType, name, msToSecResult, msToSecResult1, msToSecResult2, ignoreResourceSpans) {
  if ("xmlhttprequest" !== initiatorType.initiatorType) {
    if ("fetch" !== initiatorType.initiatorType) {
      let str2 = "resource.other";
      if (initiatorType.initiatorType) {
        const _HermesInternal = HermesInternal;
        str2 = "resource." + initiatorType.initiatorType;
      }
      let hasItem;
      if (ignoreResourceSpans != null) {
        hasItem = ignoreResourceSpans.includes(str2);
      }
      if (!hasItem) {
        const obj = { "url.same_origin": name.includes(_mod904.WINDOW.location.origin) };
        obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.resource.browser.metrics";
        const obj2 = _mod682;
        const url = obj2.parseUrl(name);
        if (url.protocol) {
          const str4 = url.protocol;
          const parts = str4.split(":");
          obj["url.scheme"] = parts.pop();
        }
        if (url.host) {
          obj["server.address"] = url.host;
        }
        const items = [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]];
        let closure_0 = initiatorType;
        const item = items.forEach((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          let tmp4 = null != tmp3;
          if (tmp4) {
            let tmp5 = typeof tmp3 === "number";
            if (typeof closure_0[tmp] === "number") {
              tmp5 = tmp3 < 2147483647;
            }
            if (!tmp5) {
              tmp5 = typeof tmp3 === "string";
            }
            tmp4 = tmp5;
          }
          if (tmp4) {
            closure_1[tmp2] = closure_0[tmp];
          }
        });
        const obj3 = {};
        const merged = Object.assign(obj);
        const tmp6Result = resourceTimingToSpanAttributes;
        const merged1 = Object.assign(tmp6Result.resourceTimingToSpanAttributes(initiatorType));
        const sum = msToSecResult2 + msToSecResult;
        const sum1 = sum + msToSecResult1;
        const tmp6Result2 = extractNetworkProtocol;
        const startAndEndSpan = tmp6Result2.startAndEndSpan;
        const obj4 = { name: name.replace(_mod904.WINDOW.location.origin, ""), op: str2, attributes: obj3 };
        startAndEndSpan(activeSpan, sum, sum1, obj4);
      }
    }
  }
}
let _slicedToArray = _slicedToArray_mod;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c5 = 0;
let closure_6 = {};

export { _addMeasureSpans };
export { _addNavigationSpans };
export { _addResourceSpans };
export const _setResourceRequestAttributes = function _setResourceRequestAttributes(arg0, arg1, arr) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const item = arr.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    let tmp4 = null != tmp3;
    if (tmp4) {
      let tmp5 = typeof tmp3 === "number";
      if (typeof closure_0[tmp] === "number") {
        tmp5 = tmp3 < 2147483647;
      }
      if (!tmp5) {
        tmp5 = typeof tmp3 === "string";
      }
      tmp4 = tmp5;
    }
    if (tmp4) {
      closure_1[tmp2] = closure_0[tmp];
    }
  });
};
export const addPerformanceEntries = function addPerformanceEntries(setAttribute, recordClsOnPageloadSpan) {
  let c3;
  let c4;
  let requestStart;
  let responseStart;
  _require = setAttribute;
  dependencyMap = recordClsOnPageloadSpan;
  let tmp = _require;
  let obj = require("extractNetworkProtocol");
  const browserPerformanceAPI = obj.getBrowserPerformanceAPI();
  let obj3 = require("module_682");
  const result = obj3.browserPerformanceTimeOrigin();
  let getEntries;
  if (browserPerformanceAPI != null) {
    getEntries = browserPerformanceAPI.getEntries;
  }
  if (getEntries) {
    if (result) {
      let tmpResult = tmp(924);
      const msToSecResult = tmpResult.msToSec(result);
      _slicedToArray = msToSecResult;
      const entries = browserPerformanceAPI.getEntries();
      const tmpResult8 = tmp(682);
      const spanToJSONResult = tmpResult8.spanToJSON(setAttribute);
      const op = spanToJSONResult.op;
      user = op;
      let start_timestamp = spanToJSONResult.start_timestamp;
      const substr = entries.slice(closure_5);
      const item = substr.forEach((startTime) => {
        const obj = extractNetworkProtocol;
        _slicedToArray = obj.msToSec(startTime.startTime);
        const obj2 = extractNetworkProtocol;
        const msToSecResult1 = obj2.msToSec(Math.max(0, startTime.duration));
        const entryType = startTime.entryType;
        if ("navigation" === entryType) {
          _addNavigationSpans(setAttribute, startTime, _slicedToArray);
        } else {
          if ("mark" !== entryType) {
            if ("paint" !== entryType) {
              if ("measure" !== entryType) {
                if ("resource" === entryType) {
                  _addResourceSpans(setAttribute, startTime, startTime.name, _slicedToArray, msToSecResult1, _slicedToArray, recordClsOnPageloadSpan.ignoreResourceSpans);
                }
              }
            }
          }
          _addMeasureSpans(setAttribute, startTime, _slicedToArray, msToSecResult1, _slicedToArray, recordClsOnPageloadSpan.ignorePerformanceApiSpans);
          const tmpResult = _mod905;
          const tmp15 = startTime.startTime < tmpResult.getVisibilityWatcher().firstHiddenTime;
          const tmp16 = "first-paint" === startTime.name && tmp15;
          if (tmp16) {
            const obj3 = { value: startTime.startTime, unit: "millisecond" };
            closure_6.fp = obj3;
          }
          const tmp18 = "first-contentful-paint" === startTime.name && tmp15;
          if (tmp18) {
            const obj4 = { value: startTime.startTime, unit: "millisecond" };
            closure_6.fcp = obj4;
          }
        }
      });
      const _Math = Math;
      closure_5 = Math.max(entries.length - 1, 0);
      const _navigator = tmp(904).WINDOW.navigator;
      if (_navigator) {
        const connection = _navigator.connection;
        if (connection) {
          if (connection.effectiveType) {
            const attr = setAttribute.setAttribute("effectiveConnectionType", connection.effectiveType);
          }
          if (connection.type) {
            const attr1 = setAttribute.setAttribute("connectionType", connection.type);
          }
          const tmpResult9 = tmp(924);
          if (tmpResult9.isMeasurementValue(connection.rtt)) {
            let obj2 = { value: connection.rtt, unit: "millisecond" };
            closure_6["connection.rtt"] = obj2;
          }
        }
        const tmpResult10 = tmp(924);
        if (tmpResult10.isMeasurementValue(_navigator.deviceMemory)) {
          const _HermesInternal = HermesInternal;
          const attr2 = setAttribute.setAttribute("deviceMemory", "" + _navigator.deviceMemory + " GB");
        }
        const tmpResult11 = tmp(924);
        if (tmpResult11.isMeasurementValue(_navigator.hardwareConcurrency)) {
          const _String = String;
          const attr3 = setAttribute.setAttribute("hardwareConcurrency", String(_navigator.hardwareConcurrency));
        }
      }
      if ("pageload" === op) {
        const tmpResult12 = tmp(908);
        const navigationEntry = tmpResult12.getNavigationEntry(false);
        const tmp40 = closure_6;
        if (navigationEntry) {
          ({ responseStart, requestStart } = navigationEntry);
          if (requestStart <= responseStart) {
            let obj4 = { value: responseStart - requestStart, unit: "millisecond" };
            tmp40["ttfb.requestTime"] = obj4;
          }
        }
        if (!recordClsOnPageloadSpan.recordClsOnPageloadSpan) {
          delete closure_6["cls"];
        }
        if (!recordClsOnPageloadSpan.recordLcpOnPageloadSpan) {
          delete closure_6["lcp"];
        }
        const _Object = Object;
        let tmp15 = closure_6;
        const entries1 = Object.entries(closure_6);
        const item1 = entries1.forEach((item) => {
          let iter;
          let tmp;
          [tmp, iter] = item;
          const obj = setAttribute(recordClsOnPageloadSpan[2]);
          obj.setMeasurement(tmp, iter.value, iter.unit);
        });
        const attr4 = setAttribute.setAttribute("performance.timeOrigin", msToSecResult);
        setAttribute = setAttribute.setAttribute;
        const tmpResult13 = tmp(907);
        const attr5 = setAttribute("performance.activationStart", tmpResult13.getActivationStart());
        _require = setAttribute;
        const tmp19 = user && recordClsOnPageloadSpan.recordLcpOnPageloadSpan;
        if (tmp19) {
          if (user.element) {
            const setAttribute2 = setAttribute.setAttribute;
            const tmpResult14 = tmp(682);
            setAttribute2("lcp.element", tmpResult14.htmlTreeAsString(user.element));
          }
          if (user.id) {
            const attr6 = setAttribute.setAttribute("lcp.id", user.id);
          }
          if (user.url) {
            const setAttribute3 = setAttribute.setAttribute;
            const str12 = user.url;
            const trimmed = str12.trim();
            setAttribute3("lcp.url", trimmed.slice(0, 200));
          }
          if (null != user.loadTime) {
            const attr7 = setAttribute.setAttribute("lcp.loadTime", user.loadTime);
          }
          if (null != user.renderTime) {
            const attr8 = setAttribute.setAttribute("lcp.renderTime", user.renderTime);
          }
          const attr9 = setAttribute.setAttribute("lcp.size", user.size);
        }
        let sources;
        if (start_timestamp != null) {
          sources = start_timestamp.sources;
        }
        if (sources) {
          sources = recordClsOnPageloadSpan.recordClsOnPageloadSpan;
        }
        if (sources) {
          const sources1 = start_timestamp.sources;
          const item2 = sources1.forEach((node, index) => {
            setAttribute = closure_0.setAttribute;
            const combined = "cls.source." + index + 1;
            const obj = closure_0(recordClsOnPageloadSpan[2]);
            return setAttribute(combined, obj.htmlTreeAsString(node.node));
          });
        }
      }
      user = undefined;
      start_timestamp = undefined;
      closure_6 = {};
    }
  }
};
export const startTrackingInteractions = function startTrackingInteractions() {
  let obj = _mod899;
  const result = obj.addPerformanceInstrumentationHandler("event", (arg0) => {
    let obj5;
    let obj6;
    const entries = arg0.entries;
    const obj = require("module_682");
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        if ("click" === nextResult.name) {
          let tmp20 = _require;
          let tmp22 = dependencyMap;
          let tmp23 = require("extractNetworkProtocol");
          let msToSec = tmp23.msToSec;
          let obj3 = require("module_682");
          let msToSecResult = msToSec(obj3.browserPerformanceTimeOrigin() + tmp7.startTime);
          let tmp26 = msToSecResult;
          let obj4 = require("extractNetworkProtocol");
          let msToSecResult1 = obj4.msToSec(tmp7.duration);
          let obj2 = { name: obj6.htmlTreeAsString(tmp7.target), op: "ui.interaction." + tmp7.name, startTime: msToSecResult, attributes: obj5 };
          obj6 = require("module_682");
          let _HermesInternal = HermesInternal;
          obj5 = {};
          obj5[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          let tmp28 = obj2;
          let obj8 = require("module_682");
          let componentName = obj8.getComponentName(tmp7.target);
          if (componentName) {
            tmp28.attributes["ui.component_name"] = tmp30;
          }
          let tmp20Result = tmp20(tmp22[1]);
          let startAndEndSpanResult = tmp20Result.startAndEndSpan(activeSpan, msToSecResult, tmp26 + msToSecResult1, tmp28);
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
    const obj = require("module_682");
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const entries = getEntries.getEntries();
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        if (nextResult.scripts[0]) {
          let tmp10 = _require;
          let tmp12 = dependencyMap;
          let tmp13 = require("extractNetworkProtocol");
          let msToSec = tmp13.msToSec;
          let obj2 = require("module_682");
          let msToSecResult = msToSec(obj2.browserPerformanceTimeOrigin() + tmp8.startTime);
          let obj3 = require("module_682");
          let spanToJSONResult = obj3.spanToJSON(activeSpan);
          let start_timestamp = spanToJSONResult.start_timestamp;
          if ("navigation" === spanToJSONResult.op) {
            let tmp17 = start_timestamp;
          }
          let tmp10Result = tmp10(tmp12[1]);
          let msToSecResult1 = tmp10Result.msToSec(tmp8.duration);
          let obj4 = {};
          obj4[tmp10(tmp12[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          let tmp24 = obj4;
          ({ sourceURL, sourceFunctionName, sourceCharPosition, invoker: obj5["browser.script.invoker"], invokerType: obj5["browser.script.invoker_type"] } = tmp8.scripts[0]);
          if (sourceURL) {
            tmp24["code.filepath"] = tmp25;
          }
          let tmp28 = sourceFunctionName;
          if (tmp28) {
            tmp24["code.function"] = sourceFunctionName;
          }
          if (-1 !== sourceCharPosition) {
            tmp24["browser.script.source_char_position"] = sourceCharPosition;
          }
          let tmp10Result2 = tmp10(tmp12[1]);
          let obj6 = { name: "Main UI thread blocked", op: "ui.long-animation-frame", attributes: tmp24 };
          let startAndEndSpanResult = tmp10Result2.startAndEndSpan(activeSpan, msToSecResult, msToSecResult + msToSecResult1, obj6);
        }
        continue;
      }
    }
  });
  performanceObserver.observe({ type: "long-animation-frame", buffered: true });
};
export const startTrackingLongTasks = function startTrackingLongTasks() {
  let obj = _mod899;
  const result = obj.addPerformanceInstrumentationHandler("longtask", (arg0) => {
    let obj5;
    const entries = arg0.entries;
    const obj = require("module_682");
    const activeSpan = obj.getActiveSpan();
    const tmp2 = _require;
    const tmp4 = dependencyMap;
    if (activeSpan) {
      const tmp2Result = tmp2(tmp4[2]);
      const spanToJSONResult = tmp2Result.spanToJSON(activeSpan);
      const start_timestamp = spanToJSONResult.start_timestamp;
      const op = spanToJSONResult.op;
      const iter = entries[Symbol.iterator]();
      const tmp10 = "navigation" === op;
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp15 = _require;
        let tmp17 = dependencyMap;
        let tmp18 = require("extractNetworkProtocol");
        let msToSec = tmp18.msToSec;
        let obj3 = require("module_682");
        let msToSecResult = msToSec(obj3.browserPerformanceTimeOrigin() + nextResult.startTime);
        let obj4 = require("extractNetworkProtocol");
        let msToSecResult1 = obj4.msToSec(nextResult.duration);
        let tmp21 = tmp10 && start_timestamp;
        if (tmp21) {
          tmp21 = msToSecResult < start_timestamp;
        }
        if (!tmp21) {
          let tmp15Result = tmp15(tmp17[1]);
          let obj2 = { name: "Main UI thread blocked", op: "ui.long-task", attributes: obj5 };
          obj5 = {};
          let sum = msToSecResult + msToSecResult1;
          obj5[tmp15(tmp17[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          let startAndEndSpanResult = tmp15Result.startAndEndSpan(activeSpan, msToSecResult, sum, obj2);
        }
        continue;
      }
    }
  });
};
export const startTrackingWebVitals = function startTrackingWebVitals(client) {
  let c0;
  let closure_1;
  let recordClsStandaloneSpans;
  let recordLcpStandaloneSpans;
  client = client.client;
  _require = undefined;
  dependencyMap = undefined;
  let result1;
  let tmp = _require;
  ({ recordClsStandaloneSpans, recordLcpStandaloneSpans } = client);
  let obj = require("extractNetworkProtocol");
  const browserPerformanceAPI = obj.getBrowserPerformanceAPI();
  if (browserPerformanceAPI) {
    const tmpResult = tmp(682);
    if (tmpResult.browserPerformanceTimeOrigin()) {
      let result;
      if (browserPerformanceAPI.mark) {
        const _performance = tmp(904).WINDOW.performance;
        _performance.mark("sentry-tracing-init");
      }
      if (recordLcpStandaloneSpans) {
        const tmpResult6 = tmp(926);
        result = tmpResult6.trackLcpAsStandaloneSpan(client);
      } else {
        const tmpResult7 = tmp(899);
        result = tmpResult7.addLcpInstrumentationHandler((metric) => {
          const tmp = metric.metric.entries[metric.metric.entries.length - 1];
          if (tmp) {
            const obj = { value: metric.metric.value, unit: "millisecond" };
            closure_1_6.lcp = obj;
            closure_3 = tmp;
          }
        }, true);
      }
      _require = result;
      const tmpResult8 = tmp(899);
      dependencyMap = tmpResult8.addTtfbInstrumentationHandler((metric) => {
        if (metric.metric.entries[metric.metric.entries.length - 1]) {
          const obj = { value: metric.metric.value, unit: "millisecond" };
          closure_1_6.ttfb = obj;
        }
      });
      if (recordClsStandaloneSpans) {
        const tmpResult9 = tmp(927);
        result1 = tmpResult9.trackClsAsStandaloneSpan(client);
      } else {
        const tmpResult10 = tmp(899);
        result1 = tmpResult10.addClsInstrumentationHandler((metric) => {
          const tmp = metric.metric.entries[metric.metric.entries.length - 1];
          if (tmp) {
            const obj = { value: metric.metric.value, unit: "" };
            closure_1_6.cls = obj;
            closure_4 = tmp;
          }
        }, true);
      }
      return () => {
        if (c0 != null) {
          tmp();
        }
        closure_1();
        if (result1 != null) {
          result1();
        }
      };
    }
  }
  return () => {

  };
};
