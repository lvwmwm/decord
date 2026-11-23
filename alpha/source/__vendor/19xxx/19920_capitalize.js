// Module ID: 19920
// Function ID: 19921
// Name: capitalize
// Dependencies: [19921, 625]

// Module 19920 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19921 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
