// Module ID: 13219
// Function ID: 13220
// Name: Range
// Dependencies: [13208]

// Module 13219 (Range)
import Range from "Range" /* 13208 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
