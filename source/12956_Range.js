// Module ID: 12956
// Function ID: 12957
// Name: Range
// Dependencies: [12954]

// Module 12956 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(12954) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
