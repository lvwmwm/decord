// Module ID: 13806
// Function ID: 13807
// Name: Range
// Dependencies: [13804]

// Module 13806 (Range)
import Range from "Range" /* 13804 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
