// Module ID: 13024
// Function ID: 13025
// Name: Range
// Dependencies: [13017]

// Module 13024 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13017) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
