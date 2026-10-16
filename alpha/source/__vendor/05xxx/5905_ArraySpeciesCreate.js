// Module ID: 5905
// Function ID: 5906
// Name: ArraySpeciesCreate
// Dependencies: [1307, 5906, 1308, 5907, 5909, 5915, 5869, 5917]

// Module 5905 (ArraySpeciesCreate)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import isInteger from "isInteger" /* 5906 */;
import GetIntrinsic2 from "GetIntrinsic" /* 5907 */;
import ArrayCreate from "ArrayCreate" /* 5909 */;
import Get from "Get" /* 5915 */;
import IsConstructor from "IsConstructor" /* 5917 */;

let closure_2 = GetIntrinsic("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (isInteger(arg1)) {
    if (arg1 >= 0) {
      if (GetIntrinsic2(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2 && tmp(5869)(tmp3);
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
          const tmp9 = new _mod1308("C must be a constructor");
          throw tmp9;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  const tmp14 = new _mod1308("Assertion failed: length must be an integer >= 0");
  throw tmp14;
};
