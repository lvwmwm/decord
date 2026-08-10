// Module ID: 13156
// Function ID: 13157
// Name: Range
// Dependencies: [13145]

// Module 13156 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13145) /* Range */(arg0, arg2);
  return obj.intersects(new require(13145) /* Range */(arg1, arg2), arg2);
};
