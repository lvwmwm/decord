// Module ID: 3401
// Function ID: 26594
// Name: getRoundingMethod
// Dependencies: []

// Module 3401 (getRoundingMethod)
arg5.getRoundingMethod = function getRoundingMethod(roundingMethod) {
  if (roundingMethod) {
    let tmp3 = tmp[roundingMethod];
  } else {
    tmp3 = tmp[closure_1];
  }
  return tmp3;
};
const obj = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc(endImportTime) {
    if (endImportTime < 0) {
      const _Math2 = Math;
      let rounded = Math.ceil(endImportTime);
    } else {
      const _Math = Math;
      rounded = Math.floor(endImportTime);
    }
    return rounded;
  }
};
let closure_1 = "trunc";
