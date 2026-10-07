// Module ID: 4548
// Function ID: 4549
// Name: importWithRetry
// Dependencies: [5, 2]
// Exports: awaitOnline, importWithRetry, setAwaitOnline

// Module 4548 (importWithRetry)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _importWithRetry() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let obj11;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let closure_3;
      try {
        let webpackId;
        let name;
        let closure_4;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            webpackId = undefined;
            name = undefined;
            ({ createPromise: c0, webpackId: c1, name: c2 } = closure_0);
            closure_3 = undefined;
            closure_4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = 500;
              closure_4 = 0;
            }
          } else if (2 === c5) {
            c4 = 0;
            let closure_5 = closure_3;
            if (webpackId in closure_130_0.cache) {
              throw closure_5;
            } else if (closure_4 >= 50) {
              throw closure_5;
            } else {
              c5 = 4;
              c6 = 1;
              const obj5 = { value: closure_130_2(closure_3), done: false };
              return obj5;
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c4 = 0;
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (4 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              c5 = 5;
              c6 = 1;
              const obj9 = { value: closure_130_3(), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const _Math = Math;
            closure_3 = Math.min(5000, 2 * closure_3);
            closure_4 = closure_4 + 1;
          }
          c4 = 1;
          const _performance = performance;
          const obj10 = { detail: obj11 };
          obj11 = { webpackId, name };
          performance.mark("importWithRetry:start", obj10);
          c5 = 3;
          c6 = 1;
          const obj12 = { value: c0(), done: false };
          return obj12;
        }
      } catch (tmp30) {
        closure_3 = tmp30;
        if (0 === c4) {
          c6 = 3;
          throw tmp30;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function pausedPromise(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
  return promise;
}
function awaitOnline() {
  return Promise.resolve();
}
const result = size.fileFinishedImporting("../discord_common/js/packages/code-splitting/importWithRetry.tsx");

export { awaitOnline };
export function setAwaitOnline(arg0) {
  awaitOnline = arg0;
}
export { pausedPromise };
export const importWithRetry = function importWithRetry() {
  return obj(...arguments);
};
