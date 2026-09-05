// Module ID: 14052
// Function ID: 14053
// Name: Range
// Dependencies: [14045]

// Module 14052 (Range)
import Range from "Range" /* 14045 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new Range(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
