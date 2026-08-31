// Module ID: 13507
// Function ID: 13508
// Name: Range
// Dependencies: [13500]

// Module 13507 (Range)
import Range from "Range" /* 13500 */;


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
