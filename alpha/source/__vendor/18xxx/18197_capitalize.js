// Module ID: 18197
// Function ID: 18198
// Name: capitalize
// Dependencies: [18198, 637]

// Module 18197 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18198 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
