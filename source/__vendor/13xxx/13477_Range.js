// Module ID: 13477
// Function ID: 13478
// Name: Range
// Dependencies: [13466]

// Module 13477 (Range)
import Range from "Range" /* 13466 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
