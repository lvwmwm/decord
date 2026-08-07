// Module ID: 13076
// Function ID: 13077
// Name: Range
// Dependencies: [13073]

// Module 13076 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13073) /* Range */(arg0, arg1);
  return new require(13073) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
