// Module ID: 13061
// Function ID: 13062
// Name: Range
// Dependencies: [13059]

// Module 13061 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13059) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
