// Module ID: 19093
// Function ID: 19094
// Name: capitalize
// Dependencies: [19094, 637]

// Module 19093 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19094 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
