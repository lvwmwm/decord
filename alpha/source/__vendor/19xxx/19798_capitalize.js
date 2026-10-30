// Module ID: 19798
// Function ID: 19799
// Name: capitalize
// Dependencies: [19799, 625]

// Module 19798 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 19799 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
