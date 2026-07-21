// Module ID: 16078
// Function ID: 123543
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16078 (_isNativeReflectConstruct)
let self = this;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
let closure_2 = require(dependencyMap[2]);
let closure_3 = require(dependencyMap[3]);
let closure_4 = require(dependencyMap[4]);
let closure_5 = require(dependencyMap[5]);
let closure_6 = require(dependencyMap[6]);
const fn = function u(exports) {
  const tmp = (arg0) => {
    const fn = function t(arg0) {
      const self = this;
      callback(this, fn);
      let str = "Timed out";
      if (null != arg0) {
        const _HermesInternal = HermesInternal;
        str = "Timed out after waiting for " + arg0 + " ms";
      }
      const items = [str];
      const obj = callback3(fn);
      if (callback4()) {
        const _Reflect = Reflect;
        let constructResult = Reflect.construct(obj, items, callback3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp4Result = closure_3(self, constructResult);
      Object.setPrototypeOf(callback2(tmp4Result), fn.prototype);
      return tmp4Result;
    };
    let tmp = fn;
    tmp = callback(fn, arg0);
    return tmp(fn);
  }(callback(Error));
  let closure_0 = tmp;
  function o(arg0, arg1) {
    const o = arg1;
    return new Promise((arg0, arg1) => {
      arg0.schedule(arg0, arg1);
    });
  }
  let closure_2 = {
    schedule(arg0, arg1) {
      function n(arg0) {
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(arg0);
        }
        let closure_1;
      }
      const timeout = setTimeout(() => {
        n(closure_1);
        arg0();
      }, arg1);
      return {
        cancel() {
          n(closure_1);
        }
      };
    }
  };
  let closure_3 = POSITIVE_INFINITY;
  const fn = function r(arg0, timeout) {
    let tmp = arg2;
    tmp = arg0;
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
    const o = num;
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
    let closure_2 = num2;
    let closure_3 = false;
    const fn = function f() {
      return new Promise((arg0, arg1) => {
        const fn = function r() {
          if (!closure_3) {
            const promise = new Promise(() => { ... });
            promise.then(() => { ... }).catch(arg1);
            const nextPromise = promise.then(() => { ... });
          }
        };
        fn();
      });
    };
    let fn2;
    if (num !== closure_3) {
      fn2 = () => num(num2, num).then(() => {
        let closure_3 = true;
        throw new closure_0(closure_1);
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
    globalThis.define([true], fn);
  }
}
if ("undefined" !== typeof globalThis) {
  self = globalThis;
}
const obj = {};
self.async-wait-until = obj;
fn(obj);
