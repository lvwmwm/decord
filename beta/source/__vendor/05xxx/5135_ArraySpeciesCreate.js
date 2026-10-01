// Module ID: 5135
// Function ID: 5136
// Name: ArraySpeciesCreate
// Dependencies: [1281, 5136, 1282, 5137, 5139, 5145, 5099, 5147]

// Module 5135 (ArraySpeciesCreate)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import isInteger from "isInteger" /* 5136 */;
import GetIntrinsic2 from "GetIntrinsic" /* 5137 */;
import ArrayCreate from "ArrayCreate" /* 5139 */;
import Get from "Get" /* 5145 */;
import IsConstructor from "IsConstructor" /* 5147 */;

let closure_2 = GetIntrinsic("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (isInteger(arg1)) {
    if (arg1 >= 0) {
      if (GetIntrinsic2(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2 && tmp(5099)(tmp3);
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
          const tmp9 = new _mod1282("C must be a constructor");
          throw tmp9;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  const tmp14 = new _mod1282("Assertion failed: length must be an integer >= 0");
  throw tmp14;
};
