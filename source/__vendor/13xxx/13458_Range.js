// Module ID: 13458
// Function ID: 13459
// Name: Range
// Dependencies: [13447]

// Module 13458 (Range)
import Range from "Range" /* 13447 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
