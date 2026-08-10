// Module ID: 13147
// Function ID: 13148
// Name: Range
// Dependencies: [13145]

// Module 13147 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13145) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
