// Module ID: 13155
// Function ID: 13156
// Name: Range
// Dependencies: [13152]

// Module 13155 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13152) /* Range */(arg0, arg1);
  return new require(13152) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
