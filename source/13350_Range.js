// Module ID: 13350
// Function ID: 13351
// Name: Range
// Dependencies: [13347]

// Module 13350 (Range)
import Range from "Range" /* 13347 */;


export default (arg0, arg1) => {
  const tmp = new Range(arg0, arg1);
  return new Range(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
