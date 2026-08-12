// Module ID: 13214
// Function ID: 13215
// Name: Range
// Dependencies: [13211]

// Module 13214 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13211) /* Range */(arg0, arg1);
  return new require(13211) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
