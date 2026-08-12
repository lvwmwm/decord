// Module ID: 13689
// Function ID: 13690
// Name: all
// Dependencies: [13662]

// Module 13689 (all)

export default (arg0) => {
  if (require(13662) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
