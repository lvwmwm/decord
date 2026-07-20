// Module ID: 1061
// Function ID: 11327
// Name: _parseCookieHeaders
// Dependencies: []

// Module 1061 (_parseCookieHeaders)
function _parseCookieHeaders(arg0, headers) {
  let tmp;
  const tmp2 = function _extractFetchHeaders(headers) {
    const obj = {};
    const item = headers.forEach((arg0, arg1) => {
      obj[arg1] = arg0;
    });
    return obj;
  }(headers.headers);
  let tmp4 = tmp3;
  if (!tmp2[arg0]) {
    tmp4 = tmp2[arg0.toLowerCase(arg0)];
  }
  if (tmp4) {
    tmp = _parseCookieString(tmp7);
  }
  const items = [tmp2, tmp];
}
function _getResponseSizeFromHeaders(responseHeaders) {
  if (responseHeaders) {
    if (responseHeaders.Content-Length || responseHeaders.content-length) {
      const _parseInt = parseInt;
      return parseInt(tmp, 10);
    }
  }
}
function _parseCookieString(str) {
  const parts = str.split("; ");
  return parts.reduce((arg0, str) => {
    const tmp = callback(str.split("="), 2);
    const first = tmp[0];
    let tmp4 = first;
    if (first) {
      tmp4 = tmp3;
    }
    if (tmp4) {
      arg0[first] = tmp3;
    }
    return arg0;
  }, {});
}
function _shouldCaptureResponse(failedRequestStatusCodes) {
  let tmp = function _isInGivenStatusRanges(failedRequestStatusCodes, arg1) {
    return failedRequestStatusCodes.some((arg0) => {
      if ("number" === typeof arg0) {
        let tmp2 = arg0 === arg1;
      } else {
        tmp2 = arg1 >= arg0[0];
        if (tmp2) {
          tmp2 = arg1 <= arg0[1];
        }
      }
      return tmp2;
    });
  }(failedRequestStatusCodes.failedRequestStatusCodes, arg1) && function _isInGivenRequestTargets(failedRequestTargets, arg1) {
    return failedRequestTargets.some((test) => {
      if ("string" === typeof test) {
        let hasItem = arg1.includes(test);
      } else {
        hasItem = test.test(arg1);
      }
      return hasItem;
    });
  }(failedRequestStatusCodes.failedRequestTargets, arg2);
  if (tmp) {
    const obj = require(dependencyMap[1]);
    tmp = !obj.isSentryRequestUrl(arg2, require(dependencyMap[1]).getClient());
    const obj2 = require(dependencyMap[1]);
  }
  return tmp;
}
function _createEvent(error) {
  let obj = require(dependencyMap[1]);
  const client = obj.getClient();
  let stack;
  if (client) {
    if (error.error) {
      const _Error = Error;
      if (error.error instanceof Error) {
        stack = error.error.stack;
      }
    }
  }
  let stackParserResult;
  if (stack) {
    if (client) {
      const options = client.getOptions();
      stackParserResult = options.stackParser(stack, 0, 1);
    }
  }
  const combined = "HTTP Client Error with status code: " + error.status;
  obj = { message: combined };
  obj = {};
  const obj1 = { type: "Error", value: combined };
  let tmp5;
  if (stackParserResult) {
    const obj2 = { frames: stackParserResult };
    tmp5 = obj2;
  }
  obj1.stacktrace = tmp5;
  const items = [obj1];
  obj.values = items;
  obj.exception = obj;
  obj.request = { url: error.url, method: error.method, headers: error.requestHeaders, cookies: error.requestCookies };
  const obj3 = { response: { status_code: error.status, headers: error.responseHeaders, cookies: error.responseCookies, body_size: _getResponseSizeFromHeaders(error.responseHeaders) } };
  obj.contexts = obj3;
  const obj4 = { status_code: error.status, headers: error.responseHeaders, cookies: error.responseCookies, body_size: _getResponseSizeFromHeaders(error.responseHeaders) };
  const obj10 = require(dependencyMap[1]);
  const result = obj10.addExceptionMechanism(obj, { type: "auto.http.client." + error.type, handled: false });
  return obj;
}
function _shouldSendDefaultPii() {
  const client = require(dependencyMap[1]).getClient();
  let BooleanResult = !tmp;
  if (!!client) {
    const _Boolean = Boolean;
    BooleanResult = Boolean(client.getOptions().sendDefaultPii);
  }
  return BooleanResult;
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[1]);

