// Module ID: 12870
// Function ID: 100061
// Name: toComparators
// Dependencies: [12867]

// Module 12870 (toComparators)

export default function toComparators(arg0, arg1) {
  let tmp = require(12867) /* Range */;
  tmp = new tmp(arg0, arg1);
  return tmp.set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
