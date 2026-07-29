// Module ID: 12941
// Function ID: 12942
// Name: Range
// Dependencies: [12934]

// Module 12941 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(12934) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
