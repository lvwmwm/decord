// Module ID: 4420
// Function ID: 4421
// Name: isFinite
// Dependencies: [572]

// Module 4420 (isFinite)

export default function isFinite(num) {
  let tmp = typeof num === "number";
  if (typeof num !== "number") {
    tmp = typeof num === "bigint";
  }
  if (tmp) {
    tmp = !require(572) /* isNaN */(num);
  }
  if (tmp) {
    tmp = num !== Infinity;
  }
  if (tmp) {
    tmp = num !== -Infinity;
  }
  return tmp;
};
