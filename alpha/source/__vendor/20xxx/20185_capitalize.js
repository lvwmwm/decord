// Module ID: 20185
// Function ID: 20186
// Name: capitalize
// Dependencies: [20186, 625]

// Module 20185 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20186 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
