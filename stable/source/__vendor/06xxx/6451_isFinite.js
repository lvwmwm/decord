// Module ID: 6451
// Function ID: 6452
// Name: isFinite
// Dependencies: [1339]

// Module 6451 (isFinite)
import _mod1339 from "module_1339" /* 1339 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1339(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
