// Module ID: 13053
// Function ID: 13054
// Name: Range
// Dependencies: [13050]

// Module 13053 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13050) /* Range */(arg0, arg1);
  return new require(13050) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
