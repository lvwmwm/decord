// Module ID: 4582
// Function ID: 4583
// Name: ArraySpeciesCreate
// Dependencies: [540, 4583, 541, 4584, 4586, 4592, 4546, 4594]

// Module 4582 (ArraySpeciesCreate)
let closure_2 = require("getEvalledConstructor")("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (require(4583) /* isInteger */(arg1)) {
    if (arg1 >= 0) {
      if (tmp(4584)(arg0)) {
        const tmp3 = tmp(4592)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(4546)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(4592)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(4586)(arg1);
        } else if (tmp(4594)(tmp6)) {
          tmp6 = new tmp6(arg1);
          return tmp6;
        } else {
          const tmp11 = new tmp(541)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(4586)(arg1);
      }
    }
  }
  throw new require(541)("Assertion failed: length must be an integer >= 0");
};
