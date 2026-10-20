// Module ID: 18926
// Function ID: 18927
// Name: capitalize
// Dependencies: [18927, 637]

// Module 18926 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18927 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
