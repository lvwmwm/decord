// Module ID: 1257
// Function ID: 14129
// Name: createExporter
// Dependencies: []

// Module 1257 (createExporter)
function(arg0) {
  let _self = this;
  function createExporter(_self, exporter) {
    _self = exporter;
    if (_self !== _self) {
      const _Object = Object;
      if ("function" === typeof Object.create) {
        const _Object2 = Object;
        const obj = { value: true };
      } else {
        _self.__esModule = true;
      }
    }
    return (arg0, arg1) => {
      let tmp2 = arg1;
      if (arg1) {
        tmp2 = arg1(arg0, arg1);
      }
      arg0[arg0] = tmp2;
      return tmp2;
    };
  }
  if ("object" === typeof arg0) {
    _self = arg0;
  } else {
    _self = self;
    if ("object" === typeof self) {
      _self = self;
    } else if ("object" !== typeof _self) {
      _self = {};
    }
  }
  const arg4 = _self;
  if ("function" === typeof globalThis.define) {
    if (globalThis.define.amd) {
      globalThis.define("tslib", [true], (_self) => {
        _self(createExporter(_self, createExporter(_self)));
      });
    }
  }
  if ("object" === typeof arg4) {
    if ("object" === typeof arg4.exports) {
      arg0(createExporter(_self, createExporter(arg4.exports)));
    }
  }
  arg0(createExporter(_self));
}((arg0) => {
  let fn = Object.setPrototypeOf;
  if (!fn) {
    const _Array = Array;
    fn = Object.create([]) instanceof Array && (arg0, arg1) => {
      arg0.__proto__ = arg1;
    };
    const tmp = Object.create([]) instanceof Array && (arg0, arg1) => {
      arg0.__proto__ = arg1;
    };
  }
  if (!fn) {
    fn = (arg0, obj) => {
      for (const key10005 in arg1) {
        let tmp = key10005;
        let _Object = Object;
        if (!hasOwnProperty.call(arg1, key10005)) {
          continue;
        } else {
          arg0[key10005] = arg1[key10005];
          // continue
        }
        continue;
      }
    };
  }
  arg0 = fn;
  let ownKeys = function __extends(arg0, Error) {
    function __(tmpResult, arg1) {
      this.constructor = tmpResult;
    }
    if ("function" !== typeof Error) {
      if (null !== Error) {
        const _TypeError = TypeError;
        const _String = String;
        const typeError = new TypeError("Class extends value " + String(Error) + " is not a constructor or null");
        throw typeError;
      }
    }
    arg0(arg0, Error);
    if (null === Error) {
      const _Object = Object;
      __ = Object.create(Error);
    } else {
      __.prototype = Error.prototype;
      const prototype = __.prototype;
      __ = new __();
    }
    arg0.prototype = __;
  };
  let closure_3 = Object.assign || (arg0) => {
    for (let num = 1; num < length; num = num + 1) {
      let tmp3 = arguments[num];
      let tmp4 = tmp3;
      let tmp5 = tmp2;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp2 = tmp5;
        let tmp7 = keys[tmp];
        while (tmp7 !== undefined) {
          let tmp8 = tmp7;
          let _Object = Object;
          tmp5 = tmp7;
          if (!hasOwnProperty.call(tmp3, tmp7)) {
            continue;
          } else {
            arg0[tmp7] = tmp3[tmp7];
            tmp5 = tmp7;
            // continue
          }
          continue;
        }
      }
    }
    return arg0;
  };
  function __rest(obj, arr) {
    obj = {};
    for (const key10007 in arg0) {
      let tmp3 = key10007;
      let _Object3 = Object;
      let callResult = hasOwnProperty.call(arg0, key10007);
      if (callResult) {
        callResult = arg1.indexOf(key10007) < 0;
      }
      if (!callResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        // continue
      }
      continue;
    }
    if (null != obj) {
      const _Object4 = Object;
      if ("function" === typeof Object.getOwnPropertySymbols) {
        const _Object = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
          let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
          if (callResult1) {
            let _Object2 = Object;
            callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
          }
          if (callResult1) {
            obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
          }
        }
      }
    }
    return obj;
  }
  function __decorate(arg0, arg1, arg2, arg3) {
    const length = arguments.length;
    let tmp = arg3;
    let tmp2 = arg1;
    if (length >= 3) {
      let ownPropertyDescriptor = arg3;
      let tmp5 = arg3;
      if (null === arg3) {
        const _Object = Object;
        ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arg1, arg2);
        tmp5 = ownPropertyDescriptor;
      }
      tmp = ownPropertyDescriptor;
      tmp2 = tmp5;
    }
    if ("object" === typeof Reflect) {
      const _Reflect = Reflect;
      if ("function" === typeof Reflect.decorate) {
        const _Reflect2 = Reflect;
        const _Reflect3 = Reflect;
        let decorateResult = Reflect.decorate(arg0, arg1, arg2, tmp);
      }
      if (tmp17) {
        const _Object2 = Object;
        Object.defineProperty(arg1, arg2, decorateResult);
      }
      return decorateResult;
    }
    let diff = arg0.length - 1;
    let tmp8 = tmp2;
    decorateResult = tmp2;
    if (diff >= 0) {
      do {
        let tmp10 = arg0[diff];
        let tmp11 = tmp8;
        if (tmp10) {
          if (length < 3) {
            let tmp10Result = tmp10(tmp8);
          } else {
            tmp10Result = length > 3 ? tmp10(arg1, arg2, tmp8) : tmp10(arg1, arg2);
          }
          if (!tmp10Result) {
            tmp10Result = tmp8;
          }
          tmp11 = tmp10Result;
        }
        diff = diff - 1;
        tmp8 = tmp11;
        decorateResult = tmp11;
      } while (diff >= 0);
    }
  }
  function __param(arg0, arg1) {
    let closure_1 = arg1;
    return (arg0, arg1) => {
      arg1(arg0, arg1, arg0);
    };
  }
  function __esDecorate(arg0, arg1, arg2, kind, arr) {
    let set;
    function accept(comma, arg1) {
      if (undefined !== comma) {
        if ("function" !== typeof comma) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Function expected");
          throw typeError;
        }
      }
      return comma;
    }
    const ownKeys = accept;
    kind = kind.kind;
    let str = "get";
    if ("getter" !== kind) {
      let str2 = "value";
      if ("setter" === kind) {
        str2 = "set";
      }
      str = str2;
    }
    let tmp = null;
    if (!arg1) {
      tmp = null;
      if (arg0) {
        let prototype = arg0;
        if (!kind.static) {
          prototype = arg0.prototype;
        }
        tmp = prototype;
      }
    }
    if (arg1) {
      let closure_1 = false;
      let diff = arg2.length - 1;
      if (diff >= 0) {
        while (true) {
          let obj = {};
          let tmp8 = kind;
          let tmp9 = tmp7;
          let tmp10 = tmp7;
          let keys = Object.keys();
          if (keys !== undefined) {
            tmp10 = tmp9;
            let tmp12 = keys[set];
            while (tmp12 !== undefined) {
              tmp9 = tmp12;
              obj[tmp9] = "access" === tmp12 ? {} : kind[tmp9];
              // continue
            }
          }
          let tmp13 = tmp10;
          let tmp7 = tmp10;
          let keys1 = Object.keys();
          if (keys1 !== undefined) {
            tmp7 = tmp13;
            let tmp15 = keys1[set];
            while (tmp15 !== undefined) {
              tmp13 = tmp15;
              obj.access[tmp15] = kind.access[tmp15];
              // continue
            }
          }
          obj.addInitializer = (arg0) => {
            let tmp = arg0;
            if (closure_1) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Cannot add initializers after decoration has completed");
              throw typeError;
            } else {
              if (!tmp) {
                tmp = null;
              }
              accept(tmp);
              arg5.push(tmp);
            }
          };
          if (tmp5) {
            obj = {};
            ({ get: obj3.get, set } = arg1);
            obj.set = set;
            let tmp16 = obj;
          } else {
            tmp16 = arg1[str];
          }
          let tmp17 = arg2[diff](tmp16, obj);
          if (tmp5) {
            let tmp19 = tmp6;
            if (undefined !== tmp17) {
              if (null === tmp17) {
                break;
              } else if ("object" !== typeof tmp17) {
                break;
              } else {
                let get = tmp17.get;
                let acceptResult = accept(get);
                if (get) {
                  arg1.get = get;
                }
                let set2 = tmp17.set;
                let acceptResult1 = accept(set2);
                if (set2) {
                  arg1.set = set2;
                }
                let init = tmp17.init;
                let acceptResult2 = accept(init);
                tmp19 = init;
                if (init) {
                  arr = arr.unshift(init);
                  tmp19 = init;
                }
              }
            }
          } else {
            let acceptResult3 = accept(tmp17);
            tmp19 = tmp17;
            if (tmp17) {
              if ("field" === kind) {
                arr = arr.unshift(tmp17);
                tmp19 = tmp17;
              } else {
                arg1[str] = tmp17;
                tmp19 = tmp17;
              }
            }
          }
          diff = diff - 1;
          let tmp6 = tmp19;
        }
        const _TypeError = TypeError;
        const typeError = new TypeError("Object expected");
        throw typeError;
      }
      if (tmp) {
        const _Object2 = Object;
        Object.defineProperty(tmp, kind.name, arg1);
      }
      closure_1 = true;
    } else if (tmp) {
      const _Object = Object;
      let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, kind.name);
    } else {
      ownPropertyDescriptor = {};
    }
  }
  function __runInitializers(arg0, arg1, arg2) {
    let tmp = arg2;
    const tmp2 = arguments.length > 2;
    let num = 0;
    let tmp3 = arg2;
    if (0 < arg1.length) {
      do {
        let tmp4 = arg1[num];
        let call = tmp4.call;
        let tmp5 = tmp2 ? call(arg0, tmp) : call(arg0);
        num = num + 1;
        tmp = tmp5;
        tmp3 = tmp5;
      } while (num < arg1.length);
    }
    let tmp6;
    if (tmp2) {
      tmp6 = tmp3;
    }
    return tmp6;
  }
  function __propKey(arg0) {
    let combined = arg0;
    if ("symbol" !== typeof arg0) {
      const concat = "".concat;
      combined = "".concat(arg0);
    }
    return combined;
  }
  function __setFunctionName(arg0, description) {
    let tmp = description;
    if ("symbol" === typeof description) {
      let str = "";
      if (description.description) {
        const concat = "[".concat;
        str = "[".concat(description.description, "]");
      }
      tmp = str;
    }
    const obj = { configurable: true };
    let combined = tmp;
    if (arg2) {
      const concat2 = "".concat;
      combined = "".concat(arg2, " ", tmp);
    }
    obj.value = combined;
    return Object.defineProperty(arg0, "name", obj);
  }
  function __metadata(arg0, arg1) {
    if ("object" === typeof Reflect) {
      const _Reflect = Reflect;
      if ("function" === typeof Reflect.metadata) {
        const _Reflect2 = Reflect;
        return Reflect.metadata(arg0, arg1);
      }
    }
  }
  function __awaiter(arg0, arg1, arg2, arg3) {
    let _Promise = arg2;
    let closure_1 = arg1;
    let ownKeys = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      ownKeys = Promise;
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor(() => { ... });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor(() => { ... });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
      step(iter.next());
    });
    return _Promise;
  }
  function __generator(arg0, arg1) {
    let closure_1 = arg1;
    function verb(arg0) {
      return (arg0) => {
        const items = [arg0, arg0];
        let items2 = items;
        if (closure_2) {
          const _TypeError = TypeError;
          const typeError = new TypeError("Generator is already executing.");
          throw typeError;
        } else {
          if (closure_6) {
            closure_6 = 0;
            if (items2[0]) {
              let closure_5 = 0;
            }
          }
          if (!closure_5) {
            if (5 & items2[0]) {
              throw items2[1];
            } else {
              let obj = {};
              let tmp70;
              if (items2[0]) {
                tmp70 = items2[1];
              }
              obj.value = tmp70;
              obj.done = true;
              let tmp15 = obj;
            }
          } else {
            while (true) {
              closure_2 = 1;
              let tmp4 = closure_3;
              if (closure_3) {
                let tmp5 = items2;
                if (2 & items2[0]) {
                  let tmp11 = closure_3;
                  let next = closure_3.return;
                } else {
                  let tmp6 = items2;
                  let iter = closure_3;
                  if (items2[0]) {
                    let _throw = iter.throw;
                    let num10 = _throw;
                    if (!_throw) {
                      let tmp7 = closure_3;
                      let _return = closure_3.return;
                      let lib = _return;
                      if (_return) {
                        let tmp8 = lib;
                        let tmp9 = closure_3;
                        let callResult = lib.call(closure_3);
                      }
                      num10 = 0;
                    }
                    next = num10;
                  } else {
                    next = iter.next;
                  }
                }
                lib = next;
                if (next) {
                  let tmp12 = lib;
                  let tmp13 = closure_3;
                  let tmp14 = items2;
                  let iter2 = lib.call(closure_3, items2[1]);
                  lib = iter2;
                  if (!iter2.done) {
                    break;
                  }
                }
              }
              closure_3 = 0;
              let tmp16 = lib;
              if (lib) {
                let tmp17 = items2;
                let items1 = [2 & items2[0], ];
                let tmp18 = lib;
                items1[1] = lib.value;
                items2 = items1;
              }
              let tmp19 = items2;
              let first = items2[0];
              if (0 !== first) {
                if (1 !== first) {
                  if (4 === first) {
                    let tmp57 = closure_5;
                    closure_5.label = closure_5.label + 1;
                    obj = {};
                    let tmp58 = items2;
                    obj.value = items2[1];
                    let flag = false;
                    obj.done = false;
                    lib = 0;
                    closure_2 = 0;
                    tmp15 = obj;
                  } else {
                    if (5 === first) {
                      let tmp55 = closure_5;
                      closure_5.label = closure_5.label + 1;
                      let tmp56 = items2;
                      closure_3 = items2[1];
                      items2 = [0.229];
                      lib = 0;
                      closure_2 = 0;
                    } else if (7 === first) {
                      let tmp52 = closure_5;
                      let ops = closure_5.ops;
                      items2 = ops.pop();
                      let tmp53 = closure_5;
                      let trys = closure_5.trys;
                      let arr = trys.pop();
                      lib = 0;
                      closure_2 = 0;
                    } else {
                      let tmp76 = closure_5;
                      let trys1 = closure_5.trys;
                      lib = trys1;
                      let tmp77 = trys1.length > 0;
                      let tmp22 = tmp77;
                      if (tmp77) {
                        let tmp21 = lib;
                        tmp22 = lib[closure_4.length - 1];
                      }
                      lib = tmp22;
                      if (tmp22) {
                        let tmp25 = items2;
                        if (3 !== items2[0]) {
                          let tmp31 = items2;
                          if (6 === items2[0]) {
                            let tmp32 = closure_5;
                            let tmp33 = lib;
                            if (closure_5.label < lib[1]) {
                              let tmp47 = closure_5;
                              let tmp48 = lib;
                              closure_5.label = lib[1];
                              let tmp49 = items2;
                              lib = items2;
                            }
                          }
                          let tmp34 = lib;
                          if (lib) {
                            let tmp35 = closure_5;
                            let tmp36 = lib;
                            if (closure_5.label < lib[2]) {
                              let tmp42 = closure_5;
                              let tmp43 = lib;
                              closure_5.label = lib[2];
                              let tmp44 = closure_5;
                              let ops1 = closure_5.ops;
                              let tmp45 = items2;
                              arr = ops1.push(items2);
                            }
                          }
                          let tmp37 = lib;
                          if (lib[2]) {
                            let tmp38 = closure_5;
                            let ops2 = closure_5.ops;
                            let arr1 = ops2.pop();
                          }
                          let tmp40 = closure_5;
                          let trys2 = closure_5.trys;
                          let arr2 = trys2.pop();
                          lib = 0;
                          closure_2 = 0;
                        } else {
                          let tmp26 = lib;
                          if (lib) {
                            let tmp27 = items2;
                            let tmp28 = lib;
                            if (items2[1] > lib[0]) {
                              let tmp29 = items2;
                              let tmp30 = lib;
                            }
                          }
                          let tmp50 = closure_5;
                          let tmp51 = items2;
                          closure_5.label = items2[1];
                        }
                        let tmp60 = callback;
                        let tmp61 = arg0;
                        let tmp62 = closure_5;
                        let callResult1 = callback.call(arg0, closure_5);
                        lib = 0;
                        closure_2 = 0;
                        while (true) {
                          let items3 = [, __exception];
                          let tmp64 = items3;
                          closure_3 = 0;
                          // continue
                        }
                      } else {
                        let tmp23 = items2;
                        if (6 === items2[0]) {
                          closure_5 = 0;
                          lib = 0;
                          closure_2 = 0;
                        } else {
                          let tmp24 = items2;
                        }
                      }
                    }
                    let tmp65 = closure_6;
                    if (closure_6) {
                      closure_6 = 0;
                      let tmp66 = items2;
                      if (items2[0]) {
                        closure_5 = 0;
                      }
                    }
                    let tmp67 = closure_5;
                  }
                }
              }
              let tmp59 = items2;
              lib = items2;
            }
            tmp15 = lib;
            lib = 0;
            closure_2 = 0;
          }
          return tmp15;
        }
      };
    }
    let obj = {
      label: 0,
      sent() {
        if (1 & closure_4[0]) {
          throw tmp;
        } else {
          return tmp;
        }
      },
      trys: [],
      ops: []
    };
    const __decorate = obj;
    obj = Object.create("function" === typeof globalThis.Iterator ? globalThis.Iterator : Object.prototype);
    const __param = obj;
    obj.next = verb(0);
    __param.throw = verb(1);
    __param.return = verb(2);
    if ("function" === typeof Symbol) {
      const _Symbol = Symbol;
      __param[Symbol.iterator] = function() {
        return this;
      };
    }
    return __param;
  }
  function __exportStar(obj, exports) {
    for (const key10007 in arg0) {
      let tmp4 = key10007;
      let callResult = "default" === key10007;
      if (!callResult) {
        let _Object = Object;
        callResult = hasOwnProperty.call(arg1, key10007);
      }
      if (callResult) {
        continue;
      } else {
        let tmp2 = closure_30;
        let tmp3 = closure_30(arg1, arg0, key10007);
        // continue
      }
      continue;
    }
  }
  let closure_30 = Object.create ? (arg0, arg1, arg2, arg3) => {
    let __esModule = arg1;
    let tmp = arg3;
    let closure_1 = arg2;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    if (!ownPropertyDescriptor) {
      if (!ownPropertyDescriptor) {
        const obj = {
          enumerable: true,
          get() {
                return arg1[closure_1];
              }
        };
        ownPropertyDescriptor = obj;
      }
      const _Object = Object;
      Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
    } else if ("get" in ownPropertyDescriptor) {
      __esModule = __esModule.__esModule;
      let tmp3 = !__esModule;
    } else {
      tmp3 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
    }
  } : (arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  };
  function __values(arg0) {
    let iterator = "function" === typeof Symbol;
    if (iterator) {
      const _Symbol = Symbol;
      iterator = Symbol.iterator;
    }
    let obj = iterator;
    if (iterator) {
      obj = fn[iterator];
    }
    let closure_1 = 0;
    if (obj) {
      return obj.call(fn);
    } else {
      if (fn) {
        if ("number" === typeof fn.length) {
          obj = {
            next() {
                    let tmp = length;
                    if (length) {
                      tmp = closure_1 >= length.length;
                    }
                    const obj = {};
                    let tmp4 = length;
                    if (length) {
                      closure_1 = tmp7 + 1;
                      tmp4 = length[tmp7];
                    }
                    obj.value = tmp4;
                    obj.done = !length;
                    return obj;
                  }
          };
          return obj;
        }
      }
      let _TypeError = TypeError;
      let str2 = "Symbol.iterator is not defined.";
      if (iterator) {
        str2 = "Object is not iterable.";
      }
      const prototype = _TypeError.prototype;
      _TypeError = new _TypeError(str2);
      throw _TypeError;
    }
  }
  function __read(arg0, arg1) {
    let diff = arg1;
    let tmp3 = "function" === typeof Symbol;
    if (tmp3) {
      const _Symbol = Symbol;
      tmp3 = arg0[Symbol.iterator];
    }
    let obj = tmp3;
    if (tmp3) {
      const iter2 = obj.call(arg0);
      const items = [];
      if (undefined === diff) {
        const iter3 = iter2.next();
        let iter = iter3;
        if (!iter3.done) {
          while (true) {
            let tmp11 = items;
            let tmp12 = iter;
            let arr = items.push(iter.value);
            let tmp14 = diff;
            if (undefined === diff) {
              let tmp17 = iter2;
              let iter4 = iter2.next();
              iter = iter4;
              if (iter4.done) {
                break;
              }
            } else {
              let tmp15 = diff;
              let tmp16 = +diff;
              diff = tmp16 - 1;
              if (tmp16 <= 0) {
                break;
              }
            }
            break;
          }
        }
      } else {
        diff = tmp9 - 1;
      }
      while (true) {
        let tmp18 = iter;
        let tmp19 = iter;
        if (!iter) {
          break;
        } else {
          let tmp20 = iter;
          tmp19 = !iter.done;
          // break
        }
        let tmp21 = tmp19;
        if (tmp19) {
          let tmp22 = iter2;
          let _return = iter2.return;
          obj = _return;
          tmp21 = _return;
        }
        if (tmp21) {
          let tmp23 = obj;
          let tmp24 = iter2;
          let callResult = obj.call(iter2);
        }
        let tmp26 = tmp2;
        if (tmp2) {
          let tmp27 = tmp2;
          throw tmp2.error;
        } else {
          return items;
        }
      }
    } else {
      return arg0;
    }
  }
  function __spread() {
    let length;
    let items = [];
    let num = 0;
    let tmp = items;
    if (0 < arguments.length) {
      do {
        let tmp2 = closure_16;
        items = items.concat(closure_16(arguments[num]));
        num = num + 1;
        tmp = items;
        length = arguments.length;
      } while (num < length);
    }
    return tmp;
  }
  function __spreadArrays() {
    const length = arguments.length;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < length) {
      do {
        num = num + arguments[num2].length;
        num2 = num2 + 1;
        num3 = num;
      } while (num2 < length);
    }
    const ArrayResult = Array(num3);
    let num4 = 0;
    let num5 = 0;
    if (0 < length) {
      do {
        let arr = arguments[num4];
        let length2 = arr.length;
        let sum = num5;
        let num6 = 0;
        if (0 < length2) {
          do {
            ArrayResult[sum] = arr[num6];
            num6 = num6 + 1;
            sum = sum + 1;
            num5 = sum;
          } while (num6 < length2);
        }
        num4 = num4 + 1;
      } while (num4 < length);
    }
    return ArrayResult;
  }
  function __spreadArray(items1, items, arg2) {
    if (arg2) {
      let num3 = 0;
      if (0 < items.length) {
        do {
          let tmp4 = !tmp3 && num3 in items;
          let tmp5 = tmp3;
          if (!tmp4) {
            let callResult = tmp3;
            if (!tmp3) {
              let _Array = Array;
              callResult = slice.call(items, 0, num3);
            }
            callResult[num3] = items[num3];
            tmp5 = callResult;
          }
          num3 = num3 + 1;
          let tmp3 = tmp5;
          let callResult1 = tmp5;
        } while (num3 < length);
      }
    }
    if (!callResult1) {
      const _Array2 = Array;
      callResult1 = slice2.call(items);
    }
    return items1.concat(callResult1);
  }
  function __await(v) {
    const self = this;
    if (this instanceof __await) {
      self.v = v;
      let tmp5 = self;
    } else {
      const prototype = __await.prototype;
      tmp5 = new __await(v);
    }
    return tmp5;
  }
  function __asyncGenerator(arg0, arg1, apply) {
    let items = arg1;
    function verb(next, arg1) {
      if (closure_1[next]) {
        obj[next] = (arg0) => new Promise((arg0, arg1) => {
          const items = [arg0, arg0, arg0, arg1];
          if (arr.push(items) <= 1) {
            callback(arg0, arg0);
          }
        });
        if (arg1) {
          obj[next] = arg1(obj[next]);
        }
      }
    }
    function resume(arg0, arg1) {
      const iter = closure_1[arg0](arg1);
      if (iter.value instanceof closure_20) {
        const resolved = Promise.resolve(iter.value.v);
        resolved.then(fulfill, reject);
      } else {
        settle(closure_2[0][2], iter);
      }
    }
    function fulfill(arg0) {
      resume("next", arg0);
    }
    function reject(arg0) {
      resume("throw", arg0);
    }
    function settle(arg0, arg1) {
      arg0(arg1);
      const arr = arr.shift();
      if (arr.length) {
        resume(arr[0][0], arr[0][1]);
      }
    }
    if (Symbol.asyncIterator) {
      if (!items) {
        items = [];
      }
      let closure_1 = apply.apply(arg0, items);
      let closure_2 = [];
      const obj = Object.create("function" === typeof globalThis.AsyncIterator ? globalThis.AsyncIterator : Object.prototype);
      verb("next");
      verb("throw");
      verb("return", function awaitReturn(arg0) {
        return (arg0) => {
          const resolved = Promise.resolve(arg0);
          return resolved.then(arg0, closure_5);
        };
      });
      const _Symbol = Symbol;
      obj[Symbol.asyncIterator] = function() {
        return this;
      };
      return obj;
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Symbol.asyncIterator is not defined.");
      throw typeError;
    }
  }
  function __asyncDelegator(arg0) {
    function verb(next, arg1) {
      let fn = arg1;
      if (next[next]) {
        fn = (arg0) => {
          closure_2 = !closure_2;
          if (closure_2) {
            let tmp5 = arg0;
            if (arg1) {
              tmp5 = arg1(arg0);
            }
            let obj = tmp5;
          } else {
            obj = { value: callback(arg0[closure_0](arg0)), done: false };
          }
          return obj;
        };
      }
      arg1[next] = fn;
    }
    const obj = {};
    let closure_1 = obj;
    verb("next");
    verb("throw", (arg0) => {
      throw arg0;
    });
    verb("return");
    obj[Symbol.iterator] = function() {
      return this;
    };
    return obj;
  }
  function __asyncValues(arg0) {
    let closure_0 = arg0;
    function verb(next) {
      let closure_0 = next;
      let fn = closure_0[next];
      if (fn) {
        fn = (arg0) => new Promise((arg0, arg1) => {
          const iter = arg0[closure_0](arg0);
          arg0 = iter;
          function settle() { ... }(arg0, arg1, iter.done, arg0.value);
        });
      }
      callResult[next] = fn;
    }
    if (Symbol.asyncIterator) {
      const _Symbol = Symbol;
      if (arg0[Symbol.asyncIterator]) {
        let callResult = obj.call(arg0);
      } else {
        closure_0 = __values(arg0);
        callResult = {};
        let closure_1 = callResult;
        verb("next");
        verb("throw");
        verb("return");
        const _Symbol2 = Symbol;
        callResult[Symbol.asyncIterator] = function() {
          return this;
        };
      }
      return callResult;
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Symbol.asyncIterator is not defined.");
      throw typeError;
    }
  }
  function __makeTemplateObject(arg0, value) {
    if (Object.defineProperty) {
      const _Object = Object;
      const obj = { value };
      Object.defineProperty(arg0, "raw", obj);
    } else {
      arg0.raw = value;
    }
    return arg0;
  }
  let closure_1 = Object.create ? (arg0, value) => {
    Object.defineProperty(arg0, "default", { enumerable: true, value });
  } : (arg0, arg1) => {
    arg0.default = arg1;
  };
  ownKeys = function ownKeys(arg0) {
    const tmp = Object.getOwnPropertyNames || (obj) => {
      const items = [];
      for (const key10005 in arg0) {
        let tmp = key10005;
        let _Object = Object;
        if (!hasOwnProperty.call(arg0, key10005)) {
          continue;
        } else {
          items[items.length] = key10005;
          // continue
        }
        continue;
      }
      return items;
    };
    const ownKeys = tmp;
    return tmp(arg0);
  };
  function __importStar(__esModule) {
    if (__esModule) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      const arr = ownKeys(__esModule);
      let num = 0;
      if (0 < arr.length) {
        do {
          if ("default" !== arr[num]) {
            let tmp2 = closure_30;
            let tmp3 = closure_30(obj, __esModule, arr[num]);
          }
          num = num + 1;
        } while (num < arr.length);
      }
    }
    callback(obj, __esModule);
    return obj;
  }
  function __importDefault(__esModule) {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  }
  function __classPrivateFieldGet(arg0, has, arg2, call) {
    if ("a" === arg2) {
      if (!call) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Private accessor was defined without a getter");
        throw typeError;
      }
    }
    if ("function" === typeof has) {
      let tmp7 = arg0 !== has || !call;
      const tmp8 = arg0 !== has || !call;
    } else {
      tmp7 = !has.has(arg0);
    }
    if (tmp7) {
      const _TypeError2 = TypeError;
      const typeError1 = new TypeError("Cannot read private member from an object whose class did not declare it");
      throw typeError1;
    } else if ("m" === arg2) {
      return call;
    } else if (tmp) {
      let callResult = call.call(arg0);
    } else if (call) {
      callResult = call.value;
    } else {
      callResult = has.get(arg0);
    }
  }
  function __classPrivateFieldSet(arg0, has, value, arg3, call) {
    if ("m" === arg3) {
      const _TypeError3 = TypeError;
      const typeError = new TypeError("Private method is not writable");
      throw typeError;
    } else {
      if ("a" === arg3) {
        if (!call) {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Private accessor was defined without a setter");
          throw typeError1;
        }
      }
      if ("function" === typeof has) {
        let tmp6 = arg0 !== has || !call;
        const tmp7 = arg0 !== has || !call;
      } else {
        tmp6 = !has.has(arg0);
      }
      if (tmp6) {
        const _TypeError2 = TypeError;
        const typeError2 = new TypeError("Cannot write private member to an object whose class did not declare it");
        throw typeError2;
      } else {
        if (tmp20) {
          call.call(arg0, value);
        } else if (call) {
          call.value = value;
        } else {
          const result = has.set(arg0, value);
        }
        return value;
      }
    }
  }
  function __classPrivateFieldIn(has) {
    if (null !== arg1) {
      if ("function" === typeof has) {
        let hasItem = arg1 === has;
      } else {
        hasItem = has.has(arg1);
      }
      return hasItem;
    }
    const typeError = new TypeError("Cannot use 'in' operator on non-object");
    throw typeError;
  }
  function __addDisposableResource(stack, value, arg2) {
    if (null != value) {
      if ("object" !== typeof value) {
        if ("function" !== tmp2) {
          const _TypeError4 = TypeError;
          const typeError = new TypeError("Object expected.");
          throw typeError;
        }
      }
      let dispose;
      if (arg2) {
        const _Symbol = Symbol;
        if (Symbol.asyncDispose) {
          const _Symbol2 = Symbol;
          dispose = value[Symbol.asyncDispose];
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Symbol.asyncDispose is not defined.");
          throw typeError1;
        }
      }
      if (undefined === dispose) {
        const _Symbol3 = Symbol;
        if (Symbol.dispose) {
          const _Symbol4 = Symbol;
          dispose = tmp14;
          if (arg2) {
            dispose = tmp14;
            const tmp8 = tmp14;
          }
        } else {
          const _TypeError2 = TypeError;
          const typeError2 = new TypeError("Symbol.dispose is not defined.");
          throw typeError2;
        }
      }
      if ("function" !== typeof dispose) {
        const _TypeError3 = TypeError;
        const typeError3 = new TypeError("Object not disposable.");
        throw typeError3;
      } else {
        if (tmp8) {
          dispose = function dispose() {
            tmp14.call(this);
          };
        }
        stack = stack.stack;
        let obj = { value, dispose, async: arg2 };
        stack.push(obj);
      }
    } else if (arg2) {
      const stack1 = stack.stack;
      obj = { async: true };
      stack1.push(obj);
    }
    return value;
  }
  closure_3 = "function" === typeof globalThis.SuppressedError ? globalThis.SuppressedError : (error, suppressed) => {
    error = new Error(arg2);
    error.name = "SuppressedError";
    error.error = error;
    error.suppressed = suppressed;
    return error;
  };
  function __disposeResources(arg0) {
    function fail(reconnect, error, arg2) {
      let tmp2 = reconnect;
      if (reconnect.hasError) {
        const prototype = fail.prototype;
        tmp2 = new fail(reconnect, reconnect.error, "An error was suppressed during disposal.");
      }
      reconnect.error = tmp2;
      reconnect.hasError = true;
    }
    let closure_2 = 0;
    function next(self) {
      const stack = self.stack;
      let arr = stack.pop();
      if (arr) {
        while (true) {
          let tmp2 = arr;
          if (!arr.async) {
            let tmp3 = closure_2;
            if (1 === closure_2) {
              break;
            }
          }
          let tmp9 = arr;
          if (arr.dispose) {
            let tmp11 = arr;
            let dispose = arr.dispose;
            let tmp12 = arr;
            let callResult = dispose.call(arr.value);
            let tmp14 = arr;
            if (arr.async) {
              let tmp15 = closure_2;
              let num2 = 2;
              closure_2 = closure_2 | 2;
              let tmp16 = globalThis;
              let _Promise2 = Promise;
              let tmp17 = callResult;
              let resolved = Promise.resolve(callResult);
              let tmp18 = next;
              return resolved.then(next, (arg0) => {
                callback(arg0);
                return callback2();
              });
            }
          } else {
            let tmp10 = closure_2;
            closure_2 = closure_2 | 1;
          }
          do {
            let tmp19 = closure_0;
            let stack1 = closure_0.stack;
            arr = stack1.pop();
            closure_1 = arr;
          } while (!arr);
        }
        closure_2 = 0;
        const stack2 = self.stack;
        stack2.push(arr);
        const resolved1 = Promise.resolve();
        return resolved1.then(next);
      }
      if (1 === closure_2) {
        if (self.hasError) {
          let rejectResult = _Promise3.reject(self.error);
        } else {
          rejectResult = _Promise3.resolve();
        }
        return rejectResult;
      } else if (self.hasError) {
        throw self.error;
      }
    }
    const __rest = next;
    return next();
  }
  function __rewriteRelativeImportExtension(str) {
    let replaced = str;
    if ("string" === typeof str) {
      replaced = str;
      if (obj.test(str)) {
        replaced = str.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (arg0, arg1, arg2, arg3, arg4) => {
          if (arg1) {
            let str3 = ".js";
            if (arg1) {
              str3 = ".jsx";
            }
            let text = str3;
          } else if (!arg2) {
            const sum = arg2 + arg3;
            text = `${tmp2 + "." + arg4.toLowerCase()}js`;
          } else {
            text = arg0;
            if (arg3) {
              text = arg0;
            }
          }
          return text;
        });
      }
      const obj = /^\.\.?\//;
    }
    return replaced;
  }
  arg0("__extends", ownKeys);
  arg0("__assign", closure_3);
  arg0("__rest", __rest);
  arg0("__decorate", __decorate);
  arg0("__param", __param);
  arg0("__esDecorate", __esDecorate);
  arg0("__runInitializers", __runInitializers);
  arg0("__propKey", __propKey);
  arg0("__setFunctionName", __setFunctionName);
  arg0("__metadata", __metadata);
  arg0("__awaiter", __awaiter);
  arg0("__generator", __generator);
  arg0("__exportStar", __exportStar);
  arg0("__createBinding", closure_30);
  arg0("__values", __values);
  arg0("__read", __read);
  arg0("__spread", __spread);
  arg0("__spreadArrays", __spreadArrays);
  arg0("__spreadArray", __spreadArray);
  arg0("__await", __await);
  arg0("__asyncGenerator", __asyncGenerator);
  arg0("__asyncDelegator", __asyncDelegator);
  arg0("__asyncValues", __asyncValues);
  arg0("__makeTemplateObject", __makeTemplateObject);
  arg0("__importStar", __importStar);
  arg0("__importDefault", __importDefault);
  arg0("__classPrivateFieldGet", __classPrivateFieldGet);
  arg0("__classPrivateFieldSet", __classPrivateFieldSet);
  arg0("__classPrivateFieldIn", __classPrivateFieldIn);
  arg0("__addDisposableResource", __addDisposableResource);
  arg0("__disposeResources", __disposeResources);
  arg0("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
});
