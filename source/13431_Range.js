// Module ID: 13431
// Function ID: 13432
// Name: Range
// Dependencies: [13420]

// Module 13431 (Range)
import Range from "Range" /* 13420 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
