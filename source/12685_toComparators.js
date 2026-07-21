// Module ID: 12685
// Function ID: 97402
// Name: toComparators
// Dependencies: []

// Module 12685 (toComparators)

export default function toComparators(arg0, arg1) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg1);
  return tmp.set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
