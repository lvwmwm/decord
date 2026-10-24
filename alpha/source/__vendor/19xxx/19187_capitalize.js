// Module ID: 19187
// Function ID: 19188
// Name: capitalize
// Dependencies: [19188, 637]

// Module 19187 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19188 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
