// Module ID: 20178
// Function ID: 20179
// Name: capitalize
// Dependencies: [20179, 625]

// Module 20178 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20179 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
