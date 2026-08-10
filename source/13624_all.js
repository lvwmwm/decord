// Module ID: 13624
// Function ID: 13625
// Name: all
// Dependencies: [13597]

// Module 13624 (all)

export default (arg0) => {
  if (require(13597) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
