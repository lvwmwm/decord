// Module ID: 12931
// Function ID: 12932
// Name: Range
// Dependencies: [12929]

// Module 12931 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(12929) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
