// Module ID: 1052
// Function ID: 11260
// Name: _wrapTimeFunction
// Dependencies: [68747264, 69009408]

// Module 1052 (_wrapTimeFunction)
function _wrapTimeFunction(arg0) {
  const require = arg0;
  return function() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    let obj = arg0(closure_1[1]);
    obj = {};
    obj = { handled: false, type: "auto.browser.browserapierrors." + arg0(closure_1[0]).getFunctionName(arg0) };
    obj.mechanism = obj;
    array[0] = obj.wrap(array[0], obj);
    return arg0.apply(this, array);
  };
}
function _wrapRAF(arg0) {
  const require = arg0;
  return function(arg0) {
    let obj = arg0(closure_1[1]);
    obj = {};
    obj = {};
    const obj1 = { handler: arg0(closure_1[0]).getFunctionName(arg0) };
    obj.data = obj1;
    obj.mechanism = obj;
    const items = [obj.wrap(arg0, obj)];
    return arg0.apply(this, items);
  };
}
function _wrapXHR(arg0) {
  const require = arg0;
  return function() {
    const arg0 = this;
    const items = [true, true, true, true];
    const item = items.forEach((arg0) => {
      const self = arg0;
      let tmp = arg0 in self;
      if (tmp) {
        tmp = "function" === typeof self[arg0];
      }
      if (tmp) {
        self(closure_1[0]).fill(self, arg0, (arg0) => {
          let obj = {};
          obj = {};
          obj = { handler: arg0(closure_1[0]).getFunctionName(arg0) };
          obj.data = obj;
          obj.handled = false;
          obj.type = "auto.browser.browserapierrors.xhr." + arg0;
          obj.mechanism = obj;
          const obj4 = arg0(closure_1[0]);
          const originalFunction = arg0(closure_1[0]).getOriginalFunction(arg0);
          if (originalFunction) {
            obj.mechanism.data.handler = arg0(closure_1[0]).getFunctionName(originalFunction);
            const obj6 = arg0(closure_1[0]);
          }
          const obj5 = arg0(closure_1[0]);
          return arg0(closure_1[1]).wrap(arg0, obj);
        });
        const obj = self(closure_1[0]);
      }
    });
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return arg0.apply(this, array);
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = [];
const _module = require(dependencyMap[0]);

export const browserApiErrorsIntegration = _module.defineIntegration(function _browserApiErrorsIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let closure_0 = Object.assign({}, {});
    const obj = {
      name: "BrowserApiErrors",
      setupOnce() {
          if (lib.setTimeout) {
            lib(closure_1[0]).fill(lib(closure_1[1]).WINDOW, "setTimeout", closure_3);
            const obj = lib(closure_1[0]);
          }
          if (lib.setInterval) {
            lib(closure_1[0]).fill(lib(closure_1[1]).WINDOW, "setInterval", closure_3);
            const obj2 = lib(closure_1[0]);
          }
          if (lib.requestAnimationFrame) {
            lib(closure_1[0]).fill(lib(closure_1[1]).WINDOW, "requestAnimationFrame", closure_4);
            const obj3 = lib(closure_1[0]);
          }
          let _XMLHttpRequest = lib.XMLHttpRequest;
          if (_XMLHttpRequest) {
            _XMLHttpRequest = "XMLHttpRequest" in lib(closure_1[1]).WINDOW;
          }
          if (_XMLHttpRequest) {
            const _XMLHttpRequest2 = XMLHttpRequest;
            lib(closure_1[0]).fill(XMLHttpRequest.prototype, "send", closure_5);
            const obj4 = lib(closure_1[0]);
          }
          const eventTarget = lib.eventTarget;
          if (eventTarget) {
            const _Array = Array;
            let arr = eventTarget;
            if (!Array.isArray(eventTarget)) {
              arr = closure_2;
            }
            const item = arr.forEach((arg0) => {
              function _wrapEventTarget(arg0, closure_0) {
                const tmp = arg0(closure_0[1]).WINDOW[arg0];
                let prototype;
                if (null != tmp) {
                  prototype = tmp.prototype;
                }
                if (null != prototype) {
                  if (null != prototype.hasOwnProperty) {
                    if (prototype.hasOwnProperty("addEventListener")) {
                      arg0(closure_0[0]).fill(prototype, "addEventListener", (arg0) => () => { ... });
                      const obj = arg0(closure_0[0]);
                      arg0(closure_0[0]).fill(prototype, "removeEventListener", (arg0) => () => { ... });
                    }
                  }
                }
              }(arg0, closure_0);
            });
          }
        }
    };
    return obj;
  }
});
