// Module ID: 13226
// Function ID: 13227
// Name: Range
// Dependencies: [13224]

// Module 13226 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13224) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
