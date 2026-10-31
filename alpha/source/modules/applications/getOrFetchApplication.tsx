// Module ID: 11694
// Function ID: 11695
// Name: getOrFetchApplication
// Dependencies: [5, 2038, 6881, 2]
// Exports: default

// Module 11694 (getOrFetchApplication)
import ApplicationActionCreators from "ApplicationActionCreators" /* 6881 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _getOrFetchApplication() {
  let hydrated;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            const tmp16 = closure_0;
            if (!hydrated.isHydrated(closure_0)) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.fetchApplication(tmp16), done: false };
              obj2 = ApplicationActionCreators;
              return obj5;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
        }
        c5 = 3;
        const obj6 = { value: closure_130_3.getApplication(closure_0), done: true };
        return obj6;
      } catch (tmp11) {
        if (0 === c3) {
          c5 = 3;
          throw tmp11;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/applications/getOrFetchApplication.tsx");

export default function getOrFetchApplication() {
  return obj(...arguments);
};
