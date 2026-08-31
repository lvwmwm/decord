// Module ID: 13511
// Function ID: 13512
// Name: Range
// Dependencies: [13500]

// Module 13511 (Range)
import Range from "Range" /* 13500 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
