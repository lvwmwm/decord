// Module ID: 19921
// Function ID: 19922
// Name: capitalize
// Dependencies: [19922, 625]

// Module 19921 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19922 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
