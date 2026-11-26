// Module ID: 20648
// Function ID: 20649
// Name: capitalize
// Dependencies: [20649, 625]

// Module 20648 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20649 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
