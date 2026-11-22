// Module ID: 19918
// Function ID: 19919
// Name: capitalize
// Dependencies: [19919, 625]

// Module 19918 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19919 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
