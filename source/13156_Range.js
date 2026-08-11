// Module ID: 13156
// Function ID: 13157
// Name: Range
// Dependencies: [13154]

// Module 13156 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13154) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
