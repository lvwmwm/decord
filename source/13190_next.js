// Module ID: 13190
// Function ID: 99773
// Name: next
// Dependencies: []

// Module 13190 (next)
let closure_3 = require(dependencyMap[0]);
let closure_4 = require(dependencyMap[1]);
const _module = require(dependencyMap[2]);
let closure_6 = require(dependencyMap[3]);
let obj = {
  "Null": true,
  "Null": true,
  "Null": true,
  "Null": true,
  value: function next() {
    let index;
    let kind;
    let tmp7;
    let tmp8;
    const tmp = this[closure_0(undefined, closure_2[4]).iterInternalSymbol];
    ({ kind, index } = tmp);
    const arr = Array.from(tmp.target[closure_0(undefined, closure_2[4]).implSymbol]);
    if (index >= arr.length) {
      let obj = { value: undefined, done: true };
      return obj;
    } else {
      tmp.index = index + 1;
      [tmp7, tmp8] = callback(arr[index].map(require(dependencyMap[4]).tryWrapperForImpl), 2);
      if ("key" === kind) {
        let tmp2 = tmp7;
      } else if ("value" === kind) {
        tmp2 = tmp8;
      } else if ("key+value" === kind) {
        const items = [tmp7, tmp8];
        tmp2 = items;
      }
      obj = { value: tmp2, done: false };
      return obj;
    }
  }
};
let closure_7 = Object.create(require(dependencyMap[4]).IteratorPrototype, _module({ next: obj }, Symbol.toStringTag, {}));
obj = {
  _mixedIntoPredicates: [],
  is(arg0) {
    if (arg0) {
      if (obj.hasOwn(tmp, require(dependencyMap[4]).implSymbol)) {
        if (tmp[closure_0(undefined, closure_2[4]).implSymbol] instanceof require(dependencyMap[5]).implementation) {
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
      const obj = require(dependencyMap[4]);
    }
    return false;
  },
  isImpl(getAll) {
    if (getAll) {
      if (getAll instanceof require(dependencyMap[5]).implementation) {
        return true;
      } else {
        const wrapperForImplResult = require(dependencyMap[4]).wrapperForImpl(getAll);
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
        const obj = require(dependencyMap[4]);
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
        return require(dependencyMap[4]).implForWrapper(arg0);
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("" + str + " is not of type 'URLSearchParams'.");
        throw typeError;
      }
    }
  },
  createDefaultIterator(self, key) {
    let obj = Object.create(closure_7);
    obj = { target: self, kind: key, index: 0 };
    Object.defineProperty(obj, require(dependencyMap[4]).iterInternalSymbol, { value: obj, configurable: true });
    return obj;
  },
  create(arg0, arg1, arg2) {
    if (undefined === arg0[closure_0(undefined, closure_2[4]).ctorRegistrySymbol]) {
      const _Error2 = Error;
      const error = new Error("Internal error: invalid global object");
      throw error;
    } else {
      const _URLSearchParams = arg0[closure_0(undefined, closure_2[4]).ctorRegistrySymbol].URLSearchParams;
      if (undefined === _URLSearchParams) {
        const _Error = Error;
        const error1 = new Error("Internal error: constructor URLSearchParams is not installed on the passed global object");
        throw error1;
      } else {
        const _Object = Object;
        return obj.setup(Object.create(_URLSearchParams.prototype), arg0, arg1, arg2);
      }
    }
  },
  createImpl(arg0, arg1, arg2) {
    let obj = obj.create(arg0, arg1, arg2);
    obj = require(dependencyMap[4]);
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
        let implementation = require(dependencyMap[5]).implementation;
        const prototype = implementation.prototype;
        implementation = new implementation(arg1, items, obj);
        obj.value = implementation;
        obj.configurable = true;
        Object.defineProperty(wrapper, require(dependencyMap[4]).implSymbol, obj);
        wrapper[closure_0(undefined, closure_2[4]).implSymbol][require(dependencyMap[4]).wrapperSymbol] = wrapper;
        if (require(dependencyMap[5]).init) {
          require(dependencyMap[5]).init(wrapper[closure_0(undefined, closure_2[4]).implSymbol], obj);
          const obj3 = require(dependencyMap[5]);
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
      class URLSearchParams {
        constructor() {
          tmp = closure_3(this, URLSearchParams);
          items = [];
          first = arguments[0];
          tmp3 = first;
          if (undefined !== first) {
            tmp4 = URLSearchParams;
            tmp5 = closure_2;
            num = 4;
            obj = URLSearchParams(closure_2[4]);
            tmp6 = first;
            if (obj.isObject(tmp3)) {
              tmp10 = first;
              tmp11 = globalThis;
              _Symbol = Symbol;
              if (undefined !== tmp3[Symbol.iterator]) {
                tmp30 = URLSearchParams;
                tmp31 = closure_2;
                obj8 = URLSearchParams(closure_2[4]);
                tmp32 = first;
                if (obj8.isObject(tmp3)) {
                  items1 = [];
                  tmp37 = first;
                  tmp38 = tmp3;
                  iter2 = first[Symbol.iterator]();
                  num4 = 6;
                  str7 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element";
                  nextResult = iter2.next();
                  tmp40 = iter2;
                  while (iter2 !== undefined) {
                    tmp64 = URLSearchParams;
                    tmp65 = closure_2;
                    tmp63 = nextResult;
                    obj12 = URLSearchParams(closure_2[4]);
                    if (obj12.isObject(nextResult)) {
                      items2 = [];
                      tmp45 = nextResult;
                      tmp46 = tmp63;
                      for (const item10114 of nextResult) {
                        tmp47 = closure_0;
                        tmp48 = closure_2;
                        obj9 = closure_0(closure_2[6]);
                        obj = {};
                        obj.context = "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element";
                        tmp49 = items2;
                        arr = items2.push(obj9.USVString(item10114, obj));
                      }
                      tmp51 = items2;
                      tmp52 = items2;
                      tmp53 = items1;
                      arr1 = items1.push(items2);
                      // continue
                    } else {
                      _TypeError3 = TypeError;
                      prototype3 = TypeError.prototype;
                      tmp41 = new.target;
                      str8 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.";
                      tmp42 = new.target;
                      typeError = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.");
                      tmp44 = typeError;
                      throw typeError;
                    }
                  }
                  str = items1;
                } else {
                  _TypeError2 = TypeError;
                  prototype2 = TypeError.prototype;
                  tmp33 = new.target;
                  str6 = "Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.";
                  tmp34 = new.target;
                  typeError1 = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.");
                  tmp36 = typeError1;
                  throw typeError1;
                }
              } else {
                tmp56 = URLSearchParams;
                tmp57 = closure_2;
                obj11 = URLSearchParams(closure_2[4]);
                tmp58 = first;
                if (obj11.isObject(tmp3)) {
                  _Object = Object;
                  tmp16 = null;
                  obj1 = Object.create(null);
                  _Reflect = Reflect;
                  tmp18 = first;
                  ownKeysResult = Reflect.ownKeys(tmp3);
                  tmp20 = ownKeysResult;
                  iter = ownKeysResult[Symbol.iterator]();
                  num3 = 6;
                  str4 = "Failed to construct 'URLSearchParams': parameter 1 record's key";
                  str5 = "Failed to construct 'URLSearchParams': parameter 1 record's value";
                  nextResult1 = iter.next();
                  tmp22 = iter;
                  while (iter !== undefined) {
                    tmp59 = nextResult1;
                    _Object2 = Object;
                    tmp60 = first;
                    ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp3, nextResult1);
                    if (ownPropertyDescriptor) {
                      tmp23 = ownPropertyDescriptor;
                      if (tmp62.enumerable) {
                        tmp24 = nextResult1;
                        tmp25 = URLSearchParams;
                        tmp26 = closure_2;
                        obj4 = URLSearchParams(closure_2[6]);
                        obj2 = {};
                        obj2.context = "Failed to construct 'URLSearchParams': parameter 1 record's key";
                        tmp28 = first;
                        USVStringResult = obj4.USVString(tmp59, obj2);
                        obj6 = URLSearchParams(closure_2[6]);
                        obj3 = {};
                        obj3.context = "Failed to construct 'URLSearchParams': parameter 1 record's value";
                        tmp29 = obj1;
                        obj1[USVStringResult] = obj6.USVString(tmp3[tmp59], obj3);
                      }
                    }
                    // continue
                  }
                  str = obj1;
                } else {
                  _TypeError = TypeError;
                  prototype = TypeError.prototype;
                  tmp12 = new.target;
                  str3 = "Failed to construct 'URLSearchParams': parameter 1 record is not an object.";
                  tmp13 = new.target;
                  typeError2 = new TypeError("Failed to construct 'URLSearchParams': parameter 1 record is not an object.");
                  tmp15 = typeError2;
                  throw typeError2;
                }
              }
            } else {
              tmp7 = URLSearchParams;
              tmp8 = closure_2;
              num2 = 6;
              obj2 = URLSearchParams(closure_2[6]);
              tmp9 = first;
              obj4 = {};
              str2 = "Failed to construct 'URLSearchParams': parameter 1";
              obj4.context = "Failed to construct 'URLSearchParams': parameter 1";
              str = obj2.USVString(tmp3, obj4);
            }
          } else {
            str = "";
          }
          arr2 = items.push(str);
          return closure_8.setup(Object.create(this.constructor.prototype), URLSearchParams, items);
        }
      }
      const arg0 = URLSearchParams;
      let obj = {
        key: "append",
        value: function append(arg0, arg1) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              if (arguments.length < 2) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                let obj = URLSearchParams(closure_2[6]);
                obj = { context: "Failed to execute 'append' on 'URLSearchParams': parameter 1" };
                items.push(obj.USVString(arguments[0], obj));
                obj = { context: "Failed to execute 'append' on 'URLSearchParams': parameter 2" };
                items.push(URLSearchParams(closure_2[6]).USVString(arguments[1], obj));
                const append = tmp12.append;
                return append.apply(self[closure_0(undefined, closure_2[4]).implSymbol], items);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      };
      const items = [obj, , , , , , , , , , , ];
      obj = {
        key: "delete",
        value: function _delete(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                let obj = URLSearchParams(closure_2[6]);
                obj = { context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1" };
                items.push(obj.USVString(arguments[0], obj));
                const _delete = tmp6.delete;
                return _delete.apply(self[closure_0(undefined, closure_2[4]).implSymbol], items);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      };
      items[1] = obj;
      obj = {
        key: "get",
        value: function get(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                let obj = URLSearchParams(closure_2[6]);
                obj = { context: "Failed to execute 'get' on 'URLSearchParams': parameter 1" };
                items.push(obj.USVString(arguments[0], obj));
                const get = tmp6.get;
                return get.apply(self[closure_0(undefined, closure_2[4]).implSymbol], items);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      };
      items[2] = obj;
      items[3] = {
        key: "getAll",
        value: function getAll(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                let obj = URLSearchParams(closure_2[6]);
                obj = { context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1" };
                items.push(obj.USVString(arguments[0], obj));
                const getAll = tmp11.getAll;
                return URLSearchParams(closure_2[4]).tryWrapperForImpl(getAll.apply(self[closure_0(undefined, closure_2[4]).implSymbol], items));
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      };
      items[4] = {
        key: "has",
        value: function has(arg0) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                let obj = URLSearchParams(closure_2[6]);
                obj = { context: "Failed to execute 'has' on 'URLSearchParams': parameter 1" };
                items.push(obj.USVString(arguments[0], obj));
                const has = tmp6.has;
                return has.apply(self[closure_0(undefined, closure_2[4]).implSymbol], items);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      };
      items[5] = {
        key: "set",
        value: function set(arg0, arg1) {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              if (arguments.length < 2) {
                const _TypeError = TypeError;
                const typeError = new TypeError("Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only " + arguments.length + " present.");
                throw typeError;
              } else {
                const items = [];
                let obj = URLSearchParams(closure_2[6]);
                obj = { context: "Failed to execute 'set' on 'URLSearchParams': parameter 1" };
                items.push(obj.USVString(arguments[0], obj));
                obj = { context: "Failed to execute 'set' on 'URLSearchParams': parameter 2" };
                items.push(URLSearchParams(closure_2[6]).USVString(arguments[1], obj));
                const obj3 = URLSearchParams(closure_2[6]);
                return self[closure_0(undefined, closure_2[4]).implSymbol].set.apply(self[closure_0(undefined, closure_2[4]).implSymbol], items);
              }
            }
          }
          const typeError1 = new TypeError("Illegal invocation");
          throw typeError1;
        }
      };
      items[6] = {
        key: "sort",
        value: function sort() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[4]).implSymbol].sort();
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[7] = {
        key: "toString",
        value: function toString() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              return self[closure_0(undefined, closure_2[4]).implSymbol].toString();
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[8] = {
        key: "keys",
        value: function keys() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const _exports2 = closure_1.exports;
              return _exports2.createDefaultIterator(self, "key");
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[9] = {
        key: "values",
        value: function values() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const _exports2 = closure_1.exports;
              return _exports2.createDefaultIterator(self, "value");
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[10] = {
        key: "entries",
        value: function entries() {
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              const _exports2 = closure_1.exports;
              return _exports2.createDefaultIterator(self, "key+value");
            }
          }
          const typeError = new TypeError("Illegal invocation");
          throw typeError;
        }
      };
      items[11] = {
        key: "forEach",
        value: function forEach(call) {
          let length;
          const self = this;
          if (this) {
            const _exports = closure_1.exports;
            if (_exports.is(self)) {
              if (arguments.length < 1) {
                const _TypeError2 = TypeError;
                const typeError = new TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.");
                throw typeError;
              } else if ("function" !== typeof call) {
                const _TypeError = TypeError;
                const typeError1 = new TypeError("Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1 is not a function.");
                throw typeError1;
              } else {
                const tmp22 = arguments[1];
                const _Array2 = Array;
                let arr = Array.from(self[closure_0(undefined, closure_2[4]).implSymbol]);
                let tmp11 = arr;
                let num2 = 0;
                if (0 < arr.length) {
                  do {
                    arr = tmp11[num2];
                    let tmp3 = closure_0;
                    let tmp4 = closure_2;
                    let tmp5 = closure_6;
                    let tmp6 = closure_6(arr.map(closure_0(closure_2[4]).tryWrapperForImpl), 2);
                    let tmp7 = call;
                    let tmp8 = tmp22;
                    let tmp9 = self;
                    let callResult = call.call(tmp22, tmp6[1], tmp6[0], self);
                    let _Array = Array;
                    arr = Array.from(self[closure_0(undefined, closure_2[4]).implSymbol]);
                    num2 = num2 + 1;
                    tmp11 = arr;
                    length = arr.length;
                  } while (num2 < length);
                }
              }
            }
          }
          const typeError2 = new TypeError("Illegal invocation");
          throw typeError2;
        }
      };
      return callback(URLSearchParams, items);
    }();
    let obj = { "Null": null, "Null": null, "Null": null, value: tmp.prototype.entries };
    Object.defineProperties(tmp.prototype, _module(_module({ append: { enumerable: true }, delete: { enumerable: true }, get: { enumerable: true }, getAll: { enumerable: true }, has: { enumerable: true }, set: { enumerable: true }, sort: { enumerable: true }, toString: { enumerable: true }, keys: { enumerable: true }, values: { enumerable: true }, entries: { enumerable: true }, forEach: { enumerable: true } }, Symbol.toStringTag, { "Bool(false)": true, "Bool(false)": true }), Symbol.iterator, obj));
    if (undefined === arg0[closure_0(undefined, closure_2[4]).ctorRegistrySymbol]) {
      const _Object = Object;
      arg0[require(dependencyMap[4]).ctorRegistrySymbol] = Object.create(null);
    }
    arg0[closure_0(undefined, closure_2[4]).ctorRegistrySymbol].URLSearchParams = tmp;
    obj = { 1577016319: null, 1493131263: null, value: tmp };
    Object.defineProperty(arg0, "URLSearchParams", obj);
  }
};

export default obj;
