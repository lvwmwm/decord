// Module ID: 5042
// Function ID: 5043
// Name: ArraySpeciesCreate
// Dependencies: [1285, 5043, 1286, 5044, 5046, 5052, 5006, 5054]

// Module 5042 (ArraySpeciesCreate)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;
import _mod5043 from "module_5043" /* 5043 */;

let closure_2 = _mod1285("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5043(arg1)) {
    if (arg1 >= 0) {
      if (tmp(5044)(arg0)) {
        const tmp3 = tmp(5052)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(5006)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(5052)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(5046)(arg1);
        } else if (tmp(5054)(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new tmp(1286)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(5046)(arg1);
      }
    }
  }
  throw new _mod1286("Assertion failed: length must be an integer >= 0");
};
