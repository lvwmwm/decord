// Module ID: 4791
// Function ID: 4792
// Name: isFinite
// Dependencies: [569]

// Module 4791 (isFinite)
import isNaN from "isNaN" /* 569 */;


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
