// Module ID: 19160
// Function ID: 19161
// Name: capitalize
// Dependencies: [19161, 637]

// Module 19160 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19161 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
