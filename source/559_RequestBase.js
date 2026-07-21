// Module ID: 559
// Function ID: 6734
// Name: RequestBase
// Dependencies: []

// Module 559 (RequestBase)
class RequestBase {
  constructor() {
    return;
  }
  clearTimeout() {
    clearTimeoutResult = clearTimeout(this._timer);
    clearTimeoutResult1 = clearTimeout(this._responseTimeoutTimer);
    clearTimeoutResult2 = clearTimeout(this._uploadTimeoutTimer);
    delete r0._timer;
    delete r0._responseTimeoutTimer;
    delete r0._uploadTimeoutTimer;
    return this;
  }
  parse(arg0) {
    this._parser = global;
    return this;
  }
  responseType(arg0) {
    this._responseType = global;
    return this;
  }
  serialize(arg0) {
    this._serializer = global;
    return this;
  }
  timeout(arg0) {
    self = this;
    if (global) {
      str = "object";
      if ("object" === typeof global) {
        tmp2 = global;
        tmp3 = globalThis;
        str2 = "Unknown timeout option";
        str3 = "upload";
        str4 = "response";
        str5 = "deadline";
        num = 0;
        for (const key10004 in arg0) {
          tmp4 = key10004;
          tmp5 = closure_0;
          tmp6 = closure_1;
          obj = closure_0(closure_1[0]);
          if (!obj.hasOwn(arg0, key10004)) {
            continue;
          } else {
            if ("deadline" === key10004) {
              self._timeout = arg0.deadline;
              // continue
            } else {
              if ("response" === key10004) {
                self._responseTimeout = arg0.response;
                // continue
              } else {
                if ("upload" === key10004) {
                  self._uploadTimeout = arg0.upload;
                  // continue
                } else {
                  _console = console;
                  warnResult = console.warn("Unknown timeout option", key10004);
                  // continue
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        return self;
      }
    }
    self._timeout = global;
    self._responseTimeout = 0;
    self._uploadTimeout = 0;
    return self;
  }
  retry(arg0, arg1) {
    num = global;
    self = this;
    tmp = 0 !== arguments.length;
    if (tmp) {
      flag = true;
      tmp = true !== num;
    }
    if (!tmp) {
      num = 1;
    }
    if (num <= 0) {
      num = 0;
    }
    self._maxRetries = num;
    self._retries = 0;
    self._retryCallback = require;
    return self;
  }
  _shouldRetry(arg0, arg1) {
    self = this;
    if (this._maxRetries) {
      tmp = +self._retries;
      self._retries = tmp + 1;
      if (tmp < self._maxRetries) {
        if (self._retryCallback) {
          tmp2 = global;
          tmp3 = require;
          _retryCallbackResult = self._retryCallback(global, require);
          flag = true;
          if (true === _retryCallbackResult) {
            return true;
          } else {
            tmp6 = _retryCallbackResult;
            flag2 = false;
            if (false === tmp5) {
              return false;
            }
          }
        }
        while (true) {
          tmp7 = require;
          if (!require) {
            break;
          } else {
            tmp8 = require;
            if (!require.status) {
              break;
            } else {
              tmp9 = f6741;
              if (!f6741.has(require.status)) {
                break;
              } else {
                flag7 = true;
                return true;
              }
            }
          }
          tmp10 = global;
          if (global) {
            tmp11 = global;
            if (global.code) {
              tmp12 = closure_2;
              tmp13 = global;
              if (closure_2.has(global.code)) {
                flag6 = true;
                return true;
              }
            }
            tmp14 = global;
            if (global.timeout) {
              tmp15 = global;
              str = "ECONNABORTED";
              if ("ECONNABORTED" === global.code) {
                flag5 = true;
                return true;
              }
            }
            if (global.crossDomain) {
              flag4 = true;
              return true;
            }
          }
          flag3 = false;
          return false;
        }
      }
    }
    return false;
  }
  _retry() {
    self = this;
    clearTimeoutResult = this.clearTimeout();
    if (this.req) {
      tmp2 = null;
      self.req = null;
      self.req = self.request();
    }
    self._aborted = false;
    self.timedout = false;
    self.timedoutError = null;
    return self._end();
  }
  then(arg0, arg1) {
    self = this;
    require = this;
    if (!this._fullfilledPromise) {
      dependencyMap = self;
      if (self._endCalled) {
        tmp = globalThis;
        _console = console;
        str = "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises";
        warnResult = console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
      }
      tmp3 = globalThis;
      _Promise = Promise;
      prototype = Promise.prototype;
      tmp4 = new.target;
      tmp5 = new.target;
      promise = new Promise((arg0, arg1) => {
        let self = arg0;
        self = arg1;
        self.on("abort", (self) => {
          if (!self._maxRetries) {
            if (self.timedout) {
              if (self.timedoutError) {
                arg1(self.timedoutError);
              }
            }
            const _Error = Error;
            const error = new Error("Aborted");
            error.code = "ABORTED";
            ({ status: tmp7.status, method: tmp7.method, url: tmp7.url } = self);
            arg1(error);
          }
        });
        self.end((arg0, arg1) => {
          if (arg0) {
            arg1(arg0);
          } else {
            arg0(arg1);
          }
        });
      });
      tmp7 = promise;
      self._fullfilledPromise = promise;
    }
    _fullfilledPromise = self._fullfilledPromise;
    return _fullfilledPromise.then(global, require);
  }
  catch(arg0) {
    return this.then(undefined, global);
  }
  use(arg0) {
    tmp = global(this);
    return this;
  }
  ok(arg0) {
    self = this;
    if ("function" !== typeof global) {
      tmp = globalThis;
      _Error = Error;
      prototype = Error.prototype;
      tmp2 = new.target;
      str = "Callback required";
      tmp3 = new.target;
      error = new Error("Callback required");
      tmp5 = error;
      throw error;
    } else {
      self._okCallback = global;
      return self;
    }
  }
  _isResponseOK(arg0) {
    self = this;
    tmp = !global;
    if (tmp) {
      return !tmp;
    } else {
      if (self._okCallback) {
        _okCallbackResult = self._okCallback(global);
      } else {
        num = 200;
        _okCallbackResult = global.status >= 200;
        if (_okCallbackResult) {
          num2 = 300;
          _okCallbackResult = global.status < 300;
        }
      }
      tmp3 = _okCallbackResult;
    }
    return;
  }
  get(arg0) {
    return this._header[global.toLowerCase(global)];
  }
  set(arg0, arg1) {
    self = this;
    obj = require(dependencyMap[0]);
    if (obj.isObject(global)) {
      tmp = global;
      for (const key10017 in arg0) {
        tmp3 = key10017;
        tmp4 = closure_0;
        tmp5 = closure_1;
        obj2 = closure_0(closure_1[0]);
        if (!obj2.hasOwn(arg0, key10017)) {
          continue;
        } else {
          result = self.set(key10017, arg0[key10017]);
          // continue
        }
        continue;
      }
      return self;
    } else {
      self._header[global.toLowerCase()] = require;
      self.header[global] = require;
      return self;
    }
  }
  unset(arg0) {
    formatted = global.toLowerCase();
    delete r3[r1];
    delete r1[r2];
    return this;
  }
  field(arg0, arg1, arg2) {
    self = this;
    if (null == global) {
      tmp21 = globalThis;
      _Error3 = Error;
      prototype3 = Error.prototype;
      tmp22 = new.target;
      str4 = ".field(name, val) name can not be empty";
      tmp23 = new.target;
      error = new Error(".field(name, val) name can not be empty");
      tmp25 = error;
      throw error;
    } else if (self._data) {
      tmp16 = globalThis;
      _Error2 = Error;
      prototype2 = Error.prototype;
      tmp17 = new.target;
      str3 = ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()";
      tmp18 = new.target;
      error1 = new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
      tmp20 = error1;
      throw error1;
    } else {
      tmp = require;
      tmp2 = dependencyMap;
      num = 0;
      obj = require(dependencyMap[0]);
      if (obj.isObject(global)) {
        tmp14 = global;
        for (const key10041 in arg0) {
          tmp29 = key10041;
          tmp30 = closure_0;
          tmp31 = closure_1;
          obj3 = closure_0(closure_1[0]);
          if (!obj3.hasOwn(arg0, key10041)) {
            continue;
          } else {
            fieldResult = self.field(key10041, arg0[key10041]);
            // continue
          }
          continue;
        }
        return self;
      } else {
        tmp3 = globalThis;
        _Array = Array;
        if (Array.isArray(require)) {
          tmp12 = require;
          for (const key10035 in arg1) {
            tmp26 = key10035;
            tmp27 = closure_0;
            tmp28 = closure_1;
            obj2 = closure_0(closure_1[0]);
            if (!obj2.hasOwn(arg1, key10035)) {
              continue;
            } else {
              fieldResult1 = self.field(arg0, arg1[key10035]);
              // continue
            }
            continue;
          }
          return self;
        } else if (null == require) {
          _Error = Error;
          prototype = Error.prototype;
          tmp8 = new.target;
          str2 = ".field(name, val) val can not be empty";
          tmp9 = new.target;
          error2 = new Error(".field(name, val) val can not be empty");
          tmp11 = error2;
          throw error2;
        } else {
          str = "boolean";
          StringResult = require;
          if ("boolean" === typeof require) {
            _String = String;
            StringResult = String(require);
          }
          _getFormDataResult = self._getFormData();
          append = _getFormDataResult.append;
          if (importDefault) {
            appendResult = append(global, StringResult, importDefault);
          } else {
            appendResult1 = append(global, StringResult);
          }
          return self;
        }
      }
    }
  }
  abort() {
    self = this;
    if (this._aborted) {
      return self;
    } else {
      flag = true;
      self._aborted = true;
      if (self.xhr) {
        xhr = self.xhr;
        abortResult = xhr.abort();
      }
      if (self.req) {
        tmp2 = require;
        tmp3 = dependencyMap;
        num = 1;
        obj = require(dependencyMap[1]);
        tmp4 = globalThis;
        _process = process;
        str = "v13.0.0";
        if (obj.gte(process.version, "v13.0.0")) {
          tmp5 = require;
          tmp6 = dependencyMap;
          obj2 = require(dependencyMap[1]);
          _process2 = process;
          str2 = "v14.0.0";
          if (obj2.lt(process.version, "v14.0.0")) {
            _Error = Error;
            prototype = Error.prototype;
            tmp10 = new.target;
            str4 = "Superagent does not work in v13 properly with abort() due to Node.js core changes";
            tmp11 = new.target;
            error = new Error("Superagent does not work in v13 properly with abort() due to Node.js core changes");
            tmp13 = error;
            throw error;
          }
        }
        req = self.req;
        abortResult1 = req.abort();
      }
      clearTimeoutResult = self.clearTimeout();
      str3 = "abort";
      emitResult = self.emit("abort");
      return self;
    }
  }
  _auth(arg0, arg1, arg2, arg3) {
    self = this;
    type = importDefault.type;
    if ("basic" === type) {
      tmp = globalThis;
      _HermesInternal = HermesInternal;
      str3 = "";
      str4 = ":";
      tmp2 = importAll;
      _HermesInternal2 = HermesInternal;
      str5 = "Basic ";
      str6 = "Authorization";
      result = self.set("Authorization", "Basic " + importAll("" + global + ":" + require));
    } else {
      str = "auto";
      if ("auto" === type) {
        self.username = global;
        self.password = require;
      } else {
        str2 = "bearer";
        if ("bearer" === type) {
          tmp4 = globalThis;
          _HermesInternal3 = HermesInternal;
          str7 = "Bearer ";
          str8 = "Authorization";
          result1 = self.set("Authorization", "Bearer " + global);
        }
      }
    }
    return self;
  }
  withCredentials(arg0) {
    flag = global;
    self = this;
    if (undefined === global) {
      flag = true;
    }
    self._withCredentials = flag;
    return self;
  }
  redirects(arg0) {
    this._maxRedirects = global;
    return this;
  }
  maxResponseSize(arg0) {
    self = this;
    if ("number" !== typeof global) {
      tmp = globalThis;
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp2 = new.target;
      str = "Invalid argument";
      tmp3 = new.target;
      typeError = new TypeError("Invalid argument");
      tmp5 = typeError;
      throw typeError;
    } else {
      self._maxResponseSize = global;
      return self;
    }
  }
  toJSON() {
    obj = { method: this.method, url: this.url, data: this._data, headers: this._header };
    return obj;
  }
  send(arg0) {
    self = this;
    obj = require(dependencyMap[0]);
    isObjectResult = obj.isObject(global);
    content-type = this._header.content-type;
    if (this._formData) {
      tmp36 = globalThis;
      _Error4 = Error;
      prototype4 = Error.prototype;
      tmp37 = new.target;
      str13 = ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()";
      tmp38 = new.target;
      error = new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
      tmp40 = error;
      throw error;
    } else {
      if (isObjectResult) {
        if (!self._data) {
          tmp3 = globalThis;
          _Array = Array;
          if (Array.isArray(global)) {
            self._data = [];
          } else if (!self._isHost(global)) {
            self._data = {};
          }
        }
        if (isObjectResult) {
          tmp4 = require;
          tmp5 = dependencyMap;
          obj2 = require(dependencyMap[0]);
          if (obj2.isObject(self._data)) {
            tmp19 = global;
            str9 = "bigint";
            tmp7 = content_type;
            keys = Object.keys();
            if (keys !== undefined) {
              tmp7 = content_type;
              tmp21 = keys[tmp];
              while (tmp21 !== undefined) {
                tmp41 = tmp21;
                if ("bigint" === typeof global[tmp21]) {
                  if (!global[tmp21].toJSON) {
                    tmp22 = globalThis;
                    _Error2 = Error;
                    prototype2 = Error.prototype;
                    tmp23 = new.target;
                    str10 = "Cannot serialize BigInt value to json";
                    tmp24 = new.target;
                    error1 = new Error("Cannot serialize BigInt value to json");
                    tmp26 = error1;
                    throw error1;
                  }
                }
                tmp27 = require;
                tmp28 = dependencyMap;
                obj3 = require(dependencyMap[0]);
                if (!obj3.hasOwn(global, tmp21)) {
                  continue;
                } else {
                  self._data[tmp21] = global[tmp21];
                  // continue
                }
                continue;
              }
            }
          }
          tmp29 = !isObjectResult || self._isHost(global) || tmp7;
          if (!tmp29) {
            str11 = "json";
            typeResult = self.type("json");
          }
          return self;
        }
        tmp6 = typeof global;
        str = "bigint";
        if ("bigint" === tmp6) {
          tmp14 = globalThis;
          _Error = Error;
          prototype = Error.prototype;
          tmp15 = new.target;
          str8 = "Cannot send value of type BigInt";
          tmp16 = new.target;
          error2 = new Error("Cannot send value of type BigInt");
          tmp18 = error2;
          throw error2;
        } else {
          str14 = "string";
          if ("string" === tmp6) {
            if (!content_type) {
              str2 = "form";
              typeResult1 = self.type("form");
            }
            str3 = self._header.content-type;
            trimmed = str3;
            if (str3) {
              str4 = str3.toLowerCase();
              trimmed = str4.trim();
            }
            str5 = "application/x-www-form-urlencoded";
            if ("application/x-www-form-urlencoded" === trimmed) {
              combined = global;
              if (self._data) {
                tmp13 = globalThis;
                _HermesInternal = HermesInternal;
                str6 = "";
                str7 = "&";
                combined = "" + self._data + "&" + global;
              }
              sum = combined;
            } else {
              tmp10 = self._data || "";
              sum = tmp10 + global;
            }
            self._data = sum;
            tmp7 = trimmed;
          } else {
            self._data = global;
            tmp7 = content_type;
          }
        }
      }
      if (global) {
        if (self._data) {
          if (self._isHost(self._data)) {
            tmp31 = globalThis;
            _Error3 = Error;
            prototype3 = Error.prototype;
            tmp32 = new.target;
            str12 = "Can't merge these send calls";
            tmp33 = new.target;
            error3 = new Error("Can't merge these send calls");
            tmp35 = error3;
            throw error3;
          }
        }
      }
    }
    return;
  }
  sortQuery(arg0) {
    self = this;
    self._sort = undefined === global || global;
    return self;
  }
  _finalizeQueryString() {
    self = this;
    _query = this._query;
    joined = _query.join("&");
    if (joined) {
      url = self.url;
      str = "?";
      if (url.includes("?")) {
        str = "&";
      }
      self.url = self.url + (str + joined);
    }
    self._query.length = 0;
    if (self._sort) {
      url = self.url;
      str2 = "?";
      index = url.indexOf("?");
      if (index >= 0) {
        url1 = self.url;
        num = 1;
        str3 = url1.slice(index + 1);
        parts = str3.split("&");
        str4 = "function";
        if ("function" === typeof self._sort) {
          sorted = parts.sort(self._sort);
        } else {
          sorted1 = parts.sort();
        }
        url2 = self.url;
        str2 = require("module_0") + str2;
        self.url = str2 + parts.join("&");
      }
    }
    return;
  }
  _appendQueryString() {
    warnResult = console.warn("Unsupported");
    return;
  }
  _timeoutError(arg0, arg1, arg2) {
    self = this;
    if (!this._aborted) {
      tmp = globalThis;
      _Error = Error;
      tmp2 = global;
      _HermesInternal = HermesInternal;
      str = "";
      str2 = "ms exceeded";
      prototype = Error.prototype;
      tmp3 = new.target;
      tmp4 = new.target;
      error = new Error("" + global + require + "ms exceeded");
      tmp6 = error;
      error.timeout = require;
      str3 = "ECONNABORTED";
      error.code = "ECONNABORTED";
      tmp7 = importDefault;
      error.errno = importDefault;
      flag = true;
      self.timedout = true;
      self.timedoutError = error;
      abortResult = self.abort();
      callbackResult = self.callback(error);
    }
    return;
  }
  _setTimeouts() {
    self = this;
    require = this;
    tmp = this._timeout && !self._timer;
    if (tmp) {
      tmp2 = globalThis;
      _setTimeout = setTimeout;
      self._timer = setTimeout(() => {
        self._timeoutError("Timeout of ", self._timeout, "ETIME");
      }, self._timeout);
    }
    tmp3 = self._responseTimeout && !self._responseTimeoutTimer;
    if (tmp3) {
      tmp4 = globalThis;
      _setTimeout2 = setTimeout;
      self._responseTimeoutTimer = setTimeout(() => {
        self._timeoutError("Response timeout of ", self._responseTimeout, "ETIMEDOUT");
      }, self._responseTimeout);
    }
    return;
  }
}
const set = new Set(["Presto", "Blink", "COLD_START", 3187, 3188, 3189, 3190, 3191]);
const set1 = new Set([null, null, null, null, null, null, null, null, null, null]);
RequestBase.prototype.getHeader = RequestBase.prototype.get;

export default RequestBase;
