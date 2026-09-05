// Module ID: 14047
// Function ID: 14048
// Name: Range
// Dependencies: [14045]

// Module 14047 (Range)
import Range from "Range" /* 14045 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
