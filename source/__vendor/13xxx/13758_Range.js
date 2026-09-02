// Module ID: 13758
// Function ID: 13759
// Name: Range
// Dependencies: [13756]

// Module 13758 (Range)
import Range from "Range" /* 13756 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
