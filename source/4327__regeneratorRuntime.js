// Module ID: 4327
// Function ID: 38140
// Name: _regeneratorRuntime
// Dependencies: []

// Module 4327 (_regeneratorRuntime)

export default function _regeneratorRuntime() {
  function define(arg0, arg1, value) {
    const obj = { FRIEND_REQUESTS: true, ForYouLoadMore: true, QUEST_BADGE: true, GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED: true, value };
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
    const items = [-0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001089673160674, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014917618704242618, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000139831141178];
    const item = items.forEach((arg0) => {
      callback(arg0, arg0, function(arg0) {
        return this._invoke(arg0, arg0);
      });
    });
  }
  class AsyncIterator {
    constructor(arg0, arg1) {
      values = arg0;
      hasOwnProperty = arg1;
      invoke = function invoke(arg0, self) {
        arg0 = arg2;
        self = arg3;
        const tmp = callback(arg0[arg0], arg0, self);
        if ("throw" !== tmp.type) {
          const iter = tmp.arg;
          const value = iter.value;
          if (value) {
            if ("object" == obj.default(value)) {
              if (self.call(value, "__await")) {
                let nextPromise = self.resolve(value.__await).then((arg0) => {
                  callback("next", arg0, arg2, arg3);
                }, (arg0) => {
                  callback("throw", arg0, arg2, arg3);
                });
                const resolveResult = self.resolve(value.__await);
              }
              return nextPromise;
            }
            const obj = arg0(iter[0]);
          }
          nextPromise = self.resolve(value).then((value) => {
            iter.value = value;
            arg2(iter);
          }, (arg0) => callback("throw", arg0, arg2, arg3));
          const resolveResult1 = self.resolve(value);
        } else {
          arg3(tmp.arg);
        }
      };
      obj = {
        value(arg0, arg1) {
              function callInvokeWithMethodAndArg() {
                return new arg1((arg0, arg1) => {
                  callback(closure_0, closure_1, arg0, arg1);
                });
              }
              if (nextPromise) {
                let nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
              } else {
                nextPromise = callInvokeWithMethodAndArg();
              }
              return nextPromise;
            }
      };
      tmp = f38169(this, "_invoke", obj);
      return;
    }
  }
  function makeInvokeMethod(arg0, arg1, arg2) {
    const hasOwnProperty = arg1;
    let closure_3 = closure_5;
    return (method, arg1, self) => {
      if (closure_3 === closure_7) {
        const _Error = Error;
        throw Error("Generator is already running");
      } else if (closure_3 === closure_8) {
        if ("throw" === method) {
          throw arg1;
        } else {
          let obj = { value: undefined, done: true };
          return obj;
        }
      } else {
        self.method = method;
        self.arg = arg1;
        while (true) {
          let tmp = self;
          let delegate = self.delegate;
          if (delegate) {
            let tmp2 = callback2;
            let tmp3 = self;
            let tmp4 = callback2(delegate, self);
            let tmp5 = tmp4;
            if (tmp4) {
              let tmp29 = closure_9;
              tmp5 = tmp4;
              if (tmp4 === closure_9) {
                continue;
              } else {
                return tmp4;
              }
            }
          }
          let tmp6 = self;
          let tmp7 = tmp5;
          if ("next" === self.method) {
            let tmp18 = self;
            let arg = self.arg;
            self._sent = arg;
            self.sent = arg;
          } else {
            let tmp8 = self;
            if ("throw" === self.method) {
              let tmp12 = closure_3;
              let tmp13 = closure_5;
              if (closure_3 === closure_5) {
                break;
              } else {
                let tmp14 = self;
                let dispatchExceptionResult = self.dispatchException(self.arg);
              }
            } else {
              let tmp9 = self;
              if ("return" === self.method) {
                let tmp10 = self;
                let abruptResult = self.abrupt("return", self.arg);
              }
            }
          }
          let tmp19 = closure_7;
          closure_3 = closure_7;
          let tmp20 = callback;
          let tmp21 = method;
          let tmp22 = arg1;
          let tmp23 = self;
          let tmp24 = callback(method, arg1, self);
          if ("normal" === tmp24.type) {
            let tmp26 = self;
            closure_3 = self.done ? closure_8 : closure_6;
            let tmp27 = closure_9;
            let tmp28 = tmp24;
            if (tmp24.arg === closure_9) {
              continue;
            } else {
              obj = { value: tmp24.arg };
              let tmp37 = self;
              obj.done = self.done;
              return obj;
            }
          } else {
            let tmp25 = tmp24;
            if ("throw" !== tmp24.type) {
              continue;
            } else {
              let tmp34 = closure_8;
              closure_3 = closure_8;
              let tmp35 = self;
              self.method = "throw";
              self.arg = tmp24.arg;
              tmp5 = tmp7;
              let tmp36 = tmp24;
              // continue
            }
            continue;
          }
          continue;
        }
        closure_3 = closure_8;
        throw self.arg;
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
    const tmp = completion.completion || {};
    tmp.type = "normal";
    delete r0.arg;
    completion.completion = tmp;
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
    let obj = next;
    if (next) {
      obj = next[closure_3];
      if (obj) {
        return obj.call(next);
      } else if ("function" === typeof next.next) {
        return next;
      } else {
        const _isNaN = isNaN;
        if (!isNaN(next.length)) {
          let closure_1 = -1;
          next = function next() {
            const sum = v1 + 1;
            let v1 = sum;
            if (sum < arg0.length) {
              while (!v1.call(arg0, v1)) {
                let tmp5 = v1;
                let sum1 = v1 + 1;
                v1 = sum1;
                let tmp7 = arg0;
              }
              next.value = arg0[closure_1];
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
  module.exports = function _regeneratorRuntime() {
    return obj;
  };
  let obj = {};
  const require = obj;
  let obj1 = hasOwnProperty;
  const module = hasOwnProperty;
  let fn = Object.defineProperty;
  if (!fn) {
    fn = (arg0, arg1, value) => {
      arg0[arg1] = value.value;
    };
  }
  const dependencyMap = fn;
  const tmp4 = "function" === typeof Symbol ? Symbol : {};
  const tmp5 = tmp4.iterator || "@@iterator";
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
    let closure_5 = "suspendedStart";
    let str3 = "suspendedYield";
    let closure_6 = "suspendedYield";
    let str4 = "executing";
    let closure_7 = "executing";
    let str5 = "completed";
    let closure_8 = "completed";
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
      // break
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
        values = arg0;
        hasOwnProperty = arg1;
        invoke = function invoke(arg0, self) {
          arg0 = arg2;
          self = arg3;
          const tmp = callback(arg0[arg0], arg0, self);
          if ("throw" !== tmp.type) {
            const iter = tmp.arg;
            const value = iter.value;
            if (value) {
              if ("object" == obj.default(value)) {
                if (self.call(value, "__await")) {
                  let nextPromise = self.resolve(value.__await).then((arg0) => {
                    callback("next", arg0, arg2, arg3);
                  }, (arg0) => {
                    callback("throw", arg0, arg2, arg3);
                  });
                  const resolveResult = self.resolve(value.__await);
                }
                return nextPromise;
              }
              const obj = arg0(iter[0]);
            }
            nextPromise = self.resolve(value).then((value) => {
              iter.value = value;
              arg2(iter);
            }, (arg0) => callback("throw", arg0, arg2, arg3));
            const resolveResult1 = self.resolve(value);
          } else {
            arg3(tmp.arg);
          }
        };
        obj = {
          value(arg0, arg1) {
                  function callInvokeWithMethodAndArg() {
                    return new arg1((arg0, arg1) => {
                      callback(closure_0, closure_1, arg0, arg1);
                    });
                  }
                  if (nextPromise) {
                    let nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
                  } else {
                    nextPromise = callInvokeWithMethodAndArg();
                  }
                  return nextPromise;
                }
        };
        tmp = f38169(this, "_invoke", obj);
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
        const nextResult = iter.next();
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
      const hasOwnProperty = items;
      for (const key10008 in ObjectResult) {
        let tmp3 = key10008;
        let arr = items.push(key10008);
      }
      const reversed = items.reverse();
      function next() {
        if (items.length) {
          const arr = items.pop();
          while (!(arr in ObjectResult)) {
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
                let tmp4 = closure_1;
                callResult = closure_1.call(self, key10016);
              }
              if (callResult) {
                let _isNaN = isNaN;
                callResult = !isNaN(+key10016.slice(1));
              }
              if (!callResult) {
                continue;
              } else {
                self[key10016] = undefined;
                // continue
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
          function handle(catchLoc, arg1) {
            completion.type = "throw";
            completion.arg = catchLoc;
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
            const hasOwnProperty = self;
            let diff = self.tryEntries.length - 1;
            if (diff >= 0) {
              while ("root" !== self.tryEntries[diff].tryLoc) {
                if (tmp2.tryLoc <= self.prev) {
                  let tmp10 = hasOwnProperty;
                  let callResult = hasOwnProperty.call(tmp2, "catchLoc");
                  let tmp12 = hasOwnProperty;
                  let callResult1 = hasOwnProperty.call(tmp2, "finallyLoc");
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
                  const tmp = "normal" === type.type && next;
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
            const tmp2 = this.tryEntries[diff];
            while (tmp2.tryLoc !== arg0) {
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
