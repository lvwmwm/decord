// Module ID: 18825
// Function ID: 18826
// Name: capitalize
// Dependencies: [18826, 637]

// Module 18825 (capitalize)
import toString from "toString" /* 637 */;
import createCaseFirst from "createCaseFirst" /* 18826 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
