// Module ID: 13024
// Function ID: 13025
// Name: Range
// Dependencies: [13022]

// Module 13024 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13022) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
