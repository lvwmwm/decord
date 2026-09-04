// Module ID: 13807
// Function ID: 13808
// Name: Range
// Dependencies: [13804]

// Module 13807 (Range)
import Range from "Range" /* 13804 */;


export default (arg0, arg1) => {
  const tmp = new Range(arg0, arg1);
  return new Range(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
