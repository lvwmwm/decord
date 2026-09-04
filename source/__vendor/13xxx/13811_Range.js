// Module ID: 13811
// Function ID: 13812
// Name: Range
// Dependencies: [13804]

// Module 13811 (Range)
import Range from "Range" /* 13804 */;


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
