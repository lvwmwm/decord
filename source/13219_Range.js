// Module ID: 13219
// Function ID: 13220
// Name: Range
// Dependencies: [13212]

// Module 13219 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13212) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
