// Module ID: 13070
// Function ID: 13071
// Name: Range
// Dependencies: [13059]

// Module 13070 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13059) /* Range */(arg0, arg2);
  return obj.intersects(new require(13059) /* Range */(arg1, arg2), arg2);
};
