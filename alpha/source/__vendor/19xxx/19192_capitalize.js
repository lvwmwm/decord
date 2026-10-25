// Module ID: 19192
// Function ID: 19193
// Name: capitalize
// Dependencies: [19193, 637]

// Module 19192 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19193 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
