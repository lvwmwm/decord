// Module ID: 896
// Function ID: 897
// Name: disable
// Dependencies: [177]
// Exports: disable, enable

// Module 896 (disable)
import _mod177 from "module_177" /* 177 */;

let closure_1, closure_3, dependencyMap;

const items = [ReferenceError, TypeError, RangeError];
let c3 = false;

export const disable = function disable() {
  c3 = false;
  _mod177._B = null;
  _mod177._C = null;
};
export const enable = function enable(arg0) {
  let obj = arg0;
  function onUnhandled(arg0) {
    let allRejections = obj.allRejections;
    if (!allRejections) {
      let whitelist = obj.whitelist;
      const error = closure_3[arg0].error;
      if (!whitelist) {
        whitelist = items;
      }
      allRejections = whitelist.some((item) => closure_0 instanceof item);
    }
    if (allRejections) {
      closure_2 = tmp4 + 1;
      closure_3[arg0].displayId = +closure_2;
      closure_3[arg0].logged = true;
      if (obj.onUnhandled) {
        obj.onUnhandled(closure_3[arg0].displayId, closure_3[arg0].error);
      } else {
        const error2 = tmp2[arg0].error;
        const _console = console;
        console.warn(`Possible Unhandled Promise Rejection (id: ${tmp2[arg0].displayId}):`);
        let tmp7 = error2;
        if (tmp7) {
          tmp7 = error2.stack || error2;
        }
        const text = `${tmp7}`;
        const parts = `${tmp7}`.split("\n");
        const item = parts.forEach((item) => {
          console.warn(`  ${item}`);
        });
      }
    }
  }
  if (!arg0) {
    obj = {};
  }
  let tmp = closure_3;
  if (tmp) {
    closure_3 = false;
    const tmp2 = obj;
    const tmp3 = dependencyMap;
    let tmp4 = null;
    obj(177)._B = null;
    obj(177)._C = null;
  }
  dependencyMap = 0;
  let closure_2 = 0;
  closure_3 = {};
  obj(177)._B = (_y) => {
    const tmp = 2 === _y._y && closure_3[_y._E];
    if (tmp) {
      if (closure_3[_y._E].logged) {
        const _E = _y._E;
        if (closure_3[_E].logged) {
          if (obj.onHandled) {
            obj.onHandled(closure_3[_E].displayId, closure_3[_E].error);
          } else if (!closure_3[_E].onUnhandled) {
            const _console = console;
            console.warn(`Promise Rejection Handled (id: ${closure_3[_E].displayId}):`);
            const _console2 = console;
            console.warn(`  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ${closure_3[_E].displayId}.`);
          }
        }
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3[_y._E].timeout);
      }
      delete closure_3[_y._E];
    }
  };
  obj(177)._C = (_x, error) => {
    let _setTimeout;
    let bindResult;
    let num;
    if (0 === _x._x) {
      closure_1 = tmp3 + 1;
      _x._E = +closure_1;
      const _E = _x._E;
      obj = { displayId: null, error, timeout: _setTimeout(bindResult, num), logged: false };
      _setTimeout = setTimeout;
      let closure_0 = error;
      num = 2000;
      bindResult = onUnhandled.bind(null, _x._E);
      const tmp4 = closure_3;
      if (items.some((item) => closure_0 instanceof item)) {
        num = 100;
      }
      tmp4[_E] = obj;
    }
  };
};
