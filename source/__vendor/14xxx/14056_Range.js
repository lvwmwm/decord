// Module ID: 14056
// Function ID: 14057
// Name: Range
// Dependencies: [14045]

// Module 14056 (Range)
import Range from "Range" /* 14045 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
