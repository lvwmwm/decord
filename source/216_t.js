// Module ID: 216
// Function ID: 2965
// Name: t
// Dependencies: []

// Module 216 (t)
const fn = function t(arg0) {
  function normalizeName(arg0) {
    let str = arg0;
    if ("string" !== typeof arg0) {
      const _String = String;
      str = String(arg0);
    }
    if (!obj.test(str)) {
      if ("" !== str) {
        return str.toLowerCase();
      }
    }
    const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
    throw typeError;
  }
  function normalizeValue(arg0) {
    let StringResult = arg0;
    if ("string" !== typeof arg0) {
      const _String = String;
      StringResult = String(arg0);
    }
    return StringResult;
  }
  function iteratorFor(items) {
    const obj = {
      next() {
        const arr = arg0.shift();
        return { done: undefined === arr, value: arr };
      }
    };
    if (tmp8) {
      const _Symbol = Symbol;
      obj[Symbol.iterator] = () => obj;
    }
    return obj;
  }
  class Headers {
    constructor(arg0) {
      self = this;
      arg0 = arg0;
      this.map = {};
      if (arg0 instanceof Headers) {
        item = arg0.forEach(function(arg0, arg1) {
          this.append(arg1, arg0);
        }, self);
      } else {
        tmp = globalThis;
        _Array = Array;
        if (Array.isArray(arg0)) {
          item1 = arg0.forEach(function(arg0) {
            const self = this;
            if (2 != arg0.length) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
              throw typeError;
            } else {
              self.append(arg0[0], arg0[1]);
            }
          }, self);
        } else if (arg0) {
          _Object = Object;
          ownPropertyNames = Object.getOwnPropertyNames(arg0);
          item2 = ownPropertyNames.forEach(function(arg0) {
            this.append(arg0, arg0[arg0]);
          }, self);
        }
      }
      return;
    }
  }
  function consumed(_noBody) {
    if (!_noBody._noBody) {
      if (_noBody.bodyUsed) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Already read");
        const rejectResult = Promise.reject(typeError);
      } else {
        _noBody.bodyUsed = true;
      }
      return rejectResult;
    }
  }
  function fileReaderReady(fileReader) {
    return new Promise((arg0, arg1) => {
      arg0.onload = () => {
        arg0(arg0.result);
      };
      arg0.onerror = () => {
        arg1(arg0.error);
      };
    });
  }
  function readBlobAsArrayBuffer(data) {
    const fileReader = new FileReader();
    const asArrayBuffer = fileReader.readAsArrayBuffer(data);
    return fileReaderReady(fileReader);
  }
  function bufferClone(arr) {
    if (arr.slice) {
      return arr.slice(0);
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(arr.byteLength);
      const _Uint8Array2 = Uint8Array;
      const uint8Array1 = new Uint8Array(arr);
      const result = uint8Array.set(uint8Array1);
      return uint8Array.buffer;
    }
  }
  class Body {
    constructor() {
      self = this;
      this.bodyUsed = false;
      this._initBody = function(_bodyInit) {
        const self = this;
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = _bodyInit;
        if (_bodyInit) {
          if ("string" === typeof _bodyInit) {
            self._bodyText = _bodyInit;
            let tmp = _bodyInit;
          } else {
            if (closure_4) {
              const _Blob = Blob;
              if (prototype.isPrototypeOf(_bodyInit)) {
                self._bodyBlob = _bodyInit;
                tmp = _bodyInit;
              }
            }
            if (closure_5) {
              const _FormData = FormData;
              if (prototype2.isPrototypeOf(_bodyInit)) {
                self._bodyFormData = _bodyInit;
                tmp = _bodyInit;
              }
            }
            if (closure_2) {
              const _URLSearchParams = URLSearchParams;
              if (prototype3.isPrototypeOf(_bodyInit)) {
                self._bodyText = _bodyInit.toString();
                tmp = _bodyInit;
              }
            }
            if (closure_6) {
              if (closure_4) {
                let isPrototypeOfResult = _bodyInit;
                if (_bodyInit) {
                  const _DataView = DataView;
                  isPrototypeOfResult = prototype4.isPrototypeOf(_bodyInit);
                }
                if (isPrototypeOfResult) {
                  self._bodyArrayBuffer = callback4(_bodyInit.buffer);
                  const _Blob2 = Blob;
                  const items = [self._bodyArrayBuffer];
                  const blob = new Blob(items);
                  self._bodyInit = blob;
                  tmp = _bodyInit;
                }
              }
            }
            if (!closure_6) {
              const _Object = Object;
              const callResult = toString.call(_bodyInit);
              self._bodyText = callResult;
              tmp = callResult;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              self._bodyArrayBuffer = callback4(_bodyInit);
              tmp = _bodyInit;
            }
          }
        } else {
          self._noBody = true;
          self._bodyText = "";
          tmp = _bodyInit;
        }
        const headers = self.headers;
        if (!headers.get("content-type")) {
          if ("string" === typeof tmp) {
            const headers4 = self.headers;
            const result = headers4.set("content-type", "text/plain;charset=UTF-8");
          } else {
            if (self._bodyBlob) {
              if (self._bodyBlob.type) {
                const headers3 = self.headers;
                const result1 = headers3.set("content-type", self._bodyBlob.type);
              }
            }
            let isPrototypeOfResult1 = closure_2;
            if (closure_2) {
              const _URLSearchParams2 = URLSearchParams;
              isPrototypeOfResult1 = prototype7.isPrototypeOf(tmp);
            }
            if (isPrototypeOfResult1) {
              const headers2 = self.headers;
              const result2 = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        }
      };
      if (closure_4) {
        self.blob = function() {
          const self = this;
          const tmp = callback2(this);
          if (tmp) {
            return tmp;
          } else if (self._bodyBlob) {
            return Promise.resolve(self._bodyBlob);
          } else if (self._bodyArrayBuffer) {
            const _Blob2 = Blob;
            const items = [self._bodyArrayBuffer];
            const blob = new Blob(items);
            return Promise.resolve(blob);
          } else if (self._bodyFormData) {
            const _Error = Error;
            const error = new Error("could not read FormData body as blob");
            throw error;
          } else {
            const _Blob = Blob;
            const items1 = [self._bodyText];
            const blob1 = new Blob(items1);
            return Promise.resolve(blob1);
          }
        };
      }
      self.arrayBuffer = function() {
        let self = this;
        if (this._bodyArrayBuffer) {
          const tmp9 = callback2(self);
          if (tmp9) {
            return tmp9;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            let byteOffset = self._bodyArrayBuffer;
            if (ArrayBuffer.isView(self._bodyArrayBuffer)) {
              const buffer = byteOffset.buffer;
              byteOffset = self._bodyArrayBuffer.byteOffset;
              self = buffer.slice(byteOffset, self._bodyArrayBuffer.byteOffset + self._bodyArrayBuffer.byteLength);
              let resolveResult = resolve(self);
            } else {
              resolveResult = resolve(byteOffset);
            }
          }
        } else if (closure_4) {
          return self.blob().then(closure_17);
        } else {
          const _Error = Error;
          const error = new Error("could not read as ArrayBuffer");
          throw error;
        }
      };
      self.text = function() {
        let length;
        const self = this;
        const tmp = callback2(this);
        if (tmp) {
          return tmp;
        } else if (self._bodyBlob) {
          const _bodyBlob = self._bodyBlob;
          const _FileReader = FileReader;
          const fileReader = new FileReader();
          const match = /charset=([A-Za-z0-9_-]+)/.exec(_bodyBlob.type);
          let str3 = "utf-8";
          if (match) {
            str3 = match[1];
          }
          const asText = fileReader.readAsText(_bodyBlob, str3);
          return callback3(fileReader);
        } else if (self._bodyArrayBuffer) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(self._bodyArrayBuffer);
          const _Array = Array;
          const array = new Array(uint8Array.length);
          let num = 0;
          if (0 < uint8Array.length) {
            do {
              let _String = String;
              array[num] = String.fromCharCode(uint8Array[num]);
              num = num + 1;
              length = uint8Array.length;
            } while (num < length);
          }
          return Promise.resolve(array.join(""));
        } else if (self._bodyFormData) {
          const _Error = Error;
          const error = new Error("could not read FormData body as text");
          throw error;
        } else {
          return Promise.resolve(self._bodyText);
        }
      };
      if (closure_5) {
        self.formData = function() {
          return this.text().then(closure_20);
        };
      }
      self.json = function() {
        return this.text().then(JSON.parse);
      };
      return self;
    }
  }
  class Request {
    constructor(arg0, arg1) {
      request = arg1;
      self = this;
      if (this instanceof Request) {
        if (!request) {
          request = {};
        }
        body = request.body;
        tmp6 = Request;
        if (arg0 instanceof Request) {
          if (arg0.bodyUsed) {
            tmp46 = globalThis;
            _TypeError3 = TypeError;
            prototype8 = TypeError.prototype;
            tmp47 = new.target;
            str14 = "Already read";
            tmp48 = new.target;
            typeError = new TypeError("Already read");
            tmp50 = typeError;
            throw typeError;
          } else {
            ({ url: self.url, credentials: self.credentials } = arg0);
            if (!request.headers) {
              tmp8 = Headers;
              prototype2 = Headers.prototype;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = new Headers(arg0.headers);
              tmp12 = tmp11;
              self.headers = tmp11;
            }
            ({ method: self.method, mode: self.mode, signal: self.signal } = arg0);
            tmp13 = body;
            if (!body) {
              tmp14 = null;
              tmp13 = null == arg0._bodyInit;
            }
            _bodyInit = body;
            if (!tmp13) {
              _bodyInit = arg0._bodyInit;
              flag = true;
              arg0.bodyUsed = true;
            }
          }
        } else {
          tmp7 = globalThis;
          _String = String;
          self.url = String(arg0);
          _bodyInit = body;
        }
        self.credentials = request.credentials || self.credentials || "same-origin";
        tmp15 = !request.headers && self.headers;
        if (!tmp15) {
          tmp16 = Headers;
          prototype3 = Headers.prototype;
          tmp17 = new.target;
          tmp18 = new.target;
          tmp19 = new Headers(request.headers);
          tmp20 = tmp19;
          self.headers = tmp19;
        }
        str2 = request.method || self.method || "GET";
        formatted = str2.toUpperCase();
        tmp22 = entries;
        num = -1;
        if (entries.indexOf(formatted) > -1) {
          str2 = formatted;
        }
        self.method = str2;
        self.mode = request.mode || self.mode || null;
        tmp23 = request.signal || self.signal;
        if (!tmp23) {
          tmp24 = globalThis;
          str3 = "AbortController";
          signal = undefined;
          if ("AbortController" in globalThis) {
            tmp26 = globalThis;
            _AbortController = AbortController;
            prototype4 = AbortController.prototype;
            tmp27 = new.target;
            tmp28 = new.target;
            abortController = new AbortController();
            tmp30 = abortController;
            signal = abortController.signal;
          }
          tmp23 = signal;
        }
        self.signal = tmp23;
        tmp31 = null;
        self.referrer = null;
        str4 = "GET";
        if ("GET" === self.method) {
          if (_bodyInit) {
            tmp41 = globalThis;
            _TypeError2 = TypeError;
            prototype7 = TypeError.prototype;
            tmp42 = new.target;
            str13 = "Body not allowed for GET or HEAD requests";
            tmp43 = new.target;
            typeError1 = new TypeError("Body not allowed for GET or HEAD requests");
            tmp45 = typeError1;
            throw typeError1;
          }
        } else {
          str5 = "HEAD";
        }
        _initBodyResult = self._initBody(_bodyInit);
        if ("GET" === self.method) {
          str7 = "no-store";
          if ("no-store" === request.cache) {
            obj = /([?&])_=[^&]*/;
            str9 = self.url;
            if (obj.test(self.url)) {
              tmp37 = globalThis;
              _Date2 = Date;
              prototype6 = Date.prototype;
              tmp38 = new.target;
              tmp39 = new.target;
              date = new Date();
              tmp40 = date;
              str12 = "$1_=";
              self.url = str9.replace(obj, `$1_=${obj4.getTime()}`);
            } else {
              obj2 = /\?/;
              str10 = "?";
              if (obj2.test(self.url)) {
                str10 = "&";
              }
              tmp33 = globalThis;
              _Date = Date;
              prototype5 = Date.prototype;
              tmp34 = new.target;
              tmp35 = new.target;
              date1 = new Date();
              tmp36 = date1;
              str11 = "_=";
              self.url = `${str9}${str10}_=${obj3.getTime()}`;
            }
          } else {
            str8 = "no-cache";
          }
        } else {
          str6 = "HEAD";
        }
        return;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
        tmp3 = new.target;
        typeError2 = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        tmp5 = typeError2;
        throw typeError2;
      }
    }
  }
  function decode(str) {
    const formData = new FormData();
    str = formData;
    const parts = str.trim().split("&");
    const item = parts.forEach((str) => {
      if (str) {
        const parts = str.split("=");
        const replaced = parts.shift().replace(/\+/g, " ");
        const str2 = parts.shift();
        const _decodeURIComponent = decodeURIComponent;
        const replaced1 = parts.join("=").replace(/\+/g, " ");
        const _decodeURIComponent2 = decodeURIComponent;
        const str4 = parts.join("=");
        formData.append(decodeURIComponent(replaced), decodeURIComponent(replaced1));
        const decodeURIComponentResult = decodeURIComponent(replaced);
      }
    });
    return formData;
  }
  class Response {
    constructor(arg0, arg1) {
      response = arg1;
      self = this;
      if (this instanceof Response) {
        if (!response) {
          response = {};
        }
        str2 = "default";
        self.type = "default";
        num = 200;
        num2 = 200;
        if (undefined !== response.status) {
          num2 = response.status;
        }
        self.status = num2;
        if (self.status >= 200) {
          num4 = 599;
          if (self.status <= 599) {
            tmp6 = self.status >= 200;
            if (tmp6) {
              num3 = 300;
              tmp6 = self.status < 300;
            }
            self.ok = tmp6;
            str3 = "";
            str4 = "";
            if (undefined !== response.statusText) {
              str4 = `${response.statusText}`;
            }
            self.statusText = str4;
            tmp7 = Headers;
            prototype2 = Headers.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = new Headers(response.headers);
            tmp11 = tmp10;
            self.headers = tmp10;
            self.url = response.url || "";
            tmp12 = arg0;
            _initBodyResult = self._initBody(arg0);
            return;
          }
        }
        tmp14 = globalThis;
        _RangeError = RangeError;
        prototype3 = RangeError.prototype;
        tmp15 = new.target;
        str5 = "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].";
        tmp16 = new.target;
        rangeError = new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        tmp18 = rangeError;
        throw rangeError;
      } else {
        tmp = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
        tmp3 = new.target;
        typeError = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
        tmp5 = typeError;
        throw typeError;
      }
    }
  }
  function fetch(arg0, arg1) {
    return new Promise((arg0, self) => {
      function abortXhr() {
        xMLHttpRequest.abort();
      }
      const tmp = new closure_19(arg0, self);
      if (tmp.signal) {
        if (tmp.signal.aborted) {
          const DOMException = arg0.DOMException;
          const prototype = DOMException.prototype;
          const dOMException = new DOMException("Aborted", "AbortError");
          return self(dOMException);
        }
      }
      const xMLHttpRequest = new XMLHttpRequest();
      xMLHttpRequest.onload = () => {
        const obj = { statusText: xMLHttpRequest.statusText };
        const tmp = new closure_14();
        const arg0 = tmp;
        const str = xMLHttpRequest.getAllResponseHeaders() || "";
        const parts = xMLHttpRequest.getAllResponseHeaders() || "".replace(/\r?\n[\t ]+/g, " ").split("\r");
        const mapped = parts.map((arr) => {
          let substr = arr;
          if (0 === arr.indexOf("\n")) {
            substr = arr.substr(1, arr.length);
          }
          return substr;
        });
        const item = mapped.forEach((str) => {
          const parts = str.split(":");
          const trimmed = parts.shift().trim();
          if (trimmed) {
            tmp.append(trimmed, parts.join(":").trim());
            const str2 = parts.join(":");
          }
        });
        obj.headers = tmp;
        const arg1 = obj;
        let url = url.url;
        if (0 !== url.indexOf("file://")) {
          obj.status = xMLHttpRequest.status;
        } else {
          obj.status = 200;
        }
        if ("responseURL" in xMLHttpRequest) {
          let responseURL = xMLHttpRequest.responseURL;
        } else {
          const headers = obj.headers;
          responseURL = headers.get("X-Request-URL");
        }
        obj.url = responseURL;
        url = "response" in xMLHttpRequest ? tmp7.response : tmp7.responseText;
        const timerId = setTimeout(() => {
          const tmp = new closure_21(closure_2, obj);
          tmp(tmp);
        }, 0);
      };
      xMLHttpRequest.onerror = () => {
        const timerId = setTimeout(() => {
          const typeError = new TypeError("Network request failed");
          callback(typeError);
        }, 0);
      };
      xMLHttpRequest.ontimeout = () => {
        const timerId = setTimeout(() => {
          const typeError = new TypeError("Network request timed out");
          callback(typeError);
        }, 0);
      };
      xMLHttpRequest.onabort = () => {
        const timerId = setTimeout(() => {
          const dOMException = new DOMException.DOMException("Aborted", "AbortError");
          callback(dOMException);
        }, 0);
      };
      const url = tmp.url;
      if ("" === url) {
        if (self.location.href) {
          let href = self.location.href;
        }
        while (true) {
          let flag = true;
          let tmp2Result = tmp2(tmp3, href, true);
          let str = "include";
          if ("include" === tmp.credentials) {
            xMLHttpRequest.withCredentials = true;
          } else {
            let str2 = "omit";
            if ("omit" === tmp.credentials) {
              let flag2 = false;
              xMLHttpRequest.withCredentials = false;
            }
          }
          let str3 = "responseType";
          if ("responseType" in xMLHttpRequest) {
            let tmp7 = closure_4;
            if (closure_4) {
              let str5 = "blob";
              xMLHttpRequest.responseType = "blob";
            } else {
              let tmp8 = closure_6;
              if (closure_6) {
                let str4 = "arraybuffer";
                xMLHttpRequest.responseType = "arraybuffer";
              }
            }
          }
          let tmp9 = self;
          if (self) {
            let tmp10 = self;
            let str6 = "object";
            if ("object" === typeof self.headers) {
              let tmp26 = self;
              let tmp27 = closure_14;
              if (!(self.headers instanceof closure_14)) {
                let tmp11 = self;
                if (self.Headers) {
                  let tmp12 = self;
                  let tmp13 = self;
                }
                closure_4 = [];
                let _Object = Object;
                let tmp14 = self;
                let ownPropertyNames = Object.getOwnPropertyNames(self.headers);
                let item = ownPropertyNames.forEach((baggage) => {
                  xMLHttpRequest.setRequestHeader(baggage, callback2(arg1.headers[baggage]));
                });
                let headers = tmp.headers;
                let item1 = headers.forEach((arg0, baggage) => {
                  if (-1 === arr.indexOf(baggage)) {
                    xMLHttpRequest.setRequestHeader(baggage, arg0);
                  }
                });
              }
              if (tmp.signal) {
                let signal = tmp.signal;
                let str7 = "abort";
                let listener = signal.addEventListener("abort", abortXhr);
                xMLHttpRequest.onreadystatechange = () => {
                  if (4 === xMLHttpRequest.readyState) {
                    const signal = tmp.signal;
                    const removed = signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              let _bodyInit = null;
              if (undefined !== tmp._bodyInit) {
                _bodyInit = tmp._bodyInit;
              }
              let sendResult = xMLHttpRequest.send(_bodyInit);
            }
          }
          let headers1 = tmp.headers;
          let item2 = headers1.forEach((arg0, baggage) => {
            xMLHttpRequest.setRequestHeader(baggage, arg0);
          });
        }
      }
      href = url;
    });
  }
  let obj = "undefined" !== typeof globalThis && globalThis;
  if (!obj) {
    const _self = self;
    obj = "undefined" !== typeof self && self;
    const tmp4 = "undefined" !== typeof self && self;
  }
  if (!obj) {
    obj = undefined !== arg0 && arg0;
    const tmp6 = undefined !== arg0 && arg0;
  }
  if (!obj) {
    obj = {};
  }
  let closure_2 = "URLSearchParams" in obj;
  let tmp8 = "Symbol" in obj;
  if (tmp8) {
    const _Symbol = Symbol;
    tmp8 = "iterator" in Symbol;
  }
  let tmp9 = "FileReader" in tmp7;
  if (tmp9) {
    tmp9 = "Blob" in tmp7;
  }
  if (!tmp9) {
    let closure_5 = "FormData" in tmp7;
    const tmp16 = "ArrayBuffer" in tmp7;
    if (tmp16) {
      let closure_7 = [];
      const _ArrayBuffer = ArrayBuffer;
      let closure_8 = ArrayBuffer.isView || (arg0) => {
        let tmp = arg0;
        if (arg0) {
          const _Object = Object;
          tmp = closure_7.indexOf(toString.call(arg0)) > -1;
        }
        return tmp;
      };
    }
    class Headers {
      constructor(arg0) {
        self = this;
        arg0 = arg0;
        this.map = {};
        if (arg0 instanceof Headers) {
          item = arg0.forEach(function(arg0, arg1) {
            this.append(arg1, arg0);
          }, self);
        } else {
          tmp = globalThis;
          _Array = Array;
          if (Array.isArray(arg0)) {
            item1 = arg0.forEach(function(arg0) {
              const self = this;
              if (2 != arg0.length) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                throw typeError;
              } else {
                self.append(arg0[0], arg0[1]);
              }
            }, self);
          } else if (arg0) {
            _Object = Object;
            ownPropertyNames = Object.getOwnPropertyNames(arg0);
            item2 = ownPropertyNames.forEach(function(arg0) {
              this.append(arg0, arg0[arg0]);
            }, self);
          }
        }
        return;
      }
    }
    class tmp2 {
      append(arg0, arg1) {
        tmp = normalizeName(arg0);
        tmp2 = normalizeValue(arg1);
        tmp3 = this.map[tmp];
        text = tmp2;
        if (tmp3) {
          str = ", ";
          text = `${tmp3}, ${tmp2}`;
        }
        this.map[tmp] = text;
        return;
      }
      delete(arg0) {
        tmp = normalizeName(arg0);
        delete r2[r1];
        return;
      }
      get(arg0) {
        tmp = normalizeName(arg0);
        tmp2 = null;
        if (this.has(tmp)) {
          tmp2 = this.map[tmp];
        }
        return tmp2;
      }
      has(arg0) {
        map = this.map;
        return map.hasOwnProperty(normalizeName(arg0));
      }
      set(arg0, arg1) {
        tmp = normalizeName(arg0);
        this.map[tmp] = normalizeValue(arg1);
        return;
      }
      forEach(arg0, arg1) {
        self = this;
        for (const key10005 in this.map) {
          map = self.map;
          tmp6 = key10005;
          if (!map.hasOwnProperty(key10005)) {
            continue;
          } else {
            tmp = arg0;
            tmp2 = arg1;
            tmp3 = key10005;
            tmp4 = self;
            callResult = arg0.call(arg1, self.map[key10005], tmp6, self);
            // continue
          }
          continue;
        }
        return;
      }
      keys() {
        items = [];
        arg0 = items;
        item = this.forEach((arg0, arg1) => {
          items.push(arg1);
        });
        return iteratorFor(items);
      }
      values() {
        items = [];
        arg0 = items;
        item = this.forEach((arg0) => {
          items.push(arg0);
        });
        return iteratorFor(items);
      }
      entries() {
        items = [];
        arg0 = items;
        item = this.forEach((arg0, arg1) => {
          const items = [arg1, arg0];
          items.push(items);
        });
        return iteratorFor(items);
      }
    }
    class Body {
      constructor() {
        self = this;
        this.bodyUsed = false;
        this._initBody = function(_bodyInit) {
          const self = this;
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = _bodyInit;
          if (_bodyInit) {
            if ("string" === typeof _bodyInit) {
              self._bodyText = _bodyInit;
              let tmp = _bodyInit;
            } else {
              if (closure_4) {
                const _Blob = Blob;
                if (prototype.isPrototypeOf(_bodyInit)) {
                  self._bodyBlob = _bodyInit;
                  tmp = _bodyInit;
                }
              }
              if (closure_5) {
                const _FormData = FormData;
                if (prototype2.isPrototypeOf(_bodyInit)) {
                  self._bodyFormData = _bodyInit;
                  tmp = _bodyInit;
                }
              }
              if (closure_2) {
                const _URLSearchParams = URLSearchParams;
                if (prototype3.isPrototypeOf(_bodyInit)) {
                  self._bodyText = _bodyInit.toString();
                  tmp = _bodyInit;
                }
              }
              if (closure_6) {
                if (closure_4) {
                  let isPrototypeOfResult = _bodyInit;
                  if (_bodyInit) {
                    const _DataView = DataView;
                    isPrototypeOfResult = prototype4.isPrototypeOf(_bodyInit);
                  }
                  if (isPrototypeOfResult) {
                    self._bodyArrayBuffer = callback4(_bodyInit.buffer);
                    const _Blob2 = Blob;
                    const items = [self._bodyArrayBuffer];
                    const blob = new Blob(items);
                    self._bodyInit = blob;
                    tmp = _bodyInit;
                  }
                }
              }
              if (!closure_6) {
                const _Object = Object;
                const callResult = toString.call(_bodyInit);
                self._bodyText = callResult;
                tmp = callResult;
              } else {
                const _ArrayBuffer = ArrayBuffer;
                self._bodyArrayBuffer = callback4(_bodyInit);
                tmp = _bodyInit;
              }
            }
          } else {
            self._noBody = true;
            self._bodyText = "";
            tmp = _bodyInit;
          }
          const headers = self.headers;
          if (!headers.get("content-type")) {
            if ("string" === typeof tmp) {
              const headers4 = self.headers;
              const result = headers4.set("content-type", "text/plain;charset=UTF-8");
            } else {
              if (self._bodyBlob) {
                if (self._bodyBlob.type) {
                  const headers3 = self.headers;
                  const result1 = headers3.set("content-type", self._bodyBlob.type);
                }
              }
              let isPrototypeOfResult1 = closure_2;
              if (closure_2) {
                const _URLSearchParams2 = URLSearchParams;
                isPrototypeOfResult1 = prototype7.isPrototypeOf(tmp);
              }
              if (isPrototypeOfResult1) {
                const headers2 = self.headers;
                const result2 = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          }
        };
        if (closure_4) {
          self.blob = function() {
            const self = this;
            const tmp = callback2(this);
            if (tmp) {
              return tmp;
            } else if (self._bodyBlob) {
              return Promise.resolve(self._bodyBlob);
            } else if (self._bodyArrayBuffer) {
              const _Blob2 = Blob;
              const items = [self._bodyArrayBuffer];
              const blob = new Blob(items);
              return Promise.resolve(blob);
            } else if (self._bodyFormData) {
              const _Error = Error;
              const error = new Error("could not read FormData body as blob");
              throw error;
            } else {
              const _Blob = Blob;
              const items1 = [self._bodyText];
              const blob1 = new Blob(items1);
              return Promise.resolve(blob1);
            }
          };
        }
        self.arrayBuffer = function() {
          let self = this;
          if (this._bodyArrayBuffer) {
            const tmp9 = callback2(self);
            if (tmp9) {
              return tmp9;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              let byteOffset = self._bodyArrayBuffer;
              if (ArrayBuffer.isView(self._bodyArrayBuffer)) {
                const buffer = byteOffset.buffer;
                byteOffset = self._bodyArrayBuffer.byteOffset;
                self = buffer.slice(byteOffset, self._bodyArrayBuffer.byteOffset + self._bodyArrayBuffer.byteLength);
                let resolveResult = resolve(self);
              } else {
                resolveResult = resolve(byteOffset);
              }
            }
          } else if (closure_4) {
            return self.blob().then(closure_17);
          } else {
            const _Error = Error;
            const error = new Error("could not read as ArrayBuffer");
            throw error;
          }
        };
        self.text = function() {
          let length;
          const self = this;
          const tmp = callback2(this);
          if (tmp) {
            return tmp;
          } else if (self._bodyBlob) {
            const _bodyBlob = self._bodyBlob;
            const _FileReader = FileReader;
            const fileReader = new FileReader();
            const match = /charset=([A-Za-z0-9_-]+)/.exec(_bodyBlob.type);
            let str3 = "utf-8";
            if (match) {
              str3 = match[1];
            }
            const asText = fileReader.readAsText(_bodyBlob, str3);
            return callback3(fileReader);
          } else if (self._bodyArrayBuffer) {
            const _Uint8Array = Uint8Array;
            const uint8Array = new Uint8Array(self._bodyArrayBuffer);
            const _Array = Array;
            const array = new Array(uint8Array.length);
            let num = 0;
            if (0 < uint8Array.length) {
              do {
                let _String = String;
                array[num] = String.fromCharCode(uint8Array[num]);
                num = num + 1;
                length = uint8Array.length;
              } while (num < length);
            }
            return Promise.resolve(array.join(""));
          } else if (self._bodyFormData) {
            const _Error = Error;
            const error = new Error("could not read FormData body as text");
            throw error;
          } else {
            return Promise.resolve(self._bodyText);
          }
        };
        if (closure_5) {
          self.formData = function() {
            return this.text().then(closure_20);
          };
        }
        self.json = function() {
          return this.text().then(JSON.parse);
        };
        return self;
      }
    }
    class Request {
      constructor(arg0, arg1) {
        request = arg1;
        self = this;
        if (this instanceof Request) {
          if (!request) {
            request = {};
          }
          body = request.body;
          tmp6 = Request;
          if (arg0 instanceof Request) {
            if (arg0.bodyUsed) {
              tmp46 = globalThis;
              _TypeError3 = TypeError;
              prototype8 = TypeError.prototype;
              tmp47 = new.target;
              str14 = "Already read";
              tmp48 = new.target;
              typeError = new TypeError("Already read");
              tmp50 = typeError;
              throw typeError;
            } else {
              ({ url: self.url, credentials: self.credentials } = arg0);
              if (!request.headers) {
                tmp8 = Headers;
                prototype2 = Headers.prototype;
                tmp9 = new.target;
                tmp10 = new.target;
                tmp11 = new Headers(arg0.headers);
                tmp12 = tmp11;
                self.headers = tmp11;
              }
              ({ method: self.method, mode: self.mode, signal: self.signal } = arg0);
              tmp13 = body;
              if (!body) {
                tmp14 = null;
                tmp13 = null == arg0._bodyInit;
              }
              _bodyInit = body;
              if (!tmp13) {
                _bodyInit = arg0._bodyInit;
                flag = true;
                arg0.bodyUsed = true;
              }
            }
          } else {
            tmp7 = globalThis;
            _String = String;
            self.url = String(arg0);
            _bodyInit = body;
          }
          self.credentials = request.credentials || self.credentials || "same-origin";
          tmp15 = !request.headers && self.headers;
          if (!tmp15) {
            tmp16 = Headers;
            prototype3 = Headers.prototype;
            tmp17 = new.target;
            tmp18 = new.target;
            tmp19 = new Headers(request.headers);
            tmp20 = tmp19;
            self.headers = tmp19;
          }
          str2 = request.method || self.method || "GET";
          formatted = str2.toUpperCase();
          tmp22 = entries;
          num = -1;
          if (entries.indexOf(formatted) > -1) {
            str2 = formatted;
          }
          self.method = str2;
          self.mode = request.mode || self.mode || null;
          tmp23 = request.signal || self.signal;
          if (!tmp23) {
            tmp24 = globalThis;
            str3 = "AbortController";
            signal = undefined;
            if ("AbortController" in globalThis) {
              tmp26 = globalThis;
              _AbortController = AbortController;
              prototype4 = AbortController.prototype;
              tmp27 = new.target;
              tmp28 = new.target;
              abortController = new AbortController();
              tmp30 = abortController;
              signal = abortController.signal;
            }
            tmp23 = signal;
          }
          self.signal = tmp23;
          tmp31 = null;
          self.referrer = null;
          str4 = "GET";
          if ("GET" === self.method) {
            if (_bodyInit) {
              tmp41 = globalThis;
              _TypeError2 = TypeError;
              prototype7 = TypeError.prototype;
              tmp42 = new.target;
              str13 = "Body not allowed for GET or HEAD requests";
              tmp43 = new.target;
              typeError1 = new TypeError("Body not allowed for GET or HEAD requests");
              tmp45 = typeError1;
              throw typeError1;
            }
          } else {
            str5 = "HEAD";
          }
          _initBodyResult = self._initBody(_bodyInit);
          if ("GET" === self.method) {
            str7 = "no-store";
            if ("no-store" === request.cache) {
              obj = /([?&])_=[^&]*/;
              str9 = self.url;
              if (obj.test(self.url)) {
                tmp37 = globalThis;
                _Date2 = Date;
                prototype6 = Date.prototype;
                tmp38 = new.target;
                tmp39 = new.target;
                date = new Date();
                tmp40 = date;
                str12 = "$1_=";
                self.url = str9.replace(obj, `$1_=${obj4.getTime()}`);
              } else {
                obj2 = /\?/;
                str10 = "?";
                if (obj2.test(self.url)) {
                  str10 = "&";
                }
                tmp33 = globalThis;
                _Date = Date;
                prototype5 = Date.prototype;
                tmp34 = new.target;
                tmp35 = new.target;
                date1 = new Date();
                tmp36 = date1;
                str11 = "_=";
                self.url = `${str9}${str10}_=${obj3.getTime()}`;
              }
            } else {
              str8 = "no-cache";
            }
          } else {
            str6 = "HEAD";
          }
          return;
        } else {
          tmp = globalThis;
          _TypeError = TypeError;
          prototype = TypeError.prototype;
          tmp2 = new.target;
          str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
          tmp3 = new.target;
          typeError2 = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
          tmp5 = typeError2;
          throw typeError2;
        }
      }
    }
    if (tmp8) {
      const _Symbol2 = Symbol;
      tmp2.prototype[Symbol.iterator] = tmp2.prototype.entries;
    }
    let closure_9 = ["<string:3329638893>", "<string:3423584669>", "<string:1864633505>", "<string:2855135532>", "<string:3695867012>", "<string:3663507625>", "<string:913766792>", "<string:708837376>", "<string:1105397706>"];
    class Response {
      constructor(arg0, arg1) {
        response = arg1;
        self = this;
        if (this instanceof Response) {
          if (!response) {
            response = {};
          }
          str2 = "default";
          self.type = "default";
          num = 200;
          num2 = 200;
          if (undefined !== response.status) {
            num2 = response.status;
          }
          self.status = num2;
          if (self.status >= 200) {
            num4 = 599;
            if (self.status <= 599) {
              tmp6 = self.status >= 200;
              if (tmp6) {
                num3 = 300;
                tmp6 = self.status < 300;
              }
              self.ok = tmp6;
              str3 = "";
              str4 = "";
              if (undefined !== response.statusText) {
                str4 = `${response.statusText}`;
              }
              self.statusText = str4;
              tmp7 = Headers;
              prototype2 = Headers.prototype;
              tmp8 = new.target;
              tmp9 = new.target;
              tmp10 = new Headers(response.headers);
              tmp11 = tmp10;
              self.headers = tmp10;
              self.url = response.url || "";
              tmp12 = arg0;
              _initBodyResult = self._initBody(arg0);
              return;
            }
          }
          tmp14 = globalThis;
          _RangeError = RangeError;
          prototype3 = RangeError.prototype;
          tmp15 = new.target;
          str5 = "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].";
          tmp16 = new.target;
          rangeError = new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          tmp18 = rangeError;
          throw rangeError;
        } else {
          tmp = globalThis;
          _TypeError = TypeError;
          prototype = TypeError.prototype;
          tmp2 = new.target;
          str = "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.";
          tmp3 = new.target;
          typeError = new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
          tmp5 = typeError;
          throw typeError;
        }
      }
    }
    class tmp3 {
      clone() {
        obj = { body: this._bodyInit };
        tmp = new Request(this, obj);
        return tmp;
      }
    }
    Body.call(tmp3.prototype);
    Body.call(Response.prototype);
    class r10018 {
      clone() {
        obj = { status: this.status, statusText: this.statusText };
        tmp = new Headers(this.headers);
        obj.headers = tmp;
        obj.url = this.url;
        tmp2 = new Response(this._bodyInit, obj);
        return tmp2;
      }
      static error() {
        tmp = new Response(null, {});
        tmp.ok = false;
        tmp.status = 0;
        tmp.type = "error";
        return tmp;
      }
      static redirect(arg0, arg1) {
        if (-1 === f3026.indexOf(arg1)) {
          tmp9 = globalThis;
          _RangeError = RangeError;
          prototype2 = RangeError.prototype;
          tmp10 = new.target;
          str = "Invalid status code";
          tmp11 = new.target;
          rangeError = new RangeError("Invalid status code");
          tmp13 = rangeError;
          throw rangeError;
        } else {
          tmp = Response;
          obj = {};
          obj.status = arg1;
          obj = {};
          tmp2 = arg0;
          obj.location = arg0;
          obj.headers = obj;
          prototype = Response.prototype;
          tmp3 = new.target;
          tmp4 = null;
          tmp5 = new.target;
          tmp6 = obj;
          tmp7 = new Response(null, obj);
          tmp8 = tmp7;
          return tmp7;
        }
      }
    }
    let closure_10 = ["CONTACT_SYNC_EMPTY_CTA", "<string:104385952>", "CONTACT_SYNC_FLOW", "<string:6617344>", "CONTACT_SYNC_FLOW_KEY"];
    tmp.DOMException = tmp7.DOMException;
    const DOMException = tmp.DOMException;
    const prototype2 = DOMException.prototype;
    const dOMException = new DOMException();
    while (true) {
      let tmp27 = fetch;
      let flag2 = true;
      fetch.polyfill = true;
      let tmp28 = obj;
      if (tmp7.fetch) {
        break;
      } else {
        let tmp29 = obj;
        let tmp30 = fetch;
        tmp7.fetch = fetch;
        let tmp31 = Headers;
        tmp7.Headers = tmp2;
        let tmp32 = Request;
        tmp7.Request = tmp3;
        let tmp33 = Response;
        class Headers {
          constructor(arg0) {
            self = this;
            arg0 = arg0;
            this.map = {};
            if (arg0 instanceof Headers) {
              item = arg0.forEach(function(arg0, arg1) {
                this.append(arg1, arg0);
              }, self);
            } else {
              tmp = globalThis;
              _Array = Array;
              if (Array.isArray(arg0)) {
                item1 = arg0.forEach(function(arg0) {
                  const self = this;
                  if (2 != arg0.length) {
                    const _TypeError = TypeError;
                    const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                    throw typeError;
                  } else {
                    self.append(arg0[0], arg0[1]);
                  }
                }, self);
              } else if (arg0) {
                _Object = Object;
                ownPropertyNames = Object.getOwnPropertyNames(arg0);
                item2 = ownPropertyNames.forEach(function(arg0) {
                  this.append(arg0, arg0[arg0]);
                }, self);
              }
            }
            return;
          }
        }
        class tmp2 {
          append(arg0, arg1) {
            tmp = normalizeName(arg0);
            tmp2 = normalizeValue(arg1);
            tmp3 = this.map[tmp];
            text = tmp2;
            if (tmp3) {
              str = ", ";
              text = `${tmp3}, ${tmp2}`;
            }
            this.map[tmp] = text;
            return;
          }
          delete(arg0) {
            tmp = normalizeName(arg0);
            delete r2[r1];
            return;
          }
          get(arg0) {
            tmp = normalizeName(arg0);
            tmp2 = null;
            if (this.has(tmp)) {
              tmp2 = this.map[tmp];
            }
            return tmp2;
          }
          has(arg0) {
            map = this.map;
            return map.hasOwnProperty(normalizeName(arg0));
          }
          set(arg0, arg1) {
            tmp = normalizeName(arg0);
            this.map[tmp] = normalizeValue(arg1);
            return;
          }
          forEach(arg0, arg1) {
            self = this;
            for (const key10005 in this.map) {
              map = self.map;
              tmp6 = key10005;
              if (!map.hasOwnProperty(key10005)) {
                continue;
              } else {
                tmp = arg0;
                tmp2 = arg1;
                tmp3 = key10005;
                tmp4 = self;
                callResult = arg0.call(arg1, self.map[key10005], tmp6, self);
                // continue
              }
              continue;
            }
            return;
          }
          keys() {
            items = [];
            arg0 = items;
            item = this.forEach((arg0, arg1) => {
              items.push(arg1);
            });
            return iteratorFor(items);
          }
          values() {
            items = [];
            arg0 = items;
            item = this.forEach((arg0) => {
              items.push(arg0);
            });
            return iteratorFor(items);
          }
          entries() {
            items = [];
            arg0 = items;
            item = this.forEach((arg0, arg1) => {
              const items = [arg1, arg0];
              items.push(items);
            });
            return iteratorFor(items);
          }
        }
      }
      arg0.Headers = Headers;
      arg0.Request = Request;
      arg0.Response = Response;
      class Headers {
        constructor(arg0) {
          self = this;
          arg0 = arg0;
          this.map = {};
          if (arg0 instanceof Headers) {
            item = arg0.forEach(function(arg0, arg1) {
              this.append(arg1, arg0);
            }, self);
          } else {
            tmp = globalThis;
            _Array = Array;
            if (Array.isArray(arg0)) {
              item1 = arg0.forEach(function(arg0) {
                const self = this;
                if (2 != arg0.length) {
                  const _TypeError = TypeError;
                  const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + arg0.length);
                  throw typeError;
                } else {
                  self.append(arg0[0], arg0[1]);
                }
              }, self);
            } else if (arg0) {
              _Object = Object;
              ownPropertyNames = Object.getOwnPropertyNames(arg0);
              item2 = ownPropertyNames.forEach(function(arg0) {
                this.append(arg0, arg0[arg0]);
              }, self);
            }
          }
          return;
        }
      }
      class tmp2 {
        append(arg0, arg1) {
          tmp = normalizeName(arg0);
          tmp2 = normalizeValue(arg1);
          tmp3 = this.map[tmp];
          text = tmp2;
          if (tmp3) {
            str = ", ";
            text = `${tmp3}, ${tmp2}`;
          }
          this.map[tmp] = text;
          return;
        }
        delete(arg0) {
          tmp = normalizeName(arg0);
          delete r2[r1];
          return;
        }
        get(arg0) {
          tmp = normalizeName(arg0);
          tmp2 = null;
          if (this.has(tmp)) {
            tmp2 = this.map[tmp];
          }
          return tmp2;
        }
        has(arg0) {
          map = this.map;
          return map.hasOwnProperty(normalizeName(arg0));
        }
        set(arg0, arg1) {
          tmp = normalizeName(arg0);
          this.map[tmp] = normalizeValue(arg1);
          return;
        }
        forEach(arg0, arg1) {
          self = this;
          for (const key10005 in this.map) {
            map = self.map;
            tmp6 = key10005;
            if (!map.hasOwnProperty(key10005)) {
              continue;
            } else {
              tmp = arg0;
              tmp2 = arg1;
              tmp3 = key10005;
              tmp4 = self;
              callResult = arg0.call(arg1, self.map[key10005], tmp6, self);
              // continue
            }
            continue;
          }
          return;
        }
        keys() {
          items = [];
          arg0 = items;
          item = this.forEach((arg0, arg1) => {
            items.push(arg1);
          });
          return iteratorFor(items);
        }
        values() {
          items = [];
          arg0 = items;
          item = this.forEach((arg0) => {
            items.push(arg0);
          });
          return iteratorFor(items);
        }
        entries() {
          items = [];
          arg0 = items;
          item = this.forEach((arg0, arg1) => {
            const items = [arg1, arg0];
            items.push(items);
          });
          return iteratorFor(items);
        }
      }
    }
  } else {
    const _Blob = Blob;
    const blob = new Blob();
    let flag = true;
    while (true) {
      let tmp13 = __exception;
      flag = false;
      // continue
    }
  }
};
if ("object" === typeof arg5) {
  if (undefined !== arg4) {
    fn(arg5);
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
const obj = {};
this.WHATWGFetch = obj;
fn(obj);
