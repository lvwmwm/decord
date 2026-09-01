// Module ID: 13536
// Function ID: 13537
// Name: Range
// Dependencies: [13533]

// Module 13536 (Range)
import Range from "Range" /* 13533 */;


export default (arg0, arg1) => {
  const tmp = new Range(arg0, arg1);
  return new Range(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
