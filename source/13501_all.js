// Module ID: 13501
// Function ID: 13502
// Name: all
// Dependencies: [13474]

// Module 13501 (all)

export default (arg0) => {
  if (require(13474) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
