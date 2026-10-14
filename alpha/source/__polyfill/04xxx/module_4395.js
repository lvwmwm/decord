// Module ID: 4395
// Function ID: 4396
// Dependencies: []
// Exports: getRoundingMethod

// Module 4395
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
