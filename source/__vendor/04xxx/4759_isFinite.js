// Module ID: 4759
// Function ID: 4760
// Name: isFinite
// Dependencies: [572]

// Module 4759 (isFinite)
import isNaN from "isNaN" /* 572 */;


export default function isFinite(num) {
  let tmp = typeof num === "number";
  if (typeof num !== "number") {
    tmp = typeof num === "bigint";
  }
  if (tmp) {
    tmp = !isNaN(num);
  }
  if (tmp) {
    tmp = num !== Infinity;
  }
  if (tmp) {
    tmp = num !== -Infinity;
  }
  return tmp;
};
