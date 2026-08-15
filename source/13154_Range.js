// Module ID: 13154
// Function ID: 13155
// Name: Range
// Dependencies: [13152]

// Module 13154 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13152) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
