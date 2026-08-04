// Module ID: 13529
// Function ID: 13530
// Name: all
// Dependencies: [13502]

// Module 13529 (all)

export default (arg0) => {
  if (require(13502) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
