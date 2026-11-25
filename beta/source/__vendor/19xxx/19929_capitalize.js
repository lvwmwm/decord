// Module ID: 19929
// Function ID: 19930
// Name: capitalize
// Dependencies: [19930, 625]

// Module 19929 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19930 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
