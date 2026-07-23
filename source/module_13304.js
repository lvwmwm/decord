// Module ID: 13304
// Function ID: 101812
// Dependencies: [77, 6, 7, 13305, 13306, 13313]

// Module 13304
import _defineProperty from "_defineProperty";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let obj = {
  _mixedIntoPredicates: [],
  is(arg0) {
    if (arg0) {
      if (obj.hasOwn(tmp, require(13305) /* wrapperForImpl */.implSymbol)) {
        if (tmp[require(undefined, 13305) /* wrapperForImpl */.implSymbol] instanceof require(13306) /* URLImpl */.implementation) {
          return true;
        }
      }
      const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
      for (const item10031 of _mixedIntoPredicates) {
        let tmp10 = arg0;
        if (item10031(tmp)) {
          obj2.return();
          let flag = true;
          return true;
        }
      }
      obj = require(13305) /* wrapperForImpl */;
    }
    return false;
  },
  isImpl(getAll) {
    if (getAll) {
      if (getAll instanceof require(13306) /* URLImpl */.implementation) {
        return true;
      } else {
        const wrapperForImplResult = require(13305) /* wrapperForImpl */.wrapperForImpl(getAll);
        const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
        for (const item10022 of _mixedIntoPredicates) {
          let tmp8 = wrapperForImplResult;
          if (item10022(wrapperForImplResult)) {
            obj2.return();
            let flag = true;
            return true;
          }
        }
        const obj = require(13305) /* wrapperForImpl */;
      }
    }
    return false;
  },
  convert(arg0) {
    if (arguments.length > 1) {
      const context = {}.context;
      let str = "The provided value";
      if (undefined !== context) {
        str = context;
      }
      const _exports = module.exports;
      if (_exports.is(arg0)) {
        return require(13305) /* wrapperForImpl */.implForWrapper(arg0);
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("" + str + " is not of type 'URL'.");
        throw typeError;
      }
    }
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[require(undefined, 13305) /* wrapperForImpl */.ctorRegistrySymbol]) {
      const _Error2 = Error;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URL = arg0[require(undefined, 13305) /* wrapperForImpl */.ctorRegistrySymbol].URL;
      if (undefined === _URL) {
        const _Error = Error;
        const error1 = new Error("Internal error: constructor URL is not installed on the passed global object");
        throw error1;
      } else {
        const _Object = Object;
        return obj.setup(Object.create(_URL.prototype), arg0, arg1, arg2);
      }
    }
  },
  createImpl(arg0, arg1, arg2) {
    obj = obj.create(arg0, arg1, arg2);
    obj = require(13305) /* wrapperForImpl */;
    return obj.implForWrapper(obj);
  },
  _internalSetup(arg0) {

  },
  setup(wrapper) {
    if (arguments.length > 2) {
      if (undefined !== arguments[2]) {
        let items = arguments[2];
      }
      if (arguments.length > 3) {
        if (undefined !== arguments[3]) {
          let obj = arguments[3];
        }
        obj.wrapper = wrapper;
        obj._internalSetup(wrapper);
        const _Object = Object;
        obj = {};
        let implementation = require(13306) /* URLImpl */.implementation;
        const prototype = implementation.prototype;
        implementation = new implementation(arg1, items, obj);
        obj.value = implementation;
        obj.configurable = true;
        Object.defineProperty(wrapper, require(13305) /* wrapperForImpl */.implSymbol, obj);
        wrapper[require(undefined, 13305) /* wrapperForImpl */.implSymbol][require(13305) /* wrapperForImpl */.wrapperSymbol] = wrapper;
        if (require(13306) /* URLImpl */.init) {
          require(13306) /* URLImpl */.init(wrapper[require(undefined, 13305) /* wrapperForImpl */.implSymbol], obj);
          const obj3 = require(13306) /* URLImpl */;
        }
        return wrapper;
      }
      obj = {};
    }
    items = [];
  },
  install(arg0) {
    const _require = arg0;
    const tmp = (() => {
      class URL {
        constructor(arg0) {
          tmp = outer2_4(this, URL);
          if (arguments.length < 1) {
            tmp9 = globalThis;
            _TypeError = TypeError;
            str2 = "Failed to construct 'URL': 1 argument required, but only ";
            prototype = TypeError.prototype;
            tmp10 = new.target;
            str3 = " present.";
            tmp11 = new.target;
            typeError = new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
            tmp13 = typeError;
            throw typeError;
          } else {
            items = [];
            num = 0;
            tmp14 = closure_0;
            tmp15 = outer2_2;
            num2 = 5;
            obj3 = closure_0(outer2_2[5]);
            obj = {};
            str4 = "Failed to construct 'URL': parameter 1";
            obj.context = "Failed to construct 'URL': parameter 1";
            arr = items.push(obj3.USVString(arguments[0], obj));
            tmp17 = arguments[1];
            USVStringResult = tmp17;
            if (undefined !== tmp17) {
              tmp2 = closure_0;
              tmp3 = outer2_2;
              obj = closure_0(outer2_2[5]);
              obj1 = {};
              str = "Failed to construct 'URL': parameter 2";
              obj1.context = "Failed to construct 'URL': parameter 2";
              USVStringResult = obj.USVString(tmp17, obj1);
            }
            arr1 = items.push(USVStringResult);
            tmp6 = outer2_6;
            tmp7 = globalThis;
            _Object = Object;
            tmp8 = URL;
            return outer2_6.setup(Object.create(this.constructor.prototype), URL, items);
          }
        }
      }
      let obj = {
        key: "toJSON",
        value: function toJSON() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].toJSON();
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      let items = [obj, , , , , , , , , , , , , ];
      obj = {
        key: "href",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'href' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].href = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[1] = obj;
      obj = {
        key: "toString",
        value: function toString() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "origin",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].origin;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[4] = {
        key: "protocol",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].protocol;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'protocol' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].protocol = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[5] = {
        key: "username",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].username;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'username' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].username = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[6] = {
        key: "password",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].password;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'password' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].password = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[7] = {
        key: "host",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].host;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'host' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].host = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[8] = {
        key: "hostname",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].hostname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'hostname' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].hostname = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[9] = {
        key: "port",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].port;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'port' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].port = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[10] = {
        key: "pathname",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].pathname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'pathname' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].pathname = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[11] = {
        key: "search",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].search;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'search' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].search = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[12] = {
        key: "searchParams",
        get() {
          let self = this;
          self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return _URL(outer2_2[3]).getSameObject(self, "searchParams", () => _self(outer3_2[3]).tryWrapperForImpl(self[_self(undefined, outer3_2[3]).implSymbol].searchParams));
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[13] = {
        key: "hash",
        get() {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              return self[_URL(undefined, outer2_2[3]).implSymbol].hash;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = outer2_1.exports;
            if (_exports.is(self)) {
              let obj = _URL(outer2_2[5]);
              obj = { context: "Failed to set the 'hash' property on 'URL': The provided value" };
              self[_URL(undefined, outer2_2[3]).implSymbol].hash = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      return outer1_5(URL, items);
    })();
    Object.defineProperties(tmp.prototype, _defineProperty({ toJSON: { enumerable: true }, href: { enumerable: true }, toString: { enumerable: true }, origin: { enumerable: true }, protocol: { enumerable: true }, username: { enumerable: true }, password: { enumerable: true }, host: { enumerable: true }, hostname: { enumerable: true }, port: { enumerable: true }, pathname: { enumerable: true }, search: { enumerable: true }, searchParams: { enumerable: true }, hash: { enumerable: true } }, Symbol.toStringTag, { value: "URL", configurable: true }));
    if (undefined === arg0[_require(undefined, 13305).ctorRegistrySymbol]) {
      let _Object = Object;
      arg0[_require(13305).ctorRegistrySymbol] = Object.create(null);
    }
    arg0[_require(undefined, 13305).ctorRegistrySymbol].URL = tmp;
    let obj = { configurable: true, writable: true, value: tmp };
    Object.defineProperty(arg0, "URL", obj);
  }
};

export default obj;
