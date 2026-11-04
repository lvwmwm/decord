// Module ID: 20128
// Function ID: 20129
// Name: capitalize
// Dependencies: [20129, 625]

// Module 20128 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20129 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
