// Module ID: 13148
// Function ID: 13149
// Name: Range
// Dependencies: [13145]

// Module 13148 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13145) /* Range */(arg0, arg1);
  return new require(13145) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
