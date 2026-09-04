// Module ID: 4806
// Function ID: 4807
// Name: ArraySpeciesCreate
// Dependencies: [537, 4807, 538, 4808, 4810, 4816, 4770, 4818]

// Module 4806 (ArraySpeciesCreate)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import _mod538 from "module_538" /* 538 */;
import isInteger from "isInteger" /* 4807 */;

let closure_2 = getEvalledConstructor("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (isInteger(arg1)) {
    if (arg1 >= 0) {
      if (tmp(4808)(arg0)) {
        const tmp3 = tmp(4816)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(4770)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(4816)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(4810)(arg1);
        } else if (tmp(4818)(tmp6)) {
          tmp6 = new tmp6(arg1);
          return tmp6;
        } else {
          const tmp11 = new tmp(538)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(4810)(arg1);
      }
    }
  }
  throw new _mod538("Assertion failed: length must be an integer >= 0");
};
