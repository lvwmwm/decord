// Module ID: 9888
// Function ID: 9889
// Name: MeasurementUtils
// Dependencies: [5, 12, 2]
// Exports: getMeasurements

// Module 9888 (MeasurementUtils)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size_mod from "module_2" /* 2 */;

let c10, c9;

function retryMeasurements() {
  return obj(...arguments);
}
let obj = function _retryMeasurements() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    function measure(arg0) {
      let ref = arg0;
      const promise = new Promise((arg0, fn) => {
        closure_1 = fn;
        ref = arg0;
        if (null == ref.current) {
          return fn();
        } else {
          const current = tmp.current;
          current.measureInWindow((x, y, width, height) => {
            let tmp5;
            if (0 !== width) {
              if (undefined === width) {
                return tmp5;
              }
              size = { x, y, width, height };
              closure_0(size);
            }
            tmp5 = closure_1();
          });
        }
      });
      return promise;
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    if (c10 === 2) {
      c10 = 3;
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
      let c8;
      try {
        let closure_5;
        let num10;
        c10 = 2;
        const tmp4 = c9;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp;
            closure_5 = tmp4;
            num10 = closure_4;
            if (closure_4 === undefined) {
              num10 = 0;
            }
            closure_5 = undefined;
            c9 = 1;
            c10 = 1;
            return { value: "Reflect", done: null };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (num10 > 3) {
            c10 = 3;
            const obj5 = { value: closure_2(), done: true };
            return obj5;
          } else {
            c8 = 1;
            c9 = 3;
            c10 = 1;
            const obj6 = { value: measure(closure_0), done: false };
            return obj6;
          }
        } else {
          if (2 === tmp4) {
            c8 = 0;
            const _setTimeout2 = setTimeout;
            const timerId = setTimeout(() => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_3, closure_1_4 + 1), 500);
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_5 = value;
            if (null != closure_3) {
              let tmp5 = closure_5;
              obj = closure_134_0(closure_134_1[1]);
              if (!obj.isEqual(closure_5, closure_3)) {
                const _setTimeout = setTimeout;
                const timerId1 = setTimeout(() => closure_3(closure_1_0, closure_1_1, closure_1_2, closure_1_5), 500);
                c8 = 0;
              }
            }
            c8 = 0;
            c10 = 3;
            const obj8 = { value: closure_1(closure_5), done: true };
            return obj8;
          }
          c10 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp29) {
        let closure_7 = tmp29;
        if (0 === c8) {
          c10 = 3;
          throw tmp29;
        } else {
          c9 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Tooltip/native/MeasurementUtils.native.tsx");

export const getMeasurements = function getMeasurements(surfaceRef, arg1) {
  let closure_0 = surfaceRef;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const promise = new Promise((arg0, arg1) => {
    size = null;
    const tmp = retryMeasurements;
    const tmp2 = surfaceRef;
    if (flag) {
      size = { x: 0, y: 0, width: 0, height: 0 };
    }
    tmp(tmp2, arg0, arg1, size);
  });
  return promise;
};
