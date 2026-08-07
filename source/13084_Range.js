// Module ID: 13084
// Function ID: 13085
// Name: Range
// Dependencies: [13073]

// Module 13084 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13073) /* Range */(arg0, arg2);
  return obj.intersects(new require(13073) /* Range */(arg1, arg2), arg2);
};
