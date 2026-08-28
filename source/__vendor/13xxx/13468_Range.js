// Module ID: 13468
// Function ID: 13469
// Name: Range
// Dependencies: [13466]

// Module 13468 (Range)
import Range from "Range" /* 13466 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
