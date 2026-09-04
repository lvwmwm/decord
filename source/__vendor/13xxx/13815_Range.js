// Module ID: 13815
// Function ID: 13816
// Name: Range
// Dependencies: [13804]

// Module 13815 (Range)
import Range from "Range" /* 13804 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
