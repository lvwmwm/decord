// Module ID: 1736
// Function ID: 1737
// Name: XMLHttpRequest
// Dependencies: [42, 41, 93, 95, 98, 1737, 1738, 1739, 1741, 1742, 1740, 1743]

// Module 1736 (XMLHttpRequest)
import EventTargetLite from "EventTargetLite" /* 1737 */;
import normalizeMethod from "normalizeMethod" /* 1742 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_6 = ["", "text", "arraybuffer", "blob", "json"];
class XMLHttpRequestUpload {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, XMLHttpRequestUpload);
    const obj = _getPrototypeOf(XMLHttpRequestUpload);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(XMLHttpRequestUpload, EventTargetLite.EventTargetLite);
let closure_7 = _createClass(XMLHttpRequestUpload);
class XMLHttpRequest {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, XMLHttpRequest);
    const items1 = [...items];
    const obj = _getPrototypeOf(XMLHttpRequest);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.UNSENT = 0;
    tmp3Result.OPENED = 1;
    tmp3Result.HEADERS_RECEIVED = 2;
    tmp3Result.LOADING = 3;
    tmp3Result.DONE = 4;
    tmp3Result.readyState = 0;
    tmp3Result.status = 0;
    tmp3Result.statusText = "";
    tmp3Result.responseURL = "";
    tmp3Result.timeout = 0;
    tmp3Result.withCredentials = true;
    tmp3Result.upload = new closure_7();
    tmp3Result.onreadystatechange = null;
    tmp3Result.onloadstart = null;
    tmp3Result.onprogress = null;
    tmp3Result.onload = null;
    tmp3Result.onloadend = null;
    tmp3Result.onerror = null;
    tmp3Result.ontimeout = null;
    tmp3Result.onabort = null;
    tmp3Result.requestId = null;
    tmp3Result.requestToken = 0;
    tmp3Result.method = "GET";
    tmp3Result.url = "";
    tmp3Result.sent = false;
    tmp3Result.hasRequestBody = false;
    tmp3Result.requestBodyLength = 0;
    tmp3Result.uploadSettled = false;
    tmp3Result.downloadedBytes = 0;
    tmp3Result.mimeTypeOverride = null;
    tmp3Result.requestHeaders = [];
    tmp3Result.responseHeaders = [];
    tmp3Result.responseTypeValue = "";
    tmp3Result.responseBytes = null;
    tmp3Result.responseBlobValue = null;
    tmp3Result.responseTextValue = null;
    tmp3Result.responseJsonValue = undefined;
    new closure_7();
    return tmp3Result;
  }
}
_inherits(XMLHttpRequest, EventTargetLite.EventTargetLite);
let obj = {
  key: "responseType",
  get() {
    return this.responseTypeValue;
  },
  set(responseTypeValue) {
    if (this.readyState >= 3) {
      const self = this;
      const self2 = this;
      const dOMException = new require("DOMException").DOMException("[Worklets] Failed to set 'responseType' on 'XMLHttpRequest': the response type cannot be changed once loading has started.", "InvalidStateError");
      throw dOMException;
    } else if (closure_6.includes(responseTypeValue)) {
      tmp.responseTypeValue = responseTypeValue;
    }
  }
};
let items = [
  obj,
  {
    key: "response",
    get() {
      let mimeTypeOverride;
      const self = this;
      const responseTypeValue = this.responseTypeValue;
      let str = "";
      if ("" !== responseTypeValue) {
        if ("text" !== responseTypeValue) {
          if ("arraybuffer" === responseTypeValue) {
            let responseBytes = null;
            if (4 === self.readyState) {
              responseBytes = self.responseBytes;
            }
            return responseBytes;
          } else if ("blob" === responseTypeValue) {
            let responseBlobValue = null;
            if (4 === self.readyState) {
              responseBlobValue = null;
              if (null !== self.responseBytes) {
                if (null === self.responseBlobValue) {
                  const items = [];
                  ({ responseBytes: arr[0], mimeTypeOverride } = self);
                  const _Blob = require("Blob").Blob;
                  if (mimeTypeOverride == null) {
                    mimeTypeOverride = self.getResponseHeader("content-type");
                  }
                  if (mimeTypeOverride == null) {
                    mimeTypeOverride = str;
                  }
                  const self4 = this;
                  const self5 = this;
                  const obj = { type: mimeTypeOverride };
                  const _Blob1 = new _Blob(items, obj);
                  self.responseBlobValue = _Blob1;
                }
                responseBlobValue = self.responseBlobValue;
              }
            }
            return responseBlobValue;
          } else if ("json" === responseTypeValue) {
            if (4 !== self.readyState) {
              return null;
            } else {
              if (undefined === self.responseJsonValue) {
                try {
                  let utf8DecodeResult = str;
                  const _JSON = JSON;
                  if (null !== self.responseBytes) {
                    const utf8Decode = require("utf8Encode").utf8Decode;
                    require("utf8Encode");
                    const _Uint8Array = Uint8Array;
                    const self2 = this;
                    const self3 = this;
                    const stripUtf8Bom = require("utf8Encode").stripUtf8Bom;
                    require("utf8Encode");
                    const uint8Array = new Uint8Array(self.responseBytes);
                    utf8DecodeResult = utf8Decode(stripUtf8Bom(uint8Array));
                  }
                  self.responseJsonValue = parse(utf8DecodeResult);
                } catch (err) {
                  self.responseJsonValue = null;
                }
              }
              return self.responseJsonValue;
            }
          } else {
            return null;
          }
        }
      }
      if (self.readyState >= 3) {
        str = self.getResponseText();
      }
      return str;
    }
  },
  {
    key: "responseText",
    get() {
      const self = this;
      let str = "";
      if ("" !== this.responseTypeValue) {
        if ("text" !== self.responseTypeValue) {
          const self2 = this;
          const self3 = this;
          const dOMException = new require("DOMException").DOMException("[Worklets] Failed to read 'responseText' on 'XMLHttpRequest': the value is only accessible if the object's 'responseType' is '' or 'text'.", "InvalidStateError");
          throw dOMException;
        }
      }
      if (self.readyState >= 3) {
        str = self.getResponseText();
      }
      return str;
    }
  },
  {
    key: "open",
    value: function open(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      const StringResult = String(arg0);
      const StringResult1 = String(arg1);
      const obj = normalizeMethod;
      if (obj.isToken(StringResult)) {
        const tmp3Result = normalizeMethod;
        if (tmp3Result.isForbiddenMethod(StringResult)) {
          const _HermesInternal2 = HermesInternal;
          const self8 = this;
          const self9 = this;
          const dOMException = new tmp3(1738).DOMException("[Worklets] Failed to execute 'open' on 'XMLHttpRequest': '" + StringResult + "' HTTP method is unsupported.", "SecurityError");
          throw dOMException;
        } else if ("" === StringResult1) {
          const self6 = this;
          const self7 = this;
          const dOMException1 = new tmp3(1738).DOMException("[Worklets] Failed to execute 'open' on 'XMLHttpRequest': the URL cannot be empty.", "SyntaxError");
          throw dOMException1;
        } else if (flag) {
          const self5 = this;
          this.terminate();
          const tmp3Result2 = normalizeMethod;
          this.method = tmp3Result2.normalizeMethod(StringResult);
          this.url = StringResult1;
          this.sent = false;
          this.hasRequestBody = false;
          this.requestBodyLength = 0;
          this.uploadSettled = false;
          this.mimeTypeOverride = null;
          this.requestHeaders = [];
          this.resetResponse();
          if (1 !== this.readyState) {
            self5.setReadyState(1);
          } else {
            self5.readyState = 1;
          }
        } else {
          const self3 = this;
          const self4 = this;
          const dOMException2 = new tmp3(1738).DOMException("[Worklets] Synchronous XMLHttpRequest is not supported.", "InvalidAccessError");
          throw dOMException2;
        }
      } else {
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const dOMException3 = new tmp3(1738).DOMException("[Worklets] Failed to execute 'open' on 'XMLHttpRequest': '" + StringResult + "' is not a valid HTTP method.", "SyntaxError");
        throw dOMException3;
      }
    }
  },
  {
    key: "setRequestHeader",
    value: function setRequestHeader(arg0, arg1) {
      const self = this;
      if (1 === this.readyState) {
        if (!self.sent) {
          const _String = String;
          const StringResult = String(arg0);
          const _String2 = String;
          const obj = normalizeMethod;
          const normalizeHeaderValueResult = obj.normalizeHeaderValue(String(arg1));
          const obj2 = normalizeMethod;
          if (obj2.isHeaderName(StringResult)) {
            const tmp5Result = normalizeMethod;
            if (tmp5Result.isHeaderValue(normalizeHeaderValueResult)) {
              const tmp5Result3 = normalizeMethod;
              if (!tmp5Result3.isForbiddenRequestHeader(StringResult, normalizeHeaderValueResult)) {
                const tmp5Result4 = normalizeMethod;
                tmp5Result4.combineHeader(self.requestHeaders, StringResult, normalizeHeaderValueResult);
              }
            }
          }
          const _HermesInternal = HermesInternal;
          const self2 = this;
          const self3 = this;
          const dOMException = new tmp5(1738).DOMException("[Worklets] Failed to execute 'setRequestHeader' on 'XMLHttpRequest': '" + StringResult + ": " + normalizeHeaderValueResult + "' is not a valid header.", "SyntaxError");
          throw dOMException;
        }
      }
      const dOMException1 = new require("DOMException").DOMException("[Worklets] Failed to execute 'setRequestHeader' on 'XMLHttpRequest': the object's state must be OPENED.", "InvalidStateError");
      throw dOMException1;
    }
  },
  {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      const obj = normalizeMethod;
      return obj.sortAndCombineHeaders(this.responseHeaders);
    }
  },
  {
    key: "getResponseHeader",
    value: function getResponseHeader(arg0) {
      const obj = normalizeMethod;
      return obj.getHeader(this.responseHeaders, String(arg0));
    }
  },
  {
    key: "overrideMimeType",
    value: function overrideMimeType(arg0) {
      const self = this;
      if (this.readyState >= 3) {
        const self2 = this;
        const self3 = this;
        const dOMException = new require("DOMException").DOMException("[Worklets] Failed to execute 'overrideMimeType' on 'XMLHttpRequest': the MIME type cannot be overridden once loading has started.", "InvalidStateError");
        throw dOMException;
      } else {
        const _String = String;
        self.mimeTypeOverride = String(arg0);
        self.responseTextValue = null;
      }
    }
  },
  {
    key: "send",
    value: function send(data) {
      let contentType;
      let tmpResult;
      let type;
      const self = this;
      if (undefined === __workletsNetworking) {
        const self6 = this;
        const self7 = this;
        const dOMException = new require("DOMException").DOMException("[Worklets] XMLHttpRequest is not available on this runtime.", "InvalidStateError");
        throw dOMException;
      } else {
        if (1 === self.readyState) {
          if (!self.sent) {
            self.sent = true;
            let tmp = require;
            const obj = normalizeMethod;
            if (obj.isSupportedRequestUrl(self.url)) {
              if ("GET" !== self.method) {
                let obj2;
                let num3;
                if ("HEAD" !== self.method) {
                  if (null == data) {
                    obj2 = {};
                  } else if (typeof data === "string") {
                    obj2 = { data, contentType: "text/plain;charset=UTF-8" };
                    const obj3 = { data, contentType: "text/plain;charset=UTF-8" };
                  } else {
                    const _ArrayBuffer2 = ArrayBuffer;
                    if (data instanceof ArrayBuffer) {
                      obj2 = { data };
                      const obj5 = { data };
                    } else {
                      let __getBytes;
                      if (data != null) {
                        __getBytes = data.__getBytes;
                      }
                      if (typeof __getBytes === "function") {
                        const obj6 = { data: tmpResult.toArrayBuffer(data.__getBytes()), contentType: type };
                        type = undefined;
                        tmpResult = tmp(1740);
                        if ("" !== data.type) {
                          type = data.type;
                        }
                        obj2 = obj6;
                      } else if (data instanceof tmp(1743).FormData) {
                        const obj7 = { data: null, contentType: null };
                        ({ body: obj4.data, contentType: obj4.contentType } = data.__encodeMultipart());
                        obj2 = obj7;
                        data.__encodeMultipart();
                      } else {
                        const _ArrayBuffer = ArrayBuffer;
                        const obj8 = { data: null };
                        if (ArrayBuffer.isView(data)) {
                          const _Uint8Array = Uint8Array;
                          const self3 = this;
                          const toArrayBuffer = tmp(1740).toArrayBuffer;
                          const self2 = this;
                          tmp(1740);
                          const uint8Array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
                          obj8.data = toArrayBuffer(uint8Array);
                          obj2 = obj8;
                        } else {
                          const _String = String;
                          obj8.data = String(data);
                          obj2 = obj8;
                        }
                      }
                    }
                  }
                }
                ({ data, contentType } = obj2);
                const items = [];
                HermesBuiltin.arraySpread(items, self.requestHeaders, 0);
                let hasHeaderResult = undefined === contentType;
                if (!hasHeaderResult) {
                  const tmpResult5 = tmp(1742);
                  hasHeaderResult = tmpResult5.hasHeader(items, "content-type");
                }
                if (!hasHeaderResult) {
                  const items1 = ["Content-Type", contentType];
                  items.push(items1);
                }
                self.hasRequestBody = undefined !== data;
                if (typeof data === "string") {
                  const tmpResult6 = tmp(1741);
                  num3 = tmpResult6.utf8Encode(data).length;
                } else {
                  num3 = undefined;
                  if (data != null) {
                    num3 = data.byteLength;
                  }
                  if (num3 == null) {
                    num3 = 0;
                  }
                }
                self.requestBodyLength = num3;
                const sum = self.requestToken + 1;
                self.requestToken = sum;
                const request = { method: null, url: null, headers: items, body: data, timeoutMs: null, withCredentials: null };
                ({ method: obj11.method, url: obj11.url } = self);
                ({ timeout: obj11.timeoutMs, withCredentials: obj11.withCredentials } = self);
                self.requestId = __workletsNetworking.sendRequest(request, (arg0, total) => {
                  const tmp = sum === self.requestToken && null !== obj.requestId;
                  if (tmp) {
                    const result = obj.handleNetworkingEvent(arg0, total);
                  }
                });
                self.__dispatch("loadstart");
                if (self.hasRequestBody) {
                  const upload = self.upload;
                  const obj9 = { loaded: 0, total: self.requestBodyLength, lengthComputable: self.requestBodyLength > 0 };
                  upload.__dispatch("loadstart", obj9);
                }
              }
              obj2 = { data: "Array", contentType: "flexDirection" };
            } else {
              self.__dispatch("loadstart");
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => self.handleRequestError("network", "Only http and https URLs are supported, got '" + self.url + "'."));
            }
          }
        }
        const self4 = this;
        const self5 = this;
        const dOMException1 = new require("DOMException").DOMException("[Worklets] Failed to execute 'send' on 'XMLHttpRequest': the object's state must be OPENED.", "InvalidStateError");
        throw dOMException1;
      }
    }
  },
  {
    key: "abort",
    value: function abort() {
      const self = this;
      if (1 !== this.readyState) {
        if (this.terminate()) {
          if (0 !== self.readyState) {
            if (4 === self.readyState) {
              self.resetResponse();
              self.readyState = 0;
            } else {
              self.resetResponse();
              self.setReadyState(4);
              const result = self.settleUploadWithError("abort");
              self.__dispatch("abort");
              self.__dispatch("loadend");
              if (4 === self.readyState) {
                self.readyState = 0;
              }
            }
          }
        }
        self.readyState = 0;
      }
    }
  },
  {
    key: "handleNetworkingEvent",
    value: function handleNetworkingEvent(arg0, total) {
      let loaded;
      let num3;
      let num7;
      let total2;
      const self = this;
      if ("response" === arg0) {
        ({ status: self.status, statusText: self.statusText, headers: self.responseHeaders, url: self.responseURL } = total);
        const result = self.settleUploadWithSuccess();
        self.setReadyState(2);
      } else if ("downloadProgress" === arg0) {
        ({ loaded, total: total2 } = total);
        self.downloadedBytes = loaded;
        if (2 === self.readyState) {
          self.setReadyState(3);
        } else {
          self.__dispatch("readystatechange");
        }
        const obj2 = { loaded, total: num7, lengthComputable: total2 > 0 };
        num7 = 0;
        const __dispatch2 = self.__dispatch;
        if (total2 > 0) {
          num7 = total2;
        }
        __dispatch2("progress", obj2);
      } else if ("uploadProgress" === arg0) {
        total = total.total;
        const upload = self.upload;
        const obj = { loaded: total.loaded, total: num3, lengthComputable: total > 0 };
        num3 = 0;
        const __dispatch = upload.__dispatch;
        if (total > 0) {
          num3 = total;
        }
        __dispatch("progress", obj);
      } else if ("done" === arg0) {
        self.requestId = null;
        const error = total.error;
        if (undefined !== error) {
          self.handleRequestError(error, tmp12);
        } else if (0 === self.status) {
          self.handleRequestError("network", "The request completed without a response.");
        } else {
          const result1 = self.handleResponseEndOfBody(tmp11);
        }
      }
    }
  },
  {
    key: "handleRequestError",
    value: function handleRequestError(arg0, message) {
      let str = "timeout";
      if ("timeout" !== arg0) {
        let str2 = "error";
        if ("aborted" === arg0) {
          str2 = "abort";
        }
        str = str2;
      }
      this.resetResponse();
      this.setReadyState(4);
      const result = this.settleUploadWithError(str);
      const obj = { message };
      this.__dispatch(str, obj);
      this.__dispatch("loadend");
    }
  },
  {
    key: "handleResponseEndOfBody",
    value: function handleResponseEndOfBody(arg0) {
      let _NaN;
      let arrayBuffer;
      const obj = { responseBytes: arrayBuffer, responseTextValue: null, responseBlobValue: null, responseJsonValue: undefined };
      arrayBuffer = arg0;
      if (arg0 == null) {
        const _ArrayBuffer = ArrayBuffer;
        const self = this;
        const self2 = this;
        arrayBuffer = new ArrayBuffer(0);
      }
      const bound = Math.max(obj.responseBytes.byteLength, obj.downloadedBytes);
      const responseHeader = obj.getResponseHeader("content-length");
      if (null === responseHeader) {
        const _Number2 = Number;
        _NaN = Number.NaN;
      } else {
        const _Number = Number;
        _NaN = Number(responseHeader);
      }
      let num2 = 0;
      if (Number.isInteger(_NaN)) {
        num2 = 0;
        if (_NaN > 0) {
          num2 = _NaN;
        }
      }
      const obj2 = { loaded: bound, total: num2, lengthComputable: num2 > 0 };
      const result = obj.settleUploadWithSuccess();
      obj.__dispatch("progress", obj2);
      obj.setReadyState(4);
      obj.__dispatch("load", obj2);
      obj.__dispatch("loadend", obj2);
    }
  },
  {
    key: "settleUploadWithSuccess",
    value: function settleUploadWithSuccess() {
      const self = this;
      if (this.hasRequestBody) {
        if (!self.uploadSettled) {
          self.uploadSettled = true;
          const obj = { loaded: null, total: null, lengthComputable: self.requestBodyLength > 0 };
          ({ requestBodyLength: obj.loaded, requestBodyLength: obj.total } = self);
          const upload = self.upload;
          upload.__dispatch("progress", obj);
          const upload2 = self.upload;
          upload2.__dispatch("load", obj);
          const upload3 = self.upload;
          upload3.__dispatch("loadend", obj);
        }
      }
    }
  },
  {
    key: "settleUploadWithError",
    value: function settleUploadWithError(abort) {
      const self = this;
      const tmp = this.hasRequestBody && !self.uploadSettled;
      if (tmp) {
        self.uploadSettled = true;
        const upload = self.upload;
        upload.__dispatch(abort);
        const upload2 = self.upload;
        upload2.__dispatch("loadend");
      }
    }
  },
  {
    key: "getResponseText",
    value: function getResponseText() {
      const self = this;
      if (null === this.responseTextValue) {
        const responseBytes = self.responseBytes;
        const obj2 = normalizeMethod;
        let extractCharsetResult = obj2.extractCharset(self.mimeTypeOverride);
        if (extractCharsetResult == null) {
          const tmp7Result = normalizeMethod;
          extractCharsetResult = tmp7Result.extractCharset(self.getResponseHeader("content-type"));
        }
        let str3 = "";
        if (null !== responseBytes) {
          str3 = "";
          if (0 !== responseBytes.byteLength) {
            const _globalThis = globalThis;
            if (undefined !== __workletsNetworking) {
              str3 = __workletsNetworking.decodeText(responseBytes, extractCharsetResult);
            } else {
              const _Uint8Array = Uint8Array;
              const self2 = this;
              const self3 = this;
              const utf8Decode = require("utf8Encode").utf8Decode;
              require("utf8Encode");
              const uint8Array = new Uint8Array(responseBytes);
              str3 = utf8Decode(uint8Array);
            }
          }
        }
        self.responseTextValue = str3;
      }
      return self.responseTextValue;
    }
  },
  {
    key: "resetResponse",
    value: function resetResponse() {

    }
  },
  {
    key: "terminate",
    value: function terminate() {
      let flag;
      const self = this;
      if (null === this.requestId) {
        flag = self.sent;
      } else {
        const _globalThis = globalThis;
        if (__workletsNetworking != null) {
          __workletsNetworking.abortRequest(self.requestId);
        }
        self.requestId = null;
        flag = true;
      }
      return flag;
    }
  },
  {
    key: "setReadyState",
    value: function setReadyState(readyState) {
      this.readyState = readyState;
      this.__dispatch("readystatechange");
    }
  }
];
const importDefaultResultResult = _createClass(XMLHttpRequest, items);
importDefaultResultResult.UNSENT = 0;
importDefaultResultResult.OPENED = 1;
importDefaultResultResult.HEADERS_RECEIVED = 2;
importDefaultResultResult.LOADING = 3;
importDefaultResultResult.DONE = 4;
const XMLHttpRequest_export = importDefaultResultResult;

export { XMLHttpRequest_export as XMLHttpRequest };
