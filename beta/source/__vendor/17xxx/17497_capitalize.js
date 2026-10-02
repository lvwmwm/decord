// Module ID: 17497
// Function ID: 17498
// Name: capitalize
// Dependencies: [17498, 638]

// Module 17497 (capitalize)
import toString from "toString" /* 638 */;
import createCaseFirst from "createCaseFirst" /* 17498 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
