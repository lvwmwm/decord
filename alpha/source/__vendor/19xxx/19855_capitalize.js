// Module ID: 19855
// Function ID: 19856
// Name: capitalize
// Dependencies: [19856, 625]

// Module 19855 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19856 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
