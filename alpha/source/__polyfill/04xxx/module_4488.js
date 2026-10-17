// Module ID: 4488
// Function ID: 4489
// Dependencies: []
// Exports: getRoundingMethod

// Module 4488
const trunc_str = "trunc";

export const getRoundingMethod = function getRoundingMethod(roundingMethod) {
  let tmp3;
  if (roundingMethod) {
    tmp3 = tmp[roundingMethod];
  } else {
    tmp3 = tmp[trunc_str];
  }
  return tmp3;
};
