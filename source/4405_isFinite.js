// Module ID: 4405
// Function ID: 38868
// Name: isFinite
// Dependencies: [549]

// Module 4405 (isFinite)

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
