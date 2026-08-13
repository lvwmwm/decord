// Module ID: 13214
// Function ID: 13215
// Name: Range
// Dependencies: [13212]

// Module 13214 (Range)

export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new require(13212) /* Range */(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
