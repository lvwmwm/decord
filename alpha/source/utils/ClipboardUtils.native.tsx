// Module ID: 7345
// Function ID: 7346
// Name: ClipboardUtils
// Dependencies: [5, 7346, 2]
// Exports: copy, getString

// Module 7345 (ClipboardUtils)
import _modDef7346 from "module_7346" /* 7346 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c3;

let obj = function _copy() {
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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj2 = _modDef7346;
            obj2.setString(closure_0);
            const tmp5 = closure_1;
            if (closure_1 != null) {
              tmp5();
            }
            c3 = 1;
            c2 = 1;
            const obj5 = { value: Promise.resolve(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp12) {
        c2 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("utils/ClipboardUtils.native.tsx");

export const SUPPORTS_COPY = true;
export function copy() {
  return obj(...arguments);
}
export function getString() {
  obj = _modDef7346;
  return obj.getString();
}
