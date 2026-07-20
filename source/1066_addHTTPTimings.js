// Module ID: 1066
// Function ID: 12238
// Name: addHTTPTimings
// Dependencies: []
// Exports: instrumentOutgoingRequests

// Module 1066 (addHTTPTimings)
function addHTTPTimings(arg0) {
  const require = arg0;
  const url = require(dependencyMap[1]).spanToJSON(arg0).data.url;
  const dependencyMap = url;
  if (url) {
    if ("string" === typeof url) {
      let closure_2 = require(dependencyMap[3]).addPerformanceInstrumentationHandler("resource", (arg0) => {
        const entries = arg0.entries;
        const item = entries.forEach((name) => {
          let result = attributes(closure_1[2]).isPerformanceResourceTiming(name);
          if (result) {
            name = name.name;
            result = name.endsWith(closure_1);
          }
          if (result) {
            attributes.setAttributes(attributes(closure_1[3]).resourceTimingToSpanAttributes(name));
            const _setTimeout = setTimeout;
            const timerId = setTimeout(closure_2);
            const obj2 = attributes(closure_1[3]);
          }
        });
      });
      const obj2 = require(dependencyMap[3]);
    }
  }
}
function shouldAttachHeaders(str) {
  const locationHref = require(dependencyMap[1]).getLocationHref();
  if (locationHref) {
    const _URL = URL;
    const uRL = new URL(str, tmp2);
    const _URL2 = URL;
    const uRL1 = new URL(tmp2);
    if (arg1) {
      const result = require(dependencyMap[1]).stringMatchesSomePattern(uRL.toString(), arg1);
      let tmp30 = result;
      if (!result) {
        let result1 = tmp22;
        if (tmp22) {
          result1 = require(dependencyMap[1]).stringMatchesSomePattern(uRL.pathname, arg1);
          const obj4 = require(dependencyMap[1]);
        }
        tmp30 = result1;
      }
      let tmp24 = tmp30;
      const obj3 = require(dependencyMap[1]);
    } else {
      tmp24 = tmp22;
    }
    return tmp24;
  } else {
    let result2 = str.match(/^\/(?!\/)/);
    if (arg1) {
      result2 = require(dependencyMap[1]).stringMatchesSomePattern(str, arg1);
      const obj2 = require(dependencyMap[1]);
    }
    return result2;
  }
  const obj = require(dependencyMap[1]);
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
const map = new Map();
const obj = { propTypes: "%Math%", display: "GUILD_EVENT_EMBED", flexDirection: "handled", flexWrap: "RowTypes" };

export const defaultRequestInstrumentationOptions = obj;
export const instrumentOutgoingRequests = function instrumentOutgoingRequests(getOptions, arg1) {
  let shouldCreateSpanForRequest;
  let traceFetch;
  let traceXHR;
  let trackFetchStreamPerformance;
  const merged = Object.assign({}, shouldAttachHeadersWithTargets, arg1);
  ({ shouldCreateSpanForRequest, enableHTTPTimings: closure_0, tracePropagationTargets: closure_1, onRequestSpanStart: closure_2, onRequestSpanEnd: closure_3 } = merged);
  ({ traceFetch, traceXHR, trackFetchStreamPerformance } = merged);
  if ("function" !== typeof shouldCreateSpanForRequest) {
    shouldCreateSpanForRequest = (arg0) => true;
  }
  function shouldAttachHeadersWithTargets(arg0) {
    return propagateTraceparent(arg0, closure_1);
  }
  let closure_6 = {};
  const shouldAttachHeaders = getOptions.getOptions().propagateTraceparent;
  if (traceFetch) {
    getOptions.addEventProcessor((type) => {
      if (tmp) {
        const spans = type.spans;
        const item = spans.forEach((op) => {
          if ("http.client" === op.op) {
            const value = map.get(op.span_id);
            if (value) {
              op.timestamp = value / 1000;
              map.delete(op.span_id);
            }
          }
        });
      }
      return type;
    });
    if (trackFetchStreamPerformance) {
      const result = require(dependencyMap[1]).addFetchEndInstrumentationHandler((response) => {
        if (response.response) {
          const value = store.get(response.response);
          let endTimestamp = value;
          if (value) {
            endTimestamp = response.endTimestamp;
          }
          if (endTimestamp) {
            const result = shouldCreateSpanForRequest.set(value, response.endTimestamp);
          }
        }
      });
      const obj = require(dependencyMap[1]);
    }
    const result1 = require(dependencyMap[1]).addFetchInstrumentationHandler((response) => {
      let obj = callback(closure_1[1]);
      obj = { propagateTraceparent, onRequestSpanEnd: store };
      const result = obj.instrumentFetchRequest(response, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, callback3, obj);
      if (tmp) {
        const result1 = store.set(response.response, response.fetchData.__span);
      }
      if (result) {
        const fullURL = callback(closure_1[2]).getFullURL(response.fetchData.url);
        let host;
        if (fullURL) {
          host = callback(closure_1[1]).parseUrl(fullURL).host;
          const obj5 = callback(closure_1[1]);
        }
        obj = {};
        let stripDataUrlContentResult;
        if (fullURL) {
          stripDataUrlContentResult = callback(closure_1[1]).stripDataUrlContent(fullURL);
          const obj7 = callback(closure_1[1]);
        }
        obj.http.url = stripDataUrlContentResult;
        obj.server.address = host;
        result.setAttributes(obj);
        if (callback) {
          callback3(result);
        }
        if (null != callback2) {
          const obj1 = { headers: response.headers };
          callback2(result, obj1);
        }
        const obj4 = callback(closure_1[2]);
      }
    });
    const obj2 = require(dependencyMap[1]);
  }
  if (traceXHR) {
    const result2 = require(dependencyMap[3]).addXhrInstrumentationHandler((xhr) => {
      const tmp = function xhrCallback(xhr, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, closure_6, propagateTraceparent, closure_3) {
        let method;
        let url;
        xhr = xhr.xhr;
        if (xhr) {
          if (!xhr.__sentry_own_request__) {
            if (tmp) {
              ({ url, method } = tmp);
              let obj = callback(closure_1[1]);
              let hasSpansEnabledResult = obj.hasSpansEnabled();
              if (hasSpansEnabledResult) {
                hasSpansEnabledResult = shouldCreateSpanForRequest(url);
              }
              if (xhr.endTimestamp) {
                if (hasSpansEnabledResult) {
                  const __sentry_xhr_span_id__ = xhr.__sentry_xhr_span_id__;
                  if (__sentry_xhr_span_id__) {
                    let tmp48 = obj17;
                    if (closure_6[__sentry_xhr_span_id__]) {
                      tmp48 = undefined !== tmp.status_code;
                    }
                    if (tmp48) {
                      callback(closure_1[1]).setHttpStatus(obj17, tmp.status_code);
                      obj17.end();
                      if (null != closure_3) {
                        obj = {};
                        const obj20 = callback(closure_1[2]);
                        obj.headers = obj20.createHeadersSafely(callback(closure_1[3]).parseXhrResponseHeaders(xhr));
                        obj.error = xhr.error;
                        closure_3(obj17, obj);
                        const obj21 = callback(closure_1[3]);
                      }
                      delete r3[r2];
                      const obj18 = callback(closure_1[1]);
                    }
                  }
                }
              }
              let obj1 = callback(closure_1[2]);
              const fullURL = obj1.getFullURL(url);
              const parseUrl = callback(closure_1[1]).parseUrl;
              const tmp14 = fullURL ? parseUrl(fullURL) : parseUrl(url);
              let obj2 = callback(closure_1[1]);
              let obj3 = callback(closure_1[1]);
              const tmp13 = callback(closure_1[1]);
              const stripDataUrlContentResult = obj2.stripDataUrlContent(obj3.stripUrlQueryAndFragment(url));
              const tmp18 = !callback(closure_1[1]).getActiveSpan();
              if (hasSpansEnabledResult) {
                if (!tmp18) {
                  obj = {};
                  const _HermesInternal = HermesInternal;
                  obj.name = "" + method + " " + stripDataUrlContentResult;
                  obj1 = {};
                  const obj6 = callback(closure_1[1]);
                  obj1.url = callback(closure_1[1]).stripDataUrlContent(url);
                  obj1.type = "xhr";
                  obj1.http.method = method;
                  let stripDataUrlContentResult1;
                  if (fullURL) {
                    stripDataUrlContentResult1 = callback(closure_1[1]).stripDataUrlContent(fullURL);
                    const obj10 = callback(closure_1[1]);
                  }
                  obj1.http.url = stripDataUrlContentResult1;
                  let host;
                  if (null != tmp14) {
                    host = tmp14.host;
                  }
                  obj1.server.address = host;
                  let tmp22Result = tmp22(obj1, callback(closure_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.browser");
                  let search;
                  tmp22Result = tmp22(tmp22Result, callback(closure_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.client");
                  if (null != tmp14) {
                    search = tmp14.search;
                  }
                  if (search) {
                    obj2 = {};
                    let search1;
                    if (null != tmp14) {
                      search1 = tmp14.search;
                    }
                    obj2.http.query = search1;
                    search = obj2;
                  }
                  let hash;
                  if (null != tmp14) {
                    hash = tmp14.hash;
                  }
                  if (hash) {
                    obj3 = {};
                    let hash1;
                    if (null != tmp14) {
                      hash1 = tmp14.hash;
                    }
                    obj3.http.fragment = hash1;
                    hash = obj3;
                  }
                  obj.attributes = Object.assign(tmp22Result, search, hash);
                  let startInactiveSpanResult = obj6.startInactiveSpan(obj);
                  const obj9 = callback(closure_1[1]);
                }
                xhr.__sentry_xhr_span_id__ = startInactiveSpanResult.spanContext().spanId;
                closure_6[xhr.__sentry_xhr_span_id__] = startInactiveSpanResult;
                if (shouldAttachHeadersWithTargets(url)) {
                  let tmp42;
                  if (obj14.hasSpansEnabled()) {
                    if (!tmp18) {
                      tmp42 = startInactiveSpanResult;
                    }
                  }
                  function addTracingHeadersToXhrRequest(xhr, span, propagateTraceparent) {
                    let baggage;
                    let tmp2;
                    let traceparent;
                    let obj = callback(closure_1[1]);
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
                              result = callback(closure_1[2]).baggageHeaderHasSentryValues(baggage);
                              const obj4 = callback(closure_1[2]);
                            }
                            if (!result) {
                              obj3.setRequestHeader("baggage", tmp4);
                            }
                          }
                        }
                      }
                      const tmp3 = tmp2;
                    }
                  }(xhr, tmp42, propagateTraceparent);
                  const obj14 = callback(closure_1[1]);
                }
                const client = callback(closure_1[1]).getClient();
                if (client) {
                  client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, xhr);
                }
                return startInactiveSpanResult;
              }
              const SentryNonRecordingSpan = callback(closure_1[1]).SentryNonRecordingSpan;
              const prototype = SentryNonRecordingSpan.prototype;
              startInactiveSpanResult = new SentryNonRecordingSpan();
              const obj5 = callback(closure_1[1]);
            }
          }
        }
      }(xhr, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, callback3, propagateTraceparent, closure_3);
      if (tmp) {
        if (callback) {
          callback3(tmp);
        }
        if (null != closure_2) {
          const obj = {};
          const __sentry_xhr_v3__ = xhr.xhr.__sentry_xhr_v3__;
          let request_headers;
          if (null != __sentry_xhr_v3__) {
            request_headers = __sentry_xhr_v3__.request_headers;
          }
          obj.headers = callback(closure_1[2]).createHeadersSafely(request_headers);
          closure_2(tmp, obj);
          const obj2 = callback(closure_1[2]);
          const tmp7 = closure_2;
        }
      }
    });
    const obj3 = require(dependencyMap[3]);
  }
};
export { shouldAttachHeaders };
