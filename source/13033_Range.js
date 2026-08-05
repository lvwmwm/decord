// Module ID: 13033
// Function ID: 13034
// Name: Range
// Dependencies: [13022]

// Module 13033 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13022) /* Range */(arg0, arg2);
  return obj.intersects(new require(13022) /* Range */(arg1, arg2), arg2);
};
