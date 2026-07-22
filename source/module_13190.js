// Module ID: 13190
// Function ID: 99656
// Dependencies: []

// Module 13190
let closure_3 = require(dependencyMap[0]);
let closure_4 = require(dependencyMap[1]);
let closure_5 = require(dependencyMap[2]);
const obj = {
  _mixedIntoPredicates: [],
  is(arg0) {
    if (arg0) {
      if (obj.hasOwn(tmp, require(dependencyMap[3]).implSymbol)) {
        if (tmp[closure_0(undefined, closure_2[3]).implSymbol] instanceof require(dependencyMap[4]).implementation) {
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
        } else {
          // continue
        }
      }
      const obj = require(dependencyMap[3]);
    }
    return false;
  },
  isImpl(getAll) {
    if (getAll) {
      if (getAll instanceof require(dependencyMap[4]).implementation) {
        return true;
      } else {
        const wrapperForImplResult = require(dependencyMap[3]).wrapperForImpl(getAll);
        const _mixedIntoPredicates = module.exports._mixedIntoPredicates;
        for (const item10022 of _mixedIntoPredicates) {
          let tmp8 = wrapperForImplResult;
          if (item10022(wrapperForImplResult)) {
            obj2.return();
            let flag = true;
            return true;
          } else {
            // continue
          }
        }
        const obj = require(dependencyMap[3]);
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
        return require(dependencyMap[3]).implForWrapper(arg0);
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("" + str + " is not of type 'URL'.");
        throw typeError;
      }
    }
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[closure_0(undefined, closure_2[3]).ctorRegistrySymbol]) {
      const _Error2 = Error;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URL = arg0[closure_0(undefined, closure_2[3]).ctorRegistrySymbol].URL;
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
    let obj = obj.create(arg0, arg1, arg2);
    obj = require(dependencyMap[3]);
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
        let implementation = require(dependencyMap[4]).implementation;
        const prototype = implementation.prototype;
        implementation = new implementation(arg1, items, obj);
        obj.value = implementation;
        obj.configurable = true;
        Object.defineProperty(wrapper, require(dependencyMap[3]).implSymbol, obj);
        wrapper[closure_0(undefined, closure_2[3]).implSymbol][require(dependencyMap[3]).wrapperSymbol] = wrapper;
        if (require(dependencyMap[4]).init) {
          require(dependencyMap[4]).init(wrapper[closure_0(undefined, closure_2[3]).implSymbol], obj);
          const obj3 = require(dependencyMap[4]);
        }
        return wrapper;
      }
      obj = {};
    }
    items = [];
  },
  install(arg0) {
    const require = arg0;
    const tmp = () => {
      class URL {
        constructor(arg0) {
          tmp = closure_4(this, URL);
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
            tmp14 = URL;
            tmp15 = closure_2;
            num2 = 5;
            obj3 = URL(closure_2[5]);
            obj = {};
            str4 = "Failed to construct 'URL': parameter 1";
            obj.context = "Failed to construct 'URL': parameter 1";
            arr = items.push(obj3.USVString(arguments[0], obj));
            tmp17 = arguments[1];
            USVStringResult = tmp17;
            if (undefined !== tmp17) {
              tmp2 = URL;
              tmp3 = closure_2;
              obj = URL(closure_2[5]);
              obj1 = {};
              str = "Failed to construct 'URL': parameter 2";
              obj1.context = "Failed to construct 'URL': parameter 2";
              USVStringResult = obj.USVString(tmp17, obj1);
            }
            arr1 = items.push(USVStringResult);
            tmp6 = closure_6;
            tmp7 = globalThis;
            _Object = Object;
            tmp8 = URL;
            return closure_6.setup(Object.create(this.constructor.prototype), URL, items);
          }
        }
      }
      const arg0 = URL;
      let obj = {
        key: "toJSON",
        value: function toJSON() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].toJSON();
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      const items = [obj, , , , , , , , , , , , , ];
      obj = {
        key: "href",
        get() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].href;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'href' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].href = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].href;
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].origin;
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].protocol;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'protocol' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].protocol = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].username;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'username' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].username = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].password;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'password' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].password = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].host;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'host' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].host = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].hostname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'hostname' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].hostname = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].port;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'port' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].port = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].pathname;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'pathname' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].pathname = obj.USVString(arg0, obj);
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].search;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'search' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].search = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[12] = {
        key: "searchParams",
        get() {
          const self = this;
          const URL = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return URL(closure_2[3]).getSameObject(self, "searchParams", () => self(closure_2[3]).tryWrapperForImpl(self[closure_0(undefined, closure_2[3]).implSymbol].searchParams));
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
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[3]).implSymbol].hash;
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        },
        set(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              let obj = URL(closure_2[5]);
              obj = { context: "Failed to set the 'hash' property on 'URL': The provided value" };
              self[closure_0(undefined, closure_2[3]).implSymbol].hash = obj.USVString(arg0, obj);
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      return callback(URL, items);
    }();
    Object.defineProperties(tmp.prototype, callback({ toJSON: { enumerable: true }, href: { enumerable: true }, toString: { enumerable: true }, origin: { enumerable: true }, protocol: { enumerable: true }, username: { enumerable: true }, password: { enumerable: true }, host: { enumerable: true }, hostname: { enumerable: true }, port: { enumerable: true }, pathname: { enumerable: true }, search: { enumerable: true }, searchParams: { enumerable: true }, hash: { enumerable: true } }, Symbol.toStringTag, { "Bool(false)": "mediaConnections", "Bool(false)": "111_realtime" }));
    if (undefined === arg0[closure_0(undefined, closure_2[3]).ctorRegistrySymbol]) {
      const _Object = Object;
      arg0[require(dependencyMap[3]).ctorRegistrySymbol] = Object.create(null);
    }
    arg0[closure_0(undefined, closure_2[3]).ctorRegistrySymbol].URL = tmp;
    const obj = { 1677681151: null, 1744791039: null, value: tmp };
    Object.defineProperty(arg0, "URL", obj);
  }
};

export default obj;
