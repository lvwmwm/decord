// Module ID: 5676
// Function ID: 5677
// Name: isFinite
// Dependencies: [1336]

// Module 5676 (isFinite)
import _mod1336 from "module_1336" /* 1336 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1336(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
