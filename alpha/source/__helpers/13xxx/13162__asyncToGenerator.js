// Module ID: 13162
// Function ID: 13163
// Name: _asyncToGenerator
// Dependencies: [5, 13163]
// Exports: _asyncNullishCoalesce

// Module 13162 (_asyncToGenerator)
import _nullishCoalesce from "_nullishCoalesce" /* 13163 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c2;

let obj = function _asyncNullishCoalesce2() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 3;
          const obj4 = { value: obj._nullishCoalesce(closure_0, closure_1), done: true };
          obj = _nullishCoalesce;
          return obj4;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};

export function _asyncNullishCoalesce(arg0, arg1) {
  return obj(...arguments);
}
