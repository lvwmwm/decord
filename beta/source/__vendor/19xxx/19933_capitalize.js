// Module ID: 19933
// Function ID: 19934
// Name: capitalize
// Dependencies: [19934, 625]

// Module 19933 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19934 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
