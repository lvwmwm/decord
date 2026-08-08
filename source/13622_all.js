// Module ID: 13622
// Function ID: 13623
// Name: all
// Dependencies: [13595]

// Module 13622 (all)

export default (arg0) => {
  if (require(13595) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
