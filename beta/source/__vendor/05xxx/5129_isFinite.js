// Module ID: 5129
// Function ID: 5130
// Name: isFinite
// Dependencies: [1325]

// Module 5129 (isFinite)
import _mod1325 from "module_1325" /* 1325 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1325(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
