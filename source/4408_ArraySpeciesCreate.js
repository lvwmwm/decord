// Module ID: 4408
// Function ID: 38832
// Name: ArraySpeciesCreate
// Dependencies: []

// Module 4408 (ArraySpeciesCreate)
let closure_2 = require(dependencyMap[0])("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (require(dependencyMap[1])(arg1)) {
    if (arg1 >= 0) {
      if (require(dependencyMap[3])(arg0)) {
        const tmp = tmp31(tmp32[5])(arg0, "constructor");
        let tmp2 = closure_2;
        if (closure_2) {
          tmp2 = require(dependencyMap[6])(tmp);
        }
        let tmp5 = tmp;
        if (tmp2) {
          const tmp9 = require(dependencyMap[5])(tmp, closure_2);
          tmp2 = null === tmp9;
          tmp5 = tmp9;
        }
        if (undefined === tmp5) {
          return require(dependencyMap[4])(arg1);
        } else if (require(dependencyMap[7])(tmp5)) {
          const prototype2 = tmp5.prototype;
          tmp5 = new tmp5(arg1);
          return tmp5;
        } else {
          let tmp15 = require(dependencyMap[2]);
          const prototype = tmp15.prototype;
          tmp15 = new tmp15("C must be a constructor");
          throw tmp15;
        }
      } else {
        return tmp31(tmp32[4])(arg1);
      }
    }
  }
  let tmp27 = require(dependencyMap[2]);
  tmp27 = new tmp27("Assertion failed: length must be an integer >= 0");
  throw tmp27;
};
