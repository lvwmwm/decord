// Module ID: 13062
// Function ID: 13063
// Name: Range
// Dependencies: [13051]

// Module 13062 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13051) /* Range */(arg0, arg2);
  return obj.intersects(new require(13051) /* Range */(arg1, arg2), arg2);
};
