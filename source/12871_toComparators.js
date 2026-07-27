// Module ID: 12871
// Function ID: 100066
// Name: toComparators
// Dependencies: [12868]

// Module 12871 (toComparators)

export default function toComparators(arg0, arg1) {
  let tmp = require(12868) /* Range */;
  tmp = new tmp(arg0, arg1);
  return tmp.set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
