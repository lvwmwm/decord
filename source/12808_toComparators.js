// Module ID: 12808
// Function ID: 99613
// Name: toComparators
// Dependencies: [12805]

// Module 12808 (toComparators)

export default function toComparators(arg0, arg1) {
  let tmp = require(12805) /* Range */;
  tmp = new tmp(arg0, arg1);
  return tmp.set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
