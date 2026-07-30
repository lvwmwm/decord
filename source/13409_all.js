// Module ID: 13409
// Function ID: 13410
// Name: all
// Dependencies: [13382]

// Module 13409 (all)

export default (arg0) => {
  if (require(13382) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
