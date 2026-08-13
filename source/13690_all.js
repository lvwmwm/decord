// Module ID: 13690
// Function ID: 13691
// Name: all
// Dependencies: [13663]

// Module 13690 (all)

export default (arg0) => {
  if (require(13663) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
