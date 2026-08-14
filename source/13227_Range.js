// Module ID: 13227
// Function ID: 13228
// Name: Range
// Dependencies: [13224]

// Module 13227 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13224) /* Range */(arg0, arg1);
  return new require(13224) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
