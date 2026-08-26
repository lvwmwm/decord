// Module ID: 4743
// Function ID: 4744
// Name: isFinite
// Dependencies: [572]

// Module 4743 (isFinite)
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