export const httpClientIntegration = _module.defineIntegration(function _httpClientIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let obj = {};
    const items = [[]];
    obj.failedRequestStatusCodes = items;
    const items1 = [/.*/];
    obj.failedRequestTargets = items1;
    let closure_0 = Object.assign(obj, {});
    obj = {
      name: "HttpClient",
      setup(arg0) {
          function _wrapFetch(arg0, closure_0) {
            if (obj.supportsNativeFetch()) {
              const result = arg0(closure_0[1]).addFetchInstrumentationHandler((args) => {
                let error;
                let response;
                let tmp3;
                let tmp4;
                if (obj.getClient() === args) {
                  ({ response, error } = args);
                  [tmp3, tmp4] = callback(args.args, 2);
                  if (response) {
                    if (!error) {
                      error = args.virtualError;
                    }
                    function _fetchResponseHandler(arg0, bodyUsed, response, arg3, error) {
                      let tmp10;
                      let tmp12;
                      if (callback4(arg0, response.status, response.url)) {
                        if (arg3) {
                          const _Request2 = Request;
                          if (!(bodyUsed instanceof Request)) {
                            const _Request3 = Request;
                            let request = new Request(bodyUsed, arg3);
                          } else {
                            request = bodyUsed;
                          }
                        } else {
                          const _Request = Request;
                          request = bodyUsed;
                        }
                        let first;
                        let tmp11;
                        if (callback6()) {
                          const tmp15 = callback2(callback3("Cookie", request), 2);
                          first = tmp15[0];
                          tmp11 = tmp15[1];
                          [tmp10, tmp12] = callback2(callback3("Set-Cookie", response), 2);
                          const tmp17 = callback2(callback3("Set-Cookie", response), 2);
                        }
                        const obj = {};
                        ({ url: obj.url, method: obj.method } = request);
                        obj.status = response.status;
                        obj.requestHeaders = first;
                        obj.responseHeaders = undefined;
                        obj.requestCookies = tmp11;
                        obj.responseCookies = undefined;
                        obj.error = error;
                        obj.type = "fetch";
                        const tmp20 = callback5(obj);
                        callback(closure_1[1]).captureEvent(tmp20);
                        const obj2 = callback(closure_1[1]);
                      }
                    }(arg1, tmp3, response, tmp4, error);
                  }
                  const tmp2 = callback(args.args, 2);
                }
              }, false);
            }
            const obj = arg0(closure_0[1]);
          }(arg0, closure_0);
          function _wrapXHR(arg0, closure_0) {
            if ("XMLHttpRequest" in arg0(closure_0[1]).GLOBAL_OBJ) {
              const result = arg0(closure_0[2]).addXhrInstrumentationHandler((virtualError) => {
                let error;
                let method;
                let request_headers;
                let xhr;
                if (obj.getClient() === virtualError) {
                  ({ error, xhr } = virtualError);
                  if (xhr[closure_0(undefined, closure_1[2]).SENTRY_XHR_DATA_KEY]) {
                    ({ method, request_headers } = tmp14);
                    virtualError = error;
                    if (!error) {
                      virtualError = virtualError.virtualError;
                    }
                    function _xhrResponseHandler(arg0, status, method, arg3, virtualError) {
                      let obj = status;
                      if (callback3(arg0, status.status, status.responseURL)) {
                        if (!callback5()) {
                          obj = { url: status.responseURL, method, status: status.status, requestHeaders: undefined, responseHeaders: undefined, responseCookies: undefined, error: virtualError, type: "xhr" };
                          const tmp17 = callback4(obj);
                          callback(closure_1[1]).captureEvent(tmp17);
                          const obj3 = callback(closure_1[1]);
                        } else {
                          const responseHeader = obj.getResponseHeader("Set-Cookie");
                          let responseHeader1 = responseHeader;
                          if (!responseHeader) {
                            responseHeader1 = obj.getResponseHeader("set-cookie");
                          }
                          if (responseHeader1) {
                            callback2(tmp6);
                          }
                          function _getXHRResponseHeaders() { ... }(obj);
                          while (true) {
                            let tmp12 = __exception;
                            // continue
                          }
                        }
                      }
                    }(arg1, xhr, method, request_headers, virtualError);
                    const tmp2 = xhr;
                    const tmp3 = method;
                    const tmp4 = request_headers;
                  }
                  const tmp11 = xhr;
                }
              });
            }
          }(arg0, closure_0);
        }
    };
    return obj;
  }
});
