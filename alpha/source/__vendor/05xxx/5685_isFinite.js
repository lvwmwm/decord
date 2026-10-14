// Module ID: 5685
// Function ID: 5686
// Name: isFinite
// Dependencies: [1337]

// Module 5685 (isFinite)
import _mod1337 from "module_1337" /* 1337 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1337(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
