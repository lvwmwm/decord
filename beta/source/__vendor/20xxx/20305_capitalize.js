// Module ID: 20305
// Function ID: 20306
// Name: capitalize
// Dependencies: [20306, 625]

// Module 20305 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20306 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
