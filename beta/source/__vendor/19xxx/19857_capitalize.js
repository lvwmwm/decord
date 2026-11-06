// Module ID: 19857
// Function ID: 19858
// Name: capitalize
// Dependencies: [19858, 625]

// Module 19857 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19858 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
