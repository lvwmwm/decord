// Module ID: 13422
// Function ID: 13423
// Name: Range
// Dependencies: [13420]

// Module 13422 (Range)
import Range from "Range" /* 13420 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
