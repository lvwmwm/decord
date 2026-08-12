// Module ID: 13218
// Function ID: 13219
// Name: Range
// Dependencies: [13211]

// Module 13218 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13211) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
