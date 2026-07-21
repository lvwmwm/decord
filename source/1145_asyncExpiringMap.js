// Module ID: 1145
// Function ID: 13060
// Name: asyncExpiringMap
// Dependencies: []
// Exports: addTimeToInitialDisplayFallback, getTimeToInitialDisplayFallback

// Module 1145 (asyncExpiringMap)
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    const asyncExpiringMap = arg1;
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
const asyncExpiringMap = new require(dependencyMap[0]).AsyncExpiringMap({ ttl: 60000 });

export const addTimeToInitialDisplayFallback = function addTimeToInitialDisplayFallback(spanId, newScreenTimeToDisplay) {
  const result = asyncExpiringMap.set(spanId, newScreenTimeToDisplay);
};
export const getTimeToInitialDisplayFallback = function getTimeToInitialDisplayFallback(arg0) {
  return arg0(undefined, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      return closure_1.get(closure_0);
    }
  });
};
