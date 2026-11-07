// Module ID: 20254
// Function ID: 20255
// Name: capitalize
// Dependencies: [20255, 625]

// Module 20254 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20255 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
