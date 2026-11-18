// Module ID: 19963
// Function ID: 19964
// Name: capitalize
// Dependencies: [19964, 625]

// Module 19963 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19964 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
