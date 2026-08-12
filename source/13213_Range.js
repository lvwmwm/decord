// Module ID: 13213
// Function ID: 13214
// Name: Range
// Dependencies: [13211]

// Module 13213 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13211) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
