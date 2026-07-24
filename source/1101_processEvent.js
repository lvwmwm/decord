// Module ID: 1101
// Function ID: 12575
// Name: processEvent
// Dependencies: [65, 977]
// Exports: screenshotIntegration

// Module 1101 (processEvent)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _toConsumableArray = arg2;
  return fn(this, undefined, undefined, function*() {
    const exception = outer1_0.exception;
    const outer1_3 = exception;
    let values;
    if (null !== exception) {
      if (undefined !== outer1_3) {
        values = outer1_3.values;
      }
    }
    if (values) {
      if (outer1_0.exception.values.length > 0) {
        const options = outer1_2.getOptions();
        const outer1_4 = options;
        const beforeScreenshot = options.beforeScreenshot;
        const outer1_5 = beforeScreenshot;
        let callResult;
        if (null !== beforeScreenshot) {
          if (undefined !== outer1_5) {
            callResult = outer1_5.call(outer1_4, outer1_0, outer1_1);
          }
        }
        if (false !== callResult) {
          const NATIVE = callback(table[1]).NATIVE;
          const arr3 = yield NATIVE.captureScreenshot();
          let tmp11 = arr3;
          if (arr3) {
            tmp11 = arr3.length > 0;
          }
          if (tmp11) {
            const items = [];
            let attachments;
            if (null != outer1_1) {
              attachments = outer1_1.attachments;
            }
            if (!attachments) {
              attachments = [];
            }
            outer1_1.attachments = items.concat(callback2(arr3), callback2(attachments));
            const tmp12 = outer1_1;
            const tmp14 = callback2(arr3);
            const tmp15 = callback2;
          }
          return outer1_0;
        }
      }
    }
    return outer1_0;
  });
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

export const screenshotIntegration = function screenshotIntegration() {
  return {
    name: "Screenshot",
    setupOnce() {

    },
    processEvent
  };
};
