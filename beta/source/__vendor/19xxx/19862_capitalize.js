// Module ID: 19862
// Function ID: 19863
// Name: capitalize
// Dependencies: [19863, 625]

// Module 19862 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19863 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
