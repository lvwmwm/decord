// Module ID: 13163
// Function ID: 13164
// Name: Range
// Dependencies: [13152]

// Module 13163 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13152) /* Range */(arg0, arg2);
  return obj.intersects(new require(13152) /* Range */(arg1, arg2), arg2);
};
