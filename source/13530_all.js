// Module ID: 13530
// Function ID: 13531
// Name: all
// Dependencies: [13503]

// Module 13530 (all)

export default (arg0) => {
  if (require(13503) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
