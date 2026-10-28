// Module ID: 19502
// Function ID: 19503
// Name: capitalize
// Dependencies: [19503, 637]

// Module 19502 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19503 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
