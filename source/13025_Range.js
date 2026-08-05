// Module ID: 13025
// Function ID: 13026
// Name: Range
// Dependencies: [13022]

// Module 13025 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13022) /* Range */(arg0, arg1);
  return new require(13022) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
