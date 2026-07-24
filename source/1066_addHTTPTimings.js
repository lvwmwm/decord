// Module ID: 1066
// Function ID: 12244
// Name: addHTTPTimings
// Dependencies: [77, 794, 1067, 1009]
// Exports: instrumentOutgoingRequests

// Module 1066 (addHTTPTimings)
import _defineProperty from "_defineProperty";

function addHTTPTimings(arg0) {
  const _require = arg0;
  url = _require(url[1]).spanToJSON(arg0).data.url;
  if (url) {
    if ("string" === typeof url) {
      let closure_2 = _require(url[3]).addPerformanceInstrumentationHandler("resource", (arg0) => {
        const entries = arg0.entries;
        const item = entries.forEach((name) => {
          let result = callback(url[2]).isPerformanceResourceTiming(name);
          if (result) {
            name = name.name;
            result = name.endsWith(outer1_1);
          }
          if (result) {
            outer1_0.setAttributes(callback(url[3]).resourceTimingToSpanAttributes(name));
            const _setTimeout = setTimeout;
            const timerId = setTimeout(outer1_2);
            const obj2 = callback(url[3]);
          }
        });
      });
      let obj2 = _require(url[3]);
    }
  }
}
function shouldAttachHeaders(str) {
  const locationHref = require(794) /* registerSpanErrorInstrumentation */.getLocationHref();
  if (locationHref) {
    const _URL = URL;
    const uRL = new URL(str, tmp2);
    const _URL2 = URL;
    const uRL1 = new URL(tmp2);
    if (arg1) {
      const result = require(794) /* registerSpanErrorInstrumentation */.stringMatchesSomePattern(uRL.toString(), arg1);
      let tmp30 = result;
      if (!result) {
        let result1 = tmp22;
        if (tmp22) {
          result1 = require(794) /* registerSpanErrorInstrumentation */.stringMatchesSomePattern(uRL.pathname, arg1);
          const obj4 = require(794) /* registerSpanErrorInstrumentation */;
        }
        tmp30 = result1;
      }
      let tmp24 = tmp30;
      const obj3 = require(794) /* registerSpanErrorInstrumentation */;
    } else {
      tmp24 = tmp22;
    }
    return tmp24;
  } else {
    let result2 = str.match(/^\/(?!\/)/);
    if (arg1) {
      result2 = require(794) /* registerSpanErrorInstrumentation */.stringMatchesSomePattern(str, arg1);
      const obj2 = require(794) /* registerSpanErrorInstrumentation */;
    }
    return result2;
  }
  const obj = require(794) /* registerSpanErrorInstrumentation */;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
const map = new Map();
let obj = { traceFetch: true, traceXHR: true, enableHTTPTimings: true, trackFetchStreamPerformance: false };

export const defaultRequestInstrumentationOptions = obj;
export const instrumentOutgoingRequests = function instrumentOutgoingRequests(getOptions, arg1) {
  let _defineProperty;
  let dependencyMap;
  let require;
  let shouldCreateSpanForRequest;
  let traceFetch;
  let traceXHR;
  let trackFetchStreamPerformance;
  let weakMap;
  const merged = Object.assign({}, shouldAttachHeadersWithTargets, arg1);
  ({ shouldCreateSpanForRequest, enableHTTPTimings: require, tracePropagationTargets: dependencyMap, onRequestSpanStart: _defineProperty, onRequestSpanEnd: weakMap } = merged);
  ({ traceFetch, traceXHR, trackFetchStreamPerformance } = merged);
  if ("function" !== typeof shouldCreateSpanForRequest) {
    shouldCreateSpanForRequest = (arg0) => true;
  }
  shouldAttachHeadersWithTargets = function shouldAttachHeadersWithTargets(arg0) {
    return propagateTraceparent(arg0, closure_1);
  };
  let closure_6 = {};
  const propagateTraceparent = getOptions.getOptions().propagateTraceparent;
  if (traceFetch) {
    getOptions.addEventProcessor((type) => {
      if (tmp) {
        const spans = type.spans;
        const item = spans.forEach((op) => {
          if ("http.client" === op.op) {
            const value = shouldCreateSpanForRequest.get(op.span_id);
            if (value) {
              op.timestamp = value / 1000;
              shouldCreateSpanForRequest.delete(op.span_id);
            }
          }
        });
      }
      return type;
    });
    if (trackFetchStreamPerformance) {
      let result = require(794) /* registerSpanErrorInstrumentation */.addFetchEndInstrumentationHandler((response) => {
        if (response.response) {
          const value = outer1_3.get(response.response);
          let endTimestamp = value;
          if (value) {
            endTimestamp = response.endTimestamp;
          }
          if (endTimestamp) {
            const result = shouldCreateSpanForRequest.set(value, response.endTimestamp);
          }
        }
      });
      let obj = require(794) /* registerSpanErrorInstrumentation */;
    }
    let result1 = require(794) /* registerSpanErrorInstrumentation */.addFetchInstrumentationHandler((response) => {
      let obj = outer1_0(outer1_1[1]);
      obj = { propagateTraceparent, onRequestSpanEnd: closure_3 };
      const result = obj.instrumentFetchRequest(response, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, callback2, obj);
      if (tmp) {
        const result1 = outer1_3.set(response.response, response.fetchData.__span);
      }
      if (result) {
        const fullURL = outer1_0(outer1_1[2]).getFullURL(response.fetchData.url);
        let host;
        if (fullURL) {
          host = outer1_0(outer1_1[1]).parseUrl(fullURL).host;
          const obj5 = outer1_0(outer1_1[1]);
        }
        obj = {};
        let stripDataUrlContentResult;
        if (fullURL) {
          stripDataUrlContentResult = outer1_0(outer1_1[1]).stripDataUrlContent(fullURL);
          const obj7 = outer1_0(outer1_1[1]);
        }
        obj["http.url"] = stripDataUrlContentResult;
        obj["server.address"] = host;
        result.setAttributes(obj);
        if (closure_0) {
          callback2(result);
        }
        if (null != callback) {
          const obj1 = { headers: response.headers };
          callback(result, obj1);
        }
        const obj4 = outer1_0(outer1_1[2]);
      }
    });
    let obj2 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if (traceXHR) {
    const result2 = require(1009) /* addClsInstrumentationHandler */.addXhrInstrumentationHandler((xhr) => {
      const tmp = (function xhrCallback(xhr, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, closure_6, propagateTraceparent, closure_3) {
        let method;
        let url;
        xhr = xhr.xhr;
        if (null != xhr) {
          let tmp3 = xhr[outer2_0(undefined, outer2_1[3]).SENTRY_XHR_DATA_KEY];
        }
        if (xhr) {
          if (!xhr.__sentry_own_request__) {
            if (tmp3) {
              ({ url, method } = tmp3);
              let obj = outer2_0(outer2_1[1]);
              let hasSpansEnabledResult = obj.hasSpansEnabled();
              if (hasSpansEnabledResult) {
                hasSpansEnabledResult = shouldCreateSpanForRequest(url);
              }
              if (xhr.endTimestamp) {
                if (hasSpansEnabledResult) {
                  const __sentry_xhr_span_id__ = xhr.__sentry_xhr_span_id__;
                  if (__sentry_xhr_span_id__) {
                    let tmp50 = obj17;
                    if (closure_6[__sentry_xhr_span_id__]) {
                      tmp50 = undefined !== tmp3.status_code;
                    }
                    if (tmp50) {
                      outer2_0(outer2_1[1]).setHttpStatus(obj17, tmp3.status_code);
                      obj17.end();
                      if (null != closure_3) {
                        obj = {};
                        const obj20 = outer2_0(outer2_1[2]);
                        obj.headers = obj20.createHeadersSafely(outer2_0(outer2_1[3]).parseXhrResponseHeaders(xhr));
                        obj.error = xhr.error;
                        closure_3(obj17, obj);
                        const obj21 = outer2_0(outer2_1[3]);
                      }
                      delete tmp2[tmp];
                      const obj18 = outer2_0(outer2_1[1]);
                    }
                  }
                }
              }
              let obj1 = outer2_0(outer2_1[2]);
              const fullURL = obj1.getFullURL(url);
              const parseUrl = outer2_0(outer2_1[1]).parseUrl;
              let tmp16 = fullURL ? parseUrl(fullURL) : parseUrl(url);
              let obj2 = outer2_0(outer2_1[1]);
              let obj3 = outer2_0(outer2_1[1]);
              const tmp15 = outer2_0(outer2_1[1]);
              const stripDataUrlContentResult = obj2.stripDataUrlContent(obj3.stripUrlQueryAndFragment(url));
              const tmp20 = !outer2_0(outer2_1[1]).getActiveSpan();
              if (hasSpansEnabledResult) {
                if (!tmp20) {
                  obj = {};
                  const _HermesInternal = HermesInternal;
                  obj.name = "" + method + " " + stripDataUrlContentResult;
                  obj1 = {};
                  const obj6 = outer2_0(outer2_1[1]);
                  obj1.url = outer2_0(outer2_1[1]).stripDataUrlContent(url);
                  obj1.type = "xhr";
                  obj1["http.method"] = method;
                  let stripDataUrlContentResult1;
                  if (fullURL) {
                    stripDataUrlContentResult1 = outer2_0(outer2_1[1]).stripDataUrlContent(fullURL);
                    const obj10 = outer2_0(outer2_1[1]);
                  }
                  obj1["http.url"] = stripDataUrlContentResult1;
                  let host;
                  if (null != tmp16) {
                    host = tmp16.host;
                  }
                  obj1["server.address"] = host;
                  let tmp24Result = tmp24(obj1, outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser");
                  let search;
                  tmp24Result = tmp24(tmp24Result, outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.client");
                  if (null != tmp16) {
                    search = tmp16.search;
                  }
                  if (search) {
                    obj2 = {};
                    let search1;
                    if (null != tmp16) {
                      search1 = tmp16.search;
                    }
                    obj2["http.query"] = search1;
                    search = obj2;
                  }
                  let hash;
                  if (null != tmp16) {
                    hash = tmp16.hash;
                  }
                  if (hash) {
                    obj3 = {};
                    let hash1;
                    if (null != tmp16) {
                      hash1 = tmp16.hash;
                    }
                    obj3["http.fragment"] = hash1;
                    hash = obj3;
                  }
                  obj.attributes = Object.assign(tmp24Result, search, hash);
                  let startInactiveSpanResult = obj6.startInactiveSpan(obj);
                  const obj9 = outer2_0(outer2_1[1]);
                }
                xhr.__sentry_xhr_span_id__ = startInactiveSpanResult.spanContext().spanId;
                closure_6[xhr.__sentry_xhr_span_id__] = startInactiveSpanResult;
                if (shouldAttachHeadersWithTargets(url)) {
                  let tmp44;
                  if (obj14.hasSpansEnabled()) {
                    if (!tmp20) {
                      tmp44 = startInactiveSpanResult;
                    }
                  }
                  (function addTracingHeadersToXhrRequest(xhr, span, propagateTraceparent) {
                    let baggage;
                    let tmp2;
                    let traceparent;
                    let obj = outer3_0(outer3_1[1]);
                    obj = { span, propagateTraceparent };
                    const traceData = obj.getTraceData(obj);
                    ({ sentry-trace: tmp2, baggage, traceparent } = traceData);
                    if (tmp2) {
                      const __sentry_xhr_v3__ = xhr.__sentry_xhr_v3__;
                      let request_headers;
                      if (null != __sentry_xhr_v3__) {
                        request_headers = __sentry_xhr_v3__.request_headers;
                      }
                      if (null == request_headers) {
                        if (obj3.setRequestHeader) {
                          obj3.setRequestHeader("sentry-trace", tmp3);
                          let tmp16 = tmp15;
                          if (!!tmp5) {
                            let traceparent2 = tmp18;
                            if (null != tmp8) {
                              traceparent2 = tmp8.traceparent;
                            }
                            tmp16 = traceparent2;
                          }
                          if (!tmp16) {
                            obj3.setRequestHeader("traceparent", tmp5);
                          }
                          if (tmp4) {
                            baggage = undefined;
                            if (null != tmp8) {
                              baggage = request_headers.baggage;
                            }
                            let result = baggage;
                            if (baggage) {
                              result = outer3_0(outer3_1[2]).baggageHeaderHasSentryValues(baggage);
                              const obj4 = outer3_0(outer3_1[2]);
                            }
                            if (!result) {
                              obj3.setRequestHeader("baggage", tmp4);
                            }
                          }
                        }
                      }
                      tmp3 = tmp2;
                    }
                  })(xhr, tmp44, propagateTraceparent);
                  obj14 = outer2_0(outer2_1[1]);
                }
                const client = outer2_0(outer2_1[1]).getClient();
                if (client) {
                  client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, xhr);
                }
                return startInactiveSpanResult;
              }
              const SentryNonRecordingSpan = outer2_0(outer2_1[1]).SentryNonRecordingSpan;
              const prototype = SentryNonRecordingSpan.prototype;
              startInactiveSpanResult = new SentryNonRecordingSpan();
              const obj5 = outer2_0(outer2_1[1]);
            }
          }
        }
      })(xhr, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, callback2, propagateTraceparent, closure_3);
      if (tmp) {
        if (closure_0) {
          callback2(tmp);
        }
        if (null != closure_2) {
          let obj = {};
          let __sentry_xhr_v3__ = xhr.xhr.__sentry_xhr_v3__;
          let request_headers;
          if (null != __sentry_xhr_v3__) {
            request_headers = __sentry_xhr_v3__.request_headers;
          }
          obj.headers = outer1_0(outer1_1[2]).createHeadersSafely(request_headers);
          closure_2(tmp, obj);
          let obj2 = outer1_0(outer1_1[2]);
          const tmp7 = closure_2;
        }
      }
    });
    let obj3 = require(1009) /* addClsInstrumentationHandler */;
  }
};
export { shouldAttachHeaders };
