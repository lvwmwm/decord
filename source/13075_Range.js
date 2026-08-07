// Module ID: 13075
// Function ID: 13076
// Name: Range
// Dependencies: [13073]

// Module 13075 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13073) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
