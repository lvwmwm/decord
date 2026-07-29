// Module ID: 12937
// Function ID: 12938
// Name: Range
// Dependencies: [12934]

// Module 12937 (Range)

export default (arg0, arg1) => {
  const tmp = new require(12934) /* Range */(arg0, arg1);
  return new require(12934) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
