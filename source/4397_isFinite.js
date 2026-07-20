// Module ID: 4397
// Function ID: 38772
// Name: isFinite
// Dependencies: []

// Module 4397 (isFinite)

export default function isFinite(arg0) {
  let tmp2 = "number" === tmp;
  if (!tmp2) {
    tmp2 = "bigint" === tmp;
  }
  if (tmp2) {
    tmp2 = !require(dependencyMap[0])(arg0);
  }
  if (tmp2) {
    tmp2 = arg0 !== Infinity;
  }
  if (tmp2) {
    tmp2 = arg0 !== -Infinity;
  }
  return tmp2;
};
