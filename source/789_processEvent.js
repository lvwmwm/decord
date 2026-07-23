// Module ID: 789
// Function ID: 8910
// Name: processEvent
// Dependencies: [57, 790, 791, 794]
// Exports: debugSymbolicatorIntegration

// Module 789 (processEvent)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function processEvent(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return fn(this, undefined, undefined, function*() {
    let isErrorLikeResult;
    let tmp46;
    let tmp47;
    const exception = outer1_0.exception;
    const outer1_2 = exception;
    let values;
    if (null !== exception) {
      if (undefined !== outer1_2) {
        values = outer1_2.values;
      }
    }
    if (values) {
      if (obj.isErrorLike(outer1_1.originalException)) {
        let originalException = outer1_1.originalException;
        const items = [];
        if (obj5.isErrorLike(originalException)) {
          do {
            let arr = items.push(originalException);
            let cause = originalException.cause;
            let tmp29 = callback;
            let tmp30 = dependencyMap;
            let obj6 = callback(790);
            originalException = cause;
            isErrorLikeResult = obj6.isErrorLike(cause);
          } while (isErrorLikeResult);
        }
        const entries = items.entries();
        const tmp34 = entries[Symbol.iterator]();
        while (tmp34 !== undefined) {
          let tmp44 = outer2_2;
          let tmp45 = outer2_2(tmp35, 2);
          [tmp46, tmp47] = tmp45;
          let tmp48 = outer2_6;
          let tmp49 = callback;
          let tmp50 = dependencyMap;
          let obj7 = callback(790);
          let tmp51 = yield outer2_6(tmp47.stack, obj7.getFramesToPop(tmp47));
          if (tmp51) {
            let tmp38 = outer2_7;
            let tmp39 = outer1_0;
            let tmp40 = tmp46;
            let tmp41 = tmp51;
            let tmp42 = outer2_7(outer1_0.exception.values[tmp46], tmp37);
          }
          continue;
        }
        obj5 = callback(790);
      }
      return outer1_0;
    }
    if (outer1_1.syntheticException) {
      if (obj2.isErrorLike(outer1_1.syntheticException)) {
        const obj4 = yield outer2_6(outer1_1.syntheticException.stack, callback(790).getFramesToPop(outer1_1.syntheticException));
        if (outer1_0.exception) {
          values = obj4;
          if (obj4) {
            values = outer1_0.exception.values;
          }
          if (values) {
            outer2_7(outer1_0.exception.values[0], obj4);
          }
        } else {
          if (tmp16) {
            const threads = outer1_0.threads;
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
            tmp17 = outer1_0;
          }
          tmp16 = outer1_0.threads && obj4;
        }
        const obj3 = callback(790);
      }
      obj2 = callback(790);
    }
  });
}
function symbolicate(arg0) {
  let closure_0 = arg0;
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  return fn(this, undefined, undefined, function*() {
    let obj = callback(num[2]);
    const parseErrorStackResult = callback(num[2]).parseErrorStack(outer1_0);
    const tmp2 = yield callback(num[2]).symbolicateStackTrace(parseErrorStackResult);
    if (tmp2) {
      const tmp9 = "stack" in tmp3 ? tmp2.stack : tmp2;
      const _Math = Math;
      const bound = Math.max(outer1_1 - 1, 0);
      if (bound) {
        let substr = arr.slice(bound);
      } else {
        substr = arr;
      }
      const tmp15 = yield (function convertReactNativeFramesToSentryFrames(substr) {
        let closure_0 = substr;
        return outer3_3(this, undefined, undefined, function*() {
          if (obj) {
            return obj.resume();
          } else {
            let self = this;
            self = this;
            return Promise.all(outer1_0.map((arg0) => {
              let closure_0 = arg0;
              return outer6_3(closure_0, undefined, undefined, /* F8922 */ function*() { ... });
            }));
          }
        });
      })(substr.filter((file) => {
        file = file.file;
        if (file) {
          file = null === file.file.match(outer3_4);
          const str = file.file;
        }
        return file;
      }));
      return yield callback(num[2]).fetchSourceContext(tmp15);
    } else {
      const debug = callback(num[3]).debug;
      debug.error("React Native DevServer could not symbolicate the stack trace.");
      return null;
    }
    const obj2 = callback(num[2]);
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
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let iter = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          callback(iter.value);
        } else {
          (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value).then(fulfilled, iter);
          const promise = (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      step(iter.next());
    });
    return _Promise;
  };
}
let items = ["ReactNativeRenderer-dev\\.js$", "MessageQueue\\.js$"];
const regExp = new RegExp(items.join("|"));

export const debugSymbolicatorIntegration = function debugSymbolicatorIntegration() {
  return {
    name: "DebugSymbolicator",
    setupOnce() {

    },
    processEvent
  };
};
