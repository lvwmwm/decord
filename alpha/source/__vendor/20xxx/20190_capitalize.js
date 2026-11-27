// Module ID: 20190
// Function ID: 20191
// Name: capitalize
// Dependencies: [20191, 625]

// Module 20190 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20191 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
