// Module ID: 13029
// Function ID: 13030
// Name: Range
// Dependencies: [13022]

// Module 13029 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13022) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
