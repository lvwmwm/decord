// Module ID: 13211
// Function ID: 13212
// Name: Range
// Dependencies: [13208]

// Module 13211 (Range)
import Range from "Range" /* 13208 */;


export default (arg0, arg1) => {
  const tmp = new Range(arg0, arg1);
  return new Range(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
