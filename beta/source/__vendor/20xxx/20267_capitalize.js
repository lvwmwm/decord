// Module ID: 20267
// Function ID: 20268
// Name: capitalize
// Dependencies: [20268, 625]

// Module 20267 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20268 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
