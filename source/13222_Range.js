// Module ID: 13222
// Function ID: 13223
// Name: Range
// Dependencies: [13211]

// Module 13222 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13211) /* Range */(arg0, arg2);
  return obj.intersects(new require(13211) /* Range */(arg1, arg2), arg2);
};
