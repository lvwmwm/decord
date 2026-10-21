// Module ID: 19026
// Function ID: 19027
// Name: capitalize
// Dependencies: [19027, 637]

// Module 19026 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 19027 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
