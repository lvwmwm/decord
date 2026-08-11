// Module ID: 13165
// Function ID: 13166
// Name: Range
// Dependencies: [13154]

// Module 13165 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13154) /* Range */(arg0, arg2);
  return obj.intersects(new require(13154) /* Range */(arg1, arg2), arg2);
};
