// Module ID: 13632
// Function ID: 13633
// Name: all
// Dependencies: [13605]

// Module 13632 (all)

export default (arg0) => {
  if (require(13605) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
