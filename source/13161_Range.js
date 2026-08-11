// Module ID: 13161
// Function ID: 13162
// Name: Range
// Dependencies: [13154]

// Module 13161 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13154) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
