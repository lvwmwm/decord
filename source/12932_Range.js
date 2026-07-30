// Module ID: 12932
// Function ID: 12933
// Name: Range
// Dependencies: [12929]

// Module 12932 (Range)

export default (arg0, arg1) => {
  const tmp = new require(12929) /* Range */(arg0, arg1);
  return new require(12929) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
