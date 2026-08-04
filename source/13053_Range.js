// Module ID: 13053
// Function ID: 13054
// Name: Range
// Dependencies: [13051]

// Module 13053 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13051) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
