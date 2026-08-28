// Module ID: 13473
// Function ID: 13474
// Name: Range
// Dependencies: [13466]

// Module 13473 (Range)
import Range from "Range" /* 13466 */;


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
