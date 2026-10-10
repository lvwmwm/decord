// Module ID: 18433
// Function ID: 18434
// Name: capitalize
// Dependencies: [18434, 637]

// Module 18433 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18434 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
