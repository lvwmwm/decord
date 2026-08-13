// Module ID: 13223
// Function ID: 13224
// Name: Range
// Dependencies: [13212]

// Module 13223 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(13212) /* Range */(arg0, arg2);
  return obj.intersects(new require(13212) /* Range */(arg1, arg2), arg2);
};
