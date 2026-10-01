// Module ID: 5128
// Function ID: 5129
// Name: isFinite
// Dependencies: [1313]

// Module 5128 (isFinite)
import _mod1313 from "module_1313" /* 1313 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1313(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
