// Module ID: 13154
// Function ID: 13155
// Name: Range
// Dependencies: [13143]

// Module 13154 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13143) /* Range */(arg0, arg2);
  return obj.intersects(new require(13143) /* Range */(arg1, arg2), arg2);
};
