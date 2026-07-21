// Module ID: 789
// Function ID: 8905
// Name: processEvent
// Dependencies: []
// Exports: debugSymbolicatorIntegration

// Module 789 (processEvent)
function processEvent(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  return fn(this, undefined, undefined, function*() {
    let isErrorLikeResult;
    let tmp46;
    let tmp47;
    const exception = lib.exception;
    let values;
    if (null !== exception) {
      if (undefined !== exception) {
        values = exception.values;
      }
    }
    if (values) {
      if (obj.isErrorLike(closure_1.originalException)) {
        let originalException = closure_1.originalException;
        const items = [];
        if (obj5.isErrorLike(originalException)) {
          do {
            let arr = items.push(originalException);
            let cause = originalException.cause;
            let tmp29 = closure_0;
            let tmp30 = closure_1;
            let obj6 = closure_0(closure_1[1]);
            originalException = cause;
            isErrorLikeResult = obj6.isErrorLike(cause);
          } while (isErrorLikeResult);
        }
        const entries = items.entries();
        const tmp34 = entries[Symbol.iterator]();
        while (tmp34 !== undefined) {
          let tmp44 = exception;
          let tmp45 = exception(tmp35, 2);
          [tmp46, tmp47] = tmp45;
          let tmp48 = closure_6;
          let tmp49 = lib;
          let tmp50 = closure_1;
          let obj7 = lib(closure_1[1]);
          let tmp51 = yield closure_6(tmp47.stack, obj7.getFramesToPop(tmp47));
          if (tmp51) {
            let tmp38 = callback;
            let tmp39 = lib;
            let tmp40 = tmp46;
            let tmp41 = tmp51;
            let tmp42 = callback(lib.exception.values[tmp46], tmp37);
          }
          // continue
        }
        const obj5 = lib(closure_1[1]);
      }
      return lib;
    }
    if (closure_1.syntheticException) {
      if (obj2.isErrorLike(closure_1.syntheticException)) {
        const obj4 = yield closure_6(closure_1.syntheticException.stack, lib(closure_1[1]).getFramesToPop(closure_1.syntheticException));
        if (lib.exception) {
          values = obj4;
          if (obj4) {
            values = lib.exception.values;
          }
          if (values) {
            callback(lib.exception.values[0], obj4);
          }
        } else {
          if (tmp16) {
            const threads = lib.threads;
            values = undefined;
            if (null !== threads) {
              if (undefined !== threads) {
                values = threads.values;
              }
            }
            let first;
            if (null !== values) {
              if (undefined !== values) {
                first = values[0];
              }
            }
            let stacktrace;
            if (null !== first) {
              if (undefined !== first) {
                stacktrace = first.stacktrace;
              }
            }
            if (stacktrace) {
              tmp17.threads.values[0].stacktrace.frames = obj4.reverse();
            }
            const tmp17 = lib;
          }
          const tmp16 = lib.threads && obj4;
        }
        const obj3 = lib(closure_1[1]);
      }
      const obj2 = lib(closure_1[1]);
    }
  });
}
function symbolicate(arg0) {
  const arg1 = arg0;
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  const dependencyMap = num;
  return fn(this, undefined, undefined, function*() {
    const obj = callback(closure_1[2]);
    const parseErrorStackResult = callback(closure_1[2]).parseErrorStack(callback);
    const tmp2 = yield callback(closure_1[2]).symbolicateStackTrace(parseErrorStackResult);
    if (tmp2) {
      const tmp9 = "stack" in tmp3 ? tmp2.stack : tmp2;
      const _Math = Math;
      const bound = Math.max(closure_1 - 1, 0);
      if (bound) {
        let substr = arr.slice(bound);
      } else {
        substr = arr;
      }
      const tmp15 = yield function convertReactNativeFramesToSentryFrames(substr) {
        return callback(this, undefined, undefined, function*() {
          if (obj) {
            return obj.resume();
          } else {
            let self = this;
            self = this;
            return Promise.all(self.map((arg0) => {
              const self = arg0;
              return callback(self, undefined, undefined, /* F8917 */ function*() { ... });
            }));
          }
        });
      }(substr.filter((file) => {
        file = file.file;
        if (file) {
          file = null === file.file.match(closure_4);
          const str = file.file;
        }
        return file;
      }));
      return yield callback(closure_1[2]).fetchSourceContext(tmp15);
    } else {
      const debug = callback(closure_1[3]).debug;
      debug.error("React Native DevServer could not symbolicate the stack trace.");
      return null;
    }
    const obj2 = callback(closure_1[2]);
  });
}
function replaceExceptionFramesInException(stacktrace, arr) {
  stacktrace = undefined;
  if (null != stacktrace) {
    stacktrace = stacktrace.stacktrace;
  }
  if (stacktrace) {
    stacktrace.stacktrace.frames = arr.reverse();
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const dependencyMap = arg1;
    if (!arg2) {
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
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
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
  };
}
const items = [true, true];
const regExp = new RegExp(items.join("|"));

export const debugSymbolicatorIntegration = function debugSymbolicatorIntegration() {
  return {
    name: "DebugSymbolicator",
    setupOnce() {

    },
    processEvent
  };
};
