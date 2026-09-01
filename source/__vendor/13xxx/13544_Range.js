// Module ID: 13544
// Function ID: 13545
// Name: Range
// Dependencies: [13533]

// Module 13544 (Range)
import Range from "Range" /* 13533 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
