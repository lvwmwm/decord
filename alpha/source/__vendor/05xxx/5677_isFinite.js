// Module ID: 5677
// Function ID: 5678
// Name: isFinite
// Dependencies: [1337]

// Module 5677 (isFinite)
import _mod1337 from "module_1337" /* 1337 */;


export default function isFinite(num) {
  const tmp = (typeof num === "number" || typeof num === "bigint") && !_mod1337(num) && num !== Infinity && num !== -Infinity;
  return tmp;
};
