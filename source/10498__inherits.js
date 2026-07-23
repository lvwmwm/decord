// Module ID: 10498
// Function ID: 81297
// Name: _inherits
// Dependencies: []

// Module 10498 (_inherits)
let fn = () => {
  let items = [
    (arg0, arg1, arg2) => {
      module.exports = arg2(1);
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg2;
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      let closure_1 = Object.assign || ((arg0) => {
        for (let num = 1; num < arguments.length; num = num + 1) {
          let tmp3 = arguments[num];
          let tmp4 = tmp3;
          let tmp5 = tmp2;
          let keys = Object.keys();
          if (keys !== undefined) {
            tmp2 = tmp5;
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
                continue;
              }
              continue;
            }
          }
        }
        return arg0;
      });
      let closure_2 = arg2(2);
      let closure_3 = arg2(14);
      let closure_4 = arg2(19);
      let closure_5 = arg2(16);
      let closure_6 = arg2(32);
      let closure_7 = arg2(15);
      let obj = { alternatives: arg2(28), array: arg2(33), boolean: arg2(27), binary: arg2(34), date: arg2(20), number: arg2(26), object: arg2(29), string: arg2(21) };
      obj.root = () => {
        let obj = new closure_3();
        let cloneResult = obj.clone();
        cloneResult.any = () => {
          outer1_2.assert(0 === arguments.length, "Joi.any() does not allow arguments.");
          return obj;
        };
        const fn = () => {
          const alternatives = outer1_8.alternatives;
          if (arguments.length) {
            const _try = alternatives.try;
            let applyResult = _try(...arguments);
          } else {
            applyResult = alternatives;
          }
          return applyResult;
        };
        cloneResult.alt = fn;
        cloneResult.alternatives = fn;
        cloneResult.array = () => {
          outer1_2.assert(0 === arguments.length, "Joi.array() does not allow arguments.");
          return outer1_8.array;
        };
        const fn2 = () => {
          outer1_2.assert(0 === arguments.length, "Joi.boolean() does not allow arguments.");
          return outer1_8.boolean;
        };
        cloneResult.bool = fn2;
        cloneResult.boolean = fn2;
        cloneResult.binary = () => {
          outer1_2.assert(0 === arguments.length, "Joi.binary() does not allow arguments.");
          return outer1_8.binary;
        };
        cloneResult.date = () => {
          outer1_2.assert(0 === arguments.length, "Joi.date() does not allow arguments.");
          return outer1_8.date;
        };
        cloneResult.func = () => {
          outer1_2.assert(0 === arguments.length, "Joi.func() does not allow arguments.");
          const object = outer1_8.object;
          return object._func();
        };
        cloneResult.number = () => {
          outer1_2.assert(0 === arguments.length, "Joi.number() does not allow arguments.");
          return outer1_8.number;
        };
        cloneResult.object = () => {
          const object = outer1_8.object;
          if (arguments.length) {
            const keys = object.keys;
            let applyResult = keys(...arguments);
          } else {
            applyResult = object;
          }
          return applyResult;
        };
        cloneResult.string = () => {
          outer1_2.assert(0 === arguments.length, "Joi.string() does not allow arguments.");
          return outer1_8.string;
        };
        cloneResult.ref = () => {
          const create = outer1_7.create;
          return create(...arguments);
        };
        cloneResult.isRef = (arg0) => outer1_7.isRef(arg0);
        cloneResult.validate = (arg0) => {
          const tmp = arguments[arguments.length - 1];
          let tmp2 = null;
          if ("function" === typeof tmp) {
            tmp2 = tmp;
          }
          let num = 0;
          if (tmp2) {
            num = 1;
          }
          const diff = arguments.length - num;
          if (1 === diff) {
            return obj.validate(arg0, tmp2);
          } else {
            if (3 === diff) {
              obj = arguments[2];
            } else {
              obj = {};
            }
            return cloneResult.compile(arguments[1])._validateWithOptions(arg0, obj, tmp2);
          }
        };
        cloneResult.describe = () => {
          if (arguments.length) {
            let compileResult = cloneResult.compile(arguments[0]);
          } else {
            compileResult = obj;
          }
          return compileResult.describe();
        };
        cloneResult.compile = (otherwise) => outer1_4.schema(otherwise);
        cloneResult.assert = (arg0, arg1, arg2) => {
          cloneResult.attempt(arg0, arg1, arg2);
        };
        cloneResult.attempt = (arg0, arg1, arg2) => {
          const iter = cloneResult.validate(arg0, arg1);
          const error = iter.error;
          if (error) {
            if (arg2) {
              const _Error = Error;
              if (arg2 instanceof Error) {
                throw arg2;
              } else {
                const text = `${arg2} `;
                error.message = `${arg2} ` + error.annotate();
                throw error;
              }
            } else {
              error.message = error.annotate();
              throw error;
            }
          } else {
            return iter.value;
          }
        };
        cloneResult.reach = function(_inner, str) {
          const self = this;
          let tmp2 = _inner;
          if (_inner) {
            tmp2 = _inner instanceof outer1_3;
          }
          outer1_2.assert(tmp2, "you must provide a joi schema");
          outer1_2.assert("string" === typeof str, "path must be a string");
          if ("" === str) {
            return _inner;
          } else {
            const children = _inner._inner.children;
            if (children) {
              let num = 0;
              const first = tmp6[0];
              if (0 < children.length) {
                while (children[num].key !== first) {
                  num = num + 1;
                }
                return self.reach(children[num].schema, str.substr(first.length + 1));
              }
            }
          }
        };
        cloneResult.lazy = (arg0) => outer1_6.set(arg0);
        cloneResult.extend = function() {
          let length;
          let self = this;
          const flattenResult = outer1_2.flatten(slice.call(arguments));
          let num = 0;
          outer1_2.assert(flattenResult.length > 0, "You need to provide at least one extension");
          this.assert(flattenResult, flattenResult.extensionsSchema);
          let obj = Object.create(this);
          if (0 < flattenResult.length) {
            do {
              let tmp4 = (function _loop(arg0) {
                let self = tmp;
                let base = tmp.base;
                if (!base) {
                  base = self.any();
                }
                const cloneResult = base.clone();
                let constructor = cloneResult.constructor;
                let tmp4 = (() => { ... })(constructor);
                let closure_3 = tmp4;
                if (cloneResult[arg0].coerce) {
                  class tmp4 {
                    _coerce(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (constructor.prototype._coerce) {
                        tmp = constructor;
                        _coerce = constructor.prototype._coerce;
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = _coerce.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      coerce = closure_0.coerce;
                      callResult = coerce.call(self, value, arg1, arg2);
                      if (callResult instanceof outer3_5.Err) {
                        obj = {};
                        obj.value = value;
                        obj.errors = callResult;
                      } else {
                        obj = {};
                        obj.value = callResult;
                      }
                      return obj;
                    }
                  }
                }
                if (cloneResult[arg0].pre) {
                  class tmp4 {
                    _coerce(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (constructor.prototype._coerce) {
                        tmp = constructor;
                        _coerce = constructor.prototype._coerce;
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = _coerce.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      coerce = closure_0.coerce;
                      callResult = coerce.call(self, value, arg1, arg2);
                      if (callResult instanceof outer3_5.Err) {
                        obj = {};
                        obj.value = value;
                        obj.errors = callResult;
                      } else {
                        obj = {};
                        obj.value = callResult;
                      }
                      return obj;
                    }
                    _base(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (constructor.prototype._base) {
                        tmp = constructor;
                        _base = constructor.prototype._base;
                        tmp2 = _base;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = _base.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      pre = closure_0.pre;
                      callResult = pre.call(self, value, arg1, arg2);
                      if (callResult instanceof outer3_5.Err) {
                        obj = {};
                        obj.value = value;
                        obj.errors = callResult;
                      } else {
                        obj = {};
                        obj.value = callResult;
                      }
                      return obj;
                    }
                  }
                }
                if (cloneResult[arg0].rules) {
                  class tmp4 {
                    _coerce(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (constructor.prototype._coerce) {
                        tmp = constructor;
                        _coerce = constructor.prototype._coerce;
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = _coerce.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      coerce = closure_0.coerce;
                      callResult = coerce.call(self, value, arg1, arg2);
                      if (callResult instanceof outer3_5.Err) {
                        obj = {};
                        obj.value = value;
                        obj.errors = callResult;
                      } else {
                        obj = {};
                        obj.value = callResult;
                      }
                      return obj;
                    }
                    _base(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (constructor.prototype._base) {
                        tmp = constructor;
                        _base = constructor.prototype._base;
                        tmp2 = _base;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = _base.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      pre = closure_0.pre;
                      callResult = pre.call(self, value, arg1, arg2);
                      if (callResult instanceof outer3_5.Err) {
                        obj = {};
                        obj.value = value;
                        obj.errors = callResult;
                      } else {
                        obj = {};
                        obj.value = callResult;
                      }
                      return obj;
                    }
                  }
                  if (0 < tmp.rules.length) {
                    class tmp4 {
                      _coerce(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (constructor.prototype._coerce) {
                          tmp = constructor;
                          _coerce = constructor.prototype._coerce;
                          tmp2 = _coerce;
                          tmp3 = self;
                          tmp4 = arg0;
                          tmp5 = arg1;
                          tmp6 = arg2;
                          iter = _coerce.call(self, arg0, arg1, arg2);
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        coerce = closure_0.coerce;
                        callResult = coerce.call(self, value, arg1, arg2);
                        if (callResult instanceof outer3_5.Err) {
                          obj = {};
                          obj.value = value;
                          obj.errors = callResult;
                        } else {
                          obj = {};
                          obj.value = callResult;
                        }
                        return obj;
                      }
                      _base(arg0, arg1, arg2) {
                        self = this;
                        value = arg0;
                        if (constructor.prototype._base) {
                          tmp = constructor;
                          _base = constructor.prototype._base;
                          tmp2 = _base;
                          tmp3 = self;
                          tmp4 = arg0;
                          tmp5 = arg1;
                          tmp6 = arg2;
                          iter = _base.call(self, arg0, arg1, arg2);
                          if (iter.errors) {
                            return iter;
                          } else {
                            value = iter.value;
                          }
                        }
                        pre = closure_0.pre;
                        callResult = pre.call(self, value, arg1, arg2);
                        if (callResult instanceof outer3_5.Err) {
                          obj = {};
                          obj.value = value;
                          obj.errors = callResult;
                        } else {
                          obj = {};
                          obj.value = callResult;
                        }
                        return obj;
                      }
                    }
                  }
                }
                if (cloneResult[arg0].describe) {
                  class tmp4 {
                    _coerce(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (constructor.prototype._coerce) {
                        tmp = constructor;
                        _coerce = constructor.prototype._coerce;
                        tmp2 = _coerce;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = _coerce.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      coerce = closure_0.coerce;
                      callResult = coerce.call(self, value, arg1, arg2);
                      if (callResult instanceof outer3_5.Err) {
                        obj = {};
                        obj.value = value;
                        obj.errors = callResult;
                      } else {
                        obj = {};
                        obj.value = callResult;
                      }
                      return obj;
                    }
                    _base(arg0, arg1, arg2) {
                      self = this;
                      value = arg0;
                      if (constructor.prototype._base) {
                        tmp = constructor;
                        _base = constructor.prototype._base;
                        tmp2 = _base;
                        tmp3 = self;
                        tmp4 = arg0;
                        tmp5 = arg1;
                        tmp6 = arg2;
                        iter = _base.call(self, arg0, arg1, arg2);
                        if (iter.errors) {
                          return iter;
                        } else {
                          value = iter.value;
                        }
                      }
                      pre = closure_0.pre;
                      callResult = pre.call(self, value, arg1, arg2);
                      if (callResult instanceof outer3_5.Err) {
                        obj = {};
                        obj.value = value;
                        obj.errors = callResult;
                      } else {
                        obj = {};
                        obj.value = callResult;
                      }
                      return obj;
                    }
                    describe() {
                      describe = constructor.prototype.describe;
                      describe2 = closure_0.describe;
                      return describe2.call(this, describe.call(this));
                    }
                  }
                }
                tmp4 = new tmp4();
                let closure_4 = tmp4;
                constructor[cloneResult[arg0].name] = /* F81336 */ function() { ... };
              })(num);
              num = num + 1;
              length = flattenResult.length;
            } while (num < length);
          }
          return obj;
        };
        let array = obj.array;
        let object = obj.object;
        obj = { base: object.type(closure_3, "Joi object"), name: string.required() };
        object = obj.object;
        string = obj.string;
        object = obj.object;
        obj.coerce = object._func().arity(3);
        const object1 = obj.object;
        const _funcResult = object._func();
        obj.pre = object1._func().arity(3);
        obj.language = obj.object;
        const object2 = obj.object;
        const _funcResult1 = object1._func();
        obj.describe = object2._func().arity(1);
        array = obj.array;
        const object3 = obj.object;
        obj = { name: string2.required() };
        string2 = obj.string;
        const object4 = obj.object;
        const _funcResult2 = object2._func();
        obj.setup = object4._func().arity(1);
        const object5 = obj.object;
        const _funcResult3 = object4._func();
        obj.validate = object5._func().arity(4);
        const object6 = obj.object;
        const object7 = obj.object;
        const items = [object6.pattern(/.*/, object7.type(closure_3, "Joi object")), ];
        const object8 = obj.object;
        items[1] = object8.type(obj.object.constructor, "Joi object");
        obj.params = items;
        const items1 = [obj.string, ];
        const object9 = obj.object;
        const _funcResult4 = object5._func();
        items1[1] = object9._func().arity(1);
        obj.description = items1;
        let keys = object3.keys(obj);
        obj.rules = array.items(keys.or("setup", "validate"));
        const _funcResult5 = object9._func();
        cloneResult.extensionsSchema = array.items(object.keys(obj)).strict();
        cloneResult.version = obj(35).version;
        return cloneResult;
      };
      module.exports = obj.root();
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      let closure_1 = arg2;
      let fn = (arg0, arg1) => {
        let closure_0 = arg0;
        const callback = arg1;
        if ("function" === typeof Symbol) {
          let _Symbol = Symbol;
          if ("symbol" === typeof Symbol.iterator) {
            let fn = (arg0) => typeof arg0;
          }
          let closure_3 = callback(8);
          let closure_4 = callback(9);
          let closure_5 = callback(13);
          let obj = {};
          closure_0.clone = (getTime) => {
            let map = arg1;
            let str = "undefined";
            if (undefined !== getTime) {
              str = fn(getTime);
            }
            if ("object" === str) {
              if (null !== getTime) {
                if (!map) {
                  const _Map = Map;
                  map = new Map();
                }
                const value = map.get(getTime);
                if (value) {
                  return value;
                } else {
                  const _Array = Array;
                  if (Array.isArray(getTime)) {
                    let items = [];
                    let flag = true;
                  } else if (ctor.isBuffer(getTime)) {
                    const prototype4 = ctor.prototype;
                    items = new ctor(getTime);
                    flag = false;
                  } else {
                    const _Date = Date;
                    if (getTime instanceof Date) {
                      const _Date2 = Date;
                      items = new Date(getTime.getTime());
                      flag = false;
                    } else {
                      const _RegExp = RegExp;
                      if (getTime instanceof RegExp) {
                        const _RegExp2 = RegExp;
                        items = new RegExp(getTime);
                        flag = false;
                      } else {
                        const _Object = Object;
                        const prototypeOf = Object.getPrototypeOf(getTime);
                        if (!prototypeOf) {
                          const _Object2 = Object;
                          items = Object.create(prototypeOf);
                          flag = true;
                        } else {
                          items = getTime;
                          flag = false;
                        }
                      }
                    }
                  }
                  const result = map.set(getTime, items);
                  if (flag) {
                    const _Object3 = Object;
                    const ownPropertyNames = Object.getOwnPropertyNames(getTime);
                    for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
                      let tmp20 = ownPropertyNames[num];
                      let _Object4 = Object;
                      let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(getTime, tmp20);
                      if (!ownPropertyDescriptor) {
                        let tmp22 = ctor;
                        items[tmp20] = ctor.clone(getTime[tmp20], map);
                      } else {
                        let _Object5 = Object;
                        let definePropertyResult = Object.defineProperty(items, tmp20, ownPropertyDescriptor);
                      }
                    }
                  }
                  return items;
                }
              }
            }
            return getTime;
          };
          closure_0.merge = (arr, prototype) => {
            let length;
            let tmp2 = arr;
            if (arr) {
              let str = "undefined";
              if (undefined !== arr) {
                str = fn(arr);
              }
              tmp2 = "object" === str;
            }
            ctor.assert(tmp2, "Invalid target value: must be an object");
            let tmp6 = null == prototype;
            if (!tmp6) {
              let str3 = "undefined";
              if (undefined !== prototype) {
                str3 = fn(prototype);
              }
              tmp6 = "object" === str3;
            }
            ctor.assert(tmp6, "Invalid source value: must be null, undefined, or an object");
            if (prototype) {
              const _Array = Array;
              if (Array.isArray(prototype)) {
                const _Array4 = Array;
                ctor.assert(Array.isArray(arr), "Cannot merge array onto an object");
                if (false === arg3) {
                  arr.length = 0;
                }
                let num3 = 0;
                if (0 < prototype.length) {
                  do {
                    let tmp27 = ctor;
                    arr = arr.push(ctor.clone(prototype[num3]));
                    num3 = num3 + 1;
                    length = prototype.length;
                  } while (num3 < length);
                }
                return arr;
              } else {
                const _Object = Object;
                const keys = Object.keys(prototype);
                let num = 0;
                if (0 < keys.length) {
                  while (true) {
                    let tmp11 = keys[num];
                    let tmp12 = prototype[tmp11];
                    if (tmp12) {
                      let str7 = "undefined";
                      if (undefined !== tmp12) {
                        let tmp13 = fn;
                        str7 = fn(tmp12);
                      }
                      if ("object" === str7) {
                        if (arr[tmp11]) {
                          let tmp15 = fn;
                          if ("object" === fn(arr[tmp11])) {
                            let _Array2 = Array;
                            let _Array3 = Array;
                            let isArray = Array.isArray(arr[tmp11]);
                            if (isArray === Array.isArray(tmp12)) {
                              let _Date = Date;
                              if (!(tmp12 instanceof Date)) {
                                let tmp17 = ctor;
                                if (!ctor.isBuffer(tmp12)) {
                                  let _RegExp = RegExp;
                                  if (!(tmp12 instanceof RegExp)) {
                                    let tmp18 = ctor;
                                    let tmp19 = ctor;
                                    let tmp20 = tmp12;
                                    let tmp21 = arg2;
                                    let tmp22 = arg3;
                                    let mergeResult = ctor.merge(arr[tmp11], tmp12, arg2, arg3);
                                  }
                                  num = num + 1;
                                  if (num >= keys.length) {
                                    break;
                                  }
                                }
                              }
                            }
                          }
                        }
                        let tmp24 = ctor;
                        arr[tmp11] = ctor.clone(tmp12);
                      }
                    }
                    let tmp14 = null != tmp12 || tmp10;
                    if (tmp14) {
                      arr[tmp11] = tmp12;
                    }
                  }
                }
                return arr;
              }
            } else {
              return arr;
            }
          };
          closure_0.applyToDefaults = (prototype, prototype) => {
            let tmp2 = prototype;
            if (prototype) {
              let str = "undefined";
              if (undefined !== prototype) {
                str = fn(prototype);
              }
              tmp2 = "object" === str;
            }
            ctor.assert(tmp2, "Invalid defaults value: must be an object");
            let tmp6 = !prototype;
            if (!tmp6) {
              tmp6 = true === prototype;
            }
            if (!tmp6) {
              let str3 = "undefined";
              if (undefined !== prototype) {
                str3 = fn(prototype);
              }
              tmp6 = "object" === str3;
            }
            ctor.assert(tmp6, "Invalid options value: must be true, falsy or an object");
            if (prototype) {
              const cloneResult = ctor.clone(prototype);
              let mergeResult = cloneResult;
              if (true !== prototype) {
                mergeResult = ctor.merge(cloneResult, prototype, true === arg2, false);
              }
              return mergeResult;
            } else {
              return null;
            }
          };
          closure_0.cloneWithShallow = (prototype) => {
            if (prototype) {
              let str = "undefined";
              if (undefined !== prototype) {
                str = fn(prototype);
              }
              if ("object" === str) {
                const cloneResult = ctor.clone(prototype);
                obj.restore(cloneResult, prototype, obj.store(prototype, arg1));
                return cloneResult;
              }
            }
            return prototype;
          };
          obj.store = (arg0, arg1) => {
            const obj = {};
            for (let num = 0; num < arg1.length; num = num + 1) {
              let tmp = arg1[num];
              let tmp2 = ctor;
              let reachResult = ctor.reach(arg0, tmp);
              if (undefined !== reachResult) {
                obj[tmp] = reachResult;
                let tmp4 = obj;
                let reachSetResult = obj.reachSet(arg0, tmp, undefined);
              }
            }
            return obj;
          };
          obj.restore = (arg0, arg1, arg2) => {
            let length;
            const keys = Object.keys(arg2);
            let num = 0;
            if (0 < keys.length) {
              do {
                let tmp = keys[num];
                let tmp2 = obj;
                let reachSetResult = obj.reachSet(arg0, tmp, arg2[tmp]);
                let tmp4 = obj;
                let reachSetResult1 = obj.reachSet(arg1, tmp, arg2[tmp]);
                num = num + 1;
                length = keys.length;
              } while (num < length);
            }
          };
          obj.reachSet = (arg0, str) => {
            let tmp = arg0;
            const parts = str.split(".");
            for (let num = 0; num < parts.length; num = num + 1) {
              let tmp2 = parts[num];
              if (num + 1 === parts.length) {
                tmp[tmp2] = arg2;
              }
              tmp = tmp[tmp2];
            }
          };
          closure_0.applyToDefaultsWithShallow = (prototype, prototype) => {
            let tmp2 = prototype;
            if (prototype) {
              let str = "undefined";
              if (undefined !== prototype) {
                str = fn(prototype);
              }
              tmp2 = "object" === str;
            }
            ctor.assert(tmp2, "Invalid defaults value: must be an object");
            let tmp6 = !prototype;
            if (!tmp6) {
              tmp6 = true === prototype;
            }
            if (!tmp6) {
              let str3 = "undefined";
              if (undefined !== prototype) {
                str3 = fn(prototype);
              }
              tmp6 = "object" === str3;
            }
            ctor.assert(tmp6, "Invalid options value: must be true, falsy or an object");
            let isArray = arg2;
            if (arg2) {
              const _Array = Array;
              isArray = Array.isArray(arg2);
            }
            ctor.assert(isArray, "Invalid keys");
            if (prototype) {
              const cloneWithShallowResult = ctor.cloneWithShallow(prototype, arg2);
              if (true === prototype) {
                return cloneWithShallowResult;
              } else {
                ctor.merge(cloneWithShallowResult, prototype, false, false);
                obj.restore(cloneWithShallowResult, prototype, obj.store(prototype, arg2));
                return cloneWithShallowResult;
              }
            } else {
              return null;
            }
          };
          closure_0.deepEqual = (getTime, getTime2) => {
            let tmp = arg2;
            let items = arg3;
            if (!arg2) {
              const obj = { prototype: true };
              tmp = obj;
            }
            let str = "undefined";
            let str2 = "undefined";
            if (undefined !== getTime) {
              str2 = fn(getTime);
            }
            if (undefined !== getTime2) {
              str = fn(getTime2);
            }
            if (str2 !== str) {
              return false;
            } else {
              if ("object" === str2) {
                if (null !== getTime) {
                  if (null !== getTime2) {
                    if (!items) {
                      items = [];
                    }
                    if (-1 !== items.indexOf(getTime)) {
                      return true;
                    } else {
                      items.push(getTime);
                      const _Array2 = Array;
                      if (Array.isArray(getTime)) {
                        const _Array = Array;
                        if (Array.isArray(getTime2)) {
                          if (!tmp.part) {
                            if (getTime.length !== getTime2.length) {
                              return false;
                            }
                          }
                          let num5 = 0;
                          if (0 < getTime.length) {
                            while (!tmp.part) {
                              let tmp23 = ctor;
                              if (ctor.deepEqual(getTime[num5], getTime2[num5], tmp)) {
                                num5 = num5 + 1;
                              } else {
                                let flag13 = false;
                                return false;
                              }
                            }
                            let num6 = 0;
                            let flag15 = false;
                            if (0 < getTime2.length) {
                              flag15 = true;
                              while (!ctor.deepEqual(getTime[num5], getTime2[num6], tmp)) {
                                num6 = num6 + 1;
                                flag15 = false;
                                if (num6 >= getTime2.length) {
                                  break;
                                }
                              }
                            }
                            return flag15;
                          }
                          return true;
                        } else {
                          return false;
                        }
                      } else if (ctor.isBuffer(getTime)) {
                        if (ctor.isBuffer(getTime2)) {
                          if (getTime.length !== getTime2.length) {
                            return false;
                          } else {
                            let num3 = 0;
                            if (0 < getTime.length) {
                              while (getTime[num3] === getTime2[num3]) {
                                num3 = num3 + 1;
                              }
                              return false;
                            }
                            return true;
                          }
                        } else {
                          return false;
                        }
                      } else {
                        const _Date = Date;
                        if (getTime instanceof Date) {
                          const _Date2 = Date;
                          let tmp19 = getTime2 instanceof Date;
                          if (tmp19) {
                            const time = getTime.getTime();
                            tmp19 = time === getTime2.getTime();
                          }
                          return tmp19;
                        } else {
                          const _RegExp = RegExp;
                          if (getTime instanceof RegExp) {
                            const _RegExp2 = RegExp;
                            let tmp17 = getTime2 instanceof RegExp;
                            if (tmp17) {
                              str = getTime.toString();
                              tmp17 = str === getTime2.toString();
                            }
                            return tmp17;
                          } else {
                            if (tmp.prototype) {
                              const _Object = Object;
                              const _Object2 = Object;
                              const prototypeOf = Object.getPrototypeOf(getTime);
                              if (prototypeOf !== Object.getPrototypeOf(getTime2)) {
                                return false;
                              }
                            }
                            const _Object3 = Object;
                            const ownPropertyNames = Object.getOwnPropertyNames(getTime);
                            if (!tmp.part) {
                              const _Object4 = Object;
                              if (ownPropertyNames.length !== Object.getOwnPropertyNames(getTime2).length) {
                                return false;
                              }
                            }
                            let num2 = 0;
                            if (0 < ownPropertyNames.length) {
                              while (true) {
                                let tmp7 = ownPropertyNames[num2];
                                let _Object5 = Object;
                                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(getTime, tmp7);
                                let tmp9 = ctor;
                                let deepEqual = ctor.deepEqual;
                                if (ownPropertyDescriptor.get) {
                                  let _Object6 = Object;
                                  let tmp13 = tmp9;
                                  let tmp14 = ownPropertyDescriptor;
                                  let tmp15 = tmp;
                                  let tmp16 = items;
                                  if (!deepEqual(ownPropertyDescriptor, Object.getOwnPropertyDescriptor(getTime2, tmp7), tmp, tmp4)) {
                                    let flag4 = false;
                                    return false;
                                  }
                                } else {
                                  let tmp10 = tmp9;
                                  let tmp11 = tmp;
                                  let tmp12 = items;
                                  if (!deepEqual(getTime[tmp7], getTime2[tmp7], tmp, tmp4)) {
                                    break;
                                  }
                                }
                                num2 = num2 + 1;
                              }
                              return false;
                            }
                            return true;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (getTime === getTime2) {
                let tmp26 = 0 !== getTime;
                if (!tmp26) {
                  tmp26 = 1 / getTime === 1 / getTime2;
                }
                let tmp25 = tmp26;
              } else {
                tmp25 = getTime != getTime && getTime2 != getTime2;
              }
              return tmp25;
            }
          };
          closure_0.unique = (items) => {
            let closure_0 = items;
            let closure_1 = arg1;
            if (arg1) {
              (() => {
                let closure_2 = [];
                const set = new Set();
                const item = set.forEach(() => { ... });
              })();
            } else {
              const _Array = Array;
              const _Set = Set;
              let set = new Set(items);
              let closure_2 = Array.from(set);
            }
            return closure_2;
          };
          closure_0.mapToObject = (arg0, arg1) => {
            if (arg0) {
              const obj = {};
              for (let num = 0; num < arg0.length; num = num + 1) {
                let tmp2 = arg0[num];
                if (arg1) {
                  if (tmp2[arg1]) {
                    obj[arg0[num][arg1]] = true;
                  }
                } else {
                  obj[tmp2] = true;
                }
              }
              return obj;
            } else {
              return null;
            }
          };
          closure_0.intersect = (arg0, arg1, arg2) => {
            if (arg0) {
              if (arg1) {
                const items = [];
                const _Array = Array;
                let mapToObjectResult = arg0;
                if (Array.isArray(arg0)) {
                  mapToObjectResult = ctor.mapToObject(arg0);
                }
                const obj = {};
                let num = 0;
                if (0 < arg1.length) {
                  while (true) {
                    if (mapToObjectResult[arg1[num]]) {
                      if (!obj[arg1[num]]) {
                        if (arg2) {
                          break;
                        } else {
                          let arr = items.push(arg1[num]);
                          obj[arg1[num]] = true;
                        }
                      }
                    }
                    num = num + 1;
                  }
                  return arg1[num];
                }
                let tmp5 = null;
                if (!arg2) {
                  tmp5 = items;
                }
                return tmp5;
              }
            }
            return [];
          };
          closure_0.contain = (prototype, prototype) => {
            let length;
            let obj = arg2;
            let combined = prototype;
            let str = "undefined";
            let str2 = "undefined";
            if (undefined !== prototype) {
              str2 = fn(prototype);
            }
            if ("object" === str2) {
              let tmp3 = str;
              if (undefined !== prototype) {
                tmp3 = fn(prototype);
              }
              if ("object" === tmp3) {
                const _Array = Array;
                if (!Array.isArray(prototype)) {
                  const _Array2 = Array;
                  if (!Array.isArray(prototype)) {
                    const _Object = Object;
                    const keys = Object.keys(prototype);
                    combined = keys;
                    let arr = keys;
                    let tmp7 = prototype;
                  }
                  if (!obj) {
                    obj = {};
                  }
                  ctor.assert(arguments.length >= 2, "Insufficient arguments");
                  let tmp12 = tmp11;
                  if ("string" !== typeof prototype) {
                    if (!tmp) {
                      str = fn(prototype);
                    }
                    tmp12 = "object" === str;
                  }
                  ctor.assert(tmp12, "Reference must be string or an object");
                  ctor.assert(arr.length, "Values array cannot be empty");
                  if (obj.deep) {
                    const hasOwnPropertyResult = obj.hasOwnProperty("only");
                    const hasOwnPropertyResult1 = obj.hasOwnProperty("part");
                    obj = {};
                    if (hasOwnPropertyResult) {
                      let only = obj.only;
                    } else {
                      only = !tmp20;
                      if (!!hasOwnPropertyResult1) {
                        only = !obj.part;
                      }
                    }
                    obj.prototype = only;
                    if (hasOwnPropertyResult) {
                      let tmp21 = !obj.only;
                    } else {
                      tmp21 = !hasOwnPropertyResult1 || obj.part;
                    }
                    obj.part = tmp21;
                    const deepEqual = ctor.deepEqual;
                  } else {
                    function compare(arg0, arg1, arg2) {
                      return arg0 === arg1;
                    }
                    const _Array3 = Array;
                    prototype = Array.prototype;
                    const array = new Array(arr.length);
                    let num3 = 0;
                    if (0 < array.length) {
                      do {
                        array[num3] = 0;
                        num3 = num3 + 1;
                        length = array.length;
                      } while (num3 < length);
                    }
                    if (tmp11) {
                      let str9 = "(";
                      let num8 = 0;
                      let str13 = "(";
                      if (0 < arr.length) {
                        do {
                          let tmp30 = arr[num8];
                          let tmp31 = ctor;
                          let assertResult3 = ctor.assert("string" === typeof tmp30, "Cannot compare string reference to non-string value");
                          let str14 = "";
                          if (num8) {
                            str14 = "|";
                          }
                          let tmp33 = ctor;
                          str9 = str9 + (str14 + ctor.escapeRegex(tmp30));
                          num8 = num8 + 1;
                          str13 = str9;
                        } while (num8 < arr.length);
                      }
                      const _RegExp = RegExp;
                      const regExp = new RegExp(str13 + ")", "g");
                      let flag3 = prototype.replace(regExp, (arg0, arg1) => {
                        const index = combined.indexOf(arg1);
                        array[index] = array[index] + 1;
                        return "";
                      });
                    } else {
                      const _Array4 = Array;
                      if (Array.isArray(prototype)) {
                        let flag6 = false;
                        let num6 = 0;
                        flag3 = false;
                        if (0 < prototype.length) {
                          do {
                            let num7 = 0;
                            let flag7 = false;
                            if (0 < arr.length) {
                              while (true) {
                                let tmp29 = compare(arr[num7], prototype[num6], undefined) && num7;
                                num7 = num7 + 1;
                                flag7 = tmp29;
                                if (num7 >= arr.length) {
                                  break;
                                } else {
                                  flag7 = tmp29;
                                  if (false !== tmp29) {
                                    break;
                                  }
                                }
                              }
                            }
                            let flag8 = true;
                            if (false !== flag7) {
                              array[flag7] = array[flag7] + 1;
                              flag8 = flag6;
                            }
                            num6 = num6 + 1;
                            flag6 = flag8;
                            flag3 = flag8;
                          } while (num6 < prototype.length);
                        }
                      } else {
                        const _Object2 = Object;
                        const ownPropertyNames = Object.getOwnPropertyNames(prototype);
                        let flag2 = false;
                        let num5 = 0;
                        flag3 = false;
                        if (0 < ownPropertyNames.length) {
                          while (true) {
                            let tmp27 = ownPropertyNames[num5];
                            let index = arr.indexOf(tmp27);
                            let flag4 = true;
                            if (-1 !== index) {
                              if (tmp7) {
                                if (!compare(tmp7[tmp27], prototype[tmp27], undefined)) {
                                  break;
                                }
                              }
                              array[index] = array[index] + 1;
                              flag4 = flag2;
                            }
                            num5 = num5 + 1;
                            flag2 = flag4;
                            flag3 = flag4;
                          }
                          return false;
                        }
                      }
                    }
                    let flag10 = false;
                    let num10 = 0;
                    let flag11 = false;
                    if (0 < array.length) {
                      while (true) {
                        if (!flag10) {
                          flag10 = array[num10];
                        }
                        let tmp38 = flag10;
                        if (!obj.once) {
                          if (obj.part) {
                            num10 = num10 + 1;
                            flag11 = flag10;
                          } else if (!array[num10]) {
                            break;
                          }
                          break;
                        } else if (array[num10] > 1) {
                          break;
                        }
                        return false;
                      }
                    }
                    return (!obj.only || !flag3) && flag11;
                  }
                }
              }
            }
            const items = [];
            combined = items.concat(prototype);
            tmp7 = null;
            arr = combined;
          };
          closure_0.flatten = (arg0, arg1) => {
            let items = arg1;
            if (!arg1) {
              items = [];
            }
            for (let num = 0; num < arg0.length; num = num + 1) {
              let _Array = Array;
              if (Array.isArray(arg0[num])) {
                let tmp2 = ctor;
                let flattenResult = ctor.flatten(arg0[num], items);
              } else {
                let arr = items.push(arg0[num]);
              }
            }
            return items;
          };
          closure_0.reach = (prototype, str) => {
            let obj = arg2;
            if (false !== str) {
              if (null != str) {
                if (!obj) {
                  obj = {};
                }
                let tmp = obj;
                if ("string" === typeof obj) {
                  obj = {};
                  obj.separator = obj;
                  tmp = obj;
                }
                let str2 = tmp.separator;
                if (!str2) {
                  str2 = ".";
                }
                const parts = str.split(str2);
                let str4 = "undefined";
                let arr2 = prototype;
                let num3 = 0;
                let _default = prototype;
                if (0 < parts.length) {
                  while (true) {
                    let arr3 = parts[num3];
                    let isArray = "-" === arr3[0];
                    let tmp4 = arr2;
                    let tmp5 = num3;
                    if (isArray) {
                      let _Array = Array;
                      isArray = Array.isArray(arr2);
                    }
                    let diff = arr3;
                    if (isArray) {
                      diff = arr2.length - arr3.slice(1, arr3.length);
                    }
                    if (!arr2) {
                      break;
                    } else {
                      let tmp7 = undefined === arr2;
                      let tmp8 = str4;
                      if (!tmp7) {
                        let tmp9 = fn;
                        tmp8 = fn(arr2);
                      }
                      if ("object" === tmp8) {
                        if (!(diff in arr2)) {
                          break;
                        } else {
                          let tmp10 = str4;
                          if (!tmp7) {
                            let tmp11 = fn;
                            tmp10 = fn(arr2);
                          }
                          if ("object" === tmp10) {
                            arr2 = arr2[diff];
                            num3 = num3 + 1;
                            _default = arr2;
                          } else if (false === tmp.functions) {
                            break;
                          }
                          break;
                        }
                      } else if ("function" !== typeof arr2) {
                        break;
                      }
                      let tmp12 = ctor;
                      let tmp13 = !tmp.strict;
                      if (!tmp13) {
                        tmp13 = num3 + 1 === parts.length;
                      }
                      let str7 = "Missing segment";
                      let str8 = "in reach path ";
                      let tmp14 = tmp12;
                      let tmp15 = tmp13;
                      let tmp16 = diff;
                      let str9 = "in reach path ";
                      let tmp17 = str;
                      let assertResult = ctor.assert(tmp13, "Missing segment", diff, "in reach path ", str);
                      let tmp19 = ctor;
                      if (undefined !== arr2) {
                        let tmp20 = fn;
                        str4 = fn(arr2);
                      }
                      let tmp21 = "object" === str4;
                      if (!tmp21) {
                        let flag = true;
                        tmp21 = true === tmp.functions;
                      }
                      if (!tmp21) {
                        tmp21 = "function" !== typeof arr2;
                      }
                      let str10 = "Invalid segment";
                      let tmp22 = tmp19;
                      let tmp23 = tmp21;
                      let tmp24 = diff;
                      let str11 = "in reach path ";
                      let tmp25 = str;
                      let assertResult1 = ctor.assert(tmp21, "Invalid segment", diff, "in reach path ", str);
                      _default = tmp.default;
                    }
                  }
                }
                return _default;
              }
            }
            return prototype;
          };
          closure_0.reachTemplate = (arg0, str) => {
            let closure_0 = arg0;
            let closure_1 = arg2;
            return str.replace(/{([^}]+)}/g, (arg0, arg1) => {
              const reachResult = closure_0.reach(closure_0, arg1, closure_1);
              let str = "";
              if (null != reachResult) {
                str = reachResult;
              }
              return str;
            });
          };
          closure_0.formatStack = (arg0) => {
            let length;
            const items = [];
            let num = 0;
            if (0 < arg0.length) {
              do {
                let obj = arg0[num];
                let items1 = [obj.getFileName(), obj.getLineNumber(), obj.getColumnNumber(), obj.getFunctionName(), obj.isConstructor()];
                let arr = items.push(items1);
                num = num + 1;
                length = arg0.length;
              } while (num < length);
            }
            return items;
          };
          closure_0.formatTrace = (arg0) => {
            const items = [];
            for (let num = 0; num < arg0.length; num = num + 1) {
              let tmp = arg0[num];
              let str = "";
              if (tmp[4]) {
                str = "new ";
              }
              let arr = items.push(`${str}${tmp[3]} (${tmp[0]}:${tmp[1]}:${tmp[2]})`);
            }
            return items;
          };
          closure_0.callStack = function(arg0) {
            Error.prepareStackTrace = (arg0, arg1) => arg1;
            const obj = {};
            Error.captureStackTrace(obj, this);
            Error.prepareStackTrace = Error.prepareStackTrace;
            return ctor.formatStack(obj.stack).slice(1 + arg0);
          };
          closure_0.displayStack = (arg0) => {
            let num = 1;
            if (undefined !== arg0) {
              num = arg0 + 1;
            }
            return ctor.formatTrace(ctor.callStack(num));
          };
          closure_0.abortThrow = false;
          closure_0.abort = (arg0, arg1) => {
            let str = arg0;
            if ("test" !== closure_1.env.NODE_ENV) {
              if (true !== ctor.abortThrow) {
                let str2 = "";
                if (!arg1) {
                  str2 = ctor.displayStack(1).join("\n\t");
                  const displayStackResult = ctor.displayStack(1);
                }
                const _console = console;
                console.log(`ABORT: ${str}
            	${str2}`);
                closure_1.exit(1);
              }
            }
            if (!str) {
              str = "Unknown error";
            }
            const error = new Error(str);
            throw error;
          };
          closure_0.assert = (arg0) => {
            if (!arg0) {
              if (2 === arguments.length) {
                let _Error = Error;
                if (arguments[1] instanceof Error) {
                  throw arguments[1];
                }
              }
              const items = [];
              for (let num3 = 1; num3 < arguments.length; num3 = num3 + 1) {
                if ("" !== arguments[num3]) {
                  let arr = items.push(arguments[num3]);
                }
              }
              const mapped = items.map((message) => {
                if ("string" === typeof message) {
                  return message;
                } else {
                  const _Error = Error;
                  if (message instanceof Error) {
                    message = message.message;
                  } else {
                    message = closure_0.stringify(message);
                  }
                }
              });
              let _Error2 = Error;
              const tmp4 = mapped.join(" ") || "Unknown error";
              const prototype = _Error2.prototype;
              _Error2 = new _Error2(tmp4);
              throw _Error2;
            }
          };
          closure_0.Timer = function() {
            this.ts = 0;
            this.reset();
          };
          closure_0.Timer.prototype.reset = function() {
            this.ts = Date.now();
          };
          closure_0.Timer.prototype.elapsed = function() {
            return Date.now() - this.ts;
          };
          closure_0.Bench = function() {
            this.ts = 0;
            this.reset();
          };
          closure_0.Bench.prototype.reset = function() {
            const Bench = ctor.Bench;
            this.ts = Bench.now();
          };
          closure_0.Bench.prototype.elapsed = function() {
            const Bench = ctor.Bench;
            return Bench.now() - this.ts;
          };
          closure_0.Bench.now = () => {
            const hrtimeResult = closure_1.hrtime();
            return 1000 * hrtimeResult[0] + hrtimeResult[1] / 1000000;
          };
          closure_0.escapeRegex = (str) => str.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, "\\$&");
          closure_0.base64urlEncode = (arg0, arg1) => {
            let str = arg1;
            let isBufferResult = "string" === typeof arg0;
            if (!isBufferResult) {
              isBufferResult = ctor.isBuffer(arg0);
            }
            ctor.assert(isBufferResult, "value must be string or buffer");
            let str2 = arg0;
            if (!ctor.isBuffer(arg0)) {
              if (!str) {
                str = "binary";
              }
              const prototype = tmp5.prototype;
              str2 = new tmp5(arg0, str);
            }
            const str3 = str2.toString("base64");
            const str4 = str2.toString("base64").replace(/\+/g, "-");
            return str2.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
          };
          closure_0.base64urlDecode = (arg0, arg1) => {
            let str = arg1;
            if ("string" !== typeof arg0) {
              const _Error2 = Error;
              const error = new Error("Value not a string");
              return error;
            } else {
              if (obj.test(arg0)) {
                const prototype2 = ctor.prototype;
                const str4 = new ctor(arg0, "base64");
                str = str4;
                if ("buffer" !== str) {
                  if (!str) {
                    str = "binary";
                  }
                  str = str4.toString(str);
                }
                return str;
              } else {
                const _Error = Error;
                const error1 = new Error("Invalid character");
                return error1;
              }
              obj = /^[\w\-]*$/;
            }
          };
          closure_0.escapeHeaderAttribute = (str) => {
            ctor.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(str), `Bad attribute value (${str})`);
            return str.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
          };
          closure_0.escapeHtml = (arg0) => closure_5.escapeHtml(arg0);
          closure_0.escapeJavaScript = (arg0) => closure_5.escapeJavaScript(arg0);
          closure_0.nextTick = (arg0) => {
            let closure_0 = arg0;
            return () => {
              let closure_0 = arguments;
              outer1_1.nextTick(() => { ... });
            };
          };
          closure_0.once = (_hoekOnce) => {
            let closure_0 = _hoekOnce;
            if (_hoekOnce._hoekOnce) {
              return _hoekOnce;
            } else {
              let c1 = false;
              function wrapped() {
                if (!c1) {
                  c1 = true;
                  _hoekOnce(...arguments);
                }
              }
              wrapped._hoekOnce = true;
              return wrapped;
            }
          };
          closure_0.isInteger = (replaced) => {
            let tmp = "number" === typeof replaced;
            if (tmp) {
              const _parseFloat = parseFloat;
              const _parseInt = parseInt;
              const parsed = parseFloat(replaced);
              tmp = parsed === parseInt(replaced, 10);
            }
            if (tmp) {
              const _isNaN = isNaN;
              tmp = !isNaN(replaced);
            }
            return tmp;
          };
          closure_0.ignore = () => {

          };
          ({ inherits: closure_0.inherits, format: closure_0.format } = callback(10));
          closure_0.transform = (prototype, arg1, separator) => {
            let length;
            let isArray = null == prototype;
            if (!isArray) {
              let str = "undefined";
              if (undefined !== prototype) {
                str = fn(prototype);
              }
              isArray = "object" === str;
            }
            if (!isArray) {
              const _Array = Array;
              isArray = Array.isArray(prototype);
            }
            ctor.assert(isArray, "Invalid source object: must be null, undefined, an object, or an array");
            let str3 = "undefined";
            if (undefined !== separator) {
              str3 = fn(separator);
            }
            if (Array.isArray(prototype)) {
              const items = [];
              let num3 = 0;
              if (0 < prototype.length) {
                do {
                  let tmp16 = ctor;
                  let arr = items.push(ctor.transform(prototype[num3], arg1, separator));
                  num3 = num3 + 1;
                  length = prototype.length;
                } while (num3 < length);
              }
              return items;
            } else {
              const obj = {};
              const _Object = Object;
              const keys = Object.keys(arg1);
              for (let num = 0; num < keys.length; num = num + 1) {
                let str6 = keys[num];
                let parts = str6.split(tmp7);
                let tmp8 = arg1[str6];
                let tmp9 = ctor;
                let assertResult1 = ctor.assert("string" === typeof tmp8, "All mappings must be \".\" delineated strings");
                let tmp11 = obj;
                let tmp12 = obj;
                if (parts.length > 1) {
                  do {
                    arr = parts.shift();
                    if (!tmp11[arr]) {
                      tmp11[arr] = {};
                    }
                    tmp11 = tmp11[arr];
                    tmp12 = tmp11;
                  } while (parts.length > 1);
                }
                let tmp15 = ctor;
                let arr1 = parts.shift();
                tmp12[arr1] = ctor.reach(prototype, tmp8, separator);
              }
              return obj;
            }
            tmp7 = "object" === str3 && null !== separator && separator.separator || ".";
          };
          closure_0.uniqueFilename = (arg0, arg1) => {
            let str = "";
            if (arg1) {
              let text = arg1;
              if ("." !== arg1[0]) {
                text = `.${arg1}`;
              }
              str = text;
            }
            const items = [Date.now(), closure_1.pid, ];
            const resolveResult = closure_4.resolve(arg0);
            items[2] = closure_3.randomBytes(8).toString("hex");
            return closure_4.join(resolveResult, items.join("-") + str);
          };
          closure_0.stringify = () => {
            return stringify(...arguments);
          };
          closure_0.shallow = (arg0) => {
            let length;
            const obj = {};
            const keys = Object.keys(arg0);
            let num = 0;
            if (0 < keys.length) {
              do {
                let tmp = keys[num];
                obj[tmp] = arg0[tmp];
                num = num + 1;
                length = keys.length;
              } while (num < length);
            }
            return obj;
          };
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if ("function" === typeof Symbol) {
              const _Symbol2 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol3 = Symbol;
                let str2 = "symbol";
              }
              return str2;
            }
          }
          str2 = typeof arg0;
        };
      };
      fn.call(arg1, arg2(3).Buffer, arg2(7));
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      let closure_1 = arg2;
      const fn = (TYPED_ARRAY_SUPPORT) => {
        function kMaxLength() {
          let num = 1073741823;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            num = 2147483647;
          }
          return num;
        }
        function createBuffer(arg0, arg1) {
          let tmp = arg0;
          if (kMaxLength() < arg1) {
            const _RangeError = RangeError;
            const rangeError = new RangeError("Invalid typed array length");
            throw rangeError;
          } else {
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(arg1);
              uint8Array.__proto__ = Buffer.prototype;
              tmp = uint8Array;
            } else {
              if (null === tmp) {
                const prototype = Buffer.prototype;
                tmp = new Buffer(arg1);
              }
              tmp.length = arg1;
            }
            return tmp;
          }
        }
        class Buffer {
          constructor(arg0, arg1, arg2) {
            self = this;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              tmp = Buffer;
              if (!(self instanceof Buffer)) {
                tmp2 = Buffer;
                prototype = Buffer.prototype;
                tmp3 = new.target;
                tmp4 = new.target;
                tmp5 = TYPED_ARRAY_SUPPORT;
                tmp6 = arg1;
                tmp7 = arg2;
                tmp8 = new Buffer(TYPED_ARRAY_SUPPORT, arg1, arg2);
                tmp9 = tmp8;
                return tmp8;
              }
            }
            if ("number" === typeof TYPED_ARRAY_SUPPORT) {
              str = "string";
              if ("string" === typeof arg1) {
                tmp16 = globalThis;
                _Error = Error;
                prototype2 = Error.prototype;
                tmp17 = new.target;
                str2 = "If encoding is specified then the first argument must be a string";
                tmp18 = new.target;
                error = new Error("If encoding is specified then the first argument must be a string");
                tmp20 = error;
                throw error;
              } else {
                tmp15 = allocUnsafe;
                return allocUnsafe(self, TYPED_ARRAY_SUPPORT);
              }
            } else {
              tmp10 = from;
              tmp11 = self;
              tmp12 = TYPED_ARRAY_SUPPORT;
              tmp13 = arg1;
              tmp14 = arg2;
              return from(self, TYPED_ARRAY_SUPPORT, arg1, arg2);
            }
          }
          static _augment(arg0) {
            TYPED_ARRAY_SUPPORT.__proto__ = Buffer.prototype;
            return TYPED_ARRAY_SUPPORT;
          }
          static from(arg0, arg1, arg2) {
            return from(null, TYPED_ARRAY_SUPPORT, arg1, arg2);
          }
          static alloc(arg0, arg1, arg2) {
            tmp = assertSize(TYPED_ARRAY_SUPPORT);
            if (TYPED_ARRAY_SUPPORT <= 0) {
              tmp11 = createBuffer;
              tmp12 = null;
              tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
            } else if (undefined !== arg1) {
              str = "string";
              if ("string" === typeof arg2) {
                tmp8 = createBuffer;
                tmp9 = null;
                obj2 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                fillResult = obj2.fill(arg1, arg2);
              } else {
                tmp5 = createBuffer;
                tmp6 = null;
                obj = createBuffer(null, TYPED_ARRAY_SUPPORT);
                fillResult = obj.fill(arg1);
              }
              tmp10 = fillResult;
            } else {
              tmp2 = createBuffer;
              tmp3 = null;
              tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
            }
            return tmp4;
          }
          static allocUnsafe(arg0) {
            return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
          }
          static allocUnsafeSlow(arg0) {
            return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
          }
          static isBuffer(arg0) {
            tmp = null == TYPED_ARRAY_SUPPORT || !TYPED_ARRAY_SUPPORT._isBuffer;
            return !tmp;
          }
          static compare(arg0, arg1) {
            if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
              tmp = Buffer;
              if (Buffer.isBuffer(arg1)) {
                if (TYPED_ARRAY_SUPPORT === arg1) {
                  num5 = 0;
                  return 0;
                } else {
                  length = TYPED_ARRAY_SUPPORT.length;
                  length2 = arg1.length;
                  tmp3 = globalThis;
                  _Math = Math;
                  bound = Math.min(length, length2);
                  num = 0;
                  num2 = 0;
                  tmp5 = length;
                  tmp6 = length2;
                  if (0 < bound) {
                    tmp7 = num2;
                    while (TYPED_ARRAY_SUPPORT[num2] === arg1[num2]) {
                      num2 = num2 + 1;
                      tmp5 = length;
                      tmp6 = length2;
                    }
                    tmp5 = TYPED_ARRAY_SUPPORT[num2];
                    tmp6 = arg1[num2];
                  }
                  num3 = -1;
                  if (tmp5 >= tmp6) {
                    num4 = 0;
                    if (tmp6 < tmp5) {
                      num4 = 1;
                    }
                    num3 = num4;
                  }
                  return num3;
                }
              }
            }
            typeError = new TypeError("Arguments must be Buffers");
            throw typeError;
          }
          static isEncoding(arg0) {
            str = String(TYPED_ARRAY_SUPPORT);
            formatted = str.toLowerCase();
            if ("hex" !== formatted) {
              str2 = "utf8";
              if ("utf8" !== formatted) {
                str3 = "utf-8";
                if ("utf-8" !== formatted) {
                  str4 = "ascii";
                  if ("ascii" !== formatted) {
                    str5 = "latin1";
                    if ("latin1" !== formatted) {
                      str6 = "binary";
                      if ("binary" !== formatted) {
                        str7 = "base64";
                        if ("base64" !== formatted) {
                          str8 = "ucs2";
                          if ("ucs2" !== formatted) {
                            str9 = "ucs-2";
                            if ("ucs-2" !== formatted) {
                              str10 = "utf16le";
                              if ("utf16le" !== formatted) {
                                str11 = "utf-16le";
                                if ("utf-16le" !== formatted) {
                                  flag = false;
                                  return false;
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
            return true;
          }
          static concat(arg0, arg1) {
            num = arg1;
            if (c2(TYPED_ARRAY_SUPPORT)) {
              num2 = 0;
              if (0 === TYPED_ARRAY_SUPPORT.length) {
                tmp15 = Buffer;
                return Buffer.alloc(0);
              } else {
                if (undefined === num) {
                  num3 = 0;
                  num4 = 0;
                  num = 0;
                  if (0 < TYPED_ARRAY_SUPPORT.length) {
                    do {
                      num3 = num3 + TYPED_ARRAY_SUPPORT[num4].length;
                      num4 = num4 + 1;
                      num = num3;
                      length = TYPED_ARRAY_SUPPORT.length;
                    } while (num4 < length);
                  }
                }
                tmp6 = Buffer;
                allocUnsafeResult = Buffer.allocUnsafe(num);
                num5 = 0;
                num6 = 0;
                if (0 < TYPED_ARRAY_SUPPORT.length) {
                  arr = TYPED_ARRAY_SUPPORT[num5];
                  tmp8 = Buffer;
                  while (Buffer.isBuffer(arr)) {
                    copyResult = arr.copy(allocUnsafeResult, num6);
                    num6 = num6 + arr.length;
                    num5 = num5 + 1;
                  }
                  tmp9 = globalThis;
                  _TypeError2 = TypeError;
                  prototype2 = TypeError.prototype;
                  tmp10 = new.target;
                  str2 = "\"list\" argument must be an Array of Buffers";
                  tmp11 = new.target;
                  typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                  tmp13 = typeError;
                  throw typeError;
                }
                return allocUnsafeResult;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              prototype = TypeError.prototype;
              tmp2 = new.target;
              str = "\"list\" argument must be an Array of Buffers";
              tmp3 = new.target;
              typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
              tmp5 = typeError1;
              throw typeError1;
            }
          }
          swap16() {
            self = this;
            length = this.length;
            if (length % 2 !== 0) {
              tmp3 = globalThis;
              _RangeError = RangeError;
              prototype = RangeError.prototype;
              tmp4 = new.target;
              str = "Buffer size must be a multiple of 16-bits";
              tmp5 = new.target;
              rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
              tmp7 = rangeError;
              throw rangeError;
            } else {
              num = 1;
              for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                tmp = swap;
                tmp2 = swap(self, num2, num2 + 1);
              }
              return self;
            }
          }
          swap32() {
            self = this;
            length = this.length;
            if (length % 4 !== 0) {
              tmp4 = globalThis;
              _RangeError = RangeError;
              prototype = RangeError.prototype;
              tmp5 = new.target;
              str = "Buffer size must be a multiple of 32-bits";
              tmp6 = new.target;
              rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
              tmp8 = rangeError;
              throw rangeError;
            } else {
              num = 3;
              num2 = 1;
              num3 = 2;
              for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                tmp = swap;
                tmp2 = swap(self, num4, num4 + 3);
                tmp3 = swap(self, num4 + 1, num4 + 2);
              }
              return self;
            }
          }
          swap64() {
            self = this;
            length = this.length;
            if (length % 8 !== 0) {
              tmp6 = globalThis;
              _RangeError = RangeError;
              prototype = RangeError.prototype;
              tmp7 = new.target;
              str = "Buffer size must be a multiple of 64-bits";
              tmp8 = new.target;
              rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
              tmp10 = rangeError;
              throw rangeError;
            } else {
              num = 7;
              num2 = 1;
              num3 = 6;
              num4 = 2;
              num5 = 5;
              num6 = 3;
              num7 = 4;
              for (let num8 = 0; num8 < length; num8 = num8 + 8) {
                tmp = swap;
                tmp2 = swap(self, num8, num8 + 7);
                tmp3 = swap(self, num8 + 1, num8 + 6);
                tmp4 = swap(self, num8 + 2, num8 + 5);
                tmp5 = swap(self, num8 + 3, num8 + 4);
              }
              return self;
            }
          }
          toString() {
            self = this;
            tmp = this.length | 0;
            if (0 === tmp) {
              return "";
            } else {
              if (0 === arguments.length) {
                tmp5 = utf8Slice;
                applyResult = utf8Slice(self, 0, tmp);
              } else {
                tmp2 = slowToString;
                tmp3 = arguments;
                applyResult = slowToString(...arguments);
              }
              tmp6 = applyResult;
            }
            return;
          }
          equals(arg0) {
            self = this;
            if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
              tmp6 = self === TYPED_ARRAY_SUPPORT;
              if (!tmp6) {
                tmp7 = Buffer;
                num = 0;
                tmp6 = 0 === Buffer.compare(self, TYPED_ARRAY_SUPPORT);
              }
              return tmp6;
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              prototype = TypeError.prototype;
              tmp2 = new.target;
              str = "Argument must be a Buffer";
              tmp3 = new.target;
              typeError = new TypeError("Argument must be a Buffer");
              tmp5 = typeError;
              throw typeError;
            }
          }
          inspect() {
            self = this;
            INSPECT_MAX_BYTES = c0.INSPECT_MAX_BYTES;
            str = "";
            if (this.length > 0) {
              str2 = "hex";
              str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
              match = str3.match(/.{2}/g);
              str4 = " ";
              joined = match.join(" ");
              text = joined;
              if (self.length > INSPECT_MAX_BYTES) {
                str5 = " ... ";
                text = `${tmp} ... `;
              }
              str = text;
            }
            return "<Buffer " + str + ">";
          }
          compare(arg0, arg1, arg2, arg3, arg4) {
            num = arg1;
            tmp = arg2;
            num2 = arg3;
            length = arg4;
            self = this;
            if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
              if (undefined === num) {
                num = 0;
              }
              if (undefined === tmp) {
                num3 = 0;
                if (TYPED_ARRAY_SUPPORT) {
                  num3 = TYPED_ARRAY_SUPPORT.length;
                }
                tmp = num3;
              }
              if (undefined === num2) {
                num2 = 0;
              }
              if (undefined === length) {
                length = self.length;
              }
              num4 = 0;
              if (num >= 0) {
                if (tmp <= TYPED_ARRAY_SUPPORT.length) {
                  if (num2 >= 0) {
                    if (length <= self.length) {
                      if (num2 >= length) {
                        if (num >= tmp) {
                          return 0;
                        }
                      }
                      if (num2 >= length) {
                        num9 = -1;
                        return -1;
                      } else if (num >= tmp) {
                        num8 = 1;
                        return 1;
                      } else if (self === TYPED_ARRAY_SUPPORT) {
                        return 0;
                      } else {
                        tmp15 = length >>> 0;
                        tmp16 = num2 >>> 0;
                        diff = tmp15 - tmp16;
                        tmp18 = tmp >>> 0;
                        tmp19 = num >>> 0;
                        diff1 = tmp18 - tmp19;
                        tmp21 = globalThis;
                        _Math = Math;
                        bound = Math.min(diff, diff1);
                        substr = self.slice(tmp16, tmp15);
                        substr1 = TYPED_ARRAY_SUPPORT.slice(tmp19, tmp18);
                        num5 = 0;
                        tmp8 = diff;
                        tmp9 = diff1;
                        if (0 < bound) {
                          tmp7 = num5;
                          while (substr[num5] === substr1[num5]) {
                            num5 = num5 + 1;
                            tmp8 = diff;
                            tmp9 = diff1;
                          }
                          tmp8 = substr[num5];
                          tmp9 = substr1[num5];
                        }
                        num6 = -1;
                        if (tmp8 >= tmp9) {
                          num7 = 0;
                          if (tmp9 < tmp8) {
                            num7 = 1;
                          }
                          num6 = num7;
                        }
                        return num6;
                      }
                    }
                  }
                }
              }
              tmp10 = globalThis;
              _RangeError = RangeError;
              prototype2 = RangeError.prototype;
              tmp11 = new.target;
              str2 = "out of range index";
              tmp12 = new.target;
              rangeError = new RangeError("out of range index");
              tmp14 = rangeError;
              throw rangeError;
            } else {
              tmp2 = globalThis;
              _TypeError = TypeError;
              prototype = TypeError.prototype;
              tmp3 = new.target;
              str = "Argument must be a Buffer";
              tmp4 = new.target;
              typeError = new TypeError("Argument must be a Buffer");
              tmp6 = typeError;
              throw typeError;
            }
          }
          includes(arg0, arg1, arg2) {
            return -1 !== this.indexOf(TYPED_ARRAY_SUPPORT, arg1, arg2);
          }
          indexOf(arg0, arg1, arg2) {
            return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, true);
          }
          lastIndexOf(arg0, arg1, arg2) {
            return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, false);
          }
          write(arg0, arg1, arg2, arg3) {
            self = this;
            if (undefined === arg1) {
              length = self.length;
              num = 0;
              str3 = "utf8";
            } else {
              if (undefined === arg2) {
                str = "string";
                if ("string" === typeof arg1) {
                  length = self.length;
                  num = 0;
                  str3 = arg1;
                }
              }
              tmp = globalThis;
              _isFinite = isFinite;
              if (isFinite(arg1)) {
                tmp6 = arg1 | 0;
                _isFinite2 = isFinite;
                num = tmp6;
                str3 = arg2;
                if (isFinite(arg2)) {
                  tmp7 = arg2 | 0;
                  num = tmp6;
                  length = tmp7;
                  str3 = arg3;
                  if (undefined === arg3) {
                    str3 = "utf8";
                    num = tmp6;
                    length = tmp7;
                  }
                }
              } else {
                _Error = Error;
                prototype = Error.prototype;
                tmp2 = new.target;
                str2 = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
                tmp3 = new.target;
                error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                tmp5 = error;
                throw error;
              }
            }
            diff = self.length - num;
            tmp9 = undefined === length || length > diff;
            if (tmp9) {
              length = diff;
            }
            if (TYPED_ARRAY_SUPPORT.length <= 0) {
              if (num <= self.length) {
                if (!str3) {
                  str3 = "utf8";
                }
                str4 = "utf-16le";
                str5 = "utf16le";
                str6 = "ucs-2";
                str7 = "ucs2";
                str8 = "base64";
                str9 = "binary";
                str10 = "latin1";
                str11 = "ascii";
                str12 = "utf-8";
                str13 = "utf8";
                str14 = "hex";
                flag = false;
                tmp10 = str3;
                while ("hex" !== str3) {
                  if ("utf8" !== str3) {
                    if ("utf-8" !== str3) {
                      if ("ascii" === str3) {
                        tmp32 = asciiWrite;
                        tmp33 = self;
                        tmp34 = TYPED_ARRAY_SUPPORT;
                        tmp35 = num;
                        tmp36 = length;
                        return asciiWrite(self, TYPED_ARRAY_SUPPORT, num, length);
                      } else {
                        if ("latin1" !== str3) {
                          if ("binary" !== str3) {
                            if ("base64" === str3) {
                              tmp22 = base64Write;
                              tmp23 = self;
                              tmp24 = TYPED_ARRAY_SUPPORT;
                              tmp25 = num;
                              tmp26 = length;
                              return base64Write(self, TYPED_ARRAY_SUPPORT, num, length);
                            } else {
                              if ("ucs2" !== str3) {
                                if ("ucs-2" !== str3) {
                                  if ("utf16le" !== str3) {
                                    if ("utf-16le" !== str3) {
                                      if (flag) {
                                        tmp12 = globalThis;
                                        _TypeError = TypeError;
                                        str15 = "Unknown encoding: ";
                                        prototype2 = TypeError.prototype;
                                        tmp13 = new.target;
                                        tmp14 = new.target;
                                        typeError = new TypeError("Unknown encoding: " + str3);
                                        tmp16 = typeError;
                                        throw typeError;
                                      } else {
                                        text = `${str3}`;
                                        str3 = `${str3}`.toLowerCase();
                                        flag = true;
                                        continue;
                                      }
                                    }
                                  }
                                }
                              }
                              tmp17 = ucs2Write;
                              tmp18 = self;
                              tmp19 = TYPED_ARRAY_SUPPORT;
                              tmp20 = num;
                              tmp21 = length;
                              return ucs2Write(self, TYPED_ARRAY_SUPPORT, num, length);
                            }
                          }
                        }
                        tmp27 = latin1Write;
                        tmp28 = self;
                        tmp29 = TYPED_ARRAY_SUPPORT;
                        tmp30 = num;
                        tmp31 = length;
                        return latin1Write(self, TYPED_ARRAY_SUPPORT, num, length);
                      }
                    }
                  }
                  tmp37 = utf8Write;
                  tmp38 = self;
                  tmp39 = TYPED_ARRAY_SUPPORT;
                  tmp40 = num;
                  tmp41 = length;
                  return utf8Write(self, TYPED_ARRAY_SUPPORT, num, length);
                }
                tmp42 = hexWrite;
                tmp43 = self;
                tmp44 = TYPED_ARRAY_SUPPORT;
                tmp45 = num;
                tmp46 = length;
                return hexWrite(self, TYPED_ARRAY_SUPPORT, num, length);
              }
            } else if (length >= 0) {
            }
            rangeError = new RangeError("Attempt to write outside buffer bounds");
            throw rangeError;
          }
          toJSON() {
            obj = { type: "Buffer" };
            slice = Array.prototype.slice;
            self = this._arr;
            if (!self) {
              self = this;
            }
            obj.data = slice.call(self, 0);
            return obj;
          }
          slice(arg0, arg1) {
            self = this;
            length = this.length;
            tmp = ~~TYPED_ARRAY_SUPPORT;
            if (tmp < 0) {
              num = tmp + length;
              if (num < 0) {
                num = 0;
              }
            } else {
              num = tmp;
              if (tmp > length) {
                num = length;
              }
            }
            tmp2 = length;
            if (undefined !== arg1) {
              tmp2 = ~~arg1;
            }
            if (tmp2 < 0) {
              num2 = tmp2 + length;
              if (num2 < 0) {
                num2 = 0;
              }
            } else {
              num2 = tmp2;
              if (tmp2 > length) {
                num2 = length;
              }
            }
            if (num2 < num) {
              num2 = num;
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              subarrayResult = self.subarray(num, num2);
              tmp12 = Buffer;
              subarrayResult.__proto__ = Buffer.prototype;
              tmp10 = subarrayResult;
            } else {
              diff = num2 - num;
              tmp4 = Buffer;
              prototype = Buffer.prototype;
              tmp5 = new.target;
              tmp6 = new.target;
              tmp7 = diff;
              tmp8 = new Buffer(diff, undefined);
              tmp9 = tmp8;
              tmp10 = tmp8;
              num3 = 0;
              if (0 < diff) {
                do {
                  tmp8[num3] = self[num3 + num];
                  num3 = num3 + 1;
                  tmp10 = tmp8;
                } while (num3 < diff);
              }
            }
            return tmp10;
          }
          readUIntLE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkOffset;
              tmp4 = checkOffset(tmp, tmp2, self.length);
            }
            tmp5 = self[tmp];
            num = 1;
            num2 = 256;
            tmp6 = tmp5;
            if (1 < tmp2) {
              sum = tmp5 + self[tmp + num] * num2;
              num = num + 1;
              tmp6 = sum;
              while (num < tmp2) {
                num2 = num2 * 256;
                tmp5 = sum;
                tmp6 = sum;
                if (!num2) {
                  break;
                }
              }
            }
            return tmp6;
          }
          readUIntBE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkOffset;
              tmp4 = checkOffset(tmp, tmp2, self.length);
            }
            diff = tmp2 - 1;
            tmp6 = self[tmp + diff];
            num = 256;
            tmp7 = tmp6;
            if (diff > 0) {
              diff = diff - 1;
              sum = tmp6 + self[tmp + diff] * num;
              tmp7 = sum;
              while (diff > 0) {
                num = num * 256;
                tmp6 = sum;
                tmp7 = sum;
                if (!num) {
                  break;
                }
              }
            }
            return tmp7;
          }
          readUInt8(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 1;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 1, self.length);
            }
            return self[TYPED_ARRAY_SUPPORT];
          }
          readUInt16LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 2;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
            }
            return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
          }
          readUInt16BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 2;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
            }
            return self[TYPED_ARRAY_SUPPORT] << 8 | self[TYPED_ARRAY_SUPPORT + 1];
          }
          readUInt32LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 4;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
            }
            return (self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16) + 16777216 * self[TYPED_ARRAY_SUPPORT + 3];
          }
          readUInt32BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 4;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
            }
            return 16777216 * self[TYPED_ARRAY_SUPPORT] + (self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3]);
          }
          readIntLE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkOffset;
              tmp4 = checkOffset(tmp, tmp2, self.length);
            }
            tmp5 = self[tmp];
            num = 1;
            num2 = 256;
            tmp6 = tmp5;
            num3 = 1;
            if (1 < tmp2) {
              sum = tmp5 + self[tmp + num] * num2;
              num = num + 1;
              tmp6 = sum;
              num3 = num2;
              while (num < tmp2) {
                num2 = num2 * 256;
                tmp5 = sum;
                tmp6 = sum;
                num3 = num2;
                if (!num2) {
                  break;
                }
              }
            }
            diff = tmp6;
            if (tmp6 >= num3 * 128) {
              tmp9 = globalThis;
              _Math = Math;
              num4 = 2;
              num5 = 8;
              diff = tmp6 - Math.pow(2, 8 * tmp2);
            }
            return diff;
          }
          readIntBE(arg0, arg1, arg2) {
            self = this;
            tmp = TYPED_ARRAY_SUPPORT | 0;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkOffset;
              tmp4 = checkOffset(tmp, tmp2, self.length);
            }
            diff = tmp2 - 1;
            tmp6 = self[tmp + diff];
            num = 1;
            num2 = 256;
            tmp7 = tmp6;
            if (diff > 0) {
              diff = diff - 1;
              sum = tmp6 + self[tmp + diff] * num2;
              num = num2;
              tmp7 = sum;
              while (diff > 0) {
                num2 = num2 * 256;
                tmp6 = sum;
                tmp7 = sum;
                num = num2;
                if (!num2) {
                  break;
                }
              }
            }
            diff1 = tmp7;
            if (tmp7 >= num * 128) {
              tmp10 = globalThis;
              _Math = Math;
              num3 = 2;
              num4 = 8;
              diff1 = tmp7 - Math.pow(2, 8 * tmp2);
            }
            return diff1;
          }
          readInt8(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 1;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 1, self.length);
            }
            tmp3 = self[TYPED_ARRAY_SUPPORT];
            if (128 & self[TYPED_ARRAY_SUPPORT]) {
              num2 = 255;
              num3 = -1;
              num4 = 1;
              result = -1 * (255 - tmp3 + 1);
            } else {
              result = tmp3;
            }
            return result;
          }
          readInt16LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 2;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
            }
            tmp3 = self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
            tmp4 = tmp3;
            if (32768 & tmp3) {
              num2 = 4294901760;
              tmp4 = 4294901760 | tmp3;
            }
            return tmp4;
          }
          readInt16BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 2;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
            }
            tmp3 = self[TYPED_ARRAY_SUPPORT + 1] | self[TYPED_ARRAY_SUPPORT] << 8;
            tmp4 = tmp3;
            if (32768 & tmp3) {
              num2 = 4294901760;
              tmp4 = 4294901760 | tmp3;
            }
            return tmp4;
          }
          readInt32LE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 4;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
            }
            return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16 | self[TYPED_ARRAY_SUPPORT + 3] << 24;
          }
          readInt32BE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 4;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
            }
            return self[TYPED_ARRAY_SUPPORT] << 24 | self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3];
          }
          readFloatLE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 4;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
            }
            return c1.read(self, TYPED_ARRAY_SUPPORT, true, 23, 4);
          }
          readFloatBE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 4;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
            }
            return c1.read(self, TYPED_ARRAY_SUPPORT, false, 23, 4);
          }
          readDoubleLE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 8;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 8, self.length);
            }
            return c1.read(self, TYPED_ARRAY_SUPPORT, true, 52, 8);
          }
          readDoubleBE(arg0, arg1) {
            self = this;
            if (!arg1) {
              tmp = checkOffset;
              num = 8;
              tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 8, self.length);
            }
            return c1.read(self, TYPED_ARRAY_SUPPORT, false, 52, 8);
          }
          writeUIntLE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            tmp3 = arg2 | 0;
            if (!arg3) {
              tmp4 = checkInt;
              tmp5 = globalThis;
              _Math = Math;
              num = 2;
              num2 = 8;
              num3 = 1;
              num4 = 0;
              tmp6 = self;
              tmp7 = tmp;
              tmp8 = tmp2;
              tmp9 = tmp3;
              tmp10 = checkInt(self, tmp, tmp2, tmp3, Math.pow(2, 8 * tmp3) - 1, 0);
            }
            self[tmp2] = 255 & tmp;
            num5 = 1;
            num6 = 256;
            if (1 < tmp3) {
              self[tmp2 + num5] = tmp / num6 & 255;
              num5 = num5 + 1;
              while (num5 < tmp3) {
                num6 = num6 * 256;
                if (!num6) {
                  break;
                }
              }
            }
            return tmp2 + tmp3;
          }
          writeUIntBE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            tmp3 = arg2 | 0;
            if (!arg3) {
              tmp4 = checkInt;
              tmp5 = globalThis;
              _Math = Math;
              num = 2;
              num2 = 8;
              num3 = 1;
              num4 = 0;
              tmp6 = self;
              tmp7 = tmp;
              tmp8 = tmp2;
              tmp9 = tmp3;
              tmp10 = checkInt(self, tmp, tmp2, tmp3, Math.pow(2, 8 * tmp3) - 1, 0);
            }
            diff = tmp3 - 1;
            self[tmp2 + diff] = 255 & tmp;
            diff1 = diff - 1;
            num5 = 256;
            if (diff1 >= 0) {
              self[tmp2 + diff1] = tmp / num5 & 255;
              diff1 = diff1 - 1;
              while (diff1 >= 0) {
                num5 = num5 * 256;
                if (!num5) {
                  break;
                }
              }
            }
            return tmp2 + tmp3;
          }
          writeUInt8(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 1;
              num2 = 255;
              num3 = 0;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 1, 255, 0);
            }
            rounded = tmp;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              tmp9 = globalThis;
              _Math = Math;
              rounded = Math.floor(tmp);
            }
            self[tmp2] = 255 & rounded;
            return tmp2 + 1;
          }
          writeUInt16LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 2;
              num2 = 65535;
              num3 = 0;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 2, 65535, 0);
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num4 = 255;
              self[tmp2] = 255 & tmp;
              num5 = 8;
              num6 = 1;
              self[tmp2 + 1] = tmp >>> 8;
            } else {
              tmp8 = objectWriteUInt16;
              flag = true;
              tmp9 = self;
              tmp10 = tmp;
              tmp11 = tmp2;
              tmp12 = objectWriteUInt16(self, tmp, tmp2, true);
            }
            return tmp2 + 2;
          }
          writeUInt16BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 2;
              num2 = 65535;
              num3 = 0;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 2, 65535, 0);
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num4 = 8;
              self[tmp2] = tmp >>> 8;
              num5 = 255;
              num6 = 1;
              self[tmp2 + 1] = 255 & tmp;
            } else {
              tmp8 = objectWriteUInt16;
              flag = false;
              tmp9 = self;
              tmp10 = tmp;
              tmp11 = tmp2;
              tmp12 = objectWriteUInt16(self, tmp, tmp2, false);
            }
            return tmp2 + 2;
          }
          writeUInt32LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 4;
              num2 = 4294967295;
              num3 = 0;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 4, 4294967295, 0);
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num4 = 24;
              num5 = 3;
              self[tmp2 + 3] = tmp >>> 24;
              num6 = 16;
              num7 = 2;
              self[tmp2 + 2] = tmp >>> 16;
              num8 = 8;
              num9 = 1;
              self[tmp2 + 1] = tmp >>> 8;
              num10 = 255;
              self[tmp2] = 255 & tmp;
            } else {
              tmp8 = objectWriteUInt32;
              flag = true;
              tmp9 = self;
              tmp10 = tmp;
              tmp11 = tmp2;
              tmp12 = objectWriteUInt32(self, tmp, tmp2, true);
            }
            return tmp2 + 4;
          }
          writeUInt32BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 4;
              num2 = 4294967295;
              num3 = 0;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 4, 4294967295, 0);
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num4 = 24;
              self[tmp2] = tmp >>> 24;
              num5 = 16;
              num6 = 1;
              self[tmp2 + 1] = tmp >>> 16;
              num7 = 8;
              num8 = 2;
              self[tmp2 + 2] = tmp >>> 8;
              num9 = 255;
              num10 = 3;
              self[tmp2 + 3] = 255 & tmp;
            } else {
              tmp8 = objectWriteUInt32;
              flag = false;
              tmp9 = self;
              tmp10 = tmp;
              tmp11 = tmp2;
              tmp12 = objectWriteUInt32(self, tmp, tmp2, false);
            }
            return tmp2 + 4;
          }
          writeIntLE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg3) {
              tmp3 = globalThis;
              _Math = Math;
              num = 8;
              num2 = 2;
              num3 = 1;
              powResult = Math.pow(2, 8 * arg2 - 1);
              tmp5 = checkInt;
              tmp6 = self;
              tmp7 = tmp;
              tmp8 = tmp2;
              tmp9 = arg2;
              tmp10 = checkInt(self, tmp, tmp2, arg2, powResult - 1, -powResult);
            }
            self[tmp2] = 255 & tmp;
            tmp11 = tmp < 0;
            num4 = 1;
            num5 = 256;
            num6 = 0;
            if (1 < arg2) {
              while (true) {
                tmp12 = tmp11;
                if (tmp11) {
                  tmp12 = 0 === num6;
                }
                if (tmp12) {
                  tmp12 = 0 !== self[tmp2 + num4 - 1];
                }
                if (tmp12) {
                  num6 = 1;
                }
                self[tmp2 + num4] = (tmp / num5 | 0) - num6 & 255;
                num4 = num4 + 1;
                if (num4 >= arg2) {
                  break;
                } else {
                  num5 = num5 * 256;
                  if (!num5) {
                    break;
                  }
                }
              }
            }
            return tmp2 + arg2;
          }
          writeIntBE(arg0, arg1, arg2, arg3) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg3) {
              tmp3 = globalThis;
              _Math = Math;
              num = 8;
              num2 = 2;
              num3 = 1;
              powResult = Math.pow(2, 8 * arg2 - 1);
              tmp5 = checkInt;
              tmp6 = self;
              tmp7 = tmp;
              tmp8 = tmp2;
              tmp9 = arg2;
              tmp10 = checkInt(self, tmp, tmp2, arg2, powResult - 1, -powResult);
            }
            diff = arg2 - 1;
            self[tmp2 + diff] = 255 & tmp;
            diff1 = diff - 1;
            tmp13 = tmp < 0;
            num4 = 256;
            num5 = 0;
            if (diff1 >= 0) {
              while (true) {
                tmp14 = tmp13;
                if (tmp13) {
                  tmp14 = 0 === num5;
                }
                if (tmp14) {
                  tmp14 = 0 !== self[tmp2 + diff1 + 1];
                }
                if (tmp14) {
                  num5 = 1;
                }
                self[tmp2 + diff1] = (tmp / num4 | 0) - num5 & 255;
                diff1 = diff1 - 1;
                if (diff1 < 0) {
                  break;
                } else {
                  num4 = num4 * 256;
                  if (!num4) {
                    break;
                  }
                }
              }
            }
            return tmp2 + arg2;
          }
          writeInt8(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 1;
              num2 = 127;
              num3 = -128;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 1, 127, -128);
            }
            rounded = tmp;
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              tmp9 = globalThis;
              _Math = Math;
              rounded = Math.floor(tmp);
            }
            sum = rounded;
            if (rounded < 0) {
              num4 = 255;
              num5 = 1;
              sum = 255 + rounded + 1;
            }
            self[tmp2] = 255 & sum;
            return tmp2 + 1;
          }
          writeInt16LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 2;
              num2 = 32767;
              num3 = -32768;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num4 = 255;
              self[tmp2] = 255 & tmp;
              num5 = 8;
              num6 = 1;
              self[tmp2 + 1] = tmp >>> 8;
            } else {
              tmp8 = objectWriteUInt16;
              flag = true;
              tmp9 = self;
              tmp10 = tmp;
              tmp11 = tmp2;
              tmp12 = objectWriteUInt16(self, tmp, tmp2, true);
            }
            return tmp2 + 2;
          }
          writeInt16BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 2;
              num2 = 32767;
              num3 = -32768;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num4 = 8;
              self[tmp2] = tmp >>> 8;
              num5 = 255;
              num6 = 1;
              self[tmp2 + 1] = 255 & tmp;
            } else {
              tmp8 = objectWriteUInt16;
              flag = false;
              tmp9 = self;
              tmp10 = tmp;
              tmp11 = tmp2;
              tmp12 = objectWriteUInt16(self, tmp, tmp2, false);
            }
            return tmp2 + 2;
          }
          writeInt32LE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 4;
              num2 = 2147483647;
              num3 = -2147483648;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num4 = 255;
              self[tmp2] = 255 & tmp;
              num5 = 8;
              num6 = 1;
              self[tmp2 + 1] = tmp >>> 8;
              num7 = 16;
              num8 = 2;
              self[tmp2 + 2] = tmp >>> 16;
              num9 = 24;
              num10 = 3;
              self[tmp2 + 3] = tmp >>> 24;
            } else {
              tmp8 = objectWriteUInt32;
              flag = true;
              tmp9 = self;
              tmp10 = tmp;
              tmp11 = tmp2;
              tmp12 = objectWriteUInt32(self, tmp, tmp2, true);
            }
            return tmp2 + 4;
          }
          writeInt32BE(arg0, arg1, arg2) {
            self = this;
            tmp = +TYPED_ARRAY_SUPPORT;
            tmp2 = arg1 | 0;
            if (!arg2) {
              tmp3 = checkInt;
              num = 4;
              num2 = 2147483647;
              num3 = -2147483648;
              tmp4 = self;
              tmp5 = tmp;
              tmp6 = tmp2;
              tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
            }
            sum = tmp;
            if (tmp < 0) {
              num4 = 4294967295;
              num5 = 1;
              sum = 4294967295 + tmp + 1;
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              num6 = 24;
              self[tmp2] = sum >>> 24;
              num7 = 16;
              num8 = 1;
              self[tmp2 + 1] = sum >>> 16;
              num9 = 8;
              num10 = 2;
              self[tmp2 + 2] = sum >>> 8;
              num11 = 255;
              num12 = 3;
              self[tmp2 + 3] = 255 & sum;
            } else {
              tmp9 = objectWriteUInt32;
              flag = false;
              tmp10 = self;
              tmp11 = sum;
              tmp12 = tmp2;
              tmp13 = objectWriteUInt32(self, sum, tmp2, false);
            }
            return tmp2 + 4;
          }
          writeFloatLE(arg0, arg1, arg2) {
            return writeFloat(this, TYPED_ARRAY_SUPPORT, arg1, true, arg2);
          }
          writeFloatBE(arg0, arg1, arg2) {
            return writeFloat(this, TYPED_ARRAY_SUPPORT, arg1, false, arg2);
          }
          writeDoubleLE(arg0, arg1, arg2) {
            return writeDouble(this, TYPED_ARRAY_SUPPORT, arg1, true, arg2);
          }
          writeDoubleBE(arg0, arg1, arg2) {
            return writeDouble(this, TYPED_ARRAY_SUPPORT, arg1, false, arg2);
          }
          copy(arg0, arg1, arg2, arg3) {
            num = arg1;
            num2 = arg2;
            length = arg3;
            self = this;
            if (!arg2) {
              num2 = 0;
            }
            tmp = length;
            if (!length) {
              num3 = 0;
              tmp = 0 === length;
            }
            if (!tmp) {
              length = self.length;
            }
            if (num >= TYPED_ARRAY_SUPPORT.length) {
              num = TYPED_ARRAY_SUPPORT.length;
            }
            if (!num) {
              num = 0;
            }
            tmp2 = length > 0 && length < num2;
            if (tmp2) {
              length = num2;
            }
            if (length === num2) {
              return 0;
            } else {
              if (0 !== TYPED_ARRAY_SUPPORT.length) {
                if (0 !== self.length) {
                  if (num < 0) {
                    tmp18 = globalThis;
                    _RangeError3 = RangeError;
                    prototype3 = RangeError.prototype;
                    tmp19 = new.target;
                    str3 = "targetStart out of bounds";
                    tmp20 = new.target;
                    rangeError = new RangeError("targetStart out of bounds");
                    tmp22 = rangeError;
                    throw rangeError;
                  } else {
                    if (num2 >= 0) {
                      if (num2 < self.length) {
                        if (length < 0) {
                          tmp8 = globalThis;
                          _RangeError = RangeError;
                          prototype = RangeError.prototype;
                          tmp9 = new.target;
                          str = "sourceEnd out of bounds";
                          tmp10 = new.target;
                          rangeError1 = new RangeError("sourceEnd out of bounds");
                          tmp12 = rangeError1;
                          throw rangeError1;
                        } else {
                          if (length > self.length) {
                            length = self.length;
                          }
                          if (TYPED_ARRAY_SUPPORT.length - num < length - num2) {
                            length = TYPED_ARRAY_SUPPORT.length - num + num2;
                          }
                          diff = length - num2;
                          if (self === TYPED_ARRAY_SUPPORT) {
                            if (num2 < num) {
                              if (num < length) {
                                num6 = 1;
                                diff1 = diff - 1;
                                if (diff1 >= 0) {
                                  do {
                                    TYPED_ARRAY_SUPPORT[diff1 + num] = self[diff1 + num2];
                                    diff1 = diff1 - 1;
                                  } while (diff1 >= 0);
                                }
                              }
                              return diff;
                            }
                          }
                          num4 = 1000;
                          if (diff >= 1000) {
                            tmp4 = Buffer;
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                              tmp5 = globalThis;
                              _Uint8Array = Uint8Array;
                              set = Uint8Array.prototype.set;
                              callResult = set.call(TYPED_ARRAY_SUPPORT, self.subarray(num2, num2 + diff), num);
                            }
                          }
                          num5 = 0;
                          if (0 < diff) {
                            do {
                              TYPED_ARRAY_SUPPORT[num5 + num] = self[num5 + num2];
                              num5 = num5 + 1;
                            } while (num5 < diff);
                          }
                        }
                      }
                    }
                    tmp13 = globalThis;
                    _RangeError2 = RangeError;
                    prototype2 = RangeError.prototype;
                    tmp14 = new.target;
                    str2 = "sourceStart out of bounds";
                    tmp15 = new.target;
                    rangeError2 = new RangeError("sourceStart out of bounds");
                    tmp17 = rangeError2;
                    throw rangeError2;
                  }
                }
              }
              return 0;
            }
          }
          fill(arg0, arg1, arg2, arg3) {
            tmp = arg3;
            self = this;
            tmp2 = typeof TYPED_ARRAY_SUPPORT;
            if ("string" === tmp2) {
              if ("string" === typeof arg1) {
                length = self.length;
                num2 = 0;
                tmp = arg1;
              } else {
                num2 = arg1;
                length = arg2;
                if ("string" === typeof arg2) {
                  length = self.length;
                  num2 = arg1;
                  tmp = arg2;
                }
              }
              num3 = 1;
              tmp6 = TYPED_ARRAY_SUPPORT;
              if (1 === TYPED_ARRAY_SUPPORT.length) {
                num4 = 0;
                charCodeAtResult = TYPED_ARRAY_SUPPORT.charCodeAt(0);
                num5 = 256;
                tmp6 = TYPED_ARRAY_SUPPORT;
                if (charCodeAtResult < 256) {
                  tmp6 = charCodeAtResult;
                }
              }
              if (undefined !== tmp) {
                if ("string" !== typeof tmp) {
                  tmp28 = globalThis;
                  _TypeError2 = TypeError;
                  prototype3 = TypeError.prototype;
                  tmp29 = new.target;
                  str5 = "encoding must be a string";
                  tmp30 = new.target;
                  typeError = new TypeError("encoding must be a string");
                  tmp32 = typeError;
                  throw typeError;
                }
              }
              num = tmp6;
              tmp3 = num2;
              tmp4 = length;
              tmp5 = tmp;
              if ("string" === typeof tmp) {
                tmp8 = Buffer;
                num = tmp6;
                tmp3 = num2;
                tmp4 = length;
                tmp5 = tmp;
                if (!Buffer.isEncoding(tmp)) {
                  tmp9 = globalThis;
                  _TypeError = TypeError;
                  str2 = "Unknown encoding: ";
                  prototype = TypeError.prototype;
                  tmp10 = new.target;
                  tmp11 = new.target;
                  typeError1 = new TypeError("Unknown encoding: " + tmp);
                  tmp13 = typeError1;
                  throw typeError1;
                }
              }
            } else {
              str = "number";
              num = TYPED_ARRAY_SUPPORT;
              tmp3 = arg1;
              tmp4 = arg2;
              tmp5 = tmp;
              if ("number" === tmp2) {
                num7 = 255;
                num = TYPED_ARRAY_SUPPORT & 255;
                tmp3 = arg1;
                tmp4 = arg2;
                tmp5 = tmp;
              }
            }
            if (tmp3 >= 0) {
              if (self.length >= tmp3) {
                if (self.length >= tmp4) {
                  if (tmp4 <= tmp3) {
                    return self;
                  } else {
                    sum = tmp3 >>> 0;
                    tmp14 = undefined === tmp4 ? self.length : tmp4 >>> 0;
                    if (!num) {
                      num = 0;
                    }
                    str3 = "number";
                    if ("number" === typeof num) {
                      if (sum < tmp14) {
                        do {
                          self[sum] = num;
                          sum = sum + 1;
                        } while (sum < tmp14);
                      }
                    } else {
                      tmp15 = Buffer;
                      tmp16 = num;
                      if (!Buffer.isBuffer(num)) {
                        tmp17 = utf8ToBytes;
                        tmp18 = Buffer;
                        prototype2 = Buffer.prototype;
                        tmp19 = new.target;
                        tmp20 = new.target;
                        tmp21 = num;
                        tmp22 = tmp5;
                        str4 = new Buffer(num, tmp5);
                        tmp23 = str4;
                        tmp16 = utf8ToBytes(str4.toString());
                      }
                      num6 = 0;
                      if (0 < tmp14 - sum) {
                        do {
                          self[num6 + sum] = tmp16[num6 % tmp24];
                          num6 = num6 + 1;
                          diff = tmp14 - sum;
                        } while (num6 < diff);
                      }
                    }
                    return self;
                  }
                }
              }
            }
            rangeError = new RangeError("Out of range index");
            throw rangeError;
          }
        }
        function from(arg0, byteLength) {
          if ("number" === typeof byteLength) {
            const _TypeError2 = TypeError;
            let typeError = new TypeError("\"value\" argument must not be a number");
            throw typeError;
          } else {
            let _ArrayBuffer2 = ArrayBuffer;
            if ("undefined" !== typeof ArrayBuffer) {
              let _ArrayBuffer = ArrayBuffer;
              if (byteLength instanceof ArrayBuffer) {
                byteLength = byteLength.byteLength;
                if (arg2 >= 0) {
                  if (byteLength.byteLength >= arg2) {
                    let num3 = arg3;
                    if (!arg3) {
                      num3 = 0;
                    }
                    if (byteLength.byteLength < arg2 + num3) {
                      const _RangeError = RangeError;
                      const rangeError = new RangeError("'length' is out of bounds");
                      throw rangeError;
                    } else {
                      if (undefined === arg2) {
                        if (undefined === arg3) {
                          const _Uint8Array3 = Uint8Array;
                          let uint8Array = new Uint8Array(byteLength);
                        }
                        if (Buffer.TYPED_ARRAY_SUPPORT) {
                          uint8Array.__proto__ = Buffer.prototype;
                          let tmp29 = uint8Array;
                        } else {
                          tmp29 = fromArrayLike(arg0, uint8Array);
                        }
                      }
                      if (undefined === arg3) {
                        const _Uint8Array2 = Uint8Array;
                        uint8Array = new Uint8Array(byteLength, arg2);
                      } else {
                        const _Uint8Array = Uint8Array;
                        uint8Array = new Uint8Array(byteLength, arg2, arg3);
                      }
                    }
                  }
                }
                const _RangeError2 = RangeError;
                const rangeError1 = new RangeError("'offset' is out of bounds");
                throw rangeError1;
              }
            }
            if ("string" === tmp) {
              let tmp3 = "string" === typeof arg2;
              if (tmp3) {
                tmp3 = "" !== arg2;
              }
              let str3 = arg2;
              if (!tmp3) {
                str3 = "utf8";
              }
              if (Buffer.isEncoding(str3)) {
                let tmp10 = byteLength(byteLength, str3) | 0;
                let arr = createBuffer(arg0, tmp10);
                const writeResult = arr.write(byteLength, str3);
                let substr = arr;
                if (writeResult !== tmp10) {
                  substr = arr.slice(0, writeResult);
                }
                let tmp2 = substr;
              } else {
                let _TypeError = TypeError;
                const typeError1 = new TypeError("\"encoding\" must be a valid string encoding");
                throw typeError1;
              }
            } else {
              tmp2 = (function fromObject(arg0, copy) {
                if (outer1_7.isBuffer(copy)) {
                  const tmp13 = outer1_12(copy.length) | 0;
                  const arr = outer1_6(arg0, tmp13);
                  if (0 !== arr.length) {
                    copy.copy(arr, 0, 0, tmp13);
                  }
                  return arr;
                } else {
                  if (copy) {
                    const _ArrayBuffer = ArrayBuffer;
                    if ("undefined" === typeof ArrayBuffer) {
                      if (!("length" in copy)) {
                        if ("Buffer" === copy.type) {
                          if (outer1_2(copy.data)) {
                            return outer1_11(arg0, copy.data);
                          }
                        }
                      }
                    } else {
                      const _ArrayBuffer2 = ArrayBuffer;
                    }
                    if ("number" === typeof copy.length) {
                      if (copy.length == copy.length) {
                        let tmp10 = outer1_11(arg0, copy);
                      }
                      return tmp10;
                    }
                    tmp10 = outer1_6(arg0, 0);
                  }
                  const _TypeError = TypeError;
                  const typeError = new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                  throw typeError;
                }
              })(arg0, byteLength);
            }
            return tmp2;
          }
        }
        function assertSize(arg0) {
          if ("number" !== typeof arg0) {
            const _TypeError = TypeError;
            const typeError = new TypeError("\"size\" argument must be a number");
            throw typeError;
          } else if (arg0 < 0) {
            const _RangeError = RangeError;
            const rangeError = new RangeError("\"size\" argument must not be negative");
            throw rangeError;
          }
        }
        function allocUnsafe(arg0, arg1) {
          assertSize(arg1);
          let num = 0;
          if (arg1 >= 0) {
            num = checked(arg1) | 0;
          }
          const tmp2Result = createBuffer(arg0, num);
          if (!Buffer.TYPED_ARRAY_SUPPORT) {
            for (let num2 = 0; num2 < arg1; num2 = num2 + 1) {
              tmp2Result[num2] = 0;
            }
          }
          return tmp2Result;
        }
        function fromArrayLike(arg0, arg1) {
          let num = 0;
          if (arg1.length >= 0) {
            num = checked(arg1.length) | 0;
          }
          const tmp2 = createBuffer(arg0, num);
          let num2 = 0;
          if (0 < num) {
            do {
              tmp2[num2] = 255 & arg1[num2];
              num2 = num2 + 1;
            } while (num2 < num);
          }
          return tmp2;
        }
        function checked(arg0) {
          if (arg0 >= kMaxLength()) {
            const _RangeError = RangeError;
            const rangeError = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
            throw rangeError;
          } else {
            return arg0 | 0;
          }
        }
        function byteLength(byteLength) {
          let formatted = arg1;
          if (Buffer.isBuffer(byteLength)) {
            return byteLength.length;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if ("undefined" !== typeof ArrayBuffer) {
              const _ArrayBuffer2 = ArrayBuffer;
              if ("function" === typeof ArrayBuffer.isView) {
                const _ArrayBuffer3 = ArrayBuffer;
                if (!ArrayBuffer.isView(byteLength)) {
                  const _ArrayBuffer4 = ArrayBuffer;
                }
                return byteLength.byteLength;
              }
            }
            let text = byteLength;
            if ("string" !== typeof byteLength) {
              text = `${byteLength}`;
            }
            let flag = false;
            if (0 === text.length) {
              return 0;
            } else {
              while ("ascii" !== formatted) {
                if ("latin1" === formatted) {
                  break;
                } else if ("binary" === formatted) {
                  break;
                } else {
                  if ("utf8" !== formatted) {
                    if ("utf-8" !== formatted) {
                      if (undefined !== formatted) {
                        if ("ucs2" !== formatted) {
                          if ("ucs-2" !== formatted) {
                            if ("utf16le" !== formatted) {
                              if ("utf-16le" !== formatted) {
                                if ("hex" === formatted) {
                                  let num2 = 1;
                                  return length >>> 1;
                                } else if ("base64" === formatted) {
                                  let tmp5 = base64ToBytes;
                                  return base64ToBytes(text).length;
                                } else if (flag) {
                                  let tmp4 = utf8ToBytes;
                                  return utf8ToBytes(text).length;
                                } else {
                                  let text1 = `${tmp}`;
                                  formatted = `${tmp}`.toLowerCase();
                                  flag = true;
                                  continue;
                                }
                              }
                            }
                          }
                        }
                        let num3 = 2;
                        return 2 * length;
                      }
                    }
                  }
                  let tmp6 = utf8ToBytes;
                  return utf8ToBytes(text).length;
                }
              }
              return length;
            }
          }
        }
        function slowToString(arg0, arg1, arg2) {
          let str = arg0;
          let num = arg1;
          let length = arg2;
          const self = this;
          let tmp = undefined === arg1;
          if (!tmp) {
            tmp = num < 0;
          }
          if (tmp) {
            num = 0;
          }
          if (num > self.length) {
            return "";
          } else {
            if (tmp2) {
              length = self.length;
            }
            if (length <= 0) {
              return "";
            } else if (length >>> 0 <= num >>> 0) {
              return "";
            } else {
              let flag = false;
              if (!str) {
                str = "utf8";
                flag = false;
              }
              while ("hex" !== str) {
                let str11 = "utf8";
                if ("utf8" !== str) {
                  let str12 = "utf-8";
                  if ("utf-8" !== str) {
                    let str13 = "ascii";
                    if ("ascii" === str) {
                      let tmp13 = asciiSlice;
                      return asciiSlice(self, tmp17, tmp16);
                    } else {
                      let str14 = "latin1";
                      if ("latin1" !== str) {
                        let str15 = "binary";
                        if ("binary" !== str) {
                          let str16 = "base64";
                          if ("base64" === str) {
                            let tmp11 = base64Slice;
                            return base64Slice(self, tmp17, tmp16);
                          } else {
                            let str3 = "ucs2";
                            if ("ucs2" !== str) {
                              let str4 = "ucs-2";
                              if ("ucs-2" !== str) {
                                let str5 = "utf16le";
                                if ("utf16le" !== str) {
                                  let str6 = "utf-16le";
                                  if ("utf-16le" !== str) {
                                    if (flag) {
                                      let tmp5 = globalThis;
                                      let _TypeError = TypeError;
                                      let str7 = "Unknown encoding: ";
                                      let tmp6 = new.target;
                                      let tmp7 = new.target;
                                      let typeError = new TypeError("Unknown encoding: " + str);
                                      let tmp9 = typeError;
                                      throw typeError;
                                    } else {
                                      let text = `${str}`;
                                      str = `${str}`.toLowerCase();
                                      flag = true;
                                      continue;
                                    }
                                  }
                                }
                              }
                            }
                            let tmp10 = utf16leSlice;
                            return utf16leSlice(self, tmp17, tmp16);
                          }
                        }
                      }
                      let tmp12 = latin1Slice;
                      return latin1Slice(self, tmp17, tmp16);
                    }
                  }
                }
                let tmp14 = utf8Slice;
                return utf8Slice(self, tmp17, tmp16);
              }
              return hexSlice(self, tmp17, tmp16);
            }
            tmp2 = undefined === length || length > self.length;
          }
        }
        function swap(arg0, arg1, arg2) {
          arg0[arg1] = arg0[arg2];
          arg0[arg2] = arg0[arg1];
        }
        function bidirectionalIndexOf(arg0, arg1, arg2, arg3, arg4) {
          if (0 === arg0.length) {
            return -1;
          } else {
            let num2 = 0;
            let tmp = arg2;
            if ("string" !== typeof arg2) {
              num2 = 2147483647;
              tmp = arg3;
              if (arg2 <= 2147483647) {
                num2 = arg2;
                tmp = arg3;
                if (arg2 < -2147483648) {
                  num2 = -2147483648;
                  tmp = arg3;
                }
              }
            }
            let tmp2 = +num2;
            const _isNaN = isNaN;
            if (isNaN(tmp2)) {
              let num4 = 0;
              if (!arg4) {
                num4 = arg0.length - 1;
              }
              tmp2 = num4;
            }
            let num6 = tmp2;
            if (tmp2 < 0) {
              num6 = arg0.length + tmp2;
            }
            if (num6 >= arg0.length) {
              if (arg4) {
                return -1;
              } else {
                num6 = arg0.length - 1;
              }
            } else if (num6 < 0) {
              num6 = 0;
              if (!arg4) {
                return -1;
              }
            }
            let fromResult = arg1;
            if ("string" === typeof arg1) {
              fromResult = Buffer.from(arg1, tmp);
            }
            if (Buffer.isBuffer(fromResult)) {
              let num10 = -1;
              if (0 !== fromResult.length) {
                num10 = arrayIndexOf(arg0, fromResult, num6, tmp, arg4);
              }
              return num10;
            } else if ("number" === typeof fromResult) {
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                const _Uint8Array = Uint8Array;
                if ("function" === typeof Uint8Array.prototype.indexOf) {
                  const _Uint8Array2 = Uint8Array;
                  if (arg4) {
                    const indexOf = prototype.indexOf;
                    prototype = indexOf.call;
                    let prototypeResult = prototype(arg0, tmp10, num6);
                  } else {
                    const lastIndexOf = prototype.lastIndexOf;
                    prototypeResult = lastIndexOf.call(arg0, tmp10, num6);
                  }
                }
              }
              const items = [fromResult & 255];
              return arrayIndexOf(arg0, items, num6, tmp, arg4);
            } else {
              const _TypeError = TypeError;
              prototype = TypeError.prototype;
              const typeError = new TypeError("val must be string, number or Buffer");
              throw typeError;
            }
          }
        }
        function arrayIndexOf(readUInt16BE, readUInt16BE, result2) {
          function read(readUInt16BE, result2) {
            if (1 === c0) {
              let uInt16BE = readUInt16BE[result2];
            } else {
              uInt16BE = readUInt16BE.readUInt16BE(result2 * c0);
            }
            return uInt16BE;
          }
          let c0 = 1;
          let num = 1;
          let result = length;
          let result1 = length2;
          if (undefined !== arg3) {
            const _String = String;
            const formatted = String(arg3).toLowerCase();
            if ("ucs2" !== formatted) {
              if ("ucs-2" !== formatted) {
                if ("utf16le" !== formatted) {
                  num = 1;
                  result = length;
                  result1 = length2;
                }
              }
            }
            if (readUInt16BE.length >= 2) {
              if (readUInt16BE.length >= 2) {
                c0 = 2;
                result = length / 2;
                result1 = length2 / 2;
                result2 = result2 / 2;
                num = 2;
              }
            }
            return -1;
          }
          if (arg4) {
            let num6 = -1;
            if (result2 < result) {
              while (true) {
                let tmp11 = -1 === num6;
                let tmp12 = result2;
                let num7 = 0;
                let readResult = read(readUInt16BE, result2);
                if (!tmp11) {
                  num7 = result2 - num6;
                }
                if (readResult === read(readUInt16BE, num7)) {
                  if (tmp11) {
                    num6 = result2;
                  }
                  let tmp14 = num6;
                  let diff = result2;
                  let num8 = num6;
                  if (result2 - num6 + 1 === result1) {
                    break;
                  }
                } else {
                  diff = result2;
                  if (-1 !== num6) {
                    diff = result2 - (result2 - num6);
                  }
                  num8 = -1;
                }
                result2 = diff + 1;
                num6 = num8;
              }
              return num6 * num;
            }
          } else {
            let diff1 = result2;
            if (result2 + result1 > result) {
              diff1 = result - result1;
            }
            if (diff1 >= 0) {
              while (true) {
                let tmp7 = diff1;
                let num4 = 0;
                let flag = true;
                if (0 < result1) {
                  let readResult1 = read(readUInt16BE, diff1 + num4);
                  let tmp9 = num4;
                  flag = false;
                  while (readResult1 === read(readUInt16BE, num4)) {
                    num4 = num4 + 1;
                    flag = true;
                    if (num4 >= result1) {
                      break;
                    }
                  }
                }
                if (flag) {
                  break;
                } else {
                  diff1 = diff1 - 1;
                }
              }
              return diff1;
            }
          }
          return -1;
        }
        function hexWrite(arg0, str) {
          const tmp = Number(arg2) || 0;
          const diff = arg0.length - tmp;
          let NumberResult = diff;
          if (arg3) {
            const _Number = Number;
            NumberResult = Number(arg3);
            if (NumberResult > diff) {
              NumberResult = diff;
            }
          }
          if (str.length % 2 !== 0) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Invalid hex string");
            throw typeError;
          } else {
            if (NumberResult > length / 2) {
              NumberResult = length / 2;
            }
            let num2 = 0;
            let num3 = 0;
            if (0 < NumberResult) {
              const _parseInt = parseInt;
              const parsed = parseInt(str.substr(2 * num2, 2), 16);
              const _isNaN = isNaN;
              while (!isNaN(parsed)) {
                arg0[tmp + num2] = parsed;
                num2 = num2 + 1;
                num3 = num2;
              }
              return num2;
            }
            return num3;
          }
        }
        function utf8Write(arg0, arg1, arg2, arg3) {
          return blitBuffer(utf8ToBytes(arg1, arg0.length - arg2), arg0, arg2, arg3);
        }
        function asciiWrite(arg0, str) {
          let length;
          const items = [];
          let num = 0;
          if (0 < str.length) {
            do {
              let arr = items.push(255 & str.charCodeAt(num));
              num = num + 1;
              length = str.length;
            } while (num < length);
          }
          return blitBuffer(items, arg0, arg2, arg3);
        }
        function latin1Write(arg0, arg1, arg2, arg3) {
          return asciiWrite(arg0, arg1, arg2, arg3);
        }
        function base64Write(arg0, arg1, arg2, arg3) {
          return blitBuffer(base64ToBytes(arg1), arg0, arg2, arg3);
        }
        function ucs2Write(arg0, str) {
          const items = [];
          if (0 < str.length) {
            let diff = tmp2 - 2;
            let num4 = 0;
            if (diff >= 0) {
              const charCodeAtResult = str.charCodeAt(num4);
              items.push(charCodeAtResult % 256);
              items.push(charCodeAtResult >> 8);
              num4 = num4 + 1;
              while (num4 < str.length) {
                diff = diff - 2;
                if (diff < 0) {
                  break;
                }
              }
              const tmp5 = charCodeAtResult >> 8;
            }
          }
          return blitBuffer(items, arg0, arg2, arg3);
        }
        function base64Slice(arr) {
          if (0 === arg1) {
            if (arg2 === arr.length) {
              let fromByteArrayResult = closure_0.fromByteArray(arr);
            }
            return fromByteArrayResult;
          }
          fromByteArrayResult = closure_0.fromByteArray(arr.slice(arg1, arg2));
        }
        function utf8Slice(arg0, arg1, arg2) {
          let sum1;
          let sum = arg1;
          const bound = Math.min(arg0.length, arg2);
          const items = [];
          if (arg1 < bound) {
            do {
              let tmp7 = arg0[sum];
              let num = 4;
              if (tmp7 <= 239) {
                let num2 = 3;
                if (tmp7 <= 223) {
                  let num3 = 1;
                  if (tmp7 > 191) {
                    num3 = 2;
                  }
                  num2 = num3;
                }
                num = num2;
              }
              let tmp8 = tmp3;
              let tmp9 = tmp4;
              let tmp10 = tmp5;
              let tmp11 = tmp6;
              let tmp12 = null;
              if (sum + num <= bound) {
                if (1 === num) {
                  tmp8 = tmp3;
                  tmp9 = tmp4;
                  tmp10 = tmp5;
                  tmp11 = tmp6;
                  tmp12 = null;
                  if (tmp7 < 128) {
                    tmp8 = tmp3;
                    tmp9 = tmp4;
                    tmp10 = tmp5;
                    tmp11 = tmp6;
                    tmp12 = tmp7;
                  }
                } else if (2 === num) {
                  let tmp22 = arg0[sum + 1];
                  let tmp23 = 128 === (192 & tmp22);
                  let tmp24 = tmp6;
                  if (tmp23) {
                    let tmp25 = (31 & tmp7) << 6 | 63 & tmp22;
                    tmp23 = tmp25 > 127;
                    tmp24 = tmp25;
                  }
                  tmp8 = tmp22;
                  tmp9 = tmp4;
                  tmp10 = tmp5;
                  tmp11 = tmp24;
                  tmp12 = null;
                  if (tmp23) {
                    tmp8 = tmp22;
                    tmp9 = tmp4;
                    tmp10 = tmp5;
                    tmp11 = tmp24;
                    tmp12 = tmp24;
                  }
                } else if (3 === num) {
                  let tmp16 = arg0[sum + 1];
                  let tmp17 = arg0[sum + 2];
                  let tmp18 = 128 === (192 & tmp16) && 128 === (192 & tmp17);
                  let tmp19 = tmp6;
                  if (tmp18) {
                    let tmp20 = (15 & tmp7) << 12 | (63 & tmp16) << 6 | 63 & tmp17;
                    tmp18 = tmp20 > 2047;
                    tmp19 = tmp20;
                  }
                  if (tmp18) {
                    let tmp21 = tmp19 < 55296 || tmp19 > 57343;
                    tmp18 = tmp21;
                  }
                  tmp8 = tmp16;
                  tmp9 = tmp17;
                  tmp10 = tmp5;
                  tmp11 = tmp19;
                  tmp12 = null;
                  if (tmp18) {
                    tmp8 = tmp16;
                    tmp9 = tmp17;
                    tmp10 = tmp5;
                    tmp11 = tmp19;
                    tmp12 = tmp19;
                  }
                } else {
                  tmp8 = tmp3;
                  tmp9 = tmp4;
                  tmp10 = tmp5;
                  tmp11 = tmp6;
                  tmp12 = null;
                  if (4 === num) {
                    let tmp32 = arg0[sum + 1];
                    let tmp33 = arg0[sum + 2];
                    let tmp34 = arg0[sum + 3];
                    let tmp13 = 128 === (192 & tmp32) && 128 === (192 & tmp33) && 128 === (192 & tmp34);
                    let tmp14 = tmp6;
                    if (tmp13) {
                      let tmp15 = (15 & tmp7) << 18 | (63 & tmp32) << 12 | (63 & tmp33) << 6 | 63 & tmp34;
                      tmp13 = tmp15 > 65535;
                      tmp14 = tmp15;
                    }
                    if (tmp13) {
                      tmp13 = tmp14 < 1114112;
                    }
                    tmp8 = tmp32;
                    tmp9 = tmp33;
                    tmp10 = tmp34;
                    tmp11 = tmp14;
                    tmp12 = null;
                    if (tmp13) {
                      tmp8 = tmp32;
                      tmp9 = tmp33;
                      tmp10 = tmp34;
                      tmp11 = tmp14;
                      tmp12 = tmp14;
                    }
                  }
                }
              }
              let num4 = 65533;
              let num5 = 1;
              if (null !== tmp12) {
                num5 = num;
                num4 = tmp12;
                if (tmp12 > 65535) {
                  let diff = tmp12 - 65536;
                  let arr = items.push(diff >>> 10 & 1023 | 55296);
                  num4 = 56320 | 1023 & diff;
                  num5 = num;
                }
              }
              arr = items.push(num4);
              sum = sum + num5;
              tmp3 = tmp8;
              tmp4 = tmp9;
              tmp5 = tmp10;
              tmp6 = tmp11;
            } while (sum < bound);
          }
          if (items.length <= c3) {
            const _String3 = String;
            const _String4 = String;
            let str2 = fromCharCode2.apply(String, items);
          } else {
            let num6 = 0;
            let str = "";
            str2 = "";
            if (0 < length) {
              do {
                let _String = String;
                let _String2 = String;
                let tmp30 = c3;
                sum1 = num6 + c3;
                str = `${tmp29(String, arr.slice(num6, tmp31))}`;
                str2 = str;
                num6 = sum1;
              } while (sum1 < length);
            }
          }
          return str2;
        }
        function asciiSlice(arg0, arg1, arg2) {
          let sum = arg1;
          const bound = Math.min(arg0.length, arg2);
          let str = "";
          let str2 = "";
          if (arg1 < bound) {
            do {
              let _String = String;
              str = `${String.fromCharCode(127 & arg0[tmp])}`;
              sum = sum + 1;
              str2 = str;
            } while (sum < bound);
          }
          return str2;
        }
        function latin1Slice(arg0, arg1, arg2) {
          let sum = arg1;
          const bound = Math.min(arg0.length, arg2);
          let str = "";
          let str2 = "";
          if (arg1 < bound) {
            do {
              let _String = String;
              str = `${String.fromCharCode(arg0[tmp])}`;
              sum = sum + 1;
              str2 = str;
            } while (sum < bound);
          }
          return str2;
        }
        function hexSlice(arg0, arg1, arg2) {
          let num = arg1;
          let tmp = arg2;
          let tmp2 = !arg1;
          if (!tmp2) {
            tmp2 = num < 0;
          }
          if (tmp2) {
            num = 0;
          }
          let tmp3 = !tmp;
          if (!tmp3) {
            tmp3 = tmp < 0;
          }
          if (!tmp3) {
            tmp3 = tmp > length;
          }
          if (tmp3) {
            tmp = length;
          }
          let str = "";
          let str2 = "";
          while (num < tmp) {
            let tmp4 = toHex;
            str = `${toHex(arg0[num])}`;
            num = num + 1;
            str2 = str;
          }
          return str2;
        }
        function utf16leSlice(arr) {
          let length;
          const substr = arr.slice(arg1, arg2);
          let num = 0;
          let str = "";
          let str2 = "";
          if (0 < substr.length) {
            do {
              let _String = String;
              str = `${String.fromCharCode(arr[num] + 256 * arr[num + 1])}`;
              num = num + 2;
              str2 = str;
              length = substr.length;
            } while (num < length);
          }
          return str2;
        }
        function checkOffset(arg0, arg1, arg2) {
          if (arg0 % 1 === 0) {
            if (arg0 >= 0) {
              if (arg0 + arg1 > arg2) {
                const _RangeError = RangeError;
                const rangeError = new RangeError("Trying to access beyond buffer length");
                throw rangeError;
              }
            }
          }
          const rangeError1 = new RangeError("offset is not uint");
          throw rangeError1;
        }
        function checkInt(arg0, arg1, arg2, arg3, arg4, arg5) {
          if (Buffer.isBuffer(arg0)) {
            if (arg1 <= arg4) {
              if (arg1 >= arg5) {
                if (arg2 + arg3 > arg0.length) {
                  const _RangeError = RangeError;
                  const rangeError = new RangeError("Index out of range");
                  throw rangeError;
                }
              }
            }
            const _RangeError2 = RangeError;
            const rangeError1 = new RangeError("\"value\" argument is out of bounds");
            throw rangeError1;
          } else {
            const _TypeError = TypeError;
            const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
            throw typeError;
          }
        }
        function objectWriteUInt16(self, arg1, arg2, arg3) {
          let sum = arg1;
          if (arg1 < 0) {
            sum = 65535 + arg1 + 1;
          }
          const bound = Math.min(self.length - arg2, 2);
          for (let num3 = 0; num3 < bound; num3 = num3 + 1) {
            let diff = num3;
            let sum1 = arg2 + num3;
            if (!arg3) {
              diff = 1 - num3;
            }
            let diff1 = num3;
            let tmp5 = sum & 255 << 8 * diff;
            if (!arg3) {
              diff1 = 1 - num3;
            }
            self[sum1] = tmp5 >>> 8 * diff1;
          }
        }
        function objectWriteUInt32(self, sum, arg2, arg3) {
          if (sum < 0) {
            sum = 4294967295 + sum + 1;
          }
          const bound = Math.min(self.length - arg2, 4);
          for (let num3 = 0; num3 < bound; num3 = num3 + 1) {
            let diff = num3;
            let sum1 = arg2 + num3;
            if (!arg3) {
              diff = 3 - num3;
            }
            self[sum1] = sum >>> 8 * diff & 255;
          }
        }
        function checkIEEE754(arg0, arg1, arg2, arg3, arg4, arg5) {
          if (arg2 + arg3 > arg0.length) {
            const _RangeError2 = RangeError;
            const rangeError = new RangeError("Index out of range");
            throw rangeError;
          } else if (arg2 < 0) {
            const _RangeError = RangeError;
            const rangeError1 = new RangeError("Index out of range");
            throw rangeError1;
          }
        }
        function writeFloat(arg0, arg1, arg2, arg3, arg4) {
          if (!arg4) {
            checkIEEE754(arg0, undefined, arg2, 4);
          }
          closure_1.write(arg0, arg1, arg2, arg3, 23, 4);
          return arg2 + 4;
        }
        function writeDouble(arg0, arg1, arg2, arg3, arg4) {
          if (!arg4) {
            checkIEEE754(arg0, undefined, arg2, 8);
          }
          closure_1.write(arg0, arg1, arg2, arg3, 52, 8);
          return arg2 + 8;
        }
        function toHex(arg0) {
          if (arg0 < 16) {
            let text = `0${arg0.toString(16)}`;
          } else {
            text = arg0.toString(16);
          }
          return text;
        }
        function utf8ToBytes(str) {
          let num = arg1;
          if (!arg1) {
            num = Infinity;
          }
          const items = [];
          let tmp = null;
          let num2 = 0;
          if (0 < str.length) {
            while (true) {
              let charCodeAtResult = str.charCodeAt(num2);
              let tmp3 = num2;
              if (charCodeAtResult > 55295) {
                if (charCodeAtResult < 57344) {
                  if (tmp) {
                    if (charCodeAtResult < 56320) {
                      let diff = num - 3;
                      let tmp10 = diff;
                      let tmp11 = charCodeAtResult;
                      if (diff > -1) {
                        let arr = items.push(239, 191, 189);
                        tmp10 = diff;
                        tmp11 = charCodeAtResult;
                      }
                    } else {
                      let sum = 65536 + (tmp - 55296 << 10 | charCodeAtResult - 56320);
                      let tmp7 = num;
                    }
                    if (sum < 128) {
                      let diff1 = tmp7 - 1;
                      if (diff1 >= 0) {
                        arr = items.push(sum);
                        tmp10 = diff1;
                        tmp11 = null;
                      }
                    } else if (sum < 2048) {
                      let diff2 = tmp7 - 2;
                      if (diff2 >= 0) {
                        let arr1 = items.push(sum >> 6 | 192, 63 & sum | 128);
                        tmp10 = diff2;
                        tmp11 = null;
                      }
                    } else if (sum < 65536) {
                      let diff3 = tmp7 - 3;
                      if (diff3 >= 0) {
                        let arr2 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                        tmp10 = diff3;
                        tmp11 = null;
                      }
                    } else if (sum >= 1114112) {
                      break;
                    } else {
                      let diff4 = tmp7 - 4;
                      if (diff4 >= 0) {
                        let tmp29 = items;
                        let arr3 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                        tmp10 = diff4;
                        tmp11 = null;
                      }
                    }
                  } else if (charCodeAtResult > 56319) {
                    let diff5 = num - 3;
                    tmp11 = tmp;
                    tmp10 = diff5;
                    if (diff5 > -1) {
                      let arr4 = items.push(239, 191, 189);
                      tmp10 = diff5;
                      tmp11 = tmp;
                    }
                  } else {
                    tmp10 = num;
                    tmp11 = charCodeAtResult;
                    if (num2 + 1 === length) {
                      let diff6 = num - 3;
                      tmp11 = tmp;
                      tmp10 = diff6;
                      if (diff6 > -1) {
                        let arr5 = items.push(239, 191, 189);
                        tmp10 = diff6;
                        tmp11 = tmp;
                      }
                    }
                  }
                  num2 = num2 + 1;
                  num = tmp10;
                  tmp = tmp11;
                }
              }
              let tmp4 = tmp;
              let tmp5 = num;
              if (tmp) {
                let diff7 = num - 3;
                tmp4 = diff7 > -1;
                tmp5 = diff7;
              }
              tmp7 = tmp5;
              sum = charCodeAtResult;
              if (tmp4) {
                let arr6 = items.push(239, 191, 189);
                tmp7 = tmp5;
                sum = charCodeAtResult;
              }
            }
            const _Error = Error;
            const error = new Error("Invalid code point");
            throw error;
          }
          return items;
        }
        function base64ToBytes(arg0) {
          return closure_0.toByteArray((function base64clean(str) {
            let result;
            if (str.trim) {
              let str2 = str.trim();
            } else {
              str2 = str.replace(/^\s+|\s+$/g, "");
            }
            const replaced = str2.replace(outer1_4, "");
            if (replaced.length < 2) {
              return "";
            } else {
              let tmp = replaced;
              let tmp2 = replaced;
              if (replaced.length % 4 !== 0) {
                do {
                  let text = `${tmp}=`;
                  tmp = text;
                  tmp2 = text;
                  result = `${tmp}=`.length % 4;
                } while (result !== 0);
              }
              return tmp2;
            }
          })(arg0));
        }
        function blitBuffer(arg0, arg1, arg2, arg3) {
          let num = 0;
          if (0 < arg3) {
            num = 0;
            if (arg2 < arg1.length) {
              let num2 = 0;
              num = 0;
              if (0 < arg0.length) {
                arg1[num2 + arg2] = arg0[num2];
                const sum = num2 + 1;
                num = sum;
                while (sum < arg3) {
                  num = sum;
                  if (sum + arg2 >= arg1.length) {
                    break;
                  } else {
                    num2 = sum;
                    num = sum;
                    if (sum >= arg0.length) {
                      break;
                    }
                  }
                }
              }
            }
          }
          return num;
        }
        let closure_0 = callback(4);
        callback = callback(5);
        let closure_2 = callback(6);
        closure_0.Buffer = Buffer;
        closure_0.SlowBuffer = function SlowBuffer(arg0) {
          let num = arg0;
          if (+arg0 != arg0) {
            num = 0;
          }
          return Buffer.alloc(+num);
        };
        closure_0.INSPECT_MAX_BYTES = 50;
        if (undefined !== TYPED_ARRAY_SUPPORT.TYPED_ARRAY_SUPPORT) {
          TYPED_ARRAY_SUPPORT = TYPED_ARRAY_SUPPORT.TYPED_ARRAY_SUPPORT;
        } else {
          TYPED_ARRAY_SUPPORT = (function typedArraySupport() {
            const uint8Array = new Uint8Array(1);
            const obj = Object.create(Uint8Array.prototype);
            obj.foo = function foo() {
              return 42;
            };
            uint8Array.__proto__ = obj;
            const tmp3 = 42 === uint8Array.foo();
            let tmp4 = tmp3;
            if (tmp3) {
              tmp4 = "function" === typeof obj2.subarray;
            }
            let tmp6 = tmp4;
            if (tmp4) {
              tmp6 = 0 === obj2.subarray(1, 1).byteLength;
            }
            return tmp6;
          })();
        }
        Buffer.TYPED_ARRAY_SUPPORT = TYPED_ARRAY_SUPPORT;
        closure_0.kMaxLength = kMaxLength();
        Buffer.poolSize = 8192;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          let _Uint8Array = Uint8Array;
          Buffer.prototype.__proto__ = Uint8Array.prototype;
          let _Uint8Array2 = Uint8Array;
          class Buffer {
            constructor(arg0, arg1, arg2) {
              self = this;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                tmp = Buffer;
                if (!(self instanceof Buffer)) {
                  tmp2 = Buffer;
                  prototype = Buffer.prototype;
                  tmp3 = new.target;
                  tmp4 = new.target;
                  tmp5 = TYPED_ARRAY_SUPPORT;
                  tmp6 = arg1;
                  tmp7 = arg2;
                  tmp8 = new Buffer(TYPED_ARRAY_SUPPORT, arg1, arg2);
                  tmp9 = tmp8;
                  return tmp8;
                }
              }
              if ("number" === typeof TYPED_ARRAY_SUPPORT) {
                str = "string";
                if ("string" === typeof arg1) {
                  tmp16 = globalThis;
                  _Error = Error;
                  prototype2 = Error.prototype;
                  tmp17 = new.target;
                  str2 = "If encoding is specified then the first argument must be a string";
                  tmp18 = new.target;
                  error = new Error("If encoding is specified then the first argument must be a string");
                  tmp20 = error;
                  throw error;
                } else {
                  tmp15 = allocUnsafe;
                  return allocUnsafe(self, TYPED_ARRAY_SUPPORT);
                }
              } else {
                tmp10 = from;
                tmp11 = self;
                tmp12 = TYPED_ARRAY_SUPPORT;
                tmp13 = arg1;
                tmp14 = arg2;
                return from(self, TYPED_ARRAY_SUPPORT, arg1, arg2);
              }
            }
            static _augment(arg0) {
              TYPED_ARRAY_SUPPORT.__proto__ = Buffer.prototype;
              return TYPED_ARRAY_SUPPORT;
            }
            static from(arg0, arg1, arg2) {
              return from(null, TYPED_ARRAY_SUPPORT, arg1, arg2);
            }
            static alloc(arg0, arg1, arg2) {
              tmp = assertSize(TYPED_ARRAY_SUPPORT);
              if (TYPED_ARRAY_SUPPORT <= 0) {
                tmp11 = createBuffer;
                tmp12 = null;
                tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
              } else if (undefined !== arg1) {
                str = "string";
                if ("string" === typeof arg2) {
                  tmp8 = createBuffer;
                  tmp9 = null;
                  obj2 = createBuffer(null, TYPED_ARRAY_SUPPORT);
                  fillResult = obj2.fill(arg1, arg2);
                } else {
                  tmp5 = createBuffer;
                  tmp6 = null;
                  obj = createBuffer(null, TYPED_ARRAY_SUPPORT);
                  fillResult = obj.fill(arg1);
                }
                tmp10 = fillResult;
              } else {
                tmp2 = createBuffer;
                tmp3 = null;
                tmp4 = createBuffer(null, TYPED_ARRAY_SUPPORT);
              }
              return tmp4;
            }
            static allocUnsafe(arg0) {
              return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
            }
            static allocUnsafeSlow(arg0) {
              return allocUnsafe(null, TYPED_ARRAY_SUPPORT);
            }
            static isBuffer(arg0) {
              tmp = null == TYPED_ARRAY_SUPPORT || !TYPED_ARRAY_SUPPORT._isBuffer;
              return !tmp;
            }
            static compare(arg0, arg1) {
              if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                tmp = Buffer;
                if (Buffer.isBuffer(arg1)) {
                  if (TYPED_ARRAY_SUPPORT === arg1) {
                    num5 = 0;
                    return 0;
                  } else {
                    length = TYPED_ARRAY_SUPPORT.length;
                    length2 = arg1.length;
                    tmp3 = globalThis;
                    _Math = Math;
                    bound = Math.min(length, length2);
                    num = 0;
                    num2 = 0;
                    tmp5 = length;
                    tmp6 = length2;
                    if (0 < bound) {
                      tmp7 = num2;
                      while (TYPED_ARRAY_SUPPORT[num2] === arg1[num2]) {
                        num2 = num2 + 1;
                        tmp5 = length;
                        tmp6 = length2;
                      }
                      tmp5 = TYPED_ARRAY_SUPPORT[num2];
                      tmp6 = arg1[num2];
                    }
                    num3 = -1;
                    if (tmp5 >= tmp6) {
                      num4 = 0;
                      if (tmp6 < tmp5) {
                        num4 = 1;
                      }
                      num3 = num4;
                    }
                    return num3;
                  }
                }
              }
              typeError = new TypeError("Arguments must be Buffers");
              throw typeError;
            }
            static isEncoding(arg0) {
              str = String(TYPED_ARRAY_SUPPORT);
              formatted = str.toLowerCase();
              if ("hex" !== formatted) {
                str2 = "utf8";
                if ("utf8" !== formatted) {
                  str3 = "utf-8";
                  if ("utf-8" !== formatted) {
                    str4 = "ascii";
                    if ("ascii" !== formatted) {
                      str5 = "latin1";
                      if ("latin1" !== formatted) {
                        str6 = "binary";
                        if ("binary" !== formatted) {
                          str7 = "base64";
                          if ("base64" !== formatted) {
                            str8 = "ucs2";
                            if ("ucs2" !== formatted) {
                              str9 = "ucs-2";
                              if ("ucs-2" !== formatted) {
                                str10 = "utf16le";
                                if ("utf16le" !== formatted) {
                                  str11 = "utf-16le";
                                  if ("utf-16le" !== formatted) {
                                    flag = false;
                                    return false;
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
              return true;
            }
            static concat(arg0, arg1) {
              num = arg1;
              if (c2(TYPED_ARRAY_SUPPORT)) {
                num2 = 0;
                if (0 === TYPED_ARRAY_SUPPORT.length) {
                  tmp15 = Buffer;
                  return Buffer.alloc(0);
                } else {
                  if (undefined === num) {
                    num3 = 0;
                    num4 = 0;
                    num = 0;
                    if (0 < TYPED_ARRAY_SUPPORT.length) {
                      do {
                        num3 = num3 + TYPED_ARRAY_SUPPORT[num4].length;
                        num4 = num4 + 1;
                        num = num3;
                        length = TYPED_ARRAY_SUPPORT.length;
                      } while (num4 < length);
                    }
                  }
                  tmp6 = Buffer;
                  allocUnsafeResult = Buffer.allocUnsafe(num);
                  num5 = 0;
                  num6 = 0;
                  if (0 < TYPED_ARRAY_SUPPORT.length) {
                    arr = TYPED_ARRAY_SUPPORT[num5];
                    tmp8 = Buffer;
                    while (Buffer.isBuffer(arr)) {
                      copyResult = arr.copy(allocUnsafeResult, num6);
                      num6 = num6 + arr.length;
                      num5 = num5 + 1;
                    }
                    tmp9 = globalThis;
                    _TypeError2 = TypeError;
                    prototype2 = TypeError.prototype;
                    tmp10 = new.target;
                    str2 = "\"list\" argument must be an Array of Buffers";
                    tmp11 = new.target;
                    typeError = new TypeError("\"list\" argument must be an Array of Buffers");
                    tmp13 = typeError;
                    throw typeError;
                  }
                  return allocUnsafeResult;
                }
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp2 = new.target;
                str = "\"list\" argument must be an Array of Buffers";
                tmp3 = new.target;
                typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
                tmp5 = typeError1;
                throw typeError1;
              }
            }
            swap16() {
              self = this;
              length = this.length;
              if (length % 2 !== 0) {
                tmp3 = globalThis;
                _RangeError = RangeError;
                prototype = RangeError.prototype;
                tmp4 = new.target;
                str = "Buffer size must be a multiple of 16-bits";
                tmp5 = new.target;
                rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
                tmp7 = rangeError;
                throw rangeError;
              } else {
                num = 1;
                for (let num2 = 0; num2 < length; num2 = num2 + 2) {
                  tmp = swap;
                  tmp2 = swap(self, num2, num2 + 1);
                }
                return self;
              }
            }
            swap32() {
              self = this;
              length = this.length;
              if (length % 4 !== 0) {
                tmp4 = globalThis;
                _RangeError = RangeError;
                prototype = RangeError.prototype;
                tmp5 = new.target;
                str = "Buffer size must be a multiple of 32-bits";
                tmp6 = new.target;
                rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
                tmp8 = rangeError;
                throw rangeError;
              } else {
                num = 3;
                num2 = 1;
                num3 = 2;
                for (let num4 = 0; num4 < length; num4 = num4 + 4) {
                  tmp = swap;
                  tmp2 = swap(self, num4, num4 + 3);
                  tmp3 = swap(self, num4 + 1, num4 + 2);
                }
                return self;
              }
            }
            swap64() {
              self = this;
              length = this.length;
              if (length % 8 !== 0) {
                tmp6 = globalThis;
                _RangeError = RangeError;
                prototype = RangeError.prototype;
                tmp7 = new.target;
                str = "Buffer size must be a multiple of 64-bits";
                tmp8 = new.target;
                rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
                tmp10 = rangeError;
                throw rangeError;
              } else {
                num = 7;
                num2 = 1;
                num3 = 6;
                num4 = 2;
                num5 = 5;
                num6 = 3;
                num7 = 4;
                for (let num8 = 0; num8 < length; num8 = num8 + 8) {
                  tmp = swap;
                  tmp2 = swap(self, num8, num8 + 7);
                  tmp3 = swap(self, num8 + 1, num8 + 6);
                  tmp4 = swap(self, num8 + 2, num8 + 5);
                  tmp5 = swap(self, num8 + 3, num8 + 4);
                }
                return self;
              }
            }
            toString() {
              self = this;
              tmp = this.length | 0;
              if (0 === tmp) {
                return "";
              } else {
                if (0 === arguments.length) {
                  tmp5 = utf8Slice;
                  applyResult = utf8Slice(self, 0, tmp);
                } else {
                  tmp2 = slowToString;
                  tmp3 = arguments;
                  applyResult = slowToString(...arguments);
                }
                tmp6 = applyResult;
              }
              return;
            }
            equals(arg0) {
              self = this;
              if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                tmp6 = self === TYPED_ARRAY_SUPPORT;
                if (!tmp6) {
                  tmp7 = Buffer;
                  num = 0;
                  tmp6 = 0 === Buffer.compare(self, TYPED_ARRAY_SUPPORT);
                }
                return tmp6;
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp2 = new.target;
                str = "Argument must be a Buffer";
                tmp3 = new.target;
                typeError = new TypeError("Argument must be a Buffer");
                tmp5 = typeError;
                throw typeError;
              }
            }
            inspect() {
              self = this;
              INSPECT_MAX_BYTES = c0.INSPECT_MAX_BYTES;
              str = "";
              if (this.length > 0) {
                str2 = "hex";
                str3 = self.toString("hex", 0, INSPECT_MAX_BYTES);
                match = str3.match(/.{2}/g);
                str4 = " ";
                joined = match.join(" ");
                text = joined;
                if (self.length > INSPECT_MAX_BYTES) {
                  str5 = " ... ";
                  text = `${tmp} ... `;
                }
                str = text;
              }
              return "<Buffer " + str + ">";
            }
            compare(arg0, arg1, arg2, arg3, arg4) {
              num = arg1;
              tmp = arg2;
              num2 = arg3;
              length = arg4;
              self = this;
              if (Buffer.isBuffer(TYPED_ARRAY_SUPPORT)) {
                if (undefined === num) {
                  num = 0;
                }
                if (undefined === tmp) {
                  num3 = 0;
                  if (TYPED_ARRAY_SUPPORT) {
                    num3 = TYPED_ARRAY_SUPPORT.length;
                  }
                  tmp = num3;
                }
                if (undefined === num2) {
                  num2 = 0;
                }
                if (undefined === length) {
                  length = self.length;
                }
                num4 = 0;
                if (num >= 0) {
                  if (tmp <= TYPED_ARRAY_SUPPORT.length) {
                    if (num2 >= 0) {
                      if (length <= self.length) {
                        if (num2 >= length) {
                          if (num >= tmp) {
                            return 0;
                          }
                        }
                        if (num2 >= length) {
                          num9 = -1;
                          return -1;
                        } else if (num >= tmp) {
                          num8 = 1;
                          return 1;
                        } else if (self === TYPED_ARRAY_SUPPORT) {
                          return 0;
                        } else {
                          tmp15 = length >>> 0;
                          tmp16 = num2 >>> 0;
                          diff = tmp15 - tmp16;
                          tmp18 = tmp >>> 0;
                          tmp19 = num >>> 0;
                          diff1 = tmp18 - tmp19;
                          tmp21 = globalThis;
                          _Math = Math;
                          bound = Math.min(diff, diff1);
                          substr = self.slice(tmp16, tmp15);
                          substr1 = TYPED_ARRAY_SUPPORT.slice(tmp19, tmp18);
                          num5 = 0;
                          tmp8 = diff;
                          tmp9 = diff1;
                          if (0 < bound) {
                            tmp7 = num5;
                            while (substr[num5] === substr1[num5]) {
                              num5 = num5 + 1;
                              tmp8 = diff;
                              tmp9 = diff1;
                            }
                            tmp8 = substr[num5];
                            tmp9 = substr1[num5];
                          }
                          num6 = -1;
                          if (tmp8 >= tmp9) {
                            num7 = 0;
                            if (tmp9 < tmp8) {
                              num7 = 1;
                            }
                            num6 = num7;
                          }
                          return num6;
                        }
                      }
                    }
                  }
                }
                tmp10 = globalThis;
                _RangeError = RangeError;
                prototype2 = RangeError.prototype;
                tmp11 = new.target;
                str2 = "out of range index";
                tmp12 = new.target;
                rangeError = new RangeError("out of range index");
                tmp14 = rangeError;
                throw rangeError;
              } else {
                tmp2 = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp3 = new.target;
                str = "Argument must be a Buffer";
                tmp4 = new.target;
                typeError = new TypeError("Argument must be a Buffer");
                tmp6 = typeError;
                throw typeError;
              }
            }
            includes(arg0, arg1, arg2) {
              return -1 !== this.indexOf(TYPED_ARRAY_SUPPORT, arg1, arg2);
            }
            indexOf(arg0, arg1, arg2) {
              return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, true);
            }
            lastIndexOf(arg0, arg1, arg2) {
              return bidirectionalIndexOf(this, TYPED_ARRAY_SUPPORT, arg1, arg2, false);
            }
            write(arg0, arg1, arg2, arg3) {
              self = this;
              if (undefined === arg1) {
                length = self.length;
                num = 0;
                str3 = "utf8";
              } else {
                if (undefined === arg2) {
                  str = "string";
                  if ("string" === typeof arg1) {
                    length = self.length;
                    num = 0;
                    str3 = arg1;
                  }
                }
                tmp = globalThis;
                _isFinite = isFinite;
                if (isFinite(arg1)) {
                  tmp6 = arg1 | 0;
                  _isFinite2 = isFinite;
                  num = tmp6;
                  str3 = arg2;
                  if (isFinite(arg2)) {
                    tmp7 = arg2 | 0;
                    num = tmp6;
                    length = tmp7;
                    str3 = arg3;
                    if (undefined === arg3) {
                      str3 = "utf8";
                      num = tmp6;
                      length = tmp7;
                    }
                  }
                } else {
                  _Error = Error;
                  prototype = Error.prototype;
                  tmp2 = new.target;
                  str2 = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
                  tmp3 = new.target;
                  error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  tmp5 = error;
                  throw error;
                }
              }
              diff = self.length - num;
              tmp9 = undefined === length || length > diff;
              if (tmp9) {
                length = diff;
              }
              if (TYPED_ARRAY_SUPPORT.length <= 0) {
                if (num <= self.length) {
                  if (!str3) {
                    str3 = "utf8";
                  }
                  str4 = "utf-16le";
                  str5 = "utf16le";
                  str6 = "ucs-2";
                  str7 = "ucs2";
                  str8 = "base64";
                  str9 = "binary";
                  str10 = "latin1";
                  str11 = "ascii";
                  str12 = "utf-8";
                  str13 = "utf8";
                  str14 = "hex";
                  flag = false;
                  tmp10 = str3;
                  while ("hex" !== str3) {
                    if ("utf8" !== str3) {
                      if ("utf-8" !== str3) {
                        if ("ascii" === str3) {
                          tmp32 = asciiWrite;
                          tmp33 = self;
                          tmp34 = TYPED_ARRAY_SUPPORT;
                          tmp35 = num;
                          tmp36 = length;
                          return asciiWrite(self, TYPED_ARRAY_SUPPORT, num, length);
                        } else {
                          if ("latin1" !== str3) {
                            if ("binary" !== str3) {
                              if ("base64" === str3) {
                                tmp22 = base64Write;
                                tmp23 = self;
                                tmp24 = TYPED_ARRAY_SUPPORT;
                                tmp25 = num;
                                tmp26 = length;
                                return base64Write(self, TYPED_ARRAY_SUPPORT, num, length);
                              } else {
                                if ("ucs2" !== str3) {
                                  if ("ucs-2" !== str3) {
                                    if ("utf16le" !== str3) {
                                      if ("utf-16le" !== str3) {
                                        if (flag) {
                                          tmp12 = globalThis;
                                          _TypeError = TypeError;
                                          str15 = "Unknown encoding: ";
                                          prototype2 = TypeError.prototype;
                                          tmp13 = new.target;
                                          tmp14 = new.target;
                                          typeError = new TypeError("Unknown encoding: " + str3);
                                          tmp16 = typeError;
                                          throw typeError;
                                        } else {
                                          text = `${str3}`;
                                          str3 = `${str3}`.toLowerCase();
                                          flag = true;
                                          continue;
                                        }
                                      }
                                    }
                                  }
                                }
                                tmp17 = ucs2Write;
                                tmp18 = self;
                                tmp19 = TYPED_ARRAY_SUPPORT;
                                tmp20 = num;
                                tmp21 = length;
                                return ucs2Write(self, TYPED_ARRAY_SUPPORT, num, length);
                              }
                            }
                          }
                          tmp27 = latin1Write;
                          tmp28 = self;
                          tmp29 = TYPED_ARRAY_SUPPORT;
                          tmp30 = num;
                          tmp31 = length;
                          return latin1Write(self, TYPED_ARRAY_SUPPORT, num, length);
                        }
                      }
                    }
                    tmp37 = utf8Write;
                    tmp38 = self;
                    tmp39 = TYPED_ARRAY_SUPPORT;
                    tmp40 = num;
                    tmp41 = length;
                    return utf8Write(self, TYPED_ARRAY_SUPPORT, num, length);
                  }
                  tmp42 = hexWrite;
                  tmp43 = self;
                  tmp44 = TYPED_ARRAY_SUPPORT;
                  tmp45 = num;
                  tmp46 = length;
                  return hexWrite(self, TYPED_ARRAY_SUPPORT, num, length);
                }
              } else if (length >= 0) {
              }
              rangeError = new RangeError("Attempt to write outside buffer bounds");
              throw rangeError;
            }
            toJSON() {
              obj = { type: "Buffer" };
              slice = Array.prototype.slice;
              self = this._arr;
              if (!self) {
                self = this;
              }
              obj.data = slice.call(self, 0);
              return obj;
            }
            slice(arg0, arg1) {
              self = this;
              length = this.length;
              tmp = ~~TYPED_ARRAY_SUPPORT;
              if (tmp < 0) {
                num = tmp + length;
                if (num < 0) {
                  num = 0;
                }
              } else {
                num = tmp;
                if (tmp > length) {
                  num = length;
                }
              }
              tmp2 = length;
              if (undefined !== arg1) {
                tmp2 = ~~arg1;
              }
              if (tmp2 < 0) {
                num2 = tmp2 + length;
                if (num2 < 0) {
                  num2 = 0;
                }
              } else {
                num2 = tmp2;
                if (tmp2 > length) {
                  num2 = length;
                }
              }
              if (num2 < num) {
                num2 = num;
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                subarrayResult = self.subarray(num, num2);
                tmp12 = Buffer;
                subarrayResult.__proto__ = Buffer.prototype;
                tmp10 = subarrayResult;
              } else {
                diff = num2 - num;
                tmp4 = Buffer;
                prototype = Buffer.prototype;
                tmp5 = new.target;
                tmp6 = new.target;
                tmp7 = diff;
                tmp8 = new Buffer(diff, undefined);
                tmp9 = tmp8;
                tmp10 = tmp8;
                num3 = 0;
                if (0 < diff) {
                  do {
                    tmp8[num3] = self[num3 + num];
                    num3 = num3 + 1;
                    tmp10 = tmp8;
                  } while (num3 < diff);
                }
              }
              return tmp10;
            }
            readUIntLE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkOffset;
                tmp4 = checkOffset(tmp, tmp2, self.length);
              }
              tmp5 = self[tmp];
              num = 1;
              num2 = 256;
              tmp6 = tmp5;
              if (1 < tmp2) {
                sum = tmp5 + self[tmp + num] * num2;
                num = num + 1;
                tmp6 = sum;
                while (num < tmp2) {
                  num2 = num2 * 256;
                  tmp5 = sum;
                  tmp6 = sum;
                  if (!num2) {
                    break;
                  }
                }
              }
              return tmp6;
            }
            readUIntBE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkOffset;
                tmp4 = checkOffset(tmp, tmp2, self.length);
              }
              diff = tmp2 - 1;
              tmp6 = self[tmp + diff];
              num = 256;
              tmp7 = tmp6;
              if (diff > 0) {
                diff = diff - 1;
                sum = tmp6 + self[tmp + diff] * num;
                tmp7 = sum;
                while (diff > 0) {
                  num = num * 256;
                  tmp6 = sum;
                  tmp7 = sum;
                  if (!num) {
                    break;
                  }
                }
              }
              return tmp7;
            }
            readUInt8(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 1;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 1, self.length);
              }
              return self[TYPED_ARRAY_SUPPORT];
            }
            readUInt16LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 2;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
              }
              return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
            }
            readUInt16BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 2;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
              }
              return self[TYPED_ARRAY_SUPPORT] << 8 | self[TYPED_ARRAY_SUPPORT + 1];
            }
            readUInt32LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 4;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
              }
              return (self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16) + 16777216 * self[TYPED_ARRAY_SUPPORT + 3];
            }
            readUInt32BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 4;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
              }
              return 16777216 * self[TYPED_ARRAY_SUPPORT] + (self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3]);
            }
            readIntLE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkOffset;
                tmp4 = checkOffset(tmp, tmp2, self.length);
              }
              tmp5 = self[tmp];
              num = 1;
              num2 = 256;
              tmp6 = tmp5;
              num3 = 1;
              if (1 < tmp2) {
                sum = tmp5 + self[tmp + num] * num2;
                num = num + 1;
                tmp6 = sum;
                num3 = num2;
                while (num < tmp2) {
                  num2 = num2 * 256;
                  tmp5 = sum;
                  tmp6 = sum;
                  num3 = num2;
                  if (!num2) {
                    break;
                  }
                }
              }
              diff = tmp6;
              if (tmp6 >= num3 * 128) {
                tmp9 = globalThis;
                _Math = Math;
                num4 = 2;
                num5 = 8;
                diff = tmp6 - Math.pow(2, 8 * tmp2);
              }
              return diff;
            }
            readIntBE(arg0, arg1, arg2) {
              self = this;
              tmp = TYPED_ARRAY_SUPPORT | 0;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkOffset;
                tmp4 = checkOffset(tmp, tmp2, self.length);
              }
              diff = tmp2 - 1;
              tmp6 = self[tmp + diff];
              num = 1;
              num2 = 256;
              tmp7 = tmp6;
              if (diff > 0) {
                diff = diff - 1;
                sum = tmp6 + self[tmp + diff] * num2;
                num = num2;
                tmp7 = sum;
                while (diff > 0) {
                  num2 = num2 * 256;
                  tmp6 = sum;
                  tmp7 = sum;
                  num = num2;
                  if (!num2) {
                    break;
                  }
                }
              }
              diff1 = tmp7;
              if (tmp7 >= num * 128) {
                tmp10 = globalThis;
                _Math = Math;
                num3 = 2;
                num4 = 8;
                diff1 = tmp7 - Math.pow(2, 8 * tmp2);
              }
              return diff1;
            }
            readInt8(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 1;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 1, self.length);
              }
              tmp3 = self[TYPED_ARRAY_SUPPORT];
              if (128 & self[TYPED_ARRAY_SUPPORT]) {
                num2 = 255;
                num3 = -1;
                num4 = 1;
                result = -1 * (255 - tmp3 + 1);
              } else {
                result = tmp3;
              }
              return result;
            }
            readInt16LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 2;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
              }
              tmp3 = self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8;
              tmp4 = tmp3;
              if (32768 & tmp3) {
                num2 = 4294901760;
                tmp4 = 4294901760 | tmp3;
              }
              return tmp4;
            }
            readInt16BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 2;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 2, self.length);
              }
              tmp3 = self[TYPED_ARRAY_SUPPORT + 1] | self[TYPED_ARRAY_SUPPORT] << 8;
              tmp4 = tmp3;
              if (32768 & tmp3) {
                num2 = 4294901760;
                tmp4 = 4294901760 | tmp3;
              }
              return tmp4;
            }
            readInt32LE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 4;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
              }
              return self[TYPED_ARRAY_SUPPORT] | self[TYPED_ARRAY_SUPPORT + 1] << 8 | self[TYPED_ARRAY_SUPPORT + 2] << 16 | self[TYPED_ARRAY_SUPPORT + 3] << 24;
            }
            readInt32BE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 4;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
              }
              return self[TYPED_ARRAY_SUPPORT] << 24 | self[TYPED_ARRAY_SUPPORT + 1] << 16 | self[TYPED_ARRAY_SUPPORT + 2] << 8 | self[TYPED_ARRAY_SUPPORT + 3];
            }
            readFloatLE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 4;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
              }
              return c1.read(self, TYPED_ARRAY_SUPPORT, true, 23, 4);
            }
            readFloatBE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 4;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 4, self.length);
              }
              return c1.read(self, TYPED_ARRAY_SUPPORT, false, 23, 4);
            }
            readDoubleLE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 8;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 8, self.length);
              }
              return c1.read(self, TYPED_ARRAY_SUPPORT, true, 52, 8);
            }
            readDoubleBE(arg0, arg1) {
              self = this;
              if (!arg1) {
                tmp = checkOffset;
                num = 8;
                tmp2 = checkOffset(TYPED_ARRAY_SUPPORT, 8, self.length);
              }
              return c1.read(self, TYPED_ARRAY_SUPPORT, false, 52, 8);
            }
            writeUIntLE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              tmp3 = arg2 | 0;
              if (!arg3) {
                tmp4 = checkInt;
                tmp5 = globalThis;
                _Math = Math;
                num = 2;
                num2 = 8;
                num3 = 1;
                num4 = 0;
                tmp6 = self;
                tmp7 = tmp;
                tmp8 = tmp2;
                tmp9 = tmp3;
                tmp10 = checkInt(self, tmp, tmp2, tmp3, Math.pow(2, 8 * tmp3) - 1, 0);
              }
              self[tmp2] = 255 & tmp;
              num5 = 1;
              num6 = 256;
              if (1 < tmp3) {
                self[tmp2 + num5] = tmp / num6 & 255;
                num5 = num5 + 1;
                while (num5 < tmp3) {
                  num6 = num6 * 256;
                  if (!num6) {
                    break;
                  }
                }
              }
              return tmp2 + tmp3;
            }
            writeUIntBE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              tmp3 = arg2 | 0;
              if (!arg3) {
                tmp4 = checkInt;
                tmp5 = globalThis;
                _Math = Math;
                num = 2;
                num2 = 8;
                num3 = 1;
                num4 = 0;
                tmp6 = self;
                tmp7 = tmp;
                tmp8 = tmp2;
                tmp9 = tmp3;
                tmp10 = checkInt(self, tmp, tmp2, tmp3, Math.pow(2, 8 * tmp3) - 1, 0);
              }
              diff = tmp3 - 1;
              self[tmp2 + diff] = 255 & tmp;
              diff1 = diff - 1;
              num5 = 256;
              if (diff1 >= 0) {
                self[tmp2 + diff1] = tmp / num5 & 255;
                diff1 = diff1 - 1;
                while (diff1 >= 0) {
                  num5 = num5 * 256;
                  if (!num5) {
                    break;
                  }
                }
              }
              return tmp2 + tmp3;
            }
            writeUInt8(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 1;
                num2 = 255;
                num3 = 0;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 1, 255, 0);
              }
              rounded = tmp;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                tmp9 = globalThis;
                _Math = Math;
                rounded = Math.floor(tmp);
              }
              self[tmp2] = 255 & rounded;
              return tmp2 + 1;
            }
            writeUInt16LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 2;
                num2 = 65535;
                num3 = 0;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 2, 65535, 0);
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num4 = 255;
                self[tmp2] = 255 & tmp;
                num5 = 8;
                num6 = 1;
                self[tmp2 + 1] = tmp >>> 8;
              } else {
                tmp8 = objectWriteUInt16;
                flag = true;
                tmp9 = self;
                tmp10 = tmp;
                tmp11 = tmp2;
                tmp12 = objectWriteUInt16(self, tmp, tmp2, true);
              }
              return tmp2 + 2;
            }
            writeUInt16BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 2;
                num2 = 65535;
                num3 = 0;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 2, 65535, 0);
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num4 = 8;
                self[tmp2] = tmp >>> 8;
                num5 = 255;
                num6 = 1;
                self[tmp2 + 1] = 255 & tmp;
              } else {
                tmp8 = objectWriteUInt16;
                flag = false;
                tmp9 = self;
                tmp10 = tmp;
                tmp11 = tmp2;
                tmp12 = objectWriteUInt16(self, tmp, tmp2, false);
              }
              return tmp2 + 2;
            }
            writeUInt32LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 4;
                num2 = 4294967295;
                num3 = 0;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 4, 4294967295, 0);
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num4 = 24;
                num5 = 3;
                self[tmp2 + 3] = tmp >>> 24;
                num6 = 16;
                num7 = 2;
                self[tmp2 + 2] = tmp >>> 16;
                num8 = 8;
                num9 = 1;
                self[tmp2 + 1] = tmp >>> 8;
                num10 = 255;
                self[tmp2] = 255 & tmp;
              } else {
                tmp8 = objectWriteUInt32;
                flag = true;
                tmp9 = self;
                tmp10 = tmp;
                tmp11 = tmp2;
                tmp12 = objectWriteUInt32(self, tmp, tmp2, true);
              }
              return tmp2 + 4;
            }
            writeUInt32BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 4;
                num2 = 4294967295;
                num3 = 0;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 4, 4294967295, 0);
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num4 = 24;
                self[tmp2] = tmp >>> 24;
                num5 = 16;
                num6 = 1;
                self[tmp2 + 1] = tmp >>> 16;
                num7 = 8;
                num8 = 2;
                self[tmp2 + 2] = tmp >>> 8;
                num9 = 255;
                num10 = 3;
                self[tmp2 + 3] = 255 & tmp;
              } else {
                tmp8 = objectWriteUInt32;
                flag = false;
                tmp9 = self;
                tmp10 = tmp;
                tmp11 = tmp2;
                tmp12 = objectWriteUInt32(self, tmp, tmp2, false);
              }
              return tmp2 + 4;
            }
            writeIntLE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg3) {
                tmp3 = globalThis;
                _Math = Math;
                num = 8;
                num2 = 2;
                num3 = 1;
                powResult = Math.pow(2, 8 * arg2 - 1);
                tmp5 = checkInt;
                tmp6 = self;
                tmp7 = tmp;
                tmp8 = tmp2;
                tmp9 = arg2;
                tmp10 = checkInt(self, tmp, tmp2, arg2, powResult - 1, -powResult);
              }
              self[tmp2] = 255 & tmp;
              tmp11 = tmp < 0;
              num4 = 1;
              num5 = 256;
              num6 = 0;
              if (1 < arg2) {
                while (true) {
                  tmp12 = tmp11;
                  if (tmp11) {
                    tmp12 = 0 === num6;
                  }
                  if (tmp12) {
                    tmp12 = 0 !== self[tmp2 + num4 - 1];
                  }
                  if (tmp12) {
                    num6 = 1;
                  }
                  self[tmp2 + num4] = (tmp / num5 | 0) - num6 & 255;
                  num4 = num4 + 1;
                  if (num4 >= arg2) {
                    break;
                  } else {
                    num5 = num5 * 256;
                    if (!num5) {
                      break;
                    }
                  }
                }
              }
              return tmp2 + arg2;
            }
            writeIntBE(arg0, arg1, arg2, arg3) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg3) {
                tmp3 = globalThis;
                _Math = Math;
                num = 8;
                num2 = 2;
                num3 = 1;
                powResult = Math.pow(2, 8 * arg2 - 1);
                tmp5 = checkInt;
                tmp6 = self;
                tmp7 = tmp;
                tmp8 = tmp2;
                tmp9 = arg2;
                tmp10 = checkInt(self, tmp, tmp2, arg2, powResult - 1, -powResult);
              }
              diff = arg2 - 1;
              self[tmp2 + diff] = 255 & tmp;
              diff1 = diff - 1;
              tmp13 = tmp < 0;
              num4 = 256;
              num5 = 0;
              if (diff1 >= 0) {
                while (true) {
                  tmp14 = tmp13;
                  if (tmp13) {
                    tmp14 = 0 === num5;
                  }
                  if (tmp14) {
                    tmp14 = 0 !== self[tmp2 + diff1 + 1];
                  }
                  if (tmp14) {
                    num5 = 1;
                  }
                  self[tmp2 + diff1] = (tmp / num4 | 0) - num5 & 255;
                  diff1 = diff1 - 1;
                  if (diff1 < 0) {
                    break;
                  } else {
                    num4 = num4 * 256;
                    if (!num4) {
                      break;
                    }
                  }
                }
              }
              return tmp2 + arg2;
            }
            writeInt8(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 1;
                num2 = 127;
                num3 = -128;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 1, 127, -128);
              }
              rounded = tmp;
              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                tmp9 = globalThis;
                _Math = Math;
                rounded = Math.floor(tmp);
              }
              sum = rounded;
              if (rounded < 0) {
                num4 = 255;
                num5 = 1;
                sum = 255 + rounded + 1;
              }
              self[tmp2] = 255 & sum;
              return tmp2 + 1;
            }
            writeInt16LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 2;
                num2 = 32767;
                num3 = -32768;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num4 = 255;
                self[tmp2] = 255 & tmp;
                num5 = 8;
                num6 = 1;
                self[tmp2 + 1] = tmp >>> 8;
              } else {
                tmp8 = objectWriteUInt16;
                flag = true;
                tmp9 = self;
                tmp10 = tmp;
                tmp11 = tmp2;
                tmp12 = objectWriteUInt16(self, tmp, tmp2, true);
              }
              return tmp2 + 2;
            }
            writeInt16BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 2;
                num2 = 32767;
                num3 = -32768;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num4 = 8;
                self[tmp2] = tmp >>> 8;
                num5 = 255;
                num6 = 1;
                self[tmp2 + 1] = 255 & tmp;
              } else {
                tmp8 = objectWriteUInt16;
                flag = false;
                tmp9 = self;
                tmp10 = tmp;
                tmp11 = tmp2;
                tmp12 = objectWriteUInt16(self, tmp, tmp2, false);
              }
              return tmp2 + 2;
            }
            writeInt32LE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 4;
                num2 = 2147483647;
                num3 = -2147483648;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num4 = 255;
                self[tmp2] = 255 & tmp;
                num5 = 8;
                num6 = 1;
                self[tmp2 + 1] = tmp >>> 8;
                num7 = 16;
                num8 = 2;
                self[tmp2 + 2] = tmp >>> 16;
                num9 = 24;
                num10 = 3;
                self[tmp2 + 3] = tmp >>> 24;
              } else {
                tmp8 = objectWriteUInt32;
                flag = true;
                tmp9 = self;
                tmp10 = tmp;
                tmp11 = tmp2;
                tmp12 = objectWriteUInt32(self, tmp, tmp2, true);
              }
              return tmp2 + 4;
            }
            writeInt32BE(arg0, arg1, arg2) {
              self = this;
              tmp = +TYPED_ARRAY_SUPPORT;
              tmp2 = arg1 | 0;
              if (!arg2) {
                tmp3 = checkInt;
                num = 4;
                num2 = 2147483647;
                num3 = -2147483648;
                tmp4 = self;
                tmp5 = tmp;
                tmp6 = tmp2;
                tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
              }
              sum = tmp;
              if (tmp < 0) {
                num4 = 4294967295;
                num5 = 1;
                sum = 4294967295 + tmp + 1;
              }
              if (Buffer.TYPED_ARRAY_SUPPORT) {
                num6 = 24;
                self[tmp2] = sum >>> 24;
                num7 = 16;
                num8 = 1;
                self[tmp2 + 1] = sum >>> 16;
                num9 = 8;
                num10 = 2;
                self[tmp2 + 2] = sum >>> 8;
                num11 = 255;
                num12 = 3;
                self[tmp2 + 3] = 255 & sum;
              } else {
                tmp9 = objectWriteUInt32;
                flag = false;
                tmp10 = self;
                tmp11 = sum;
                tmp12 = tmp2;
                tmp13 = objectWriteUInt32(self, sum, tmp2, false);
              }
              return tmp2 + 4;
            }
            writeFloatLE(arg0, arg1, arg2) {
              return writeFloat(this, TYPED_ARRAY_SUPPORT, arg1, true, arg2);
            }
            writeFloatBE(arg0, arg1, arg2) {
              return writeFloat(this, TYPED_ARRAY_SUPPORT, arg1, false, arg2);
            }
            writeDoubleLE(arg0, arg1, arg2) {
              return writeDouble(this, TYPED_ARRAY_SUPPORT, arg1, true, arg2);
            }
            writeDoubleBE(arg0, arg1, arg2) {
              return writeDouble(this, TYPED_ARRAY_SUPPORT, arg1, false, arg2);
            }
            copy(arg0, arg1, arg2, arg3) {
              num = arg1;
              num2 = arg2;
              length = arg3;
              self = this;
              if (!arg2) {
                num2 = 0;
              }
              tmp = length;
              if (!length) {
                num3 = 0;
                tmp = 0 === length;
              }
              if (!tmp) {
                length = self.length;
              }
              if (num >= TYPED_ARRAY_SUPPORT.length) {
                num = TYPED_ARRAY_SUPPORT.length;
              }
              if (!num) {
                num = 0;
              }
              tmp2 = length > 0 && length < num2;
              if (tmp2) {
                length = num2;
              }
              if (length === num2) {
                return 0;
              } else {
                if (0 !== TYPED_ARRAY_SUPPORT.length) {
                  if (0 !== self.length) {
                    if (num < 0) {
                      tmp18 = globalThis;
                      _RangeError3 = RangeError;
                      prototype3 = RangeError.prototype;
                      tmp19 = new.target;
                      str3 = "targetStart out of bounds";
                      tmp20 = new.target;
                      rangeError = new RangeError("targetStart out of bounds");
                      tmp22 = rangeError;
                      throw rangeError;
                    } else {
                      if (num2 >= 0) {
                        if (num2 < self.length) {
                          if (length < 0) {
                            tmp8 = globalThis;
                            _RangeError = RangeError;
                            prototype = RangeError.prototype;
                            tmp9 = new.target;
                            str = "sourceEnd out of bounds";
                            tmp10 = new.target;
                            rangeError1 = new RangeError("sourceEnd out of bounds");
                            tmp12 = rangeError1;
                            throw rangeError1;
                          } else {
                            if (length > self.length) {
                              length = self.length;
                            }
                            if (TYPED_ARRAY_SUPPORT.length - num < length - num2) {
                              length = TYPED_ARRAY_SUPPORT.length - num + num2;
                            }
                            diff = length - num2;
                            if (self === TYPED_ARRAY_SUPPORT) {
                              if (num2 < num) {
                                if (num < length) {
                                  num6 = 1;
                                  diff1 = diff - 1;
                                  if (diff1 >= 0) {
                                    do {
                                      TYPED_ARRAY_SUPPORT[diff1 + num] = self[diff1 + num2];
                                      diff1 = diff1 - 1;
                                    } while (diff1 >= 0);
                                  }
                                }
                                return diff;
                              }
                            }
                            num4 = 1000;
                            if (diff >= 1000) {
                              tmp4 = Buffer;
                              if (Buffer.TYPED_ARRAY_SUPPORT) {
                                tmp5 = globalThis;
                                _Uint8Array = Uint8Array;
                                set = Uint8Array.prototype.set;
                                callResult = set.call(TYPED_ARRAY_SUPPORT, self.subarray(num2, num2 + diff), num);
                              }
                            }
                            num5 = 0;
                            if (0 < diff) {
                              do {
                                TYPED_ARRAY_SUPPORT[num5 + num] = self[num5 + num2];
                                num5 = num5 + 1;
                              } while (num5 < diff);
                            }
                          }
                        }
                      }
                      tmp13 = globalThis;
                      _RangeError2 = RangeError;
                      prototype2 = RangeError.prototype;
                      tmp14 = new.target;
                      str2 = "sourceStart out of bounds";
                      tmp15 = new.target;
                      rangeError2 = new RangeError("sourceStart out of bounds");
                      tmp17 = rangeError2;
                      throw rangeError2;
                    }
                  }
                }
                return 0;
              }
            }
            fill(arg0, arg1, arg2, arg3) {
              tmp = arg3;
              self = this;
              tmp2 = typeof TYPED_ARRAY_SUPPORT;
              if ("string" === tmp2) {
                if ("string" === typeof arg1) {
                  length = self.length;
                  num2 = 0;
                  tmp = arg1;
                } else {
                  num2 = arg1;
                  length = arg2;
                  if ("string" === typeof arg2) {
                    length = self.length;
                    num2 = arg1;
                    tmp = arg2;
                  }
                }
                num3 = 1;
                tmp6 = TYPED_ARRAY_SUPPORT;
                if (1 === TYPED_ARRAY_SUPPORT.length) {
                  num4 = 0;
                  charCodeAtResult = TYPED_ARRAY_SUPPORT.charCodeAt(0);
                  num5 = 256;
                  tmp6 = TYPED_ARRAY_SUPPORT;
                  if (charCodeAtResult < 256) {
                    tmp6 = charCodeAtResult;
                  }
                }
                if (undefined !== tmp) {
                  if ("string" !== typeof tmp) {
                    tmp28 = globalThis;
                    _TypeError2 = TypeError;
                    prototype3 = TypeError.prototype;
                    tmp29 = new.target;
                    str5 = "encoding must be a string";
                    tmp30 = new.target;
                    typeError = new TypeError("encoding must be a string");
                    tmp32 = typeError;
                    throw typeError;
                  }
                }
                num = tmp6;
                tmp3 = num2;
                tmp4 = length;
                tmp5 = tmp;
                if ("string" === typeof tmp) {
                  tmp8 = Buffer;
                  num = tmp6;
                  tmp3 = num2;
                  tmp4 = length;
                  tmp5 = tmp;
                  if (!Buffer.isEncoding(tmp)) {
                    tmp9 = globalThis;
                    _TypeError = TypeError;
                    str2 = "Unknown encoding: ";
                    prototype = TypeError.prototype;
                    tmp10 = new.target;
                    tmp11 = new.target;
                    typeError1 = new TypeError("Unknown encoding: " + tmp);
                    tmp13 = typeError1;
                    throw typeError1;
                  }
                }
              } else {
                str = "number";
                num = TYPED_ARRAY_SUPPORT;
                tmp3 = arg1;
                tmp4 = arg2;
                tmp5 = tmp;
                if ("number" === tmp2) {
                  num7 = 255;
                  num = TYPED_ARRAY_SUPPORT & 255;
                  tmp3 = arg1;
                  tmp4 = arg2;
                  tmp5 = tmp;
                }
              }
              if (tmp3 >= 0) {
                if (self.length >= tmp3) {
                  if (self.length >= tmp4) {
                    if (tmp4 <= tmp3) {
                      return self;
                    } else {
                      sum = tmp3 >>> 0;
                      tmp14 = undefined === tmp4 ? self.length : tmp4 >>> 0;
                      if (!num) {
                        num = 0;
                      }
                      str3 = "number";
                      if ("number" === typeof num) {
                        if (sum < tmp14) {
                          do {
                            self[sum] = num;
                            sum = sum + 1;
                          } while (sum < tmp14);
                        }
                      } else {
                        tmp15 = Buffer;
                        tmp16 = num;
                        if (!Buffer.isBuffer(num)) {
                          tmp17 = utf8ToBytes;
                          tmp18 = Buffer;
                          prototype2 = Buffer.prototype;
                          tmp19 = new.target;
                          tmp20 = new.target;
                          tmp21 = num;
                          tmp22 = tmp5;
                          str4 = new Buffer(num, tmp5);
                          tmp23 = str4;
                          tmp16 = utf8ToBytes(str4.toString());
                        }
                        num6 = 0;
                        if (0 < tmp14 - sum) {
                          do {
                            self[num6 + sum] = tmp16[num6 % tmp24];
                            num6 = num6 + 1;
                            diff = tmp14 - sum;
                          } while (num6 < diff);
                        }
                      }
                      return self;
                    }
                  }
                }
              }
              rangeError = new RangeError("Out of range index");
              throw rangeError;
            }
          }
          const _Symbol = Symbol;
          let species = "undefined" !== typeof Symbol;
          if (species) {
            const _Symbol2 = Symbol;
            species = Symbol.species;
          }
          if (species) {
            const _Symbol3 = Symbol;
            species = Buffer[Symbol.species] === Buffer;
          }
          if (species) {
            const _Object = Object;
            const _Symbol4 = Symbol;
            Object.defineProperty(Buffer, Symbol.species, { value: null, configurable: true });
          }
        }
        Buffer.byteLength = byteLength;
        Buffer.prototype._isBuffer = true;
        let c3 = 4096;
        const re4 = /[^+\/0-9A-Za-z-_]/g;
      };
      fn.call(arg1, globalThis);
    },
    (arg0, arg1) => {
      function placeHoldersCount(arg0) {
        if (arg0.length % 4 > 0) {
          const _Error = Error;
          const error = new Error("Invalid string. Length must be a multiple of 4");
          throw error;
        } else {
          let num = 2;
          if ("=" !== arg0[length - 2]) {
            let num3 = 0;
            if ("=" === arg0[length - 1]) {
              num3 = 1;
            }
            num = num3;
          }
          return num;
        }
      }
      function encodeChunk(arg0, arg1, arg2) {
        let sum1 = arg1;
        const items = [];
        if (arg1 < arg2) {
          do {
            let sum = (arg0[sum1] << 16) + (arg0[sum1 + 1] << 8) + arg0[sum1 + 2];
            let tmp3 = dependencyMap;
            let tmp4 = dependencyMap;
            let tmp5 = dependencyMap;
            let tmp6 = dependencyMap;
            let arr = items.push(dependencyMap[sum >> 18 & 63] + dependencyMap[sum >> 12 & 63] + dependencyMap[sum >> 6 & 63] + dependencyMap[63 & sum]);
            sum1 = sum1 + 3;
          } while (sum1 < arg2);
        }
        return items.join("");
      }
      arg1.byteLength = function byteLength(arg0) {
        const result = 3 * arg0.length;
        return result / 4 - placeHoldersCount(arg0);
      };
      arg1.toByteArray = function toByteArray(arg0) {
        const tmp = placeHoldersCount(arg0);
        const tmp2 = new closure_2(3 * arg0.length / 4 - tmp);
        let diff = length;
        if (tmp > 0) {
          diff = length - 4;
        }
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
        if (0 < diff) {
          do {
            let tmp4 = dependencyMap2;
            let tmp6 = dependencyMap2;
            let tmp5 = dependencyMap2[arg0.charCodeAt(arg0, num)] << 18;
            let tmp8 = dependencyMap2;
            let tmp7 = dependencyMap2[arg0.charCodeAt(arg0, num + 1)] << 12;
            let tmp10 = dependencyMap2;
            let tmp9 = dependencyMap2[arg0.charCodeAt(arg0, num + 2)] << 6;
            let tmp11 = tmp5 | tmp7 | tmp9 | dependencyMap2[arg0.charCodeAt(arg0, num + 3)];
            let tmp12 = +num3;
            tmp2[tmp12] = tmp11 >> 16 & 255;
            let tmp13 = +tmp12 + 1;
            tmp2[tmp13] = tmp11 >> 8 & 255;
            let tmp14 = +tmp13 + 1;
            num3 = tmp14 + 1;
            tmp2[tmp14] = 255 & tmp11;
            num = num + 4;
            num2 = num2 + 3;
            num5 = num3;
            num4 = num;
          } while (num < diff);
        }
        if (2 === tmp) {
          tmp2[+num5] = 255 & (dependencyMap2[arg0.charCodeAt(arg0, num4)] << 2 | dependencyMap2[arg0.charCodeAt(arg0, num4 + 1)] >> 4);
          const tmp16 = dependencyMap2[arg0.charCodeAt(arg0, num4)] << 2;
        } else if (1 === tmp) {
          const tmp19 = dependencyMap2[arg0.charCodeAt(arg0, num4)] << 10;
          const tmp23 = tmp19 | dependencyMap2[arg0.charCodeAt(arg0, num4 + 1)] << 4 | dependencyMap2[arg0.charCodeAt(arg0, num4 + 2)] >> 2;
          tmp2[+num5] = tmp23 >> 8 & 255;
          tmp2[++num5 + 1] = 255 & tmp23;
          const tmp21 = dependencyMap2[arg0.charCodeAt(arg0, num4 + 1)] << 4;
        }
        return tmp2;
      };
      arg1.fromByteArray = function fromByteArray(arg0) {
        let sum;
        const result = length % 3;
        const items = [];
        const diff = length - result;
        let num = 0;
        if (0 < diff) {
          do {
            sum = num + 16383;
            let tmp5 = sum;
            let tmp3 = encodeChunk;
            if (sum > diff) {
              tmp5 = diff;
            }
            let arr = items.push(tmp3(arg0, num, tmp5));
            num = sum;
          } while (sum < diff);
        }
        if (1 === result) {
          let str = `${"" + closure_0[tmp7 >> 2] + closure_0[tmp7 << 4 & 63]}==`;
        } else {
          str = "";
          if (2 === result) {
            const sum1 = (arg0[length - 2] << 8) + arg0[length - 1];
            str = `${"" + closure_0[tmp11 >> 10] + closure_0[tmp11 >> 4 & 63] + closure_0[tmp11 << 2 & 63]}=`;
          }
        }
        items.push(str);
        return items.join("");
      };
      let closure_0 = [];
      let closure_1 = [];
      let num = globalThis;
      let closure_2 = "undefined" !== typeof Uint8Array ? num.Uint8Array : Array;
      num = 0;
    },
    (arg0, arg1) => {
      arg1.read = (arg0, arg1, arg2, closure_0) => {
        let num = 1;
        const diff = 8 * arg4 - closure_0 - 1;
        const diff1 = (1 << diff) - 1;
        let num2 = 0;
        if (arg2) {
          num2 = arg4 - num;
        }
        let num3 = num;
        if (arg2) {
          num3 = -1;
        }
        const sum = num2 + num3;
        let sum2 = tmp4 & 127;
        let sum1 = -7 + diff;
        let sum3 = sum;
        let tmp10 = sum2;
        let sum6 = sum;
        let tmp12 = sum1;
        if (sum1 > 0) {
          do {
            sum2 = 256 * sum2 + arg0[arg1 + sum3];
            sum3 = sum3 + num3;
            sum1 = sum1 - 8;
            tmp10 = sum2;
            sum6 = sum3;
            tmp12 = sum1;
          } while (sum1 > 0);
        }
        let sum4 = tmp12 + closure_0;
        let sum5 = tmp14;
        let tmp18 = tmp14;
        if (sum4 > 0) {
          do {
            sum5 = 256 * sum5 + arg0[arg1 + sum6];
            sum6 = sum6 + num3;
            sum4 = sum4 - 8;
            tmp18 = sum5;
          } while (sum4 > 0);
        }
        if (0 === tmp10 >> -tmp12) {
          let diff2 = num - tmp3;
          let sum7 = tmp18;
        } else if (tmp15 === diff1) {
          if (tmp18) {
            let _NaN = NaN;
          } else {
            let num5 = num;
            if (tmp7) {
              num5 = -1;
            }
            _NaN = Infinity * num5;
          }
          return _NaN;
        } else {
          const _Math = Math;
          sum7 = tmp18 + Math.pow(2, closure_0);
          diff2 = tmp15 - tmp3;
        }
        if (arg0[arg1 + num2] >> 7) {
          num = -1;
        }
        return num * sum7 * Math.pow(2, diff2 - closure_0);
      };
      arg1.write = (arg0, arg1, arg2, arg3, closure_0) => {
        const diff = 8 * arg5 - closure_0 - 1;
        const diff1 = (1 << diff) - 1;
        let num = 0;
        if (23 === closure_0) {
          const _Math = Math;
          const _Math2 = Math;
          num = Math.pow(2, -24) - Math.pow(2, -77);
          const powResult = Math.pow(2, -24);
        }
        let num5 = 0;
        if (!arg3) {
          num5 = arg5 - 1;
        }
        let num6 = -1;
        if (arg3) {
          num6 = 1;
        }
        if (arg1 < 0) {
          let num7 = 1;
        } else {
          num7 = 0;
          if (0 === arg1) {
            num7 = 0;
          }
        }
        const absolute = Math.abs(arg1);
        if (!isNaN(absolute)) {
          if (absolute !== Infinity) {
            const _Math7 = Math;
            const _Math8 = Math;
            const _Math9 = Math;
            const rounded = Math.floor(Math.log(absolute) / Math.LN2);
            const _Math10 = Math;
            const powResult1 = Math.pow(2, -rounded);
            let diff2 = rounded;
            let result = powResult1;
            if (absolute * powResult1 < 1) {
              diff2 = rounded - 1;
              result = powResult1 * 2;
            }
            if (diff2 + tmp3 >= 1) {
              let result1 = num / result;
            } else {
              const _Math3 = Math;
              result1 = num * Math.pow(2, 1 - tmp3);
            }
            const sum = absolute + result1;
            let sum1 = diff2;
            let result2 = result;
            if (sum * result >= 2) {
              sum1 = diff2 + 1;
              result2 = result / 2;
            }
            let num9 = 0;
            let num10 = diff1;
            if (sum1 + tmp3 < diff1) {
              if (sum1 + tmp3 >= 1) {
                const _Math6 = Math;
                const diff3 = sum * result2 - 1;
                num9 = diff3 * Math.pow(2, closure_0);
                num10 = sum1 + tmp3;
              } else {
                const _Math4 = Math;
                const _Math5 = Math;
                const result3 = sum * Math.pow(2, tmp3 - 1);
                num9 = result3 * Math.pow(2, closure_0);
                num10 = 0;
              }
            }
          }
          let result4 = num9;
          let diff4 = closure_0;
          let sum2 = num5;
          let tmp18 = num9;
          let tmp19 = num5;
          let tmp20 = closure_0;
          if (closure_0 >= 8) {
            do {
              arg0[arg2 + sum2] = 255 & result4;
              sum2 = sum2 + num6;
              result4 = result4 / 256;
              diff4 = diff4 - 8;
              tmp18 = result4;
              tmp19 = sum2;
              tmp20 = diff4;
            } while (diff4 >= 8);
          }
          let result5 = num10 << tmp20 | tmp18;
          let sum3 = diff + tmp20;
          let sum4 = tmp19;
          let tmp24 = tmp19;
          if (sum3 > 0) {
            do {
              arg0[arg2 + sum4] = 255 & result5;
              sum4 = sum4 + num6;
              result5 = result5 / 256;
              sum3 = sum3 - 8;
              tmp24 = sum4;
            } while (sum3 > 0);
          }
          const diff5 = arg2 + tmp24 - num6;
          arg0[diff5] = arg0[diff5] | 128 * num7;
        }
        let num11 = 0;
        if (isNaN(absolute)) {
          num11 = 1;
        }
        num9 = num11;
        num10 = diff1;
      };
    },
    (arg0, arg1) => {
      const toString = {}.toString;
      arg0.exports = Array.isArray || ((arg0) => "[object Array]" == toString.call(arg0));
    },
    (arg0, arg1) => {
      function defaultSetTimout() {
        const error = new Error("setTimeout has not been defined");
        throw error;
      }
      function defaultClearTimeout() {
        const error = new Error("clearTimeout has not been defined");
        throw error;
      }
      function runTimeout(cleanUpNextTick) {
        if (setTimeout === setTimeout) {
          const _setTimeout4 = setTimeout;
          return setTimeout(cleanUpNextTick, 0);
        } else {
          if (setTimeout === defaultSetTimout) {
            const _setTimeout = setTimeout;
            if (setTimeout) {
              const _setTimeout2 = setTimeout;
              const _setTimeout3 = setTimeout;
              return setTimeout(cleanUpNextTick, 0);
            }
          }
          return setTimeout(cleanUpNextTick, 0);
        }
      }
      function cleanUpNextTick() {
        let tmp = c4;
        if (c4) {
          tmp = closure_2;
        }
        if (tmp) {
          c4 = false;
          if (closure_2.length) {
            arr = closure_2.concat(arr);
          } else {
            let c5 = -1;
          }
          if (arr.length) {
            drainQueue();
          }
        }
      }
      function drainQueue() {
        let arr;
        if (!c4) {
          const tmp3 = runTimeout(cleanUpNextTick);
          c4 = true;
          let length = arr.length;
          while (length) {
            let tmp5 = arr;
            let c2 = arr;
            arr = [];
            let tmp6 = c5;
            let sum = c5 + 1;
            c5 = sum;
            if (sum < length) {
              do {
                let tmp8 = c2;
                if (c2) {
                  let tmp9 = c2;
                  let tmp10 = c5;
                  let obj = c2[c5];
                  let runResult = obj.run();
                }
                let tmp12 = c5;
                sum1 = c5 + 1;
                c5 = sum1;
              } while (sum1 < length);
            }
            c5 = -1;
            let tmp14 = arr;
            length = arr.length;
          }
          c2 = null;
          c4 = false;
          const _clearTimeout = clearTimeout;
          if (clearTimeout === clearTimeout) {
            const _clearTimeout5 = clearTimeout;
            clearTimeout(tmp3);
          } else {
            if (clearTimeout === defaultClearTimeout) {
              const _clearTimeout2 = clearTimeout;
              if (clearTimeout) {
                const _clearTimeout3 = clearTimeout;
                const _clearTimeout4 = clearTimeout;
                clearTimeout(tmp16);
              }
            }
            clearTimeout(tmp16);
          }
        }
      }
      class Item {
        constructor(arg0, arg1) {
          this.fun = arg0;
          this.array = arg1;
          return;
        }
      }
      function noop() {

      }
      let obj = {};
      arg0.exports = obj;
      let closure_0 = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      while (true) {
        let tmp = globalThis;
        let _clearTimeout = clearTimeout;
        let str = "function";
        let closure_1 = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
        let closure_3 = [];
        let flag = false;
        let c4 = false;
        let num = -1;
        let c5 = -1;
        class Item {
          constructor(arg0, arg1) {
            this.fun = arg0;
            this.array = arg1;
            return;
          }
          run() {
            fun = this.fun;
            applyResult = fun.apply(null, this.array);
            return;
          }
        }
        let str2 = "browser";
        obj.title = "browser";
        let flag2 = true;
        obj.browser = true;
        obj.env = {};
        obj.argv = [];
        let str3 = "";
        obj.version = "";
        obj.versions = {};
        obj.on = noop;
        obj.addListener = noop;
        obj.once = noop;
        obj.off = noop;
        obj.removeListener = noop;
        obj.removeAllListeners = noop;
        obj.emit = noop;
        obj.binding = (arg0) => {
          const error = new Error("process.binding is not supported");
          throw error;
        };
        obj.cwd = () => "/";
        obj.chdir = (arg0) => {
          const error = new Error("process.chdir is not supported");
          throw error;
        };
        obj.umask = () => 0;
      }
    },
    (arg0, arg1) => {

    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      const fn = (arg0) => {
        let closure_0 = arg0;
        function normalizeArray(arr) {
          let tmp10;
          let diff = arr.length - 1;
          let num = 0;
          let num2 = 0;
          if (diff >= 0) {
            do {
              let tmp2 = arr[diff];
              if ("." === tmp2) {
                let spliceResult = arr.splice(diff, 1);
                let sum = num;
              } else if (".." === tmp2) {
                let spliceResult1 = arr.splice(diff, 1);
                sum = num + 1;
              } else {
                sum = num;
                if (num) {
                  let spliceResult2 = arr.splice(diff, 1);
                  sum = num - 1;
                }
              }
              diff = diff - 1;
              num = sum;
              num2 = sum;
            } while (diff >= 0);
          }
          if (arg1) {
            let diff1 = tmp7 - 1;
            if (+num2) {
              do {
                arr = arr.unshift("..");
                tmp10 = +diff1;
                diff1 = tmp10 - 1;
              } while (tmp10);
            }
          }
          return arr;
        }
        function filter(arr) {
          if (arr.filter) {
            return arr.filter(arg1);
          } else {
            const items = [];
            for (let num = 0; num < arr.length; num = num + 1) {
              let tmp = num;
              if (arg1(arr[num], num, arr)) {
                arr = items.push(arr[num]);
              }
            }
            return items;
          }
        }
        const re1 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        function splitPath(arg0) {
          const match = regex.exec(arg0);
          return match.slice(1);
        }
        closure_0.resolve = () => {
          let diff = arguments.length - 1;
          let str = "";
          let flag = false;
          let str2 = "";
          let str3 = "";
          let flag2 = false;
          if (diff >= -1) {
            while (true) {
              if (diff >= 0) {
                let str4 = arguments[diff];
              } else {
                let tmp2 = closure_0;
                str4 = closure_0.cwd();
              }
              if ("string" !== typeof str4) {
                break;
              } else {
                let text = str2;
                if (str4) {
                  text = `${str4}/${str2}`;
                  flag = "/" === str4.charAt(0);
                }
                diff = diff - 1;
                let tmp4 = flag;
                str3 = text;
                flag2 = flag;
                if (diff >= -1) {
                  str2 = text;
                  str3 = text;
                  flag2 = flag;
                }
              }
            }
            const _TypeError = TypeError;
            const typeError = new TypeError("Arguments to path.resolve must be strings");
            throw typeError;
          }
          if (flag2) {
            str = "/";
          }
          const obj = filter(str3.split("/"), (arg0) => arg0);
          normalizeArray(obj, !flag2);
          return str + obj.join("/") || ".";
        };
        closure_0.normalize = (str) => {
          const isAbsoluteResult = closure_0.isAbsolute(str);
          const obj = filter(str.split("/"), (arg0) => arg0);
          normalizeArray(obj, !isAbsoluteResult);
          str = obj.join("/");
          let tmp4 = str;
          if (!str) {
            tmp4 = isAbsoluteResult;
          }
          if (!tmp4) {
            str = ".";
          }
          let tmp5 = str;
          if (str) {
            tmp5 = tmp2;
          }
          let text = str;
          if (tmp5) {
            text = `${str}/`;
          }
          let str2 = "";
          if (isAbsoluteResult) {
            str2 = "/";
          }
          return str2 + text;
        };
        closure_0.isAbsolute = (str) => "/" === str.charAt(0);
        closure_0.join = () => {
          return closure_0.normalize(filter(slice.call(arguments, 0), (arg0, arg1) => {
            if ("string" !== typeof arg0) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Arguments to path.join must be strings");
              throw typeError;
            } else {
              return arg0;
            }
          }).join("/"));
        };
        closure_0.relative = (arg0, arg1) => {
          let length;
          function trim(arr) {
            let num = 0;
            if (0 < arr.length) {
              let num2 = 0;
              num = 0;
              if ("" === arr[0]) {
                const sum = num2 + 1;
                num = sum;
                while (sum < arr.length) {
                  num2 = sum;
                  num = sum;
                  if ("" !== arr[sum]) {
                    break;
                  }
                }
              }
            }
            const diff = arr.length - 1;
            let tmp3 = diff;
            if (diff >= 0) {
              let tmp4 = diff;
              tmp3 = diff;
              if ("" === arr[diff]) {
                const diff1 = tmp4 - 1;
                tmp3 = diff1;
                while (diff1 >= 0) {
                  tmp4 = diff1;
                  tmp3 = diff1;
                  if ("" !== arr[diff1]) {
                    break;
                  }
                }
              }
            }
            if (num > tmp3) {
              let items = [];
            } else {
              items = arr.slice(num, tmp3 - num + 1);
            }
            return items;
          }
          const str = closure_0.resolve(arg0);
          const str2 = closure_0.resolve(arg0).substr(1);
          const str3 = closure_0.resolve(arg1);
          const trimmed = trim(str2.split("/"));
          const trimmed1 = trim(closure_0.resolve(arg1).substr(1).split("/"));
          const bound = Math.min(trimmed.length, trimmed1.length);
          let num = 0;
          let tmp2 = bound;
          if (0 < bound) {
            tmp2 = num;
            while (trimmed[num] === trimmed1[num]) {
              num = num + 1;
              tmp2 = bound;
              if (num >= bound) {
                break;
              }
            }
          }
          let items = [];
          let sum = tmp2;
          if (tmp2 < trimmed.length) {
            do {
              let arr = items.push("..");
              sum = sum + 1;
              length = trimmed.length;
            } while (sum < length);
          }
          const combined = items.concat(trimmed1.slice(tmp2));
          return combined.join("/");
        };
        closure_0.sep = "/";
        closure_0.delimiter = ":";
        closure_0.dirname = (arg0) => {
          const tmp = splitPath(arg0);
          const first = tmp[0];
          if (first) {
            let substr = str;
            if (str) {
              substr = str.substr(0, str.length - 1);
            }
            let str2 = first + substr;
          } else {
            str2 = ".";
          }
          return str2;
        };
        closure_0.basename = (arg0, arg1) => {
          const str = splitPath(arg0)[2];
          let tmp = arg1;
          if (arg1) {
            tmp = str.substr(-1 * arg1.length) === arg1;
          }
          let substr = str;
          if (tmp) {
            substr = str.substr(0, str.length - arg1.length);
          }
          return substr;
        };
        closure_0.extname = (arg0) => splitPath(arg0)[3];
        let closure_3 = "b" === "ab".substr(-1) ? ((str) => str.substr(arg1, arg2)) : ((str) => {
          let sum = arg1;
          if (arg1 < 0) {
            sum = str.length + arg1;
          }
          return str.substr(sum, arg2);
        });
      };
      fn.call(arg1, arg2(7));
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      let closure_1 = arg2;
      const fn = (arg0, arg1) => {
        let closure_0 = arg0;
        const callback = arg1;
        function inspect(arg0, showHidden) {
          const obj = { seen: [], stylize: stylizeNoColor };
          if (arguments.length >= 3) {
            obj.depth = arguments[2];
          }
          if (arguments.length >= 4) {
            obj.colors = arguments[3];
          }
          if (isBoolean(showHidden)) {
            obj.showHidden = showHidden;
          } else if (showHidden) {
            closure_0._extend(obj, showHidden);
          }
          if (isUndefined(obj.showHidden)) {
            obj.showHidden = false;
          }
          if (isUndefined(obj.depth)) {
            obj.depth = 2;
          }
          if (isUndefined(obj.colors)) {
            obj.colors = false;
          }
          if (isUndefined(obj.customInspect)) {
            obj.customInspect = true;
          }
          if (obj.colors) {
            obj.stylize = stylizeWithColor;
          }
          return formatValue(obj, arg0, obj.depth);
        }
        function stylizeWithColor(arg0, arg1) {
          let text = arg0;
          if (inspect.styles[arg1]) {
            text = `${"\u001B[" + inspect.colors[tmp][0] + "m" + arg0 + "\u001B[" + inspect.colors[tmp][1]}m`;
          }
          return text;
        }
        function stylizeNoColor(arg0, arg1) {
          return arg0;
        }
        function formatValue(customInspect, inspect) {
          let closure_0 = customInspect;
          let closure_1 = inspect;
          let closure_2 = arg2;
          if (customInspect.customInspect) {
            if (inspect) {
              if (isFunction(inspect.inspect)) {
                if (inspect.inspect !== closure_0.inspect) {
                  const inspectResult = inspect.inspect(arg2, customInspect);
                  let tmp39 = inspectResult;
                  if (!isString(inspectResult)) {
                    tmp39 = formatValue(customInspect, inspectResult, arg2);
                  }
                  return tmp39;
                }
              }
            }
          }
          if (isUndefined(inspect)) {
            let stylizeResult = customInspect.stylize("undefined", "undefined");
          } else if (isString(inspect)) {
            const _JSON = JSON;
            const str4 = JSON.stringify(inspect);
            const str6 = JSON.stringify(inspect).replace(/^"|"$/g, "");
            stylizeResult = customInspect.stylize(`'${JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"")}'`, "string");
            const str8 = JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'");
          } else if (isNumber(inspect)) {
            stylizeResult = customInspect.stylize("" + inspect, "number");
          } else if (isBoolean(inspect)) {
            stylizeResult = customInspect.stylize("" + inspect, "boolean");
          } else if (isNull(inspect)) {
            stylizeResult = customInspect.stylize("null", "null");
          }
          if (stylizeResult) {
            return stylizeResult;
          } else {
            const _Object = Object;
            const keys = Object.keys(inspect);
            const tmp11 = (function arrayToHash(keys) {
              const obj = {};
              const item = keys.forEach(() => { ... });
              return obj;
            })(keys);
            let closure_3 = tmp11;
            let ownPropertyNames = keys;
            if (customInspect.showHidden) {
              const _Object2 = Object;
              ownPropertyNames = Object.getOwnPropertyNames(inspect);
            }
            if (isError(inspect)) {
              return formatError(inspect);
            }
            if (0 === ownPropertyNames.length) {
              if (isFunction(inspect)) {
                let str27 = "";
                if (inspect.name) {
                  str27 = `: ${inspect.name}`;
                }
                return customInspect.stylize("[Function" + str27 + "]", "special");
              } else if (isRegExp(inspect)) {
                const _RegExp3 = RegExp;
                return customInspect.stylize(toString4.call(inspect), "regexp");
              } else if (isDate(inspect)) {
                const _Date2 = Date;
                return customInspect.stylize(toString3.call(inspect), "date");
              } else if (isError(inspect)) {
                return formatError(inspect);
              }
            }
            let flag = false;
            let c4 = false;
            let items = ["{", "}"];
            if (isArray(inspect)) {
              c4 = true;
              items = ["[", "]"];
              flag = true;
            }
            let str14 = "";
            let str15 = "";
            if (isFunction(inspect)) {
              if (inspect.name) {
                str14 = `: ${inspect.name}`;
              }
              str15 = `${" [Function" + str14}]`;
            }
            if (isRegExp(inspect)) {
              const _RegExp = RegExp;
              str15 = ` ${toString.call(inspect)}`;
            }
            if (isDate(inspect)) {
              const _Date = Date;
              str15 = ` ${toUTCString.call(inspect)}`;
            }
            if (isError(inspect)) {
              str15 = ` ${formatError(inspect)}`;
            }
            if (0 === ownPropertyNames.length) {
              return items[0] + str15 + items[1];
            }
            if (arg2 >= 0) {
              const seen = customInspect.seen;
              seen.push(inspect);
              if (flag) {
                let mapped = (function formatArray(customInspect, inspect, arg2, arg3, ownPropertyNames) {
                  let closure_0 = customInspect;
                  let closure_1 = inspect;
                  let closure_2 = arg2;
                  let closure_3 = arg3;
                  const items = [];
                  for (let num = 0; num < length; num = num + 1) {
                    let tmp = outer1_25;
                    let _String = String;
                    let push = items.push;
                    let tmp2 = num;
                    if (outer1_25(inspect, String(num))) {
                      let tmp4 = outer1_11;
                      let _String2 = String;
                      let tmp5 = customInspect;
                      let tmp6 = inspect;
                      let tmp7 = arg2;
                      let tmp8 = arg3;
                      let flag = true;
                      let arr = push(outer1_11(customInspect, inspect, arg2, arg3, String(num), true));
                    } else {
                      arr = push("");
                    }
                  }
                  const item = ownPropertyNames.forEach(() => { ... });
                  return items;
                })(customInspect, inspect, arg2, tmp11, ownPropertyNames);
              } else {
                mapped = ownPropertyNames.map((arg0) => outer1_11(closure_0, closure_1, closure_2, closure_3, arg0, c4));
              }
              const seen1 = customInspect.seen;
              seen1.pop();
              (function reduceToSingleString(mapped, arg1, items) {
                if (mapped.reduce(() => { ... }, 0) > 60) {
                  let str3 = "";
                  if ("" !== arg1) {
                    str3 = `${arg1}
                 `;
                  }
                  const sum = items[0] + str3;
                  return sum + " " + mapped.join(",\n  ") + " " + items[1];
                } else {
                  const sum1 = items[0] + arg1;
                  return sum1 + " " + mapped.join(", ") + " " + items[1];
                }
              })(mapped, str15, items);
            }
            const stylize = customInspect.stylize;
            if (isRegExp(inspect)) {
              const _RegExp2 = RegExp;
              let stylizeResult1 = stylize(toString2.call(inspect), "regexp");
            } else {
              stylizeResult1 = stylize("[Object]", "special");
            }
          }
        }
        function formatError(arg0) {
          return "[" + toString.call(arg0) + "]";
        }
        function formatProperty(stylize, arg1, arg2, arg3, str) {
          let num = arg2;
          let iter = Object.getOwnPropertyDescriptor(arg1, str);
          if (!iter) {
            const obj = { value: arg1[str] };
            iter = obj;
          }
          if (iter.get) {
            stylize = stylize.stylize;
            if (set) {
              let stylizeResult = stylize("[Getter/Setter]", "special");
            } else {
              stylizeResult = stylize("[Getter]", "special");
            }
          } else {
            let stylizeResult1;
            if (set) {
              stylizeResult1 = stylize.stylize("[Setter]", "special");
            }
            if (!hasOwnProperty(arg3, str)) {
              let text = `${"[" + str}]`;
            }
            if (stylizeResult1) {
              if (isUndefined(text)) {
                if (arg5) {
                  if (str.match(/^\d+$/)) {
                    return stylizeResult1;
                  }
                }
                const _JSON = JSON;
                const str12 = JSON.stringify("" + str);
                if (str12.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                  text = stylize.stylize(str12.substr(1, str12.length - 2), "name");
                } else {
                  const str14 = str12.replace(/'/g, "\\'");
                  text = stylize.stylize(str12.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'"), "string");
                  const str16 = str12.replace(/'/g, "\\'").replace(/\\"/g, "\"");
                }
              }
              return text + ": " + stylizeResult1;
            } else {
              const seen = stylize.seen;
              if (seen.indexOf(iter.value) < 0) {
                const value = iter.value;
                if (isNull(num)) {
                  let tmp9Result = tmp9(stylize, value, null);
                } else {
                  tmp9Result = tmp9(stylize, value, num - 1);
                }
                let str11 = "\n";
                num = -1;
                iter = tmp9Result;
                if (tmp9Result.indexOf("\n") <= -1) {
                  let stylizeResult2 = iter;
                } else {
                  const parts = iter.split(`
          `);
                  let substr = parts.map;
                  if (arg5) {
                    substr = substr((arg0) => "  " + arg0);
                    str11 = substr.join(`
          `);
                    substr = str11.substr;
                    let substr1 = substr(2);
                  } else {
                    const substr2 = substr((arg0) => "   " + arg0);
                    substr1 = str11 + substr2.join(str11);
                  }
                }
              } else {
                stylizeResult2 = stylize.stylize("[Circular]", "special");
              }
            }
          }
        }
        function isArray(arg0) {
          return Array.isArray(arg0);
        }
        function isBoolean(arg0) {
          return "boolean" === typeof arg0;
        }
        function isNull(arg0) {
          return null === arg0;
        }
        function isNumber(arg0) {
          return "number" === typeof arg0;
        }
        function isString(arg0) {
          return "string" === typeof arg0;
        }
        function isUndefined(arg0) {
          return undefined === arg0;
        }
        function isRegExp(arg0) {
          let tmp = isObject(arg0);
          if (tmp) {
            tmp = "[object RegExp]" === objectToString(arg0);
          }
          return tmp;
        }
        function isObject(arg0) {
          let tmp = "object" === typeof arg0;
          if (tmp) {
            tmp = null !== arg0;
          }
          return tmp;
        }
        function isDate(arg0) {
          let tmp = isObject(arg0);
          if (tmp) {
            tmp = "[object Date]" === objectToString(arg0);
          }
          return tmp;
        }
        function isError(arg0) {
          let tmp = isObject(arg0);
          if (tmp) {
            let tmp3 = "[object Error]" === objectToString(arg0);
            if (!tmp3) {
              const _Error = Error;
              tmp3 = arg0 instanceof Error;
            }
            tmp = tmp3;
          }
          return tmp;
        }
        function isFunction(arg0) {
          return "function" === typeof arg0;
        }
        function objectToString(arg0) {
          return toString.call(arg0);
        }
        function pad(arg0) {
          if (arg0 < 10) {
            let text = `0${arg0.toString(10)}`;
          } else {
            text = arg0.toString(10);
          }
          return text;
        }
        function hasOwnProperty(arg0, arg1) {
          return hasOwnProperty.call(arg0, arg1);
        }
        const re2 = /%[sdj%]/g;
        closure_0.format = (arg0) => {
          let length;
          let sum1;
          if (isString(arg0)) {
            let c0 = 1;
            let closure_1 = arguments;
            const length2 = arguments.length;
            let _String = String;
            let replaced = String(arg0).replace(length2, (arg0) => {
              if ("%%" === arg0) {
                return "%";
              } else if (closure_0 >= length2) {
                return arg0;
              } else if ("%s" === arg0) {
                const _String = String;
                closure_0 = tmp12 + 1;
                return String(dependencyMap[+closure_0]);
              } else if ("%d" === arg0) {
                const _Number = Number;
                closure_0 = tmp8 + 1;
                return Number(dependencyMap[+closure_0]);
              } else if ("%j" === arg0) {
                const _JSON = JSON;
                closure_0 = tmp4 + 1;
                return JSON.stringify(dependencyMap[+closure_0]);
              } else {
                return arg0;
              }
            });
            let tmp12 = arguments[c0];
            let tmp14 = replaced;
            if (c0 < length2) {
              while (true) {
                let tmp15 = isNull;
                let tmp16 = tmp12;
                if (!isNull(tmp12)) {
                  let tmp17 = isObject;
                  if (isObject(tmp12)) {
                    let tmp18 = inspect;
                    let text = `${tmp10} ${inspect(tmp12)}`;
                  }
                  let tmp20 = c0;
                  let sum = c0 + 1;
                  c0 = sum;
                  tmp12 = arguments[sum];
                  let tmp22 = c0;
                  replaced = text;
                  tmp14 = text;
                  if (c0 >= length2) {
                    break;
                  }
                }
                text = `${tmp10} ${tmp12}`;
              }
            }
            return tmp14;
          } else {
            const items = [];
            c0 = 0;
            if (0 < arguments.length) {
              do {
                let tmp = inspect;
                let tmp2 = c0;
                let arr = items.push(inspect(arguments[c0]));
                let tmp4 = c0;
                sum1 = c0 + 1;
                c0 = sum1;
                length = arguments.length;
              } while (sum1 < length);
            }
            return items.join(" ");
          }
        };
        closure_0.deprecate = (arg0, arg1) => {
          let closure_0 = arg0;
          const noDeprecation = arg1;
          if (isUndefined(closure_0.process)) {
            return function() {
              return lib.deprecate(lib, closure_1)(...arguments);
            };
          } else if (true === noDeprecation.noDeprecation) {
            return arg0;
          } else {
            let c2 = false;
            return function deprecated() {
              if (!c2) {
                if (closure_1.throwDeprecation) {
                  const _Error = Error;
                  const error = new Error(closure_1);
                  throw error;
                } else {
                  const _console = console;
                  if (closure_1.traceDeprecation) {
                    _console.trace(closure_1);
                  } else {
                    _console.error(closure_1);
                  }
                  c2 = true;
                }
              }
              return lib(...arguments);
            };
          }
        };
        let closure_4 = {};
        closure_0.debuglog = (str) => {
          let formatted = str;
          if (isUndefined(closure_3)) {
            closure_3 = pid.env.NODE_DEBUG || "";
          }
          formatted = str.toUpperCase();
          if (!dependencyMap[formatted]) {
            const _RegExp = RegExp;
            const regExp = new RegExp("\\b" + formatted + "\\b", "i");
            if (regExp.test(closure_3)) {
              pid = pid.pid;
              dependencyMap[formatted] = () => {
                format = format.format;
                console.error("%s %d: %s", formatted, pid, format(...arguments));
              };
            } else {
              dependencyMap[formatted] = () => {

              };
            }
          }
          return dependencyMap[formatted];
        };
        closure_0.inspect = inspect;
        inspect.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
        inspect.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
        closure_0.isArray = isArray;
        closure_0.isBoolean = isBoolean;
        closure_0.isNull = isNull;
        closure_0.isNullOrUndefined = function isNullOrUndefined(arg0) {
          return null == arg0;
        };
        closure_0.isNumber = isNumber;
        closure_0.isString = isString;
        closure_0.isSymbol = function isSymbol(arg0) {
          return "symbol" === typeof arg0;
        };
        closure_0.isUndefined = isUndefined;
        closure_0.isRegExp = isRegExp;
        closure_0.isObject = isObject;
        closure_0.isDate = isDate;
        closure_0.isError = isError;
        closure_0.isFunction = isFunction;
        closure_0.isPrimitive = function isPrimitive(arg0) {
          let tmp = null === arg0;
          if (!tmp) {
            tmp = "boolean" === typeof arg0;
          }
          if (!tmp) {
            tmp = "number" === typeof arg0;
          }
          if (!tmp) {
            tmp = "string" === typeof arg0;
          }
          if (!tmp) {
            tmp = "symbol" === typeof arg0;
          }
          if (!tmp) {
            tmp = undefined === arg0;
          }
          return tmp;
        };
        closure_0.isBuffer = callback(11);
        let closure_5 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        closure_0.log = () => {
          const date = new Date();
          const items = [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())];
          const joined = items.join(":");
          const items1 = [date.getDate(), table[date.getMonth(date)], joined];
          const format = closure_0.format;
          const joined1 = items1.join(" ");
          console.log("%s - %s", joined1, format(...arguments));
        };
        closure_0.inherits = callback(12);
        closure_0._extend = (arg0, arg1) => {
          let tmp5;
          if (arg1) {
            if (isObject(arg1)) {
              const _Object = Object;
              const keys = Object.keys(arg1);
              let diff = tmp3 - 1;
              if (+keys.length) {
                do {
                  arg0[keys[diff]] = arg1[keys[diff]];
                  tmp5 = +diff;
                  diff = tmp5 - 1;
                } while (tmp5);
              }
              return arg0;
            }
          }
          return arg0;
        };
      };
      fn.call(arg1, globalThis, arg2(7));
    },
    (arg0, arg1) => {
      arg0.exports = function isBuffer(copy) {
        let tmp = copy;
        if (copy) {
          tmp = "object" === typeof copy;
        }
        if (tmp) {
          tmp = "function" === typeof copy.copy;
        }
        if (tmp) {
          tmp = "function" === typeof copy.fill;
        }
        if (tmp) {
          tmp = "function" === typeof copy.readUInt8;
        }
        return tmp;
      };
    },
    (arg0, arg1) => {
      if ("function" === typeof Object.create) {
        arg0.exports = function inherits(value, super_) {
          value.super_ = super_;
          const obj = { value, enumerable: false, writable: true, configurable: true };
          value.prototype = Object.create(super_.prototype, { constructor: obj });
        };
      } else {
        arg0.exports = function inherits(arg0, super_) {
          arg0.super_ = super_;
          class TempCtor {
            constructor() {
              return;
            }
          }
          TempCtor.prototype = super_.prototype;
          const tempCtor = new TempCtor();
          arg0.prototype = tempCtor;
          arg0.prototype.constructor = arg0;
        };
      }
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      const fn = (arg0) => {
        let closure_0 = arg0;
        let obj = {};
        closure_0.escapeJavaScript = (str) => {
          if (str) {
            let num = 0;
            let str2 = "";
            if (0 < str.length) {
              do {
                let charCodeAtResult = str.charCodeAt(num);
                let tmp2 = obj;
                let tmp3 = num;
                if (obj.isSafe(charCodeAtResult)) {
                  let text = `${str[num]}`;
                } else {
                  let tmp4 = obj;
                  text = `${obj.escapeJavaScriptChar(tmp)}`;
                }
                num = num + 1;
                str = text;
                str2 = text;
              } while (num < str.length);
            }
            return str2;
          } else {
            return "";
          }
        };
        closure_0.escapeHtml = (str) => {
          if (str) {
            let num = 0;
            let str2 = "";
            if (0 < str.length) {
              do {
                let charCodeAtResult = str.charCodeAt(num);
                let tmp2 = obj;
                let tmp3 = num;
                if (obj.isSafe(charCodeAtResult)) {
                  let text = `${str[num]}`;
                } else {
                  let tmp4 = obj;
                  text = `${obj.escapeHtmlChar(tmp)}`;
                }
                num = num + 1;
                str = text;
                str2 = text;
              } while (num < str.length);
            }
            return str2;
          } else {
            return "";
          }
        };
        obj.escapeJavaScriptChar = (arg0) => {
          if (arg0 >= 256) {
            return "\\u" + obj.padLeft("" + arg0, 4);
          } else {
            const _String = String;
            const prototype = ctor.prototype;
            const str2 = new ctor(String.fromCharCode(arg0), "ascii");
            return "\\x" + obj.padLeft(str2.toString("hex"), 2);
          }
        };
        obj.escapeHtmlChar = (arg0) => {
          if (undefined !== obj.namedHtml[arg0]) {
            return tmp;
          } else if (arg0 >= 256) {
            return "&#" + arg0 + ";";
          } else {
            const _String = String;
            const prototype = ctor.prototype;
            const str2 = new ctor(String.fromCharCode(arg0), "ascii");
            return "&#x" + obj.padLeft(str2.toString("hex"), 2) + ";";
          }
        };
        obj.padLeft = (arg0, arg1) => {
          let length;
          let tmp = arg0;
          let tmp2 = arg0;
          if (arg0.length < arg1) {
            do {
              let text = `0${tmp}`;
              tmp = text;
              tmp2 = text;
              length = `0${tmp}`.length;
            } while (length < arg1);
          }
          return tmp2;
        };
        obj.isSafe = (arg0) => undefined !== obj.safeCharCodes[arg0];
        obj.namedHtml = { 38: "&amp;", 60: "&lt;", 62: "&gt;", 34: "&quot;", 160: "&nbsp;", 162: "&cent;", 163: "&pound;", 164: "&curren;", 169: "&copy;", 174: "&reg;" };
        obj = {};
        let num = 32;
        do {
          let tmp = num >= 97;
          if (!tmp) {
            let tmp2 = num >= 65 && num <= 90;
            tmp = tmp2;
          }
          if (!tmp) {
            let tmp3 = num >= 48 && num <= 57;
            tmp = tmp3;
          }
          if (!tmp) {
            tmp = 32 === num;
          }
          if (!tmp) {
            tmp = 46 === num;
          }
          if (!tmp) {
            tmp = 44 === num;
          }
          if (!tmp) {
            tmp = 45 === num;
          }
          if (!tmp) {
            tmp = 58 === num;
          }
          if (!tmp) {
            tmp = 95 === num;
          }
          if (tmp) {
            obj[num] = null;
          }
          num = num + 1;
        } while (num < 123);
        obj.safeCharCodes = obj;
      };
      fn.call(arg1, arg2(3).Buffer);
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg2;
      let closure_1 = Object.assign || ((arg0) => {
        for (let num = 1; num < arguments.length; num = num + 1) {
          let tmp3 = arguments[num];
          let tmp4 = tmp3;
          let tmp5 = tmp2;
          let keys = Object.keys();
          if (keys !== undefined) {
            tmp2 = tmp5;
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
                continue;
              }
              continue;
            }
          }
        }
        return arg0;
      });
      if ("function" === typeof Symbol) {
        let _Symbol = Symbol;
        if ("symbol" === typeof Symbol.iterator) {
          let fn = (arg0) => typeof arg0;
        }
        let closure_3 = arg2(2);
        let closure_4 = arg2(15);
        let closure_5 = arg2(16);
        let c6 = null;
        let c7 = null;
        let obj = { Set: arg2(18) };
        obj = { abortEarly: true, convert: true, allowUnknown: false, skipFunctions: false, stripUnknown: false, language: {}, presence: "optional", strip: false, noDefaults: false };
        obj.defaults = obj;
        let tmp2 = (() => {
          class _class {
            constructor() {
              self = this;
              if (this instanceof _class) {
                tmp6 = outer1_7;
                if (!outer1_7) {
                  tmp7 = _class;
                  num = 19;
                  tmp6 = _class(19);
                }
                outer1_7 = tmp6;
                flag = true;
                self.isJoi = true;
                str2 = "any";
                self._type = "any";
                tmp8 = null;
                self._settings = null;
                tmp9 = outer1_8;
                _Set = outer1_8.Set;
                prototype2 = _Set.prototype;
                tmp10 = new.target;
                tmp11 = new.target;
                _Set = new _Set();
                tmp13 = _Set;
                self._valids = _Set;
                tmp14 = outer1_8;
                _Set2 = outer1_8.Set;
                prototype3 = _Set2.prototype;
                tmp15 = new.target;
                tmp16 = new.target;
                _Set2 = new _Set2();
                tmp18 = _Set2;
                self._invalids = _Set2;
                self._tests = [];
                self._refs = [];
                self._flags = {};
                self._description = null;
                self._unit = null;
                self._notes = [];
                self._tags = [];
                self._examples = [];
                self._meta = [];
                self._inner = {};
                return;
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp2 = new.target;
                str = "Cannot call a class as a function";
                tmp3 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp5 = typeError;
                throw typeError;
              }
            }
            createError(arg0, arg1, arg2, arg3) {
              return outer1_5.create(arg0, arg1, arg2, arg3, this._flags);
            }
            checkOptions(arg0) {
              options = _class(31).options;
              validateResult = options.validate(arg0);
              if (validateResult.error) {
                tmp2 = globalThis;
                _Error = Error;
                num = 0;
                prototype = Error.prototype;
                tmp3 = new.target;
                tmp4 = new.target;
                error = new Error(validateResult.error.details[0].message);
                tmp6 = error;
                throw error;
              } else {
                return;
              }
            }
            clone() {
              self = this;
              obj = Object.create(Object.getPrototypeOf(this));
              obj.isJoi = true;
              obj._type = this._type;
              obj._settings = outer1_8.concatSettings(this._settings);
              obj._valids = outer1_3.clone(this._valids);
              obj._invalids = outer1_3.clone(this._invalids);
              _tests = this._tests;
              obj._tests = _tests.slice();
              _refs = this._refs;
              obj._refs = _refs.slice();
              obj._flags = outer1_3.clone(this._flags);
              ({ _description: tmp._description, _unit: tmp._unit, _notes } = this);
              obj._notes = _notes.slice();
              _tags = this._tags;
              obj._tags = _tags.slice();
              _examples = this._examples;
              obj._examples = _examples.slice();
              _meta = this._meta;
              obj._meta = _meta.slice();
              obj._inner = {};
              keys = Object.keys(this._inner);
              for (let num = 0; num < keys.length; num = num + 1) {
                tmp2 = keys[num];
                substr = null;
                if (self._inner[tmp2]) {
                  arr7 = self._inner[tmp2];
                  substr = arr7.slice();
                }
                obj._inner[tmp2] = substr;
              }
              return obj;
            }
            concat(arg0) {
              self = this;
              assertResult = outer1_3.assert(arg0 instanceof outer1_8.Any, "Invalid schema object");
              tmp2 = outer1_3;
              tmp3 = "any" === this._type;
              if (!tmp3) {
                tmp3 = "any" === arg0._type;
              }
              if (!tmp3) {
                tmp3 = arg0._type === self._type;
              }
              assertResult1 = outer1_3.assert(tmp3, "Cannot merge type", self._type, "with another type:", arg0._type);
              cloneResult = self.clone();
              tmp6 = cloneResult;
              if ("any" === self._type) {
                tmp6 = cloneResult;
                if ("any" !== arg0._type) {
                  cloneResult1 = arg0.clone();
                  items = ["_settings", "_valids", "_invalids", "_tests", "_refs", "_flags", "_description", "_unit", "_notes", "_tags", "_examples", "_meta", "_inner"];
                  num = 0;
                  tmp6 = cloneResult1;
                  if (0 < items.length) {
                    do {
                      cloneResult1[items[num]] = cloneResult[items[num]];
                      num = num + 1;
                      tmp6 = cloneResult1;
                      length = items.length;
                    } while (num < length);
                  }
                }
              }
              if (tmp6._settings) {
                tmp8 = outer1_8;
                _settings = outer1_8.concatSettings(tmp6._settings, arg0._settings);
              } else {
                _settings = arg0._settings;
              }
              tmp6._settings = _settings;
              _valids = tmp6._valids;
              mergeResult = _valids.merge(arg0._valids, arg0._invalids);
              _invalids = tmp6._invalids;
              mergeResult1 = _invalids.merge(arg0._invalids, arg0._valids);
              _tests = tmp6._tests;
              tmp6._tests = _tests.concat(arg0._tests);
              _refs = tmp6._refs;
              tmp6._refs = _refs.concat(arg0._refs);
              mergeResult2 = outer1_3.merge(tmp6._flags, arg0._flags);
              tmp6._description = arg0._description || tmp6._description;
              tmp6._unit = arg0._unit || tmp6._unit;
              _notes = tmp6._notes;
              tmp6._notes = _notes.concat(arg0._notes);
              _tags = tmp6._tags;
              tmp6._tags = _tags.concat(arg0._tags);
              _examples = tmp6._examples;
              tmp6._examples = _examples.concat(arg0._examples);
              _meta = tmp6._meta;
              tmp6._meta = _meta.concat(arg0._meta);
              keys = Object.keys(arg0._inner);
              num2 = 0;
              if (0 < keys.length) {
                do {
                  tmp17 = keys[num2];
                  arr3 = arg0._inner[tmp17];
                  tmp18 = tmp13;
                  tmp19 = tmp14;
                  num3 = tmp15;
                  tmp20 = tmp16;
                  if (arr3) {
                    arr4 = tmp6._inner[tmp17];
                    if (arr4) {
                      if ("object" === tmp12) {
                        if ("children" === tmp17) {
                          obj = {};
                          num4 = 0;
                          num5 = 0;
                          if (0 < arr4.length) {
                            do {
                              obj[arr4[num4].key] = num4;
                              num4 = num4 + 1;
                              num5 = num4;
                              length2 = arr4.length;
                            } while (num4 < length2);
                          }
                          num6 = 0;
                          tmp23 = arr4;
                          tmp18 = obj;
                          tmp19 = num5;
                          num3 = 0;
                          tmp20 = tmp16;
                          if (0 < arr3.length) {
                            do {
                              key = arr3[num6].key;
                              if (obj[key] >= 0) {
                                obj1 = {};
                                obj1.key = key;
                                schema = arr4[obj[key]].schema;
                                obj1.schema = schema.concat(arr3[num6].schema);
                                arr4[obj[key]] = obj1;
                              } else {
                                arr = arr4.push(arr3[num6]);
                              }
                              num6 = num6 + 1;
                              tmp25 = arr4;
                              tmp18 = obj;
                              tmp19 = num5;
                              tmp20 = key;
                              num3 = num6;
                            } while (num6 < arr3.length);
                          }
                        }
                      }
                      obj = tmp6._inner[tmp17];
                      tmp6._inner[tmp17] = obj.concat(arr3);
                      tmp22 = arr4;
                      tmp18 = tmp13;
                      tmp19 = tmp14;
                      num3 = tmp15;
                      tmp20 = tmp16;
                    } else {
                      tmp6._inner[tmp17] = arr3.slice();
                      tmp21 = arr4;
                      tmp18 = tmp13;
                      tmp19 = tmp14;
                      num3 = tmp15;
                      tmp20 = tmp16;
                    }
                  }
                  num2 = num2 + 1;
                  tmp13 = tmp18;
                  tmp14 = tmp19;
                  tmp15 = num3;
                  tmp16 = tmp20;
                } while (num2 < keys.length);
              }
              return tmp6;
            }
            _test(arg0, arg1, arg2, arg3) {
              cloneResult = this.clone();
              _tests = cloneResult._tests;
              obj = { func: arg2, name: arg0, arg: arg1, options: arg3 };
              arr = _tests.push(obj);
              return cloneResult;
            }
            options(arg0) {
              assertResult = outer1_3.assert(!arg0.context, "Cannot override context");
              checkOptionsResult = this.checkOptions(arg0);
              cloneResult = this.clone();
              cloneResult._settings = outer1_8.concatSettings(cloneResult._settings, arg0);
              return cloneResult;
            }
            strict(arg0) {
              cloneResult = this.clone();
              cloneResult._settings = cloneResult._settings || {};
              tmp2 = undefined !== arg0;
              if (tmp2) {
                tmp2 = !arg0;
              }
              cloneResult._settings.convert = tmp2;
              return cloneResult;
            }
            raw(arg0) {
              cloneResult = this.clone();
              tmp2 = undefined === arg0;
              if (!tmp2) {
                tmp2 = arg0;
              }
              cloneResult._flags.raw = tmp2;
              return cloneResult;
            }
            error(arg0) {
              self = this;
              tmp2 = arg0;
              tmp = outer1_3;
              if (arg0) {
                tmp3 = globalThis;
                _Error = Error;
                tmp2 = arg0 instanceof Error;
              }
              assertResult = outer1_3.assert(tmp2, "Must provide a valid Error object");
              cloneResult = self.clone();
              cloneResult._flags.error = arg0;
              return cloneResult;
            }
            allow() {
              cloneResult = this.clone();
              slice = Array.prototype.slice;
              flattenResult = outer1_3.flatten(slice.call(arguments));
              num = 0;
              if (0 < flattenResult.length) {
                do {
                  tmp2 = flattenResult[num];
                  tmp3 = outer1_3;
                  assertResult = outer1_3.assert(undefined !== tmp2, "Cannot call allow/valid/invalid with undefined");
                  _invalids = cloneResult._invalids;
                  removeResult = _invalids.remove(tmp2);
                  _valids = cloneResult._valids;
                  addResult = _valids.add(tmp2, cloneResult._refs);
                  num = num + 1;
                  length = flattenResult.length;
                } while (num < length);
              }
              return cloneResult;
            }
            valid() {
              allow = this.allow;
              applyResult = allow(...arguments);
              applyResult._flags.allowOnly = true;
              return applyResult;
            }
            invalid(arg0) {
              cloneResult = this.clone();
              slice = Array.prototype.slice;
              flattenResult = outer1_3.flatten(slice.call(arguments));
              num = 0;
              if (0 < flattenResult.length) {
                do {
                  tmp2 = flattenResult[num];
                  tmp3 = outer1_3;
                  assertResult = outer1_3.assert(undefined !== tmp2, "Cannot call allow/valid/invalid with undefined");
                  _valids = cloneResult._valids;
                  removeResult = _valids.remove(tmp2);
                  _invalids = cloneResult._invalids;
                  addResult = _invalids.add(tmp2, this._refs);
                  num = num + 1;
                  length = flattenResult.length;
                } while (num < length);
              }
              return cloneResult;
            }
            required() {
              cloneResult = this.clone();
              cloneResult._flags.presence = "required";
              return cloneResult;
            }
            optional() {
              cloneResult = this.clone();
              cloneResult._flags.presence = "optional";
              return cloneResult;
            }
            forbidden() {
              cloneResult = this.clone();
              cloneResult._flags.presence = "forbidden";
              return cloneResult;
            }
            strip() {
              cloneResult = this.clone();
              cloneResult._flags.strip = true;
              return cloneResult;
            }
            applyFunctionToChildren(arg0, arg1, arg2, arg3) {
              self = this;
              c0 = arg3;
              items = [];
              combined = items.concat(arg0);
              if (1 === combined.length) {
                num = 0;
                str = "";
                if ("" === combined[0]) {
                  tmp = arg1;
                  obj = self[arg1];
                  tmp2 = arg2;
                  return obj.apply(self, arg2);
                }
              }
              str2 = "";
              if (arg3) {
                str3 = ".";
                str2 = `${arg3}.`;
              }
              c0 = str2;
              substr = combined;
              if ("" === combined[0]) {
                substr = combined.slice(1);
              }
              mapped = substr.map((arg0) => str2 + arg0);
              error = new Error("unknown key(s) " + mapped.join(", "));
              throw error;
            }
            default(arg0, arg1) {
              self = this;
              isRefResult = "function" !== typeof arg0;
              if (!isRefResult) {
                tmp2 = outer1_4;
                isRefResult = outer1_4.isRef(arg0);
              }
              if (!isRefResult) {
                tmp3 = !arg0.description && arg1;
                if (tmp3) {
                  arg0.description = arg1;
                }
                if (!self._flags.func) {
                  str = "string";
                  tmp5 = "string" === typeof arg0.description;
                  tmp4 = outer1_3;
                  if (tmp5) {
                    num = 0;
                    tmp5 = arg0.description.length > 0;
                  }
                  str2 = "description must be provided when default value is a function";
                  assertResult = outer1_3.assert(tmp5, "description must be provided when default value is a function");
                }
              }
              cloneResult = self.clone();
              cloneResult._flags.default = arg0;
              arr = outer1_4.push(cloneResult._refs, arg0);
              return cloneResult;
            }
            empty(arg0) {
              cloneResult = this.clone();
              schemaResult = undefined;
              if (undefined !== arg0) {
                tmp3 = outer1_7;
                schemaResult = outer1_7.schema(arg0);
              }
              cloneResult._flags.empty = schemaResult;
              return cloneResult;
            }
            when(arg0, arg1) {
              self = this;
              tmp2 = arg1;
              tmp = outer1_3;
              if (arg1) {
                str = "undefined";
                if (undefined !== arg1) {
                  tmp3 = outer1_2;
                  str = outer1_2(arg1);
                }
                str2 = "object";
                tmp2 = "object" === str;
              }
              assertResult = outer1_3.assert(tmp2, "Invalid options");
              tmp6 = undefined !== arg1.then;
              tmp5 = outer1_3;
              if (!tmp6) {
                tmp6 = undefined !== arg1.otherwise;
              }
              assertResult1 = outer1_3.assert(tmp6, "options must have at least one of \"then\" or \"otherwise\"");
              combined = undefined;
              if (arg1.hasOwnProperty("then")) {
                tmp9 = outer1_7;
                combined = self.concat(outer1_7.schema(arg1.then));
              }
              combined1 = undefined;
              if (arg1.hasOwnProperty("otherwise")) {
                tmp11 = outer1_7;
                combined1 = self.concat(outer1_7.schema(arg1.otherwise));
              }
              obj = outer1_6;
              if (!outer1_6) {
                tmp12 = _class;
                num = 28;
                obj = _class(28);
              }
              outer1_6 = obj;
              obj = { is: arg1.is };
              obj.then = combined;
              obj.otherwise = combined1;
              whenResult = obj.when(arg0, obj);
              whenResult._flags.presence = "ignore";
              whenResult._settings = outer1_8.concatSettings(whenResult._settings, { baseType: self });
              return whenResult;
            }
            description(arg0) {
              self = this;
              tmp2 = arg0;
              tmp = outer1_3;
              if (arg0) {
                str = "string";
                tmp2 = "string" === typeof arg0;
              }
              assertResult = outer1_3.assert(tmp2, "Description must be a non-empty string");
              cloneResult = self.clone();
              cloneResult._description = arg0;
              return cloneResult;
            }
            notes(arg0) {
              self = this;
              tmp2 = arg0;
              tmp = outer1_3;
              if (arg0) {
                str = "string";
                isArray = "string" === typeof arg0;
                if (!isArray) {
                  tmp4 = globalThis;
                  _Array = Array;
                  isArray = Array.isArray(arg0);
                }
                tmp2 = isArray;
              }
              assertResult = outer1_3.assert(tmp2, "Notes must be a non-empty string or array");
              cloneResult = self.clone();
              _notes = cloneResult._notes;
              cloneResult._notes = _notes.concat(arg0);
              return cloneResult;
            }
            tags(arg0) {
              self = this;
              tmp2 = arg0;
              tmp = outer1_3;
              if (arg0) {
                str = "string";
                isArray = "string" === typeof arg0;
                if (!isArray) {
                  tmp4 = globalThis;
                  _Array = Array;
                  isArray = Array.isArray(arg0);
                }
                tmp2 = isArray;
              }
              assertResult = outer1_3.assert(tmp2, "Tags must be a non-empty string or array");
              cloneResult = self.clone();
              _tags = cloneResult._tags;
              cloneResult._tags = _tags.concat(arg0);
              return cloneResult;
            }
            meta(arg0) {
              assertResult = outer1_3.assert(undefined !== arg0, "Meta cannot be undefined");
              cloneResult = this.clone();
              _meta = cloneResult._meta;
              cloneResult._meta = _meta.concat(arg0);
              return cloneResult;
            }
            example(arg0) {
              self = this;
              assertResult = outer1_3.assert(arguments.length, "Missing example");
              _validateResult = this._validate(arg0, null, outer1_8.defaults);
              errors = _validateResult.errors;
              tmp3 = outer1_3;
              tmp4 = !_validateResult.errors;
              if (errors) {
                tmp5 = outer1_5;
                errors = outer1_5.process(_validateResult.errors, arg0);
              }
              assertResult1 = outer1_3.assert(tmp4, "Bad example:", errors);
              cloneResult = self.clone();
              _examples = cloneResult._examples;
              arr = _examples.push(arg0);
              return cloneResult;
            }
            unit(arg0) {
              self = this;
              tmp2 = arg0;
              tmp = outer1_3;
              if (arg0) {
                str = "string";
                tmp2 = "string" === typeof arg0;
              }
              assertResult = outer1_3.assert(tmp2, "Unit name must be a non-empty string");
              cloneResult = self.clone();
              cloneResult._unit = arg0;
              return cloneResult;
            }
            _prepareEmptyValue(arg0) {
              trimmed = arg0;
              if ("string" === typeof arg0) {
                self = this;
                trimmed = arg0;
                if (this._flags.trim) {
                  trimmed = arg0.trim();
                }
              }
              return trimmed;
            }
            _validate(arg0, arg1, arg2, arg3) {
              tmp = arg1;
              self = this;
              values = arg0;
              closure_1 = arg1;
              _settings = arg2;
              self = this;
              closure_4 = arg0;
              if (!arg1) {
                obj = { key: "", path: "", parent: null };
                tmp2 = arg3;
                obj.reference = arg3;
                tmp = obj;
              }
              closure_1 = tmp;
              tmp3 = arg2;
              if (self._settings) {
                tmp4 = outer1_8;
                concatSettingsResult = outer1_8.concatSettings(arg2, self._settings);
                _settings = concatSettingsResult;
                tmp3 = concatSettingsResult;
              }
              items = [];
              errors = items;
              finish = function finish() {
                let _defaultResult;
                if (!self._flags.strip) {
                  if (undefined === obj) {
                    if (noDefaults.noDefaults) {
                      _defaultResult = closure_4;
                    } else {
                      const _flags = self._flags;
                      if (outer2_4.isRef(self._flags.default)) {
                        _defaultResult = _default(closure_1.parent, noDefaults);
                      } else {
                        if ("function" === typeof _default) {
                          let tmp9 = null !== closure_1.parent;
                          if (tmp9) {
                            tmp9 = self._flags.default.length > 0;
                          }
                          let tmp11;
                          if (tmp9) {
                            const items = [outer2_3.clone(closure_1.parent), noDefaults];
                            tmp11 = items;
                          }
                          const iter = outer2_8._try(self._flags.default, tmp11);
                          const value = iter.value;
                          _defaultResult = value;
                          if (iter.error) {
                            arr = arr.push(self.createError("any.default", iter.error, closure_1, noDefaults));
                            _defaultResult = value;
                          }
                        }
                        _defaultResult = outer2_3.clone(self._flags.default);
                      }
                    }
                  }
                }
                obj = { value: _defaultResult };
                let tmp29 = null;
                if (arr.length) {
                  tmp29 = arr;
                }
                obj.errors = tmp29;
                return obj;
              };
              tmp6 = arg0;
              if (self._coerce) {
                _coerce = self._coerce;
                tmp7 = _coerce;
                tmp8 = self;
                tmp9 = arg0;
                tmp10 = tmp;
                tmp11 = tmp3;
                iter = _coerce.call(self, arg0, tmp, tmp3);
                value = iter.value;
                values = value;
                if (iter.errors) {
                  errors = items.concat(iter.errors);
                  return finish();
                } else {
                  tmp6 = value;
                }
              }
              empty = self._flags.empty;
              if (empty) {
                empty2 = self._flags.empty;
                tmp12 = outer1_8;
                tmp13 = null;
                empty = !empty2._validate(self._prepareEmptyValue(tmp6), null, outer1_8.defaults).errors;
              }
              if (empty) {
                values = undefined;
              }
              tmp14 = self._flags.presence || tmp3.presence;
              if ("optional" === tmp14) {
                tmp15 = tmp6;
                if (undefined === tmp6) {
                  _flags = self._flags;
                  str5 = "default";
                  if (_flags.hasOwnProperty("default")) {
                    if (undefined === self._flags.default) {
                      str11 = "object";
                      if ("object" === self._type) {
                        obj = {};
                        values = obj;
                        tmp15 = obj;
                      }
                    }
                  }
                  return finish();
                }
              } else {
                str = "required";
                if ("required" === tmp14) {
                  if (undefined === tmp6) {
                    str4 = "any.required";
                    tmp21 = null;
                    tmp22 = self;
                    tmp23 = tmp;
                    tmp24 = tmp3;
                    arr = items.push(self.createError("any.required", null, tmp, tmp3));
                    return finish();
                  }
                }
                str2 = "forbidden";
                tmp15 = tmp6;
                if ("forbidden" === tmp14) {
                  if (undefined !== tmp6) {
                    str3 = "any.unknown";
                    tmp16 = null;
                    tmp17 = self;
                    tmp18 = tmp;
                    tmp19 = tmp3;
                    arr1 = items.push(self.createError("any.unknown", null, tmp, tmp3));
                  }
                  return finish();
                }
              }
              _valids = self._valids;
              tmp26 = tmp15;
              if (_valids.has(tmp15, tmp, tmp3, self._flags.insensitive)) {
                return finish();
              } else {
                _invalids = self._invalids;
                tmp27 = _invalids;
                tmp28 = tmp15;
                tmp29 = tmp;
                tmp30 = tmp3;
                if (_invalids.has(tmp26, tmp, tmp3, self._flags.insensitive)) {
                  str6 = "any.invalid";
                  str7 = "";
                  if ("" === tmp15) {
                    str6 = "any.empty";
                  }
                  tmp31 = null;
                  tmp32 = self;
                  tmp33 = str6;
                  tmp34 = tmp;
                  tmp35 = tmp3;
                  arr2 = items.push(self.createError(str6, null, tmp, tmp3));
                  if (!tmp3.abortEarly) {
                  }
                  return finish();
                }
                tmp37 = tmp15;
                if (self._base) {
                  _base = self._base;
                  tmp38 = _base;
                  tmp39 = self;
                  tmp40 = tmp15;
                  tmp41 = tmp;
                  tmp42 = tmp3;
                  iter2 = _base.call(self, tmp26, tmp, tmp3);
                  value = iter2.value;
                  if (iter2.errors) {
                    values = value;
                    errors = items.concat(iter2.errors);
                    return finish();
                  } else {
                    tmp37 = tmp15;
                    if (value !== tmp15) {
                      value1 = iter2.value;
                      values = value1;
                      _valids3 = self._valids;
                      tmp67 = _valids3;
                      tmp68 = value1;
                      tmp69 = tmp;
                      tmp70 = tmp3;
                      if (_valids3.has(value1, tmp, tmp3, self._flags.insensitive)) {
                        return finish();
                      } else {
                        _invalids2 = self._invalids;
                        tmp43 = _invalids2;
                        tmp44 = value1;
                        tmp45 = tmp;
                        tmp46 = tmp3;
                        tmp37 = value1;
                        if (_invalids2.has(value1, tmp, tmp3, self._flags.insensitive)) {
                          str8 = "any.invalid";
                          str9 = "";
                          if ("" === value1) {
                            str8 = "any.empty";
                          }
                          tmp47 = null;
                          tmp48 = self;
                          tmp49 = str8;
                          tmp50 = tmp;
                          tmp51 = tmp3;
                          arr3 = items.push(self.createError(str8, null, tmp, tmp3));
                          tmp37 = value1;
                          if (tmp3.abortEarly) {
                            return finish();
                          }
                        }
                      }
                    }
                  }
                }
                if (self._flags.allowOnly) {
                  obj1 = {};
                  _valids2 = self._valids;
                  obj2 = {};
                  flag = true;
                  obj2.stripUndefined = true;
                  obj1.valids = _valids2.values(obj2);
                  str10 = "any.allowOnly";
                  tmp53 = self;
                  tmp54 = obj1;
                  tmp55 = tmp;
                  tmp56 = tmp3;
                  arr4 = items.push(self.createError("any.allowOnly", obj1, tmp, tmp3));
                  if (tmp3.abortEarly) {
                    return finish();
                  }
                }
                num = 0;
                if (0 < self._tests.length) {
                  while (true) {
                    func = self._tests[num].func;
                    tmp58 = func;
                    tmp59 = self;
                    tmp60 = tmp37;
                    tmp61 = tmp;
                    tmp62 = tmp3;
                    callResult = func.call(self, tmp37, tmp, tmp3);
                    tmp64 = outer1_5;
                    tmp65 = tmp37;
                    if (callResult instanceof outer1_5.Err) {
                      arr5 = items.push(callResult);
                      if (tmp3.abortEarly) {
                        break;
                      }
                    } else {
                      values = callResult;
                      tmp37 = callResult;
                    }
                    num = num + 1;
                  }
                  return finish();
                }
                return finish();
              }
            }
            _validateWithOptions(arg0, arg1, arg2) {
              self = this;
              if (arg1) {
                checkOptionsResult = self.checkOptions(arg1);
              }
              iter = self._validate(arg0, null, outer1_8.concatSettings(outer1_8.defaults, arg1));
              processResult = outer1_5.process(iter.errors, arg0);
              if (arg2) {
                obj = arg2(processResult, iter.value);
              } else {
                obj = {};
                obj.error = processResult;
                obj.value = iter.value;
              }
              return obj;
            }
            validate(arg0, arg1, arg2) {
              self = this;
              if ("function" === typeof arg1) {
                tmp3 = null;
                _validateWithOptionsResult = self._validateWithOptions(arg0, null, arg1);
              } else {
                tmp = arg2;
                _validateWithOptionsResult = self._validateWithOptions(arg0, arg1, arg2);
              }
              return _validateWithOptionsResult;
            }
            describe() {
              self = this;
              self = this;
              obj = { type: this._type };
              keys = Object.keys(this._flags);
              if (keys.length) {
                items = ["empty", "default", "lazy", "label"];
                if (items.some((arg0) => {
                  const _flags = self._flags;
                  return _flags.hasOwnProperty(arg0);
                })) {
                  obj.flags = {};
                  num = 0;
                  str = "function";
                  str2 = "label";
                  str3 = "lazy";
                  str4 = "default";
                  str5 = "empty";
                  if (0 < keys.length) {
                    do {
                      tmp2 = keys[num];
                      if ("empty" === tmp2) {
                        obj2 = self._flags[tmp2];
                        obj.flags[tmp2] = obj2.describe();
                      } else if ("default" === tmp2) {
                        tmp4 = outer1_4;
                        if (outer1_4.isRef(self._flags[tmp2])) {
                          str6 = self._flags[tmp2];
                          obj.flags[tmp2] = str6.toString();
                        } else if ("function" === typeof self._flags[tmp2]) {
                          obj.flags[tmp2] = self._flags[tmp2].description;
                        } else {
                          obj.flags[tmp2] = self._flags[tmp2];
                        }
                      } else {
                        tmp3 = "lazy" === tmp2 || "label" === tmp2;
                        if (!tmp3) {
                          obj.flags[tmp2] = self._flags[tmp2];
                        }
                      }
                      num = num + 1;
                    } while (num < keys.length);
                  }
                } else {
                  obj.flags = self._flags;
                }
              }
              if (self._description) {
                obj.description = self._description;
              }
              if (self._notes.length) {
                obj.notes = self._notes;
              }
              if (self._tags.length) {
                obj.tags = self._tags;
              }
              if (self._meta.length) {
                obj.meta = self._meta;
              }
              if (self._examples.length) {
                obj.examples = self._examples;
              }
              if (self._unit) {
                obj.unit = self._unit;
              }
              _valids = self._valids;
              values = _valids.values();
              if (values.length) {
                obj.valids = values.map((arg0) => {
                  let str = arg0;
                  if (outer2_4.isRef(arg0)) {
                    str = arg0.toString();
                  }
                  return str;
                });
              }
              _invalids = self._invalids;
              values1 = _invalids.values();
              if (values1.length) {
                obj.invalids = values1.map((arg0) => {
                  let str = arg0;
                  if (outer2_4.isRef(arg0)) {
                    str = arg0.toString();
                  }
                  return str;
                });
              }
              obj.rules = [];
              num2 = 0;
              if (0 < self._tests.length) {
                tmp7 = self._tests[num2];
                obj = {};
                obj.name = tmp7.name;
                while (undefined === tmp7.arg) {
                  options = tmp7.options;
                  tmp10 = tmp5;
                  tmp11 = num3;
                  tmp12 = tmp6;
                  if (options) {
                    tmp13 = tmp6;
                    if (options.hasRef) {
                      obj.arg = {};
                      _Object = Object;
                      keys1 = Object.keys(tmp7.arg);
                      num4 = 0;
                      tmp5 = keys1;
                      num3 = 0;
                      tmp13 = tmp6;
                      if (0 < keys1.length) {
                        do {
                          tmp14 = keys1[num4];
                          str8 = tmp7.arg[tmp14];
                          tmp15 = outer1_4;
                          str = str8;
                          if (outer1_4.isRef(str8)) {
                            str = str8.toString();
                          }
                          obj.arg[tmp14] = str;
                          num4 = num4 + 1;
                          tmp5 = keys1;
                          tmp13 = str8;
                          num3 = num4;
                        } while (num4 < keys1.length);
                      }
                    }
                    if ("string" === typeof options.description) {
                      obj.description = options.description;
                      tmp10 = tmp5;
                      tmp11 = num3;
                      tmp12 = tmp13;
                    } else {
                      tmp10 = tmp5;
                      tmp11 = num3;
                      tmp12 = tmp13;
                      if ("function" === typeof options.description) {
                        obj.description = options.description(obj.arg);
                        tmp10 = tmp5;
                        tmp11 = num3;
                        tmp12 = tmp13;
                      }
                    }
                  }
                  rules = obj.rules;
                  arr = rules.push(obj);
                  num2 = num2 + 1;
                  tmp5 = tmp10;
                  num3 = tmp11;
                  tmp6 = tmp12;
                }
                tmp8 = outer1_4;
                str7 = tmp7.arg;
                if (outer1_4.isRef(tmp7.arg)) {
                  str1 = str7.toString();
                } else {
                  str1 = str7;
                }
                obj.arg = str1;
              }
              if (!obj.rules.length) {
                delete tmp.rules;
              }
              _getLabelResult = self._getLabel();
              if (_getLabelResult) {
                obj.label = _getLabelResult;
              }
              return obj;
            }
            label(arg0) {
              self = this;
              tmp2 = arg0;
              tmp = outer1_3;
              if (arg0) {
                str = "string";
                tmp2 = "string" === typeof arg0;
              }
              assertResult = outer1_3.assert(tmp2, "Label name must be a non-empty string");
              cloneResult = self.clone();
              cloneResult._flags.label = arg0;
              return cloneResult;
            }
            _getLabel(arg0) {
              tmp = this._flags.label || arg0;
              return tmp;
            }
          }
          return _class;
        })();
        obj.Any = tmp2;
        module.exports = tmp2;
        obj.Any.prototype.isImmutable = true;
        const valid = obj.Any.prototype.valid;
        obj.Any.prototype.equal = valid;
        obj.Any.prototype.only = valid;
        const invalid = obj.Any.prototype.invalid;
        obj.Any.prototype.not = invalid;
        obj.Any.prototype.disallow = invalid;
        obj.Any.prototype.exist = obj.Any.prototype.required;
        obj._try = (apply) => {
          { value: apply.apply(null, arg1), error: undefined };
        };
        obj.concatSettings = (arg0, arg1) => {
          if (!arg0) {
            if (!arg1) {
              return null;
            }
          }
          const obj = {};
          if (arg0) {
            callback(obj, arg0);
          }
          if (arg1) {
            const _Object = Object;
            const keys = Object.keys(arg1);
            let num = 0;
            if (0 < keys.length) {
              while (true) {
                let tmp5 = keys[num];
                if ("language" === tmp5) {
                  if (obj.hasOwnProperty(tmp5)) {
                    let tmp6 = closure_3;
                    obj[tmp5] = closure_3.applyToDefaults(obj[tmp5], arg1[tmp5]);
                    num = num + 1;
                    if (num >= keys.length) {
                      break;
                    }
                  }
                }
                obj[tmp5] = arg1[tmp5];
              }
            }
          }
          return obj;
        };
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if ("function" === typeof Symbol) {
            const _Symbol2 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol3 = Symbol;
              let str2 = "symbol";
            }
            return str2;
          }
        }
        str2 = typeof arg0;
      };
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      let closure_1 = arg2(2);
      arg1.create = (arr) => {
        ref.assert("string" === typeof arr, "Invalid reference key:", arr);
        const cloneResult = ref.clone(arg1);
        let closure_0 = cloneResult;
        ref = function ref(arg0, context) {
          context = arg0;
          if (ref.isContext) {
            context = context.context;
          }
          return ref.reach(context, ref.key, closure_0);
        };
        let str = cloneResult;
        if (cloneResult) {
          str = cloneResult.contextPrefix;
        }
        if (!str) {
          str = "$";
        }
        ref.isContext = arr[0] === str;
        let substr = arr;
        if (ref.isContext) {
          substr = arr.slice(1);
        }
        ref.key = substr;
        let str3 = cloneResult;
        if (cloneResult) {
          str3 = cloneResult.separator;
        }
        if (!str3) {
          str3 = ".";
        }
        ref.path = ref.key.split(str3);
        ref.depth = ref.path.length;
        ref.root = ref.path[0];
        ref.isJoi = true;
        ref.toString = () => {
          let str = "ref:";
          if (ref.isContext) {
            str = "context:";
          }
          return str + ref.key;
        };
        return ref;
      };
      arg1.isRef = (isJoi) => "function" === typeof isJoi && isJoi.isJoi;
      arg1.push = (arr, isContext) => {
        if (tmp) {
          arr.push(isContext.root);
        }
      };
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      if ("function" === typeof Symbol) {
        let _Symbol = Symbol;
        if ("symbol" === typeof Symbol.iterator) {
          let fn = (arg0) => typeof arg0;
        }
        let closure_2 = arg2(2);
        let closure_3 = arg2(17);
        let obj = {
          stringify(prototype) {
              let str = "undefined";
              if (undefined !== prototype) {
                str = fn(prototype);
              }
              if (null === prototype) {
                return "null";
              } else if ("string" === str) {
                return prototype;
              } else {
                if (!(prototype instanceof closure_0.Err)) {
                  if ("function" !== str) {
                    if ("object" === str) {
                      const _Array = Array;
                      if (Array.isArray(prototype)) {
                        let num = 0;
                        let str5 = "";
                        let str6 = "";
                        if (0 < prototype.length) {
                          do {
                            let str7 = "";
                            if (``.length) {
                              str7 = ", ";
                            }
                            let tmp4 = obj;
                            str5 = str5 + str7 + obj.stringify(prototype[num], arg1);
                            num = num + 1;
                            str6 = str5;
                          } while (num < prototype.length);
                        }
                        let text = str6;
                        if (arg1) {
                          text = `${"[" + str6}]`;
                        }
                        return text;
                      } else {
                        return prototype.toString();
                      }
                    } else {
                      const _JSON = JSON;
                      return JSON.stringify(prototype);
                    }
                  }
                }
                return prototype.toString();
              }
            }
        };
        arg1.Err = (() => {
          class _class {
            constructor(arg0, arg1, arg2, arg3, arg4) {
              obj = arg1;
              self = this;
              if (this instanceof _class) {
                flag = true;
                self.isJoi = true;
                tmp6 = arg0;
                self.type = arg0;
                if (!obj) {
                  obj = {};
                }
                self.context = obj;
                ({ key: self.context.key, path: self.path } = arg2);
                tmp7 = arg3;
                self.options = arg3;
                tmp8 = arg4;
                self.flags = arg4;
                return;
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp2 = new.target;
                str = "Cannot call a class as a function";
                tmp3 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp5 = typeError;
                throw typeError;
              }
            }
            toString() {
              self = this;
              self = this;
              language = this.options.language;
              context = this.context;
              if (this.flags.label) {
                context.key = self.flags.label;
              } else {
                str = "";
                tmp = "" !== context.key;
                if (tmp) {
                  tmp2 = null;
                  tmp = null !== self.context.key;
                }
                if (!tmp) {
                  root = language.root;
                  if (!root) {
                    tmp3 = outer1_3;
                    root = outer1_3.errors.root;
                  }
                  self.context.key = root;
                }
              }
              reachResult = outer1_2.reach(language, self.type);
              if (!reachResult) {
                tmp4 = outer1_2;
                tmp5 = outer1_3;
                reachResult = outer1_2.reach(outer1_3.errors, self.type);
              }
              obj = /\{\{\!?key\}\}/;
              isMatch = obj.test(reachResult);
              tmp7 = reachResult.length > 2;
              if (tmp7) {
                num = 0;
                str2 = "!";
                tmp7 = "!" === reachResult[0];
              }
              if (tmp7) {
                num2 = 1;
                str3 = "!";
                tmp7 = "!" === reachResult[1];
              }
              substr = reachResult;
              if (tmp7) {
                substr = reachResult.slice(2);
              }
              if (!isMatch) {
                isMatch = tmp7;
              }
              str4 = substr;
              if (!isMatch) {
                tmp9 = outer1_2;
                str5 = "key";
                reachResult1 = outer1_2.reach(language, "key");
                if (!reachResult1) {
                  tmp11 = outer1_2;
                  tmp12 = outer1_3;
                  reachResult1 = outer1_2.reach(outer1_3.errors, "key");
                }
                str4 = reachResult1 + substr;
              }
              reachResult2 = outer1_2.reach(language, "messages.wrapArrays");
              wrapArrays = reachResult2;
              if ("boolean" !== typeof reachResult2) {
                tmp14 = outer1_3;
                wrapArrays = outer1_3.errors.messages.wrapArrays;
              }
              return str4.replace(/\{\{(\!?)([^}]+)\}\}/g, (arg0, arg1, arg2) => {
                const json = outer2_4.stringify(outer2_2.reach(self.context, arg2), wrapArrays);
                let escapeHtmlResult = json;
                if (arg1) {
                  escapeHtmlResult = outer2_2.escapeHtml(json);
                }
                return escapeHtmlResult;
              });
            }
          }
          return _class;
        })();
        arg1.create = (arg0, arg1, arg2, arg3, arg4) => new closure_0.Err(arg0, arg1, arg2, arg3, arg4);
        arg1.process = (reason, _object) => {
          if (reason) {
            if (reason.length) {
              let c0 = "";
              const items = [];
              function processErrors(reason, path) {
                let num = 0;
                if (0 < reason.length) {
                  let str = reason[num];
                  while (!str.flags.error) {
                    let str1;
                    if (undefined === path) {
                      str = str.toString();
                      let str2 = "";
                      let tmp3 = closure_0;
                      if (closure_0) {
                        str2 = ". ";
                      }
                      closure_0 = tmp3 + str2 + str;
                      str1 = str;
                    }
                    if (str.context.reason) {
                      if (str.context.reason.length) {
                        let tmp7 = processErrors;
                        let tmp8 = processErrors(str.context.reason, str.path);
                        let tmp9 = tmp8;
                        if (tmp8) {
                          return tmp8;
                        } else {
                          num = num + 1;
                        }
                      }
                    }
                    let obj = {};
                    let tmp4 = items;
                    if (!str1) {
                      str1 = str.toString();
                    }
                    obj.message = str1;
                    let tmp5 = outer1_4;
                    obj.path = outer1_4.getPath(str);
                    ({ type: obj.type, context: obj.context } = str);
                    let arr = items.push(obj);
                  }
                  return str.flags.error;
                }
              }
              const processErrorsResult = processErrors(reason);
              if (processErrorsResult) {
                return processErrorsResult;
              } else {
                const _Error = Error;
                const error = new Error(c0);
                error.isJoi = true;
                error.name = "ValidationError";
                error.details = items;
                error._object = _object;
                error.annotate = obj.annotate;
                return error;
              }
            }
          }
          return null;
        };
        obj.getPath = (path) => path.path || path.context.key;
        obj.safeStringify = (arg0, arg1) => JSON.stringify(arg0, obj.serializer(), arg1);
        obj.serializer = () => {
          let closure_0 = [];
          let closure_1 = [];
          function cycleReplacer(arg0, arg1) {
            let str = "[Circular ~]";
            if (arr2[0] !== arg1) {
              const substr = arr.slice(0, arr2.indexOf(arg1));
              str = `${"[Circular ~." + obj.join(".")}]`;
            }
            return str;
          }
          return function(arg0, arg1) {
            let arr2;
            const self = this;
            if (arr2.length > 0) {
              const index = arr2.indexOf(self);
              let arr1 = arr2;
              if (~index) {
                arr1.length = index + 1;
                arr.length = index + 1;
                arr[index] = arg0;
              } else {
                arr = arr1.push(self);
                arr = arr.push(arg0);
              }
              let callResult = arg1;
              if (~arr2.indexOf(arg1)) {
                callResult = cycleReplacer.call(self, arg0, arg1);
              }
            } else {
              arr1 = arr2.push(arg1);
              callResult = arg1;
            }
            let str = callResult;
            if (Array.isArray(callResult)) {
              str = callResult;
              if (callResult.placeholders) {
                const placeholders = callResult.placeholders;
                const items = [];
                let num2 = 0;
                str = items;
                if (0 < callResult.length) {
                  do {
                    if (placeholders[num2]) {
                      arr2 = items.push(placeholders[num2]);
                    }
                    let arr3 = items.push(callResult[num2]);
                    num2 = num2 + 1;
                    str = items;
                  } while (num2 < callResult.length);
                }
              }
            }
            if (str !== Infinity) {
              if (str !== -Infinity) {
                const _Number = Number;
                if (!Number.isNaN(str)) {
                  if ("function" !== typeof str) {
                    let str3 = "undefined";
                    if (undefined !== str) {
                      str3 = arr2(str);
                    }
                    let text = str;
                  }
                  return text;
                }
              }
            }
            text = `${"[" + str.toString()}]`;
          };
        };
        obj.annotate = function(arg0) {
          let length;
          const self = this;
          let str = "\u001B[31m";
          if (arg0) {
            str = "";
          }
          let str2 = "\u001B[41m";
          if (arg0) {
            str2 = "";
          }
          let str3 = "\u001B[0m";
          if (arg0) {
            str3 = "";
          }
          if ("object" !== str2(self._object)) {
            return self.details[0].message;
          } else {
            let _object = self._object;
            if (!_object) {
              _object = {};
            }
            const cloneResult = str3.clone(_object);
            const obj = {};
            let diff = self.details.length - 1;
            if (diff >= 0) {
              do {
                let sum = diff + 1;
                let tmp11 = self.details[diff];
                let str12 = tmp11.path;
                let parts = str12.split(".");
                let tmp12 = tmp7;
                let tmp13 = tmp8;
                let tmp14 = tmp9;
                if (0 < parts.length) {
                  let text = `${", " + tmp10}_$end$_`;
                  let text1 = `${"_$idx$_" + tmp10}_$end$_`;
                  let num3 = 0;
                  let tmp21 = tmp8;
                  let tmp22 = tmp9;
                  tmp12 = tmp7;
                  tmp13 = tmp8;
                  tmp14 = tmp9;
                  let tmp23 = cloneResult;
                  if (cloneResult) {
                    while (true) {
                      let tmp15 = parts[num3];
                      if (num3 + 1 < parts.length) {
                        let tmp16 = tmp23[tmp15];
                        let tmp17 = tmp21;
                        let tmp18 = tmp22;
                      } else {
                        let tmp30 = tmp23[tmp15];
                        let _Array = Array;
                        if (Array.isArray(tmp23)) {
                          if (!tmp23.placeholders) {
                            tmp23.placeholders = {};
                          }
                          let placeholders = tmp23.placeholders;
                          if (tmp23.placeholders[tmp15]) {
                            let str14 = tmp23.placeholders[tmp15];
                            placeholders[tmp15] = str14.replace("_$end$_", text);
                            tmp16 = tmp23;
                            tmp17 = tmp30;
                            tmp18 = text1;
                          } else {
                            placeholders[tmp15] = text1;
                            tmp16 = tmp23;
                            tmp17 = tmp30;
                            tmp18 = text1;
                          }
                        } else if (undefined !== tmp30) {
                          delete tmp[tmp2];
                          let text2 = `${tmp15 + "_$key$_" + tmp10}_$end$_`;
                          tmp23[`${tmp15 + "_$key$_" + tmp10}_$end$_`] = tmp30;
                          obj[tmp11.path] = text2;
                          tmp16 = tmp23;
                          tmp17 = tmp30;
                          tmp18 = tmp22;
                        } else if (obj[tmp11.path]) {
                          let str13 = obj[tmp11.path];
                          let replaced = str13.replace("_$end$_", text);
                          tmp23[replaced] = tmp23[str13];
                          obj[tmp11.path] = replaced;
                          delete tmp[tmp3];
                          tmp16 = tmp23;
                          tmp17 = tmp30;
                          tmp18 = tmp22;
                        } else {
                          tmp23["_$miss$_" + tmp15 + "|" + sum + "_$end$_"] = "__missing__";
                          tmp16 = tmp23;
                          tmp17 = tmp30;
                          tmp18 = tmp22;
                        }
                      }
                      num3 = num3 + 1;
                      tmp12 = tmp15;
                      tmp13 = tmp17;
                      tmp14 = tmp18;
                      if (num3 >= parts.length) {
                        break;
                      } else {
                        tmp21 = tmp17;
                        tmp22 = tmp18;
                        tmp12 = tmp15;
                        tmp13 = tmp17;
                        tmp14 = tmp18;
                        tmp23 = tmp16;
                        if (!tmp16) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff = diff - 1;
                tmp7 = tmp12;
                tmp8 = tmp13;
                tmp9 = tmp14;
              } while (diff >= 0);
            }
            const str15 = obj.safeStringify(cloneResult, 2);
            const str16 = obj.safeStringify(cloneResult, 2).replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, (arg0, arg1) => "\" " + str + "[" + arg1 + "]" + str3);
            const str17 = obj.safeStringify(cloneResult, 2).replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, (arg0, arg1) => "\" " + str + "[" + arg1 + "]" + str3).replace(/\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g, (arg0, arg1, arg2) => str2 + "\"" + arg1 + "\"" + str3 + str + " [" + arg2 + "]: -- missing --" + str3);
            let text3 = `${obj.safeStringify(cloneResult, 2).replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, (arg0, arg1) => "\" " + str + "[" + arg1 + "]" + str3).replace(/\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g, (arg0, arg1, arg2) => str2 + "\"" + arg1 + "\"" + str3 + str + " [" + arg2 + "]: -- missing --" + str3).replace(/\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g, (arg0, arg1, arg2) => "\n" + arg2 + " " + str + "[" + arg1 + "]" + str3).replace(/"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g, (arg0, arg1) => arg1)}
          ${str}`;
            let num5 = 0;
            let tmp26 = text3;
            if (0 < self.details.length) {
              do {
                text3 = text3 + "\n[" + (num5 + 1) + "] " + self.details[num5].message;
                num5 = num5 + 1;
                tmp26 = text3;
                length = self.details.length;
              } while (num5 < length);
            }
            return tmp26 + str3;
          }
        };
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if ("function" === typeof Symbol) {
            const _Symbol2 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol3 = Symbol;
              let str2 = "symbol";
            }
            return str2;
          }
        }
        str2 = typeof arg0;
      };
    },
    (arg0, arg1) => {
      let obj = { root: "value", key: "\"{{!key}}\" ", messages: { wrapArrays: true }, any: { unknown: "is not allowed", invalid: "contains an invalid value", empty: "is not allowed to be empty", required: "is required", allowOnly: "must be one of {{valids}}", default: "threw an error when running default method" }, alternatives: { base: "not matching any of the allowed alternatives" }, array: { base: "must be an array", includes: "at position {{pos}} does not match any of the allowed types", includesSingle: "single value of \"{{!key}}\" does not match any of the allowed types", includesOne: "at position {{pos}} fails because {{reason}}", includesOneSingle: "single value of \"{{!key}}\" fails because {{reason}}", includesRequiredUnknowns: "does not contain {{unknownMisses}} required value(s)", includesRequiredKnowns: "does not contain {{knownMisses}}", includesRequiredBoth: "does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)", excludes: "at position {{pos}} contains an excluded value", excludesSingle: "single value of \"{{!key}}\" contains an excluded value", min: "must contain at least {{limit}} items", max: "must contain less than or equal to {{limit}} items", length: "must contain {{limit}} items", ordered: "at position {{pos}} fails because {{reason}}", orderedLength: "at position {{pos}} fails because array must contain at most {{limit}} items", sparse: "must not be a sparse array", unique: "position {{pos}} contains a duplicate value" }, boolean: { base: "must be a boolean" }, binary: { base: "must be a buffer or a string", min: "must be at least {{limit}} bytes", max: "must be less than or equal to {{limit}} bytes", length: "must be {{limit}} bytes" } };
      obj = { base: "must be a number of milliseconds or valid date string", format: "must be a string with one of the following formats {{format}}", strict: "must be a valid date", min: "must be larger than or equal to \"{{limit}}\"", max: "must be less than or equal to \"{{limit}}\"", isoDate: "must be a valid ISO 8601 date", timestamp: { javascript: "must be a valid timestamp or number of milliseconds", unix: "must be a valid timestamp or number of seconds" }, ref: "references \"{{ref}}\" which is not a date" };
      obj.date = obj;
      obj.function = { base: "must be a Function", arity: "must have an arity of {{n}}", minArity: "must have an arity greater or equal to {{n}}", maxArity: "must have an arity lesser or equal to {{n}}", ref: "must be a Joi reference" };
      obj.lazy = { base: "!!schema error: lazy schema must be set", schema: "!!schema error: lazy schema function must return a schema" };
      obj = { base: "must be an object", child: "!!child \"{{!child}}\" fails because {{reason}}", min: "must have at least {{limit}} children", max: "must have less than or equal to {{limit}} children", length: "must have {{limit}} children", allowUnknown: "!!\"{{!child}}\" is not allowed", with: "missing required peer \"{{peer}}\"", without: "conflict with forbidden peer \"{{peer}}\"", missing: "must contain at least one of {{peers}}", xor: "contains a conflict between exclusive peers {{peers}}", or: "must contain at least one of {{peers}}", and: "contains {{present}} without its required peers {{missing}}", nand: "!!\"{{main}}\" must not exist simultaneously with {{peers}}", assert: "!!\"{{ref}}\" validation failed because \"{{ref}}\" failed to {{message}}", rename: { multiple: "cannot rename child \"{{from}}\" because multiple renames are disabled and another key was already renamed to \"{{to}}\"", override: "cannot rename child \"{{from}}\" because override is disabled and target \"{{to}}\" exists" }, type: "must be an instance of \"{{type}}\"", schema: "must be a Joi instance" };
      obj.object = obj;
      obj.number = { base: "must be a number", min: "must be larger than or equal to {{limit}}", max: "must be less than or equal to {{limit}}", less: "must be less than {{limit}}", greater: "must be greater than {{limit}}", float: "must be a float or double", integer: "must be an integer", negative: "must be a negative number", positive: "must be a positive number", precision: "must have no more than {{limit}} decimal places", ref: "references \"{{ref}}\" which is not a number", multiple: "must be a multiple of {{multiple}}" };
      const obj1 = { base: "must be a string", min: "length must be at least {{limit}} characters long", max: "length must be less than or equal to {{limit}} characters long", length: "length must be {{limit}} characters long", alphanum: "must only contain alpha-numeric characters", token: "must only contain alpha-numeric and underscore characters", regex: null, email: "must be a valid email", uri: "must be a valid uri", uriRelativeOnly: "must be a valid relative uri", uriCustomScheme: "must be a valid uri with a scheme matching the {{scheme}} pattern", isoDate: "must be a valid ISO 8601 date", guid: "must be a valid GUID", hex: "must only contain hexadecimal characters", base64: "must be a valid base64 string", hostname: "must be a valid hostname", lowercase: "must only contain lowercase characters", uppercase: "must only contain uppercase characters", trim: "must not have leading or trailing whitespace", creditCard: "must be a credit card", ref: "references \"{{ref}}\" which is not a number", ip: "must be a valid ip address with a {{cidr}} CIDR", ipVersion: "must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR" };
      const obj2 = { base: "with value \"{{!value}}\" fails to match the required pattern: {{pattern}}", name: "with value \"{{!value}}\" fails to match the {{name}} pattern", invert: { base: "with value \"{{!value}}\" matches the inverted pattern: {{pattern}}", name: "with value \"{{!value}}\" matches the inverted {{name}} pattern" } };
      obj1.regex = obj2;
      obj.string = obj1;
      arg1.errors = obj;
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg2;
      let fn = (arg0) => {
        let closure_0 = arg0;
        if ("function" === typeof Symbol) {
          let _Symbol = Symbol;
          if ("symbol" === typeof Symbol.iterator) {
            let fn = (arg0) => typeof arg0;
          }
          let closure_2 = fn(15);
          closure_0.exports = (() => {
            class Set {
              constructor() {
                if (this instanceof Set) {
                  tmp._set = [];
                  return;
                } else {
                  tmp2 = globalThis;
                  _TypeError = TypeError;
                  prototype = TypeError.prototype;
                  tmp3 = new.target;
                  str = "Cannot call a class as a function";
                  tmp4 = new.target;
                  typeError = new TypeError("Cannot call a class as a function");
                  tmp6 = typeError;
                  throw typeError;
                }
              }
              add(arg0, arg1) {
                self = this;
                if (!outer1_2.isRef(arg0)) {
                  flag = false;
                  tmp = self;
                  tmp2 = arg0;
                  tmp3 = null;
                  tmp4 = null;
                  if (self.has(arg0, null, null, false)) {
                    return;
                  }
                }
                if (undefined !== arg1) {
                  tmp5 = outer1_2;
                  arr = outer1_2.push(arg1, arg0);
                }
                _set = self._set;
                arr1 = _set.push(arg0);
                return self;
              }
              merge(arg0, arg1) {
                self = this;
                num = 0;
                if (0 < arg0._set.length) {
                  do {
                    addResult = self.add(arg0._set[num]);
                    num = num + 1;
                    length = arg0._set.length;
                  } while (num < length);
                }
                num2 = 0;
                if (0 < arg1._set.length) {
                  do {
                    removeResult = self.remove(arg1._set[num2]);
                    num2 = num2 + 1;
                    length2 = arg1._set.length;
                  } while (num2 < length2);
                }
                return self;
              }
              remove(arg0) {
                closure_0 = arg0;
                _set = this._set;
                this._set = _set.filter((arg0) => closure_0 !== arg0);
                return this;
              }
              has(arg0, arg1, arg2, arg3) {
                self = this;
                num = 0;
                if (0 < this._set.length) {
                  while (true) {
                    tmp2 = self._set[num];
                    isRefResult = arg1;
                    if (arg1) {
                      tmp4 = outer1_2;
                      isRefResult = outer1_2.isRef(tmp2);
                    }
                    tmp2Result = tmp2;
                    if (isRefResult) {
                      tmp6 = arg1.reference || arg1.parent;
                      tmp2Result = tmp2(tmp6, arg2);
                    }
                    _Array = Array;
                    arr = tmp2Result;
                    if (!Array.isArray(tmp2Result)) {
                      items = [];
                      items[0] = tmp2Result;
                      arr = items;
                    }
                    num2 = 0;
                    if (0 < arr.length) {
                      while (true) {
                        str = arr[num2];
                        str2 = "undefined";
                        if (undefined !== arg0) {
                          tmp7 = outer1_1;
                          str2 = outer1_1(arg0);
                        }
                        str3 = "undefined";
                        if (undefined !== str) {
                          tmp8 = outer1_1;
                          str3 = outer1_1(str);
                        }
                        if (str2 === str3) {
                          if (arg0 === str) {
                            break;
                          } else {
                            _Date2 = Date;
                            if (arg0 instanceof Date) {
                              _Date = Date;
                              if (str instanceof Date) {
                                time = arg0.getTime();
                                if (time === str.getTime()) {
                                  break;
                                }
                              }
                              flag = true;
                              return true;
                            }
                            if (arg3) {
                              if ("string" === tmp) {
                                formatted = arg0.toLowerCase();
                                if (formatted === str.toLowerCase()) {
                                  break;
                                }
                              }
                              break;
                            }
                            tmp11 = Set;
                            if (Set.isBuffer(arg0)) {
                              tmp12 = Set;
                              if (Set.isBuffer(str)) {
                                if (arg0.length === str.length) {
                                  str = arg0.toString("binary");
                                  if (str === str.toString("binary")) {
                                    break;
                                  }
                                }
                                break;
                              }
                            }
                          }
                        }
                        num2 = num2 + 1;
                        tmp14 = str;
                        continue;
                      }
                    }
                    num = num + 1;
                  }
                }
                return false;
              }
              values(arg0) {
                self = this;
                if (arg0) {
                  if (arg0.stripUndefined) {
                    items = [];
                    for (let num = 0; num < self._set.length; num = num + 1) {
                      tmp = self._set[num];
                      if (undefined !== tmp) {
                        arr = items.push(tmp);
                      }
                    }
                    return items;
                  }
                }
                _set = self._set;
                return _set.slice();
              }
              slice() {
                tmp = new Set();
                _set = this._set;
                tmp._set = _set.slice();
                return tmp;
              }
              concat(arg0) {
                tmp = new Set();
                _set = this._set;
                tmp._set = _set.concat(arg0._set);
                return tmp;
              }
            }
            return Set;
          })();
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if ("function" === typeof Symbol) {
              const _Symbol2 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol3 = Symbol;
                let str2 = "symbol";
              }
              return str2;
            }
          }
          str2 = typeof arg0;
        };
      };
      fn.call(arg1, arg2(3).Buffer);
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg2;
      if ("function" === typeof Symbol) {
        let _Symbol = Symbol;
        if ("symbol" === typeof Symbol.iterator) {
          let fn = (arg0) => typeof arg0;
        }
        let closure_2 = arg2(2);
        let closure_3 = arg2(15);
        let obj = { any: null, date: arg2(20), string: arg2(21), number: arg2(26), boolean: arg2(27), alt: null, object: null };
        arg1.schema = (isJoi) => {
          let any = obj.any;
          if (!any) {
            const tmp3 = callback(14);
            const prototype = tmp3.prototype;
            any = new tmp3();
          }
          obj.any = any;
          let alt = obj.alt;
          if (!alt) {
            alt = callback(28);
          }
          obj.alt = alt;
          let object = obj.object;
          if (!object) {
            object = callback(29);
          }
          obj.object = object;
          if (null != isJoi) {
            let str = "undefined";
            if (undefined !== isJoi) {
              str = fn(isJoi);
            }
            if ("object" === str) {
              if (isJoi.isJoi) {
                let validResult = isJoi;
              } else {
                const _Array = Array;
                if (Array.isArray(isJoi)) {
                  const alt2 = obj.alt;
                  let tryResult = alt2.try(isJoi);
                } else {
                  const _RegExp = RegExp;
                  if (isJoi instanceof RegExp) {
                    const string2 = obj.string;
                    tryResult = string2.regex(isJoi);
                  } else {
                    const _Date = Date;
                    if (isJoi instanceof Date) {
                      tryResult = tmp23.date.valid(isJoi);
                      const date = tmp23.date;
                    } else {
                      object = tmp23.object;
                      tryResult = object.keys(isJoi);
                    }
                  }
                }
              }
            }
            return validResult;
          }
          if ("string" === typeof isJoi) {
            const string = obj.string;
            validResult = string.valid(isJoi);
          } else if ("number" === tmp11) {
            const number = obj.number;
            validResult = number.valid(isJoi);
          } else if ("boolean" === tmp11) {
            const boolean = obj.boolean;
            validResult = boolean.valid(isJoi);
          } else if (closure_3.isRef(isJoi)) {
            const any3 = obj.any;
            validResult = any3.valid(isJoi);
          } else {
            closure_2.assert(null === isJoi, "Invalid schema content:", isJoi);
            const any2 = obj.any;
            validResult = any2.valid(null);
          }
        };
        arg1.ref = (arg0) => {
          let obj = arg0;
          if (!closure_3.isRef(arg0)) {
            obj = closure_3.create(arg0);
          }
          return obj;
        };
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if ("function" === typeof Symbol) {
            const _Symbol2 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol3 = Symbol;
              let str2 = "symbol";
            }
            return str2;
          }
        }
        str2 = typeof arg0;
      };
    },
    (arg0, arg1, arg2) => {
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      let closure_1 = arg2(15);
      let closure_2 = arg2(2);
      let obj = { isoDate: /^(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/ };
      let tmp = arg2(14);
      obj.invalidDate = new Date("");
      let closure_0 = obj.isoDate.toString();
      obj.isIsoDate = (arg0) => {
        let tmp = arg0;
        if (arg0) {
          tmp = arg0.toString() === closure_0;
        }
        return tmp;
      };
      obj.Date = ((arg0) => {
        let closure_0 = arg0;
        class _class {
          constructor() {
            self = this;
            if (this instanceof _class) {
              tmp6 = closure_0;
              callResult = closure_0.call(self);
              if (self) {
                tmp13 = self;
                if (callResult) {
                  tmp14 = typeof callResult;
                  str3 = "object";
                  if ("object" === tmp14) {
                    tmp13 = callResult;
                  } else {
                    str4 = "function";
                    tmp13 = self;
                  }
                }
                str5 = "date";
                tmp13._type = "date";
                return tmp13;
              } else {
                tmp8 = globalThis;
                _ReferenceError = ReferenceError;
                prototype2 = ReferenceError.prototype;
                tmp9 = new.target;
                str2 = "this hasn't been initialised - super() hasn't been called";
                tmp10 = new.target;
                referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp12 = referenceError;
                throw referenceError;
              }
            } else {
              tmp = globalThis;
              _TypeError = TypeError;
              prototype = TypeError.prototype;
              tmp2 = new.target;
              str = "Cannot call a class as a function";
              tmp3 = new.target;
              typeError = new TypeError("Cannot call a class as a function");
              tmp5 = typeError;
              throw typeError;
            }
          }
          _base(arg0, arg1, arg2) {
            self = this;
            obj = {};
            convert = arg2.convert;
            if (convert) {
              tmp = outer1_3;
              _Date = outer1_3.Date;
              tmp2 = _Date;
              tmp3 = arg0;
              convert = _Date.toDate(arg0, self._flags.format, self._flags.timestamp, self._flags.multiplier);
            }
            if (!convert) {
              convert = arg0;
            }
            obj.value = convert;
            if (obj.value instanceof Date) {
              _isNaN = isNaN;
              value = obj.value;
              if (!isNaN(value.getTime())) {
                tmp4 = null;
                obj.errors = null;
              }
              return obj;
            }
            if (arg2.convert) {
              tmp9 = outer1_3;
              str2 = "isoDate";
              if (!outer1_3.isIsoDate(self._flags.format)) {
                str3 = "base";
                if (self._flags.timestamp) {
                  str4 = "timestamp.";
                  str3 = `timestamp.${self._flags.timestamp}`;
                }
                str2 = str3;
              }
              str5 = "date.";
              tmp10 = null;
              tmp11 = self;
              tmp12 = arg1;
              tmp13 = arg2;
              obj.errors = self.createError(`date.${str2}`, null, arg1, arg2);
            } else {
              str = "date.strict";
              tmp5 = null;
              tmp6 = self;
              tmp7 = arg1;
              tmp8 = arg2;
              obj.errors = self.createError("date.strict", null, arg1, arg2);
            }
            return;
          }
          static toDate(arg0, arg1, arg2, arg3) {
            if (arg0 instanceof Date) {
              return arg0;
            } else {
              tmp = typeof arg0;
              str = "string";
              isMatch = "string" === tmp;
              if (isMatch) {
                if (isMatch) {
                  obj = /^[+-]?\d+(\.\d+)?$/;
                  isMatch = obj.test(arg0);
                }
                parsed = arg0;
                if (isMatch) {
                  _parseFloat = parseFloat;
                  parsed = parseFloat(arg0);
                }
                if (arg1) {
                  tmp4 = outer1_3;
                  if (outer1_3.isIsoDate(arg1)) {
                    if (arg1.test(parsed)) {
                      _Date3 = Date;
                      prototype3 = Date.prototype;
                      tmp12 = new.target;
                      tmp13 = new.target;
                      tmp14 = parsed;
                      invalidDate = new Date(parsed);
                    } else {
                      tmp11 = outer1_3;
                      invalidDate = outer1_3.invalidDate;
                    }
                    tmp15 = invalidDate;
                  }
                }
                tmp5 = arg2;
                if (arg2) {
                  if (arg3) {
                    _Date2 = Date;
                    prototype2 = Date.prototype;
                    tmp9 = new.target;
                    tmp10 = new.target;
                    date = new Date(parsed * arg3);
                  }
                  _isNaN = isNaN;
                  if (!isNaN(date.getTime())) {
                    return date;
                  }
                }
                _Date = Date;
                prototype = Date.prototype;
                tmp6 = new.target;
                tmp7 = new.target;
                tmp8 = parsed;
                date = new Date(parsed);
              } else {
                str2 = "number";
                if ("number" === tmp) {
                  _isNaN2 = isNaN;
                  if (!isNaN(arg0)) {
                    _isFinite = isFinite;
                  }
                }
              }
              tmp16 = null;
              return null;
            }
          }
          iso() {
            cloneResult = this.clone();
            cloneResult._flags.format = outer1_3.isoDate;
            return cloneResult;
          }
          timestamp(arg0) {
            str = arg0;
            self = this;
            if (!arg0) {
              str = "javascript";
            }
            items = ["javascript", "unix"];
            index = items.indexOf(str);
            assertResult = outer1_2.assert(-1 !== index, `"type" must be one of "${arr.join("\", \"")}"`);
            cloneResult = self.clone();
            cloneResult._flags.timestamp = str;
            num = 1;
            if ("unix" === str) {
              num = 1000;
            }
            cloneResult._flags.multiplier = num;
            return cloneResult;
          }
          _isIsoDate(arg0) {
            isoDate = outer1_3.isoDate;
            return isoDate.test(arg0);
          }
        }
        _inherits(_class, arg0);
        return _class;
      })(tmp);
      obj.compare = (arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        return function(closure_0) {
          let self = this;
          let tmp = "now" === closure_0;
          const isRefResult = tmp.isRef(closure_0);
          if (!tmp) {
            tmp = isRefResult;
          }
          let tmp3 = closure_0;
          if (!tmp) {
            let _Date = outer1_3.Date;
            let toDateResult = _Date.toDate(closure_0);
            closure_0 = toDateResult;
            tmp3 = toDateResult;
          }
          outer1_2.assert(tmp3, "Invalid date format");
          return self._test(closure_0, tmp3, function(arg0, reference, closure_2) {
            let error = arg0;
            const self = this;
            if (tmp) {
              const _Date2 = Date;
              let timestamp = Date.now();
            } else if (closure_2) {
              const _Date = outer2_3.Date;
              let parent = reference.reference;
              if (!parent) {
                parent = reference.parent;
              }
              const toDateResult = _Date.toDate(time(parent, closure_2));
              if (toDateResult) {
                timestamp = toDateResult.getTime();
              } else {
                let obj = { ref: time.key };
                return self.createError("date.ref", obj, reference, closure_2);
              }
              const tmp5 = time;
            } else {
              timestamp = time.getTime();
            }
            if (!tmp(error.getTime(), timestamp)) {
              const text = `date.${closure_0}`;
              obj = {};
              const _Date3 = Date;
              const date = new Date(tmp12);
              obj.limit = date;
              error = self.createError(`date.${closure_0}`, obj, reference, closure_2);
            }
            return error;
          });
        };
      };
      obj.Date.prototype.min = obj.compare("min", (arg0, arg1) => arg0 >= arg1);
      obj.Date.prototype.max = obj.compare("max", (arg0, arg1) => arg0 <= arg1);
      let date = new Date("");
      let str = obj.isoDate;
      module.exports = new obj.Date();
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg2;
      let fn = (arg0) => {
        let closure_0 = arg0;
        function _inherits(value, arr) {
          if ("function" !== typeof arr) {
            if (null !== arr) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
              throw typeError;
            }
          }
          let prototype = arr;
          if (arr) {
            prototype = arr.prototype;
          }
          const obj = { value, enumerable: false, writable: true, configurable: true };
          value.prototype = Object.create(prototype, { constructor: obj });
          if (arr) {
            const _Object = Object;
            const _Object2 = Object;
            if (Object.setPrototypeOf) {
              _Object2.setPrototypeOf(value, arr);
            } else {
              const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
              for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
                let tmp3 = ownPropertyNames[num];
                let _Object3 = Object;
                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
                let configurable = ownPropertyDescriptor;
                if (ownPropertyDescriptor) {
                  configurable = ownPropertyDescriptor.configurable;
                }
                if (configurable) {
                  configurable = undefined === value[tmp3];
                }
                if (configurable) {
                  let _Object4 = Object;
                  let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
                }
              }
            }
          }
        }
        if ("function" === typeof Symbol) {
          let _Symbol = Symbol;
          if ("symbol" === typeof Symbol.iterator) {
            let fn = (arg0) => typeof arg0;
          }
          let closure_2 = fn(8);
          let closure_3 = fn(2);
          let closure_4 = fn(22);
          let closure_5 = fn(15);
          let closure_6 = fn(20);
          let obj = fn(23);
          const obj2 = fn(25);
          obj = {};
          obj.uriRegex = obj.createUriRegex();
          obj.ipRegex = obj2.createIpRegex(["ipv4", "ipv6", "ipvfuture"], "optional");
          obj.String = ((arg0) => {
            let closure_0 = arg0;
            class _class {
              constructor() {
                self = this;
                if (this instanceof _class) {
                  tmp6 = closure_0;
                  callResult = closure_0.call(self);
                  if (self) {
                    tmp13 = self;
                    if (callResult) {
                      tmp14 = typeof callResult;
                      str3 = "object";
                      if ("object" === tmp14) {
                        tmp13 = callResult;
                      } else {
                        str4 = "function";
                        tmp13 = self;
                      }
                    }
                    str5 = "string";
                    tmp13._type = "string";
                    _invalids = tmp13._invalids;
                    str6 = "";
                    addResult = _invalids.add("");
                    return tmp13;
                  } else {
                    tmp8 = globalThis;
                    _ReferenceError = ReferenceError;
                    prototype2 = ReferenceError.prototype;
                    tmp9 = new.target;
                    str2 = "this hasn't been initialised - super() hasn't been called";
                    tmp10 = new.target;
                    referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    tmp12 = referenceError;
                    throw referenceError;
                  }
                } else {
                  tmp = globalThis;
                  _TypeError = TypeError;
                  prototype = TypeError.prototype;
                  tmp2 = new.target;
                  str = "Cannot call a class as a function";
                  tmp3 = new.target;
                  typeError = new TypeError("Cannot call a class as a function");
                  tmp5 = typeError;
                  throw typeError;
                }
              }
              _base(arg0, arg1, arg2) {
                self = this;
                substr = arg0;
                if ("string" === typeof arg0) {
                  substr = arg0;
                  if (arg2.convert) {
                    tmp2 = arg0;
                    if (!self._flags.case) {
                      trimmed = arg0;
                      if (self._flags.trim) {
                        trimmed = arg0.trim();
                      }
                      arr = trimmed;
                      if (self._inner.replacements) {
                        num = 0;
                        str2 = trimmed;
                        arr = trimmed;
                        if (0 < self._inner.replacements.length) {
                          do {
                            tmp6 = self._inner.replacements[num];
                            str2 = str2.replace(tmp6.pattern, tmp6.replacement);
                            num = num + 1;
                            arr = str2;
                            length = self._inner.replacements.length;
                          } while (num < length);
                        }
                      }
                      substr = arr;
                      if (self._flags.truncate) {
                        num2 = 0;
                        str3 = "max";
                        num3 = 0;
                        substr = arr;
                        if (0 < self._tests.length) {
                          tmp7 = self._tests[num3];
                          while ("max" !== tmp7.name) {
                            num3 = num3 + 1;
                            substr = arr;
                          }
                          substr = arr.slice(0, tmp7.arg);
                        }
                      }
                    } else {
                      str = "upper";
                      if ("upper" === self._flags.case) {
                        toLocaleUpperCaseResult = arg0.toLocaleUpperCase();
                      } else {
                        toLocaleUpperCaseResult = arg0.toLocaleLowerCase();
                      }
                      tmp4 = toLocaleUpperCaseResult;
                    }
                  }
                }
                obj = {};
                obj.value = substr;
                error = null;
                if ("string" !== typeof substr) {
                  obj = {};
                  obj.value = substr;
                  str4 = "string.base";
                  tmp9 = arg1;
                  tmp10 = self;
                  tmp11 = obj;
                  tmp12 = arg2;
                  error = self.createError("string.base", obj, arg1, arg2);
                }
                obj.errors = error;
                return obj;
              }
              insensitive() {
                cloneResult = this.clone();
                cloneResult._flags.insensitive = true;
                return cloneResult;
              }
              creditCard() {
                return this._test("creditCard", undefined, function(str, closure_12, closure_2) {
                  let tmp4;
                  const self = this;
                  let diff = tmp - 1;
                  let num = 1;
                  let num2 = 0;
                  let num3 = 0;
                  if (+str.length) {
                    do {
                      let result = str.charAt(diff) * num;
                      num2 = num2 + (result - 9 * (result > 9));
                      num = num ^ 3;
                      tmp4 = +diff;
                      diff = tmp4 - 1;
                      num3 = num2;
                    } while (tmp4);
                  }
                  if (num3 % 10 !== 0) {
                    const obj = { value: str };
                    let error = self.createError("string.creditCard", obj, closure_12, closure_2);
                  } else {
                    error = str;
                  }
                  return error;
                });
              }
              regex(arg0, arg1) {
                self = this;
                assertResult = outer1_3.assert(arg0 instanceof RegExp, "pattern must be a RegExp");
                obj = {};
                str = undefined;
                if (arg0.ignoreCase) {
                  str = "i";
                }
                regExp = new RegExp(arg0.source, str);
                obj.pattern = regExp;
                c0 = obj;
                if ("string" === typeof arg1) {
                  obj.name = arg1;
                } else {
                  str2 = "undefined";
                  if (undefined !== arg1) {
                    tmp3 = _class;
                    str2 = _class(arg1);
                  }
                  str3 = "object";
                  if ("object" === str2) {
                    obj.invert = arg1.invert;
                    if (arg1.name) {
                      obj.name = arg1.name;
                    }
                  }
                }
                str4 = "";
                if (obj.invert) {
                  str4 = ".invert";
                }
                items = ["string.regex"];
                items[1] = str4;
                str5 = ".base";
                if (obj.name) {
                  str5 = ".name";
                }
                items[2] = str5;
                join = items.join("");
                return self._test("regex", obj, function(value, closure_12, closure_2) {
                  const self = this;
                  const pattern = obj.pattern;
                  let error = value;
                  if (!(pattern.test(value) ^ obj.invert)) {
                    obj = {};
                    obj.name = obj.name;
                    obj.pattern = obj.pattern;
                    obj.value = value;
                    error = self.createError(closure_1, obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              alphanum() {
                return this._test("alphanum", undefined, function(value, closure_12, closure_2) {
                  const self = this;
                  let obj = /^[a-zA-Z0-9]+$/;
                  let error = value;
                  if (!obj.test(value)) {
                    obj = { value };
                    error = self.createError("string.alphanum", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              token() {
                return this._test("token", undefined, function(value, closure_12, closure_2) {
                  const self = this;
                  let obj = /^\w+$/;
                  let error = value;
                  if (!obj.test(value)) {
                    obj = { value };
                    error = self.createError("string.token", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              email(arg0) {
                self = this;
                closure_0 = arg0;
                if (arg0) {
                  str = "undefined";
                  tmp = outer1_3;
                  if (undefined !== arg0) {
                    tmp2 = _class;
                    str = _class(arg0);
                  }
                  str2 = "object";
                  str3 = "email options must be an object";
                  assertResult = outer1_3.assert("object" === str, "email options must be an object");
                  tmp4 = outer1_3;
                  str4 = "checkDNS option is not supported";
                  assertResult1 = outer1_3.assert(undefined === arg0.checkDNS, "checkDNS option is not supported");
                  tmp7 = undefined === arg0.tldWhitelist;
                  tmp6 = outer1_3;
                  if (!tmp7) {
                    tmp8 = _class;
                    tmp7 = "object" === _class(arg0.tldWhitelist);
                  }
                  str5 = "tldWhitelist must be an array or object";
                  assertResult2 = outer1_3.assert(tmp7, "tldWhitelist must be an array or object");
                  tmp11 = undefined === arg0.minDomainAtoms;
                  tmp10 = outer1_3;
                  if (!tmp11) {
                    tmp12 = outer1_3;
                    isIntegerResult = outer1_3.isInteger(arg0.minDomainAtoms);
                    if (isIntegerResult) {
                      num = 0;
                      isIntegerResult = arg0.minDomainAtoms > 0;
                    }
                    tmp11 = isIntegerResult;
                  }
                  str6 = "minDomainAtoms must be a positive integer";
                  assertResult3 = outer1_3.assert(tmp11, "minDomainAtoms must be a positive integer");
                  tmp16 = undefined === arg0.errorLevel;
                  tmp15 = outer1_3;
                  if (!tmp16) {
                    str7 = "boolean";
                    tmp16 = "boolean" === typeof arg0.errorLevel;
                  }
                  if (!tmp16) {
                    tmp17 = outer1_3;
                    isIntegerResult1 = outer1_3.isInteger(arg0.errorLevel);
                    if (isIntegerResult1) {
                      num2 = 0;
                      isIntegerResult1 = arg0.errorLevel >= 0;
                    }
                    tmp16 = isIntegerResult1;
                  }
                  str8 = "errorLevel must be a non-negative integer or boolean";
                  assertResult4 = outer1_3.assert(tmp16, "errorLevel must be a non-negative integer or boolean");
                }
                return self._test("email", arg0, function(value, closure_12, closure_2) {
                  const self = this;
                  const validateResult = outer2_4.validate(value, closure_0);
                  if (true !== validateResult) {
                    if (0 !== tmp2) {
                      const obj = { value };
                      const error = self.createError("string.email", obj, closure_12, closure_2);
                    }
                  }
                  return value;
                });
              }
              ip(arg0) {
                obj = arg0;
                self = this;
                closure_0 = arg0;
                cidr = outer1_9.ipRegex;
                if (!arg0) {
                  obj = {};
                }
                closure_0 = obj;
                str = "undefined";
                tmp = outer1_3;
                if (undefined !== obj) {
                  tmp2 = _class;
                  str = _class(obj);
                }
                assertResult = outer1_3.assert("object" === str, "options must be an object");
                if (obj.cidr) {
                  tmp4 = outer1_3;
                  str3 = "string";
                  str4 = "cidr must be a string";
                  assertResult1 = outer1_3.assert("string" === typeof obj.cidr, "cidr must be a string");
                  str5 = obj.cidr;
                  obj.cidr = str5.toLowerCase();
                  tmp6 = outer1_3;
                  tmp7 = outer1_8;
                  tmp9 = globalThis;
                  _Object = Object;
                  tmp10 = outer1_8;
                  tmp8 = obj.cidr in outer1_8.cidrs;
                  keys = Object.keys(outer1_8.cidrs);
                  str6 = ", ";
                  str7 = "cidr must be one of ";
                  assertResult2 = outer1_3.assert(tmp8, `cidr must be one of ${obj2.join(", ")}`);
                  version = obj.version;
                  if (!version) {
                    str8 = "optional";
                    version = "optional" === obj.cidr;
                  }
                  if (!version) {
                    tmp12 = outer1_8;
                    cidr = outer1_8.createIpRegex(["ipv4", "ipv6", "ipvfuture"], obj.cidr);
                  }
                } else {
                  str2 = "optional";
                  obj.cidr = "optional";
                }
                assert = undefined;
                if (obj.version) {
                  tmp13 = globalThis;
                  _Array = Array;
                  if (!Array.isArray(obj.version)) {
                    items = [];
                    items[0] = obj.version;
                    obj.version = items;
                  }
                  tmp14 = outer1_3;
                  num = 1;
                  str9 = "version must have at least 1 version specified";
                  assertResult3 = outer1_3.assert(obj.version.length >= 1, "version must have at least 1 version specified");
                  items1 = [];
                  assert = items1;
                  num2 = 0;
                  str10 = "version at position ";
                  str11 = "string";
                  str12 = " must be a string";
                  str13 = ", ";
                  str14 = " must be one of ";
                  if (0 < obj.version.length) {
                    do {
                      str15 = obj.version[num2];
                      tmp16 = outer1_3;
                      text = `version at position ${num2}`;
                      assertResult4 = outer1_3.assert("string" === typeof str15, `version at position ${num2}` + " must be a string");
                      formatted = str15.toLowerCase();
                      tmp20 = outer1_3;
                      tmp21 = outer1_8;
                      _Object2 = Object;
                      tmp22 = outer1_8;
                      keys1 = Object.keys(outer1_8.versions);
                      assertResult5 = outer1_3.assert(outer1_8.versions[formatted], `version at position ${num2}` + " must be one of " + keys1.join(", "));
                      arr = items1.push(formatted);
                      num2 = num2 + 1;
                      length = obj.version.length;
                    } while (num2 < length);
                  }
                  tmp25 = outer1_3;
                  uniqueResult = outer1_3.unique(items1);
                  assert = uniqueResult;
                  tmp27 = outer1_8;
                  cidr = outer1_8.createIpRegex(uniqueResult, obj.cidr);
                }
                return self._test("ip", obj, function(arg0, closure_12, closure_2) {
                  let cidr = arg0;
                  const self = this;
                  if (regex.test(arg0)) {
                    return cidr;
                  } else {
                    const createError = self.createError;
                    if (items1) {
                      let obj = { value: cidr };
                      cidr = obj.cidr;
                      obj.cidr = cidr;
                      obj.version = items1;
                      let error = createError("string.ipVersion", obj, closure_12, closure_2);
                    } else {
                      obj = { value: cidr };
                      obj.cidr = obj.cidr;
                      error = createError("string.ip", obj, closure_12, closure_2);
                    }
                  }
                });
              }
              uri(arg0) {
                self = this;
                escapeRegex = "";
                c1 = false;
                createUriRegex = outer1_9.uriRegex;
                str = "";
                flag = false;
                flag2 = false;
                if (arg0) {
                  str2 = "undefined";
                  tmp = outer1_3;
                  if (undefined !== arg0) {
                    tmp2 = _class;
                    str2 = _class(arg0);
                  }
                  str3 = "object";
                  str4 = "options must be an object";
                  assertResult = outer1_3.assert("object" === str2, "options must be an object");
                  str5 = "";
                  if (arg0.scheme) {
                    tmp5 = globalThis;
                    _RegExp = RegExp;
                    isArray = arg0.scheme instanceof RegExp;
                    tmp4 = outer1_3;
                    if (!isArray) {
                      str6 = "string";
                      isArray = "string" === typeof arg0.scheme;
                    }
                    if (!isArray) {
                      _Array = Array;
                      isArray = Array.isArray(arg0.scheme);
                    }
                    str7 = "scheme must be a RegExp, String, or Array";
                    assertResult1 = outer1_3.assert(isArray, "scheme must be a RegExp, String, or Array");
                    _Array2 = Array;
                    if (!Array.isArray(arg0.scheme)) {
                      items = [];
                      items[0] = arg0.scheme;
                      arg0.scheme = items;
                    }
                    tmp8 = outer1_3;
                    num = 1;
                    str8 = "scheme must have at least 1 scheme specified";
                    assertResult2 = outer1_3.assert(arg0.scheme.length >= 1, "scheme must have at least 1 scheme specified");
                    num2 = 0;
                    str9 = " must be a valid scheme";
                    str10 = "|";
                    str11 = "scheme at position ";
                    str12 = " must be a RegExp or String";
                    str13 = "string";
                    str14 = "";
                    str5 = "";
                    if (0 < arg0.scheme.length) {
                      do {
                        tmp10 = arg0.scheme[num2];
                        _RegExp2 = RegExp;
                        tmp12 = tmp10 instanceof RegExp;
                        tmp11 = outer1_3;
                        if (!tmp12) {
                          tmp12 = "string" === typeof tmp10;
                        }
                        text = `scheme at position ${num2}`;
                        assertResult3 = outer1_3.assert(tmp12, `${`scheme at position ${num2}`} must be a RegExp or String`);
                        str15 = "";
                        if (str14) {
                          str15 = "|";
                        }
                        sum = str14 + str15;
                        escapeRegex = sum;
                        _RegExp3 = RegExp;
                        if (tmp10 instanceof RegExp) {
                          sum1 = sum + tmp10.source;
                          escapeRegex = sum1;
                          sum2 = sum1;
                        } else {
                          tmp16 = outer1_3;
                          obj = /[a-zA-Z][a-zA-Z0-9+-\.]*/;
                          assertResult4 = outer1_3.assert(obj.test(tmp10), `${tmp13} must be a valid scheme`);
                          tmp18 = outer1_3;
                          sum2 = sum + outer1_3.escapeRegex(tmp10);
                          escapeRegex = sum2;
                        }
                        num2 = num2 + 1;
                        str14 = sum2;
                        str5 = sum2;
                      } while (num2 < arg0.scheme.length);
                    }
                  }
                  flag3 = false;
                  if (arg0.allowRelative) {
                    flag3 = true;
                  }
                  str = str5;
                  flag = flag3;
                  flag2 = false;
                  if (arg0.relativeOnly) {
                    flag4 = true;
                    c1 = true;
                    str = str5;
                    flag = flag3;
                    flag2 = true;
                  }
                }
                tmp21 = str;
                if (!str) {
                  tmp21 = flag;
                }
                if (!tmp21) {
                  tmp21 = flag2;
                }
                if (tmp21) {
                  tmp22 = outer1_7;
                  createUriRegex = outer1_7.createUriRegex(str, flag, flag2);
                }
                return self._test("uri", arg0, function(value, closure_12, closure_2) {
                  const self = this;
                  if (regex.test(value)) {
                    return value;
                  } else if (c1) {
                    let obj = { value };
                    let error = self.createError("string.uriRelativeOnly", obj, closure_12, closure_2);
                  } else {
                    const createError = self.createError;
                    if (c0) {
                      obj = { scheme: c0, value };
                      error = createError("string.uriCustomScheme", obj, closure_12, closure_2);
                    } else {
                      obj = { value };
                      error = createError("string.uri", obj, closure_12, closure_2);
                    }
                  }
                });
              }
              isoDate() {
                return this._test("isoDate", undefined, function(value, closure_12, closure_2) {
                  const self = this;
                  let error = value;
                  if (!outer2_6._isIsoDate(value)) {
                    const obj = { value };
                    error = self.createError("string.isoDate", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              guid(arg0) {
                self = this;
                closure_0 = { "{": "}", "[": "]", "(": ")", "": "" };
                obj = { uuidv1: "1", uuidv2: "2", uuidv3: "3", uuidv4: "4", uuidv5: "5" };
                _class = obj;
                items = [];
                closure_2 = items;
                if (arg0) {
                  if (arg0.version) {
                    tmp = globalThis;
                    _Array = Array;
                    if (!Array.isArray(arg0.version)) {
                      items1 = [];
                      items1[0] = arg0.version;
                      arg0.version = items1;
                    }
                    tmp2 = outer1_3;
                    num = 1;
                    str = "version must have at least 1 valid version specified";
                    assertResult = outer1_3.assert(arg0.version.length >= 1, "version must have at least 1 valid version specified");
                    num2 = 0;
                    str2 = "version at position ";
                    str3 = "string";
                    str4 = " must be a string";
                    str5 = ", ";
                    str6 = " must be one of ";
                    num3 = -1;
                    str7 = " must not be a duplicate.";
                    if (0 < arg0.version.length) {
                      do {
                        str8 = arg0.version[num2];
                        tmp4 = outer1_3;
                        text = `version at position ${num2}`;
                        assertResult1 = outer1_3.assert("string" === typeof str8, `version at position ${num2}` + " must be a string");
                        formatted = str8.toLowerCase();
                        tmp8 = outer1_3;
                        _Object = Object;
                        keys = Object.keys(obj);
                        assertResult2 = outer1_3.assert(obj[formatted], `version at position ${num2}` + " must be one of " + keys.join(", "));
                        tmp10 = outer1_3;
                        assertResult3 = outer1_3.assert(-1 === items.indexOf(formatted), `version at position ${num2}` + " must not be a duplicate.");
                        arr = items.push(formatted);
                        num2 = num2 + 1;
                        length = arg0.version.length;
                      } while (num2 < length);
                    }
                  }
                }
                re3 = /^([\[{\(]?)([0-9A-F]{8})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{12})([\]}\)]?)$/i;
                return self._test("guid", arg0, function(value, closure_12, closure_2) {
                  const self = this;
                  const match = regex.exec(value);
                  if (match) {
                    if (match[match[1]] !== match[11]) {
                      let obj = { value };
                      return self.createError("string.guid", obj, closure_12, closure_2);
                    } else {
                      if (match[3] === match[5]) {
                        if (match[3] === match[7]) {
                          if (match[3] === match[9]) {
                            if (items.length) {
                              if (items.some(() => { ... })) {
                                let obj1 = /[89AB]/i;
                              }
                              obj = { value };
                              return self.createError("string.guid", obj, closure_12, closure_2);
                            }
                            return value;
                          }
                        }
                      }
                      obj1 = { value };
                      return self.createError("string.guid", obj1, closure_12, closure_2);
                    }
                  } else {
                    obj = { value };
                    return self.createError("string.guid", obj, closure_12, closure_2);
                  }
                });
              }
              hex() {
                tmp = /^[a-f0-9]+$/i;
                re0 = tmp;
                return this._test("hex", tmp, function(value, closure_12, closure_2) {
                  const self = this;
                  let error = value;
                  if (!tmp.test(value)) {
                    const obj = { value };
                    error = self.createError("string.hex", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              base64() {
                tmp = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
                re0 = tmp;
                return this._test("base64", tmp, function(value, closure_12, closure_2) {
                  const self = this;
                  let error = value;
                  if (!tmp.test(value)) {
                    const obj = { value };
                    error = self.createError("string.base64", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              hostname() {
                re0 = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
                return this._test("hostname", undefined, function(value, closure_12, closure_2) {
                  const self = this;
                  if (value.length > 255) {
                    let error = value;
                    if (!outer2_2.isIPv6(value)) {
                      const obj = { value };
                      error = self.createError("string.hostname", obj, closure_12, closure_2);
                    }
                  } else {
                    error = value;
                  }
                  return error;
                });
              }
              lowercase() {
                _testResult = this._test("lowercase", undefined, function(toLocaleLowerCase, closure_12, convert) {
                  const self = this;
                  let error = toLocaleLowerCase;
                  if (!convert.convert) {
                    error = toLocaleLowerCase;
                    if (toLocaleLowerCase !== toLocaleLowerCase.toLocaleLowerCase()) {
                      const obj = { value: toLocaleLowerCase };
                      error = self.createError("string.lowercase", obj, closure_12, convert);
                    }
                  }
                  return error;
                });
                _testResult._flags.case = "lower";
                return _testResult;
              }
              uppercase() {
                _testResult = this._test("uppercase", undefined, function(toLocaleUpperCase, closure_12, convert) {
                  const self = this;
                  let error = toLocaleUpperCase;
                  if (!convert.convert) {
                    error = toLocaleUpperCase;
                    if (toLocaleUpperCase !== toLocaleUpperCase.toLocaleUpperCase()) {
                      const obj = { value: toLocaleUpperCase };
                      error = self.createError("string.uppercase", obj, closure_12, convert);
                    }
                  }
                  return error;
                });
                _testResult._flags.case = "upper";
                return _testResult;
              }
              trim() {
                _testResult = this._test("trim", undefined, function(str, closure_12, convert) {
                  const self = this;
                  let error = str;
                  if (!convert.convert) {
                    error = str;
                    if (str !== str.trim()) {
                      const obj = { value: str };
                      error = self.createError("string.trim", obj, closure_12, convert);
                    }
                  }
                  return error;
                });
                _testResult._flags.trim = true;
                return _testResult;
              }
              replace(arg0, arg1) {
                self = this;
                regExp = arg0;
                if ("string" === typeof arg0) {
                  tmp2 = globalThis;
                  _RegExp = RegExp;
                  tmp3 = outer1_3;
                  prototype = RegExp.prototype;
                  tmp4 = new.target;
                  str = "g";
                  tmp5 = new.target;
                  regExp = new RegExp(outer1_3.escapeRegex(arg0), "g");
                }
                assertResult = outer1_3.assert(regExp instanceof RegExp, "pattern must be a RegExp");
                assertResult1 = outer1_3.assert("string" === typeof arg1, "replacement must be a String");
                cloneResult = self.clone();
                if (!cloneResult._inner.replacements) {
                  cloneResult._inner.replacements = [];
                }
                replacements = cloneResult._inner.replacements;
                obj = {};
                obj.pattern = regExp;
                obj.replacement = arg1;
                arr = replacements.push(obj);
                return cloneResult;
              }
              truncate(arg0) {
                cloneResult = this.clone();
                tmp2 = undefined === arg0;
                if (!tmp2) {
                  tmp2 = arg0;
                }
                cloneResult._flags.truncate = tmp2;
                return cloneResult;
              }
            }
            _inherits(_class, arg0);
            return _class;
          })(fn(14));
          obj.compare = (arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            return function(closure_0) {
              let self = this;
              const encoding = closure_0;
              let closure_1 = arg1;
              const isRefResult = outer1_5.isRef(closure_0);
              let isIntegerResult = outer1_3.isInteger(closure_0);
              if (isIntegerResult) {
                isIntegerResult = closure_0 >= 0;
              }
              if (!isIntegerResult) {
                isIntegerResult = isRefResult;
              }
              outer1_3.assert(isIntegerResult, "limit must be a positive integer or reference");
              let isEncodingResult = !arg1;
              if (!isEncodingResult) {
                isEncodingResult = encoding.isEncoding(arg1);
              }
              outer1_3.assert(isEncodingResult, "Invalid encoding:", arg1);
              return self._test(encoding, closure_0, () => { ... });
            };
          };
          obj.String.prototype.min = obj.compare("min", (arg0, arg1, arg2) => {
            if (arg2) {
              let length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length >= arg1;
          });
          obj.String.prototype.max = obj.compare("max", (arg0, arg1, arg2) => {
            if (arg2) {
              let length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length <= arg1;
          });
          obj.String.prototype.length = obj.compare("length", (arg0, arg1, arg2) => {
            if (arg2) {
              let length = closure_0.byteLength(arg0, arg2);
            } else {
              length = arg0.length;
            }
            return length === arg1;
          });
          obj.String.prototype.uuid = obj.String.prototype.guid;
          let _String = obj.String;
          let prototype = _String.prototype;
          _String = new _String();
          closure_0.exports = _String;
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if ("function" === typeof Symbol) {
              const _Symbol2 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol3 = Symbol;
                let str2 = "symbol";
              }
              return str2;
            }
          }
          str2 = typeof arg0;
        };
      };
      fn.call(arg1, arg2(3).Buffer);
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg1;
      let closure_1 = arg2;
      let fn = (nextTick) => {
        let length;
        if ("function" === typeof Symbol) {
          let _Symbol = Symbol;
          if ("symbol" === typeof Symbol.iterator) {
            let fn = (arg0) => typeof arg0;
          }
          callback = callback(8);
          let obj = {};
          const _Object = Object;
          obj.hasOwn = Object.prototype.hasOwnProperty;
          let _Array = Array;
          obj.indexOf = Array.prototype.indexOf;
          obj.defaultThreshold = 16;
          obj.maxIPv6Groups = 8;
          obj.categories = { valid: 1, dnsWarn: 7, rfc5321: 15, cfws: 31, deprecated: 63, rfc5322: 127, error: 255 };
          obj.diagnoses = { valid: 0, dnsWarnNoMXRecord: 5, dnsWarnNoRecord: 6, rfc5321TLD: 9, rfc5321TLDNumeric: 10, rfc5321QuotedString: 11, rfc5321AddressLiteral: 12, cfwsComment: 17, cfwsFWS: 18, deprecatedLocalPart: 33, deprecatedFWS: 34, deprecatedQTEXT: 35, deprecatedQP: 36, deprecatedComment: 37, deprecatedCTEXT: 38, deprecatedIPv6: 39, deprecatedCFWSNearAt: 49, rfc5322Domain: 65, rfc5322TooLong: 66, rfc5322LocalTooLong: 67, rfc5322DomainTooLong: 68, rfc5322LabelTooLong: 69, rfc5322DomainLiteral: 70, rfc5322DomainLiteralOBSDText: 71, rfc5322IPv6GroupCount: 72, rfc5322IPv62x2xColon: 73, rfc5322IPv6BadCharacter: 74, rfc5322IPv6MaxGroups: 75, rfc5322IPv6ColonStart: 76, rfc5322IPv6ColonEnd: 77, errExpectingDTEXT: 129, errNoLocalPart: 130, errNoDomain: 131, errConsecutiveDots: 132, errATEXTAfterCFWS: 133, errATEXTAfterQS: 134, errATEXTAfterDomainLiteral: 135, errExpectingQPair: 136, errExpectingATEXT: 137, errExpectingQTEXT: 138, errExpectingCTEXT: 139, errBackslashEnd: 140, errDotStart: 141, errDotEnd: 142, errDomainHyphenStart: 143, errDomainHyphenEnd: 144, errUnclosedQuotedString: 145, errUnclosedComment: 146, errUnclosedDomainLiteral: 147, errFWSCRLFx2: 148, errFWSCRLFEnd: 149, errCRNoLF: 150, errUnknownTLD: 160, errDomainTooShort: 161 };
          obj.components = { localpart: 0, domain: 1, literal: 2, contextComment: 3, contextFWS: 4, contextQuotedString: 5, contextQuotedPair: 6 };
          if (undefined !== nextTick) {
            if (nextTick) {
              if ("function" === typeof nextTick.nextTick) {
                nextTick = nextTick.nextTick;
                let fn2 = nextTick.bind(nextTick);
              }
              obj.defer = fn2;
              obj.specials = (() => {
                let num2;
                const array = new Array(256);
                let num = 255;
                do {
                  array[num] = false;
                  num = num - 1;
                  num2 = 0;
                } while (num >= 0);
                do {
                  let charCodeAt = "()<>[]:;@\\,.\"".charCodeAt;
                  array["()<>[]:;@\\,.\"".charCodeAt(num2)] = true;
                  num2 = num2 + 1;
                } while (num2 < 13);
                return (arg0) => array[arg0];
              })();
              obj = { ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipV6: /^[a-fA-F\d]{0,4}$/ };
              obj.regex = obj;
              obj.checkIpV6 = (arr) => arr.every((arg0) => {
                const ipV6 = outer1_2.regex.ipV6;
                return ipV6.test(arg0);
              });
              obj.validDomain = (arg0, tldBlacklist) => {
                let num = tldBlacklist;
                const _Array = Array;
                if (tldBlacklist.tldBlacklist) {
                  let callResult = obj;
                  if (isArray(num.tldBlacklist)) {
                    const indexOf2 = callResult.indexOf;
                    callResult = indexOf2.call(num.tldBlacklist, arg0);
                    num = -1;
                    let tmp2 = -1 === callResult;
                  } else {
                    const hasOwn2 = callResult.hasOwn;
                    tmp2 = !hasOwn2.call(num.tldBlacklist, arg0);
                  }
                } else {
                  if (isArray(num.tldWhitelist)) {
                    const indexOf = arr.indexOf;
                    let callResult1 = -1 !== indexOf.call(num.tldWhitelist, arg0);
                  } else {
                    const hasOwn = arr.hasOwn;
                    callResult1 = hasOwn.call(num.tldWhitelist, arg0);
                  }
                  return callResult1;
                }
              };
              const fn3 = (arg0, arg1, arg2) => {
                let stack;
                let stack2;
                let stack3;
                let stack4;
                let stack5;
                let tmp23;
                let obj = arg1;
                let typeError = arg2;
                let callback = arg2;
                if (!arg1) {
                  obj = {};
                }
                if ("function" === typeof obj) {
                  callback = obj;
                  obj = {};
                  typeError = obj;
                }
                if ("function" !== typeof typeError) {
                  if (obj.checkDNS) {
                    typeError = globalThis;
                    const _TypeError4 = TypeError;
                    typeError = new.target;
                    typeError = new.target;
                    typeError = new TypeError("expected callback function for checkDNS option");
                    throw typeError;
                  } else {
                    callback = null;
                  }
                }
                let errorLevel;
                let valid;
                if ("number" === typeof obj.errorLevel) {
                  errorLevel = true;
                  valid = obj.errorLevel;
                } else {
                  errorLevel = obj.errorLevel;
                  valid = valid.diagnoses.valid;
                }
                if (obj.tldWhitelist) {
                  if ("string" === typeof obj.tldWhitelist) {
                    const items = [obj.tldWhitelist];
                    obj.tldWhitelist = items;
                  } else if ("object" !== callback(obj.tldWhitelist)) {
                    const _TypeError = TypeError;
                    const typeError1 = new TypeError("expected array or object tldWhitelist");
                    throw typeError1;
                  }
                }
                if (obj.tldBlacklist) {
                  if ("string" === typeof obj.tldBlacklist) {
                    const items1 = [obj.tldBlacklist];
                    obj.tldBlacklist = items1;
                  } else if ("object" !== callback(obj.tldBlacklist)) {
                    const _TypeError2 = TypeError;
                    const typeError2 = new TypeError("expected array or object tldBlacklist");
                    throw typeError2;
                  }
                }
                if (obj.minDomainAtoms) {
                  typeError = globalThis;
                  const _TypeError3 = TypeError;
                  typeError = new.target;
                  typeError = new.target;
                  typeError = new TypeError("expected positive integer minDomainAtoms");
                  throw typeError;
                }
                valid = valid.diagnoses.valid;
                function updateResult(errCRNoLF) {
                  if (errCRNoLF > closure_3) {
                    closure_3 = errCRNoLF;
                  }
                }
                obj = { now: valid.components.localpart, prev: valid.components.localpart, stack: items2 };
                items2 = [valid.components.localpart];
                const obj1 = { local: "", domain: "" };
                const obj2 = { locals: [""], domains: [""] };
                typeError = 0;
                let str7 = "";
                let num = 0;
                let num2 = 0;
                let num3 = 0;
                let flag2 = false;
                let flag3 = false;
                let num4 = 0;
                let num5 = 0;
                let num6 = 0;
                let flag4 = false;
                if (0 < arg0.length) {
                  while (true) {
                    let obj6 = arg0[num4];
                    let now = obj.now;
                    let tmp24 = valid;
                    if (valid.components.localpart === now) {
                      if ("(" === obj6) {
                        if (0 !== num2) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.cfwsComment);
                          let flag10 = true;
                          stack = obj.stack;
                          typeError = stack.push(obj.now);
                          typeError = valid;
                          obj.now = valid.components.contextComment;
                          let flag11 = true;
                          typeError = str7;
                          typeError = num;
                          typeError = num2;
                          typeError = num3;
                          typeError = tmp16;
                          typeError = flag2;
                          typeError = obj6;
                          typeError = num4;
                          typeError = tmp17;
                          typeError = tmp18;
                          typeError = tmp19;
                          typeError = tmp20;
                          typeError = tmp21;
                          typeError = tmp22;
                        }
                        if (0 === num) {
                          typeError = valid;
                          let deprecatedComment2 = valid.diagnoses.cfwsComment;
                        } else {
                          typeError = valid;
                          deprecatedComment2 = valid.diagnoses.deprecatedComment;
                        }
                        typeError = updateResult(deprecatedComment2);
                        typeError = flag3;
                      } else if ("." === obj6) {
                        if (0 === num2) {
                          if (0 === num) {
                            typeError = valid;
                            let errConsecutiveDots2 = valid.diagnoses.errDotStart;
                          } else {
                            typeError = valid;
                            errConsecutiveDots2 = valid.diagnoses.errConsecutiveDots;
                          }
                          typeError = updateResult(errConsecutiveDots2);
                          let tmp40 = str7;
                          let num9 = num;
                          let num10 = num2;
                          let num8 = num3;
                          let tmp41 = tmp16;
                          let tmp42 = flag2;
                          let flag5 = flag3;
                          let tmp43 = obj6;
                          let diff = num4;
                          let tmp44 = tmp17;
                          let tmp45 = tmp18;
                          let tmp46 = tmp19;
                          let tmp47 = tmp20;
                          let tmp48 = tmp21;
                          let tmp49 = tmp22;
                        } else {
                          if (flag3) {
                            typeError = valid;
                            typeError = updateResult(valid.diagnoses.deprecatedLocalPart);
                          }
                          typeError = num + 1;
                          obj1.local = obj1.local + obj6;
                          obj2.locals[typeError] = "";
                          tmp40 = str7;
                          num9 = typeError;
                          num10 = 0;
                          num8 = num3;
                          tmp41 = tmp16;
                          tmp42 = flag2;
                          flag5 = false;
                          tmp43 = obj6;
                          diff = num4;
                          tmp44 = tmp17;
                          tmp45 = tmp18;
                          tmp46 = tmp19;
                          tmp47 = tmp20;
                          tmp48 = tmp21;
                          tmp49 = tmp22;
                        }
                      } else if ("\"" === obj6) {
                        if (0 === num2) {
                          if (0 === num) {
                            typeError = valid;
                            let deprecatedLocalPart = valid.diagnoses.rfc5321QuotedString;
                          } else {
                            typeError = valid;
                            deprecatedLocalPart = valid.diagnoses.deprecatedLocalPart;
                          }
                          typeError = updateResult(deprecatedLocalPart);
                          obj1.local = obj1.local + obj6;
                          let locals6 = obj2.locals;
                          locals6[num] = locals6[num] + obj6;
                          num10 = num2 + 1;
                          let stack1 = obj.stack;
                          typeError = stack1.push(obj.now);
                          typeError = valid;
                          obj.now = valid.components.contextQuotedString;
                          tmp40 = str7;
                          num9 = num;
                          num8 = num3;
                          tmp41 = tmp16;
                          tmp42 = flag2;
                          flag5 = true;
                          tmp43 = obj6;
                          diff = num4;
                          tmp44 = tmp17;
                          tmp45 = tmp18;
                          tmp46 = tmp19;
                          tmp47 = tmp20;
                          tmp48 = tmp21;
                          tmp49 = tmp22;
                        } else {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.errExpectingATEXT);
                          tmp40 = str7;
                          num9 = num;
                          num10 = num2;
                          num8 = num3;
                          tmp41 = tmp16;
                          tmp42 = flag2;
                          flag5 = flag3;
                          tmp43 = obj6;
                          diff = num4;
                          tmp44 = tmp17;
                          tmp45 = tmp18;
                          tmp46 = tmp19;
                          tmp47 = tmp20;
                          tmp48 = tmp21;
                          tmp49 = tmp22;
                        }
                      } else {
                        if ("\r" === obj6) {
                          typeError = num4 + 1;
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.errCRNoLF);
                          tmp40 = str7;
                          num9 = num;
                          num10 = num2;
                          num8 = num3;
                          tmp41 = tmp16;
                          tmp42 = flag2;
                          flag5 = flag3;
                          tmp43 = obj6;
                          diff = typeError;
                          tmp44 = tmp17;
                          tmp45 = tmp18;
                          tmp46 = tmp19;
                          tmp47 = tmp20;
                          tmp48 = tmp21;
                          tmp49 = tmp22;
                        } else {
                          typeError = num4;
                          if (" " !== obj6) {
                            typeError = num4;
                            if ("\t" !== obj6) {
                              if ("@" === obj6) {
                                if (1 !== obj.stack.length) {
                                  typeError = globalThis;
                                  let _Error5 = Error;
                                  typeError = new.target;
                                  let str12 = "unexpected item on context stack";
                                  typeError = new.target;
                                  typeError = new Error("unexpected item on context stack");
                                  throw typeError;
                                } else {
                                  if (0 === obj1.local.length) {
                                    typeError = valid;
                                    typeError = updateResult(valid.diagnoses.errNoLocalPart);
                                  } else if (0 === num2) {
                                    typeError = valid;
                                    typeError = updateResult(valid.diagnoses.errDotEnd);
                                  } else if (obj1.local.length > 64) {
                                    typeError = valid;
                                    typeError = updateResult(valid.diagnoses.rfc5322LocalTooLong);
                                  } else {
                                    typeError = valid;
                                    typeError = obj.prev !== valid.components.contextComment;
                                    if (typeError) {
                                      typeError = valid;
                                      typeError = obj.prev !== valid.components.contextFWS;
                                    }
                                    if (!typeError) {
                                      typeError = valid;
                                      typeError = updateResult(valid.diagnoses.deprecatedCFWSNearAt);
                                    }
                                  }
                                  typeError = valid;
                                  obj.now = valid.components.domain;
                                  typeError = valid;
                                  obj.stack[0] = valid.components.domain;
                                  typeError = 0;
                                  tmp40 = str7;
                                  num9 = 0;
                                  num10 = 0;
                                  num8 = num3;
                                  tmp41 = tmp16;
                                  tmp42 = flag2;
                                  flag5 = false;
                                  tmp43 = obj6;
                                  diff = num4;
                                  tmp44 = tmp17;
                                  tmp45 = tmp18;
                                  tmp46 = tmp19;
                                  tmp47 = tmp20;
                                  tmp48 = tmp21;
                                  tmp49 = tmp22;
                                }
                              } else if (flag3) {
                                let prev2 = obj.prev;
                                typeError = valid;
                                if (valid.components.contextComment !== prev2) {
                                  typeError = valid;
                                  if (valid.components.contextFWS !== prev2) {
                                    typeError = valid;
                                    if (valid.components.contextQuotedString === prev2) {
                                      typeError = valid;
                                      typeError = updateResult(valid.diagnoses.errATEXTAfterQS);
                                      tmp40 = str7;
                                      num9 = num;
                                      num10 = num2;
                                      num8 = num3;
                                      tmp41 = tmp16;
                                      tmp42 = flag2;
                                      flag5 = flag3;
                                      tmp43 = obj6;
                                      diff = num4;
                                      tmp44 = tmp17;
                                      tmp45 = tmp18;
                                      tmp46 = tmp19;
                                      tmp47 = tmp20;
                                      tmp48 = tmp21;
                                      tmp49 = tmp22;
                                    } else {
                                      typeError = globalThis;
                                      let _Error4 = Error;
                                      let str11 = "more atext found where none is allowed, but unrecognized prev context: ";
                                      typeError = new.target;
                                      typeError = new.target;
                                      typeError = new Error("more atext found where none is allowed, but unrecognized prev context: " + obj.prev);
                                      throw typeError;
                                    }
                                  }
                                }
                                typeError = valid;
                                typeError = updateResult(valid.diagnoses.errATEXTAfterCFWS);
                                tmp40 = str7;
                                num9 = num;
                                num10 = num2;
                                num8 = num3;
                                tmp41 = tmp16;
                                tmp42 = flag2;
                                flag5 = flag3;
                                tmp43 = obj6;
                                diff = num4;
                                tmp44 = tmp17;
                                tmp45 = tmp18;
                                tmp46 = tmp19;
                                tmp47 = tmp20;
                                tmp48 = tmp21;
                                tmp49 = tmp22;
                              } else {
                                obj.prev = obj.now;
                                typeError = obj6.charCodeAt(0);
                                typeError = typeError < 33 || typeError > 126;
                                if (!typeError) {
                                  typeError = valid;
                                  typeError = valid.specials(typeError);
                                }
                                if (typeError) {
                                  typeError = valid;
                                  typeError = updateResult(valid.diagnoses.errExpectingATEXT);
                                }
                                obj1.local = obj1.local + obj6;
                                let locals5 = obj2.locals;
                                locals5[num] = locals5[num] + obj6;
                                num10 = num2 + 1;
                                tmp40 = str7;
                                num9 = num;
                                num8 = num3;
                                tmp41 = typeError;
                                tmp42 = flag2;
                                flag5 = flag3;
                                tmp43 = obj6;
                                diff = num4;
                                tmp44 = tmp17;
                                tmp45 = tmp18;
                                tmp46 = tmp19;
                                tmp47 = tmp20;
                                tmp48 = tmp21;
                                tmp49 = tmp22;
                              }
                            }
                          }
                        }
                        let flag9 = true;
                        if (0 !== num2) {
                          stack2 = obj.stack;
                          typeError = stack2.push(obj.now);
                          typeError = valid;
                          obj.now = valid.components.contextFWS;
                          flag5 = true;
                          tmp40 = obj6;
                          num9 = num;
                          num10 = num2;
                          num8 = num3;
                          tmp41 = tmp16;
                          tmp42 = flag2;
                          tmp43 = obj6;
                          diff = typeError;
                          tmp44 = tmp17;
                          tmp45 = tmp18;
                          tmp46 = tmp19;
                          tmp47 = tmp20;
                          tmp48 = tmp21;
                          tmp49 = tmp22;
                        } else {
                          if (0 === num) {
                            typeError = valid;
                            let deprecatedFWS2 = valid.diagnoses.cfwsFWS;
                          } else {
                            typeError = valid;
                            deprecatedFWS2 = valid.diagnoses.deprecatedFWS;
                          }
                          typeError = updateResult(deprecatedFWS2);
                          typeError = flag3;
                        }
                      }
                    } else {
                      typeError = valid;
                      if (valid.components.domain === now) {
                        if ("(" === obj6) {
                          if (0 === num2) {
                            if (0 === num) {
                              typeError = valid;
                              let deprecatedComment = valid.diagnoses.deprecatedCFWSNearAt;
                            } else {
                              typeError = valid;
                              deprecatedComment = valid.diagnoses.deprecatedComment;
                            }
                            typeError = updateResult(deprecatedComment);
                            typeError = flag3;
                          } else {
                            typeError = valid;
                            typeError = updateResult(valid.diagnoses.cfwsComment);
                            let flag8 = true;
                            stack3 = obj.stack;
                            typeError = stack3.push(obj.now);
                            typeError = valid;
                            obj.now = valid.components.contextComment;
                            flag5 = true;
                            tmp40 = str7;
                            num9 = num;
                            num10 = num2;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            tmp43 = obj6;
                            diff = num4;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          }
                        } else if ("." === obj6) {
                          if (0 === num2) {
                            if (0 === num) {
                              typeError = valid;
                              let errConsecutiveDots = valid.diagnoses.errDotStart;
                            } else {
                              typeError = valid;
                              errConsecutiveDots = valid.diagnoses.errConsecutiveDots;
                            }
                            typeError = updateResult(errConsecutiveDots);
                          } else {
                            if (flag2) {
                              typeError = valid;
                              typeError = updateResult(valid.diagnoses.errDomainHyphenEnd);
                            } else if (num2 > 63) {
                              typeError = valid;
                              typeError = updateResult(valid.diagnoses.rfc5322LabelTooLong);
                            }
                            typeError = num + 1;
                            obj2.domains[typeError] = "";
                            obj1.domain = obj1.domain + obj6;
                            tmp40 = str7;
                            num9 = typeError;
                            num10 = 0;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            flag5 = false;
                            tmp43 = obj6;
                            diff = num4;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          }
                        } else if ("[" === obj6) {
                          if (0 === obj1.domain.length) {
                            num10 = num2 + 1;
                            stack4 = obj.stack;
                            typeError = stack4.push(obj.now);
                            typeError = valid;
                            obj.now = valid.components.literal;
                            obj1.domain = obj1.domain + obj6;
                            let domains5 = obj2.domains;
                            domains5[num] = domains5[num] + obj6;
                            obj1.literal = "";
                            tmp40 = str7;
                            num9 = num;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            flag5 = true;
                            tmp43 = obj6;
                            diff = num4;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          } else {
                            typeError = valid;
                            typeError = updateResult(valid.diagnoses.errExpectingATEXT);
                            tmp40 = str7;
                            num9 = num;
                            num10 = num2;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            flag5 = flag3;
                            tmp43 = obj6;
                            diff = num4;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          }
                        } else {
                          if ("\r" === obj6) {
                            typeError = num4 + 1;
                            typeError = valid;
                            typeError = updateResult(valid.diagnoses.errCRNoLF);
                            tmp40 = str7;
                            num9 = num;
                            num10 = num2;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            flag5 = flag3;
                            tmp43 = obj6;
                            diff = typeError;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          } else {
                            typeError = num4;
                            if (" " !== obj6) {
                              typeError = num4;
                              if ("\t" !== obj6) {
                                if (flag3) {
                                  let prev = obj.prev;
                                  typeError = valid;
                                  if (valid.components.contextComment !== prev) {
                                    typeError = valid;
                                    if (valid.components.contextFWS !== prev) {
                                      typeError = valid;
                                      if (valid.components.literal !== prev) {
                                        break;
                                      } else {
                                        typeError = valid;
                                        typeError = updateResult(valid.diagnoses.errATEXTAfterDomainLiteral);
                                      }
                                    }
                                  }
                                  typeError = valid;
                                  typeError = updateResult(valid.diagnoses.errATEXTAfterCFWS);
                                }
                                typeError = obj6.charCodeAt(0);
                                if (typeError >= 33) {
                                  if (typeError <= 126) {
                                    typeError = valid;
                                    if (!valid.specials(typeError)) {
                                      if ("-" === obj6) {
                                        let flag6 = true;
                                        if (0 === num2) {
                                          typeError = valid;
                                          typeError = updateResult(valid.diagnoses.errDomainHyphenStart);
                                          flag6 = true;
                                        }
                                      } else {
                                        typeError = typeError < 48 || typeError > 122;
                                        if (!typeError) {
                                          typeError = typeError > 57 && typeError < 65;
                                        }
                                        if (!typeError) {
                                          typeError = typeError > 90 && typeError < 97;
                                        }
                                        flag6 = false;
                                        if (typeError) {
                                          typeError = valid;
                                          typeError = updateResult(valid.diagnoses.rfc5322Domain);
                                          flag6 = false;
                                        }
                                      }
                                    }
                                    obj1.domain = obj1.domain + obj6;
                                    let domains4 = obj2.domains;
                                    domains4[num] = domains4[num] + obj6;
                                    num10 = num2 + 1;
                                    tmp42 = flag6;
                                    tmp40 = str7;
                                    num9 = num;
                                    num8 = num3;
                                    tmp41 = typeError;
                                    flag5 = flag3;
                                    tmp43 = obj6;
                                    diff = num4;
                                    tmp44 = tmp17;
                                    tmp45 = tmp18;
                                    tmp46 = tmp19;
                                    tmp47 = tmp20;
                                    tmp48 = tmp21;
                                    tmp49 = tmp22;
                                  }
                                }
                                typeError = valid;
                                typeError = updateResult(valid.diagnoses.errExpectingATEXT);
                                flag6 = false;
                              }
                            }
                          }
                          if (0 === num2) {
                            if (0 === num) {
                              typeError = valid;
                              let deprecatedFWS = valid.diagnoses.deprecatedCFWSNearAt;
                            } else {
                              typeError = valid;
                              deprecatedFWS = valid.diagnoses.deprecatedFWS;
                            }
                            typeError = updateResult(deprecatedFWS);
                            typeError = flag3;
                          } else {
                            typeError = valid;
                            typeError = updateResult(valid.diagnoses.cfwsFWS);
                            let flag7 = true;
                            stack5 = obj.stack;
                            typeError = stack5.push(obj.now);
                            typeError = valid;
                            obj.now = valid.components.contextFWS;
                            flag5 = true;
                            tmp40 = obj6;
                            num9 = num;
                            num10 = num2;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            tmp43 = obj6;
                            diff = typeError;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          }
                        }
                      } else {
                        typeError = valid;
                        if (valid.components.literal === now) {
                          if ("]" === obj6) {
                            typeError = valid;
                            typeError = valid;
                            if (valid < valid.categories.deprecated) {
                              let literal = obj1.literal;
                              typeError = valid;
                              let ipV4 = valid.regex.ipV4;
                              typeError = ipV4.exec(literal);
                              let num11 = -1;
                              if (typeError) {
                                let index = typeError.index;
                                typeError = 0 !== index;
                                num11 = index;
                              }
                              let text = literal;
                              if (typeError) {
                                text = `${arr11.slice(0, num11)}0:0`;
                              }
                              if (0 === num11) {
                                typeError = valid;
                                typeError = updateResult(valid.diagnoses.rfc5321AddressLiteral);
                                typeError = num11;
                                typeError = text;
                                typeError = tmp20;
                                typeError = tmp21;
                                typeError = tmp22;
                              } else {
                                let str15 = text.slice(0, 5);
                                if ("ipv6:" !== str15.toLowerCase()) {
                                  typeError = valid;
                                  typeError = updateResult(valid.diagnoses.rfc5322DomainLiteral);
                                  typeError = num11;
                                  typeError = text;
                                  typeError = tmp20;
                                  typeError = tmp21;
                                  typeError = tmp22;
                                } else {
                                  let str16 = text.slice(5);
                                  typeError = valid;
                                  let maxIPv6Groups = valid.maxIPv6Groups;
                                  let parts = str16.split(":");
                                  typeError = str16.indexOf("::");
                                  if (~typeError) {
                                    if (typeError !== str16.lastIndexOf("::")) {
                                      typeError = valid;
                                      typeError = updateResult(valid.diagnoses.rfc5322IPv62x2xColon);
                                      typeError = maxIPv6Groups;
                                    } else {
                                      typeError = 0 !== typeError && typeError !== str16.length - 2;
                                      typeError = maxIPv6Groups;
                                      if (!typeError) {
                                        typeError = maxIPv6Groups + 1;
                                      }
                                      if (parts.length > typeError) {
                                        typeError = valid;
                                        typeError = updateResult(valid.diagnoses.rfc5322IPv6MaxGroups);
                                      } else if (parts.length === typeError) {
                                        typeError = valid;
                                        typeError = updateResult(valid.diagnoses.deprecatedIPv6);
                                      }
                                    }
                                  } else {
                                    typeError = maxIPv6Groups;
                                    if (parts.length !== maxIPv6Groups) {
                                      typeError = valid;
                                      typeError = updateResult(valid.diagnoses.rfc5322IPv6GroupCount);
                                      typeError = maxIPv6Groups;
                                    }
                                  }
                                  if (":" === str16[0]) {
                                    if (":" !== str16[1]) {
                                      typeError = valid;
                                      typeError = updateResult(valid.diagnoses.rfc5322IPv6ColonStart);
                                      typeError = text;
                                      typeError = str16;
                                      typeError = parts;
                                    }
                                  }
                                  if (":" === str16[str16.length - 1]) {
                                    if (":" !== str16[str16.length - 2]) {
                                      typeError = valid;
                                      typeError = updateResult(valid.diagnoses.rfc5322IPv6ColonEnd);
                                      typeError = text;
                                      typeError = str16;
                                      typeError = parts;
                                    }
                                  }
                                  typeError = valid;
                                  typeError = valid;
                                  let diagnoses = valid.diagnoses;
                                  if (valid.checkIpV6(parts)) {
                                    typeError = updateResult(diagnoses.rfc5321AddressLiteral);
                                    typeError = text;
                                    typeError = str16;
                                    typeError = parts;
                                  } else {
                                    typeError = updateResult(diagnoses.rfc5322IPv6BadCharacter);
                                    typeError = text;
                                    typeError = str16;
                                    typeError = parts;
                                  }
                                }
                              }
                            } else {
                              typeError = valid;
                              typeError = updateResult(valid.diagnoses.rfc5322DomainLiteral);
                              typeError = tmp17;
                              typeError = tmp18;
                              typeError = tmp19;
                              typeError = tmp20;
                              typeError = tmp21;
                              typeError = tmp22;
                            }
                            obj1.domain = obj1.domain + obj6;
                            let domains3 = obj2.domains;
                            domains3[num] = domains3[num] + obj6;
                            num10 = num2 + 1;
                            ({ now: obj3.prev, stack: stack5 } = obj);
                            obj.now = stack5.pop();
                            tmp44 = typeError;
                            tmp45 = typeError;
                            tmp46 = typeError;
                            tmp47 = typeError;
                            tmp48 = typeError;
                            tmp49 = typeError;
                            tmp40 = str7;
                            num9 = num;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            flag5 = flag3;
                            tmp43 = obj6;
                            diff = num4;
                          } else if ("\\" === obj6) {
                            typeError = valid;
                            typeError = updateResult(valid.diagnoses.rfc5322DomainLiteralOBSDText);
                            let stack6 = obj.stack;
                            typeError = stack6.push(obj.now);
                            typeError = valid;
                            obj.now = valid.components.contextQuotedPair;
                            tmp40 = str7;
                            num9 = num;
                            num10 = num2;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            flag5 = flag3;
                            tmp43 = obj6;
                            diff = num4;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          } else {
                            if ("\r" === obj6) {
                              typeError = num4 + 1;
                              typeError = valid;
                              typeError = updateResult(valid.diagnoses.errCRNoLF);
                              tmp40 = str7;
                              num9 = num;
                              num10 = num2;
                              num8 = num3;
                              tmp41 = tmp16;
                              tmp42 = flag2;
                              flag5 = flag3;
                              tmp43 = obj6;
                              diff = typeError;
                              tmp44 = tmp17;
                              tmp45 = tmp18;
                              tmp46 = tmp19;
                              tmp47 = tmp20;
                              tmp48 = tmp21;
                              tmp49 = tmp22;
                            } else {
                              typeError = num4;
                              if (" " !== obj6) {
                                typeError = num4;
                                if ("\t" !== obj6) {
                                  typeError = obj6.charCodeAt(0);
                                  if (typeError <= 127) {
                                    if (0 !== typeError) {
                                      if ("[" !== obj6) {
                                        let tmp95 = typeError < 33 || 127 === typeError;
                                        if (tmp95) {
                                          let tmp96 = valid;
                                          let updateResultResult = updateResult(valid.diagnoses.rfc5322DomainLiteralOBSDText);
                                        }
                                        obj1.literal = obj1.literal + obj6;
                                        obj1.domain = obj1.domain + obj6;
                                        let domains2 = obj2.domains;
                                        domains2[num] = domains2[num] + obj6;
                                        num10 = num2 + 1;
                                        tmp40 = str7;
                                        num9 = num;
                                        num8 = num3;
                                        tmp41 = typeError;
                                        tmp42 = flag2;
                                        flag5 = flag3;
                                        tmp43 = obj6;
                                        diff = num4;
                                        tmp44 = tmp17;
                                        tmp45 = tmp18;
                                        tmp46 = tmp19;
                                        tmp47 = tmp20;
                                        tmp48 = tmp21;
                                        tmp49 = tmp22;
                                      }
                                    }
                                  }
                                  let tmp98 = valid;
                                  let updateResultResult1 = updateResult(valid.diagnoses.errExpectingDTEXT);
                                  tmp40 = str7;
                                  num9 = num;
                                  num10 = num2;
                                  num8 = num3;
                                  tmp41 = typeError;
                                  tmp42 = flag2;
                                  flag5 = flag3;
                                  tmp43 = obj6;
                                  diff = num4;
                                  tmp44 = tmp17;
                                  tmp45 = tmp18;
                                  tmp46 = tmp19;
                                  tmp47 = tmp20;
                                  tmp48 = tmp21;
                                  tmp49 = tmp22;
                                }
                              }
                            }
                            typeError = valid;
                            typeError = updateResult(valid.diagnoses.cfwsFWS);
                            let stack7 = obj.stack;
                            typeError = stack7.push(obj.now);
                            typeError = valid;
                            obj.now = valid.components.contextFWS;
                            diff = typeError;
                            tmp40 = obj6;
                            num9 = num;
                            num10 = num2;
                            num8 = num3;
                            tmp41 = tmp16;
                            tmp42 = flag2;
                            flag5 = flag3;
                            tmp43 = obj6;
                            tmp44 = tmp17;
                            tmp45 = tmp18;
                            tmp46 = tmp19;
                            tmp47 = tmp20;
                            tmp48 = tmp21;
                            tmp49 = tmp22;
                          }
                        } else {
                          typeError = valid;
                          if (valid.components.contextQuotedString === now) {
                            if ("\\" === obj6) {
                              let stack8 = obj.stack;
                              let arr = stack8.push(obj.now);
                              let tmp94 = valid;
                              obj.now = valid.components.contextQuotedPair;
                              tmp40 = str7;
                              num9 = num;
                              num10 = num2;
                              num8 = num3;
                              tmp41 = tmp16;
                              tmp42 = flag2;
                              flag5 = flag3;
                              tmp43 = obj6;
                              diff = num4;
                              tmp44 = tmp17;
                              tmp45 = tmp18;
                              tmp46 = tmp19;
                              tmp47 = tmp20;
                              tmp48 = tmp21;
                              tmp49 = tmp22;
                            } else {
                              if ("\r" === obj6) {
                                let sum = num4 + 1;
                                if (length !== sum) {
                                  typeError = sum;
                                }
                                let tmp91 = valid;
                                let updateResultResult2 = updateResult(valid.diagnoses.errCRNoLF);
                                tmp40 = str7;
                                num9 = num;
                                num10 = num2;
                                num8 = num3;
                                tmp41 = tmp16;
                                tmp42 = flag2;
                                flag5 = flag3;
                                tmp43 = obj6;
                                diff = sum;
                                tmp44 = tmp17;
                                tmp45 = tmp18;
                                tmp46 = tmp19;
                                tmp47 = tmp20;
                                tmp48 = tmp21;
                                tmp49 = tmp22;
                              } else {
                                typeError = num4;
                                if ("\t" !== obj6) {
                                  if ("\"" === obj6) {
                                    obj1.local = obj1.local + obj6;
                                    let locals3 = obj2.locals;
                                    locals3[num] = locals3[num] + obj6;
                                    num10 = num2 + 1;
                                    ({ now: obj3.prev, stack: stack4 } = obj);
                                    obj.now = stack4.pop();
                                    tmp40 = str7;
                                    num9 = num;
                                    num8 = num3;
                                    tmp41 = tmp16;
                                    tmp42 = flag2;
                                    flag5 = flag3;
                                    tmp43 = obj6;
                                    diff = num4;
                                    tmp44 = tmp17;
                                    tmp45 = tmp18;
                                    tmp46 = tmp19;
                                    tmp47 = tmp20;
                                    tmp48 = tmp21;
                                    tmp49 = tmp22;
                                  } else {
                                    typeError = obj6.charCodeAt(0);
                                    if (typeError <= 127) {
                                      if (0 !== typeError) {
                                        if (10 !== typeError) {
                                          let tmp81 = typeError < 32 || 127 === typeError;
                                          if (tmp81) {
                                            let tmp82 = valid;
                                            let updateResultResult3 = updateResult(valid.diagnoses.deprecatedQTEXT);
                                          }
                                        }
                                        obj1.local = obj1.local + obj6;
                                        let locals2 = obj2.locals;
                                        locals2[num] = locals2[num] + obj6;
                                        num10 = num2 + 1;
                                        tmp40 = str7;
                                        num9 = num;
                                        num8 = num3;
                                        tmp41 = typeError;
                                        tmp42 = flag2;
                                        flag5 = flag3;
                                        tmp43 = obj6;
                                        diff = num4;
                                        tmp44 = tmp17;
                                        tmp45 = tmp18;
                                        tmp46 = tmp19;
                                        tmp47 = tmp20;
                                        tmp48 = tmp21;
                                        tmp49 = tmp22;
                                      }
                                    }
                                    let tmp84 = valid;
                                    let updateResultResult4 = updateResult(valid.diagnoses.errExpectingQTEXT);
                                  }
                                }
                              }
                              obj1.local = `${obj4.local} `;
                              let locals4 = obj2.locals;
                              locals4[num] = `${locals4[num]} `;
                              num10 = num2 + 1;
                              let tmp87 = valid;
                              let updateResultResult5 = updateResult(valid.diagnoses.cfwsFWS);
                              let stack9 = obj.stack;
                              arr = stack9.push(obj.now);
                              let tmp90 = valid;
                              obj.now = valid.components.contextFWS;
                              diff = typeError;
                              tmp40 = obj6;
                              num9 = num;
                              num8 = num3;
                              tmp41 = tmp16;
                              tmp42 = flag2;
                              flag5 = flag3;
                              tmp43 = obj6;
                              tmp44 = tmp17;
                              tmp45 = tmp18;
                              tmp46 = tmp19;
                              tmp47 = tmp20;
                              tmp48 = tmp21;
                              tmp49 = tmp22;
                            }
                          } else {
                            typeError = valid;
                            if (valid.components.contextQuotedPair === now) {
                              let charCodeAtResult = obj6.charCodeAt(0);
                              if (charCodeAtResult > 127) {
                                let tmp72 = valid;
                                let updateResultResult6 = updateResult(valid.diagnoses.errExpectingQPair);
                              } else {
                                let tmp69 = charCodeAtResult < 31 && 9 !== charCodeAtResult || 127 === charCodeAtResult;
                                if (tmp69) {
                                  let tmp70 = valid;
                                  let updateResultResult7 = updateResult(valid.diagnoses.deprecatedQP);
                                }
                              }
                              ({ now: obj3.prev, stack: stack3 } = obj);
                              obj.now = stack3.pop();
                              let text1 = `\\${obj6}`;
                              let now2 = obj.now;
                              let tmp75 = valid;
                              tmp40 = str7;
                              num9 = num;
                              num10 = num2;
                              num8 = num3;
                              tmp41 = charCodeAtResult;
                              tmp42 = flag2;
                              flag5 = flag3;
                              tmp43 = text1;
                              diff = num4;
                              tmp44 = tmp17;
                              tmp45 = tmp18;
                              tmp46 = tmp19;
                              tmp47 = tmp20;
                              tmp48 = tmp21;
                              tmp49 = tmp22;
                              if (valid.components.contextComment !== now2) {
                                typeError = valid;
                                if (valid.components.contextQuotedString === now2) {
                                  obj1.local = obj1.local + `\\${obj6}`;
                                  let locals = obj2.locals;
                                  locals[num] = locals[num] + `\\${obj6}`;
                                  num10 = num2 + 2;
                                  tmp40 = str7;
                                  num9 = num;
                                  num8 = num3;
                                  tmp41 = charCodeAtResult;
                                  tmp42 = flag2;
                                  flag5 = flag3;
                                  tmp43 = text1;
                                  diff = num4;
                                  tmp44 = tmp17;
                                  tmp45 = tmp18;
                                  tmp46 = tmp19;
                                  tmp47 = tmp20;
                                  tmp48 = tmp21;
                                  tmp49 = tmp22;
                                } else {
                                  typeError = valid;
                                  if (valid.components.literal === now2) {
                                    obj1.domain = obj1.domain + `\\${obj6}`;
                                    let domains = obj2.domains;
                                    domains[num] = domains[num] + `\\${obj6}`;
                                    num10 = num2 + 2;
                                    tmp40 = str7;
                                    num9 = num;
                                    num8 = num3;
                                    tmp41 = charCodeAtResult;
                                    tmp42 = flag2;
                                    flag5 = flag3;
                                    tmp43 = text1;
                                    diff = num4;
                                    tmp44 = tmp17;
                                    tmp45 = tmp18;
                                    tmp46 = tmp19;
                                    tmp47 = tmp20;
                                    tmp48 = tmp21;
                                    tmp49 = tmp22;
                                  } else {
                                    let tmp76 = globalThis;
                                    let _Error2 = Error;
                                    let str9 = "quoted pair logic invoked in an invalid context: ";
                                    let tmp77 = new.target;
                                    let tmp78 = new.target;
                                    let error = new Error("quoted pair logic invoked in an invalid context: " + obj.now);
                                    let tmp80 = error;
                                    throw error;
                                  }
                                }
                              }
                            } else {
                              typeError = valid;
                              if (valid.components.contextComment === now) {
                                if ("(" === obj6) {
                                  let stack10 = obj.stack;
                                  let arr1 = stack10.push(obj.now);
                                  let tmp67 = valid;
                                  obj.now = valid.components.contextComment;
                                  tmp40 = str7;
                                  num9 = num;
                                  num10 = num2;
                                  num8 = num3;
                                  tmp41 = tmp16;
                                  tmp42 = flag2;
                                  flag5 = flag3;
                                  tmp43 = obj6;
                                  diff = num4;
                                  tmp44 = tmp17;
                                  tmp45 = tmp18;
                                  tmp46 = tmp19;
                                  tmp47 = tmp20;
                                  tmp48 = tmp21;
                                  tmp49 = tmp22;
                                } else if (")" === obj6) {
                                  ({ now: obj3.prev, stack: stack2 } = obj);
                                  obj.now = stack2.pop();
                                  tmp40 = str7;
                                  num9 = num;
                                  num10 = num2;
                                  num8 = num3;
                                  tmp41 = tmp16;
                                  tmp42 = flag2;
                                  flag5 = flag3;
                                  tmp43 = obj6;
                                  diff = num4;
                                  tmp44 = tmp17;
                                  tmp45 = tmp18;
                                  tmp46 = tmp19;
                                  tmp47 = tmp20;
                                  tmp48 = tmp21;
                                  tmp49 = tmp22;
                                } else if ("\\" === obj6) {
                                  let stack11 = obj.stack;
                                  let arr2 = stack11.push(obj.now);
                                  let tmp65 = valid;
                                  obj.now = valid.components.contextQuotedPair;
                                  tmp40 = str7;
                                  num9 = num;
                                  num10 = num2;
                                  num8 = num3;
                                  tmp41 = tmp16;
                                  tmp42 = flag2;
                                  flag5 = flag3;
                                  tmp43 = obj6;
                                  diff = num4;
                                  tmp44 = tmp17;
                                  tmp45 = tmp18;
                                  tmp46 = tmp19;
                                  tmp47 = tmp20;
                                  tmp48 = tmp21;
                                  tmp49 = tmp22;
                                } else {
                                  if ("\r" === obj6) {
                                    let sum1 = num4 + 1;
                                    if (length !== sum1) {
                                      typeError = sum1;
                                    }
                                    let tmp62 = valid;
                                    let updateResultResult8 = updateResult(valid.diagnoses.errCRNoLF);
                                    tmp40 = str7;
                                    num9 = num;
                                    num10 = num2;
                                    num8 = num3;
                                    tmp41 = tmp16;
                                    tmp42 = flag2;
                                    flag5 = flag3;
                                    tmp43 = obj6;
                                    diff = sum1;
                                    tmp44 = tmp17;
                                    tmp45 = tmp18;
                                    tmp46 = tmp19;
                                    tmp47 = tmp20;
                                    tmp48 = tmp21;
                                    tmp49 = tmp22;
                                  } else {
                                    typeError = num4;
                                    if (" " !== obj6) {
                                      typeError = num4;
                                      if ("\t" !== obj6) {
                                        typeError = obj6.charCodeAt(0);
                                        if (typeError <= 127) {
                                          if (0 !== typeError) {
                                            if (10 !== typeError) {
                                              let tmp52 = typeError < 32 || 127 === typeError;
                                              tmp40 = str7;
                                              num9 = num;
                                              num10 = num2;
                                              num8 = num3;
                                              tmp41 = typeError;
                                              tmp42 = flag2;
                                              flag5 = flag3;
                                              tmp43 = obj6;
                                              diff = num4;
                                              tmp44 = tmp17;
                                              tmp45 = tmp18;
                                              tmp46 = tmp19;
                                              tmp47 = tmp20;
                                              tmp48 = tmp21;
                                              tmp49 = tmp22;
                                              if (tmp52) {
                                                let tmp53 = valid;
                                                let updateResultResult9 = updateResult(valid.diagnoses.deprecatedCTEXT);
                                                tmp40 = str7;
                                                num9 = num;
                                                num10 = num2;
                                                num8 = num3;
                                                tmp41 = typeError;
                                                tmp42 = flag2;
                                                flag5 = flag3;
                                                tmp43 = obj6;
                                                diff = num4;
                                                tmp44 = tmp17;
                                                tmp45 = tmp18;
                                                tmp46 = tmp19;
                                                tmp47 = tmp20;
                                                tmp48 = tmp21;
                                                tmp49 = tmp22;
                                              }
                                            }
                                          }
                                        }
                                        let tmp55 = valid;
                                        let updateResultResult10 = updateResult(valid.diagnoses.errExpectingCTEXT);
                                        tmp40 = str7;
                                        num9 = num;
                                        num10 = num2;
                                        num8 = num3;
                                        tmp41 = typeError;
                                        tmp42 = flag2;
                                        flag5 = flag3;
                                        tmp43 = obj6;
                                        diff = num4;
                                        tmp44 = tmp17;
                                        tmp45 = tmp18;
                                        tmp46 = tmp19;
                                        tmp47 = tmp20;
                                        tmp48 = tmp21;
                                        tmp49 = tmp22;
                                      }
                                    }
                                  }
                                  let tmp58 = valid;
                                  let updateResultResult11 = updateResult(valid.diagnoses.cfwsFWS);
                                  let stack12 = obj.stack;
                                  let arr3 = stack12.push(obj.now);
                                  let tmp61 = valid;
                                  obj.now = valid.components.contextFWS;
                                  diff = typeError;
                                  tmp40 = obj6;
                                  num9 = num;
                                  num10 = num2;
                                  num8 = num3;
                                  tmp41 = tmp16;
                                  tmp42 = flag2;
                                  flag5 = flag3;
                                  tmp43 = obj6;
                                  tmp44 = tmp17;
                                  tmp45 = tmp18;
                                  tmp46 = tmp19;
                                  tmp47 = tmp20;
                                  tmp48 = tmp21;
                                  tmp49 = tmp22;
                                }
                              } else {
                                typeError = valid;
                                if (valid.components.contextFWS === now) {
                                  let tmp30 = "\r" === str7;
                                  let num7 = num3;
                                  if (!tmp30) {
                                    if ("\r" === obj6) {
                                      let sum2 = num4 + 1;
                                      let tmp37 = length !== sum2 && "\n" === arg0[sum2];
                                      num8 = num7;
                                      diff = sum2;
                                      if (!tmp37) {
                                        let tmp38 = valid;
                                        let updateResultResult12 = updateResult(valid.diagnoses.errCRNoLF);
                                        num8 = num7;
                                        diff = sum2;
                                      }
                                    } else {
                                      num8 = num7;
                                      diff = num4;
                                      if (" " !== obj6) {
                                        num8 = num7;
                                        diff = num4;
                                        if ("\t" !== obj6) {
                                          if (tmp30) {
                                            let tmp34 = valid;
                                            let updateResultResult13 = updateResult(valid.diagnoses.errFWSCRLFEnd);
                                          }
                                          ({ now: obj3.prev, stack } = obj);
                                          obj.now = stack.pop();
                                          diff = num4 - 1;
                                          num8 = 0;
                                        }
                                      }
                                    }
                                    tmp40 = obj6;
                                    num9 = num;
                                    num10 = num2;
                                    tmp41 = tmp16;
                                    tmp42 = flag2;
                                    flag5 = flag3;
                                    tmp43 = obj6;
                                    tmp44 = tmp17;
                                    tmp45 = tmp18;
                                    tmp46 = tmp19;
                                    tmp47 = tmp20;
                                    tmp48 = tmp21;
                                    tmp49 = tmp22;
                                  } else if ("\r" === obj6) {
                                    let tmp50 = valid;
                                    let updateResultResult14 = updateResult(valid.diagnoses.errFWSCRLFx2);
                                    tmp40 = str7;
                                    num9 = num;
                                    num10 = num2;
                                    num8 = num3;
                                    tmp41 = tmp16;
                                    tmp42 = flag2;
                                    flag5 = flag3;
                                    tmp43 = obj6;
                                    diff = num4;
                                    tmp44 = tmp17;
                                    tmp45 = tmp18;
                                    tmp46 = tmp19;
                                    tmp47 = tmp20;
                                    tmp48 = tmp21;
                                    tmp49 = tmp22;
                                  } else {
                                    typeError = num3 + 1;
                                    num7 = 1;
                                    if (typeError > 1) {
                                      let tmp31 = valid;
                                      let updateResultResult15 = updateResult(valid.diagnoses.deprecatedFWS);
                                      num7 = typeError;
                                    }
                                  }
                                } else {
                                  let tmp25 = globalThis;
                                  let _Error = Error;
                                  let str8 = "unknown context: ";
                                  let tmp26 = new.target;
                                  let tmp27 = new.target;
                                  let error1 = new Error("unknown context: " + obj.now);
                                  let tmp29 = error1;
                                  throw error1;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    typeError = valid;
                    typeError = valid;
                    num5 = num9;
                    num6 = num10;
                    flag4 = tmp42;
                    tmp23 = tmp43;
                    if (valid <= valid.categories.rfc5322) {
                      num4 = diff + 1;
                      str7 = tmp40;
                      num = num9;
                      num2 = num10;
                      num3 = num8;
                      tmp16 = tmp41;
                      flag2 = tmp42;
                      flag3 = flag5;
                      tmp17 = tmp44;
                      tmp18 = tmp45;
                      tmp19 = tmp46;
                      tmp20 = tmp47;
                      tmp21 = tmp48;
                      tmp22 = tmp49;
                      num5 = num9;
                      num6 = num10;
                      flag4 = tmp42;
                      tmp23 = tmp43;
                    }
                  }
                  typeError = globalThis;
                  const _Error3 = Error;
                  typeError = new.target;
                  typeError = new.target;
                  typeError = new Error("more atext found where none is allowed, but unrecognized prev context: " + obj.prev);
                  throw typeError;
                }
                if (valid < valid.categories.rfc5322) {
                  typeError = valid;
                  if (obj.now === valid.components.contextQuotedString) {
                    typeError = valid;
                    typeError = updateResult(valid.diagnoses.errUnclosedQuotedString);
                  } else {
                    typeError = valid;
                    if (obj.now === valid.components.contextQuotedPair) {
                      typeError = valid;
                      typeError = updateResult(valid.diagnoses.errBackslashEnd);
                    } else {
                      typeError = valid;
                      if (obj.now === valid.components.contextComment) {
                        typeError = valid;
                        typeError = updateResult(valid.diagnoses.errUnclosedComment);
                      } else {
                        typeError = valid;
                        if (obj.now === valid.components.literal) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.errUnclosedDomainLiteral);
                        } else if ("\r" === tmp23) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.errFWSCRLFEnd);
                        } else if (0 === obj1.domain.length) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.errNoDomain);
                        } else if (0 === num6) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.errDotEnd);
                        } else if (flag4) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.errDomainHyphenEnd);
                        } else if (obj1.domain.length > 255) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.rfc5322DomainTooLong);
                        } else if (obj1.local.length + obj1.domain.length + 1 > 254) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.rfc5322TooLong);
                        } else if (num6 > 63) {
                          typeError = valid;
                          typeError = updateResult(valid.diagnoses.rfc5322LabelTooLong);
                        } else {
                          if (obj.minDomainAtoms) {
                            if (obj2.domains.length < obj.minDomainAtoms) {
                              typeError = valid;
                              typeError = updateResult(valid.diagnoses.errDomainTooShort);
                            }
                          }
                          if (obj.tldWhitelist) {
                            typeError = valid;
                            if (!valid.validDomain(obj2.domains[num5], obj)) {
                              typeError = valid;
                              typeError = updateResult(valid.diagnoses.errUnknownTLD);
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let c8 = false;
                let c9 = false;
                function finish() {
                  let tmp = !c8;
                  if (!c8) {
                    tmp = valid < valid.categories.dnsWarn;
                  }
                  if (tmp) {
                    if (obj.charCodeAt(0) <= 57) {
                      updateResult(valid.diagnoses.rfc5321TLDNumeric);
                    } else if (0 === typeError) {
                      updateResult(valid.diagnoses.rfc5321TLD);
                    }
                    obj = obj2.domains[typeError];
                  }
                  if (valid < valid) {
                    valid = valid.diagnoses.valid;
                  }
                  if (errorLevel) {
                    let tmp16 = tmp14;
                  } else {
                    tmp16 = tmp14 < valid.defaultThreshold;
                  }
                  if (_null) {
                    if (c9) {
                      _null(tmp16);
                    } else {
                      valid.defer(_null.bind(null, tmp16));
                    }
                  }
                  return tmp16;
                }
                if (obj.checkDNS) {
                  typeError = valid;
                  typeError = valid;
                  if (valid < valid.categories.dnsWarn) {
                    typeError = (() => {
                      if (0 === typeError) {
                        obj1.domain = `${obj1.domain}.`;
                      }
                      const domain = obj1.domain;
                      const mx = errorLevel.resolveMx(domain, () => { ... });
                      let c9 = true;
                    })();
                  }
                }
                c9 = true;
                return finish();
              };
              obj.validate = fn3;
              fn.validate = fn3;
              obj = {};
              const _Object2 = Object;
              const keys = Object.keys(obj.diagnoses);
              let num4 = 0;
              if (0 < keys.length) {
                do {
                  let tmp3 = keys[num4];
                  obj[tmp3] = obj.diagnoses[tmp3];
                  num4 = num4 + 1;
                  length = keys.length;
                } while (num4 < length);
              }
              obj.validate.diagnoses = obj;
              fn.diagnoses = obj;
            }
          }
          fn2 = (arg0) => setTimeout(arg0, 0);
        }
        fn = (arg0) => {
          if (arg0) {
            const _Symbol = Symbol;
            if ("function" === typeof Symbol) {
              const _Symbol2 = Symbol;
              if (arg0.constructor === Symbol) {
                const _Symbol3 = Symbol;
                let str2 = "symbol";
              }
              return str2;
            }
          }
          str2 = typeof arg0;
        };
      };
      fn.call(arg1, arg2(7));
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg2(24);
      module.exports = {
        Uri: {
          createUriRegex(arg0, flag, flag2) {
            let scheme = closure_0.scheme;
            if (flag2) {
              let text = `${"(?:" + closure_0.relativeRef})`;
            } else {
              if (arg0) {
                scheme = `${"(?:" + arg0})`;
              }
              const text1 = `${"(?:" + scheme + ":" + closure_0.hierPart})`;
              text = text1;
              if (flag) {
                text = `${"(?:" + `${"(?:" + scheme + ":" + closure_0.hierPart})` + "|" + closure_0.relativeRef})`;
              }
            }
            const regExp = new RegExp("^" + text + "(?:\\?" + closure_0.query + ")?(?:#" + closure_0.fragment + ")?$");
            return regExp;
          }
        }
      }.Uri;
    },
    (arg0, arg1) => {
      const obj = {
        rfc3986: {},
        generate() {
          obj.rfc3986.cidr = "[0-9]|[1-2][0-9]|3[0-2]";
          obj.rfc3986.IPv4address = "(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
          obj.rfc3986.IPv6address = `(?:(?:[0-9A-Fa-f]{1,4}:){6}${`${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`}|::(?:[0-9A-Fa-f]{1,4}:){5}${`${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}${`${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}${`${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}${`${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:${`${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`}|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::${`${"(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|" + obj.rfc3986.IPv4address})`}|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)`;
          obj.rfc3986.IPvFuture = "v[0-9A-Fa-f]+\\.[a-zA-Z0-9-\\._~!\\$&'\\(\\)\\*\\+,;=:]+";
          obj.rfc3986.scheme = "[a-zA-Z][a-zA-Z0-9+-\\.]*";
          obj.rfc3986.hierPart = `${`${"(?:(?:\\/\\/" + ("(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:]*@)?" + ("(?:" + ("\\[(?:" + obj.rfc3986.IPv6address + "|" + obj.rfc3986.IPvFuture + ")\\]") + "|" + obj.rfc3986.IPv4address + "|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=]{0,255})") + "(?::[0-9]*)?") + "(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*" + ")" + "|"}\\/(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)?`}|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)`;
          obj.rfc3986.relativeRef = `${`${"(?:(?:\\/\\/" + ("(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:]*@)?" + ("(?:" + ("\\[(?:" + obj.rfc3986.IPv6address + "|" + obj.rfc3986.IPvFuture + ")\\]") + "|" + obj.rfc3986.IPv4address + "|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=]{0,255})") + "(?::[0-9]*)?") + "(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*" + ")" + "|"}\\/(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)?`}|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*|)`;
          obj.rfc3986.query = "[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@\\/\\?]*(?=#|$)";
          obj.rfc3986.fragment = "[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@\\/\\?]*";
        }
      };
      obj.generate();
      arg0.exports = obj.rfc3986;
    },
    (arg0, arg1, arg2) => {
      const tmp = arg2(24);
      obj = { Ip: { cidrs: obj, versions: obj } };
      obj = { required: `\\/(?:${tmp.cidr})`, optional: `(?:\\/(?:${tmp.cidr}))?`, forbidden: "" };
      obj = { ipv4: tmp.IPv4address, ipv6: tmp.IPv6address, ipvfuture: tmp.IPvFuture };
      obj.Ip.createIpRegex = (arg0, arg1) => {
        let num = 0;
        let tmp2;
        if (0 < arg0.length) {
          do {
            let tmp3 = arg0[num];
            if (!text) {
              let tmp4 = obj;
              text = `^(?:${obj.Ip.versions[tmp3]}`;
            }
            let tmp5 = obj;
            text = `${tmp}|${obj.Ip.versions[tmp3]}`;
            num = num + 1;
            tmp2 = text;
          } while (num < arg0.length);
        }
        const regExp = new RegExp(tmp2 + ")" + obj.Ip.cidrs[arg1] + "$");
        return regExp;
      };
      module.exports = obj.Ip;
    },
    (arg0, arg1, arg2) => {
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      let closure_0 = arg2(15);
      let closure_1 = arg2(2);
      let obj = {
        precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/,
        Number: ((arg0) => {
          let closure_0 = arg0;
          class _class {
            constructor() {
              self = this;
              if (this instanceof _class) {
                tmp6 = closure_0;
                callResult = closure_0.call(self);
                if (self) {
                  tmp13 = self;
                  if (callResult) {
                    tmp14 = typeof callResult;
                    str3 = "object";
                    if ("object" === tmp14) {
                      tmp13 = callResult;
                    } else {
                      str4 = "function";
                      tmp13 = self;
                    }
                  }
                  str5 = "number";
                  tmp13._type = "number";
                  _invalids = tmp13._invalids;
                  num = Infinity;
                  addResult = _invalids.add(Infinity);
                  _invalids2 = tmp13._invalids;
                  num2 = -Infinity;
                  addResult1 = _invalids2.add(-Infinity);
                  return tmp13;
                } else {
                  tmp8 = globalThis;
                  _ReferenceError = ReferenceError;
                  prototype2 = ReferenceError.prototype;
                  tmp9 = new.target;
                  str2 = "this hasn't been initialised - super() hasn't been called";
                  tmp10 = new.target;
                  referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  tmp12 = referenceError;
                  throw referenceError;
                }
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp2 = new.target;
                str = "Cannot call a class as a function";
                tmp3 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp5 = typeError;
                throw typeError;
              }
            }
            _base(arg0, arg1, arg2) {
              self = this;
              obj = { errors: null, value: arg0 };
              if ("string" === typeof arg0) {
                if (arg2.convert) {
                  tmp = globalThis;
                  _parseFloat = parseFloat;
                  _NaN = parseFloat(arg0);
                  _isNaN = isNaN;
                  if (isNaN(_NaN)) {
                    _NaN = NaN;
                  } else {
                    _isFinite = isFinite;
                  }
                  obj.value = _NaN;
                }
              }
              tmp2 = "number" === typeof obj.value;
              if (tmp2) {
                tmp3 = globalThis;
                _isNaN2 = isNaN;
                tmp2 = !isNaN(obj.value);
              }
              if (arg2.convert) {
                str = "precision";
                if ("precision" in self._flags) {
                  if (tmp2) {
                    tmp4 = globalThis;
                    _Math = Math;
                    num = 10;
                    powResult = Math.pow(10, self._flags.precision);
                    _Math2 = Math;
                    obj.value = Math.round(obj.value * powResult) / powResult;
                  }
                }
              }
              error = null;
              if (!tmp2) {
                str2 = "number.base";
                tmp7 = arg1;
                tmp8 = self;
                tmp9 = null;
                tmp10 = arg2;
                error = self.createError("number.base", null, arg1, arg2);
              }
              obj.errors = error;
              return obj;
            }
            multiple(arg0) {
              self = this;
              closure_0 = arg0;
              isRefResult = closure_0.isRef(arg0);
              isRef = isRefResult;
              if (!isRefResult) {
                str = "number";
                isFiniteResult = "number" === typeof arg0;
                tmp2 = _class;
                if (isFiniteResult) {
                  tmp4 = globalThis;
                  _isFinite = isFinite;
                  isFiniteResult = isFinite(arg0);
                }
                str2 = "multiple must be a number";
                assertResult = _class.assert(isFiniteResult, "multiple must be a number");
                tmp6 = _class;
                num = 0;
                str3 = "multiple must be greater than 0";
                assertResult1 = _class.assert(arg0 > 0, "multiple must be greater than 0");
              }
              return self._test("multiple", arg0, function(value, reference, closure_2) {
                const self = this;
                if (closure_1) {
                  let tmpResult = tmp(reference.reference || reference.parent, closure_2);
                  const tmp3 = reference.reference || reference.parent;
                } else {
                  tmpResult = tmp;
                }
                if (!closure_1) {
                  let error = value;
                  if (value % tmpResult != 0) {
                    let obj = { multiple: precision, value };
                    error = self.createError("number.multiple", obj, reference, closure_2);
                  }
                  let error1 = error;
                } else {
                  if ("number" === typeof tmpResult) {
                    const _isFinite = isFinite;
                  }
                  obj = { ref: precision.key };
                  error1 = self.createError("number.ref", obj, reference, closure_2);
                }
                return error1;
              });
            }
            integer() {
              return this._test("integer", undefined, function(value, closure_12, closure_2) {
                const self = this;
                let error = value;
                if (!_class.isInteger(value)) {
                  const obj = { value };
                  error = self.createError("number.integer", obj, closure_12, closure_2);
                }
                return error;
              });
            }
            negative() {
              return this._test("negative", undefined, function(value, closure_12, closure_2) {
                const self = this;
                let error = value;
                if (value >= 0) {
                  const obj = { value };
                  error = self.createError("number.negative", obj, closure_12, closure_2);
                }
                return error;
              });
            }
            positive() {
              return this._test("positive", undefined, function(value, closure_12, closure_2) {
                const self = this;
                let error = value;
                if (value <= 0) {
                  const obj = { value };
                  error = self.createError("number.positive", obj, closure_12, closure_2);
                }
                return error;
              });
            }
            precision(arg0) {
              closure_0 = arg0;
              assertResult = _class.assert(_class.isInteger(arg0), "limit must be an integer");
              assertResult1 = _class.assert(!("precision" in this._flags), "precision already set");
              _testResult = this._test("precision", arg0, function(value, closure_12, closure_2) {
                const self = this;
                const match = value.toString().match(outer2_2.precisionRx);
                let num = 0;
                if (match[1]) {
                  num = match[1].length;
                }
                let num2 = 0;
                if (match[2]) {
                  const _parseInt = parseInt;
                  num2 = parseInt(match[2], 10);
                }
                let error = value;
                if (Math.max(num - num2, 0) > closure_0) {
                  const obj = { limit: closure_0, value };
                  error = self.createError("number.precision", obj, closure_12, closure_2);
                }
                return error;
              });
              _testResult._flags.precision = arg0;
              return _testResult;
            }
          }
          _inherits(_class, arg0);
          return _class;
        })(arg2(14)),
        (arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          return function(closure_0) {
            let self = this;
            const isRefResult = closure_0.isRef(closure_0);
            let closure_1 = isRefResult;
            let tmp2 = "number" === typeof closure_0;
            if (tmp2) {
              let _isNaN = isNaN;
              tmp2 = !isNaN(closure_0);
            }
            if (!tmp2) {
              tmp2 = isRefResult;
            }
            closure_1.assert(tmp2, "limit must be a number or reference");
            return self._test(closure_0, closure_0, function(value, reference, closure_2) {
              const self = this;
              if (closure_1) {
                const tmpResult = tmp(reference.reference || reference.parent, closure_2);
                if ("number" === typeof tmpResult) {
                  const _isNaN = isNaN;
                  let tmp2 = tmpResult;
                }
                let obj = { ref: key.key };
                return self.createError("number.ref", obj, reference, closure_2);
              } else {
                tmp2 = tmp;
              }
              let error = value;
              if (!isRefResult(value, tmp2)) {
                obj = { limit: tmp2, value };
                error = self.createError(`number.${closure_0}`, obj, reference, closure_2);
              }
              return error;
            });
          };
        }
      };
      obj.Number.prototype.min = obj.compare("min", (arg0, arg1) => arg0 >= arg1);
      obj.Number.prototype.max = obj.compare("max", (arg0, arg1) => arg0 <= arg1);
      obj.Number.prototype.greater = obj.compare("greater", (arg0, arg1) => arg0 > arg1);
      obj.Number.prototype.less = obj.compare("less", (arg0, arg1) => arg0 < arg1);
      const number = new obj.Number();
      module.exports = number;
    },
    (arg0, arg1, arg2) => {
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      let tmp = arg2(14);
      let closure_0 = tmp;
      let closure_1 = arg2(2);
      let obj = {
        Set: arg2(18),
        Boolean: ((arg0) => {
          let closure_0 = arg0;
          class _class {
            constructor() {
              self = this;
              if (this instanceof _class) {
                tmp6 = closure_0;
                callResult = closure_0.call(self);
                if (self) {
                  tmp13 = self;
                  if (callResult) {
                    tmp14 = typeof callResult;
                    str3 = "object";
                    if ("object" === tmp14) {
                      tmp13 = callResult;
                    } else {
                      str4 = "function";
                      tmp13 = self;
                    }
                  }
                  str5 = "boolean";
                  tmp13._type = "boolean";
                  flag = true;
                  tmp13._flags.insensitive = true;
                  tmp15 = outer1_2;
                  _Set = outer1_2.Set;
                  prototype3 = _Set.prototype;
                  tmp16 = new.target;
                  tmp17 = new.target;
                  _Set = new _Set();
                  tmp19 = _Set;
                  tmp13._inner.truthySet = _Set;
                  _Set2 = outer1_2.Set;
                  prototype4 = _Set2.prototype;
                  tmp20 = new.target;
                  tmp21 = new.target;
                  _Set2 = new _Set2();
                  tmp23 = _Set2;
                  tmp13._inner.falsySet = _Set2;
                  return tmp13;
                } else {
                  tmp8 = globalThis;
                  _ReferenceError = ReferenceError;
                  prototype2 = ReferenceError.prototype;
                  tmp9 = new.target;
                  str2 = "this hasn't been initialised - super() hasn't been called";
                  tmp10 = new.target;
                  referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  tmp12 = referenceError;
                  throw referenceError;
                }
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp2 = new.target;
                str = "Cannot call a class as a function";
                tmp3 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp5 = typeError;
                throw typeError;
              }
            }
            _base(arg0, arg1, arg2) {
              self = this;
              obj = { value: arg0 };
              truthySet = this._inner.truthySet;
              tmp = !truthySet.has(arg0, null, null, this._flags.insensitive);
              tmp2 = !tmp;
              if (tmp) {
                falsySet = self._inner.falsySet;
                tmp3 = falsySet;
                tmp4 = arg0;
                tmp5 = null;
                tmp6 = null;
                tmp7 = !falsySet.has(arg0, null, null, self._flags.insensitive) && arg0;
                tmp2 = tmp7;
              }
              obj.value = tmp2;
              error = null;
              if ("boolean" !== typeof obj.value) {
                str = "boolean.base";
                tmp9 = arg1;
                tmp10 = arg2;
                tmp11 = self;
                tmp12 = null;
                error = self.createError("boolean.base", null, arg1, arg2);
              }
              obj.errors = error;
              return obj;
            }
            truthy() {
              cloneResult = this.clone();
              slice = Array.prototype.slice;
              flattenResult = _class.flatten(slice.call(arguments));
              num = 0;
              if (0 < flattenResult.length) {
                do {
                  tmp2 = flattenResult[num];
                  tmp3 = _class;
                  assertResult = _class.assert(undefined !== tmp2, "Cannot call truthy with undefined");
                  truthySet = cloneResult._inner.truthySet;
                  addResult = truthySet.add(tmp2);
                  num = num + 1;
                  length = flattenResult.length;
                } while (num < length);
              }
              return cloneResult;
            }
            falsy() {
              cloneResult = this.clone();
              slice = Array.prototype.slice;
              flattenResult = _class.flatten(slice.call(arguments));
              num = 0;
              if (0 < flattenResult.length) {
                do {
                  tmp2 = flattenResult[num];
                  tmp3 = _class;
                  assertResult = _class.assert(undefined !== tmp2, "Cannot call falsy with undefined");
                  falsySet = cloneResult._inner.falsySet;
                  addResult = falsySet.add(tmp2);
                  num = num + 1;
                  length = flattenResult.length;
                } while (num < length);
              }
              return cloneResult;
            }
            insensitive(arg0) {
              self = this;
              tmp = undefined === arg0 || arg0;
              if (tmp !== self._flags.insensitive) {
                cloneResult = self.clone();
                cloneResult._flags.insensitive = tmp;
                return cloneResult;
              } else {
                return self;
              }
            }
            describe() {
              describe = closure_0.prototype.describe;
              callResult = describe.call(this);
              items = [];
              items[0] = true;
              truthySet = this._inner.truthySet;
              callResult.truthy = items.concat(truthySet.values());
              items1 = [];
              items1[0] = false;
              falsySet = this._inner.falsySet;
              callResult.falsy = items1.concat(falsySet.values());
              return callResult;
            }
          }
          _inherits(_class, arg0);
          return _class;
        })(tmp)
      };
      const boolean = new obj.Boolean();
      module.exports = boolean;
    },
    (arg0, arg1, arg2) => {
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      if ("function" === typeof Symbol) {
        let _Symbol = Symbol;
        if ("symbol" === typeof Symbol.iterator) {
          let fn = (arg0) => typeof arg0;
        }
        let closure_1 = arg2(2);
        let tmp = arg2(14);
        let closure_2 = tmp;
        let closure_3 = arg2(19);
        let closure_4 = arg2(15);
        let obj = {
          Alternatives: ((arg0) => {
              let closure_0 = arg0;
              class _class {
                constructor() {
                  self = this;
                  if (this instanceof _class) {
                    tmp6 = closure_0;
                    callResult = closure_0.call(self);
                    if (self) {
                      tmp13 = self;
                      if (callResult) {
                        tmp14 = typeof callResult;
                        str3 = "object";
                        if ("object" === tmp14) {
                          tmp13 = callResult;
                        } else {
                          str4 = "function";
                          tmp13 = self;
                        }
                      }
                      str5 = "alternatives";
                      tmp13._type = "alternatives";
                      _invalids = tmp13._invalids;
                      tmp15 = null;
                      removeResult = _invalids.remove(null);
                      tmp13._inner.matches = [];
                      return tmp13;
                    } else {
                      tmp8 = globalThis;
                      _ReferenceError = ReferenceError;
                      prototype2 = ReferenceError.prototype;
                      tmp9 = new.target;
                      str2 = "this hasn't been initialised - super() hasn't been called";
                      tmp10 = new.target;
                      referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      tmp12 = referenceError;
                      throw referenceError;
                    }
                  } else {
                    tmp = globalThis;
                    _TypeError = TypeError;
                    prototype = TypeError.prototype;
                    tmp2 = new.target;
                    str = "Cannot call a class as a function";
                    tmp3 = new.target;
                    typeError = new TypeError("Cannot call a class as a function");
                    tmp5 = typeError;
                    throw typeError;
                  }
                }
                _base(arg0, arg1, arg2) {
                  self = this;
                  items = [];
                  length = this._inner.matches.length;
                  obj = this._settings && self._settings.baseType;
                  num = 0;
                  obj2 = items;
                  error = items;
                  if (0 < length) {
                    while (true) {
                      promise = self._inner.matches[num];
                      schema = promise.schema;
                      if (schema) {
                        _validateResult = schema._validate(arg0, arg1, arg2);
                        if (_validateResult.errors) {
                          combined = obj2.concat(_validateResult.errors);
                          tmp6 = _validateResult;
                        } else {
                          return _validateResult;
                        }
                      } else {
                        is = promise.is;
                        parent = arg1.reference;
                        if (!parent) {
                          parent = arg1.parent;
                        }
                        tmp2 = is;
                        tmp3 = null;
                        tmp4 = arg2;
                        if (is._validate(promise.ref(parent, arg2), null, arg2, arg1.parent).errors) {
                          if (promise.otherwise) {
                            otherwise = promise.otherwise;
                            return otherwise._validate(arg0, arg1, arg2);
                          } else {
                            combined = obj2;
                            tmp6 = tmp;
                            if (obj) {
                              combined = obj2;
                              tmp6 = tmp;
                              if (num === length - 1) {
                                return obj._validate(arg0, arg1, arg2);
                              }
                            }
                          }
                        } else if (promise.then) {
                          break;
                        } else {
                          combined = obj2;
                          tmp6 = tmp;
                          if (obj) {
                            break;
                          }
                        }
                      }
                      num = num + 1;
                      obj2 = combined;
                      tmp = tmp6;
                      error = combined;
                    }
                    obj3 = promise.then || obj;
                    return obj3._validate(arg0, arg1, arg2);
                  }
                  obj = {};
                  if (!error.length) {
                    str = "alternatives.base";
                    tmp8 = self;
                    tmp9 = null;
                    tmp10 = arg1;
                    tmp11 = arg2;
                    error = self.createError("alternatives.base", null, arg1, arg2);
                  }
                  obj.errors = error;
                  return obj;
                }
                try() {
                  slice = Array.prototype.slice;
                  flattenResult = _class.flatten(slice.call(arguments));
                  assertResult = _class.assert(flattenResult.length, "Cannot add other alternatives without at least one schema");
                  cloneResult = this.clone();
                  for (let num = 0; num < flattenResult.length; num = num + 1) {
                    tmp3 = outer1_3;
                    schemaResult = outer1_3.schema(flattenResult[num]);
                    if (schemaResult._refs.length) {
                      _refs = cloneResult._refs;
                      cloneResult._refs = _refs.concat(schemaResult._refs);
                    }
                    matches = cloneResult._inner.matches;
                    obj = {};
                    obj.schema = schemaResult;
                    arr = matches.push(obj);
                  }
                  return cloneResult;
                }
                when(arg0, arg1) {
                  self = this;
                  tmp = _class;
                  isRefResult = outer1_4.isRef(arg0);
                  if (!isRefResult) {
                    str = "string";
                    isRefResult = "string" === typeof arg0;
                  }
                  assertResult = _class.assert(isRefResult, "Invalid reference:", arg0);
                  assertResult1 = _class.assert(arg1, "Missing options");
                  str2 = "undefined";
                  tmp5 = _class;
                  if (undefined !== arg1) {
                    tmp6 = closure_0;
                    str2 = closure_0(arg1);
                  }
                  assertResult2 = _class.assert("object" === str2, "Invalid options");
                  assertResult3 = _class.assert(arg1.hasOwnProperty("is"), "Missing \"is\" directive");
                  tmp10 = undefined !== arg1.then;
                  tmp9 = _class;
                  if (!tmp10) {
                    tmp10 = undefined !== arg1.otherwise;
                  }
                  assertResult4 = _class.assert(tmp10, "options must have at least one of \"then\" or \"otherwise\"");
                  cloneResult = self.clone();
                  schemaResult = outer1_3.schema(arg1.is);
                  tmp13 = null !== arg1.is;
                  if (tmp13) {
                    tmp14 = outer1_4;
                    isRefResult1 = outer1_4.isRef(arg1.is);
                    if (!isRefResult1) {
                      tmp16 = outer1_2;
                      isRefResult1 = arg1.is instanceof outer1_2;
                    }
                    tmp13 = isRefResult1;
                  }
                  requiredResult = schemaResult;
                  if (!tmp13) {
                    requiredResult = schemaResult.required();
                  }
                  obj = { ref: outer1_3.ref(arg0) };
                  obj.is = requiredResult;
                  schemaResult1 = undefined;
                  if (undefined !== arg1.then) {
                    tmp19 = outer1_3;
                    schemaResult1 = outer1_3.schema(arg1.then);
                  }
                  obj.then = schemaResult1;
                  schemaResult2 = undefined;
                  if (undefined !== arg1.otherwise) {
                    tmp21 = outer1_3;
                    schemaResult2 = outer1_3.schema(arg1.otherwise);
                  }
                  obj.otherwise = schemaResult2;
                  tmp22 = cloneResult._settings && cloneResult._settings.baseType;
                  if (tmp22) {
                    then = obj.then;
                    if (then) {
                      baseType = cloneResult._settings.baseType;
                      then = baseType.concat(obj.then);
                    }
                    obj.then = then;
                    otherwise = obj.otherwise;
                    if (otherwise) {
                      baseType2 = cloneResult._settings.baseType;
                      otherwise = baseType2.concat(obj.otherwise);
                    }
                    obj.otherwise = otherwise;
                  }
                  arr = outer1_4.push(cloneResult._refs, obj.ref);
                  _refs = cloneResult._refs;
                  cloneResult._refs = _refs.concat(obj.is._refs);
                  tmp24 = obj.then && obj.then._refs;
                  if (tmp24) {
                    _refs2 = cloneResult._refs;
                    cloneResult._refs = _refs2.concat(obj.then._refs);
                  }
                  tmp25 = obj.otherwise && obj.otherwise._refs;
                  if (tmp25) {
                    _refs3 = cloneResult._refs;
                    cloneResult._refs = _refs3.concat(obj.otherwise._refs);
                  }
                  matches = cloneResult._inner.matches;
                  arr1 = matches.push(obj);
                  return cloneResult;
                }
                describe() {
                  self = this;
                  describe = outer1_2.prototype.describe;
                  callResult = describe.call(this);
                  items = [];
                  num = 0;
                  if (0 < this._inner.matches.length) {
                    do {
                      promise = self._inner.matches[num];
                      if (promise.schema) {
                        schema = promise.schema;
                        arr = items.push(schema.describe());
                        obj = tmp2;
                      } else {
                        obj = {};
                        str = promise.ref;
                        obj.ref = str.toString();
                        is = promise.is;
                        obj.is = is.describe();
                        if (promise.then) {
                          then = promise.then;
                          obj.then = then.describe();
                        }
                        if (promise.otherwise) {
                          otherwise = promise.otherwise;
                          obj.otherwise = otherwise.describe();
                        }
                        arr1 = items.push(obj);
                      }
                      num = num + 1;
                      tmp2 = obj;
                    } while (num < self._inner.matches.length);
                  }
                  callResult.alternatives = items;
                  return callResult;
                }
              }
              _inherits(_class, arg0);
              return _class;
            })(tmp)
        };
        const Alternatives = obj.Alternatives;
        let prototype = Alternatives.prototype;
        const alternatives = new Alternatives();
        module.exports = alternatives;
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if ("function" === typeof Symbol) {
            const _Symbol2 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol3 = Symbol;
              let str2 = "symbol";
            }
            return str2;
          }
        }
        str2 = typeof arg0;
      };
    },
    (arg0, arg1, arg2) => {
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      if ("function" === typeof Symbol) {
        let _Symbol = Symbol;
        if ("symbol" === typeof Symbol.iterator) {
          let fn = (arg0) => typeof arg0;
        }
        let closure_1 = arg2(2);
        let closure_2 = arg2(30);
        let tmp = arg2(14);
        let closure_3 = tmp;
        let closure_4 = arg2(16);
        let closure_5 = arg2(19);
        let closure_6 = arg2(15);
        let obj = {
          Object: ((arg0) => {
              let closure_0 = arg0;
              class _class {
                constructor() {
                  self = this;
                  if (this instanceof _class) {
                    tmp6 = closure_0;
                    callResult = closure_0.call(self);
                    if (self) {
                      tmp13 = self;
                      if (callResult) {
                        tmp14 = typeof callResult;
                        str3 = "object";
                        if ("object" === tmp14) {
                          tmp13 = callResult;
                        } else {
                          str4 = "function";
                          tmp13 = self;
                        }
                      }
                      str5 = "object";
                      tmp13._type = "object";
                      tmp15 = null;
                      tmp13._inner.children = null;
                      tmp13._inner.renames = [];
                      tmp13._inner.dependencies = [];
                      tmp13._inner.patterns = [];
                      return tmp13;
                    } else {
                      tmp8 = globalThis;
                      _ReferenceError = ReferenceError;
                      prototype2 = ReferenceError.prototype;
                      tmp9 = new.target;
                      str2 = "this hasn't been initialised - super() hasn't been called";
                      tmp10 = new.target;
                      referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      tmp12 = referenceError;
                      throw referenceError;
                    }
                  } else {
                    tmp = globalThis;
                    _TypeError = TypeError;
                    prototype = TypeError.prototype;
                    tmp2 = new.target;
                    str = "Cannot call a class as a function";
                    tmp3 = new.target;
                    typeError = new TypeError("Cannot call a class as a function");
                    tmp5 = typeError;
                    throw typeError;
                  }
                }
                _base(arg0, arg1, arg2) {
                  self = this;
                  safeParse = arg0;
                  target = arg0;
                  items = [];
                  closure_2 = items;
                  finish = function finish() {
                    const obj = { value: target };
                    let tmp = null;
                    if (items.length) {
                      tmp = items;
                    }
                    obj.errors = tmp;
                    return obj;
                  };
                  tmp5 = "string" === typeof arg0 && arg2.convert;
                  tmp6 = arg0;
                  if (tmp5) {
                    tmp7 = outer1_7;
                    safeParseResult = outer1_7.safeParse(arg0);
                    safeParse = safeParseResult;
                    tmp6 = safeParseResult;
                  }
                  str = "object";
                  if (self._flags.func) {
                    str = "function";
                  }
                  if (tmp6) {
                    str2 = "undefined";
                    if (undefined !== tmp6) {
                      tmp9 = closure_0;
                      str2 = closure_0(tmp6);
                    }
                    if (str2 === str) {
                      tmp53 = globalThis;
                      _Array = Array;
                      if (!Array.isArray(tmp6)) {
                        if (!self._inner.renames.length) {
                          if (!self._inner.dependencies.length) {
                            if (!self._inner.children) {
                              if (!self._inner.patterns.length) {
                                target = tmp6;
                                return finish();
                              }
                            }
                          }
                        }
                        if (arg0 === tmp6) {
                          if ("object" === str) {
                            _Object = Object;
                            _Object2 = Object;
                            obj = Object.create(Object.getPrototypeOf(tmp6));
                            target = obj;
                            target = obj;
                          } else {
                            class target {
                              constructor() {
                                return safeParse(...arguments);
                              }
                            }
                            tmp11 = _class;
                            target.prototype = _class.clone(tmp6.prototype);
                          }
                          _Object3 = Object;
                          keys = Object.keys(tmp6);
                          num = 0;
                          tmp10 = target;
                          if (0 < keys.length) {
                            class target {
                              constructor() {
                                return safeParse(...arguments);
                              }
                            }
                          }
                        } else {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                          tmp10 = tmp6;
                        }
                        obj = {};
                        num2 = 0;
                        flag = true;
                        str3 = "object.rename.override";
                        str4 = "object.rename.multiple";
                        num3 = 0;
                        if (0 < self._inner.renames.length) {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                          while (true) {
                            class target {
                              constructor() {
                                return safeParse(...arguments);
                              }
                            }
                            if (!tmp13.options.ignoreUndefined) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                              _Object4 = Object;
                              hasOwnProperty = Object.prototype.hasOwnProperty;
                              if (hasOwnProperty.call(tmp10, tmp13.to)) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                              }
                              if (undefined === tmp10[tmp13.from]) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                                delete tmp3[tmp4];
                              } else {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                              }
                              obj[tmp13.to] = true;
                              if (!tmp13.options.alias) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                                delete tmp3[tmp];
                              }
                            } else {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                            }
                            num3 = num3 + 1;
                            if (num3 < self._inner.renames.length) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                            }
                          }
                          return finish();
                        }
                        if (!self._inner.children) {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                        }
                        tmp14 = _class;
                        _Object5 = Object;
                        mapToObjectResult = _class.mapToObject(Object.keys(tmp10));
                        if (self._inner.children) {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                          str5 = ".";
                          str6 = "";
                          num4 = 0;
                          if (0 < self._inner.children.length) {
                            class target {
                              constructor() {
                                return safeParse(...arguments);
                              }
                            }
                            while (true) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                              key = tmp16.key;
                              delete tmp2[tmp];
                              obj1 = {};
                              obj1.key = key;
                              tmp17 = arg1.path || "";
                              str7 = "";
                              if (arg1.path) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                                if (key) {
                                  class target {
                                    constructor() {
                                      return safeParse(...arguments);
                                    }
                                  }
                                }
                              }
                              obj1.path = tmp17 + str7 + key;
                              obj1.parent = tmp10;
                              obj1.reference = arg1.reference;
                              schema = tmp16.schema;
                              _validateResult = schema._validate(tmp10[key], obj1, arg2);
                              if (_validateResult.errors) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                                tmp19.key = key;
                                schema2 = tmp16.schema;
                                tmp19.child = schema2._getLabel(key);
                                tmp19.reason = _validateResult.errors;
                                tmp20 = self;
                                str8 = "object.child";
                                tmp21 = tmp19;
                                tmp22 = obj1;
                                tmp23 = arg2;
                                arr = items.push(self.createError("object.child", tmp19, obj1, arg2));
                                if (arg2.abortEarly) {
                                  class target {
                                    constructor() {
                                      return safeParse(...arguments);
                                    }
                                  }
                                }
                              }
                              if (tmp16.schema._flags.strip) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                              } else {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                              }
                              num4 = num4 + 1;
                              if (num4 < self._inner.children.length) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                              }
                            }
                            return finish();
                          }
                        }
                        _Object6 = Object;
                        keys1 = Object.keys(mapToObjectResult);
                        keys2 = keys1;
                        if (keys1.length) {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                          if (self._inner.patterns.length) {
                            class target {
                              constructor() {
                                return safeParse(...arguments);
                              }
                            }
                            str9 = ".";
                            str10 = "";
                            num5 = 0;
                            if (0 < keys1.length) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                              while (true) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                                obj2 = {};
                                obj2.key = tmp27;
                                str11 = "";
                                if (arg1.path) {
                                  class target {
                                    constructor() {
                                      return safeParse(...arguments);
                                    }
                                  }
                                }
                                obj2.path = str11 + tmp27;
                                obj2.parent = tmp10;
                                obj2.reference = arg1.reference;
                                num6 = 0;
                                tmp29 = tmp26;
                                if (0 < self._inner.patterns.length) {
                                  class target {
                                    constructor() {
                                      return safeParse(...arguments);
                                    }
                                  }
                                  while (true) {
                                    class target {
                                      constructor() {
                                        return safeParse(...arguments);
                                      }
                                    }
                                    regex = tmp30.regex;
                                    if (regex.test(tmp27)) {
                                      class target {
                                        constructor() {
                                          return safeParse(...arguments);
                                        }
                                      }
                                      rule = tmp30.rule;
                                      iter = rule._validate(tmp28, obj2, arg2);
                                      if (iter.errors) {
                                        class target {
                                          constructor() {
                                            return safeParse(...arguments);
                                          }
                                        }
                                        tmp31.key = tmp27;
                                        rule2 = tmp30.rule;
                                        tmp31.child = rule2._getLabel(tmp27);
                                        tmp31.reason = iter.errors;
                                        tmp32 = self;
                                        str12 = "object.child";
                                        tmp33 = tmp31;
                                        tmp34 = obj2;
                                        tmp35 = arg2;
                                        arr1 = items.push(self.createError("object.child", tmp31, obj2, arg2));
                                        if (arg2.abortEarly) {
                                          class target {
                                            constructor() {
                                              return safeParse(...arguments);
                                            }
                                          }
                                        }
                                      }
                                      tmp29 = iter;
                                      if (undefined !== iter.value) {
                                        class target {
                                          constructor() {
                                            return safeParse(...arguments);
                                          }
                                        }
                                        tmp29 = iter;
                                      }
                                    }
                                    num6 = num6 + 1;
                                    tmp37 = tmp30;
                                    tmp26 = tmp29;
                                    if (num6 < self._inner.patterns.length) {
                                      class target {
                                        constructor() {
                                          return safeParse(...arguments);
                                        }
                                      }
                                    }
                                    continue;
                                  }
                                  return finish();
                                }
                                num5 = num5 + 1;
                                if (num5 < keys1.length) {
                                  class target {
                                    constructor() {
                                      return safeParse(...arguments);
                                    }
                                  }
                                }
                              }
                            }
                            _Object7 = Object;
                            keys2 = Object.keys(mapToObjectResult);
                          }
                        }
                        if (self._inner.children) {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                        } else {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                        }
                        str13 = ".";
                        str14 = "";
                        tmp38 = null;
                        num7 = 0;
                        if (0 < self._inner.dependencies.length) {
                          class target {
                            constructor() {
                              return safeParse(...arguments);
                            }
                          }
                          while (true) {
                            class target {
                              constructor() {
                                return safeParse(...arguments);
                              }
                            }
                            tmp40 = outer1_7;
                            obj4 = outer1_7[tmp39.type];
                            tmp41 = null !== tmp39.key;
                            if (tmp41) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                            }
                            peers = tmp39.peers;
                            obj3 = {};
                            obj3.key = tmp39.key;
                            tmp42 = arg1.path || "";
                            str15 = "";
                            if (tmp39.key) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                            }
                            obj3.path = tmp42 + str15;
                            tmp43 = obj4;
                            tmp44 = self;
                            tmp45 = tmp41;
                            tmp46 = peers;
                            tmp47 = tmp10;
                            tmp48 = obj3;
                            tmp49 = arg2;
                            callResult = obj4.call(self, tmp41, peers, tmp10, obj3, arg2);
                            tmp51 = outer1_4;
                            if (callResult instanceof outer1_4.Err) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                              if (arg2.abortEarly) {
                                class target {
                                  constructor() {
                                    return safeParse(...arguments);
                                  }
                                }
                              }
                            }
                            num7 = num7 + 1;
                            if (num7 < self._inner.dependencies.length) {
                              class target {
                                constructor() {
                                  return safeParse(...arguments);
                                }
                              }
                            }
                          }
                          return finish();
                        }
                        return finish();
                      }
                    }
                  }
                  arr2 = items.push(self.createError(`${str}.base`, null, arg1, arg2));
                  return finish();
                }
                _func() {
                  cloneResult = this.clone();
                  cloneResult._flags.func = true;
                  return cloneResult;
                }
                keys(arg0) {
                  self = this;
                  tmp = arg0;
                  tmp3 = null == arg0;
                  tmp2 = _class;
                  if (!tmp3) {
                    tmp4 = arg0;
                    str = "undefined";
                    if (undefined !== tmp) {
                      tmp5 = closure_0;
                      tmp6 = arg0;
                      str = closure_0(tmp);
                    }
                    str2 = "object";
                    tmp3 = "object" === str;
                  }
                  assertResult = _class.assert(tmp3, "Object schema must be a valid object");
                  tmp9 = arg0;
                  tmp8 = _class;
                  if (arg0) {
                    tmp10 = arg0;
                    tmp11 = outer1_3;
                    tmp9 = tmp instanceof outer1_3;
                  }
                  assertResult1 = _class.assert(!tmp9, "Object schema cannot be a joi schema");
                  cloneResult = self.clone();
                  if (tmp) {
                    tmp14 = globalThis;
                    _Object = Object;
                    tmp15 = arg0;
                    keys = Object.keys(tmp);
                    arr2 = keys;
                    if (keys.length) {
                      tmp16 = outer1_2;
                      prototype = outer1_2.prototype;
                      tmp17 = new.target;
                      tmp18 = new.target;
                      tmp19 = new outer1_2();
                      obj = tmp19;
                      if (cloneResult._inner.children) {
                        num = 0;
                        num2 = -1;
                        if (0 < cloneResult._inner.children.length) {
                          do {
                            tmp20 = cloneResult._inner.children[num];
                            tmp21 = keys;
                            if (-1 === arr2.indexOf(tmp20.key)) {
                              tmp22 = tmp19;
                              obj = {};
                              ({ _refs: obj2.after, key: obj2.group } = tmp20);
                              addResult = obj.add(tmp20, obj);
                            }
                            num = num + 1;
                          } while (num < cloneResult._inner.children.length);
                        }
                      }
                      num3 = 0;
                      num4 = 0;
                      tmp24 = keys;
                      if (0 < arr2.length) {
                        do {
                          tmp25 = keys;
                          tmp26 = num4;
                          tmp27 = arr2[num4];
                          tmp28 = tmp27;
                          tmp29 = arg0;
                          tmp30 = tmp[tmp27];
                          tmp31 = outer1_5;
                          tmp32 = tmp30;
                          schemaResult = outer1_5.schema(tmp30);
                          tmp34 = tmp19;
                          obj1 = {};
                          tmp35 = tmp27;
                          obj1.key = tmp27;
                          obj1.schema = schemaResult;
                          obj2 = {};
                          obj2.after = schemaResult._refs;
                          obj2.group = tmp27;
                          addResult1 = obj.add(obj1, obj2);
                          tmp37 = num4;
                          sum = num4 + 1;
                          num4 = sum;
                          tmp39 = keys;
                          length = arr2.length;
                        } while (sum < length);
                      }
                      cloneResult._inner.children = tmp19.nodes;
                      return cloneResult;
                    } else {
                      cloneResult._inner.children = [];
                      return cloneResult;
                    }
                  } else {
                    cloneResult._inner.children = null;
                    return cloneResult;
                  }
                }
                unknown(arg0) {
                  cloneResult = this.clone();
                  cloneResult._flags.allowUnknown = false !== arg0;
                  return cloneResult;
                }
                length(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = _class;
                  isIntegerResult = _class.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                  return self._test("length", arg0, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (Object.keys(arg0).length !== closure_0) {
                      const obj = { limit: closure_0 };
                      error = self.createError("object.length", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                arity(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = _class;
                  isIntegerResult = _class.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = _class.assert(isIntegerResult, "n must be a positive integer");
                  return self._test("arity", arg0, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (arg0.length !== closure_0) {
                      const obj = { n: closure_0 };
                      error = self.createError("function.arity", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                minArity(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = _class;
                  isIntegerResult = _class.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 > 0;
                  }
                  assertResult = _class.assert(isIntegerResult, "n must be a strict positive integer");
                  return self._test("minArity", arg0, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (arg0.length < closure_0) {
                      const obj = { n: closure_0 };
                      error = self.createError("function.minArity", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                maxArity(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = _class;
                  isIntegerResult = _class.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = _class.assert(isIntegerResult, "n must be a positive integer");
                  return self._test("maxArity", arg0, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (arg0.length > closure_0) {
                      const obj = { n: closure_0 };
                      error = self.createError("function.maxArity", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                min(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = _class;
                  isIntegerResult = _class.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                  return self._test("min", arg0, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (Object.keys(arg0).length < closure_0) {
                      const obj = { limit: closure_0 };
                      error = self.createError("object.min", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                max(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = _class;
                  isIntegerResult = _class.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                  return self._test("max", arg0, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (Object.keys(arg0).length > closure_0) {
                      const obj = { limit: closure_0 };
                      error = self.createError("object.max", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                pattern(arg0, arg1) {
                  self = this;
                  tmp = arg1;
                  assertResult = _class.assert(arg0 instanceof RegExp, "Invalid regular expression");
                  str = undefined;
                  assertResult1 = _class.assert(undefined !== arg1, "Invalid rule");
                  if (arg0.ignoreCase) {
                    str = "i";
                  }
                  regExp = new RegExp(arg0.source, str);
                  schemaResult = outer1_5.schema(tmp);
                  cloneResult = self.clone();
                  patterns = cloneResult._inner.patterns;
                  arr = patterns.push({ regex: regExp, rule: schemaResult });
                  return cloneResult;
                }
                schema() {
                  return this._test("schema", null, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (!(arg0 instanceof outer2_3)) {
                      error = self.createError("object.schema", null, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                with(arg0, arg1) {
                  return this._dependency("with", arg0, arg1);
                }
                without(arg0, arg1) {
                  return this._dependency("without", arg0, arg1);
                }
                xor() {
                  slice = Array.prototype.slice;
                  return this._dependency("xor", null, _class.flatten(slice.call(arguments)));
                }
                or() {
                  slice = Array.prototype.slice;
                  return this._dependency("or", null, _class.flatten(slice.call(arguments)));
                }
                and() {
                  slice = Array.prototype.slice;
                  return this._dependency("and", null, _class.flatten(slice.call(arguments)));
                }
                nand() {
                  slice = Array.prototype.slice;
                  return this._dependency("nand", null, _class.flatten(slice.call(arguments)));
                }
                requiredKeys(arg0) {
                  slice = Array.prototype.slice;
                  return this.applyFunctionToChildren(_class.flatten(slice.call(arguments)), "required");
                }
                optionalKeys(arg0) {
                  slice = Array.prototype.slice;
                  return this.applyFunctionToChildren(_class.flatten(slice.call(arguments)), "optional");
                }
                rename(arg0, arg1, arg2) {
                  obj = arg2;
                  self = this;
                  assertResult = _class.assert("string" === typeof arg0, "Rename missing the from argument");
                  assertResult1 = _class.assert("string" === typeof arg1, "Rename missing the to argument");
                  assertResult2 = _class.assert(arg1 !== arg0, "Cannot rename key to same name:", arg0);
                  num = 0;
                  if (0 < this._inner.renames.length) {
                    do {
                      tmp4 = _class;
                      assertResult3 = _class.assert(self._inner.renames[num].from !== arg0, "Cannot rename the same key multiple times");
                      num = num + 1;
                      length = self._inner.renames.length;
                    } while (num < length);
                  }
                  cloneResult = self.clone();
                  renames = cloneResult._inner.renames;
                  obj = { from: arg0, to: arg1 };
                  tmp7 = _class;
                  if (!obj) {
                    obj = {};
                  }
                  obj.options = _class.applyToDefaults(outer1_7.renameDefaults, obj);
                  arr = renames.push(obj);
                  return cloneResult;
                }
                applyFunctionToChildren(arg0, arg1, arg2, arg3) {
                  self = this;
                  items = [];
                  combined = items.concat(arg0);
                  assertResult = _class.assert(combined.length > 0, "expected at least one children");
                  groupChildrenResult = outer1_7.groupChildren(combined);
                  str = "";
                  if ("" in groupChildrenResult) {
                    obj = self[arg1];
                    applyResult = obj.apply(self, arg2);
                    delete tmp2[""];
                  } else {
                    applyResult = self.clone();
                  }
                  if (applyResult._inner.children) {
                    if (arg3) {
                      str2 = ".";
                      str = `${arg3}.`;
                    }
                    for (let num = 0; num < applyResult._inner.children.length; num = num + 1) {
                      tmp6 = applyResult._inner.children[num];
                      tmp7 = groupChildrenResult[tmp6.key];
                      if (tmp7) {
                        obj = {};
                        ({ key: obj2.key, _refs: obj2._refs, schema } = tmp6);
                        tmp8 = schema;
                        tmp9 = tmp7;
                        tmp10 = arg1;
                        tmp11 = arg2;
                        obj.schema = schema.applyFunctionToChildren(tmp7, arg1, arg2, str + tmp6.key);
                        applyResult._inner.children[num] = obj;
                        key = tmp6.key;
                        delete tmp2[tmp];
                      }
                    }
                  }
                  keys = Object.keys(groupChildrenResult);
                  assertResult1 = _class.assert(0 === keys.length, "unknown key(s)", keys.join(", "));
                  return applyResult;
                }
                _dependency(arg0, arg1, arg2) {
                  self = this;
                  items = [];
                  combined = items.concat(arg2);
                  num = 0;
                  if (0 < combined.length) {
                    do {
                      tmp = _class;
                      assertResult = _class.assert("string" === typeof combined[num], arg0, "peers must be a string or array of strings");
                      num = num + 1;
                      length = combined.length;
                    } while (num < length);
                  }
                  cloneResult = self.clone();
                  dependencies = cloneResult._inner.dependencies;
                  obj = { type: arg0, key: arg1, peers: combined };
                  arr = dependencies.push(obj);
                  return cloneResult;
                }
                describe(arg0) {
                  self = this;
                  describe = outer1_3.prototype.describe;
                  callResult = describe.call(this);
                  if (callResult.rules) {
                    num = 0;
                    str = "object";
                    if (0 < callResult.rules.length) {
                      do {
                        tmp2 = callResult.rules[num];
                        ref = tmp2.arg;
                        if (ref) {
                          tmp3 = closure_0;
                          ref = "object" === closure_0(tmp2.arg);
                        }
                        if (ref) {
                          ref = tmp2.arg.schema;
                        }
                        if (ref) {
                          ref = tmp2.arg.ref;
                        }
                        if (ref) {
                          obj = {};
                          schema = tmp2.arg.schema;
                          obj.schema = schema.describe();
                          str2 = tmp2.arg.ref;
                          obj.ref = str2.toString();
                          tmp2.arg = obj;
                        }
                        num = num + 1;
                      } while (num < callResult.rules.length);
                    }
                  }
                  if (self._inner.children) {
                    tmp4 = arg0;
                    if (!arg0) {
                      callResult.children = {};
                      num2 = 0;
                      if (0 < self._inner.children.length) {
                        do {
                          tmp5 = self._inner.children[num2];
                          schema2 = tmp5.schema;
                          callResult.children[tmp5.key] = schema2.describe();
                          num2 = num2 + 1;
                          length = self._inner.children.length;
                        } while (num2 < length);
                      }
                    }
                  }
                  if (self._inner.dependencies.length) {
                    tmp6 = _class;
                    callResult.dependencies = _class.clone(self._inner.dependencies);
                  }
                  if (self._inner.patterns.length) {
                    callResult.patterns = [];
                    num3 = 0;
                    if (0 < self._inner.patterns.length) {
                      do {
                        tmp7 = self._inner.patterns[num3];
                        patterns = callResult.patterns;
                        obj = {};
                        str3 = tmp7.regex;
                        obj.regex = str3.toString();
                        rule = tmp7.rule;
                        obj.rule = rule.describe();
                        arr = patterns.push(obj);
                        num3 = num3 + 1;
                        length2 = self._inner.patterns.length;
                      } while (num3 < length2);
                    }
                  }
                  if (self._inner.renames.length > 0) {
                    tmp9 = _class;
                    callResult.renames = _class.clone(self._inner.renames);
                  }
                  return callResult;
                }
                assert(arg0, arg1, arg2) {
                  self = this;
                  closure_1 = arg1;
                  tmp2 = arg2;
                  c2 = arg2;
                  tmp = arg1;
                  refResult = outer1_5.ref(arg0);
                  ref = refResult;
                  isContext = refResult.isContext;
                  tmp5 = _class;
                  if (!isContext) {
                    tmp6 = refResult;
                    num = 1;
                    isContext = tmp4.depth > 1;
                  }
                  assertResult = _class.assert(isContext, "Cannot use assertions for root level references - use direct key rules instead");
                  str = tmp2;
                  if (!tmp2) {
                    str = "pass the assertion test";
                  }
                  c2 = str;
                  schemaResult = outer1_5.schema(tmp);
                  closure_1 = schemaResult;
                  c3 = refResult.path[refResult.path.length - 1];
                  path = refResult.path;
                  c4 = path.join(".");
                  return self._test("assert", { schema: schemaResult, ref: refResult }, function(arg0, arg1, closure_2) {
                    const self = this;
                    if (schema._validate(ref(arg0), null, closure_2, arg0).errors) {
                      const mergeResult = _class.merge({}, arg1);
                      mergeResult.key = closure_3;
                      mergeResult.path = closure_4;
                      const obj = { ref: mergeResult.path, message: str };
                      return self.createError("object.assert", obj, mergeResult, closure_2);
                    } else {
                      return arg0;
                    }
                  });
                }
                type(arg0, arg1) {
                  name = arg1;
                  self = this;
                  closure_0 = arg0;
                  assertResult = _class.assert("function" === typeof arg0, "type must be a constructor function");
                  obj = {};
                  if (!arg1) {
                    name = arg0.name;
                  }
                  obj.name = name;
                  obj.ctor = arg0;
                  c1 = obj;
                  return self._test("type", obj, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (!(arg0 instanceof closure_0)) {
                      const obj = {};
                      obj.type = obj.name;
                      error = self.createError("object.type", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                ref() {
                  return this._test("ref", null, function(arg0, closure_12, closure_2) {
                    let error = arg0;
                    const self = this;
                    if (!outer2_6.isRef(arg0)) {
                      error = self.createError("function.ref", null, closure_12, closure_2);
                    }
                    return error;
                  });
                }
              }
              _inherits(_class, arg0);
              return _class;
            })(tmp),
          (arg0) => JSON.parse(arg0),
          renameDefaults: { alias: false, multiple: false, override: false },
          (arr) => {
              const sorted = arr.sort();
              const obj = {};
              for (let num = 0; num < arr.length; num = num + 1) {
                let str = arr[num];
                let tmp2 = closure_1;
                let assertResult = closure_1.assert("string" === typeof str, "children must be strings");
                let first = str.split(".")[0];
                let arr2 = obj[first] || [];
                obj[first] = arr2;
                arr = arr2.push(str.substring(first.length + 1));
              }
              return obj;
            },
          function(arg0, arg1, arg2, closure_12, closure_2) {
              const self = this;
              if (undefined === arg0) {
                return arg0;
              } else {
                let num = 0;
                if (0 < arg1.length) {
                  const _Object = Object;
                  while (hasOwnProperty.call(arg2, arg1[num])) {
                    if (undefined === arg2[tmp2]) {
                      break;
                    } else {
                      num = num + 1;
                    }
                  }
                  const obj = { peer: arg1[num] };
                  return self.createError("object.with", obj, closure_12, closure_2);
                }
                return arg0;
              }
            },
          function(arg0, arg1, arg2, closure_12, closure_2) {
              let tmp2;
              const self = this;
              if (undefined === arg0) {
                return arg0;
              } else {
                let num = 0;
                if (0 < arg1.length) {
                  while (true) {
                    tmp2 = arg1[num];
                    let _Object = Object;
                    if (hasOwnProperty.call(arg2, tmp2)) {
                      if (undefined !== arg2[tmp2]) {
                        break;
                      }
                    }
                    num = num + 1;
                  }
                  const obj = { peer: tmp2 };
                  return self.createError("object.without", obj, closure_12, closure_2);
                }
                return arg0;
              }
            },
          function(arg0, peers, arg2, closure_12, closure_2) {
              const self = this;
              const items = [];
              for (let num = 0; num < peers.length; num = num + 1) {
                let tmp = peers[num];
                let _Object = Object;
                let tmp2 = hasOwnProperty.call(arg2, tmp) && undefined !== arg2[tmp];
                if (tmp2) {
                  let arr = items.push(tmp);
                }
              }
              if (1 === items.length) {
                return arg0;
              } else if (0 === items.length) {
                let obj = { peers };
                let error = self.createError("object.missing", obj, closure_12, closure_2);
              } else {
                obj = { peers };
                error = self.createError("object.xor", obj, closure_12, closure_2);
              }
            },
          function(arg0, peers, arg2, closure_12, closure_2) {
              const self = this;
              let num = 0;
              if (0 < peers.length) {
                while (true) {
                  let tmp = peers[num];
                  let _Object = Object;
                  if (hasOwnProperty.call(arg2, tmp)) {
                    if (undefined !== arg2[tmp]) {
                      break;
                    }
                  }
                  num = num + 1;
                }
                return arg0;
              }
              return self.createError("object.missing", { peers }, closure_12, closure_2);
            },
          function(arg0, arg1, arg2, closure_12, closure_2) {
              const self = this;
              const items = [];
              const items1 = [];
              let num = 0;
              if (0 < arg1.length) {
                while (true) {
                  let tmp = arg1[num];
                  let _Object = Object;
                  if (hasOwnProperty.call(arg2, tmp)) {
                    if (undefined !== arg2[tmp]) {
                      let arr = items1.push(tmp);
                      num = num + 1;
                      if (num >= length) {
                        break;
                      }
                    }
                  }
                  arr = items.push(tmp);
                }
              }
              let error = null;
              if (items.length !== arg1.length) {
                error = null;
                if (items1.length !== length) {
                  const obj = { present: items1, missing: items };
                  error = self.createError("object.and", obj, closure_12, closure_2);
                }
              }
              return error;
            },
          function(arg0, arg1, arg2, closure_12, closure_2) {
              const self = this;
              const items = [];
              for (let num = 0; num < arg1.length; num = num + 1) {
                let tmp = arg1[num];
                let _Object = Object;
                let tmp2 = hasOwnProperty.call(arg2, tmp) && undefined !== arg2[tmp];
                if (tmp2) {
                  let arr = items.push(tmp);
                }
              }
              let error = null;
              if (items.length === arg1.length) {
                const obj = { main: tmp5, peers: cloneResult };
                error = self.createError("object.nand", obj, closure_12, closure_2);
              }
              return error;
            }
        };
        let _Object = obj.Object;
        let prototype = _Object.prototype;
        _Object = new _Object();
        module.exports = _Object;
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if ("function" === typeof Symbol) {
            const _Symbol2 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol3 = Symbol;
              let str2 = "symbol";
            }
            return str2;
          }
        }
        str2 = typeof arg0;
      };
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg2(2);
      let obj = {};
      const fn = function() {
        this._items = [];
        this.nodes = [];
      };
      obj.Topo = fn;
      module.exports = fn;
      obj.Topo.prototype.add = function(arg0, arg1) {
        let obj = arg1;
        let self = this;
        self = this;
        const items = [];
        if (!arg1) {
          obj = {};
        }
        const combined = items.concat(obj.before || []);
        const items1 = [];
        let after = obj.after;
        if (!after) {
          after = [];
        }
        const combined1 = items1.concat(after);
        let closure_3 = tmp2;
        let closure_4 = obj.sort || 0;
        self.assert(-1 === combined.indexOf(obj.group || "?"), "Item cannot come before itself:", obj.group || "?");
        self.assert(-1 === combined.indexOf("?"), "Item cannot come before unassociated items");
        self.assert(-1 === combined1.indexOf(obj.group || "?"), "Item cannot come after itself:", obj.group || "?");
        self.assert(-1 === combined1.indexOf("?"), "Item cannot come after unassociated items");
        const items2 = [];
        const combined2 = items2.concat(arg0);
        const item = combined2.forEach((node) => {
          const _items = self._items;
          _items.push({ seq: self._items.length, sort: closure_4, before: combined, after: combined1, group: closure_3, node });
        });
        let str = "";
        if ("?" !== (obj.group || "?")) {
          str = `added into group ${tmp2}`;
        }
        self.assert(!self._sort(), "item", str, "created a dependencies error");
        return self.nodes;
      };
      obj.Topo.prototype.merge = function(arg0) {
        let length2;
        const self = this;
        const items = [];
        const combined = items.concat(arg0);
        for (let num = 0; num < combined.length; num = num + 1) {
          let tmp = combined[num];
          if (tmp) {
            let num2 = 0;
            let num3 = 0;
            if (0 < tmp._items.length) {
              do {
                let tmp2 = closure_0;
                let _items = self._items;
                let arr = _items.push(closure_0.shallow(tmp._items[num2]));
                num2 = num2 + 1;
                let tmp4 = num2;
                length = tmp._items.length;
              } while (num2 < length);
            }
          }
        }
        _items = self._items;
        const sorted = _items.sort(obj.mergeSort);
        let num4 = 0;
        if (0 < self._items.length) {
          do {
            self._items[num4].seq = num4;
            num4 = num4 + 1;
            length2 = self._items.length;
          } while (num4 < length2);
        }
        closure_0.assert(!self._sort(), "merge created a dependencies error");
        return self.nodes;
      };
      obj.mergeSort = (arg0, arg1) => {
        let num = 0;
        if (arg0.sort !== arg1.sort) {
          let num2 = 1;
          if (arg0.sort < arg1.sort) {
            num2 = -1;
          }
          num = num2;
        }
        return num;
      };
      obj.Topo.prototype._sort = function() {
        let after;
        let group;
        let length4;
        let seq;
        const self = this;
        let obj = {};
        obj = Object.create(null);
        obj = Object.create(null);
        let num = 0;
        if (0 < this._items.length) {
          do {
            let tmp3 = self._items[num];
            ({ seq, group } = tmp3);
            obj[group] = obj[group] || [];
            let arr = obj[group];
            arr = arr.push(seq);
            ({ before: obj[seq], after } = tmp3);
            for (let num2 = 0; num2 < after.length; num2 = num2 + 1) {
              let items = obj[after[num2]];
              if (!items) {
                items = [];
              }
              obj[after[num2]] = items.concat(seq);
            }
            num = num + 1;
          } while (num < self._items.length);
        }
        const keys = Object.keys(obj);
        for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
          let tmp5 = keys[num3];
          let items1 = [];
          let _Object = Object;
          let keys1 = Object.keys(obj[tmp5]);
          let num4 = 0;
          if (0 < keys1.length) {
            do {
              let tmp6 = obj[tmp5][keys1[num4]];
              obj[tmp6] = obj[tmp6] || [];
              let num5 = 0;
              let num6 = 0;
              if (0 < obj[tmp6].length) {
                do {
                  arr = items1.push(obj[tmp6][num5]);
                  num5 = num5 + 1;
                  num6 = num5;
                  length = obj[tmp6].length;
                } while (num5 < length);
              }
              num4 = num4 + 1;
              let tmp8 = num6;
              let tmp9 = tmp6;
            } while (num4 < keys1.length);
          }
          obj[tmp5] = items1;
        }
        const keys2 = Object.keys(obj);
        for (let num7 = 0; num7 < keys2.length; num7 = num7 + 1) {
          let tmp10 = keys2[num7];
          if (obj[tmp10]) {
            let num8 = 0;
            let num9 = 0;
            if (0 < obj[tmp10].length) {
              do {
                let tmp11 = obj[tmp10][num8];
                let obj1 = obj[tmp11];
                obj[tmp11] = obj1.concat(obj[tmp10]);
                num8 = num8 + 1;
                let tmp12 = num8;
                length2 = obj[tmp10].length;
              } while (num8 < length2);
            }
          }
        }
        obj1 = {};
        const keys3 = Object.keys(obj);
        for (let num10 = 0; num10 < keys3.length; num10 = num10 + 1) {
          let tmp13 = keys3[num10];
          let arr8 = obj[tmp13];
          for (let num11 = 0; num11 < arr8.length; num11 = num11 + 1) {
            let items2 = obj1[arr8[num11]];
            if (!items2) {
              items2 = [];
            }
            obj1[arr8[num11]] = items2.concat(tmp13);
          }
        }
        const obj2 = {};
        const items3 = [];
        let num12 = 0;
        if (0 < self._items.length) {
          do {
            let tmp17 = num12;
            let tmp18 = tmp14;
            let tmp19 = tmp15;
            let tmp20 = tmp16;
            if (obj1[num12]) {
              let num13 = 0;
              let tmp21 = tmp14;
              let tmp22 = tmp15;
              let tmp23 = tmp16;
              tmp17 = null;
              let num14 = 0;
              tmp18 = tmp14;
              tmp19 = tmp15;
              tmp20 = tmp16;
              if (0 < self._items.length) {
                while (true) {
                  if (true === obj2[num13]) {
                    let sum = num13 + 1;
                    num13 = sum;
                    tmp17 = null;
                    let tmp27 = sum;
                    tmp18 = tmp21;
                    tmp19 = tmp22;
                    tmp20 = tmp23;
                    if (sum >= self._items.length) {
                      break;
                    }
                  } else {
                    if (!obj1[num13]) {
                      obj1[num13] = [];
                    }
                    let length3 = obj1[num13].length;
                    let num15 = 0;
                    let num16 = 0;
                    let num17 = 0;
                    let num18 = 0;
                    if (0 < length3) {
                      do {
                        let sum1 = num15;
                        if (items3.indexOf(obj1[num13][num16]) >= 0) {
                          sum1 = num15 + 1;
                        }
                        num16 = num16 + 1;
                        num15 = sum1;
                        num17 = sum1;
                        num18 = num16;
                      } while (num16 < length3);
                    }
                    tmp22 = num17;
                    tmp23 = num18;
                    tmp21 = length3;
                    tmp17 = num13;
                    let tmp25 = num13;
                    tmp20 = num18;
                    tmp19 = num17;
                    tmp18 = length3;
                    if (num17 === length3) {
                      break;
                    }
                  }
                  break;
                }
              }
            }
            if (null !== tmp17) {
              let str = tmp17.toString();
              obj2[str] = true;
              let arr1 = items3.push(str);
            }
            num12 = num12 + 1;
            tmp14 = tmp18;
            tmp15 = tmp19;
            tmp16 = tmp20;
          } while (num12 < self._items.length);
        }
        if (items3.length !== self._items.length) {
          const _Error = Error;
          str = "Invalid dependencies";
          const error = new Error("Invalid dependencies");
          return error;
        } else {
          const obj3 = {};
          let num19 = 0;
          if (0 < self._items.length) {
            do {
              let tmp30 = self._items[num19];
              obj3[tmp30.seq] = tmp30;
              num19 = num19 + 1;
              length4 = self._items.length;
            } while (num19 < length4);
          }
          const items4 = [];
          self._items = items3.map((arg0) => {
            items4.push(obj3[arg0].node);
            return obj3[arg0];
          });
          self.nodes = items4;
        }
      };
    },
    (arg0, arg1, arg2) => {
      let obj = arg2(1);
      obj = { abortEarly: obj.boolean(), convert: obj.boolean(), allowUnknown: obj.boolean(), skipFunctions: obj.boolean() };
      const items = [obj.boolean(), ];
      obj = { arrays: obj.boolean(), objects: obj.boolean() };
      let objectResult = obj.object(obj);
      items[1] = objectResult.or("arrays", "objects");
      obj.stripUnknown = items;
      obj.language = obj.object();
      obj.presence = obj.string().only("required", "optional", "forbidden", "ignore");
      obj.raw = obj.boolean();
      obj.context = obj.object();
      obj.strip = obj.boolean();
      obj.noDefaults = obj.boolean();
      objectResult = obj.object(obj);
      arg1.options = objectResult.strict();
    },
    (arg0, arg1, arg2) => {
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      const tmp = arg2(14);
      let closure_0 = tmp;
      let closure_1 = arg2(2);
      let lazy = new {
        Lazy: ((arg0) => {
          let closure_0 = arg0;
          class _class {
            constructor() {
              self = this;
              if (this instanceof _class) {
                tmp6 = closure_0;
                callResult = closure_0.call(self);
                if (self) {
                  tmp13 = self;
                  if (callResult) {
                    tmp14 = typeof callResult;
                    str3 = "object";
                    if ("object" === tmp14) {
                      tmp13 = callResult;
                    } else {
                      str4 = "function";
                      tmp13 = self;
                    }
                  }
                  str5 = "lazy";
                  tmp13._type = "lazy";
                  return tmp13;
                } else {
                  tmp8 = globalThis;
                  _ReferenceError = ReferenceError;
                  prototype2 = ReferenceError.prototype;
                  tmp9 = new.target;
                  str2 = "this hasn't been initialised - super() hasn't been called";
                  tmp10 = new.target;
                  referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  tmp12 = referenceError;
                  throw referenceError;
                }
              } else {
                tmp = globalThis;
                _TypeError = TypeError;
                prototype = TypeError.prototype;
                tmp2 = new.target;
                str = "Cannot call a class as a function";
                tmp3 = new.target;
                typeError = new TypeError("Cannot call a class as a function");
                tmp5 = typeError;
                throw typeError;
              }
            }
            _base(arg0, arg1, arg2) {
              self = this;
              _validateResult = { value: arg0 };
              lazy = this._flags.lazy;
              if (lazy) {
                lazyResult = lazy();
                tmp5 = closure_0;
                if (lazyResult instanceof closure_0) {
                  _validateResult = lazyResult._validate(arg0, arg1, arg2);
                } else {
                  str2 = "lazy.schema";
                  tmp6 = null;
                  tmp7 = self;
                  tmp8 = arg1;
                  tmp9 = arg2;
                  _validateResult.errors = self.createError("lazy.schema", null, arg1, arg2);
                }
                return _validateResult;
              } else {
                str = "lazy.base";
                tmp = null;
                tmp2 = self;
                tmp3 = arg1;
                tmp4 = arg2;
                _validateResult.errors = self.createError("lazy.base", null, arg1, arg2);
                return _validateResult;
              }
            }
            set(arg0) {
              assertResult = _class.assert("function" === typeof arg0, "You must provide a function as first argument");
              cloneResult = this.clone();
              cloneResult._flags.lazy = arg0;
              return cloneResult;
            }
          }
          _inherits(_class, arg0);
          return _class;
        })(tmp)
      }.Lazy();
      module.exports = lazy;
    },
    (arg0, arg1, arg2) => {
      function _inherits(value, arr) {
        if ("function" !== typeof arr) {
          if (null !== arr) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
            throw typeError;
          }
        }
        let prototype = arr;
        if (arr) {
          prototype = arr.prototype;
        }
        const obj = { value, enumerable: false, writable: true, configurable: true };
        value.prototype = Object.create(prototype, { constructor: obj });
        if (arr) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.setPrototypeOf) {
            _Object2.setPrototypeOf(value, arr);
          } else {
            const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
            for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
              let tmp3 = ownPropertyNames[num];
              let _Object3 = Object;
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
              let configurable = ownPropertyDescriptor;
              if (ownPropertyDescriptor) {
                configurable = ownPropertyDescriptor.configurable;
              }
              if (configurable) {
                configurable = undefined === value[tmp3];
              }
              if (configurable) {
                let _Object4 = Object;
                let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
              }
            }
          }
        }
      }
      if ("function" === typeof Symbol) {
        let _Symbol = Symbol;
        if ("symbol" === typeof Symbol.iterator) {
          let fn = (arg0) => typeof arg0;
        }
        let tmp = arg2(14);
        let closure_1 = tmp;
        let closure_2 = arg2(19);
        let closure_3 = arg2(2);
        let obj = {
          fastSplice(substr, diff6) {
              let length;
              let sum = diff6;
              if (diff6 < substr.length) {
                do {
                  let tmp2 = +sum;
                  sum = tmp2 + 1;
                  substr[tmp2] = substr[sum];
                  length = substr.length;
                } while (sum < length);
              }
              substr.length = substr.length - 1;
            },
          Array: ((arg0) => {
              let closure_0 = arg0;
              class _class {
                constructor() {
                  self = this;
                  if (this instanceof _class) {
                    tmp6 = closure_0;
                    callResult = closure_0.call(self);
                    if (self) {
                      tmp13 = self;
                      if (callResult) {
                        tmp14 = typeof callResult;
                        str3 = "object";
                        if ("object" === tmp14) {
                          tmp13 = callResult;
                        } else {
                          str4 = "function";
                          tmp13 = self;
                        }
                      }
                      str5 = "array";
                      tmp13._type = "array";
                      tmp13._inner.items = [];
                      tmp13._inner.ordereds = [];
                      tmp13._inner.inclusions = [];
                      tmp13._inner.exclusions = [];
                      tmp13._inner.requireds = [];
                      flag = false;
                      tmp13._flags.sparse = false;
                      return tmp13;
                    } else {
                      tmp8 = globalThis;
                      _ReferenceError = ReferenceError;
                      prototype2 = ReferenceError.prototype;
                      tmp9 = new.target;
                      str2 = "this hasn't been initialised - super() hasn't been called";
                      tmp10 = new.target;
                      referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      tmp12 = referenceError;
                      throw referenceError;
                    }
                  } else {
                    tmp = globalThis;
                    _TypeError = TypeError;
                    prototype = TypeError.prototype;
                    tmp2 = new.target;
                    str = "Cannot call a class as a function";
                    tmp3 = new.target;
                    typeError = new TypeError("Cannot call a class as a function");
                    tmp5 = typeError;
                    throw typeError;
                  }
                }
                _base(arg0, arg1, arg2) {
                  self = this;
                  obj = { value: arg0 };
                  tmp = "string" === typeof arg0 && arg2.convert;
                  if (tmp) {
                    tmp2 = outer1_4;
                    safeParseResult = outer1_4.safeParse(arg0, obj);
                  }
                  isArray = Array.isArray(obj.value);
                  tmp5 = arg2.convert && self._flags.single && !isArray;
                  flag = isArray;
                  if (tmp5) {
                    items = [];
                    items[0] = obj.value;
                    obj.value = items;
                    flag = true;
                  }
                  if (flag) {
                    if (!self._inner.inclusions.length) {
                      if (!self._inner.exclusions.length) {
                        if (!self._inner.requireds.length) {
                          if (!self._inner.ordereds.length) {
                          }
                          return obj;
                        }
                      }
                    }
                    if (isArray) {
                      value = obj.value;
                      num = 0;
                      obj.value = value.slice(0);
                    }
                    _checkItems = self._checkItems;
                    tmp10 = _checkItems;
                    tmp11 = self;
                    tmp12 = isArray;
                    tmp13 = arg1;
                    tmp14 = arg2;
                    obj.errors = _checkItems.call(self, obj.value, isArray, arg1, arg2);
                    if (obj.errors) {
                      if (isArray) {
                        if (arg2.convert) {
                          if (self._flags.single) {
                            items1 = [];
                            items1[0] = obj.value;
                            obj.value = items1;
                            _checkItems2 = self._checkItems;
                            tmp15 = _checkItems2;
                            tmp16 = self;
                            tmp17 = isArray;
                            tmp18 = arg1;
                            tmp19 = arg2;
                            obj.errors = _checkItems2.call(self, obj.value, isArray, arg1, arg2);
                            if (obj.errors) {
                              obj.errors = obj.errors;
                              num2 = 0;
                              obj.value = obj.value[0];
                            }
                          }
                        }
                      }
                    }
                  } else {
                    str = "array.base";
                    tmp6 = null;
                    tmp7 = self;
                    tmp8 = arg1;
                    tmp9 = arg2;
                    obj.errors = self.createError("array.base", null, arg1, arg2);
                    return obj;
                  }
                  return;
                }
                _checkItems(arg0, arg1, arg2, arg3) {
                  self = this;
                  items = [];
                  requireds = this._inner.requireds;
                  substr = requireds.slice();
                  ordereds = this._inner.ordereds;
                  substr1 = ordereds.slice();
                  inclusions = this._inner.inclusions;
                  combined = inclusions.concat(substr);
                  length = arg0.length;
                  num = 0;
                  if (0 < length) {
                    while (true) {
                      tmp9 = arg0[num];
                      obj = {};
                      key = num;
                      if (!arg1) {
                        key = arg2.key;
                      }
                      obj.key = key;
                      path = arg2.path;
                      if (arg1) {
                        str = "";
                        if (path) {
                          str = `${arg2.path}.`;
                        }
                        sum = str + num;
                      } else {
                        sum = path;
                      }
                      obj.path = sum;
                      ({ parent: obj.parent, reference: obj.reference } = arg2);
                      if (!self._flags.sparse) {
                        if (undefined === tmp9) {
                          obj = {};
                          obj.key = arg2.key;
                          obj.path = obj.path;
                          obj.pos = num;
                          tmp11 = self;
                          str2 = "array.sparse";
                          tmp12 = null;
                          tmp13 = obj;
                          tmp14 = arg3;
                          arr = items.push(self.createError("array.sparse", null, obj, arg3));
                          diff1 = length;
                          diff = num;
                          tmp18 = arr3;
                          tmp19 = tmp2;
                          tmp20 = tmp3;
                          tmp21 = tmp4;
                          tmp22 = tmp5;
                          tmp23 = tmp6;
                          tmp24 = tmp7;
                          tmp25 = tmp8;
                          if (arg3.abortEarly) {
                            break;
                          }
                        }
                        num = diff + 1;
                        length = diff1;
                        arr3 = tmp18;
                        tmp2 = tmp19;
                        tmp3 = tmp20;
                        tmp4 = tmp21;
                        tmp5 = tmp22;
                        tmp6 = tmp23;
                        tmp7 = tmp24;
                        tmp8 = tmp25;
                      }
                      num2 = 0;
                      flag = false;
                      num3 = 0;
                      if (0 < self._inner.exclusions.length) {
                        obj3 = self._inner.exclusions[num2];
                        while (obj3._validate(tmp9, obj, {}).errors) {
                          sum1 = num2 + 1;
                          num2 = sum1;
                          flag = false;
                          num3 = sum1;
                        }
                        str3 = "array.excludesSingle";
                        if (arg1) {
                          str3 = "array.excludes";
                        }
                        obj1 = {};
                        obj1.pos = num;
                        obj1.value = tmp9;
                        obj2 = {};
                        obj2.key = arg2.key;
                        obj2.path = obj.path;
                        tmp26 = self;
                        tmp27 = str3;
                        tmp28 = obj1;
                        tmp29 = obj2;
                        tmp30 = arg3;
                        arr1 = items.push(self.createError(str3, obj1, obj2, arg3));
                        flag = true;
                        num3 = num2;
                        if (arg3.abortEarly) {
                          return items;
                        }
                      }
                      diff1 = length;
                      diff = num;
                      tmp33 = num3;
                      tmp18 = arr3;
                      tmp19 = tmp2;
                      tmp20 = tmp3;
                      tmp21 = tmp4;
                      tmp22 = tmp5;
                      tmp23 = tmp6;
                      tmp24 = tmp7;
                      tmp25 = tmp8;
                      if (!flag) {
                        if (self._inner.ordereds.length) {
                          if (substr1.length > 0) {
                            arr2 = substr1.shift();
                            iter2 = arr2._validate(tmp9, obj, arg3);
                            if (iter2.errors) {
                              obj3 = {};
                              obj3.pos = num;
                              obj3.reason = iter2.errors;
                              obj3.value = tmp9;
                              obj4 = {};
                              obj4.key = arg2.key;
                              obj4.path = obj.path;
                              arr3 = self;
                              str10 = "array.ordered";
                              arr3 = obj3;
                              arr3 = obj4;
                              arr3 = arg3;
                              arr3 = items.push(self.createError("array.ordered", obj3, obj4, arg3));
                              diff1 = length;
                              diff = num;
                              arr3 = num3;
                              tmp18 = arr2;
                              tmp19 = tmp2;
                              tmp20 = tmp3;
                              tmp21 = tmp4;
                              tmp22 = tmp5;
                              tmp23 = tmp6;
                              tmp24 = tmp7;
                              tmp25 = tmp8;
                              if (arg3.abortEarly) {
                                return items;
                              }
                            } else if (arr2._flags.strip) {
                              tmp99 = outer1_4;
                              arr3 = outer1_4.fastSplice(arg0, num);
                              diff = num - 1;
                              diff1 = length - 1;
                              arr3 = num3;
                              tmp18 = arr2;
                              tmp19 = tmp2;
                              tmp20 = tmp3;
                              tmp21 = tmp4;
                              tmp22 = tmp5;
                              tmp23 = tmp6;
                              tmp24 = tmp7;
                              tmp25 = tmp8;
                            } else {
                              if (!self._flags.sparse) {
                                if (undefined === iter2.value) {
                                  obj5 = {};
                                  obj5.key = arg2.key;
                                  obj5.path = obj.path;
                                  obj5.pos = num;
                                  tmp92 = self;
                                  str9 = "array.sparse";
                                  tmp93 = null;
                                  tmp94 = obj5;
                                  tmp95 = arg3;
                                  arr4 = items.push(self.createError("array.sparse", null, obj5, arg3));
                                  diff1 = length;
                                  diff = num;
                                  tmp97 = num3;
                                  tmp18 = arr2;
                                  tmp19 = tmp2;
                                  tmp20 = tmp3;
                                  tmp21 = tmp4;
                                  tmp22 = tmp5;
                                  tmp23 = tmp6;
                                  tmp24 = tmp7;
                                  tmp25 = tmp8;
                                  if (arg3.abortEarly) {
                                    return items;
                                  }
                                }
                              }
                              arg0[num] = iter2.value;
                              diff1 = length;
                              diff = num;
                              tmp98 = num3;
                              tmp18 = arr2;
                              tmp19 = tmp2;
                              tmp20 = tmp3;
                              tmp21 = tmp4;
                              tmp22 = tmp5;
                              tmp23 = tmp6;
                              tmp24 = tmp7;
                              tmp25 = tmp8;
                            }
                          } else if (!self._inner.items.length) {
                            obj6 = {};
                            obj6.pos = num;
                            obj6.limit = self._inner.ordereds.length;
                            obj7 = {};
                            obj7.key = arg2.key;
                            obj7.path = obj.path;
                            tmp34 = self;
                            str4 = "array.orderedLength";
                            tmp35 = obj6;
                            tmp36 = obj7;
                            tmp37 = arg3;
                            arr5 = items.push(self.createError("array.orderedLength", obj6, obj7, arg3));
                            diff1 = length;
                            diff = num;
                            tmp39 = num3;
                            tmp18 = arr3;
                            tmp19 = tmp2;
                            tmp20 = tmp3;
                            tmp21 = tmp4;
                            tmp22 = tmp5;
                            tmp23 = tmp6;
                            tmp24 = tmp7;
                            tmp25 = tmp8;
                            if (arg3.abortEarly) {
                              return items;
                            }
                          }
                        }
                        items1 = [];
                        length2 = substr.length;
                        num4 = 0;
                        flag2 = false;
                        tmp40 = length2;
                        num5 = 0;
                        if (0 < length2) {
                          obj8 = substr[num4];
                          iter = obj8._validate(tmp9, obj, arg3);
                          items1[num4] = iter;
                          while (iter.errors) {
                            sum2 = num4 + 1;
                            num4 = sum2;
                            flag2 = false;
                            tmp40 = length2;
                            num5 = sum2;
                          }
                          arg0[num] = iter.value;
                          tmp41 = outer1_4;
                          fastSpliceResult = outer1_4.fastSplice(substr, num4);
                          diff2 = num4 - 1;
                          diff3 = length2 - 1;
                          flag2 = true;
                          tmp40 = diff3;
                          num5 = diff2;
                          if (!self._flags.sparse) {
                            flag2 = true;
                            tmp40 = diff3;
                            num5 = diff2;
                            if (undefined === iter.value) {
                              obj8 = {};
                              obj8.key = arg2.key;
                              obj8.path = obj.path;
                              obj8.pos = num;
                              tmp45 = self;
                              str5 = "array.sparse";
                              tmp46 = null;
                              tmp47 = obj8;
                              tmp48 = arg3;
                              arr6 = items.push(self.createError("array.sparse", null, obj8, arg3));
                              flag2 = true;
                              tmp40 = diff3;
                              num5 = diff2;
                              if (arg3.abortEarly) {
                                return items;
                              }
                            }
                          }
                        }
                        tmp20 = tmp40;
                        diff1 = length;
                        diff = num;
                        tmp51 = num3;
                        tmp18 = arr3;
                        tmp19 = items1;
                        tmp21 = num5;
                        tmp22 = tmp5;
                        tmp23 = tmp6;
                        tmp24 = tmp7;
                        tmp25 = tmp8;
                        if (!flag2) {
                          tmp52 = !arg3.stripUnknown;
                          tmp53 = !tmp52;
                          if (!tmp52) {
                            tmp54 = true === arg3.stripUnknown || arg3.stripUnknown.arrays;
                            tmp53 = tmp54;
                          }
                          length3 = combined.length;
                          num6 = 0;
                          flag3 = flag;
                          diff7 = length;
                          diff6 = num;
                          flag4 = flag2;
                          num7 = 0;
                          tmp57 = tmp7;
                          tmp58 = tmp8;
                          if (0 < length3) {
                            while (true) {
                              obj10 = combined[num6];
                              index = substr.indexOf(obj10);
                              tmp60 = num6;
                              if (-1 !== index) {
                                tmp70 = items1[index];
                              } else {
                                iter3 = obj10._validate(tmp9, obj, arg3);
                                tmp70 = iter3;
                                if (!iter3.errors) {
                                  if (obj10._flags.strip) {
                                    tmp68 = outer1_4;
                                    fastSpliceResult1 = outer1_4.fastSplice(arg0, num);
                                    diff4 = num - 1;
                                    diff5 = length - 1;
                                    flag5 = flag;
                                  } else {
                                    if (!self._flags.sparse) {
                                      if (undefined === iter3.value) {
                                        obj9 = {};
                                        obj9.key = arg2.key;
                                        obj9.path = obj.path;
                                        obj9.pos = num;
                                        tmp61 = self;
                                        str6 = "array.sparse";
                                        tmp62 = null;
                                        tmp63 = obj9;
                                        tmp64 = arg3;
                                        arr7 = items.push(self.createError("array.sparse", null, obj9, arg3));
                                        flag5 = true;
                                        diff5 = length;
                                        diff4 = num;
                                      }
                                    }
                                    arg0[num] = iter3.value;
                                    flag5 = flag;
                                    diff5 = length;
                                    diff4 = num;
                                  }
                                  flag3 = flag5;
                                  diff7 = diff5;
                                  diff6 = diff4;
                                  flag4 = true;
                                  num7 = num6;
                                  tmp57 = obj10;
                                  tmp58 = index;
                                }
                              }
                              if (1 === length3) {
                                break;
                              } else {
                                num6 = num6 + 1;
                                flag3 = flag;
                                diff7 = length;
                                diff6 = num;
                                flag4 = flag2;
                                tmp57 = obj10;
                                tmp58 = index;
                                num7 = num6;
                              }
                            }
                            if (tmp53) {
                              tmp77 = outer1_4;
                              fastSpliceResult2 = outer1_4.fastSplice(arg0, num);
                              diff6 = num - 1;
                              diff7 = length - 1;
                              flag3 = flag;
                              flag4 = true;
                              num7 = num6;
                              tmp57 = obj10;
                              tmp58 = index;
                            } else {
                              str7 = "array.includesOneSingle";
                              if (arg1) {
                                str7 = "array.includesOne";
                              }
                              obj10 = {};
                              obj10.pos = num;
                              obj10.reason = tmp70.errors;
                              obj10.value = tmp9;
                              obj11 = {};
                              obj11.key = arg2.key;
                              obj11.path = obj.path;
                              tmp71 = self;
                              tmp72 = str7;
                              tmp73 = obj10;
                              tmp74 = obj11;
                              tmp75 = arg3;
                              arr8 = items.push(self.createError(str7, obj10, obj11, arg3));
                              flag3 = true;
                              diff7 = length;
                              diff6 = num;
                              flag4 = flag2;
                              num7 = num6;
                              tmp57 = obj10;
                              tmp58 = index;
                              if (arg3.abortEarly) {
                                return items;
                              }
                            }
                          }
                          diff1 = diff7;
                          diff = diff6;
                          tmp79 = num3;
                          tmp18 = arr3;
                          tmp19 = items1;
                          tmp20 = length3;
                          tmp21 = num5;
                          tmp22 = tmp53;
                          tmp23 = num7;
                          tmp24 = tmp57;
                          tmp25 = tmp58;
                          if (!flag3) {
                            diff1 = diff7;
                            diff = diff6;
                            tmp80 = num3;
                            tmp18 = arr3;
                            tmp19 = items1;
                            tmp20 = length3;
                            tmp21 = num5;
                            tmp22 = tmp53;
                            tmp23 = num7;
                            tmp24 = tmp57;
                            tmp25 = tmp58;
                            if (self._inner.inclusions.length) {
                              diff1 = diff7;
                              diff = diff6;
                              tmp81 = num3;
                              tmp18 = arr3;
                              tmp19 = items1;
                              tmp20 = length3;
                              tmp21 = num5;
                              tmp22 = tmp53;
                              tmp23 = num7;
                              tmp24 = tmp57;
                              tmp25 = tmp58;
                              if (!flag4) {
                                if (tmp53) {
                                  tmp89 = outer1_4;
                                  fastSpliceResult3 = outer1_4.fastSplice(arg0, diff6);
                                  diff = diff6 - 1;
                                  diff1 = diff7 - 1;
                                  tmp91 = num3;
                                  tmp18 = arr3;
                                  tmp19 = items1;
                                  tmp20 = length3;
                                  tmp21 = num5;
                                  tmp22 = tmp53;
                                  tmp23 = num7;
                                  tmp24 = tmp57;
                                  tmp25 = tmp58;
                                } else {
                                  str8 = "array.includesSingle";
                                  if (arg1) {
                                    str8 = "array.includes";
                                  }
                                  obj12 = {};
                                  obj12.pos = diff6;
                                  obj12.value = tmp9;
                                  obj13 = {};
                                  obj13.key = arg2.key;
                                  obj13.path = obj.path;
                                  tmp82 = self;
                                  tmp83 = str8;
                                  tmp84 = obj12;
                                  tmp85 = obj13;
                                  tmp86 = arg3;
                                  arr9 = items.push(self.createError(str8, obj12, obj13, arg3));
                                  diff1 = diff7;
                                  diff = diff6;
                                  tmp88 = num3;
                                  tmp18 = arr3;
                                  tmp19 = items1;
                                  tmp20 = length3;
                                  tmp21 = num5;
                                  tmp22 = tmp53;
                                  tmp23 = num7;
                                  tmp24 = tmp57;
                                  tmp25 = tmp58;
                                  if (arg3.abortEarly) {
                                    return items;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    return items;
                  }
                  if (substr.length) {
                    _fillMissedErrors = self._fillMissedErrors;
                    arr3 = _fillMissedErrors;
                    arr3 = self;
                    arr3 = items;
                    arr3 = substr;
                    arr3 = arg2;
                    arr3 = arg3;
                    arr3 = _fillMissedErrors.call(self, items, substr, arg2, arg3);
                  }
                  if (substr1.length) {
                    _fillOrderedErrors = self._fillOrderedErrors;
                    arr3 = _fillOrderedErrors;
                    arr3 = self;
                    arr3 = items;
                    arr3 = substr1;
                    arr3 = arg2;
                    arr3 = arg3;
                    arr3 = _fillOrderedErrors.call(self, items, substr1, arg2, arg3);
                  }
                  arr3 = null;
                  if (items.length) {
                    arr3 = items;
                  }
                  return arr3;
                }
                describe() {
                  self = this;
                  describe = _class.prototype.describe;
                  callResult = describe.call(this);
                  if (this._inner.ordereds.length) {
                    callResult.orderedItems = [];
                    num = 0;
                    if (0 < self._inner.ordereds.length) {
                      do {
                        orderedItems = callResult.orderedItems;
                        obj = self._inner.ordereds[num];
                        arr = orderedItems.push(obj.describe());
                        num = num + 1;
                        length = self._inner.ordereds.length;
                      } while (num < length);
                    }
                  }
                  if (self._inner.items.length) {
                    callResult.items = [];
                    num2 = 0;
                    if (0 < self._inner.items.length) {
                      do {
                        items = callResult.items;
                        obj2 = self._inner.items[num2];
                        arr1 = items.push(obj2.describe());
                        num2 = num2 + 1;
                        length2 = self._inner.items.length;
                      } while (num2 < length2);
                    }
                  }
                  return callResult;
                }
                items() {
                  cloneResult = this.clone();
                  clone = cloneResult;
                  slice = Array.prototype.slice;
                  flattenResult = outer1_3.flatten(slice.call(arguments));
                  item = flattenResult.forEach((otherwise) => {
                    const schemaResult = outer2_2.schema(otherwise);
                    const items = cloneResult._inner.items;
                    items.push(schemaResult);
                    if ("required" === schemaResult._flags.presence) {
                      const requireds = cloneResult._inner.requireds;
                      requireds.push(schemaResult);
                    } else if ("forbidden" === schemaResult._flags.presence) {
                      const exclusions = cloneResult._inner.exclusions;
                      exclusions.push(schemaResult.optional());
                    } else {
                      const inclusions = cloneResult._inner.inclusions;
                      inclusions.push(schemaResult);
                    }
                  });
                  return cloneResult;
                }
                ordered() {
                  cloneResult = this.clone();
                  clone = cloneResult;
                  slice = Array.prototype.slice;
                  flattenResult = outer1_3.flatten(slice.call(arguments));
                  item = flattenResult.forEach((otherwise) => {
                    const ordereds = _inner._inner.ordereds;
                    ordereds.push(outer2_2.schema(otherwise));
                  });
                  return cloneResult;
                }
                min(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = outer1_3;
                  isIntegerResult = outer1_3.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = outer1_3.assert(isIntegerResult, "limit must be a positive integer");
                  return self._test("min", arg0, function(value, closure_12, closure_2) {
                    const self = this;
                    let error = value;
                    if (value.length < closure_0) {
                      const obj = { limit: closure_0, value };
                      error = self.createError("array.min", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                max(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = outer1_3;
                  isIntegerResult = outer1_3.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = outer1_3.assert(isIntegerResult, "limit must be a positive integer");
                  return self._test("max", arg0, function(value, closure_12, closure_2) {
                    const self = this;
                    let error = value;
                    if (value.length > closure_0) {
                      const obj = { limit: closure_0, value };
                      error = self.createError("array.max", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                length(arg0) {
                  self = this;
                  closure_0 = arg0;
                  tmp = outer1_3;
                  isIntegerResult = outer1_3.isInteger(arg0);
                  if (isIntegerResult) {
                    num = 0;
                    isIntegerResult = arg0 >= 0;
                  }
                  assertResult = outer1_3.assert(isIntegerResult, "limit must be a positive integer");
                  return self._test("length", arg0, function(value, closure_12, closure_2) {
                    const self = this;
                    let error = value;
                    if (value.length !== closure_0) {
                      const obj = { limit: closure_0, value };
                      error = self.createError("array.length", obj, closure_12, closure_2);
                    }
                    return error;
                  });
                }
                unique(arg0) {
                  deepEqual = arg0;
                  self = this;
                  deepEqual = arg0;
                  _class = arg0;
                  if (!arg0) {
                    tmp = outer1_3;
                    deepEqual = outer1_3.deepEqual;
                  }
                  assertResult = outer1_3.assert("function" === typeof deepEqual, "comparator must be a function");
                  return self._test("unique", undefined, function(arg0, closure_12, closure_2) {
                    let tmp2;
                    const self = this;
                    let obj = { string: {}, number: {}, undefined: {}, boolean: {}, object: [], function: [], custom: [] };
                    let num = 0;
                    if (0 < arg0.length) {
                      while (true) {
                        tmp2 = arg0[num];
                        let tmp3 = num;
                        let str = "undefined";
                        if (undefined !== tmp2) {
                          let tmp4 = deepEqual;
                          str = deepEqual(tmp2);
                        }
                        let tmp5 = closure_1;
                        let arr = closure_1 ? obj.custom : obj[str];
                        let tmp6 = tmp;
                        if (arr) {
                          let _Array = Array;
                          if (Array.isArray(arr)) {
                            let num2 = 0;
                            let num3 = 0;
                            if (0 < arr.length) {
                              let tmp11 = deepEqual;
                              while (!deepEqual(arr[num2], tmp2)) {
                                num2 = num2 + 1;
                                num3 = num2;
                                continue;
                              }
                              obj = { pos: num, value: tmp2 };
                              let str3 = "array.unique";
                              let tmp13 = self;
                              let tmp14 = obj;
                              let tmp15 = closure_12;
                              let tmp16 = closure_2;
                              return self.createError("array.unique", obj, closure_12, closure_2);
                            }
                            arr = arr.push(tmp2);
                            tmp6 = num3;
                          } else if (arr[tmp2]) {
                            break;
                          } else {
                            arr[tmp2] = true;
                            tmp6 = tmp;
                          }
                        }
                        num = num + 1;
                        tmp = tmp6;
                      }
                      obj = { pos: num, value: tmp2 };
                      return self.createError("array.unique", obj, closure_12, closure_2);
                    }
                    return arg0;
                  });
                }
                sparse(arg0) {
                  cloneResult = this.clone();
                  tmp2 = undefined === arg0;
                  if (!tmp2) {
                    tmp2 = arg0;
                  }
                  cloneResult._flags.sparse = tmp2;
                  return cloneResult;
                }
                single(arg0) {
                  cloneResult = this.clone();
                  tmp2 = undefined === arg0;
                  if (!tmp2) {
                    tmp2 = arg0;
                  }
                  cloneResult._flags.single = tmp2;
                  return cloneResult;
                }
                _fillMissedErrors(arg0, arg1, arg2, arg3) {
                  self = this;
                  items = [];
                  num = 0;
                  num2 = 0;
                  num3 = 0;
                  if (0 < arg1.length) {
                    do {
                      obj = arg1[num3];
                      _getLabelResult = obj._getLabel();
                      if (_getLabelResult) {
                        arr = items.push(_getLabelResult);
                        sum = num2;
                      } else {
                        sum = num2 + 1;
                      }
                      num3 = num3 + 1;
                      num2 = sum;
                      num = sum;
                    } while (num3 < arg1.length);
                  }
                  push = arg0.push;
                  createError = self.createError;
                  obj = {};
                  if (items.length) {
                    if (num) {
                      obj.knownMisses = items;
                      obj.unknownMisses = num;
                      obj1 = {};
                      ({ key: obj5.key, path: obj5.path } = arg2);
                      str3 = "array.includesRequiredBoth";
                      tmp14 = self;
                      tmp15 = obj;
                      tmp16 = obj1;
                      tmp17 = arg3;
                      arr1 = push(createError("array.includesRequiredBoth", obj, obj1, arg3));
                    } else {
                      obj2 = {};
                      obj2.knownMisses = items;
                      ({ key: obj2.key, path: obj2.path } = arg2);
                      str2 = "array.includesRequiredKnowns";
                      tmp9 = self;
                      tmp10 = obj2;
                      tmp11 = obj;
                      tmp12 = arg3;
                      arr2 = push(createError("array.includesRequiredKnowns", obj2, obj, arg3));
                    }
                  } else {
                    obj3 = {};
                    obj3.unknownMisses = num;
                    ({ key: obj2.key, path: obj2.path } = arg2);
                    str = "array.includesRequiredUnknowns";
                    tmp4 = self;
                    tmp5 = obj3;
                    tmp6 = obj;
                    tmp7 = arg3;
                    arr3 = push(createError("array.includesRequiredUnknowns", obj3, obj, arg3));
                  }
                  return;
                }
                _fillOrderedErrors(arg0, arg1, arg2, arg3) {
                  self = this;
                  items = [];
                  for (let num = 0; num < arg1.length; num = num + 1) {
                    tmp = outer1_3;
                    if ("required" === outer1_3.reach(arg1[num], "_flags.presence")) {
                      arr = items.push(arg1[num]);
                    }
                  }
                  if (items.length) {
                    _fillMissedErrors = self._fillMissedErrors;
                    tmp3 = arg0;
                    tmp4 = arg2;
                    tmp5 = arg3;
                    tmp6 = _fillMissedErrors;
                    tmp7 = self;
                    tmp8 = items;
                    callResult = _fillMissedErrors.call(self, arg0, items, arg2, arg3);
                  }
                  return;
                }
              }
              _inherits(_class, arg0);
              return _class;
            })(tmp),
          (arg0, arg1) => {
              const parsed = JSON.parse(arg0);
              if (Array.isArray(parsed)) {
                arg1.value = parsed;
              }
            }
        };
        let _Array = obj.Array;
        let prototype = _Array.prototype;
        _Array = new _Array();
        module.exports = _Array;
      }
      fn = (arg0) => {
        if (arg0) {
          const _Symbol = Symbol;
          if ("function" === typeof Symbol) {
            const _Symbol2 = Symbol;
            if (arg0.constructor === Symbol) {
              const _Symbol3 = Symbol;
              let str2 = "symbol";
            }
            return str2;
          }
        }
        str2 = typeof arg0;
      };
    },
    (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg2;
      const fn = (arg0) => {
        let closure_0 = arg0;
        function _inherits(value, arr) {
          if ("function" !== typeof arr) {
            if (null !== arr) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Super expression must either be null or a function, not " + tmp);
              throw typeError;
            }
          }
          let prototype = arr;
          if (arr) {
            prototype = arr.prototype;
          }
          const obj = { value, enumerable: false, writable: true, configurable: true };
          value.prototype = Object.create(prototype, { constructor: obj });
          if (arr) {
            const _Object = Object;
            const _Object2 = Object;
            if (Object.setPrototypeOf) {
              _Object2.setPrototypeOf(value, arr);
            } else {
              const ownPropertyNames = _Object2.getOwnPropertyNames(arr);
              for (let num = 0; num < ownPropertyNames.length; num = num + 1) {
                let tmp3 = ownPropertyNames[num];
                let _Object3 = Object;
                let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, tmp3);
                let configurable = ownPropertyDescriptor;
                if (ownPropertyDescriptor) {
                  configurable = ownPropertyDescriptor.configurable;
                }
                if (configurable) {
                  configurable = undefined === value[tmp3];
                }
                if (configurable) {
                  let _Object4 = Object;
                  let definePropertyResult = Object.defineProperty(value, tmp3, ownPropertyDescriptor);
                }
              }
            }
          }
        }
        callback = callback(2);
        const tmp = callback(14);
        const binary = new {
          Binary: ((arg0) => {
            let closure_0 = arg0;
            class _class {
              constructor() {
                self = this;
                if (this instanceof _class) {
                  tmp6 = closure_0;
                  callResult = closure_0.call(self);
                  if (self) {
                    tmp13 = self;
                    if (callResult) {
                      tmp14 = typeof callResult;
                      str3 = "object";
                      if ("object" === tmp14) {
                        tmp13 = callResult;
                      } else {
                        str4 = "function";
                        tmp13 = self;
                      }
                    }
                    str5 = "binary";
                    tmp13._type = "binary";
                    return tmp13;
                  } else {
                    tmp8 = globalThis;
                    _ReferenceError = ReferenceError;
                    prototype2 = ReferenceError.prototype;
                    tmp9 = new.target;
                    str2 = "this hasn't been initialised - super() hasn't been called";
                    tmp10 = new.target;
                    referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    tmp12 = referenceError;
                    throw referenceError;
                  }
                } else {
                  tmp = globalThis;
                  _TypeError = TypeError;
                  prototype = TypeError.prototype;
                  tmp2 = new.target;
                  str = "Cannot call a class as a function";
                  tmp3 = new.target;
                  typeError = new TypeError("Cannot call a class as a function");
                  tmp5 = typeError;
                  throw typeError;
                }
              }
              _base(arg0, arg1, arg2) {
                self = this;
                obj = { value: arg0 };
                iter = obj;
                if ("string" === typeof arg0) {
                  if (arg2.convert) {
                    tmp2 = obj;
                    tmp3 = closure_0;
                    tmp4 = arg0;
                    prototype = closure_0.prototype;
                    tmp5 = new.target;
                    tmp6 = new.target;
                    tmp7 = new closure_0(tmp, self._flags.encoding);
                    tmp8 = tmp7;
                    iter.value = tmp7;
                  }
                }
                while (true) {
                  tmp9 = obj;
                  tmp10 = closure_0;
                  error = null;
                  if (closure_0.isBuffer(iter.value)) {
                    break;
                  } else {
                    str = "binary.base";
                    tmp12 = arg1;
                    tmp13 = self;
                    tmp14 = null;
                    tmp15 = arg2;
                    error = self.createError("binary.base", null, arg1, arg2);
                    break;
                  }
                  iter.errors = error;
                  return obj;
                }
                return;
              }
              encoding(arg0) {
                assertResult = _class.assert(closure_0.isEncoding(arg0), "Invalid encoding:", arg0);
                cloneResult = this.clone();
                cloneResult._flags.encoding = arg0;
                return cloneResult;
              }
              min(arg0) {
                self = this;
                closure_0 = arg0;
                tmp = _class;
                isIntegerResult = _class.isInteger(arg0);
                if (isIntegerResult) {
                  num = 0;
                  isIntegerResult = arg0 >= 0;
                }
                assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                return self._test("min", arg0, function(value, closure_12, closure_2) {
                  const self = this;
                  let error = value;
                  if (value.length < closure_0) {
                    const obj = { limit: closure_0, value };
                    error = self.createError("binary.min", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              max(arg0) {
                self = this;
                closure_0 = arg0;
                tmp = _class;
                isIntegerResult = _class.isInteger(arg0);
                if (isIntegerResult) {
                  num = 0;
                  isIntegerResult = arg0 >= 0;
                }
                assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                return self._test("max", arg0, function(value, closure_12, closure_2) {
                  const self = this;
                  let error = value;
                  if (value.length > closure_0) {
                    const obj = { limit: closure_0, value };
                    error = self.createError("binary.max", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
              length(arg0) {
                self = this;
                closure_0 = arg0;
                tmp = _class;
                isIntegerResult = _class.isInteger(arg0);
                if (isIntegerResult) {
                  num = 0;
                  isIntegerResult = arg0 >= 0;
                }
                assertResult = _class.assert(isIntegerResult, "limit must be a positive integer");
                return self._test("length", arg0, function(value, closure_12, closure_2) {
                  const self = this;
                  let error = value;
                  if (value.length !== closure_0) {
                    const obj = { limit: closure_0, value };
                    error = self.createError("binary.length", obj, closure_12, closure_2);
                  }
                  return error;
                });
              }
            }
            _inherits(_class, arg0);
            return _class;
          })(callback(14))
        }.Binary();
        closure_0.exports = binary;
      };
      fn.call(arg1, arg2(3).Buffer);
    },
    (arg0, arg1) => {
      const obj = { _args: null, _from: "joi@10.0.5", _id: "joi@10.0.5", _inCache: true, _location: "/joi", _nodeVersion: "6.9.1", _npmOperationalInternal: null, _npmUser: null, _npmVersion: "3.10.10" };
      const items = [{ raw: "joi@10.0.5", scope: null, escapedName: "joi", name: "joi", rawSpec: "10.0.5", spec: "10.0.5", type: "version" }, "/Users/jeff/projects/joi-browser"];
      const items1 = [items];
      obj._args = items1;
      obj._npmOperationalInternal = { host: "packages-12-west.internal.npmjs.com", tmp: "tmp/joi-10.0.5.tgz_1480956525182_0.0934728232678026" };
      obj._npmUser = { name: "marsup", email: "nicolas@morel.io" };
      obj._phantomChildren = {};
      obj._requested = { raw: "joi@10.0.5", scope: null, escapedName: "joi", name: "joi", rawSpec: "10.0.5", spec: "10.0.5", type: "version" };
      obj._requiredBy = ["#DEV:/"];
      obj._resolved = "https://registry.npmjs.org/joi/-/joi-10.0.5.tgz";
      obj._shasum = "2e43af9bf24d2d5745852e9ab968c85be357bd6a";
      obj._shrinkwrap = null;
      obj._spec = "joi@10.0.5";
      obj._where = "/Users/jeff/projects/joi-browser";
      obj.bugs = { url: "https://github.com/hapijs/joi/issues" };
      obj.dependencies = { hoek: "4.x.x", isemail: "2.x.x", items: "2.x.x", topo: "2.x.x" };
      obj.description = "Object schema validation";
      obj.devDependencies = { code: "4.x.x", lab: "11.x.x", "markdown-toc": "0.13.x" };
      obj.directories = {};
      obj.dist = { shasum: "2e43af9bf24d2d5745852e9ab968c85be357bd6a", tarball: "https://registry.npmjs.org/joi/-/joi-10.0.5.tgz" };
      obj.engines = { node: ">=4.0.0" };
      obj.gitHead = "abfe727885af779a676e6a205ee15cdc8b435691";
      obj.homepage = "https://github.com/hapijs/joi";
      obj.keywords = ["hapi", "schema", "validation"];
      obj.license = "BSD-3-Clause";
      obj.main = "lib/index.js";
      const items2 = [{ name: "hueniverse", email: "eran@hueniverse.com" }, { name: "marsup", email: "marsup@gmail.com" }];
      obj.maintainers = items2;
      obj.name = "joi";
      obj.optionalDependencies = {};
      obj.readme = "ERROR: No README data found!";
      obj.repository = { type: "git", url: "git://github.com/hapijs/joi.git" };
      obj.scripts = { test: "lab -t 100 -a code -L", "test-cov-html": "lab -r html -o coverage.html -a code", "test-debug": "node $NODE_DEBUG_OPTION ./node_modules/.bin/lab -a code", toc: "node generate-readme-toc.js", version: "npm run toc && git add API.md README.md" };
      obj.version = "10.0.5";
      arg0.exports = obj;
    }
  ];
  return ((items) => {
    let closure_0 = items;
    function __webpack_require__(id) {
      if (obj[id]) {
        return tmp[id].exports;
      } else {
        obj = { exports: {}, id, loaded: false };
        tmp[id] = obj;
        items[id].call(obj.exports, obj, obj.exports, __webpack_require__);
        obj.loaded = true;
        return obj.exports;
      }
    }
    let obj = {};
    __webpack_require__.m = items;
    __webpack_require__.c = obj;
    __webpack_require__.p = "";
    return __webpack_require__(0);
  })(items);
};
if ("object" === typeof exports) {
  if ("object" === typeof module) {
    module.exports = fn();
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
const fnResult = fn();
for (const key10017 in fnResult) {
  let tmp4 = key10017;
  let self = this;
  if ("object" === tmp) {
    self = arg5;
  }
  self[key10017] = fnResult[key10017];
  continue;
}
