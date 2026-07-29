// Module ID: 12945
// Function ID: 12946
// Name: Range
// Dependencies: [12934]

// Module 12945 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(12934) /* Range */(arg0, arg2);
  return obj.intersects(new require(12934) /* Range */(arg1, arg2), arg2);
};
