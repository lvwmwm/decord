// Module ID: 19116
// Function ID: 19117
// Name: capitalize
// Dependencies: [19117, 637]

// Module 19116 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19117 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
