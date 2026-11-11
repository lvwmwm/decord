// Module ID: 9030
// Function ID: 9031
// Name: NitroXMLHttpRequest
// Dependencies: [96, 93, 95, 98, 41, 42, 9013, 9031, 9012]

// Module 9030 (NitroXMLHttpRequest)
import stringToUTF8 from "stringToUTF8" /* 9012 */;
import bodySize from "bodySize" /* 9031 */;
import _get from "_get" /* 96 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const require = globalThis.__r;
let hasOwnProperty;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return backgroundColor;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function reportListenerError(arg0) {
  const _ErrorUtils = ErrorUtils;
  let _reportError;
  if (_ErrorUtils != null) {
    _reportError = _ErrorUtils.reportError;
  }
  if (typeof _reportError === "function") {
    _ErrorUtils.reportError(arg0);
  } else {
    const _console = console;
    console.error(arg0);
  }
}
function domException(arg0, InvalidStateError) {
  if (typeof globalThis.DOMException === "function") {
    const self = this;
    const self2 = this;
    const dOMException = new globalThis.DOMException(arg0, "InvalidStateError");
    return dOMException;
  } else {
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error(arg0);
    error.name = "InvalidStateError";
    return error;
  }
}
class NitroProgressEvent {
  constructor(currentTarget, type) {
    obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    const self = this;
    _classCallCheck(this, NitroProgressEvent);
    this.bubbles = false;
    this.cancelable = false;
    this.composed = false;
    this.defaultPrevented = false;
    this.eventPhase = 2;
    this.isTrusted = false;
    this.returnValue = true;
    this.timeStamp = Date.now();
    this.cancelBubble = false;
    this.NONE = 0;
    this.CAPTURING_PHASE = 1;
    this.AT_TARGET = 2;
    this.BUBBLING_PHASE = 3;
    this.currentTarget = currentTarget;
    let flag = obj.lengthComputable;
    if (flag == null) {
      flag = false;
    }
    self.lengthComputable = flag;
    let num = obj.loaded;
    if (num == null) {
      num = 0;
    }
    self.loaded = num;
    self.srcElement = currentTarget;
    self.target = currentTarget;
    let num2 = obj.total;
    if (num2 == null) {
      num2 = 0;
    }
    self.total = num2;
    self.type = type;
  }
}
const entry = {
  key: "composedPath",
  value: function composedPath() {
    const items = [this.target];
    return items;
  }
};
let items = [
  entry,
  {
    key: "initEvent",
    value: function initEvent() {

    }
  },
  {
    key: "preventDefault",
    value: function preventDefault() {

    }
  },
  {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {

    }
  },
  {
    key: "stopPropagation",
    value: function stopPropagation() {

    }
  }
];
let closure_7 = _createClass(NitroProgressEvent, items);
class NitroEventTarget {
  constructor() {
    _classCallCheck(this, NitroEventTarget);
    this._listeners = new Map();
    new Map();
  }
}
const entry1 = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1, arg2) {
    if (null != arg1) {
      const _listeners = this._listeners;
      const self = this;
      let value = _listeners.get(arg0);
      if (null == value) {
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        set = new Set();
        const _listeners2 = self._listeners;
        const result = _listeners2.set(arg0, set);
        value = set;
      }
      value.add(arg1);
    }
  }
};
let items1 = [
  entry1,
  {
    key: "removeEventListener",
    value: function removeEventListener(arg0, arg1, arg2) {
      if (null != arg1) {
        const _listeners = this._listeners;
        const self = this;
        const value = _listeners.get(arg0);
        if (null != value) {
          value.delete(arg1);
          if (0 === value.size) {
            const _listeners2 = self._listeners;
            _listeners2.delete(arg0);
          }
        }
      }
    }
  },
  {
    key: "dispatchEvent",
    value: function dispatchEvent(type) {
      const self = this;
      obj = this["on" + type.type];
      if (typeof obj === "function") {
        try {
          obj.call(self, type);
        } catch (tmp) {
          reportListenerError(tmp);
        }
      }
      const _listeners = self._listeners;
      const value = _listeners.get(type.type);
      if (null == value) {
        return true;
      } else {
        const _Array = Array;
        const arr = Array.from(value);
        const iter = arr[Symbol.iterator]();
        const nextResult = iter.next();
        if (iter === undefined) {
          return !type.defaultPrevented;
        } else if (value.has(nextResult)) {
          try {
            if (typeof nextResult === "function") {
              nextResult.call(self, type);
            } else {
              nextResult.handleEvent(type);
            }
          } catch (tmp9) {
            reportListenerError(tmp9);
          }
        }
      }
    }
  },
  {
    key: "_dispatch",
    value: function _dispatch(arg0) {
      obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      const tmp = new closure_7(this, arg0, obj);
      this.dispatchEvent(tmp);
    }
  }
];
const importDefaultResult1Result = _createClass(NitroEventTarget, items1);
class NitroXMLHttpRequestEventTarget {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, NitroXMLHttpRequestEventTarget);
    const items1 = [...items];
    obj = _getPrototypeOf(NitroXMLHttpRequestEventTarget);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.onabort = null;
    tmp3Result.onerror = null;
    tmp3Result.onload = null;
    tmp3Result.onloadend = null;
    tmp3Result.onloadstart = null;
    tmp3Result.onprogress = null;
    tmp3Result.ontimeout = null;
    return tmp3Result;
  }
}
_inherits(NitroXMLHttpRequestEventTarget, importDefaultResult1Result);
const entry2 = {
  key: "dispatchProgress",
  value: function dispatchProgress(loadend, arg1) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    this._dispatch(loadend, obj);
  }
};
const items2 = [
  entry2,
  {
    key: "_isObserved",
    value: function _isObserved() {
      const self = this;
      return null != this.onabort || null != self.onerror || null != self.onload || null != self.onloadend || null != self.onloadstart || null != self.onprogress || null != self.ontimeout || self._listeners.size > 0;
    }
  }
];
let closure_9 = _createClass(NitroXMLHttpRequestEventTarget, items2);
let obj = { arraybuffer: typeof ArrayBuffer === "function", blob: typeof Blob === "function", document: false, json: true, text: true, "": true };
const re11 = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
let set = new Set(["CONNECT", "TRACE", "TRACK"]);
const set1 = new Set(["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]);
const re14 = /https?:\/\/[a-z0-9.-]+(?::[0-5]?\d{0,4})?(?=[/?#]|$)/iy;
let closure_15 = "";
const re16 = /[\0\n\r]/;
let map = new Map();
let closure_18 = {};
let closure_19 = 1;
class NitroXMLHttpRequest {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NitroXMLHttpRequest);
    obj = _getPrototypeOf(NitroXMLHttpRequest);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.UNSENT = 0;
    tmp3Result.OPENED = 1;
    tmp3Result.HEADERS_RECEIVED = 2;
    tmp3Result.LOADING = 3;
    tmp3Result.DONE = 4;
    tmp3Result.onabort = null;
    tmp3Result.onerror = null;
    tmp3Result.onload = null;
    tmp3Result.onloadend = null;
    tmp3Result.onloadstart = null;
    tmp3Result.onprogress = null;
    tmp3Result.onreadystatechange = null;
    tmp3Result.ontimeout = null;
    tmp3Result.upload = new closure_9();
    tmp3Result.readyState = 0;
    tmp3Result.status = 0;
    tmp3Result.statusText = "";
    tmp3Result.responseURL = "";
    tmp3Result.withCredentials = true;
    tmp3Result._requestId = null;
    tmp3Result._aborted = false;
    tmp3Result._hasError = false;
    tmp3Result._headers = {};
    tmp3Result._lowerCaseResponseHeaders = {};
    tmp3Result._method = null;
    tmp3Result._perfKey = null;
    tmp3Result._responseType = "";
    tmp3Result._response = "";
    tmp3Result._sent = false;
    tmp3Result._url = null;
    tmp3Result._timedOut = false;
    tmp3Result._trackingName = null;
    tmp3Result._incrementalEvents = false;
    tmp3Result._performanceLogger = null;
    tmp3Result._requestHandle = null;
    tmp3Result._chunks = [];
    tmp3Result._loaded = 0;
    tmp3Result._pendingText = null;
    tmp3Result._progressLoaded = -1;
    tmp3Result._sendTime = 0;
    tmp3Result._timeout = 0;
    tmp3Result._timeoutTimer = null;
    tmp3Result._total = 0;
    tmp3Result._uploadTotal = -1;
    new closure_9();
    tmp3Result._reset();
    return tmp3Result;
  }
}
_inherits(NitroXMLHttpRequest, importDefaultResult1Result);
const entry3 = {
  key: "_reset",
  value: function _reset() {

  }
};
const items3 = [
  entry3,
  {
    key: "responseType",
    get() {
      return this._responseType;
    },
    set(_responseType) {
      let dOMException;
      const self = this;
      if (!this._sent) {
        if (3 !== self.readyState) {
          if (4 !== self.readyState) {
            const _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            if (hasOwnProperty.call(obj, _responseType)) {
              if (!obj[_responseType]) {
                if ("document" !== _responseType) {
                  const _Error = Error;
                  const _HermesInternal2 = HermesInternal;
                  const self2 = this;
                  const self3 = this;
                  const error = new Error("The provided value '" + _responseType + "' is unsupported in this environment.");
                  throw error;
                }
              }
              self._responseType = _responseType;
            } else {
              const _console = console;
              const _HermesInternal = HermesInternal;
              console.warn("The provided value '" + _responseType + "' is not a valid 'responseType'.");
            }
          }
        }
      }
      if (typeof globalThis.DOMException === "function") {
        const self4 = this;
        const self5 = this;
        dOMException = new globalThis.DOMException("Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set after the request has been sent.", "InvalidStateError");
      } else {
        const _Error2 = Error;
        const self6 = this;
        const self7 = this;
        const error1 = new Error("Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set after the request has been sent.");
        dOMException = error1;
        error1.name = "InvalidStateError";
      }
      throw dOMException;
    }
  },
  {
    key: "timeout",
    get() {
      return this._timeout;
    },
    set(arg0) {
      const self = this;
      this._timeout = Number(arg0) >>> 0;
      if (null != this._requestId) {
        self._startTimeout(self._requestId);
      }
    }
  },
  {
    key: "responseText",
    get() {
      const self = this;
      let str = "";
      if ("" !== this._responseType) {
        if ("text" !== self._responseType) {
          let dOMException;
          const _HermesInternal = HermesInternal;
          const combined = "The 'responseText' property is only available if 'responseType' is set to '' or 'text', but it is '" + self._responseType + "'.";
          if (typeof globalThis.DOMException === "function") {
            const DOMException2 = globalThis.DOMException;
            const self2 = this;
            const self3 = this;
            dOMException = new globalThis.DOMException(combined, "InvalidStateError");
          } else {
            const _Error = Error;
            const self4 = this;
            const self5 = this;
            const error = new Error(combined);
            dOMException = error;
            error.name = "InvalidStateError";
          }
          throw dOMException;
        }
      }
      if (self.readyState >= 3) {
        str = self._response;
      }
      return str;
    }
  },
  {
    key: "responseXML",
    get() {
      const _responseType = this._responseType;
      if ("" !== _responseType) {
        if ("document" !== _responseType) {
          let dOMException;
          const _HermesInternal = HermesInternal;
          const combined = "The 'responseXML' property is only available if 'responseType' is set to '' or 'document', but it is '" + _responseType + "'.";
          if (typeof globalThis.DOMException === "function") {
            const DOMException2 = globalThis.DOMException;
            const self = this;
            const self2 = this;
            dOMException = new globalThis.DOMException(combined, "InvalidStateError");
          } else {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error(combined);
            dOMException = error;
            error.name = "InvalidStateError";
          }
          throw dOMException;
        }
      }
      return null;
    }
  },
  {
    key: "response",
    get() {
      const self = this;
      const responseType = this.responseType;
      if ("" !== responseType) {
        if ("text" !== responseType) {
          if (4 === self.readyState) {
            if (!self._hasError) {
              if (undefined !== self._cachedResponse) {
                return self._cachedResponse;
              } else {
                if ("document" === responseType) {
                  self._cachedResponse = null;
                } else if ("arraybuffer" === responseType) {
                  const _mergeChunksResult = self._mergeChunks();
                  const buffer = _mergeChunksResult.buffer;
                  self._cachedResponse = buffer.slice(_mergeChunksResult.byteOffset, _mergeChunksResult.byteOffset + _mergeChunksResult.byteLength);
                } else if ("blob" === responseType) {
                  const _mergeChunksResult1 = self._mergeChunks();
                  const buffer1 = _mergeChunksResult1.buffer;
                  const substr = buffer1.slice(_mergeChunksResult1.byteOffset, _mergeChunksResult1.byteOffset + _mergeChunksResult1.byteLength);
                  let str3 = self.getResponseHeader("content-type");
                  if (str3 == null) {
                    str3 = "";
                  }
                  obj = require("base64FromBytes");
                  self._cachedResponse = obj.bytesToBlob(substr, str3);
                } else if ("json" === responseType) {
                  try {
                    const _JSON = JSON;
                    self._cachedResponse = JSON.parse(self._response);
                  } catch (err) {
                    self._cachedResponse = null;
                  }
                } else {
                  self._cachedResponse = null;
                }
                return self._cachedResponse;
              }
            }
          }
          return null;
        }
      }
      let str4 = "";
      if (self.readyState >= 3) {
        str4 = "";
        if (!self._hasError) {
          str4 = self._response;
        }
      }
      return str4;
    }
  },
  {
    key: "__didCreateRequest",
    value: function __didCreateRequest(_requestId) {
      const self = this;
      this._requestId = _requestId;
      const _interceptor = NitroXMLHttpRequest._interceptor;
      if (null != _interceptor) {
        let str = self._url;
        const requestSent = _interceptor.requestSent;
        if (str == null) {
          str = "";
        }
        let str2 = self._method;
        if (str2 == null) {
          str2 = "GET";
        }
        const sent = requestSent(_requestId, str, str2, self._headers);
      }
    }
  },
  {
    key: "__didReceiveResponse",
    value: function __didReceiveResponse(arg0, status, arg2, arg3) {
      const self = this;
      if (arg0 === this._requestId) {
        const _performanceLogger = self._performanceLogger;
        const tmp = null != self._perfKey && null != _performanceLogger;
        if (tmp) {
          _performanceLogger.stopTimespan(self._perfKey);
        }
        if (-1 === self._uploadTotal) {
          let num2;
          obj = arg2;
          self.status = status;
          self.setResponseHeaders(arg2);
          const _lowerCaseResponseHeaders = self._lowerCaseResponseHeaders;
          if (!_lowerCaseResponseHeaders["content-encoding"]) {
            const prop = _lowerCaseResponseHeaders["content-length"];
            num2 = 0;
            if (null != prop) {
              const _Number = Number;
              const NumberResult = Number(prop);
              let num4 = 0;
              if (NumberResult > 0) {
                num4 = 0;
                if (NumberResult < Infinity) {
                  const _String = String;
                  num4 = 0;
                  if (String(NumberResult) === prop) {
                    num4 = NumberResult;
                  }
                }
              }
              num2 = num4;
            }
          } else {
            num2 = 0;
            _lowerCaseResponseHeaders["content-encoding"].trim();
          }
          self._total = num2;
          self.setReadyState(self.HEADERS_RECEIVED);
          if (arg0 === self._requestId) {
            let str4 = arg3;
            let str5 = arg3;
            if (arg3 == null) {
              str5 = "";
            }
            self.responseURL = str5;
            const _interceptor = NitroXMLHttpRequest._interceptor;
            if (null != _interceptor) {
              const responseReceived = _interceptor.responseReceived;
              if (str4 == null) {
                str4 = self._url;
              }
              if (str4 == null) {
                str4 = "";
              }
              if (obj == null) {
                obj = {};
              }
              responseReceived(arg0, str4, status, obj);
            }
          }
        } else {
          self._completeUpload(arg0);
        }
      }
    }
  },
  {
    key: "__didReceiveData",
    value: function __didReceiveData(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        self._response = _response;
        self._cachedResponse = undefined;
        self.setReadyState(self.LOADING);
        const _interceptor = NitroXMLHttpRequest._interceptor;
        if (_interceptor != null) {
          _interceptor.dataReceived(arg0, _response);
        }
      }
    }
  },
  {
    key: "__didReceiveIncrementalData",
    value: function __didReceiveIncrementalData(arg0, arg1, arg2, arg3) {
      const self = this;
      if (arg0 === this._requestId) {
        self._response = self._response + arg1;
        self._cachedResponse = undefined;
        const _interceptor = NitroXMLHttpRequest._interceptor;
        if (_interceptor != null) {
          _interceptor.dataReceived(arg0, arg1);
        }
        self.setReadyState(self.LOADING);
        const result = self.__didReceiveDataProgress(arg0, arg2, arg3);
      }
    }
  },
  {
    key: "__didReceiveDataProgress",
    value: function __didReceiveDataProgress(arg0, _progressLoaded, total) {
      const self = this;
      const tmp = arg0 === this._requestId && _progressLoaded !== self._progressLoaded;
      if (tmp) {
        self._progressLoaded = _progressLoaded;
        obj = { lengthComputable: total > 0, loaded: _progressLoaded, total };
        self._dispatch("progress", obj);
      }
    }
  },
  {
    key: "__didCompleteResponse",
    value: function __didCompleteResponse(arg0, _errorMessage, _timedOut) {
      const self = this;
      if (arg0 === this._requestId) {
        const tmp9 = _errorMessage;
        if (tmp9) {
          self._reset();
          self._errorMessage = _errorMessage;
          self._hasError = true;
          self._timedOut = _timedOut;
        }
        self._requestHandle = null;
        self._requestId = null;
        self._clearTimeout();
        self.setReadyState(self.DONE);
        const _interceptor = NitroXMLHttpRequest._interceptor;
        if (null != _interceptor) {
          if (_errorMessage) {
            _interceptor.loadingFailed(arg0, _errorMessage);
          } else {
            _interceptor.loadingFinished(arg0, self._response.length);
          }
        }
      }
    }
  },
  {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      const self = this;
      if (this.responseHeaders) {
        const _Map = Map;
        const self2 = this;
        const self3 = this;
        map = new Map();
        const _Object = Object;
        const keys = Object.keys(self.responseHeaders);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let str3 = nextResult;
          let tmp9 = self.responseHeaders[nextResult];
          let tmp10 = tmp9;
          if (null != tmp9) {
            let formatted = str3.toLowerCase();
            let tmp22 = formatted;
            let value = map.get(formatted);
            let tmp24 = value;
            if (tmp24) {
              let _HermesInternal = HermesInternal;
              tmp24.headerValue = tmp24.headerValue + ", " + tmp10;
              let result = map.set(tmp22, tmp24);
            } else {
              obj = { lowerHeaderName: tmp22, upperHeaderName: str3.toUpperCase(), headerValue: tmp10 };
              set = map.set;
              let result1 = set(tmp22, obj);
            }
          }
          continue;
        }
        const _Array = Array;
        const arr = Array.from(map.values());
        const sorted = arr.sort((upperHeaderName, upperHeaderName2) => {
          let num = -1;
          if (upperHeaderName.upperHeaderName >= upperHeaderName2.upperHeaderName) {
            let num2 = 0;
            if (upperHeaderName.upperHeaderName > upperHeaderName2.upperHeaderName) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        const mapped = arr.map((lowerHeaderName) => "" + lowerHeaderName.lowerHeaderName + ": " + lowerHeaderName.headerValue);
        const _HermesInternal2 = HermesInternal;
        return "" + mapped.join("\r\n") + "\r\n";
      } else {
        return "";
      }
    }
  },
  {
    key: "getResponseHeader",
    value: function getResponseHeader(arg0) {
      let tmp = this._lowerCaseResponseHeaders[arg0.toLowerCase(arg0)];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    }
  },
  {
    key: "setRequestHeader",
    value: function setRequestHeader(str, str2) {
      let dOMException2;
      const self = this;
      if (this.readyState === this.OPENED) {
        if (!self._sent) {
          let tmp6;
          if (typeof str !== "string") {
            const _String = String;
            str = String(str);
          }
          const value = map.get(str);
          let tmp4 = value;
          if (undefined !== value) {
            tmp6 = tmp4;
          } else {
            tmp6 = null;
            if (re11.test(str)) {
              const formatted = str.toLowerCase();
              if (map.size >= 256) {
                map.clear();
              }
              const result = obj.set(str, formatted);
              tmp4 = formatted;
            }
          }
          if (null == tmp6) {
            let dOMException;
            const _HermesInternal3 = HermesInternal;
            const combined = "'" + str + "' is not a valid HTTP header field name.";
            const DOMException3 = globalThis.DOMException;
            if (typeof globalThis.DOMException === "function") {
              const DOMException4 = globalThis.DOMException;
              const self4 = this;
              const self5 = this;
              dOMException = new globalThis.DOMException(combined, "SyntaxError");
            } else {
              const _Error2 = Error;
              const self10 = this;
              const self11 = this;
              const error = new Error(combined);
              dOMException = error;
              error.name = "SyntaxError";
            }
            throw dOMException;
          } else {
            let StringResult = str2;
            if (typeof str2 !== "string") {
              const _String2 = String;
              StringResult = String(str2);
            }
            let replaced = StringResult;
            if (0 !== StringResult.length) {
              if (StringResult.charCodeAt(0) <= 32) {
                replaced = StringResult.replace(/^[\t\n\r ]+|[\t\n\r ]+$/g, "");
              } else {
                replaced = StringResult;
              }
            }
            const _JSON = JSON;
            const tmp12 = JSON.stringify(replaced).length === replaced.length + 2 || !re16.test(replaced);
            if (tmp12) {
              let combined1 = replaced;
              const _headers = self._headers;
              if (undefined !== self._headers[tmp6]) {
                const _HermesInternal2 = HermesInternal;
                combined1 = "" + tmp18 + ", " + replaced;
              }
              _headers[tmp6] = combined1;
            } else {
              let dOMException1;
              const _HermesInternal = HermesInternal;
              const combined2 = "'" + replaced + "' is not a valid HTTP header field value.";
              if (typeof globalThis.DOMException === "function") {
                const DOMException2 = globalThis.DOMException;
                const self2 = this;
                const self3 = this;
                dOMException1 = new globalThis.DOMException(combined2, "SyntaxError");
              } else {
                const _Error = Error;
                const self8 = this;
                const self9 = this;
                const error1 = new Error(combined2);
                dOMException1 = error1;
                error1.name = "SyntaxError";
              }
              throw dOMException1;
            }
          }
        }
      }
      if (typeof globalThis.DOMException === "function") {
        const DOMException5 = globalThis.DOMException;
        const self6 = this;
        const self7 = this;
        dOMException2 = new globalThis.DOMException("Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.", "InvalidStateError");
      } else {
        const _Error3 = Error;
        const self12 = this;
        const self13 = this;
        const error2 = new Error("Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.");
        dOMException2 = error2;
        error2.name = "InvalidStateError";
      }
      throw dOMException2;
    }
  },
  {
    key: "setTrackingName",
    value: function setTrackingName(_trackingName) {
      this._trackingName = _trackingName;
      return this;
    }
  },
  {
    key: "setPerformanceLogger",
    value: function setPerformanceLogger(_performanceLogger) {
      this._performanceLogger = _performanceLogger;
      return this;
    }
  },
  {
    key: "open",
    value: function open(str, str2, arg2, arg3, arg4) {
      if (undefined !== arg2) {
        if (!arg2) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Synchronous http requests are not supported");
          throw error;
        }
      }
      str2 = str;
      if (typeof str !== "string") {
        const _String = String;
        str2 = String(str);
      }
      let tmp4 = str2;
      obj = set1;
      if (!set1.has(str2)) {
        if (re11.test(str2)) {
          const formatted = str2.toUpperCase();
          if (set.has(formatted)) {
            let dOMException;
            const _HermesInternal2 = HermesInternal;
            const combined = "'" + str2 + "' HTTP method is unsupported.";
            const DOMException3 = globalThis.DOMException;
            if (typeof globalThis.DOMException === "function") {
              const DOMException4 = globalThis.DOMException;
              const self5 = this;
              const self6 = this;
              dOMException = new globalThis.DOMException(combined, "SecurityError");
            } else {
              const _Error3 = Error;
              const self14 = this;
              const self15 = this;
              const error1 = new Error(combined);
              dOMException = error1;
              error1.name = "SecurityError";
            }
            throw dOMException;
          } else {
            let tmp12 = str2;
            if (obj.has(formatted)) {
              tmp12 = formatted;
            }
            tmp4 = tmp12;
          }
        } else {
          let dOMException1;
          const _HermesInternal = HermesInternal;
          const combined1 = "'" + str2 + "' is not a valid HTTP method.";
          if (typeof globalThis.DOMException === "function") {
            const DOMException2 = globalThis.DOMException;
            const self3 = this;
            const self4 = this;
            dOMException1 = new globalThis.DOMException(combined1, "SyntaxError");
          } else {
            const _Error2 = Error;
            const self12 = this;
            const self13 = this;
            const error2 = new Error(combined1);
            dOMException1 = error2;
            error2.name = "SyntaxError";
          }
          throw dOMException1;
        }
      }
      let StringResult = str2;
      if (typeof str2 !== "string") {
        const _String2 = String;
        StringResult = String(str2);
      }
      if (StringResult) {
        let flag;
        if ("" !== closure_15) {
          if (StringResult.startsWith(closure_15)) {
            flag = true;
            if (StringResult.length !== closure_15.length) {
              const charCodeAtResult = StringResult.charCodeAt(closure_15.length);
              flag = true;
              if (47 !== charCodeAtResult) {
                flag = true;
                if (63 !== charCodeAtResult) {
                  flag = true;
                }
              }
            }
          }
          if (flag) {
            const self11 = this;
            if (null != this._method) {
              self11._terminate();
              self11._sent = false;
              self11._headers = {};
              self11._reset();
            }
            self11._method = tmp4;
            self11._url = StringResult;
            self11._aborted = false;
            if (self11.readyState !== self11.OPENED) {
              self11.setReadyState(self11.OPENED);
            }
          } else {
            let dOMException2;
            const _HermesInternal3 = HermesInternal;
            const combined2 = "Invalid URL: '" + StringResult + "'";
            const DOMException7 = globalThis.DOMException;
            if (typeof globalThis.DOMException === "function") {
              const DOMException8 = globalThis.DOMException;
              const self9 = this;
              const self10 = this;
              dOMException2 = new globalThis.DOMException(combined2, "SyntaxError");
            } else {
              const _Error5 = Error;
              const self18 = this;
              const self19 = this;
              const error3 = new Error(combined2);
              dOMException2 = error3;
              error3.name = "SyntaxError";
            }
            throw dOMException2;
          }
        }
        re14.lastIndex = 0;
        const tmp19 = re14;
        if (re14.test(StringResult)) {
          closure_15 = StringResult.slice(0, tmp19.lastIndex);
          flag = true;
        } else {
          let num2 = 0;
          if (0 < StringResult.length) {
            let num5 = 0;
            num2 = 0;
            if (StringResult.charCodeAt(0) <= 32) {
              const sum = num5 + 1;
              num2 = sum;
              while (sum < StringResult.length) {
                num5 = sum;
                num2 = sum;
                if (StringResult.charCodeAt(sum) > 32) {
                  break;
                }
              }
            }
          }
          let tmp21 = length;
          if (StringResult.length > num2) {
            let tmp22 = length;
            tmp21 = length;
            if (StringResult.charCodeAt(StringResult.length - 1) <= 32) {
              const diff = tmp22 - 1;
              tmp21 = diff;
              while (diff > num2) {
                tmp22 = diff;
                tmp21 = diff;
                if (StringResult.charCodeAt(diff - 1) > 32) {
                  break;
                }
              }
            }
          }
          const obj2 = /^https?:[/\\]*([^/\\?#]*)/i;
          const str12 = StringResult.slice(num2, tmp21);
          const match = obj2.exec(str12.replace(/[\t\n\r]/g, ""));
          flag = true;
          if (null != match) {
            let str15;
            let str13 = match[1];
            if (str13 == null) {
              str13 = "";
            }
            const substr = str13.slice(str13.lastIndexOf("@") + 1);
            const obj3 = /^\[[0-9A-Fa-f:.]+\](.*)$/;
            const match1 = obj3.exec(substr);
            if (null != match1) {
              let str16 = match1[1];
              if (str16 == null) {
                str16 = "";
              }
              if ("" === str16) {
                str15 = str16.slice(1);
                let tmp29 = "" === str15;
                if (!tmp29) {
                  const obj4 = /^\d+$/;
                  let isMatch = obj4.test(str15);
                  if (isMatch) {
                    const _Number = Number;
                    isMatch = Number(str15) <= 65535;
                  }
                  tmp29 = isMatch;
                }
                flag = tmp29;
              } else {
                flag = false;
              }
            } else {
              const index = substr.indexOf(":");
              let length2 = index;
              if (index < 0) {
                length2 = substr.length;
              }
              flag = false;
              if (0 !== length2) {
                let num21 = 0;
                if (0 >= length2) {
                  str15 = "";
                  if (index >= 0) {
                    str15 = substr.slice(index + 1);
                  }
                } else {
                  const charCodeAtResult1 = substr.charCodeAt(num21);
                  flag = false;
                  while (charCodeAtResult1 > 32) {
                    flag = false;
                    if (60 === charCodeAtResult1) {
                      break;
                    } else {
                      flag = false;
                      if (62 === charCodeAtResult1) {
                        break;
                      } else {
                        flag = false;
                        if (91 === charCodeAtResult1) {
                          break;
                        } else {
                          flag = false;
                          if (93 === charCodeAtResult1) {
                            break;
                          } else {
                            flag = false;
                            if (94 === charCodeAtResult1) {
                              break;
                            } else {
                              flag = false;
                              if (124 === charCodeAtResult1) {
                                break;
                              } else {
                                flag = false;
                                if (127 === charCodeAtResult1) {
                                  break;
                                } else {
                                  num21 = num21 + 1;
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        let dOMException3;
        const DOMException5 = globalThis.DOMException;
        if (typeof globalThis.DOMException === "function") {
          const DOMException6 = globalThis.DOMException;
          const self7 = this;
          const self8 = this;
          dOMException3 = new globalThis.DOMException("Cannot load an empty url", "SyntaxError");
        } else {
          const _Error4 = Error;
          const self16 = this;
          const self17 = this;
          const error4 = new Error("Cannot load an empty url");
          dOMException3 = error4;
          error4.name = "SyntaxError";
        }
        throw dOMException3;
      }
    }
  },
  {
    key: "overrideMimeType",
    value: function overrideMimeType(arg0) {
      let dOMException;
      const self = this;
      if (typeof globalThis.DOMException === "function") {
        const self2 = this;
        const self3 = this;
        dOMException = new globalThis.DOMException("overrideMimeType() cannot be called while loading", "InvalidStateError");
      } else {
        const _Error = Error;
        const self4 = this;
        const self5 = this;
        const error = new Error("overrideMimeType() cannot be called while loading");
        dOMException = error;
        error.name = "InvalidStateError";
      }
      throw dOMException;
    }
  },
  {
    key: "send",
    value: function send(size) {
      let _method;
      let _url;
      const self = this;
      let tmp = size;
      if (size === undefined) {
        tmp = null;
      }
      let closure_1;
      let hasItem;
      let closure_3;
      let closure_0;
      if (self.readyState !== self.OPENED) {
        throw domException("Request has not been opened", "InvalidStateError");
      } else if (self._sent) {
        throw domException("Request has already been sent", "InvalidStateError");
      } else {
        self._sent = true;
        ({ _method, _url } = self);
        if (null == _method) {
          const _Error2 = Error;
          const self4 = this;
          const self5 = this;
          const error = new Error("XMLHttpRequest method needs to be defined");
          throw error;
        } else if (null == _url) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error1 = new Error("XMLHttpRequest URL needs to be defined");
          throw error1;
        } else {
          let tmp3 = "GET" !== _method;
          if (tmp3) {
            tmp3 = "HEAD" !== _method;
          }
          if (!tmp3) {
            tmp = null;
          }
          let _trackingName = self._trackingName;
          if (_trackingName == null) {
            _trackingName = _url;
          }
          const _performanceLogger = self._performanceLogger;
          if (null != _performanceLogger) {
            let tmp4 = globalThis;
            const _HermesInternal = HermesInternal;
            self._perfKey = "network_XMLHttpRequest_" + _trackingName;
            _performanceLogger.startTimespan(self._perfKey);
          }
          closure_1 = tmp6;
          const _Date = Date;
          self._sendTime = Date.now();
          hasItem = null != self.onprogress;
          if (!hasItem) {
            const _listeners = self._listeners;
            hasItem = _listeners.has("progress");
          }
          closure_3 = closure_19;
          const tmp9 = closure_19;
          closure_19 = closure_19 + 1;
          self.__didCreateRequest(closure_19);
          if (self._timeout > 0) {
            self._startTimeout(tmp9);
          }
          closure_0 = "";
          self._uploadTotal = -1;
          if (null != tmp) {
            const upload = self.upload;
            if (upload._isObserved()) {
              let num;
              try {
                obj = bodySize;
                num = obj.bodySize(tmp);
              } catch (err) {
              }
              if (num == null) {
                num = -2;
              }
              self._uploadTotal = num;
            }
          }
          if (null != self.onloadstart) {
            self._dispatch("loadstart");
          } else {
            const _listeners2 = self._listeners;
          }
          if (-1 !== self._uploadTotal) {
            const _Math = Math;
            const bound = Math.max(self._uploadTotal, 0);
            const upload2 = self.upload;
            const obj2 = { lengthComputable: bound > 0, total: bound };
            upload2.dispatchProgress("loadstart", obj2);
          }
          const request = { body: tmp, headers: self._headers, incremental: self._incrementalEvents || null != self.onreadystatechange || null != self.onprogress, method: _method, observesProgress: hasItem, responseType: self._responseType, url: _url, withCredentials: self.withCredentials };
          const obj4 = {
            onChunk(_Uint8Array1, byteLength) {
                  if (closure_3 === self._requestId) {
                    self._loaded = byteLength;
                    if ("arraybuffer" !== self._responseType) {
                      if ("blob" !== self._responseType) {
                        const tmp4 = closure_1;
                        if (tmp4) {
                          const result = obj.__didReceiveIncrementalData(tmp, obj._decodeText(_Uint8Array1), byteLength, obj._total);
                        } else {
                          closure_0 = closure_0 + obj._decodeText(_Uint8Array1);
                          const result1 = obj.__didReceiveDataProgress(tmp, byteLength, obj._total);
                        }
                      }
                    }
                    const _chunks = obj._chunks;
                    _chunks.push(_Uint8Array1);
                    const result2 = obj.__didReceiveDataProgress(tmp, byteLength, obj._total);
                  }
                },
            onComplete(arg0) {
                  if (closure_3 === self._requestId) {
                    const tmp8 = arg0;
                    if (!tmp8) {
                      if ("arraybuffer" !== self._responseType) {
                        if ("blob" !== self._responseType) {
                          const _decodeTextResult = self._decodeText(null);
                          if (self.readyState < self.LOADING) {
                            self.__didReceiveData(closure_3, closure_0 + _decodeTextResult);
                          } else {
                            self._response = self._response + _decodeTextResult;
                          }
                        }
                      }
                      if (self.readyState < self.LOADING) {
                        self.setReadyState(self.LOADING);
                      }
                    }
                    const result = obj.__didCompleteResponse(tmp, arg0, false);
                  }
                },
            onProgress(_loaded) {
                  const tmp = "arraybuffer" !== self._responseType && "blob" !== obj._responseType;
                  if (tmp) {
                    self._loaded = _loaded;
                  }
                  const result = obj.__didReceiveDataProgress(closure_3, _loaded, obj._total);
                },
            onResponse(arg0, arg1, arg2) {
                  self.__didReceiveResponse(closure_3, arg0, arg1, arg2);
                },
            onText(substr) {
                  const _observesEndResult = !hasItem && self._observesEnd();
                  if (_observesEndResult) {
                    self._loaded = self._textLength(substr);
                  }
                  self.__didReceiveData(closure_3, substr);
                }
          };
          const obj3 = bodySize;
          self._requestHandle = obj3.sendXMLHttpRequest(request, obj4);
        }
      }
    }
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      this._terminate();
      let tmp2 = this.readyState === this.UNSENT;
      if (!tmp2) {
        tmp2 = self.readyState === self.OPENED && !self._sent;
      }
      if (!tmp2) {
        tmp2 = self.readyState === self.DONE;
      }
      if (!tmp2) {
        self._aborted = true;
        self._sent = false;
        self._reset();
        self.setReadyState(self.DONE);
      }
      if (self.readyState === self.DONE) {
        self.readyState = self.UNSENT;
        self._reset();
      }
    }
  },
  {
    key: "setResponseHeaders",
    value: function setResponseHeaders(responseHeaders) {
      let obj2 = responseHeaders;
      obj = { responseHeaders, _lowerCaseResponseHeaders: {} };
      if (responseHeaders == null) {
        obj2 = {};
      }
      const keys = Object.keys(obj2);
      for (const item10016 of keys) {
        let str = item10016;
        let tmp2 = obj2[item10016];
        if (null != tmp2) {
          obj._lowerCaseResponseHeaders[str.toLowerCase()] = tmp3;
        }
        continue;
      }
    }
  },
  {
    key: "setReadyState",
    value: function setReadyState(readyState) {
      let _aborted;
      let _hasError;
      const self = this;
      const _timedOut = this._timedOut;
      let tmp = -1 !== this._uploadTotal;
      ({ _aborted, _hasError } = this);
      if (tmp) {
        tmp = readyState === self.DONE;
      }
      if (tmp) {
        self._uploadTotal = -1;
      }
      self.readyState = readyState;
      self._dispatch("readystatechange");
      if (readyState === self.DONE) {
        let tmp3;
        if (_aborted) {
          if (tmp) {
            self._failUpload("abort");
          }
          self._dispatch("abort");
          tmp3 = tmp15;
        } else if (_hasError) {
          let str3 = "error";
          if (_timedOut) {
            str3 = "timeout";
          }
          if (tmp) {
            self._failUpload(str3);
          }
          if (_timedOut) {
            self._dispatch(str3);
            tmp3 = tmp15;
          } else {
            const self2 = this;
            const self3 = this;
            const tmp8 = new closure_7(self, "error");
            tmp8.nitroError = self._errorMessage;
            self.dispatchEvent(tmp8);
            tmp3 = tmp15;
          }
        } else if (self.readyState === self.DONE) {
          tmp3 = tmp15;
          if (self._observesEnd()) {
            obj = { lengthComputable: self._total > 0, loaded: null, total: null };
            ({ _loaded: obj.loaded, _total: obj.total } = self);
            tmp3 = obj;
          }
          self._dispatch("load", tmp3);
        }
        self._dispatch("loadend", tmp3);
      }
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1, arg2) {
      const self = this;
      const tmp = "readystatechange" !== arg0 && "progress" !== arg0;
      if (!tmp) {
        self._incrementalEvents = true;
      }
      let fn = _get(_getPrototypeOf(NitroXMLHttpRequest.prototype), "addEventListener", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1, arg2];
      fn(items);
    }
  },
  {
    key: "_decodeText",
    value: function _decodeText(byteLength) {
      let byteLength2;
      let uint8Array = byteLength;
      if (byteLength == null) {
        const _Uint8Array = Uint8Array;
        const self = this;
        const self2 = this;
        uint8Array = new Uint8Array(0);
      }
      const self3 = this;
      const _pendingText = this._pendingText;
      if (null != _pendingText) {
        let num2;
        const _Uint8Array2 = Uint8Array;
        byteLength = _pendingText.byteLength;
        if (byteLength != null) {
          num2 = byteLength.byteLength;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const self4 = this;
        const self5 = this;
        const _Uint8Array21 = new _Uint8Array2(byteLength + num2);
        const result = _Uint8Array21.set(_pendingText);
        uint8Array = _Uint8Array21;
        if (null != byteLength) {
          const result1 = _Uint8Array21.set(byteLength, _pendingText.byteLength);
          uint8Array = _Uint8Array21;
        }
      }
      if (null == byteLength) {
        byteLength2 = uint8Array.byteLength;
      } else {
        let byteLength3 = uint8Array.byteLength;
        let diff = byteLength3 - 1;
        byteLength2 = byteLength3;
        if (0 <= diff) {
          byteLength2 = byteLength3;
          if (byteLength3 - 3 <= diff) {
            while (true) {
              let num6 = uint8Array[diff];
              if (num6 == null) {
                num6 = 0;
              }
              byteLength2 = byteLength3;
              if (num6 < 128) {
                break;
              } else {
                if (num6 >= 192) {
                  let num8 = 4;
                  let diff1 = byteLength3 - diff;
                  if (num6 < 240) {
                    let num10 = 2;
                    if (num6 >= 224) {
                      num10 = 3;
                    }
                    num8 = num10;
                  }
                  if (diff1 < num8) {
                    byteLength3 = diff;
                  }
                  byteLength2 = byteLength3;
                  break;
                } else {
                  let diff2 = diff - 1;
                  byteLength2 = byteLength3;
                  if (0 > diff2) {
                    break;
                  } else {
                    byteLength2 = byteLength3;
                    diff = diff2;
                    if (byteLength3 - 3 <= diff2) {
                      continue;
                    } else {
                      break;
                    }
                    break;
                  }
                }
                break;
              }
            }
          }
        }
      }
      let substr = null;
      if (byteLength2 < uint8Array.byteLength) {
        substr = uint8Array.slice(byteLength2);
      }
      self3._pendingText = substr;
      let str = "";
      let num11 = 0;
      if (self3._loaded !== uint8Array.byteLength) {
        str = "";
        num11 = 0;
        if (3 <= byteLength2) {
          str = "";
          num11 = 0;
          if (239 === uint8Array[0]) {
            str = "";
            num11 = 0;
            if (187 === uint8Array[1]) {
              let num15 = 0;
              str = "";
              num11 = 0;
              if (191 === uint8Array[2]) {
                const sum = num15 + 3;
                const text = `﻿`;
                str = text;
                num11 = sum;
                while (3 <= byteLength2 - sum) {
                  str = text;
                  num11 = sum;
                  if (239 !== uint8Array[sum]) {
                    break;
                  } else {
                    str = text;
                    num11 = sum;
                    if (187 !== uint8Array[sum + 1]) {
                      break;
                    } else {
                      num15 = sum;
                      str = text;
                      num11 = sum;
                      if (191 !== uint8Array[sum + 2]) {
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let sum1 = str;
      if (num11 !== byteLength2) {
        const obj2 = stringToUTF8;
        sum1 = str + obj2.utf8ToString(uint8Array.subarray(num11, byteLength2));
      }
      return sum1;
    }
  },
  {
    key: "_terminate",
    value: function _terminate() {
      const _requestHandle = this._requestHandle;
      this._requestHandle = null;
      this._requestId = null;
      this._clearTimeout();
      if (_requestHandle != null) {
        _requestHandle.abort();
      }
    }
  },
  {
    key: "_startTimeout",
    value: function _startTimeout(_requestId) {
      const self = this;
      let closure_0 = _requestId;
      this._clearTimeout();
      if (this._timeout > 0) {
        const _Math = Math;
        const _Date = Date;
        const sum = self._sendTime + self._timeout;
        const _setTimeout = setTimeout;
        self._timeoutTimer = setTimeout(() => {
          self._timeoutTimer = null;
          if (_requestId === self._requestId) {
            const _requestHandle = obj._requestHandle;
            self._requestHandle = null;
            if (_requestHandle != null) {
              _requestHandle.abort();
            }
            const result = obj.__didCompleteResponse(tmp, "Request timed out", true);
          }
        }, Math.max(0, sum - Date.now()));
      }
    }
  },
  {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      const self = this;
      if (null != this._timeoutTimer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._timeoutTimer);
        self._timeoutTimer = null;
      }
    }
  },
  {
    key: "_completeUpload",
    value: function _completeUpload(arg0) {
      const self = this;
      const _uploadTotal = this._uploadTotal;
      this._uploadTotal = -1;
      const bound = Math.max(_uploadTotal, 0);
      obj = { lengthComputable: bound > 0, loaded: bound, total: bound };
      let tmp2 = -2 !== _uploadTotal;
      if (tmp2) {
        const upload = self.upload;
        upload.dispatchProgress("progress", obj);
        tmp2 = arg0 !== self._requestId;
      }
      if (!tmp2) {
        const upload2 = self.upload;
        upload2.dispatchProgress("load", obj);
        if (arg0 === self._requestId) {
          const upload3 = self.upload;
          upload3.dispatchProgress("loadend", obj);
        }
      }
    }
  },
  {
    key: "_failUpload",
    value: function _failUpload(abort) {
      const upload = this.upload;
      upload.dispatchProgress(abort);
      const upload2 = this.upload;
      upload2.dispatchProgress("loadend");
    }
  },
  {
    key: "_observesEnd",
    value: function _observesEnd() {
      const self = this;
      let hasItem = null != this.onload || null != self.onloadend;
      if (!hasItem) {
        const _listeners = self._listeners;
        hasItem = _listeners.has("load");
      }
      if (!hasItem) {
        const _listeners2 = self._listeners;
        hasItem = _listeners2.has("loadend");
      }
      return hasItem;
    }
  },
  {
    key: "_textLength",
    value: function _textLength(substr) {
      let num = 0;
      if (0 !== substr.length) {
        let _total;
        if (this._total > 0) {
          _total = this._total;
        } else {
          obj = stringToUTF8;
          _total = obj.utf8Length(substr);
        }
        num = _total;
      }
      return num;
    }
  },
  {
    key: "_mergeChunks",
    value: function _mergeChunks() {
      const uint8Array = new Uint8Array(this._loaded);
      let num = 0;
      const _chunks = this._chunks;
      for (const item10015 of _chunks) {
        let result = uint8Array.set(item10015, num);
        num = num + item10015.byteLength;
        continue;
      }
      return uint8Array;
    }
  }
];
const entry4 = {
  key: "__setInterceptor_DO_NOT_USE",
  value: function __setInterceptor_DO_NOT_USE(_interceptor) {
    NitroXMLHttpRequest._interceptor = _interceptor;
  }
};
const items4 = [entry4];
const importDefaultResult1Result1 = _createClass(NitroXMLHttpRequest, items3, items4);
importDefaultResult1Result1.UNSENT = 0;
importDefaultResult1Result1.OPENED = 1;
importDefaultResult1Result1.HEADERS_RECEIVED = 2;
importDefaultResult1Result1.LOADING = 3;
importDefaultResult1Result1.DONE = 4;
importDefaultResult1Result1._interceptor = null;
Object.defineProperty(importDefaultResult1Result1.prototype, Symbol.toStringTag, { configurable: true, value: "XMLHttpRequest" });
const NitroXMLHttpRequest_export = importDefaultResult1Result1;

export { NitroXMLHttpRequest_export as NitroXMLHttpRequest };
