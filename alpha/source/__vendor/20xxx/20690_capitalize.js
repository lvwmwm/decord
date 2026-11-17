// Module ID: 20690
// Function ID: 20691
// Name: capitalize
// Dependencies: [20691, 625]

// Module 20690 (capitalize)
import toString from "toString" /* 625 */;
import createCaseFirst from "createCaseFirst" /* 20691 */;


export default function capitalize(arg0) {
  const tmp = createCaseFirst;
  const str = toString(arg0);
  return tmp(str.toLowerCase());
};
