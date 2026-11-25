// Module ID: 20068
// Function ID: 20069
// Name: capitalize
// Dependencies: [20069, 625]

// Module 20068 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20069 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
