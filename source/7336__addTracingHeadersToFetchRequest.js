// Module ID: 7336
// Function ID: 59170
// Name: _addTracingHeadersToFetchRequest
// Dependencies: [7358, 5, 7363, 4171, 653, 686, 4365, 507, 3797, 7364, 6819, 4027, 3796, 3789, 4447, 4456, 1327, 2]
// Exports: addTracingHeadersToFetchRequest, instrumentFetchRequest

// Module 7336 (_addTracingHeadersToFetchRequest)
import _optionalChain from "_optionalChain";
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import dispatcher from "dispatcher";
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _addTracingHeadersToFetchRequest(headers, headers2, span) {
  let baggage;
  let tmp2;
  let obj = require(dependencyMap[15]);
  obj = { span };
  const traceData = obj.getTraceData(obj);
  ({ sentry-trace: tmp2, baggage } = traceData);
  if (tmp2) {
    headers = headers2.headers;
    if (!headers) {
      const _Request = Request;
      let isInstanceOfResult = "undefined" !== typeof Request;
      if (isInstanceOfResult) {
        const _Request2 = Request;
        isInstanceOfResult = require(dependencyMap[18]).isInstanceOf(headers, Request);
        const obj3 = require(dependencyMap[18]);
      }
      let headers1;
      if (isInstanceOfResult) {
        headers1 = headers.headers;
      }
      headers = headers1;
    }
    if (headers) {
      const _Headers = Headers;
      let isInstanceOfResult1 = "undefined" !== typeof Headers;
      if (isInstanceOfResult1) {
        const _Headers2 = Headers;
        isInstanceOfResult1 = require(dependencyMap[18]).isInstanceOf(headers, Headers);
        const obj4 = require(dependencyMap[18]);
      }
      if (isInstanceOfResult1) {
        const _Headers3 = Headers;
        headers2 = new Headers(headers);
        const result = headers2.set("sentry-trace", tmp2);
        if (baggage) {
          const value = headers2.get("baggage");
          if (value) {
            const tmp28 = stripBaggageHeaderOfSentryBaggageValues(value);
            let combined = baggage;
            if (tmp28) {
              const _HermesInternal = HermesInternal;
              combined = "" + tmp28 + "," + baggage;
            }
            const result1 = headers2.set("baggage", combined);
          } else {
            const result2 = headers2.set("baggage", baggage);
          }
        }
        return headers2;
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          const items = [];
          const found = headers.filter((arg0) => {
            let isArray = Array.isArray(arg0);
            if (isArray) {
              isArray = "sentry-trace" === arg0[0];
            }
            return !isArray;
          });
          const items1 = [, tmp2];
          const items2 = [items1];
          const combined1 = items.concat(asyncGeneratorStep(found.map((arg0) => {
            let tmp2;
            let tmp3;
            if (Array.isArray(arg0)) {
              if ("baggage" === arg0[0]) {
                if ("string" === typeof arg0[1]) {
                  const arr = callback(arg0);
                  [tmp2, tmp3] = arr;
                  const items = [tmp2, ];
                  const substr = arr.slice(2);
                  items[1] = callback3(tmp3);
                  return items.concat(callback2(substr));
                }
              }
            }
            return arg0;
          })), items2);
          if (baggage) {
            const items3 = [false, baggage];
            combined1.push(items3);
          }
          return combined1;
        } else {
          baggage = undefined;
          if ("baggage" in headers) {
            baggage = headers.baggage;
          }
          const items4 = [];
          const _Array2 = Array;
          if (Array.isArray(baggage)) {
            const mapped = baggage.map((arg0) => {
              let tmp = arg0;
              if ("string" === typeof arg0) {
                tmp = callback3(arg0);
              }
              return tmp;
            });
            let found1 = mapped.filter((arg0) => "" === arg0);
          } else {
            found1 = items4;
            if (baggage) {
              items4.push(stripBaggageHeaderOfSentryBaggageValues(baggage));
              found1 = items4;
            }
          }
          if (baggage) {
            found1.push(baggage);
          }
          obj = { sentry-trace: tmp2 };
          let joined;
          if (found1.length > 0) {
            joined = found1.join(",");
          }
          obj.baggage = joined;
          return Object.assign({}, headers, obj);
        }
      }
    } else {
      const _Object = Object;
      return Object.assign({}, traceData);
    }
  }
}
function stripBaggageHeaderOfSentryBaggageValues(baggage) {
  const parts = baggage.split(",");
  const found = parts.filter((arg0) => {
    const first = arg0.split("=")[0];
    return !first.startsWith(callback(closure_1[17]).SENTRY_BAGGAGE_KEY_PREFIX);
  });
  return found.join(",");
}

