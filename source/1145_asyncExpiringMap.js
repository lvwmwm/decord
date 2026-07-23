// Module ID: 1145
// Function ID: 13061
// Name: asyncExpiringMap
// Dependencies: [1139]
// Exports: addTimeToInitialDisplayFallback, getTimeToInitialDisplayFallback

// Module 1145 (asyncExpiringMap)
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
const asyncExpiringMap = new require("AsyncExpiringMap").AsyncExpiringMap({ ttl: 60000 });

export const addTimeToInitialDisplayFallback = function addTimeToInitialDisplayFallback(spanId, newScreenTimeToDisplay) {
  const result = asyncExpiringMap.set(spanId, newScreenTimeToDisplay);
};
export const getTimeToInitialDisplayFallback = function getTimeToInitialDisplayFallback(outer1_7) {
  const callback = outer1_7;
  return callback(undefined, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      return outer2_1.get(outer1_0);
    }
  });
};
