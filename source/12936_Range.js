// Module ID: 12936
// Function ID: 12937
// Name: Range
// Dependencies: [12934]

// Module 12936 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(12934) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
