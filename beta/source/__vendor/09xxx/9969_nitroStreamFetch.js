// Module ID: 9969
// Function ID: 9970
// Name: nitroStreamFetch
// Dependencies: [5, 9970, 9966, 9968, 9967, 9971, 9973, 9961, 9965]
// Exports: nitroStreamFetch

// Module 9969 (nitroStreamFetch)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c3, c6;

let obj = function _nitroStreamFetch() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let tmp2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let num = 2;
        c6 = 2;
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          const request = closure_1;
          closure_0 = closure_1;
          let signal;
          if (closure_1 != null) {
            signal = request.signal;
          }
          let aborted;
          if (signal != null) {
            aborted = signal.aborted;
          }
          const tmp5 = require;
          const tmp6 = dependencyMap;
          if (aborted) {
            const tmp5Result = tmp5(tmp6[1]);
            throw tmp5Result.createAbortError(signal);
          } else {
            const tmp5Result8 = tmp5(tmp6[2]);
            const urlString = tmp5Result8.getUrlString(tmp62);
            let method;
            if (request != null) {
              method = request.method;
            }
            let method1 = method;
            if (method == null) {
              method1 = undefined;
              if (closure_0 != null) {
                method1 = tmp62.method;
              }
            }
            let str = method1;
            let formatted;
            if (method1 != null) {
              formatted = str.toUpperCase();
            }
            let GET = formatted;
            if (formatted == null) {
              let str2 = "GET";
              GET = "GET";
            }
            let tmp11 = GET;
            let headers;
            const headersToPairs = tmp5(tmp6[3]).headersToPairs;
            const tmp5Result9 = tmp5(tmp6[3]);
            if (request != null) {
              headers = request.headers;
            }
            let headers1 = headers;
            if (headers == null) {
              headers1 = undefined;
              if (closure_0 != null) {
                headers1 = tmp62.headers;
              }
            }
            const headersToPairsResult = headersToPairs(headers1);
            let closure_4 = headersToPairsResult;
            if (headersToPairsResult == null) {
              closure_4 = [];
            }
            let body;
            const assertBodyAllowed = tmp5(tmp6[4]).assertBodyAllowed;
            const tmp5Result10 = tmp5(tmp6[4]);
            if (request != null) {
              body = request.body;
            }
            assertBodyAllowed(tmp11, body);
            let body1;
            const normalizeBody = tmp5(tmp6[4]).normalizeBody;
            const tmp5Result11 = tmp5(tmp6[4]);
            if (request != null) {
              body1 = request.body;
            }
            const normalizeBodyResult = normalizeBody(body1);
            let contentType;
            const applyDefaultContentType = tmp5(tmp6[3]).applyDefaultContentType;
            const tmp5Result12 = tmp5(tmp6[3]);
            if (normalizeBodyResult != null) {
              contentType = normalizeBodyResult.contentType;
            }
            const result = applyDefaultContentType(arr, contentType);
            let cache;
            const applyCacheHeaders = tmp5(tmp6[3]).applyCacheHeaders;
            const tmp5Result13 = tmp5(tmp6[3]);
            if (request != null) {
              cache = request.cache;
            }
            applyCacheHeaders(closure_4, cache);
            const tmp5Result14 = tmp5(tmp6[3]);
            const result1 = tmp5Result14.normalizeAndValidateHeaders(arr);
            let NetworkInspector = tmp5(tmp6[5]).NetworkInspector;
            if (NetworkInspector.isEnabled()) {
              const tmp30 = globalThis;
              const _String = String;
              const _Date = Date;
              const str3 = "-";
              const _String2 = String;
              const _Math = Math;
              const text = `${String(Date.now())}-`;
              String(Math.random());
              const text1 = `${String(Date.now())}-${arr2.slice(2, 8)}`;
              let NetworkInspector2 = tmp5(tmp6[5]).NetworkInspector;
              let bodyString;
              const _recordStart = NetworkInspector2._recordStart;
              if (normalizeBodyResult != null) {
                bodyString = normalizeBodyResult.bodyString;
              }
              _recordStart(text1, urlString, tmp11, closure_4, bodyString);
            }
            const NitroCronetSingleton = tmp5(tmp6[6]).NitroCronetSingleton;
            let newUrlRequestBuilderResult = NitroCronetSingleton.newUrlRequestBuilder(urlString);
            let _useDefaultClient;
            if (request != null) {
              _useDefaultClient = request._useDefaultClient;
            }
            if (_useDefaultClient) {
              const defaultClient = newUrlRequestBuilderResult.useDefaultClient();
            }
            newUrlRequestBuilderResult.setHttpMethod(tmp11);
            let credentials;
            if (request != null) {
              credentials = request.credentials;
            }
            const str4 = "omit";
            if ("omit" === credentials) {
              newUrlRequestBuilderResult.disableCookies();
            }
            let priority;
            if (request != null) {
              priority = request.priority;
            }
            const str5 = "high";
            let tmp47 = "high" !== priority;
            if (tmp47) {
              let priority1;
              if (request != null) {
                priority1 = request.priority;
              }
              const str6 = "low";
              tmp47 = "low" !== priority1;
            }
            if (!tmp47) {
              newUrlRequestBuilderResult.setPriority(request.priority);
            }
            const item = arr.forEach((key) => {
              const str = key.key;
              if ("prefetchkey" !== str.toLowerCase()) {
                newUrlRequestBuilderResult.addHeader(key.key, key.value);
              }
            });
            let bodyBytes;
            if (normalizeBodyResult != null) {
              bodyBytes = normalizeBodyResult.bodyBytes;
            }
            if (bodyBytes) {
              newUrlRequestBuilderResult.setUploadBody(normalizeBodyResult.bodyBytes);
            } else {
              let bodyString1;
              if (normalizeBodyResult != null) {
                bodyString1 = normalizeBodyResult.bodyString;
              }
              if (null != bodyString1) {
                newUrlRequestBuilderResult.setUploadBody(normalizeBodyResult.bodyString);
              }
            }
            let self = this;
            let self2 = this;
            const promise = new Promise((arg0, arg1) => {
              let _undefined;
              let redirected;
              const f143475 = (item) => {
                let tmp;
                let tmp2;
                [tmp, tmp2] = item;
                return { key, value };
              };
              closure_0 = arg0;
              closure_1 = arg1;
              function cleanupAbortListener() {
                obj = signal;
                const tmp = signal && c3;
                if (tmp) {
                  const removed = obj.removeEventListener("abort", c3);
                  c3 = undefined;
                }
              }
              let c5 = false;
              obj = {
                start(arg0) {
                  let closure_1_2 = arg0;
                },
                cancel() {
                  c5 = true;
                  cleanupAbortListener();
                  try {
                    buildResult.cancel();
                  } catch (err) {
                  }
                }
              };
              const readableStream = new ReadableStream(obj);
              let c7 = false;
              let closure_8 = 0;
              function release() {
                _undefined.onRedirectReceived(newUrlRequestBuilderResult);
                _undefined.onResponseStarted(newUrlRequestBuilderResult);
                _undefined.onReadCompleted(newUrlRequestBuilderResult);
                _undefined.onSucceeded(newUrlRequestBuilderResult);
                _undefined.onFailed(newUrlRequestBuilderResult);
                _undefined.onCanceled(newUrlRequestBuilderResult);
              }
              let c10 = false;
              function settleAborted() {
                const tmp = c10;
                if (!tmp) {
                  c10 = true;
                  if (typeof release === "function") {
                    newUrlRequestBuilderResult.onRedirectReceived(method1);
                    newUrlRequestBuilderResult.onResponseStarted(method1);
                    newUrlRequestBuilderResult.onReadCompleted(method1);
                    newUrlRequestBuilderResult.onSucceeded(method1);
                    newUrlRequestBuilderResult.onFailed(method1);
                    newUrlRequestBuilderResult.onCanceled(method1);
                    const tmp11 = signal && c3;
                    if (tmp11) {
                      const removed = obj.removeEventListener("abort", c3);
                      c3 = undefined;
                    }
                    if (text1) {
                      const NetworkInspector = closure_3_0(closure_3_1[5]).NetworkInspector;
                      NetworkInspector._recordEnd(text1, 0, "", [], 0, "Request aborted");
                    }
                    const obj2 = closure_3_0(closure_3_1[1]);
                    const abortError = obj2.createAbortError(obj);
                    const tmp23 = c7;
                    if (tmp23) {
                      closure_1_2.error(abortError);
                    } else {
                      c7 = true;
                      closure_1(abortError);
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              let c12 = false;
              function resolveWith(httpStatusCode) {
                let tmp2;
                c7 = true;
                httpStatusCode = httpStatusCode.httpStatusCode;
                const NitroHeaders = closure_3_0(closure_3_1[7]).NitroHeaders;
                const entries = Object.entries(httpStatusCode.allHeaders);
                const nitroHeaders = new NitroHeaders(entries.map(f143475));
                const response = { url: httpStatusCode.url, ok: tmp2, status: httpStatusCode, statusText: httpStatusCode.httpStatusText, headers: nitroHeaders, redirected, body: readableStream };
                tmp2 = httpStatusCode >= 200;
                const NitroResponse = closure_3_0(closure_3_1[8]).NitroResponse;
                if (tmp2) {
                  tmp2 = httpStatusCode < 300;
                }
                const nitroResponse = new NitroResponse(response);
                closure_0(nitroResponse);
              }
              let c14 = false;
              newUrlRequestBuilderResult.onRedirectReceived(function(httpStatusCode, arg1) {
                const tmp = c7;
                if (!tmp) {
                  let redirect;
                  if (closure_0 != null) {
                    redirect = tmp2.redirect;
                  }
                  if ("error" !== redirect) {
                    let redirect1;
                    if (closure_0 != null) {
                      redirect1 = tmp2.redirect;
                    }
                    if ("manual" !== redirect1) {
                      let c12 = true;
                      buildResult.followRedirect();
                    }
                  }
                  c14 = true;
                  release();
                  cleanupAbortListener();
                  if ("manual" === closure_0.redirect) {
                    resolveWith(httpStatusCode);
                    closure_1_2.close();
                    if (text1) {
                      const NetworkInspector2 = closure_3_0(closure_3_1[5]).NetworkInspector;
                      NetworkInspector2._recordEnd(text1, httpStatusCode.httpStatusCode, httpStatusCode.httpStatusText, httpStatusCode.allHeadersAsList, 0);
                    }
                  } else {
                    const _TypeError = TypeError;
                    const _HermesInternal = HermesInternal;
                    const self = this;
                    const self2 = this;
                    const typeError = new TypeError("redirect mode is \"error\": redirected request to \"" + arg1 + "\"");
                    if (text1) {
                      const NetworkInspector = closure_3_0(closure_3_1[5]).NetworkInspector;
                      NetworkInspector._recordEnd(text1, 0, "", [], 0, typeError.message);
                    }
                    c7 = true;
                    closure_1(typeError);
                  }
                  try {
                    buildResult.cancel();
                  } catch (err) {
                  }
                }
              });
              newUrlRequestBuilderResult.onResponseStarted(function(httpStatusCode) {
                let tmp10;
                let tmp = c7;
                if (!tmp) {
                  const tmp2 = null;
                  let aborted;
                  if (signal != null) {
                    aborted = signal.aborted;
                  }
                  tmp = aborted;
                }
                if (!tmp) {
                  if (typeof resolveWith === "function") {
                    c7 = true;
                    httpStatusCode = httpStatusCode.httpStatusCode;
                    const _Object = Object;
                    const NitroHeaders = closure_3_0(closure_3_1[7]).NitroHeaders;
                    const entries = Object.entries(httpStatusCode.allHeaders);
                    const self = this;
                    const self2 = this;
                    const nitroHeaders = new NitroHeaders(entries.map(f143475));
                    const response = { url: httpStatusCode.url, ok: tmp10, status: httpStatusCode, statusText: httpStatusCode.httpStatusText, headers: nitroHeaders, redirected, body: readableStream };
                    tmp10 = httpStatusCode >= 200;
                    const NitroResponse = closure_3_0(closure_3_1[8]).NitroResponse;
                    if (tmp10) {
                      tmp10 = httpStatusCode < 300;
                    }
                    const self3 = this;
                    const self4 = this;
                    const nitroResponse = new NitroResponse(response);
                    closure_0(nitroResponse);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              });
              newUrlRequestBuilderResult.onReadCompleted(function(arg0, arg1, arg2) {
                const tmp = c5;
                if (!tmp) {
                  const tmp2 = c14;
                  if (!tmp2) {
                    let aborted;
                    if (signal != null) {
                      aborted = signal.aborted;
                    }
                    if (!aborted) {
                      const _Uint8Array = Uint8Array;
                      const self = this;
                      const self2 = this;
                      const uint8Array = new Uint8Array(arg1, 0, arg2);
                      closure_8 = closure_8 + arg2;
                      text1.enqueue(uint8Array.slice());
                      buildResult.read();
                    }
                  }
                }
              });
              newUrlRequestBuilderResult.onSucceeded((httpStatusCode) => {
                if (typeof release === "function") {
                  newUrlRequestBuilderResult.onRedirectReceived(method1);
                  newUrlRequestBuilderResult.onResponseStarted(method1);
                  newUrlRequestBuilderResult.onReadCompleted(method1);
                  newUrlRequestBuilderResult.onSucceeded(method1);
                  newUrlRequestBuilderResult.onFailed(method1);
                  newUrlRequestBuilderResult.onCanceled(method1);
                  const tmp9 = signal && c3;
                  if (tmp9) {
                    const removed = obj.removeEventListener("abort", c3);
                    c3 = undefined;
                  }
                  const tmp12 = c5;
                  if (!tmp12) {
                    const tmp13 = c14;
                    if (!tmp13) {
                      let aborted;
                      if (signal != null) {
                        aborted = obj.aborted;
                      }
                      if (!aborted) {
                        closure_1_2.close();
                        if (text1) {
                          let num;
                          if (httpStatusCode != null) {
                            num = httpStatusCode.httpStatusCode;
                          }
                          if (num == null) {
                            num = 0;
                          }
                          let allHeadersAsList;
                          if (httpStatusCode != null) {
                            allHeadersAsList = httpStatusCode.allHeadersAsList;
                          }
                          if (allHeadersAsList == null) {
                            allHeadersAsList = [];
                          }
                          const NetworkInspector = closure_3_0(closure_3_1[5]).NetworkInspector;
                          let str2;
                          const _recordEnd = NetworkInspector._recordEnd;
                          if (httpStatusCode != null) {
                            str2 = httpStatusCode.httpStatusText;
                          }
                          if (str2 == null) {
                            str2 = "";
                          }
                          _recordEnd(text1, num, str2, allHeadersAsList, closure_8);
                        }
                      }
                    }
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              newUrlRequestBuilderResult.onFailed(function(arg0, message) {
                let aborted;
                if (signal != null) {
                  aborted = obj.aborted;
                }
                if (aborted) {
                  settleAborted();
                } else if (typeof release === "function") {
                  newUrlRequestBuilderResult.onRedirectReceived(method1);
                  newUrlRequestBuilderResult.onResponseStarted(method1);
                  newUrlRequestBuilderResult.onReadCompleted(method1);
                  newUrlRequestBuilderResult.onSucceeded(method1);
                  newUrlRequestBuilderResult.onFailed(method1);
                  newUrlRequestBuilderResult.onCanceled(method1);
                  const tmp11 = signal && c3;
                  if (tmp11) {
                    const removed = obj.removeEventListener("abort", c3);
                    c3 = undefined;
                  }
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const error = new Error(message.message);
                  if (text1) {
                    const NetworkInspector = closure_3_0(closure_3_1[5]).NetworkInspector;
                    NetworkInspector._recordEnd(text1, 0, "", [], 0, message.message);
                  }
                  const tmp24 = c7;
                  if (tmp24) {
                    closure_1_2.error(error);
                  } else {
                    c7 = true;
                    closure_1(error);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              newUrlRequestBuilderResult.onCanceled(() => {
                const tmp = c14;
                if (!tmp) {
                  settleAborted();
                }
              });
              const buildResult = newUrlRequestBuilderResult.build();
              if (closure_1) {
                newUrlRequestBuilderResult = function l() {
                  try {
                    buildResult.cancel();
                  } catch (err) {
                  }
                  settleAborted();
                };
                const listener = obj3.addEventListener("abort", newUrlRequestBuilderResult, { once: true });
              }
              buildResult.start();
            });
            c6 = 3;
            const obj3 = { value: promise, done: true };
            return obj3;
          }
        }
      } catch (tmp58) {
        c6 = 3;
        throw tmp58;
      }
    }
  });
  return obj(...arguments);
};
function noop() {

}

export function nitroStreamFetch(arg0, value) {
  return obj(...arguments);
}
