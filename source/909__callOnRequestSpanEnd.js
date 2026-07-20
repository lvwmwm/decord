// Module ID: 909
// Function ID: 9965
// Name: _callOnRequestSpanEnd
// Dependencies: []
// Exports: instrumentFetchRequest

// Module 909 (_callOnRequestSpanEnd)
function _callOnRequestSpanEnd(arg0, response, onRequestSpanEnd) {
  onRequestSpanEnd = undefined;
  if ("object" === typeof onRequestSpanEnd) {
    if (null !== onRequestSpanEnd) {
      onRequestSpanEnd = onRequestSpanEnd.onRequestSpanEnd;
    }
  }
  if (null != onRequestSpanEnd) {
    const obj = {};
    response = response.response;
    let headers;
    if (null != response) {
      headers = response.headers;
    }
    obj.headers = headers;
    obj.error = response.error;
    onRequestSpanEnd(arg0, obj);
  }
}
function _addTracingHeadersToFetchRequest(headers, headers2, span, propagateTraceparent) {
  let baggage;
  let tmp3;
  let traceparent;
  let tmp = propagateTraceparent;
  let obj = require(dependencyMap[7]);
  obj = { span, propagateTraceparent };
  const traceData = obj.getTraceData(obj);
  ({ sentry-trace: tmp3, baggage, traceparent } = traceData);
  if (tmp3) {
    headers = headers2.headers;
    if (!headers) {
      let headers1;
      if (obj3.isRequest(headers)) {
        headers1 = headers.headers;
      }
      headers = headers1;
      const obj3 = require(dependencyMap[8]);
    }
    if (headers) {
      const _Headers = Headers;
      let isInstanceOfResult = "undefined" !== typeof Headers;
      if (isInstanceOfResult) {
        const _Headers2 = Headers;
        isInstanceOfResult = require(dependencyMap[8]).isInstanceOf(headers, Headers);
        const obj4 = require(dependencyMap[8]);
      }
      if (isInstanceOfResult) {
        const _Headers3 = Headers;
        headers2 = new Headers(headers);
        if (!headers2.get("sentry-trace")) {
          const result = headers2.set("sentry-trace", tmp3);
        }
        if (tmp) {
          tmp = traceparent;
        }
        if (tmp) {
          tmp = !headers2.get("traceparent");
        }
        if (tmp) {
          const result1 = headers2.set("traceparent", traceparent);
        }
        if (baggage) {
          const value = headers2.get("baggage");
          if (value) {
            if (!baggageHeaderHasSentryBaggageValues(value)) {
              const _HermesInternal = HermesInternal;
              const result2 = headers2.set("baggage", "" + value + "," + baggage);
            }
          } else {
            const result3 = headers2.set("baggage", baggage);
          }
        }
        return headers2;
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          const arr4 = callback2(headers);
          if (!headers.find((arg0) => "sentry-trace" === arg0[0])) {
            const items = [, tmp3];
            arr4.push(items);
          }
          let tmp28 = tmp;
          if (tmp) {
            tmp28 = traceparent;
          }
          if (tmp28) {
            tmp28 = !headers.find((arg0) => "traceparent" === arg0[0]);
          }
          if (tmp28) {
            const items1 = ["<string:1358955615>", traceparent];
            arr4.push(items1);
          }
          let tmp30 = baggage;
          if (baggage) {
            tmp30 = !headers.find((arg0) => {
              let tmp = "baggage" === arg0[0];
              if (tmp) {
                tmp = callback(arg0[1]);
              }
              return tmp;
            });
          }
          if (tmp30) {
            const items2 = [544342017, baggage];
            arr4.push(items2);
          }
          return arr4;
        } else {
          if ("sentry-trace" in headers) {
            sentry-trace = headers.sentry-trace;
          }
          if ("traceparent" in headers) {
            const traceparent2 = headers.traceparent;
          }
          baggage = undefined;
          if ("baggage" in headers) {
            baggage = headers.baggage;
          }
          if (baggage) {
            const _Array2 = Array;
            if (Array.isArray(baggage)) {
              let items3 = callback2(baggage);
            } else {
              items3 = [baggage];
            }
          } else {
            const items4 = [];
            if (!baggage) {
              let tmp19 = baggage;
              if (baggage) {
                tmp19 = !baggage;
              }
              if (tmp19) {
                items4.push(baggage);
              }
              obj = {};
              let tmp22 = tmp3;
              if (null != sentry_trace) {
                tmp22 = sentry_trace;
              }
              obj.sentry-trace = tmp22;
              let joined;
              if (items4.length > 0) {
                joined = items4.join(",");
              }
              obj.baggage = joined;
              const merged = Object.assign({}, headers, obj);
              let tmp25 = tmp;
              if (tmp) {
                tmp25 = traceparent;
              }
              if (tmp25) {
                tmp25 = !traceparent2;
              }
              if (tmp25) {
                merged.traceparent = traceparent;
              }
              return merged;
            } else {
              const _Array3 = Array;
              if (Array.isArray(baggage)) {
                let found = baggage.find((arg0) => callback(arg0));
              } else {
                found = baggageHeaderHasSentryBaggageValues(baggage);
              }
            }
          }
        }
      }
    } else {
      const _Object = Object;
      return Object.assign({}, traceData);
    }
  }
}
function baggageHeaderHasSentryBaggageValues(baggage) {
  const parts = baggage.split(",");
  return parts.some((str) => {
    const trimmed = str.trim();
    return trimmed.startsWith(callback(closure_1[10]).SENTRY_BAGGAGE_KEY_PREFIX);
  });
}
function getFetchSpanAttributes(url, result, method, arg3) {
  const obj = { url: require(dependencyMap[11]).stripDataUrlContent(url), type: "fetch", http.method: method };
  const obj2 = require(dependencyMap[11]);
  const tmp2 = callback(callback(obj, require(dependencyMap[12]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg3), require(dependencyMap[12]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.client");
  if (result) {
    if (!obj3.isURLObjectRelative(result)) {
      tmp2.http.url = require(dependencyMap[11]).stripDataUrlContent(result.href);
      tmp2.server.address = result.host;
      const obj4 = require(dependencyMap[11]);
    }
    if (result.search) {
      tmp2.http.query = result.search;
    }
    if (result.hash) {
      tmp2.http.fragment = result.hash;
    }
    const obj3 = require(dependencyMap[11]);
  }
  return tmp2;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _addTracingHeadersToFetchRequest };
export { _callOnRequestSpanEnd };
export const instrumentFetchRequest = function instrumentFetchRequest(fetchData, arg1, arg2, arg3, spanOrigin) {
  let method;
  let url;
  if (fetchData.fetchData) {
    ({ method, url } = fetchData.fetchData);
    let obj = require(dependencyMap[2]);
    let hasSpansEnabledResult = obj.hasSpansEnabled();
    if (hasSpansEnabledResult) {
      hasSpansEnabledResult = arg1(url);
    }
    if (fetchData.endTimestamp) {
      if (hasSpansEnabledResult) {
        const __span = fetchData.fetchData.__span;
        if (__span) {
          if (arg3[__span]) {
            if (fetchData.response) {
              require(dependencyMap[9]).setHttpStatus(obj15, fetchData.response.status);
              const response = fetchData.response;
              let value;
              if (null != response) {
                const headers = response.headers;
                if (null != headers) {
                  value = headers.get("content-length");
                }
              }
              if (value) {
                const _parseInt = parseInt;
                const parsed = parseInt(value);
                if (parsed > 0) {
                  const attr = obj15.setAttribute("http.response_content_length", parsed);
                }
              }
              const obj17 = require(dependencyMap[9]);
            } else if (fetchData.error) {
              obj = { code: require(dependencyMap[9]).SPAN_STATUS_ERROR, message: "internal_error" };
              obj15.setStatus(obj);
            }
            obj15.end();
            _callOnRequestSpanEnd(obj15, fetchData, spanOrigin);
            delete r1[r0];
          }
        }
      }
    }
    let tmp5 = spanOrigin;
    if ("object" !== typeof spanOrigin) {
      obj = { spanOrigin };
      tmp5 = obj;
    }
    spanOrigin = tmp5.spanOrigin;
    let str2 = "auto.http.browser";
    if (undefined !== spanOrigin) {
      str2 = spanOrigin;
    }
    const propagateTraceparent = tmp5.propagateTraceparent;
    let obj2 = require(dependencyMap[3]);
    const tmp9 = !obj2.getActiveSpan();
    if (hasSpansEnabledResult) {
      if (!tmp9) {
        let obj3 = require(dependencyMap[4]);
        let obj4 = require(dependencyMap[11]);
        if (startsWithResult) {
          const obj1 = {};
          const _HermesInternal2 = HermesInternal;
          obj1.name = "" + method + " " + obj4.stripDataUrlContent(url);
          obj1.attributes = getFetchSpanAttributes(url, undefined, method, str2);
          obj2 = obj1;
        } else {
          const result = obj4.parseStringToURLObject(url);
          let sanitizedUrlStringFromUrlObject = url;
          if (result) {
            sanitizedUrlStringFromUrlObject = require(dependencyMap[11]).getSanitizedUrlStringFromUrlObject(result);
            const obj6 = require(dependencyMap[11]);
          }
          obj2 = {};
          const _HermesInternal = HermesInternal;
          obj2.name = "" + method + " " + sanitizedUrlStringFromUrlObject;
          obj2.attributes = getFetchSpanAttributes(url, result, method, str2);
        }
        let startInactiveSpanResult = obj3.startInactiveSpan(obj2);
        const startsWithResult = url.startsWith("data:");
      }
      fetchData.fetchData.__span = startInactiveSpanResult.spanContext().spanId;
      arg3[startInactiveSpanResult.spanContext().spanId] = startInactiveSpanResult;
      if (arg2(fetchData.fetchData.url)) {
        const first = fetchData.args[0];
        obj3 = fetchData.args[1];
        if (!obj3) {
          obj3 = {};
        }
        const merged = Object.assign({}, obj3);
        let tmp41;
        if (obj11.hasSpansEnabled()) {
          if (!tmp9) {
            tmp41 = startInactiveSpanResult;
          }
        }
        const tmp38Result = _addTracingHeadersToFetchRequest(first, merged, tmp41, tmp6);
        if (tmp38Result) {
          fetchData.args[1] = merged;
          merged.headers = tmp38Result;
        }
        const obj11 = require(dependencyMap[2]);
        const tmp38 = _addTracingHeadersToFetchRequest;
      }
      const client = require(dependencyMap[6]).getClient();
      if (client) {
        obj4 = {};
        ({ args: obj14.input, response: obj14.response, startTimestamp: obj14.startTimestamp, endTimestamp: obj14.endTimestamp } = fetchData);
        client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, obj4);
      }
      return startInactiveSpanResult;
    }
    const SentryNonRecordingSpan = require(dependencyMap[5]).SentryNonRecordingSpan;
    const prototype = SentryNonRecordingSpan.prototype;
    startInactiveSpanResult = new SentryNonRecordingSpan();
  }
};
