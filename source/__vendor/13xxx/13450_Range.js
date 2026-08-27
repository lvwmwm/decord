// Module ID: 13450
// Function ID: 13451
// Name: Range
// Dependencies: [13447]

// Module 13450 (Range)
import Range from "Range" /* 13447 */;


export default (arg0, arg1) => {
  const tmp = new Range(arg0, arg1);
  return new Range(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
