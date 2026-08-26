// Module ID: 13427
// Function ID: 13428
// Name: Range
// Dependencies: [13420]

// Module 13427 (Range)
import Range from "Range" /* 13420 */;


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
