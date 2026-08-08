// Module ID: 4577
// Function ID: 4578
// Name: isFinite
// Dependencies: [572]

// Module 4577 (isFinite)

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
