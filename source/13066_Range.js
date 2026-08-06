// Module ID: 13066
// Function ID: 13067
// Name: Range
// Dependencies: [13059]

// Module 13066 (Range)

export default (arg0, arg1) => {
  try {
    const tmp8 = new require(13059) /* Range */(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
