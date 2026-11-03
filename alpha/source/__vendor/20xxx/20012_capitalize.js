// Module ID: 20012
// Function ID: 20013
// Name: capitalize
// Dependencies: [20013, 625]

// Module 20012 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20013 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
