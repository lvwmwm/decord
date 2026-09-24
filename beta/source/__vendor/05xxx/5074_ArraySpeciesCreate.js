// Module ID: 5074
// Function ID: 5075
// Name: ArraySpeciesCreate
// Dependencies: [1285, 5075, 1286, 5076, 5078, 5084, 5038, 5086]

// Module 5074 (ArraySpeciesCreate)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;
import _mod5075 from "module_5075" /* 5075 */;

let closure_2 = _mod1285("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5075(arg1)) {
    if (arg1 >= 0) {
      if (tmp(5076)(arg0)) {
        const tmp3 = tmp(5084)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(5038)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(5084)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(5078)(arg1);
        } else if (tmp(5086)(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new tmp(1286)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(5078)(arg1);
      }
    }
  }
  throw new _mod1286("Assertion failed: length must be an integer >= 0");
};
