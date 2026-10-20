// Module ID: 18495
// Function ID: 18496
// Name: capitalize
// Dependencies: [18496, 637]

// Module 18495 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18496 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
