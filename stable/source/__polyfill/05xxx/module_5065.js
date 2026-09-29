// Module ID: 5065
// Function ID: 5066
// Dependencies: [1313]

// Module 5065
import _mod1313 from "module_1313" /* 1313 */;


export default function isFinite(num) {
  let tmp = typeof num === "number";
  if (typeof num !== "number") {
    tmp = typeof num === "bigint";
  }
  if (tmp) {
    tmp = !_mod1313(num);
  }
  if (tmp) {
    tmp = num !== Infinity;
  }
  if (tmp) {
    tmp = num !== -Infinity;
  }
  return tmp;
};
