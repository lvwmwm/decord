// Module ID: 6492
// Function ID: 6493
// Name: ArraySpeciesCreate
// Dependencies: [1293, 6493, 1294, 6494, 6496, 6502, 6456, 6504]

// Module 6492 (ArraySpeciesCreate)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import isInteger from "isInteger" /* 6493 */;
import GetIntrinsic2 from "GetIntrinsic" /* 6494 */;
import ArrayCreate from "ArrayCreate" /* 6496 */;
import Get from "Get" /* 6502 */;
import IsConstructor from "IsConstructor" /* 6504 */;

let closure_2 = GetIntrinsic("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (isInteger(arg1)) {
    if (arg1 >= 0) {
      if (GetIntrinsic2(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2 && tmp(6456)(tmp3);
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (IsConstructor(tmp6)) {
          const self3 = this;
          const self4 = this;
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const self = this;
          const self2 = this;
          const tmp9 = new _mod1294("C must be a constructor");
          throw tmp9;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  const tmp14 = new _mod1294("Assertion failed: length must be an integer >= 0");
  throw tmp14;
};
