// Module ID: 6629
// Function ID: 6630
// Name: isFinite
// Dependencies: [1324]

// Module 6629 (isFinite)
import _mod1324 from "module_1324" /* 1324 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1324(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
