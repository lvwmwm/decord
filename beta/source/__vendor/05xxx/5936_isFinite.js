// Module ID: 5936
// Function ID: 5937
// Name: isFinite
// Dependencies: [1339]

// Module 5936 (isFinite)
import _mod1339 from "module_1339" /* 1339 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1339(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
