// Module ID: 13019
// Function ID: 13020
// Name: Range
// Dependencies: [13017]

// Module 13019 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13017) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
