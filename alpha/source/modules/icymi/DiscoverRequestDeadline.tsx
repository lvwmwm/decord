// Module ID: 10152
// Function ID: 10153
// Name: _asyncToGenerator
// Dependencies: [5, 2]
// Exports: withDiscoverRequestDeadline

// Module 10152 (_asyncToGenerator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2;

let obj = function _withDiscoverRequestDeadline() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_4;
    let signal = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c6 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      const f140564 = function(arg0, arg1) {
        function observeRequest() {
          return obj(...arguments);
        }
        let closure_0 = arg0;
        closure_1 = arg1;
        obj = function o() {
          const error = new Error("Discover request aborted");
          return closure_1(error);
        };
        const listener = closure_3.addEventListener("abort", obj, { once: true });
        if (closure_3.aborted) {
          const tmp3 = obj;
          if (typeof obj === "function") {
            const tmp4 = closure_130_1;
            const _Error = Error;
            const self = this;
            const self2 = this;
            let error = new Error("Discover request aborted");
            closure_130_1(error);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          observeRequest();
        }
      };
      if (c6 === 2) {
        c6 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let timeout;
        try {
          let c2;
          c6 = 2;
          let tmp3 = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp3;
              c2 = undefined;
              signal = undefined;
              signal = signal.signal;
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => closure_1_0.abort(), 30000);
              c5 = 1;
              let self = this;
              let self2 = this;
              c3 = 2;
              c6 = 1;
              let obj4 = { value: new Promise(f140564), done: false };
              const promise = new Promise(f140564);
              return obj4;
            }
          } else if (1 === tmp3) {
            c5 = 0;
            const _clearTimeout3 = clearTimeout;
            clearTimeout(timeout);
            const tmp21 = timeout;
            if (null != c2) {
              const removed = signal.removeEventListener("abort", c2);
            }
            throw tmp21;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const _clearTimeout2 = clearTimeout;
            clearTimeout(timeout);
            if (null != c2) {
              const removed1 = signal.removeEventListener("abort", c2);
            }
            c6 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            let tmp4 = closure_2;
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            if (null != c2) {
              const removed2 = signal.removeEventListener("abort", c2);
            }
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp31) {
          timeout = tmp31;
          if (0 === c5) {
            c6 = 3;
            throw tmp31;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/icymi/DiscoverRequestDeadline.tsx");

export const DISCOVER_REQUEST_DEADLINE_MS = 30000;
export function withDiscoverRequestDeadline() {
  return obj(...arguments);
}
