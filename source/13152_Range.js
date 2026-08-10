// Module ID: 13152
// Function ID: 13153
// Name: Range
// Dependencies: [13145]

// Module 13152 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13145) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
