// Module ID: 13028
// Function ID: 13029
// Name: Range
// Dependencies: [13017]

// Module 13028 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13017) /* Range */(arg0, arg2);
  return obj.intersects(new require(13017) /* Range */(arg1, arg2), arg2);
};
