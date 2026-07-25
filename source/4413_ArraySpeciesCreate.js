// Module ID: 4413
// Function ID: 38892
// Name: ArraySpeciesCreate
// Dependencies: [517, 4414, 518, 4415, 4417, 4423, 4377, 4425]

// Module 4413 (ArraySpeciesCreate)
let closure_2 = require("getEvalledConstructor")("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (require(4414) /* isInteger */(arg1)) {
    if (arg1 >= 0) {
      if (require(4415) /* getEvalledConstructor */(arg0)) {
        const tmp = tmp31(4423)(arg0, "constructor");
        let tmp2 = closure_2;
        if (closure_2) {
          tmp2 = require(4377) /* isObject */(tmp);
        }
        let tmp5 = tmp;
        if (tmp2) {
          const tmp9 = require(4423) /* Get */(tmp, closure_2);
          tmp2 = null === tmp9;
          tmp5 = tmp9;
        }
        if (undefined === tmp5) {
          return require(4417) /* ArrayCreate */(arg1);
        } else if (require(4425) /* getEvalledConstructor */(tmp5)) {
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
        return tmp31(4417)(arg1);
      }
    }
  }
  let tmp27 = require(518);
  tmp27 = new tmp27("Assertion failed: length must be an integer >= 0");
  throw tmp27;
};
