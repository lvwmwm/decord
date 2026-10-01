// Module ID: 8979
// Function ID: 8980
// Name: LazyAPIPromise
// Dependencies: [5, 32, 19, 4735, 2]
// Exports: default

// Module 8979 (LazyAPIPromise)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c5;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("utils/LazyAPIPromise.tsx");

export default function useLazyAPIPromise(arg0, arg1) {
  let closure_2;
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = function _execFn() {
    obj = _asyncToGenerator(async function(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let aPIError;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp;
              value = undefined;
              aPIError = undefined;
              closure_2_2(true);
              closure_2_3(null);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: closure_2_0(), done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            const self = this;
            const self2 = this;
            aPIError = new value(closure_1[3]).APIError(closure_2);
            if (closure_129_1 != null) {
              tmp20(aPIError);
            }
            closure_129_3(aPIError);
            closure_129_2(false);
            c5 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_2(false);
            closure_129_3(null);
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp36) {
          closure_2 = tmp36;
          if (0 === c3) {
            c5 = 3;
            throw tmp36;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_2] = obj.useState(false);
  const tmp3 = _slicedToArray(obj.useState(null), 2);
  _slicedToArray = tmp3[1];
  const items = [
    function execFn() {
      return obj(...arguments);
    },
    { loading: first, error: tmp3[0] }
  ];
  return items;
};
