// Module ID: 19794
// Function ID: 19795
// Name: capitalize
// Dependencies: [19795, 625]

// Module 19794 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19795 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
