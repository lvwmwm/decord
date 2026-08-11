// Module ID: 13157
// Function ID: 13158
// Name: Range
// Dependencies: [13154]

// Module 13157 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13154) /* Range */(arg0, arg1);
  return new require(13154) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
