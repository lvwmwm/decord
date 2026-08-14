// Module ID: 13235
// Function ID: 13236
// Name: Range
// Dependencies: [13224]

// Module 13235 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13224) /* Range */(arg0, arg2);
  return obj.intersects(new require(13224) /* Range */(arg1, arg2), arg2);
};
