// Module ID: 19191
// Function ID: 19192
// Name: capitalize
// Dependencies: [19192, 637]

// Module 19191 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19192 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
