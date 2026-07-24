// Module ID: 12859
// Function ID: 99934
// Name: toComparators
// Dependencies: [12856]

// Module 12859 (toComparators)

export default function toComparators(arg0, arg1) {
  let tmp = require(12856) /* Range */;
  tmp = new tmp(arg0, arg1);
  return tmp.set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
