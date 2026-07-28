// Module ID: 12915
// Function ID: 100239
// Name: toComparators
// Dependencies: [12912]

// Module 12915 (toComparators)

export default function toComparators(arg0, arg1) {
  let tmp = require(12912) /* Range */;
  tmp = new tmp(arg0, arg1);
  return tmp.set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
