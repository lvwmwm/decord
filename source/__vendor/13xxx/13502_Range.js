// Module ID: 13502
// Function ID: 13503
// Name: Range
// Dependencies: [13500]

// Module 13502 (Range)
import Range from "Range" /* 13500 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
