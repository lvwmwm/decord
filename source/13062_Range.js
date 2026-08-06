// Module ID: 13062
// Function ID: 13063
// Name: Range
// Dependencies: [13059]

// Module 13062 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13059) /* Range */(arg0, arg1);
  return new require(13059) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
