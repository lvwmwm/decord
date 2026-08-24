// Module ID: 13210
// Function ID: 13211
// Name: Range
// Dependencies: [13208]

// Module 13210 (Range)
import Range from "Range" /* 13208 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
