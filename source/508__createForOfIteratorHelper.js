// Module ID: 508
// Function ID: 6494
// Name: _createForOfIteratorHelper
// Dependencies: []

// Module 508 (_createForOfIteratorHelper)
let length;
let _exports = exports;
function _createForOfIteratorHelper(@@iterator) {
  let closure_0 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  let _exports = Symbol_iterator;
  if (Symbol_iterator) {
    let closure_4 = true;
    let closure_5 = false;
    let obj = {
      s() {

        },
      n() {
          const iter = arr.next();
          const done = iter.done;
          return iter;
        },
      e(arg0) {
          let closure_5 = true;
        },
      f() {
          let tmp = closure_4;
          if (!closure_4) {
            tmp = null == arr.return;
          }
          if (!tmp) {
            arr.return();
          }
          if (closure_5) {
            throw closure_3;
          }
        }
    };
    return obj;
  } else {
    const _Array = Array;
    if (!Array.isArray(Symbol_iterator)) {
      let arr;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          arr = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const _Object = Object;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          class F {
            constructor() {
              return;
            }
          }
          let name = substr;
          if (tmp2) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp2 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      _exports = arr;
      if (!arr) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        class F {
          constructor() {
            return;
          }
        }
        throw typeError;
      }
    }
    if (_exports) {
      closure_0 = _exports;
    }
    let closure_2 = 0;
    class F {
      constructor() {
        return;
      }
    }
    obj = {
      s: F,
      n() {
          if (closure_2 >= length.length) {
            let obj = { done: true };
          } else {
            obj = { done: false };
            closure_2 = tmp3 + 1;
            obj.value = length[+closure_2];
          }
          return obj;
        },
      e(arg0) {
          throw arg0;
        },
      f: F
    };
    return obj;
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arg0[num];
  }
  return array;
}
function noop() {

}
function serialize(obj) {
  if (obj.isObject(obj)) {
    const items = [];
    for (const key10012 in arg0) {
      let tmp4 = key10012;
      let tmp5 = closure_0;
      let tmp6 = closure_2;
      let obj2 = closure_0(closure_2[0]);
      if (!obj2.hasOwn(arg0, key10012)) {
        continue;
      } else {
        let tmp2 = closure_12;
        let tmp3 = closure_12(items, key10012, arg0[key10012]);
        // continue
      }
      continue;
    }
    return items.join("&");
  } else {
    return obj;
  }
  obj = require(dependencyMap[0]);
}
function pushEncodedKeyValuePair(arr) {
  let done;
  if (undefined !== arg2) {
    if (null !== tmp) {
      const _Array = Array;
      if (Array.isArray(tmp)) {
        const obj2 = _createForOfIteratorHelper(arg2);
        obj2.s();
        const iter = obj2.n();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let tmp26 = closure_12;
            let tmp27 = arr;
            let tmp28 = arg1;
            let tmp29 = iter2;
            let tmp30 = closure_12(arr, arg1, iter2.value);
            let tmp31 = obj2;
            let iter3 = obj2.n();
            iter2 = iter3;
            done = iter3.done;
          } while (!done);
        }
        obj2.f();
        while (true) {
          let tmp32 = obj2;
          let eResult = obj2.e(__exception);
          // continue
        }
      } else {
        if (obj.isObject(tmp)) {
          for (const key10044 in tmp) {
            let tmp39 = closure_0;
            let tmp40 = closure_2;
            let tmp38 = key10044;
            let obj3 = closure_0(closure_2[0]);
            let tmp41 = arg2;
            if (!obj3.hasOwn(tmp, key10044)) {
              continue;
            } else {
              let tmp17 = closure_12;
              let tmp18 = arg0;
              let tmp19 = arg1;
              let _HermesInternal = HermesInternal;
              let str5 = "";
              let str6 = "[";
              let tmp20 = key10044;
              let str7 = "]";
              let tmp21 = arg2;
              let tmp22 = closure_12(arg0, "" + arg1 + "[" + tmp38 + "]", tmp[key10044]);
              // continue
            }
            continue;
          }
        } else {
          const _encodeURI2 = encodeURI;
          const _encodeURIComponent = encodeURIComponent;
          const text = `${encodeURI(arg1)}=`;
          arr.push(`${encodeURI(arg1)}=` + encodeURIComponent(tmp));
        }
        const obj = require(dependencyMap[0]);
      }
    } else {
      const _encodeURI = encodeURI;
      arr.push(encodeURI(arg1));
    }
  }
}
function parseString(str) {
  const obj = {};
  const parts = str.split("&");
  for (let num = 0; num < length; num = num + 1) {
    let arr2 = parts[num];
    let index = arr2.indexOf("=");
    if (-1 === index) {
      let _decodeURIComponent3 = decodeURIComponent;
      obj[decodeURIComponent(arr2)] = "";
    } else {
      let _decodeURIComponent = decodeURIComponent;
      let _decodeURIComponent2 = decodeURIComponent;
      let decodeURIComponentResult = decodeURIComponent(arr2.slice(0, index));
      obj[decodeURIComponentResult] = decodeURIComponent(arr2.slice(index + 1));
    }
  }
  return obj;
}
function isJSON(type) {
  return /[/+]json($|[^-\w])/i.test(type);
}
class Response {
  constructor(arg0) {
    self = this;
    this.req = global;
    this.xhr = this.req.xhr;
    if ("HEAD" === this.req.method) {
      responseText = null;
      self.text = responseText;
      self.statusText = self.req.xhr.statusText;
      num = self.xhr.status;
      num2 = 1223;
      if (1223 === num) {
        num = 204;
      }
      _setStatusPropertiesResult = self._setStatusProperties(num);
      xhr = self.xhr;
      str3 = xhr.getAllResponseHeaders();
      parts = str3.split(/\r?\n/);
      obj = {};
      length = parts.length;
      num3 = 0;
      num4 = 1;
      str4 = ":";
      num5 = -1;
      for (let num6 = 0; num6 < length; num6 = num6 + 1) {
        arr2 = parts[num6];
        index = arr2.indexOf(":");
        if (-1 !== index) {
          str5 = require("module_0");
          tmp5 = trim;
          formatted = str5.toLowerCase();
          obj[formatted] = trim(arr2.slice(index + 1));
        }
      }
      self.headers = obj;
      ({ headers: self.header, xhr: xhr2 } = self);
      str6 = "content-type";
      self.header.content-type = xhr2.getResponseHeader("content-type");
      _setHeaderPropertiesResult = self._setHeaderProperties(self.header);
      tmp7 = null;
      if (null === self.text) {
        if (global._responseType) {
          self.body = self.xhr.response;
        }
        return;
      }
      tmp8 = null;
      if ("HEAD" === self.req.method) {
        self.body = null;
      } else {
        if (self.text) {
          response = self.text;
        } else {
          response = self.xhr.response;
        }
        _parseBodyResult = self._parseBody(response);
      }
    } else {
      str = "";
      if ("" !== self.xhr.responseType) {
        str2 = "text";
      }
    }
    responseText = self.xhr.responseText;
    return;
  }
  _parseBody(arg0) {
    self = this;
    application/json = module.parse[this.type];
    if (this.req._parser) {
      req = self.req;
      _parserResult = req._parser(self, global);
    } else {
      tmp = !application_json;
      if (tmp) {
        tmp2 = isJSON;
        tmp = isJSON(self.type);
      }
      if (tmp) {
        tmp3 = module;
        application/json = module.parse.application/json;
      }
      _parserResult = null;
      if (application_json) {
        _parserResult = null;
        if (global) {
          num = 0;
          if (global.length > 0) {
            _parserResult = application_json(global);
          } else {
            tmp5 = globalThis;
            _Object = Object;
            _parserResult = null;
          }
        }
      }
    }
    return _parserResult;
  }
  toError() {
    ({ method, url } = this.req);
    error = new Error("cannot " + method + " " + url + " (" + this.status + ")");
    error.status = this.status;
    error.method = method;
    error.url = url;
    return error;
  }
}
class Request {
  constructor(arg0, arg1) {
    self = this;
    require = this;
    self._query = this._query || [];
    self.method = global;
    self.url = require;
    self.header = {};
    self._header = {};
    onResult = self.on("end", () => {
      const tmp2 = new closure_14(self);
      self.emit("response", tmp2);
      if (!self._isResponseOK(tmp2)) {
        let _Error = Error;
        const statusText = tmp3.statusText;
        let text = statusText;
        if (!statusText) {
          text = tmp3.text;
        }
        let str = text;
        if (!text) {
          str = "Unsuccessful HTTP response";
        }
        const prototype = _Error.prototype;
        _Error = new _Error(str);
      }
      while (true) {
        let tmp11 = _Error;
        if (_Error) {
          let tmp15 = _Error;
          let tmp16 = null;
          _Error.original = null;
          let tmp17 = tmp2;
          _Error.response = tmp3;
          let status = _Error.status;
          let status2 = status;
          if (!status) {
            let tmp18 = tmp2;
            status2 = tmp3.status;
          }
          _Error.status = status2;
          let tmp19 = self;
          let callbackResult = self.callback(_Error, tmp2);
        } else {
          let tmp12 = self;
          let tmp13 = tmp2;
          let callbackResult1 = self.callback(null, tmp3);
        }
      }
    });
    return;
  }
  type(arg0) {
    self = this;
    tmp = module.types[global];
    if (!tmp) {
      tmp = global;
    }
    result = this.set("Content-Type", tmp);
    return self;
  }
  accept(arg0) {
    self = this;
    tmp = module.types[global];
    if (!tmp) {
      tmp = global;
    }
    result = this.set("Accept", tmp);
    return self;
  }
  auth(arg0, arg1, arg2) {
    str = require;
    tmp = importDefault;
    self = this;
    if (1 === arguments.length) {
      str = "";
    }
    tmp2 = "object" === typeof str;
    if (tmp2) {
      tmp3 = null;
      tmp2 = null !== str;
    }
    str2 = str;
    if (tmp2) {
      str2 = "";
      tmp = str;
    }
    if (!tmp) {
      obj = {};
      tmp4 = globalThis;
      _btoa = btoa;
      str3 = "auto";
      str4 = "function";
      if ("function" === typeof btoa) {
        str3 = "basic";
      }
      obj.type = str3;
      tmp = obj;
    }
    tmp5 = tmp.encoder || (arg0) => {
      if ("function" === typeof btoa) {
        const _btoa = btoa;
        return btoa(arg0);
      } else {
        const _Error = Error;
        const error = new Error("Cannot use basic auth, btoa is not a function");
        throw error;
      }
    };
    return self._auth(global, str2, tmp, tmp5);
  }
  query(arg0) {
    self = this;
    tmp = global;
    if ("string" !== typeof global) {
      tmp2 = serialize;
      tmp = serialize(global);
    }
    if (tmp) {
      _query = self._query;
      arr = _query.push(tmp);
    }
    return self;
  }
  attach(arg0, arg1, arg2) {
    name = importDefault;
    self = this;
    if (require) {
      if (self._data) {
        tmp3 = globalThis;
        _Error = Error;
        prototype = Error.prototype;
        tmp4 = new.target;
        str = "superagent can't mix .send() and .attach()";
        tmp5 = new.target;
        error = new Error("superagent can't mix .send() and .attach()");
        tmp7 = error;
        throw error;
      } else {
        _getFormDataResult = self._getFormData();
        if (!name) {
          name = require.name;
        }
        tmp = global;
        appendResult = _getFormDataResult.append(global, require, name);
      }
    }
    return self;
  }
  _getFormData() {
    self = this;
    if (!this._formData) {
      tmp = self;
      _FormData = self.FormData;
      prototype = _FormData.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      _FormData = new _FormData();
      tmp5 = _FormData;
      self._formData = _FormData;
    }
    return self._formData;
  }
  callback(arg0, arg1) {
    self = this;
    if (this._shouldRetry(global, require)) {
      return self._retry();
    } else {
      clearTimeoutResult = self.clearTimeout();
      if (global) {
        if (self._maxRetries) {
          num = 1;
          global.retries = self._retries - 1;
        }
        str = "error";
        emitResult = self.emit("error", global);
      }
      _callbackResult = self._callback(global, require);
      return;
    }
  }
  crossDomainError() {
    error = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
    error.crossDomain = true;
    ({ status: tmp.status, method: tmp.method, url: tmp.url } = this);
    callbackResult = this.callback(error);
    return;
  }
  agent() {
    warnResult = console.warn("This is not supported in browser version of superagent");
    return this;
  }
  write() {
    error = new Error("Streaming is not supported in browser version of superagent");
    throw error;
  }
  _isHost(arg0) {
    tmp = global;
    if (global) {
      str = "object";
      tmp = "object" === typeof global;
    }
    if (tmp) {
      tmp2 = globalThis;
      _Array = Array;
      tmp = !Array.isArray(global);
    }
    if (tmp) {
      tmp3 = globalThis;
      _Object = Object;
      toString = Object.prototype.toString;
      str2 = "[object Object]";
      tmp = "[object Object]" !== toString.call(global);
    }
    return tmp;
  }
  end(arg0) {
    tmp = global;
    self = this;
    if (this._endCalled) {
      tmp2 = globalThis;
      _console = console;
      str = "Warning: .end() was called twice. This is not supported in superagent";
      warnResult = console.warn("Warning: .end() was called twice. This is not supported in superagent");
    }
    self._endCalled = true;
    if (!tmp) {
      tmp = noop;
    }
    self._callback = tmp;
    _finalizeQueryStringResult = self._finalizeQueryString();
    _endResult = self._end();
    return;
  }
  _setUploadTimeout() {
    self = this;
    require = this;
    tmp = this._uploadTimeout && !self._uploadTimeoutTimer;
    if (tmp) {
      tmp2 = globalThis;
      _setTimeout = setTimeout;
      self._uploadTimeoutTimer = setTimeout(() => {
        self._timeoutError("Upload timeout of ", self._uploadTimeout, "ETIMEDOUT");
      }, self._uploadTimeout);
    }
    return;
  }
  _end() {
    self = this;
    if (this._aborted) {
      tmp46 = globalThis;
      _Error = Error;
      prototype = Error.prototype;
      tmp47 = new.target;
      str10 = "The request has been aborted even before .end() was called";
      tmp48 = new.target;
      error = new Error("The request has been aborted even before .end() was called");
      tmp50 = error;
      return self.callback(error);
    } else {
      require = self;
      tmp = module;
      self.xhr = module.getXHR();
      xhr = self.xhr;
      obj = xhr;
      module = xhr;
      tmp2 = self._formData || self._data;
      result = tmp2;
      _setTimeoutsResult = self._setTimeouts();
      tmp5 = xhr;
      str = "readystatechange";
      method = obj.addEventListener("readystatechange", () => {
        const readyState = xhr.readyState;
        let _responseTimeoutTimer = readyState >= 2;
        if (_responseTimeoutTimer) {
          _responseTimeoutTimer = self._responseTimeoutTimer;
        }
        if (_responseTimeoutTimer) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._responseTimeoutTimer);
        }
        if (4 === readyState) {
          while (true) {
            let obj = self;
            if (tmp6) {
              let str = "end";
              let emitResult = obj.emit("end");
            } else if (!obj.timedout) {
              let tmp7 = self;
              if (!self._aborted) {
                let tmp8 = self;
                return self.crossDomainError();
              }
            }
          }
        }
      });
      handleProgress = function handleProgress(direction, total) {
        if (total.total > 0) {
          total.percent = total.loaded / total.total * 100;
          if (100 === total.percent) {
            const _clearTimeout = clearTimeout;
            clearTimeout(self._uploadTimeoutTimer);
          }
        }
        total.direction = direction;
        self.emit("progress", total);
      };
      str2 = "progress";
      if (self.hasListeners("progress")) {
        tmp6 = xhr;
        tmp7 = handleProgress;
        tmp8 = null;
        str3 = "download";
        method = obj.addEventListener("progress", handleProgress.bind(null, "download"));
        if (obj.upload) {
          tmp9 = xhr;
          method = obj.upload;
          tmp10 = handleProgress;
          str4 = "upload";
          listener = method.addEventListener("progress", handleProgress.bind(null, "upload"));
        }
      }
      while (true) {
        tmp12 = xhr;
        if (!obj.upload) {
          break;
        } else {
          _setUploadTimeoutResult = self._setUploadTimeout();
          // break
        }
        if (self.username) {
          if (self.password) {
            tmp16 = xhr;
            flag2 = true;
            tmp17 = obj;
            openResult = obj.open(self.method, self.url, true, self.username, self.password);
          }
          if (self._withCredentials) {
            tmp19 = xhr;
            flag3 = true;
            obj.withCredentials = true;
          }
          if (!self._formData) {
            str5 = "GET";
            if ("GET" !== self.method) {
              str11 = "HEAD";
              if ("HEAD" !== self.method) {
                tmp51 = result;
                str12 = "string";
                if ("string" !== typeof result) {
                  tmp52 = result;
                  if (!self._isHost(result)) {
                    str6 = self._header.content-type;
                    _serializer = self._serializer;
                    tmp20 = _serializer;
                    if (!_serializer) {
                      tmp21 = module;
                      tmp22 = str6;
                      str7 = "";
                      if (str6) {
                        tmp23 = str6;
                        str8 = ";";
                        num = 0;
                        str7 = str6.split(";")[0];
                      }
                      tmp20 = module.serialize[str7];
                    }
                    tmp24 = tmp20;
                    application/json = tmp20;
                    tmp25 = !tmp20;
                    tmp26 = tmp25;
                    if (tmp25) {
                      tmp27 = isJSON;
                      tmp26 = isJSON(str6);
                    }
                    if (tmp26) {
                      tmp28 = module;
                      application/json = module.serialize.application/json;
                    }
                    tmp29 = application_json;
                    if (application_json) {
                      tmp30 = application_json;
                      tmp31 = result;
                      result = application_json(result);
                    }
                  }
                }
              }
            }
          }
          num2 = 0;
          tmp32 = null;
          for (const key10095 in self.header) {
            tmp53 = key10095;
            tmp54 = key10095;
            tmp55 = null !== self.header[key10095];
            hasOwnResult = tmp55;
            if (!tmp55) {
            } else {
              tmp33 = closure_0;
              tmp34 = closure_2;
              obj2 = closure_0(closure_2[0]);
              tmp35 = tmp53;
              hasOwnResult = obj2.hasOwn(self.header, tmp54);
            }
            if (!hasOwnResult) {
              continue;
            } else {
              tmp37 = xhr;
              tmp38 = tmp53;
              setRequestHeaderResult = obj.setRequestHeader(tmp54, self.header[tmp54]);
              // continue
            }
            continue;
          }
          if (self._responseType) {
            tmp40 = xhr;
            obj.responseType = self._responseType;
          }
          str9 = "request";
          emitResult = self.emit("request", self);
          tmp42 = xhr;
          tmp43 = result;
          tmp44 = null;
          if (undefined !== result) {
            tmp44 = result;
          }
          sendResult = obj.send(tmp44);
          return;
        }
        tmp14 = xhr;
        method = self.method;
        flag = true;
        openResult1 = obj.open(method, self.url, true);
      }
    }
    return;
  }
}
function del(arg0, arg1, arg2) {
  let tmp = arg2;
  const obj = _exports("DELETE", arg0);
  let tmp2 = arg1;
  if ("function" === typeof arg1) {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
}
if ("undefined" !== typeof window) {
  const _window = window;
  let self = window;
} else {
  const _self = self;
  if ("undefined" === typeof self) {
    const _console = console;
    console.warn("Using browser-only version of superagent in non-browser environment");
    self = undefined;
  } else {
    const _self2 = self;
  }
}
_exports = module.exports;
_exports.Request = Request;
_exports.getXHR = () => {
  if (self.XMLHttpRequest) {
    let _XMLHttpRequest = self.XMLHttpRequest;
    const prototype2 = _XMLHttpRequest.prototype;
    _XMLHttpRequest = new _XMLHttpRequest();
    return _XMLHttpRequest;
  } else {
    const _Error = Error;
    const error = new Error("Browser-only version of superagent could not find XHR");
    throw error;
  }
};
function trim(str) {
  return str.trim();
}
_exports.serializeObject = serialize;
_exports.parseString = parseString;
_exports.types = {};
let obj = { application/x-www-form-urlencoded: require(dependencyMap[1]).stringify, application/json: require(dependencyMap[2]) };
_exports.serialize = obj;
obj = { application/x-www-form-urlencoded: parseString, application/json: JSON.parse };
_exports.parse = obj;
let num = 0;
const _module = require(dependencyMap[0]);
_module.mixin(Response.prototype, require(dependencyMap[3]).prototype);
_exports.Response = Response;
require(dependencyMap[4])(Request.prototype);
const _module1 = require(dependencyMap[0]);
_module1.mixin(Request.prototype, require(dependencyMap[5]).prototype);
Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca;
Request.prototype.pipe = Request.prototype.write;
_exports.agent = () => {
  let tmp = require(dependencyMap[6]);
  tmp = new tmp();
  return tmp;
};
let closure_6 = 0;
const items = [];
if (0 < items.length) {
  do {
    let tmp5 = function _loop() {
      const require = str;
      require(dependencyMap[6]).prototype[items[closure_6].toLowerCase()] = function(arg0, arg1) {
        const request = new _Request.Request(str, arg0);
        this._setDefaults(request);
        if (arg1) {
          request.end(arg1);
        }
        return request;
      };
    }();
    num = num + 1;
    closure_6 = num;
    length = items.length;
  } while (num < length);
}
require(dependencyMap[6]).prototype.del = require(dependencyMap[6]).prototype.delete;
_exports.get = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("GET", arg0);
  let tmp2 = arg1;
  if ("function" === typeof arg1) {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    const query = obj.query(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.head = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("HEAD", arg0);
  let tmp2 = arg1;
  if ("function" === typeof arg1) {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    const query = obj.query(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.options = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("OPTIONS", arg0);
  let tmp2 = arg1;
  if ("function" === typeof arg1) {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.del = del;
_exports.delete = del;
_exports.patch = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("PATCH", arg0);
  let tmp2 = arg1;
  if ("function" === typeof arg1) {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.post = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("POST", arg0);
  let tmp2 = arg1;
  if ("function" === typeof arg1) {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};
_exports.put = (arg0, arg1, arg2) => {
  let tmp = arg2;
  const obj = _exports("PUT", arg0);
  let tmp2 = arg1;
  if ("function" === typeof arg1) {
    tmp2 = null;
    tmp = arg1;
  }
  if (tmp2) {
    obj.send(tmp2);
  }
  if (tmp) {
    obj.end(tmp);
  }
  return obj;
};

export default (arg0, arg1) => {
  if ("function" === typeof arg1) {
    let _Request3 = _exports.Request;
    const prototype3 = _Request3.prototype;
    _Request3 = new _Request3("GET", arg0);
    let endResult = _Request3.end(arg1);
  } else if (1 === arguments.length) {
    const _Request2 = _exports.Request;
    const prototype2 = _Request2.prototype;
    endResult = new _Request2("GET", arg0);
  } else {
    const _Request = _exports.Request;
    const prototype = _Request.prototype;
    endResult = new _Request(arg0, arg1);
  }
  return endResult;
};
