// Module ID: 4614
// Function ID: 4615
// Dependencies: []
// Exports: getRoundingMethod

// Module 4614
const trunc_str = "trunc";

export function getRoundingMethod(roundingMethod) {
  let tmp3;
  if (roundingMethod) {
    tmp3 = tmp[roundingMethod];
  } else {
    tmp3 = tmp[trunc_str];
  }
  return tmp3;
}
