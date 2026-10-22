// Module ID: 6404
// Function ID: 6405
// Name: isFinite
// Dependencies: [1339]

// Module 6404 (isFinite)
import _mod1339 from "module_1339" /* 1339 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1339(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
