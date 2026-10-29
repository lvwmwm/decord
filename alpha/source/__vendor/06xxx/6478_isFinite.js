// Module ID: 6478
// Function ID: 6479
// Name: isFinite
// Dependencies: [1336]

// Module 6478 (isFinite)
import _mod1336 from "module_1336" /* 1336 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1336(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
