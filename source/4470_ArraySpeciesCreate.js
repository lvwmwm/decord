// Module ID: 4470
// Function ID: 4471
// Name: ArraySpeciesCreate
// Dependencies: [540, 4471, 541, 4472, 4474, 4480, 4434, 4482]

// Module 4470 (ArraySpeciesCreate)
let closure_2 = require("getEvalledConstructor")("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (require(4471) /* isInteger */(arg1)) {
    if (arg1 >= 0) {
      if (tmp(4472)(arg0)) {
        const tmp3 = tmp(4480)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(4434)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(4480)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(4474)(arg1);
        } else if (tmp(4482)(tmp6)) {
          tmp6 = new tmp6(arg1);
          return tmp6;
        } else {
          const tmp11 = new tmp(541)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(4474)(arg1);
      }
    }
  }
  throw new require(541)("Assertion failed: length must be an integer >= 0");
};
