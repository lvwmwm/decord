// Module ID: 13159
// Function ID: 13160
// Name: Range
// Dependencies: [13152]

// Module 13159 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13152) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
