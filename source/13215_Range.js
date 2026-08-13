// Module ID: 13215
// Function ID: 13216
// Name: Range
// Dependencies: [13212]

// Module 13215 (Range)

export default (arg0, arg1) => {
  const tmp = new require(13212) /* Range */(arg0, arg1);
  return new require(13212) /* Range */(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
