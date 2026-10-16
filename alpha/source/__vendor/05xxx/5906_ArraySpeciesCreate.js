// Module ID: 5906
// Function ID: 5907
// Name: ArraySpeciesCreate
// Dependencies: [1307, 5907, 1308, 5908, 5910, 5916, 5870, 5918]

// Module 5906 (ArraySpeciesCreate)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import isInteger from "isInteger" /* 5907 */;
import GetIntrinsic2 from "GetIntrinsic" /* 5908 */;
import ArrayCreate from "ArrayCreate" /* 5910 */;
import Get from "Get" /* 5916 */;
import IsConstructor from "IsConstructor" /* 5918 */;

let closure_2 = GetIntrinsic("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (isInteger(arg1)) {
    if (arg1 >= 0) {
      if (GetIntrinsic2(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2 && tmp(5870)(tmp3);
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
