// Module ID: 1091
// Function ID: 12503
// Name: createProcessEvent
// Dependencies: [31, 794]

// Module 1091 (createProcessEvent)
function createProcessEvent() {
  const arg1 = this;
  let closure_1 = false;
  let closure_2 = null;
  return (arg0) => {
    const self = arg0;
    return _null(self, undefined, undefined, function*() {
      if (closure_1) {
        if (closure_2) {
          const _Object = Object;
          const _Object2 = Object;
          lib.modules = Object.assign(Object.assign({}, closure_2), lib.modules);
        }
        return lib;
      } else {
        const NATIVE = lib(closure_1[0]).NATIVE;
        closure_2 = yield NATIVE.fetchModules();
        closure_1 = true;
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
    arg1 = arg0;
    const arg6 = arg1;
    const createProcessEvent = arg3;
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
arg5.modulesLoaderIntegration = function modulesLoaderIntegration() {
  return {
    name: "ModulesLoader",
    setupOnce() {

    },
    processEvent: createProcessEvent()
  };
};
