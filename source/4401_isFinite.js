// Module ID: 4401
// Function ID: 38820
// Name: isFinite
// Dependencies: [0]

// Module 4401 (isFinite)

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
