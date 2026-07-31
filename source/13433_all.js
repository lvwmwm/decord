// Module ID: 13433
// Function ID: 13434
// Name: all
// Dependencies: [13406]

// Module 13433 (all)

export default (arg0) => {
  if (require(13406) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
