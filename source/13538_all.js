// Module ID: 13538
// Function ID: 13539
// Name: all
// Dependencies: [13511]

// Module 13538 (all)

export default (arg0) => {
  if (require(13511) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
