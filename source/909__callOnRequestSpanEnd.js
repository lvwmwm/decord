// Module ID: 909
// Function ID: 9970
// Name: _callOnRequestSpanEnd
// Dependencies: [77, 65, 831, 796, 842, 832, 825, 880, 804, 817, 812, 876, 816]
// Exports: instrumentFetchRequest

// Module 909 (_callOnRequestSpanEnd)
import _defineProperty from "_defineProperty";
import _toConsumableArray from "_toConsumableArray";

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
  let obj = require(880) /* getTraceData */;
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
      obj3 = require(804) /* isBuiltin */;
    }
    if (headers) {
      const _Headers = Headers;
      let isInstanceOfResult = "undefined" !== typeof Headers;
      if (isInstanceOfResult) {
        const _Headers2 = Headers;
        isInstanceOfResult = require(804) /* isBuiltin */.isInstanceOf(headers, Headers);
        const obj4 = require(804) /* isBuiltin */;
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
          const arr4 = _toConsumableArray(headers);
          if (!headers.find((arg0) => "sentry-trace" === arg0[0])) {
            const items = ["sentry-trace", tmp3];
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
            const items1 = ["traceparent", traceparent];
            arr4.push(items1);
          }
          let tmp30 = baggage;
          if (baggage) {
            tmp30 = !headers.find((arg0) => {
              let tmp = "baggage" === arg0[0];
              if (tmp) {
                tmp = outer1_6(arg0[1]);
              }
              return tmp;
            });
          }
          if (tmp30) {
            const items2 = ["baggage", baggage];
            arr4.push(items2);
          }
          return arr4;
        } else {
          if ("sentry-trace" in headers) {
            sentry_trace = headers["sentry-trace"];
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
              let items3 = _toConsumableArray(baggage);
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
              obj["sentry-trace"] = tmp22;
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
                let found = baggage.find((arg0) => outer1_6(arg0));
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
    return trimmed.startsWith(outer1_0(outer1_1[10]).SENTRY_BAGGAGE_KEY_PREFIX);
  });
}
function getFetchSpanAttributes(url, result, method, arg3) {
  const obj = { url: require(876) /* isURLObjectRelative */.stripDataUrlContent(url), type: "fetch", "http.method": method };
  const obj2 = require(876) /* isURLObjectRelative */;
  const tmp2 = _defineProperty(_defineProperty(obj, require(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg3), require(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.client");
  if (result) {
    if (!obj3.isURLObjectRelative(result)) {
      tmp2["http.url"] = require(876) /* isURLObjectRelative */.stripDataUrlContent(result.href);
      tmp2["server.address"] = result.host;
      const obj4 = require(876) /* isURLObjectRelative */;
    }
    if (result.search) {
      tmp2["http.query"] = result.search;
    }
    if (result.hash) {
      tmp2["http.fragment"] = result.hash;
    }
    obj3 = require(876) /* isURLObjectRelative */;
  }
  return tmp2;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _addTracingHeadersToFetchRequest };
export { _callOnRequestSpanEnd };
export const instrumentFetchRequest = function instrumentFetchRequest(fetchData, arg1, arg2, arg3, spanOrigin) {
  let method;
  let url;
  if (fetchData.fetchData) {
    ({ method, url } = fetchData.fetchData);
    let obj = require(831) /* hasSpansEnabled */;
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
              require(817) /* getSpanStatusFromHttpCode */.setHttpStatus(obj15, fetchData.response.status);
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
              const obj17 = require(817) /* getSpanStatusFromHttpCode */;
            } else if (fetchData.error) {
              obj = { code: require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR, message: "internal_error" };
              obj15.setStatus(obj);
            }
            obj15.end();
            _callOnRequestSpanEnd(obj15, fetchData, spanOrigin);
            delete tmp2[tmp];
          }
        }
      }
    }
    let tmp7 = spanOrigin;
    if ("object" !== typeof spanOrigin) {
      obj = { spanOrigin };
      tmp7 = obj;
    }
    spanOrigin = tmp7.spanOrigin;
    let str2 = "auto.http.browser";
    if (undefined !== spanOrigin) {
      str2 = spanOrigin;
    }
    const propagateTraceparent = tmp7.propagateTraceparent;
    let obj2 = require(796) /* convertSpanLinksForEnvelope */;
    const tmp11 = !obj2.getActiveSpan();
    if (hasSpansEnabledResult) {
      if (!tmp11) {
        let obj3 = require(842) /* withActiveSpan */;
        let obj4 = require(876) /* isURLObjectRelative */;
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
            sanitizedUrlStringFromUrlObject = require(876) /* isURLObjectRelative */.getSanitizedUrlStringFromUrlObject(result);
            const obj6 = require(876) /* isURLObjectRelative */;
          }
          obj2 = {};
          const _HermesInternal = HermesInternal;
          obj2.name = "" + method + " " + sanitizedUrlStringFromUrlObject;
          obj2.attributes = getFetchSpanAttributes(url, result, method, str2);
        }
        let startInactiveSpanResult = obj3.startInactiveSpan(obj2);
        startsWithResult = url.startsWith("data:");
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
        let tmp43;
        if (obj11.hasSpansEnabled()) {
          if (!tmp11) {
            tmp43 = startInactiveSpanResult;
          }
        }
        const tmp40Result = _addTracingHeadersToFetchRequest(first, merged, tmp43, tmp8);
        if (tmp40Result) {
          fetchData.args[1] = merged;
          merged.headers = tmp40Result;
        }
        obj11 = require(831) /* hasSpansEnabled */;
        const tmp40 = _addTracingHeadersToFetchRequest;
      }
      const client = require(825) /* getCurrentScope */.getClient();
      if (client) {
        obj4 = {};
        ({ args: obj14.input, response: obj14.response, startTimestamp: obj14.startTimestamp, endTimestamp: obj14.endTimestamp } = fetchData);
        client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, obj4);
      }
      return startInactiveSpanResult;
    }
    const SentryNonRecordingSpan = require(832) /* SentryNonRecordingSpan */.SentryNonRecordingSpan;
    const prototype = SentryNonRecordingSpan.prototype;
    startInactiveSpanResult = new SentryNonRecordingSpan();
  }
};
