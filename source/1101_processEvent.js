// Module ID: 1101
// Function ID: 12573
// Name: processEvent
// Dependencies: []
// Exports: screenshotIntegration

// Module 1101 (processEvent)
function processEvent(arg0, arg1, arg2) {
  arg1 = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  return fn(this, undefined, undefined, function*() {
    const exception = lib.exception;
    let values;
    if (null !== exception) {
      if (undefined !== exception) {
        values = exception.values;
      }
    }
    if (values) {
      if (lib.exception.values.length > 0) {
        const options = options.getOptions();
        const beforeScreenshot = options.beforeScreenshot;
        let callResult;
        if (null !== beforeScreenshot) {
          if (undefined !== beforeScreenshot) {
            callResult = beforeScreenshot.call(options, lib, attachments);
          }
        }
        if (false !== callResult) {
          const NATIVE = lib(attachments[1]).NATIVE;
          const arr3 = yield NATIVE.captureScreenshot();
          let tmp11 = arr3;
          if (arr3) {
            tmp11 = arr3.length > 0;
          }
          if (tmp11) {
            const items = [];
            let attachments;
            if (null != attachments) {
              attachments = attachments.attachments;
            }
            if (!attachments) {
              attachments = [];
            }
            attachments.attachments = items.concat(options(arr3), options(attachments));
            const tmp12 = attachments;
            const tmp14 = options(arr3);
            const tmp15 = options;
          }
          return lib;
        }
      }
    }
    return lib;
  });
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

export const screenshotIntegration = function screenshotIntegration() {
  return {
    name: "Screenshot",
    setupOnce() {

    },
    processEvent
  };
};
