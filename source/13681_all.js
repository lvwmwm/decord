// Module ID: 13681
// Function ID: 13682
// Name: all
// Dependencies: [13654]

// Module 13681 (all)

export default (arg0) => {
  if (require(13654) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
