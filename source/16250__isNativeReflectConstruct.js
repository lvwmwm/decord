// Module ID: 16250
// Function ID: 126082
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 16, 15, 17, 18, 162]

// Module 16250 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import _classCallCheck from "_wrapNativeSuper";
import _assertThisInitialized from "_assertThisInitialized";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _wrapNativeSuper from "_wrapNativeSuper";

let self = this;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let fn = function u(exports) {
  let tmp = ((arg0) => {
    const fn = function t(arg0) {
      const self = this;
      o(this, fn);
      let str = "Timed out";
      if (null != arg0) {
        const _HermesInternal = HermesInternal;
        str = "Timed out after waiting for " + arg0 + " ms";
      }
      const items = [str];
      const obj = outer2_4(fn);
      if (outer2_7()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, outer2_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp4Result = POSITIVE_INFINITY(self, constructResult);
      Object.setPrototypeOf(callback(tmp4Result), fn.prototype);
      return tmp4Result;
    };
    return outer1_5(fn, arg0)(fn);
  })(_wrapNativeSuper(Error));
  const _defineProperties = tmp;
  function o(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return new Promise((arg0, arg1) => {
      closure_0.schedule(arg0, closure_1);
    });
  }
  let closure_2 = {
    schedule(arg0, closure_1) {
      let closure_0 = arg0;
      function n(arg0) {
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(arg0);
        }
        let c1;
      }
      const timeout = setTimeout(() => {
        n(closure_1);
        callback();
      }, closure_1);
      return {
        cancel() {
          n(closure_1);
        }
      };
    }
  };
  let fn = function r(arg0, timeout) {
    let tmp = arg2;
    let closure_0 = arg0;
    let tmp3 = timeout;
    if ("number" !== typeof timeout) {
      timeout = undefined;
      if (null != timeout) {
        timeout = timeout.timeout;
      }
      tmp3 = timeout;
    }
    let num = 5000;
    if (null !== tmp3) {
      num = 5000;
      if (undefined !== tmp3) {
        num = tmp3;
      }
    }
    if ("number" !== typeof timeout) {
      let prop;
      if (null != timeout) {
        prop = timeout.intervalBetweenAttempts;
      }
      tmp = prop;
    }
    let num2 = 50;
    if (null !== tmp) {
      num2 = 50;
      if (undefined !== tmp) {
        num2 = tmp;
      }
    }
    let c3 = false;
    let fn = function f() {
      return new Promise((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        const fn = function r() {
          if (!outer2_3) {
            let promise = new Promise(() => { ... });
            promise.then(() => { ... }).catch(closure_1);
            let nextPromise = promise.then(() => { ... });
          }
        };
        fn();
      });
    };
    let fn2;
    if (num !== c3) {
      fn2 = () => num(num2, num).then(() => {
        const outer1_3 = true;
        throw new closure_0(outer1_1);
      });
    }
    if (null != fn2) {
      const items = [fn(), fn2()];
      let racePromise = Promise.race(items);
    } else {
      racePromise = fn();
    }
    return racePromise;
  };
  exports.DEFAULT_INTERVAL_BETWEEN_ATTEMPTS_IN_MS = 50;
  exports.DEFAULT_TIMEOUT_IN_MS = 5000;
  exports.TimeoutError = tmp;
  exports.WAIT_FOREVER = POSITIVE_INFINITY;
  exports.default = fn;
  exports.waitUntil = fn;
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    fn(exports);
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(["exports"], fn);
  }
}
if ("undefined" !== typeof globalThis) {
  self = globalThis;
}
let obj = {};
self["async-wait-until"] = obj;
fn(obj);
