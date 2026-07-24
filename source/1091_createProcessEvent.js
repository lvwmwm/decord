// Module ID: 1091
// Function ID: 12509
// Name: createProcessEvent
// Dependencies: [977, 794]

// Module 1091 (createProcessEvent)
const require = arg1;
const dependencyMap = arg6;
function createProcessEvent() {
  const self = this;
  let c1 = false;
  let c2 = null;
  return (arg0) => {
    let closure_0 = arg0;
    return _null(closure_0, undefined, undefined, function*() {
      if (outer2_1) {
        if (outer2_2) {
          const _Object = Object;
          const _Object2 = Object;
          outer1_0.modules = Object.assign(Object.assign({}, outer2_2), outer1_0.modules);
        }
        return outer1_0;
      } else {
        const NATIVE = self(table[0]).NATIVE;
        outer2_2 = yield NATIVE.fetchModules();
        outer2_1 = true;
        return true;
      }
    });
  };
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
arg5.modulesLoaderIntegration = function modulesLoaderIntegration() {
  return {
    name: "ModulesLoader",
    setupOnce() {

    },
    processEvent: createProcessEvent()
  };
};
