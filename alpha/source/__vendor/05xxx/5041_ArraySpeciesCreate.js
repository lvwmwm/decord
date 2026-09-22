// Module ID: 5041
// Function ID: 5042
// Name: ArraySpeciesCreate
// Dependencies: [1281, 5042, 1282, 5043, 5045, 5051, 5005, 5053]

// Module 5041 (ArraySpeciesCreate)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod5042 from "module_5042" /* 5042 */;

let closure_2 = _mod1281("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5042(arg1)) {
    if (arg1 >= 0) {
      if (tmp(5043)(arg0)) {
        const tmp3 = tmp(5051)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(5005)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(5051)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(5045)(arg1);
        } else if (tmp(5053)(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new tmp(1282)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(5045)(arg1);
      }
    }
  }
  throw new _mod1282("Assertion failed: length must be an integer >= 0");
};
