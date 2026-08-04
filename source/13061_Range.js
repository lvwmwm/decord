// Module ID: 13061
// Function ID: 13062
// Name: Range
// Dependencies: [13050]

// Module 13061 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13050) /* Range */(arg0, arg2);
  return obj.intersects(new require(13050) /* Range */(arg1, arg2), arg2);
};
