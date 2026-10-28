// Module ID: 6454
// Function ID: 6455
// Name: isFinite
// Dependencies: [1336]

// Module 6454 (isFinite)
import _mod1336 from "module_1336" /* 1336 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1336(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
