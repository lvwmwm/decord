// Module ID: 13145
// Function ID: 13146
// Name: Range
// Dependencies: [13143]

// Module 13145 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13143) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
