// Module ID: 12936
// Function ID: 12937
// Name: Range
// Dependencies: [12929]

// Module 12936 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(12929) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
