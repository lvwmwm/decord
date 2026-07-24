// Module ID: 4331
// Function ID: 38189
// Name: _regeneratorRuntime
// Dependencies: [10]

// Module 4331 (_regeneratorRuntime)

export default function _regeneratorRuntime() {
  function define(arg0, arg1, value) {
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, arg1, obj);
    return arg0[arg1];
  }
  function wrap(arg0, arg1, arg2, arg3) {
    let tmp = arg1;
    let items = arg3;
    if (!arg1) {
      tmp = Generator;
    }
    let obj = Object.create(tmp.prototype);
    let tmp4 = Context;
    if (!items) {
      items = [];
    }
    tmp4 = new tmp4(items);
    obj = { value: makeInvokeMethod(arg0, arg2, tmp4) };
    fn(obj, "_invoke", obj);
    return obj;
  }
  function tryCatch(call) {
    return { type: "normal", arg: call.call(arg1, arg2) };
  }
  class Generator {
    constructor() {
      return;
    }
  }
  class GeneratorFunction {
    constructor() {
      return;
    }
  }
  class GeneratorFunctionPrototype {
    constructor() {
      return;
    }
  }
  function defineIteratorMethods(prototype) {
    let closure_0 = prototype;
    const items = ["next", "throw", "return"];
    const item = items.forEach((arg0) => {
      let closure_0 = arg0;
      outer1_11(closure_0, arg0, function(arg0) {
        return this._invoke(closure_0, arg0);
      });
    });
  }
  class AsyncIterator {
    constructor(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      invoke = function invoke(arg0, arg1, arg2, arg3) {
        const table = arg2;
        const lib = arg3;
        const tmp = outer1_13(table[arg0], table, arg1);
        if ("throw" !== tmp.type) {
          const iter = tmp.arg;
          const value = iter.value;
          if (value) {
            obj = obj(fn[0]);
            if ("object" == obj.default(value)) {
              if (lib.call(value, "__await")) {
                let nextPromise = lib.resolve(value.__await).then((arg0) => {
                  outer1_3("next", arg0, closure_0, closure_1);
                }, (arg0) => {
                  outer1_3("throw", arg0, closure_0, closure_1);
                });
                const resolveResult = lib.resolve(value.__await);
              }
              return nextPromise;
            }
          }
          nextPromise = lib.resolve(value).then((value) => {
            iter.value = value;
            callback(iter);
          }, (arg0) => outer1_3("throw", arg0, closure_0, closure_1));
          const resolveResult1 = lib.resolve(value);
        } else {
          arg3(tmp.arg);
        }
      };
      obj = {
        value(arg0, arg1) {
              let closure_0 = arg0;
              let closure_1 = arg1;
              function callInvokeWithMethodAndArg() {
                return new closure_1((arg0, arg1) => {
                  outer2_3(outer1_0, outer1_1, arg0, arg1);
                });
              }
              if (nextPromise) {
                nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
              } else {
                nextPromise = callInvokeWithMethodAndArg();
              }
              return nextPromise;
            }
      };
      tmp = f38218(this, "_invoke", obj);
      return;
    }
  }
  function makeInvokeMethod(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = suspendedStart;
    return (method, arg1) => {
      if (closure_3 === outer1_7) {
        const _Error = Error;
        throw Error("Generator is already running");
      } else if (closure_3 === outer1_8) {
        if ("throw" === method) {
          throw arg1;
        } else {
          let obj = { value: undefined, done: true };
          return obj;
        }
      } else {
        closure_2.method = method;
        closure_2.arg = arg1;
        while (true) {
          let tmp = closure_2;
          let delegate = closure_2.delegate;
          if (delegate) {
            let tmp2 = outer1_19;
            let tmp3 = closure_2;
            let tmp4 = outer1_19(delegate, closure_2);
            let tmp5 = tmp4;
            if (tmp4) {
              let tmp29 = outer1_9;
              tmp5 = tmp4;
              if (tmp4 === outer1_9) {
                continue;
              } else {
                return tmp4;
              }
            }
          }
          let tmp6 = closure_2;
          let tmp7 = tmp5;
          if ("next" === closure_2.method) {
            let tmp18 = closure_2;
            let arg = closure_2.arg;
            closure_2._sent = arg;
            closure_2.sent = arg;
          } else {
            let tmp8 = closure_2;
            if ("throw" === closure_2.method) {
              let tmp12 = closure_3;
              let tmp13 = outer1_5;
              if (closure_3 === outer1_5) {
                break;
              } else {
                let tmp14 = closure_2;
                let dispatchExceptionResult = closure_2.dispatchException(closure_2.arg);
              }
            } else {
              let tmp9 = closure_2;
              if ("return" === closure_2.method) {
                let tmp10 = closure_2;
                let abruptResult = closure_2.abrupt("return", closure_2.arg);
              }
            }
          }
          let tmp19 = outer1_7;
          closure_3 = outer1_7;
          let tmp20 = outer1_13;
          let tmp21 = closure_0;
          let tmp22 = closure_1;
          let tmp23 = closure_2;
          let tmp24 = outer1_13(closure_0, closure_1, closure_2);
          if ("normal" === tmp24.type) {
            let tmp26 = closure_2;
            closure_3 = closure_2.done ? outer1_8 : outer1_6;
            let tmp27 = outer1_9;
            let tmp28 = tmp24;
            if (tmp24.arg === outer1_9) {
              continue;
            } else {
              obj = { value: tmp24.arg };
              let tmp37 = closure_2;
              obj.done = closure_2.done;
              return obj;
            }
          } else {
            let tmp25 = tmp24;
            if ("throw" !== tmp24.type) {
              continue;
            } else {
              let tmp34 = outer1_8;
              closure_3 = outer1_8;
              let tmp35 = closure_2;
              closure_2.method = "throw";
              closure_2.arg = tmp24.arg;
              tmp5 = tmp7;
              let tmp36 = tmp24;
              continue;
            }
            continue;
          }
          continue;
        }
        closure_3 = outer1_8;
        throw closure_2.arg;
      }
    };
  }
  function maybeInvokeDelegate(iterator, method) {
    method = method.method;
    if (iterator.iterator[method] === undefined) {
      method.delegate = null;
      let tmp14 = "throw" === method && iterator.iterator.return;
      if (tmp14) {
        method.method = "return";
        method.arg = undefined;
        maybeInvokeDelegate(iterator, method);
        tmp14 = "throw" === method.method;
      }
      if (!tmp14) {
        if ("return" !== method) {
          method.method = "throw";
          const _TypeError2 = TypeError;
          const typeError = new TypeError("The iterator does not provide a '" + method + "' method");
          method.arg = typeError;
        }
      }
      return closure_9;
    } else {
      const tmp24 = tryCatch(tmp, iterator.iterator, method.arg);
      if ("throw" === tmp24.type) {
        method.method = "throw";
        method.arg = tmp24.arg;
        method.delegate = null;
        return closure_9;
      } else {
        if (tmp24.arg) {
          let tmp9 = iter;
          if (iter.done) {
            method[iterator.resultName] = iter.value;
            method.next = iterator.nextLoc;
            if ("return" !== method.method) {
              method.method = "next";
              method.arg = undefined;
            }
            method.delegate = null;
            tmp9 = closure_9;
          }
          let tmp8 = tmp9;
        } else {
          method.method = "throw";
          const _TypeError = TypeError;
          const typeError1 = new TypeError("iterator result is not an object");
          method.arg = typeError1;
          method.delegate = null;
          tmp8 = closure_9;
        }
        return tmp8;
      }
    }
  }
  function pushTryEntry(tryLoc) {
    const obj = { tryLoc: tryLoc[0] };
    if (1 in tryLoc) {
      obj.catchLoc = tryLoc[1];
    }
    if (2 in tryLoc) {
      obj.finallyLoc = tryLoc[2];
      obj.afterLoc = tryLoc[3];
    }
    const tryEntries = this.tryEntries;
    tryEntries.push(obj);
  }
  function resetTryEntry(completion) {
    const tmp2 = completion.completion || {};
    tmp2.type = "normal";
    delete tmp.arg;
    completion.completion = tmp2;
  }
  class Context {
    constructor(arg0) {
      items = [];
      items[0] = { tryLoc: "root" };
      this.tryEntries = items;
      item = arg0.forEach(pushTryEntry, this);
      resetResult = this.reset(true);
      return;
    }
  }
  function values(next) {
    let closure_0 = next;
    if (next) {
      if (next[closure_3]) {
        return obj.call(next);
      } else if ("function" === typeof next.next) {
        return next;
      } else {
        const _isNaN = isNaN;
        if (!isNaN(next.length)) {
          let c1 = -1;
          next = function next() {
            const sum = sum1 + 1;
            sum1 = sum;
            if (sum < next.length) {
              while (!v1.call(next, sum1)) {
                let tmp5 = sum1;
                sum1 = sum1 + 1;
                let tmp7 = next;
              }
              next.value = next[sum1];
              next.done = false;
              return next;
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
          next.next = next;
          return next;
        }
      }
    }
    const typeError = new TypeError(obj(fn[0]).default(next) + " is not iterable");
    throw typeError;
  }
  hasOwnProperty.exports = function _regeneratorRuntime() {
    return obj;
  };
  let obj = {};
  hasOwnProperty = Object.prototype.hasOwnProperty;
  let obj1 = hasOwnProperty;
  let fn = Object.defineProperty;
  if (!fn) {
    fn = (arg0, arg1, value) => {
      arg0[arg1] = value.value;
    };
  }
  let tmp4 = "function" === typeof Symbol ? Symbol : {};
  let closure_3 = tmp5;
  const toStringTag = tmp4.toStringTag;
  let str = toStringTag;
  if (!toStringTag) {
    str = "@@toStringTag";
  }
  define({}, "");
  while (true) {
    let tmp9 = obj;
    obj.wrap = wrap;
    let str2 = "suspendedStart";
    let suspendedStart = "suspendedStart";
    let str3 = "suspendedYield";
    let suspendedYield = "suspendedYield";
    let str4 = "executing";
    let executing = "executing";
    let str5 = "completed";
    let completed = "completed";
    let closure_9 = {};
    obj = {};
    let tmp10 = obj;
    let tmp11 = tmp;
    let tmp12 = tmp5;
    let tmpResult = tmp(obj, tmp6, function() {
      return this;
    });
    let _Object = Object;
    class Generator {
      constructor() {
        return;
      }
    }
    let tmp14Result = getPrototypeOf;
    if (!getPrototypeOf) {
      break;
    } else {
      let tmp16 = getPrototypeOf;
      let tmp17 = values;
      tmp14Result = tmp14(tmp14(values([])));
      break;
    }
    class GeneratorFunction {
      constructor() {
        return;
      }
    }
    let tmp19 = tmp14Result;
    let tmp20 = tmp14Result;
    class GeneratorFunctionPrototype {
      constructor() {
        return;
      }
    }
    let callResult = tmp20;
    if (tmp20) {
      let tmp22 = hasOwnProperty;
      let tmp23 = tmp18;
      let tmp24 = tmp5;
      callResult = obj1.call(tmp19, tmp6);
    }
    if (callResult) {
      tmp10 = tmp18;
    }
    class AsyncIterator {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        invoke = function invoke(arg0, arg1, arg2, arg3) {
          const table = arg2;
          const lib = arg3;
          const tmp = outer1_13(table[arg0], table, arg1);
          if ("throw" !== tmp.type) {
            const iter = tmp.arg;
            const value = iter.value;
            if (value) {
              obj = obj(fn[0]);
              if ("object" == obj.default(value)) {
                if (lib.call(value, "__await")) {
                  let nextPromise = lib.resolve(value.__await).then((arg0) => {
                    outer1_3("next", arg0, closure_0, closure_1);
                  }, (arg0) => {
                    outer1_3("throw", arg0, closure_0, closure_1);
                  });
                  const resolveResult = lib.resolve(value.__await);
                }
                return nextPromise;
              }
            }
            nextPromise = lib.resolve(value).then((value) => {
              iter.value = value;
              callback(iter);
            }, (arg0) => outer1_3("throw", arg0, closure_0, closure_1));
            const resolveResult1 = lib.resolve(value);
          } else {
            arg3(tmp.arg);
          }
        };
        obj = {
          value(arg0, arg1) {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  function callInvokeWithMethodAndArg() {
                    return new closure_1((arg0, arg1) => {
                      outer2_3(outer1_0, outer1_1, arg0, arg1);
                    });
                  }
                  if (nextPromise) {
                    nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
                  } else {
                    nextPromise = callInvokeWithMethodAndArg();
                  }
                  return nextPromise;
                }
        };
        tmp = f38218(this, "_invoke", obj);
        return;
      }
    }
    obj = Object.create(tmp10);
    Generator.prototype = obj;
    GeneratorFunctionPrototype.prototype = obj;
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    let tmp26 = fn;
    class Context {
      constructor(arg0) {
        items = [];
        items[0] = { tryLoc: "root" };
        this.tryEntries = items;
        item = arg0.forEach(pushTryEntry, this);
        resetResult = this.reset(true);
        return;
      }
    }
    tmp27.value = GeneratorFunctionPrototype;
    tmp27.configurable = true;
    let str6 = "constructor";
    let tmp3Result = tmp3(obj, "constructor", tmp27);
    obj1 = { value: GeneratorFunction, configurable: true };
    tmp3Result = tmp3(GeneratorFunctionPrototype, "constructor", obj1);
    let str7 = "GeneratorFunction";
    GeneratorFunction.displayName = tmp(GeneratorFunctionPrototype, str, "GeneratorFunction");
    obj.isGeneratorFunction = (arg0) => {
      let tmp3 = !tmp2;
      if (!!("function" === typeof arg0 && arg0.constructor)) {
        let tmp5 = tmp === GeneratorFunction;
        if (!tmp5) {
          tmp5 = "GeneratorFunction" === (tmp.displayName || tmp.name);
          const tmp6 = tmp.displayName || tmp.name;
        }
        tmp3 = tmp5;
      }
      return tmp3;
    };
    obj.mark = (arg0) => {
      if (Object.setPrototypeOf) {
        const _Object = Object;
        Object.setPrototypeOf(arg0, GeneratorFunctionPrototype);
      } else {
        arg0.__proto__ = GeneratorFunctionPrototype;
        define(arg0, "GeneratorFunction", "GeneratorFunction");
      }
      arg0.prototype = Object.create(obj);
      return arg0;
    };
    obj.awrap = (__await) => ({ __await });
    let result = defineIteratorMethods(AsyncIterator.prototype);
    let tmp31 = tmp7;
    let tmpResult1 = tmp(AsyncIterator.prototype, tmp7, function() {
      return this;
    });
    obj.AsyncIterator = AsyncIterator;
    obj.async = (arg0, arg1, arg2, arg3, arg4) => {
      let _Promise = arg4;
      if (undefined === arg4) {
        _Promise = Promise;
      }
      const iter = new AsyncIterator(wrap(arg0, arg1, arg2, arg3), _Promise);
      let nextPromise = iter;
      if (!iter.isGeneratorFunction(arg1)) {
        nextPromise = iter.next().then((done) => {
          if (done.done) {
            let nextResult = done.value;
          } else {
            nextResult = iter.next();
          }
          return nextResult;
        });
        let nextResult = iter.next();
      }
      return nextPromise;
    };
    let result1 = defineIteratorMethods(obj);
    let str8 = "Generator";
    let tmpResult2 = tmp(obj, str, "Generator");
    let tmp35 = tmp5;
    let tmpResult3 = tmp(obj, tmp6, function() {
      return this;
    });
    let str9 = "toString";
    let tmpResult4 = tmp(obj, "toString", () => "[object Generator]");
    obj.keys = (arg0) => {
      const ObjectResult = Object(arg0);
      const items = [];
      for (const key10008 in ObjectResult) {
        let tmp3 = key10008;
        let arr = items.push(key10008);
        continue;
      }
      const reversed = items.reverse();
      function next() {
        if (items.length) {
          const arr = items.pop();
          while (!(arr in closure_0)) {
            let tmp4 = items;
          }
          next.value = arr;
          next.done = false;
          return next;
        }
        next.done = true;
        return next;
      }
      return next;
    };
    obj.values = values;
    let tmp38 = Context;
    let obj2 = {
      constructor: tmp2,
      reset(arg0) {
          const self = this;
          this.prev = 0;
          this.next = 0;
          this._sent = undefined;
          this.sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          const tryEntries = this.tryEntries;
          const item = tryEntries.forEach(resetTryEntry);
          if (!arg0) {
            for (const key10016 in self) {
              let tmp6 = key10016;
              let callResult = "t" === key10016.charAt(0);
              if (callResult) {
                let tmp4 = hasOwnProperty;
                callResult = hasOwnProperty.call(self, key10016);
              }
              if (callResult) {
                let _isNaN = isNaN;
                callResult = !isNaN(+key10016.slice(1));
              }
              if (!callResult) {
                continue;
              } else {
                self[key10016] = undefined;
                continue;
              }
              continue;
            }
          }
        },
      stop() {
          this.done = true;
          const completion = this.tryEntries[0].completion;
          if ("throw" === completion.type) {
            throw completion.arg;
          } else {
            return tmp.rval;
          }
        },
      dispatchException(arg0) {
          const self = this;
          let closure_0 = arg0;
          function handle(catchLoc, arg1) {
            completion.type = "throw";
            completion.arg = closure_0;
            self.next = catchLoc;
            if (arg1) {
              self.method = "next";
              self.arg = undefined;
            }
            return arg1;
          }
          if (this.done) {
            throw arg0;
          } else {
            let diff = self.tryEntries.length - 1;
            if (diff >= 0) {
              const completion = tmp2.completion;
              while ("root" !== self.tryEntries[diff].tryLoc) {
                if (tmp2.tryLoc <= self.prev) {
                  let tmp10 = self;
                  let callResult = self.call(tmp2, "catchLoc");
                  let tmp12 = self;
                  let callResult1 = self.call(tmp2, "finallyLoc");
                  if (callResult) {
                    if (callResult1) {
                      if (self.prev < tmp2.catchLoc) {
                        let flag2 = true;
                        return handle(tmp2.catchLoc, true);
                      } else {
                        let tmp8 = callResult;
                        let tmp9 = callResult1;
                        if (self.prev < tmp2.finallyLoc) {
                          return handle(tmp2.finallyLoc);
                        }
                      }
                    }
                  }
                  if (callResult) {
                    let tmp6 = callResult;
                    let tmp7 = callResult1;
                    if (self.prev < tmp2.catchLoc) {
                      let flag = true;
                      return handle(tmp2.catchLoc, true);
                    }
                  } else if (callResult1) {
                    let tmp4 = callResult;
                    let tmp5 = callResult1;
                    if (self.prev < tmp2.finallyLoc) {
                      return handle(tmp2.finallyLoc);
                    }
                  } else {
                    let tmp3 = globalThis;
                    let _Error = Error;
                    let str4 = "try statement without catch or finally";
                    throw Error("try statement without catch or finally");
                  }
                }
                diff = diff - 1;
              }
              return handle("end");
            }
          }
        },
      abrupt(type, arg1) {
          const self = this;
          let diff = this.tryEntries.length - 1;
          let tmp2;
          if (diff >= 0) {
            while (true) {
              let tmp3 = self.tryEntries[diff];
              if (tmp3.tryLoc <= self.prev) {
                let tmp4 = hasOwnProperty;
                if (hasOwnProperty.call(tmp3, "finallyLoc")) {
                  tmp2 = tmp3;
                  if (self.prev < tmp3.finallyLoc) {
                    break;
                  }
                }
                break;
              }
              diff = diff - 1;
              if (diff < 0) {
                break;
              }
            }
          }
          let tmp5 = tmp2;
          if (tmp2) {
            let tmp6 = "break" === type;
            if (!tmp6) {
              tmp6 = "continue" === type;
            }
            tmp5 = tmp6;
          }
          if (tmp5) {
            tmp5 = tmp2.tryLoc <= arg1;
          }
          if (tmp5) {
            tmp5 = arg1 <= tmp2.finallyLoc;
          }
          if (tmp5) {
            tmp2 = null;
          }
          const tmp7 = tmp2 ? tmp2.completion : {};
          tmp7.type = type;
          tmp7.arg = arg1;
          if (tmp2) {
            self.method = "next";
            self.next = tmp2.finallyLoc;
            let completeResult = closure_9;
          } else {
            completeResult = self.complete(tmp7);
          }
          return completeResult;
        },
      complete(type, next) {
          const self = this;
          if ("throw" === type.type) {
            throw type.arg;
          } else {
            if ("break" !== type.type) {
              if ("continue" !== type.type) {
                if ("return" === type.type) {
                  const arg = type.arg;
                  self.arg = arg;
                  self.rval = arg;
                  self.method = "return";
                  self.next = "end";
                } else {
                  if (tmp) {
                    self.next = next;
                  }
                  tmp = "normal" === type.type && next;
                }
              }
              return closure_9;
            }
            self.next = type.arg;
          }
        },
      finish(arg0) {
          const self = this;
          let diff = this.tryEntries.length - 1;
          if (diff >= 0) {
            while (self.tryEntries[diff].finallyLoc !== arg0) {
              diff = diff - 1;
            }
            self.complete(self.tryEntries[diff].completion, self.tryEntries[diff].afterLoc);
            resetTryEntry(self.tryEntries[diff]);
            return closure_9;
          }
        },
      catch: function _catch(arg0) {
          let diff = this.tryEntries.length - 1;
          if (diff >= 0) {
            while (this.tryEntries[diff].tryLoc !== arg0) {
              diff = diff - 1;
            }
            const completion = tmp2.completion;
            let arg;
            if ("throw" === completion.type) {
              arg = completion.arg;
              resetTryEntry(tmp2);
            }
            return arg;
          }
          throw Error("illegal catch attempt");
        },
      delegateYield(arg0, resultName, nextLoc) {
          this.delegate = { iterator: values(arg0), resultName, nextLoc };
          if ("next" === this.method) {
            this.arg = undefined;
          }
          return closure_9;
        }
    };
    tmp2.prototype = obj2;
    return obj;
  }
};
