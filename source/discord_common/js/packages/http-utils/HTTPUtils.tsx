// Module ID: 507
// Function ID: 6456
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getAPIBaseURL, rejectWithMigratedError, setAwaitOnline, setRejectWithMigratedError, setRequestPatch

// Module 507 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isRateLimitedStatus(status) {
  return set1.has(status);
}
function parseRetryAfter(retry-after, retry_after) {
  let prop;
  if (null != retry_after) {
    prop = retry_after.retry-after;
  }
  if (null == prop) {
    let prop1;
    if (null != retry_after) {
      prop1 = retry_after.Retry-After;
    }
    prop = prop1;
  }
  if ("string" === typeof prop) {
    const _parseInt = parseInt;
    const parsed = parseInt(prop, 10);
    const _Number = Number;
    if (Number.isFinite(parsed)) {
      if (parsed > 0) {
        return parsed;
      }
    }
  }
  if (null != retry_after) {
    if ("object" === typeof retry_after) {
      retry_after = retry_after.retry_after;
      if ("number" === typeof retry_after) {
        const _Number2 = Number;
        if (Number.isFinite(retry_after)) {
          if (retry_after > 0) {
            return retry_after;
          }
        }
      }
    }
  }
}
function getRateLimitFloorMs(headers, body) {
  const tmp = parseRetryAfter(headers, body);
  let num = 5;
  if (null != tmp) {
    num = tmp;
  }
  return 1000 * num;
}
function sendRequest(arg0, url) {
  url = arg0;
  const importDefault = url;
  const dependencyMap = arg2;
  let closure_3 = arg3;
  let closure_4 = arg4;
  const promise = importDefault(dependencyMap[7])[arg0](url.url);
  let closure_5 = promise;
  if (null != url.onRequestCreated) {
    url.onRequestCreated(promise);
  }
  if (null != url.query) {
    let query = url.query;
    let tmp3 = query;
    if ("object" === typeof query) {
      let obj = {};
      const merged = Object.assign(query);
      let closure_6 = obj;
      const _Object = Object;
      const keys = Object.keys(obj);
      const mapped = keys.map((arg0) => {
        if (null == obj[arg0]) {
          delete r0[r1];
        }
      });
      tmp3 = obj;
    }
    query = promise.query(tmp3);
  }
  if (url.body) {
    promise.send(url.body);
  }
  if (null != url.headers) {
    const result = promise.set(url.headers);
  }
  if (true === url.withCredentials) {
    promise.withCredentials();
  }
  if (null != url.reason) {
    const _encodeURIComponent = encodeURIComponent;
    const result1 = promise.set("X-Audit-Log-Reason", encodeURIComponent(url.reason));
  }
  const attachments = url.attachments;
  if (null != attachments) {
    const item = attachments.forEach((name) => {
      promise.attach(name.name, name.file, name.filename);
    });
  }
  const fields = url.fields;
  if (null != fields) {
    const item1 = fields.forEach((name) => {
      promise.field(name.name, name.value);
    });
  }
  if (null != url.context) {
    const tmp18 = encodeProperties(url.context);
    if (null != tmp18) {
      const result2 = promise.set("X-Context-Properties", tmp18);
    }
  }
  let tmp20 = null != url.retried;
  if (tmp20) {
    tmp20 = 0 !== url.retried;
  }
  if (tmp20) {
    const _HermesInternal = HermesInternal;
    const result3 = promise.set("X-Failed-Requests", "" + url.retried);
  }
  let tmp23 = null != url.timeout;
  if (tmp23) {
    tmp23 = 0 !== url.timeout;
  }
  if (tmp23) {
    promise.timeout(url.timeout);
  }
  if (url.binary) {
    promise.responseType("blob");
  }
  if (null != url.onRequestProgress) {
    promise.on("progress", (arg0) => {
      if (null != arg1.onRequestProgress) {
        arg1.onRequestProgress(arg0);
      }
    });
  }
  function retry(arg0, self) {
    if (null != self.backoff) {
      let backoff = self.backoff;
    } else {
      const tmp4 = self(arg2[8]);
      const prototype = tmp4.prototype;
      backoff = new tmp4();
    }
    self.backoff = backoff;
    let num2 = 0;
    if (null != self.retried) {
      num2 = self.retried;
    }
    self.retried = num2 + 1;
    const backoff2 = self.backoff;
    backoff2.fail(() => callback(url.url).then(() => {
      callback(closure_0, closure_1, closure_2, closure_3, closure_4);
    }));
  }
  let prepareRequestResult;
  if (null != closure_13) {
    if (null != obj2.prepareRequest) {
      prepareRequestResult = obj2.prepareRequest(promise);
    }
  }
  const logger = prepareRequestResult;
  promise.ok((status) => null != status.status);
  promise.then((ok, self) => {
    if (null != self.retries) {
      self.retries = +self.retries - 1;
      if (+self.retries > 0) {
        if (set.has(ok.status)) {
          return retry();
        }
      }
    }
    let obj = { ok: ok.ok, headers: ok.headers, body: ok.body, text: ok.text, status: ok.status, retryAfter: callback2(ok.headers, ok.body) };
    callback3(self, obj);
    const callback = false;
    function interceptRetry(arg0, arg1) {
      let obj = {};
      const merged = Object.assign(headers);
      obj = {};
      const merged1 = Object.assign(headers.headers);
      const merged2 = Object.assign(arg0);
      obj["headers"] = obj;
      obj["interceptResponse"] = arg1;
      let closure_0 = true;
      callback3(closure_0, obj, closure_2, closure_3, closure_4);
    }
    function interceptCancel(err) {
      if (!closure_0) {
        callback(err);
        if (null != callback2) {
          const obj = { err };
          callback2(obj);
        }
      }
    }
    let interceptResponseResult;
    if (null != self) {
      if (null != self.interceptResponse) {
        interceptResponseResult = self.interceptResponse(ok, interceptRetry, interceptCancel);
      }
    }
    if (true !== interceptResponseResult) {
      let interceptResponseResult1;
      if (null != closure_13) {
        if (null != obj5.interceptResponse) {
          interceptResponseResult1 = obj5.interceptResponse(ok, interceptRetry, interceptCancel, prepareRequestResult);
        }
      }
      if (true !== interceptResponseResult1) {
        if (ok.ok) {
          arg2(obj);
        } else {
          if (self.oldFormErrors) {
            let code;
            if (null != obj) {
              const body = obj.body;
              if (null != body) {
                code = body.code;
              }
            }
            if (code === callback(arg2[9]).INVALID_FORM_BODY_ERROR_CODE) {
              const errors = obj.body.errors;
              if (null != errors) {
                obj.body = callback(arg2[10]).convertSkemaError(errors);
                const obj2 = callback(arg2[10]);
              }
            }
          }
          if (self.rejectWithError) {
            obj = { method: callback, url: self.url };
            ({ ok: obj3.ok, status: obj3.status, body: obj3.body, text: obj3.text, headers: obj3.headers, retryAfter: obj3.retryAfter } = obj);
            const prototype = ctor.prototype;
            const tmp29 = new ctor(obj);
            arg3(tmp29);
          } else {
            arg3(obj);
          }
        }
        if (null != arg4) {
          obj = { hasErr: false };
          const merged = Object.assign(obj);
          arg4(obj);
        }
      }
    }
  }, (code) => {
    if (null != arg1.retries) {
      arg1.retries = +arg1.retries - 1;
      if (+arg1.retries > 0) {
        if ("ABORTED" !== code.code) {
          retry();
        }
      }
    }
    callback3(arg1);
    arg3(code);
    if (null != arg4) {
      const obj = { err: code };
      arg4(obj);
    }
  });
  const signal = url.signal;
  if (null != signal) {
    if (signal.aborted) {
      promise.abort();
    }
  }
  const signal2 = url.signal;
  if (null != signal2) {
    obj = { once: true };
    const listener = signal2.addEventListener("abort", () => promise.abort(), obj);
  }
}
function rateLimitExpirationHandler(url) {
  const value = map.get(url);
  if (null != value) {
    const queue = value.queue;
    const arr = queue.shift();
    if (null == arr) {
      logger.verbose("rateLimitExpirationHandler: removing key for", url);
      map.delete(url);
    } else {
      logger.verbose("rateLimitExpirationHandler: moving to next record for ", url);
      arr();
    }
  } else {
    logger.verbose("rateLimitExpirationHandler: rate limit for", url, "expired, but record was already removed");
  }
}
function cleanupRequestEntry(url, status) {
  status = url;
  const value = map.get(url.url);
  if (null != status) {
    if (isRateLimitedStatus(status.status)) {
      let backoff;
      if (null != value) {
        backoff = value.backoff;
      }
      if (null == backoff) {
        const tmp12 = importDefault(dependencyMap[8]);
        const prototype = tmp12.prototype;
        backoff = new tmp12(1000, 60000);
      }
      const failResult = backoff.fail(undefined, getRateLimitFloorMs(status.headers, status.body));
      const _Date2 = Date;
      const sum = Date.now() + failResult;
      if (null != value) {
        if (value.retryAfterTimestamp >= sum) {
          logger.verbose("cleanupRequestEntry: already has rate limit for ", url.url);
        }
      }
      if (null != value) {
        logger.verbose("cleanupRequestEntry: extending rate limit for ", url.url);
        const _clearTimeout = clearTimeout;
        clearTimeout(value.timeoutId);
      }
      const _HermesInternal = HermesInternal;
      logger.verbose("cleanupRequestEntry: rate limit for " + url.url + " retry after " + failResult + "ms");
      const _setTimeout = setTimeout;
      const obj = {};
      let queue;
      const timerId = setTimeout(() => {
        callback(arg0.url);
      }, failResult);
      if (null != value) {
        queue = value.queue;
      }
      if (null == queue) {
        queue = [];
      }
      obj.queue = queue;
      obj.retryAfterTimestamp = sum;
      const body = status.body;
      let message;
      if (null != body) {
        message = body.message;
      }
      obj.latestErrorMessage = String(message);
      obj.status = status.status;
      obj.timeoutId = timerId;
      obj.backoff = backoff;
      const result = map.set(url.url, obj);
    }
  }
  let tmp3 = null != value;
  if (tmp3) {
    const _Date = Date;
    tmp3 = value.retryAfterTimestamp < Date.now();
  }
  if (tmp3) {
    logger.verbose("cleanupRequestEntry: rate limit for ", url.url, "expired");
    rateLimitExpirationHandler(url.url);
  }
}
function makeRateLimitedResponse(status, message, retry_after) {
  let obj = { status, body: obj };
  obj = { message, retry_after };
  return obj;
}
function makeRequest(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  return new Promise((bindResult1, self) => {
    if ("string" === typeof self) {
      let obj = { url: self, rejectWithError: false };
      self = obj;
    }
    const value = closure_12.get(self.url);
    if (null != value) {
      if (self.failImmediatelyWhenRateLimited) {
        const _Date = Date;
        const _Math = Math;
        const tmp26 = callback2(value.status, value.latestErrorMessage, Math.round((value.retryAfterTimestamp - Date.now()) / 1000));
        self(tmp26);
        if (null != arg2) {
          obj = {};
          ({ status: obj2.status, body: obj2.body } = tmp26);
          obj.headers = {};
          arg2(obj);
        }
      }
    }
    if (null != value) {
      closure_8.verbose("makeRequest: queueing request for ", self.url);
      const queue = value.queue;
      queue.push(callback.bind(null, bindResult1, self, bindResult1, self, arg2));
    } else {
      callback(bindResult1, self, bindResult1, self, arg2);
    }
  });
}
function encodeProperties(arg0) {
  return Buffer.from(JSON.stringify(arg0)).toString("base64");
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const logger = new arg1(dependencyMap[6]).Logger("HTTPUtils");
const set = new Set(["isArray", "isArray", "resolve", "ct", "code", "from", "top", "Text"]);
const set1 = new Set([-1331045302, -108471716]);
const tmp6 = (arg0) => {
  class HTTPResponseError {
    constructor(arg0, arg1) {
      self = this;
      ({ method, url, status } = arg0);
      ({ ok, body, text, headers, retryAfter } = arg0);
      substr = [...arguments].slice();
      tmp2 = closure_4(this, HTTPResponseError);
      replaced = url.replace(/\d+/g, "xxx");
      items = ["" + method.toUpperCase() + " " + replaced + " [" + status + "]", ...substr];
      obj = closure_6(HTTPResponseError);
      tmp4 = closure_5;
      if (closure_16()) {
        _Reflect = Reflect;
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp4Result = tmp4(self, constructResult);
      tmp4Result.name = "HTTPResponseError";
      tmp4Result.method = method;
      tmp4Result.url = url;
      tmp4Result.ok = ok;
      tmp4Result.status = status;
      tmp4Result.body = body;
      tmp4Result.text = text;
      tmp4Result.headers = headers;
      tmp4Result.retryAfter = retryAfter;
      return tmp4Result;
    }
  }
  const arg1 = HTTPResponseError;
  callback2(HTTPResponseError, arg0);
  return callback(HTTPResponseError);
}(importDefault(dependencyMap[5])(Error));
const map = new Map();
let noop = makeRequest.bind(null, "get");
let bindResult = makeRequest.bind(null, "post");
let bindResult1 = makeRequest.bind(null, "put");
let bindResult2 = makeRequest.bind(null, "patch");
let bindResult3 = makeRequest.bind(null, "del");
const obj = { get: noop, post: bindResult, put: bindResult1, patch: bindResult2, del: bindResult3 };
if (global.isServerRendering) {
  noop = function noop() {
    const obj = { visible: true, hardwareAccelerated: true, textAlign: true, flex: true, lineHeight: true, headers: {} };
    return Promise.resolve(obj);
  };
  bindResult = noop;
  bindResult1 = noop;
  bindResult2 = noop;
  bindResult3 = noop;
}
let closure_13 = null;
function awaitOnline() {
  return Promise.resolve();
}
function migratedRejectEnabled() {
  return true;
}
const importDefaultResult = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("../discord_common/js/packages/http-utils/HTTPUtils.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = arg1(dependencyMap[9]).INVALID_FORM_BODY_ERROR_CODE;
export const convertSkemaError = arg1(dependencyMap[10]).convertSkemaError;
export const stringifyErrors = arg1(dependencyMap[12]).stringifyErrors;
export const V6OrEarlierAPIError = arg1(dependencyMap[13]).APIError;
export const V8APIError = arg1(dependencyMap[9]).APIError;
export { isRateLimitedStatus };
export const DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS = 5;
export const HTTPResponseError = tmp6;
export { parseRetryAfter };
export { getRateLimitFloorMs };
export { makeRateLimitedResponse };
export const get = noop;
export const post = bindResult;
export const put = bindResult1;
export const patch = bindResult2;
export const del = bindResult3;
export const HTTP = obj;
export const getAPIBaseURL = function getAPIBaseURL(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let str = "";
  const text = `https:${window.GLOBAL_ENV.API_ENDPOINT}`;
  if (flag) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    str = "/v" + window.GLOBAL_ENV.API_VERSION;
  }
  return text + str;
};
export function setRequestPatch(arg0) {
  let closure_13 = arg0;
}
export function setAwaitOnline(arg0) {
  const awaitOnline = arg0;
}
export function setRejectWithMigratedError(arg0) {
  const migratedRejectEnabled = arg0;
}
export const rejectWithMigratedError = function rejectWithMigratedError() {
  return migratedRejectEnabled();
};
export { encodeProperties };
