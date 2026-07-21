// Module ID: 193
// Function ID: 2726
// Name: _callSuper
// Dependencies: []

// Module 193 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_7(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
if (arg1(dependencyMap[7]).default.isAvailable) {
  arg1(dependencyMap[7]).default.addNetworkingHandler();
  const _default = arg1(dependencyMap[7]).default;
}
const obj = { arraybuffer: "function" === typeof global.ArrayBuffer, blob: "function" === typeof global.Blob };
let closure_11 = (arg0) => {
  class XMLHttpRequestEventTarget {
    constructor() {
      tmp = closure_5(this, XMLHttpRequestEventTarget);
      return closure_12(this, XMLHttpRequestEventTarget, arguments);
    }
  }
  const arg1 = XMLHttpRequestEventTarget;
  callback3(XMLHttpRequestEventTarget, arg0);
  let obj = {
    key: "onload",
    get() {
      return XMLHttpRequestEventTarget(closure_2[8]).getEventHandlerAttribute(this, "load");
    },
    set(handleEvent) {
      const result = XMLHttpRequestEventTarget(closure_2[8]).setEventHandlerAttribute(this, "load", handleEvent);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "onloadstart",
    get() {
      return XMLHttpRequestEventTarget(closure_2[8]).getEventHandlerAttribute(this, "loadstart");
    },
    set(handleEvent) {
      const result = XMLHttpRequestEventTarget(closure_2[8]).setEventHandlerAttribute(this, "loadstart", handleEvent);
    }
  };
  items[1] = obj;
  obj = {
    key: "onprogress",
    get() {
      return XMLHttpRequestEventTarget(closure_2[8]).getEventHandlerAttribute(this, "progress");
    },
    set(handleEvent) {
      const result = XMLHttpRequestEventTarget(closure_2[8]).setEventHandlerAttribute(this, "progress", handleEvent);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "ontimeout",
    get() {
      return XMLHttpRequestEventTarget(closure_2[8]).getEventHandlerAttribute(this, "timeout");
    },
    set(handleEvent) {
      const result = XMLHttpRequestEventTarget(closure_2[8]).setEventHandlerAttribute(this, "timeout", handleEvent);
    }
  };
  items[4] = {
    key: "onerror",
    get() {
      return XMLHttpRequestEventTarget(closure_2[8]).getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const result = XMLHttpRequestEventTarget(closure_2[8]).setEventHandlerAttribute(this, "error", handleEvent);
    }
  };
  items[5] = {
    key: "onabort",
    get() {
      return XMLHttpRequestEventTarget(closure_2[8]).getEventHandlerAttribute(this, "abort");
    },
    set(handleEvent) {
      const result = XMLHttpRequestEventTarget(closure_2[8]).setEventHandlerAttribute(this, "abort", handleEvent);
    }
  };
  items[6] = {
    key: "onloadend",
    get() {
      return XMLHttpRequestEventTarget(closure_2[8]).getEventHandlerAttribute(this, "loadend");
    },
    set(handleEvent) {
      const result = XMLHttpRequestEventTarget(closure_2[8]).setEventHandlerAttribute(this, "loadend", handleEvent);
    }
  };
  return callback(XMLHttpRequestEventTarget, items);
}(importDefault(dependencyMap[9]));
const tmp3 = (arg0) => {
  class XMLHttpRequest {
    constructor() {
      tmp = closure_5(this, XMLHttpRequest);
      obj = closure_12(this, XMLHttpRequest);
      obj.UNSENT = 0;
      obj.OPENED = 1;
      obj.HEADERS_RECEIVED = 2;
      obj.LOADING = 3;
      obj.DONE = 4;
      obj.readyState = 0;
      obj.status = 0;
      obj.timeout = 0;
      obj.withCredentials = true;
      tmp2 = new closure_11();
      obj.upload = tmp2;
      obj._aborted = false;
      obj._hasError = false;
      obj._method = null;
      obj._perfKey = null;
      obj._response = "";
      obj._url = null;
      obj._timedOut = false;
      obj._incrementalEvents = false;
      obj._startTime = null;
      obj._performanceLogger = XMLHttpRequest(closure_2[10]).default;
      _resetResult = obj._reset();
      return obj;
    }
  }
  const arg1 = XMLHttpRequest;
  callback3(XMLHttpRequest, arg0);
  let obj = {
    key: "_reset",
    value: function _reset() {
      this.readyState = this.UNSENT;
      this.responseHeaders = undefined;
      this.status = 0;
      delete r2.responseURL;
      this._requestId = null;
      this._cachedResponse = undefined;
      this._hasError = false;
      this._headers = {};
      this._response = "";
      this._responseType = "";
      this._sent = false;
      this._lowerCaseResponseHeaders = {};
      this._clearSubscriptions();
      this._timedOut = false;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "responseType",
    get() {
      return this._responseType;
    },
    set(_responseType) {
      if (this._sent) {
        const _Error = Error;
        const error = new Error("Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set after the request has been sent.");
        throw error;
      } else if (closure_10.hasOwnProperty(_responseType)) {
        let tmp9 = closure_10[_responseType];
        if (!tmp9) {
          tmp9 = "document" === _responseType;
        }
        const _HermesInternal2 = HermesInternal;
        XMLHttpRequest(closure_2[11])(tmp9, "The provided value '" + _responseType + "' is unsupported in this environment.");
        if ("blob" === _responseType) {
          XMLHttpRequest(closure_2[11])(XMLHttpRequest(closure_2[7]).default.isAvailable, "Native module BlobModule is required for blob support");
          const tmp14 = XMLHttpRequest(closure_2[11]);
        }
        tmp._responseType = _responseType;
        const tmp7 = XMLHttpRequest(closure_2[11]);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("The provided value '" + _responseType + "' is not a valid 'responseType'.");
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "responseText",
    get() {
      const self = this;
      let str = "";
      if ("" !== this._responseType) {
        if ("text" !== self._responseType) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("The 'responseText' property is only available if 'responseType' is set to '' or 'text', but it is '" + self._responseType + "'.");
          throw error;
        }
      }
      if (self.readyState >= 3) {
        str = self._response;
      }
      return str;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "response",
    get() {
      let _response;
      let _response2;
      const self = this;
      const responseType = this.responseType;
      if ("" !== responseType) {
        if ("text" !== responseType) {
          if (4 !== self.readyState) {
            return null;
          } else if (undefined !== self._cachedResponse) {
            return self._cachedResponse;
          } else {
            if ("document" === responseType) {
              self._cachedResponse = null;
            } else if ("arraybuffer" === responseType) {
              self._cachedResponse = XMLHttpRequest(closure_2[12]).toByteArray(self._response).buffer;
              const obj = XMLHttpRequest(closure_2[12]);
            } else if ("blob" === responseType) {
              if ("object" === typeof self._response) {
                if (self._response) {
                  self._cachedResponse = XMLHttpRequest(closure_2[7]).default.createFromOptions(self._response);
                  const _default2 = XMLHttpRequest(closure_2[7]).default;
                }
              }
              if ("" !== self._response) {
                const _Error = Error;
                ({ _response: _response2, _response } = self);
                const _HermesInternal = HermesInternal;
                const error = new Error("Invalid response for blob - expecting object, was " + typeof _response + ": " + _response2.trim());
                throw error;
              } else {
                self._cachedResponse = XMLHttpRequest(closure_2[7]).default.createFromParts([]);
                const _default = XMLHttpRequest(closure_2[7]).default;
              }
            } else if ("json" === responseType) {
              const _JSON = JSON;
              self._cachedResponse = JSON.parse(self._response);
            }
            const _cachedResponse = self._cachedResponse;
          }
        }
      }
      let str5 = "";
      if (self.readyState >= 3) {
        str5 = "";
        if (!self._hasError) {
          str5 = self._response;
        }
      }
      return str5;
    }
  };
  items[4] = {
    key: "__didCreateRequest",
    value: function __didCreateRequest(_requestId) {
      const self = this;
      this._requestId = _requestId;
      if (XMLHttpRequest._interceptor) {
        const _interceptor = XMLHttpRequest._interceptor;
        let str = self._url;
        if (!str) {
          str = "";
        }
        const sent = _interceptor.requestSent(_requestId, str, tmp2, self._headers);
      }
    }
  };
  items[5] = {
    key: "__didUploadProgress",
    value: function __didUploadProgress(arg0, loaded, total) {
      if (arg0 === this._requestId) {
        let obj = XMLHttpRequest(closure_2[13]);
        let tmp5 = callback(closure_2[14]);
        obj = { lengthComputable: true, loaded, total };
        const prototype = tmp5.prototype;
        tmp5 = new tmp5("progress", obj);
        obj.dispatchTrustedEvent(tmp.upload, tmp5);
      }
    }
  };
  items[6] = {
    key: "__didReceiveResponse",
    value: function __didReceiveResponse(arg0, status) {
      let obj = arg2;
      let str = arg3;
      const self = this;
      if (arg0 === this._requestId) {
        if (null != self._perfKey) {
          const _performanceLogger = self._performanceLogger;
          _performanceLogger.stopTimespan(self._perfKey);
        }
        self.status = status;
        self.setResponseHeaders(obj);
        self.setReadyState(self.HEADERS_RECEIVED);
        if (!str) {
          if ("" !== str) {
            delete r6.responseURL;
          }
          if (XMLHttpRequest._interceptor) {
            const _interceptor = XMLHttpRequest._interceptor;
            if (!str) {
              str = self._url;
            }
            if (!str) {
              str = "";
            }
            if (!obj) {
              obj = {};
            }
            _interceptor.responseReceived(arg0, str, status, obj);
          }
        }
        self.responseURL = str;
      }
    }
  };
  items[7] = {
    key: "__didReceiveData",
    value: function __didReceiveData(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        self._response = _response;
        self._cachedResponse = undefined;
        self.setReadyState(self.LOADING);
        if (XMLHttpRequest._interceptor) {
          const _interceptor = XMLHttpRequest._interceptor;
          _interceptor.dataReceived(arg0, _response);
        }
      }
    }
  };
  items[8] = {
    key: "__didReceiveIncrementalData",
    value: function __didReceiveIncrementalData(arg0, _response, loaded, total) {
      const self = this;
      if (arg0 === this._requestId) {
        if (self._response) {
          self._response = self._response + _response;
        } else {
          self._response = _response;
        }
        if (XMLHttpRequest._profiling) {
          const _performance = performance;
          performance.mark(`Track:XMLHttpRequest:Incremental Data: ${self._getMeasureURL()}`);
        }
        if (XMLHttpRequest._interceptor) {
          const _interceptor = XMLHttpRequest._interceptor;
          _interceptor.dataReceived(arg0, _response);
        }
        self.setReadyState(self.LOADING);
        const result = self.__didReceiveDataProgress(arg0, loaded, total);
      }
    }
  };
  items[9] = {
    key: "__didReceiveDataProgress",
    value: function __didReceiveDataProgress(arg0, loaded, total) {
      if (arg0 === this._requestId) {
        let obj = XMLHttpRequest(closure_2[13]);
        let tmp5 = callback(closure_2[14]);
        obj = { lengthComputable: total >= 0, loaded, total };
        const prototype = tmp5.prototype;
        tmp5 = new tmp5("progress", obj);
        obj.dispatchTrustedEvent(tmp, tmp5);
      }
    }
  };
  items[10] = {
    key: "__didCompleteResponse",
    value: function __didCompleteResponse(arg0, _response) {
      const self = this;
      if (arg0 === this._requestId) {
        if (_response) {
          let tmp = "" !== self._responseType;
          if (tmp) {
            tmp = "text" !== self._responseType;
          }
          if (!tmp) {
            self._response = _response;
          }
          self._hasError = true;
          if (arg2) {
            self._timedOut = true;
          }
        }
        self._clearSubscriptions();
        self._requestId = null;
        self.setReadyState(self.DONE);
        if (XMLHttpRequest._profiling) {
          if (null != self._startTime) {
            const _performance = performance;
            const obj = { start: self._startTime };
            const _performance2 = performance;
            const text = `Track:XMLHttpRequest:${self._getMeasureURL()}`;
            obj.end = performance.now();
            performance.measure(`Track:XMLHttpRequest:${self._getMeasureURL()}`, obj);
          }
        }
        const _interceptor = XMLHttpRequest._interceptor;
        if (_response) {
          if (_interceptor) {
            const _interceptor3 = XMLHttpRequest._interceptor;
            _interceptor3.loadingFailed(arg0, _response);
          }
        } else if (_interceptor) {
          const _interceptor2 = XMLHttpRequest._interceptor;
          _interceptor2.loadingFinished(arg0, self._response.length);
        }
      }
    }
  };
  items[11] = {
    key: "_clearSubscriptions",
    value: function _clearSubscriptions() {
      let _subscriptions = this._subscriptions;
      if (!_subscriptions) {
        _subscriptions = [];
      }
      const item = _subscriptions.forEach((remove) => {
        if (remove) {
          remove.remove();
        }
      });
      this._subscriptions = [];
    }
  };
  items[12] = {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      if (this.responseHeaders) {
        const responseHeaders = this.responseHeaders;
        const _Map = Map;
        const map = new Map();
        let obj = map;
        const _Object = Object;
        const keys = Object.keys(responseHeaders);
        const iter = keys[Symbol.iterator]();
        const str2 = iter.next();
        while (iter !== undefined) {
          let str4 = str2;
          let tmp22 = responseHeaders;
          let tmp23 = responseHeaders[str2];
          let formatted = str2.toLowerCase();
          let tmp25 = formatted;
          let tmp26 = map;
          let value = obj.get(formatted);
          let tmp28 = value;
          if (value) {
            let tmp15 = value;
            let tmp16 = tmp23;
            tmp28.headerValue = `${tmp28.headerValue}, ${tmp23}`;
            let tmp17 = map;
            let tmp18 = formatted;
            let result = obj.set(tmp25, tmp28);
          } else {
            let tmp10 = map;
            let tmp11 = formatted;
            obj = { lowerHeaderName: tmp25 };
            let tmp12 = str2;
            obj.upperHeaderName = str4.toUpperCase();
            let tmp13 = tmp23;
            obj.headerValue = tmp23;
            let result1 = obj.set(tmp25, obj);
          }
          // continue
        }
        const sorted = callback2(obj.values()).sort((upperHeaderName, upperHeaderName2) => {
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
        const mapped = sorted.map((lowerHeaderName) => lowerHeaderName.lowerHeaderName + ": " + lowerHeaderName.headerValue);
        return mapped.join("\r\n") + "\r\n";
      } else {
        return null;
      }
    }
  };
  items[13] = {
    key: "getResponseHeader",
    value: function getResponseHeader(arg0) {
      const tmp = this._lowerCaseResponseHeaders[arg0.toLowerCase(arg0)];
      let tmp2 = null;
      if (undefined !== tmp) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[14] = {
    key: "setRequestHeader",
    value: function setRequestHeader(baggage, arg1) {
      if (this.readyState !== this.OPENED) {
        const _Error = Error;
        const error = new Error("Request has not been opened");
        throw error;
      } else {
        const _String = String;
        const formatted = baggage.toLowerCase();
        tmp._headers[formatted] = String(arg1);
      }
    }
  };
  items[15] = {
    key: "setTrackingName",
    value: function setTrackingName(_trackingName) {
      this._trackingName = _trackingName;
      return this;
    }
  };
  items[16] = {
    key: "setPerformanceLogger",
    value: function setPerformanceLogger(_performanceLogger) {
      this._performanceLogger = _performanceLogger;
      return this;
    }
  };
  items[17] = {
    key: "open",
    value: function open(str, _url) {
      const self = this;
      if (this.readyState !== this.UNSENT) {
        const _Error3 = Error;
        const error = new Error("Cannot open, already sending");
        throw error;
      } else {
        if (undefined !== arg2) {
          if (!arg2) {
            const _Error = Error;
            const error1 = new Error("Synchronous http requests are not supported");
            throw error1;
          }
        }
        if (_url) {
          self._method = str.toUpperCase();
          self._url = _url;
          self._aborted = false;
          self.setReadyState(self.OPENED);
        } else {
          const _Error2 = Error;
          const error2 = new Error("Cannot load an empty url");
          throw error2;
        }
      }
    }
  };
  items[18] = {
    key: "send",
    value: function send(arg0) {
      let __didCreateRequest;
      let _headers;
      let _method;
      let _trackingName;
      let _url2;
      let timeout;
      const self = this;
      const XMLHttpRequest = this;
      if (this.readyState !== this.OPENED) {
        const _Error2 = Error;
        const error = new Error("Request has not been opened");
        throw error;
      } else if (self._sent) {
        const _Error = Error;
        const error1 = new Error("Request has already been sent");
        throw error1;
      } else {
        self._sent = true;
        const _subscriptions = self._subscriptions;
        _subscriptions.push(XMLHttpRequest(closure_2[15]).default.addListener("didSendNetworkData", (arg0) => {
          const __didUploadProgress = self.__didUploadProgress;
          return __didUploadProgress.apply(self, callback(arg0));
        }));
        const _subscriptions1 = self._subscriptions;
        const _default = XMLHttpRequest(closure_2[15]).default;
        _subscriptions1.push(XMLHttpRequest(closure_2[15]).default.addListener("didReceiveNetworkResponse", (arg0) => {
          const __didReceiveResponse = self.__didReceiveResponse;
          return __didReceiveResponse.apply(self, callback(arg0));
        }));
        const _subscriptions2 = self._subscriptions;
        const _default2 = XMLHttpRequest(closure_2[15]).default;
        _subscriptions2.push(XMLHttpRequest(closure_2[15]).default.addListener("didReceiveNetworkData", (arg0) => {
          const __didReceiveData = self.__didReceiveData;
          return __didReceiveData.apply(self, callback(arg0));
        }));
        const _subscriptions3 = self._subscriptions;
        const _default3 = XMLHttpRequest(closure_2[15]).default;
        _subscriptions3.push(XMLHttpRequest(closure_2[15]).default.addListener("didReceiveNetworkIncrementalData", (arg0) => {
          const __didReceiveIncrementalData = self.__didReceiveIncrementalData;
          return __didReceiveIncrementalData.apply(self, callback(arg0));
        }));
        const _subscriptions4 = self._subscriptions;
        const _default4 = XMLHttpRequest(closure_2[15]).default;
        _subscriptions4.push(XMLHttpRequest(closure_2[15]).default.addListener("didReceiveNetworkDataProgress", (arg0) => {
          const __didReceiveDataProgress = self.__didReceiveDataProgress;
          return __didReceiveDataProgress.apply(self, callback(arg0));
        }));
        const _subscriptions5 = self._subscriptions;
        const _default5 = XMLHttpRequest(closure_2[15]).default;
        _subscriptions5.push(XMLHttpRequest(closure_2[15]).default.addListener("didCompleteNetworkResponse", (arg0) => {
          const __didCompleteResponse = self.__didCompleteResponse;
          return __didCompleteResponse.apply(self, callback(arg0));
        }));
        let str7 = "text";
        if ("arraybuffer" === self._responseType) {
          str7 = "base64";
        }
        if ("blob" === self._responseType) {
          str7 = "blob";
        }
        let _url = self._trackingName;
        if (null == _url) {
          _url = self._url;
        }
        const _String = String;
        self._perfKey = `network_XMLHttpRequest_${String(_url)}`;
        const _performanceLogger = self._performanceLogger;
        _performanceLogger.startTimespan(self._perfKey);
        const _performance = performance;
        self._startTime = performance.now();
        XMLHttpRequest(closure_2[11])(self._method, "XMLHttpRequest method needs to be defined (%s).", _url);
        XMLHttpRequest(closure_2[11])(self._url, "XMLHttpRequest URL needs to be defined (%s).", _url);
        const _default7 = XMLHttpRequest(closure_2[15]).default;
        ({ _method, _trackingName } = self);
        let tmp17;
        if (null != _trackingName) {
          tmp17 = _trackingName;
        }
        ({ __didCreateRequest, _url: _url2, _headers, timeout } = self);
        _default7.sendRequest(_method, tmp17, _url2, _headers, arg0, str7, self._incrementalEvents || self.onreadystatechange || self.onprogress, timeout, __didCreateRequest.bind(self), self.withCredentials);
      }
    }
  };
  items[19] = {
    key: "abort",
    value: function abort() {
      const self = this;
      this._aborted = true;
      if (this._requestId) {
        XMLHttpRequest(closure_2[15]).default.abortRequest(self._requestId);
        const _default = XMLHttpRequest(closure_2[15]).default;
      }
      let tmp4 = self.readyState === self.UNSENT;
      if (!tmp4) {
        tmp4 = self.readyState === self.OPENED && !self._sent;
        const tmp5 = self.readyState === self.OPENED && !self._sent;
      }
      if (!tmp4) {
        tmp4 = self.readyState === self.DONE;
      }
      if (!tmp4) {
        self._reset();
        self.setReadyState(self.DONE);
      }
      self._reset();
    }
  };
  items[20] = {
    key: "setResponseHeaders",
    value: function setResponseHeaders(arg0) {
      let obj = arg0;
      const self = this;
      let tmp = arg0;
      if (!arg0) {
        tmp = null;
      }
      self.responseHeaders = tmp;
      if (!obj) {
        obj = {};
      }
      const XMLHttpRequest = obj;
      const keys = Object.keys(obj);
      self._lowerCaseResponseHeaders = keys.reduce((arg0, str) => {
        arg0[str.toLowerCase()] = obj[str];
        return arg0;
      }, {});
    }
  };
  items[21] = {
    key: "setReadyState",
    value: function setReadyState(DONE) {
      const self = this;
      this.readyState = DONE;
      let num = 13;
      let num2 = 16;
      let tmp = callback(closure_2[16]);
      tmp = new tmp("readystatechange");
      XMLHttpRequest(closure_2[13]).dispatchTrustedEvent(this, tmp);
      if (DONE === this.DONE) {
        if (self._aborted) {
          let tmp30 = callback(closure_2[num2]);
          const prototype3 = tmp30.prototype;
          tmp30 = new tmp30("abort");
          XMLHttpRequest(closure_2[num]).dispatchTrustedEvent(self, tmp30);
          const obj3 = XMLHttpRequest(closure_2[num]);
          num = XMLHttpRequest(closure_2[num]).dispatchTrustedEvent;
          num2 = callback(closure_2[num2]);
          const prototype4 = num2.prototype;
          num2 = new num2("loadend");
          num(self, num2);
          const tmp38 = XMLHttpRequest(closure_2[num]);
        } else if (!self._hasError) {
          let tmp7 = callback(closure_2[num2]);
          const prototype = tmp7.prototype;
          tmp7 = new tmp7("load");
          XMLHttpRequest(closure_2[num]).dispatchTrustedEvent(self, tmp7);
          const obj2 = XMLHttpRequest(closure_2[num]);
        }
        const dispatchTrustedEvent = XMLHttpRequest(closure_2[num]).dispatchTrustedEvent;
        let tmp17 = callback(closure_2[num2]);
        const prototype2 = tmp17.prototype;
        if (self._timedOut) {
          tmp17 = new tmp17("timeout");
          dispatchTrustedEvent(self, tmp17);
        } else {
          tmp17 = new tmp17("error");
          dispatchTrustedEvent(self, tmp17);
        }
        const tmp15 = XMLHttpRequest(closure_2[num]);
      }
    }
  };
  items[22] = {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      const self = this;
      let tmp = "readystatechange" !== arg0;
      if (tmp) {
        tmp = "progress" !== arg0;
      }
      if (!tmp) {
        self._incrementalEvents = true;
      }
      const items = [arg0, arg1];
      function _superPropGet(XMLHttpRequest, addEventListener, self, arg3) {
        let prototype = XMLHttpRequest;
        if (1) {
          prototype = XMLHttpRequest.prototype;
        }
        const tmpResult = closure_4(closure_8(prototype), "addEventListener", self);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(XMLHttpRequest, "addEventListener", self, 3)(items);
    }
  };
  items[23] = {
    key: "_getMeasureURL",
    value: function _getMeasureURL() {
      let _url = this._trackingName;
      if (null == _url) {
        _url = this._url;
      }
      let str = "Unknown URL";
      if (null != _url) {
        str = _url;
      }
      return str;
    }
  };
  items[24] = {
    key: "onabort",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "abort");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "abort", handleEvent);
    }
  };
  items[25] = {
    key: "onerror",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "error", handleEvent);
    }
  };
  items[26] = {
    key: "onload",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "load");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "load", handleEvent);
    }
  };
  items[27] = {
    key: "onloadstart",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "loadstart");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "loadstart", handleEvent);
    }
  };
  items[28] = {
    key: "onprogress",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "progress");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "progress", handleEvent);
    }
  };
  items[29] = {
    key: "ontimeout",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "timeout");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "timeout", handleEvent);
    }
  };
  items[30] = {
    key: "onloadend",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "loadend");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "loadend", handleEvent);
    }
  };
  items[31] = {
    key: "onreadystatechange",
    get() {
      return XMLHttpRequest(closure_2[8]).getEventHandlerAttribute(this, "readystatechange");
    },
    set(handleEvent) {
      const result = XMLHttpRequest(closure_2[8]).setEventHandlerAttribute(this, "readystatechange", handleEvent);
    }
  };
  const items1 = [
    {
      key: "__setInterceptor_DO_NOT_USE",
      value: function __setInterceptor_DO_NOT_USE(_interceptor) {
        XMLHttpRequest._interceptor = _interceptor;
      }
    },
    {
      key: "enableProfiling",
      value: function enableProfiling(_profiling) {
        XMLHttpRequest._profiling = _profiling;
      }
    }
  ];
  return callback(XMLHttpRequest, items, items1);
}(importDefault(dependencyMap[9]));
tmp3.UNSENT = 0;
tmp3.OPENED = 1;
tmp3.HEADERS_RECEIVED = 2;
tmp3.LOADING = 3;
tmp3.DONE = 4;
tmp3._interceptor = null;
tmp3._profiling = false;

export default tmp3;
