// Module ID: 507
// Function ID: 6456
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 4, 508, 561, 562, 563, 2, 564, 565]
// Exports: getAPIBaseURL, rejectWithMigratedError, setAwaitOnline, setRejectWithMigratedError, setRequestPatch

// Module 507 (_isNativeReflectConstruct)
import _createForOfIteratorHelper from "_createForOfIteratorHelper";
import log from "log";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

const require = arg1;
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
function parseRetryAfter(retry_after, retry_after) {
  let prop;
  if (null != retry_after) {
    prop = retry_after["retry-after"];
  }
  if (null == prop) {
    let prop1;
    if (null != retry_after) {
      prop1 = retry_after["Retry-After"];
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
  let closure_0 = arg0;
  const importDefault = url;
  const dependencyMap = arg2;
  let _createForOfIteratorHelper = arg3;
  let log = arg4;
  const promise = importDefault(508)[arg0](url.url);
  if (null != url.onRequestCreated) {
    url.onRequestCreated(promise);
  }
  if (null != url.query) {
    let query = url.query;
    let tmp3 = query;
    if ("object" === typeof query) {
      let obj = {};
      let merged = Object.assign(query);
      const _Object = Object;
      const keys = Object.keys(obj);
      const mapped = keys.map((arg0) => {
        if (null == obj[arg0]) {
          delete tmp[tmp2];
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
      if (null != url.onRequestProgress) {
        url.onRequestProgress(arg0);
      }
    });
  }
  function retry() {
    if (null != url.backoff) {
      let backoff = url.backoff;
    } else {
      const tmp4 = url(561);
      const prototype = tmp4.prototype;
      backoff = new tmp4();
    }
    url.backoff = backoff;
    let num2 = 0;
    if (null != url.retried) {
      num2 = url.retried;
    }
    url.retried = num2 + 1;
    const backoff2 = url.backoff;
    backoff2.fail(() => outer2_14(outer1_1.url).then(() => {
      outer3_20(outer2_0, outer2_1, outer2_2, outer2_3, outer2_4);
    }));
  }
  let prepareRequestResult;
  if (null != c13) {
    if (null != obj2.prepareRequest) {
      prepareRequestResult = obj2.prepareRequest(promise);
    }
  }
  const logger = prepareRequestResult;
  promise.ok((status) => null != status.status);
  promise.then((ok) => {
    if (null != url.retries) {
      url.retries = +url.retries - 1;
      if (+url.retries > 0) {
        if (outer1_9.has(ok.status)) {
          return retry();
        }
      }
    }
    let obj = { ok: ok.ok, headers: ok.headers, body: ok.body, text: ok.text, status: ok.status, retryAfter: outer1_18(ok.headers, ok.body) };
    outer1_22(url, obj);
    let c0 = false;
    function interceptRetry(arg0, arg1) {
      let obj = {};
      const merged = Object.assign(outer1_1);
      obj = {};
      const merged1 = Object.assign(outer1_1.headers);
      const merged2 = Object.assign(arg0);
      obj["headers"] = obj;
      obj["interceptResponse"] = arg1;
      let c0 = true;
      outer2_20(c0, obj, outer1_2, outer1_3, outer1_4);
    }
    function interceptCancel(err) {
      if (!c0) {
        outer1_3(err);
        if (null != outer1_4) {
          const obj = { ok: false, hasErr: true, err };
          outer1_4(obj);
        }
      }
    }
    let interceptResponseResult;
    if (null != url) {
      if (null != url.interceptResponse) {
        interceptResponseResult = url.interceptResponse(ok, interceptRetry, interceptCancel);
      }
    }
    if (true !== interceptResponseResult) {
      let interceptResponseResult1;
      if (null != outer1_13) {
        if (null != obj5.interceptResponse) {
          interceptResponseResult1 = obj5.interceptResponse(ok, interceptRetry, interceptCancel, closure_8);
        }
      }
      if (true !== interceptResponseResult1) {
        if (ok.ok) {
          dependencyMap(obj);
        } else {
          if (url.oldFormErrors) {
            let code;
            if (null != obj) {
              const body = obj.body;
              if (null != body) {
                code = body.code;
              }
            }
            if (code === callback(562).INVALID_FORM_BODY_ERROR_CODE) {
              const errors = obj.body.errors;
              if (null != errors) {
                obj.body = callback(563).convertSkemaError(errors);
                const obj2 = callback(563);
              }
            }
          }
          if (url.rejectWithError) {
            obj = { method: c0, url: url.url };
            ({ ok: obj3.ok, status: obj3.status, body: obj3.body, text: obj3.text, headers: obj3.headers, retryAfter: obj3.retryAfter } = obj);
            const prototype = outer1_11.prototype;
            const tmp29 = new outer1_11(obj);
            callback2(tmp29);
          } else {
            callback2(obj);
          }
        }
        if (null != callback3) {
          obj = { hasErr: false };
          let merged = Object.assign(obj);
          callback3(obj);
        }
      }
    }
  }, (code) => {
    if (null != url.retries) {
      url.retries = +url.retries - 1;
      if (+url.retries > 0) {
        if ("ABORTED" !== code.code) {
          retry();
        }
      }
    }
    outer1_22(url);
    callback2(code);
    if (null != callback3) {
      const obj = { ok: false, hasErr: true, err: code };
      callback3(obj);
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
  let closure_0 = url;
  const value = map.get(url.url);
  if (null != status) {
    if (isRateLimitedStatus(status.status)) {
      let backoff;
      if (null != value) {
        backoff = value.backoff;
      }
      if (null == backoff) {
        const tmp12 = importDefault(561);
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
        outer1_21(url.url);
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
  obj = { status, body: obj };
  obj = { message, retry_after };
  return obj;
}
function makeRequest(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return new Promise((bindResult1, bindResult) => {
    if ("string" === typeof obj) {
      obj = {};
      obj.url = obj;
      obj.rejectWithError = false;
    }
    const value = outer1_12.get(obj.url);
    if (null != value) {
      if (obj.failImmediatelyWhenRateLimited) {
        const _Date = Date;
        const _Math = Math;
        const tmp26 = outer1_23(value.status, value.latestErrorMessage, Math.round((value.retryAfterTimestamp - Date.now()) / 1000));
        bindResult(tmp26);
        if (null != closure_2) {
          obj = { ok: true, hasErr: false, status: null, body: null, text: "" };
          ({ status: obj2.status, body: obj2.body } = tmp26);
          obj.headers = {};
          closure_2(obj);
        }
      }
    }
    if (null != value) {
      outer1_8.verbose("makeRequest: queueing request for ", obj.url);
      const queue = value.queue;
      queue.push(outer1_20.bind(null, closure_0, obj, bindResult1, bindResult, closure_2));
    } else {
      outer1_20(closure_0, obj, bindResult1, bindResult, closure_2);
    }
  });
}
function encodeProperties(arg0) {
  return Buffer.from(JSON.stringify(arg0)).toString("base64");
}
let logger = new require("_inherits").Logger("HTTPUtils");
let set = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
const set1 = new Set([429, 503]);
const tmp6 = ((arg0) => {
  class HTTPResponseError {
    constructor(arg0, arg1) {
      self = this;
      ({ method, url, status } = arg0);
      ({ ok, body, text, headers, retryAfter } = arg0);
      substr = [...arguments].slice();
      tmp2 = outer1_4(this, HTTPResponseError);
      replaced = url.replace(/\d+/g, "xxx");
      items = ["" + method.toUpperCase() + " " + replaced + " [" + status + "]", ...substr];
      obj = outer1_6(HTTPResponseError);
      tmp4 = outer1_5;
      if (outer1_16()) {
        _Reflect = Reflect;
        tmp6 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
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
  callback2(HTTPResponseError, arg0);
  return callback(HTTPResponseError);
})(require("_wrapNativeSuper")(Error));
let closure_11 = tmp6;
const map = new Map();
let noop = makeRequest.bind(null, "get");
let bindResult = makeRequest.bind(null, "post");
let bindResult1 = makeRequest.bind(null, "put");
let bindResult2 = makeRequest.bind(null, "patch");
let bindResult3 = makeRequest.bind(null, "del");
let obj = { get: noop, post: bindResult, put: bindResult1, patch: bindResult2, del: bindResult3 };
if (global.isServerRendering) {
  noop = function noop() {
    const obj = { ok: true, status: 200, headers: {}, body: null, text: "" };
    return Promise.resolve(obj);
  };
  bindResult = noop;
  bindResult1 = noop;
  bindResult2 = noop;
  bindResult3 = noop;
}
let c13 = null;
function awaitOnline() {
  return Promise.resolve();
}
function migratedRejectEnabled() {
  return true;
}
let result = set.fileFinishedImporting("../discord_common/js/packages/http-utils/HTTPUtils.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = require("_isNativeReflectConstruct").INVALID_FORM_BODY_ERROR_CODE;
export const convertSkemaError = require("convertSkemaError").convertSkemaError;
export const stringifyErrors = require("stringifyErrors").stringifyErrors;
export const V6OrEarlierAPIError = require("APIError").APIError;
export const V8APIError = require("_isNativeReflectConstruct").APIError;
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
export function setRequestPatch(ApexExperiment) {
  let closure_13 = ApexExperiment;
}
export function setAwaitOnline(arg0) {
  let closure_14 = arg0;
}
export function setRejectWithMigratedError(arg0) {
  let closure_15 = arg0;
}
export const rejectWithMigratedError = function rejectWithMigratedError() {
  return migratedRejectEnabled();
};
export { encodeProperties };
