// Module ID: 4412
// Function ID: 38881
// Name: ArraySpeciesCreate
// Dependencies: [517, 4413, 518, 4414, 4416, 4422, 4376, 4424]

// Module 4412 (ArraySpeciesCreate)
let closure_2 = require("getEvalledConstructor")("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (require(4413) /* isInteger */(arg1)) {
    if (arg1 >= 0) {
      if (require(4414) /* getEvalledConstructor */(arg0)) {
        const tmp = tmp31(4422)(arg0, "constructor");
        let tmp2 = closure_2;
        if (closure_2) {
          tmp2 = require(4376) /* isObject */(tmp);
        }
        let tmp5 = tmp;
        if (tmp2) {
          const tmp9 = require(4422) /* Get */(tmp, closure_2);
          tmp2 = null === tmp9;
          tmp5 = tmp9;
        }
        if (undefined === tmp5) {
          return require(4416) /* ArrayCreate */(arg1);
        } else if (require(4424) /* getEvalledConstructor */(tmp5)) {
          const prototype2 = tmp5.prototype;
          tmp5 = new tmp5(arg1);
          return tmp5;
        } else {
          let tmp15 = require(518);
          const prototype = tmp15.prototype;
          tmp15 = new tmp15("C must be a constructor");
          throw tmp15;
        }
      } else {
        return tmp31(4416)(arg1);
      }
    }
  }
  let tmp27 = require(518);
  tmp27 = new tmp27("Assertion failed: length must be an integer >= 0");
  throw tmp27;
};
