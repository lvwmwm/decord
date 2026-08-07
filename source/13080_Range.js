// Module ID: 13080
// Function ID: 13081
// Name: Range
// Dependencies: [13073]

// Module 13080 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13073) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
