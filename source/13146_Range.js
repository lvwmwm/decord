// Module ID: 13146
// Function ID: 13147
// Name: Range
// Dependencies: [13143]

// Module 13146 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13143) /* Range */(arg0, arg1);
  return new require(13143) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