export const addTracingHeadersToFetchRequest = function addTracingHeadersToFetchRequest(arg0, arg1, arg2, arg3, arg4) {
  return _addTracingHeadersToFetchRequest(arg0, arg3, arg4);
};
export const instrumentFetchRequest = function instrumentFetchRequest(arg0, arg1, arg2, arg3) {
  let method;
  let url;
  let endResult = arg0;
  let str = "auto.http.browser";
  if (arguments.length > 4) {
    str = "auto.http.browser";
    if (undefined !== arguments[4]) {
      str = arguments[4];
    }
  }
  if (endResult.fetchData) {
    let obj = require(dependencyMap[9]);
    let hasTracingEnabledResult = obj.hasTracingEnabled();
    if (hasTracingEnabledResult) {
      hasTracingEnabledResult = arg1(endResult.fetchData.url);
    }
    if (endResult.endTimestamp) {
      if (hasTracingEnabledResult) {
        const __span = endResult.fetchData.__span;
        if (__span) {
          if (arg3[__span]) {
            if (endResult.response) {
              require(dependencyMap[16]).setHttpStatus(obj10, endResult.response.status);
              let value = endResult.response && endResult.response.headers;
              if (value) {
                const headers = endResult.response.headers;
                value = headers.get("content-length");
              }
              if (value) {
                const _parseInt = parseInt;
                const parsed = parseInt(value);
                if (parsed > 0) {
                  const attr = obj10.setAttribute("http.response_content_length", parsed);
                }
              }
              const obj12 = require(dependencyMap[16]);
            } else if (endResult.error) {
              obj = { code: require(dependencyMap[16]).SPAN_STATUS_ERROR, message: "internal_error" };
              obj10.setStatus(obj);
            }
            endResult = obj10.end();
            delete r2[r1];
          }
        }
      }
    }
    ({ method, url } = endResult.fetchData);
    const _URL = URL;
    const uRL = new URL(url);
    const href = uRL.href;
    while (true) {
      if (!href) {
        break;
      } else {
        let tmp13 = require;
        let tmp14 = dependencyMap;
        let num2 = 10;
        let obj1 = require(dependencyMap[10]);
        let host = obj1.parseUrl(href).host;
        // break
      }
      let tmp15 = require;
      let tmp16 = dependencyMap;
      let num3 = 11;
      let obj2 = require(dependencyMap[11]);
      let tmp17 = !obj2.getActiveSpan();
      if (hasTracingEnabledResult) {
        if (!tmp17) {
          let tmp18 = require;
          let tmp19 = dependencyMap;
          let num4 = 12;
          let obj4 = require(dependencyMap[12]);
          obj = {};
          let tmp20 = globalThis;
          let _HermesInternal = HermesInternal;
          let str2 = "";
          let str3 = " ";
          obj.name = "" + method + " " + url;
          let tmp21 = _isNativeReflectConstruct;
          obj1 = { url };
          let str4 = "fetch";
          obj1.type = "fetch";
          obj1.http.method = method;
          obj1.http.url = href;
          obj1.server.address = host;
          let num5 = 13;
          let tmp22 = _isNativeReflectConstruct(obj1, require(dependencyMap[13]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, str);
          let str5 = "http.client";
          obj.attributes = _isNativeReflectConstruct(tmp22, require(dependencyMap[13]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.client");
          let startInactiveSpanResult = obj4.startInactiveSpan(obj);
        }
        endResult.fetchData.__span = startInactiveSpanResult.spanContext().spanId;
        arg3[startInactiveSpanResult.spanContext().spanId] = startInactiveSpanResult;
        let tmp27 = arg2;
        if (arg2(endResult.fetchData.url)) {
          let num7 = 0;
          let num8 = 1;
          obj2 = endResult.args[1];
          if (!obj2) {
            obj2 = {};
          }
          let tmp29 = require;
          let tmp30 = dependencyMap;
          let tmp28 = _addTracingHeadersToFetchRequest;
          let obj9 = require(dependencyMap[9]);
          let tmp31;
          if (obj9.hasTracingEnabled()) {
            if (!tmp17) {
              tmp31 = startInactiveSpanResult;
            }
          }
          let tmp28Result = tmp28(endResult.args[0], obj2, tmp31);
          if (tmp28Result) {
            endResult.args[1] = obj2;
            obj2.headers = tmp28Result;
          }
        }
        return startInactiveSpanResult;
      }
      let tmp23 = require;
      let tmp24 = dependencyMap;
      let num6 = 14;
      let SentryNonRecordingSpan = require(dependencyMap[14]).SentryNonRecordingSpan;
      let prototype2 = SentryNonRecordingSpan.prototype;
      let tmp25 = new.target;
      let tmp26 = new.target;
      startInactiveSpanResult = new SentryNonRecordingSpan();
    }
  }
};
