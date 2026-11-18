// Module ID: 20646
// Function ID: 20647
// Name: capitalize
// Dependencies: [20647, 625]

// Module 20646 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20647 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
