// Module ID: 19974
// Function ID: 19975
// Name: capitalize
// Dependencies: [19975, 625]

// Module 19974 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19975 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
