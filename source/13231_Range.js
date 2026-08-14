// Module ID: 13231
// Function ID: 13232
// Name: Range
// Dependencies: [13224]

// Module 13231 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13224) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
