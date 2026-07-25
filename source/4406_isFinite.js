// Module ID: 4406
// Function ID: 38880
// Name: isFinite
// Dependencies: [549]

// Module 4406 (isFinite)

export default function isFinite(arg0) {
  let tmp2 = "number" === tmp;
  if (!tmp2) {
    tmp2 = "bigint" === tmp;
  }
  if (tmp2) {
    tmp2 = !require(549)(arg0);
  }
  if (tmp2) {
    tmp2 = arg0 !== Infinity;
  }
  if (tmp2) {
    tmp2 = arg0 !== -Infinity;
  }
  return tmp2;
};
