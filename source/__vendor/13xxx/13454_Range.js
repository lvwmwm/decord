// Module ID: 13454
// Function ID: 13455
// Name: Range
// Dependencies: [13447]

// Module 13454 (Range)
import Range from "Range" /* 13447 */;


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
