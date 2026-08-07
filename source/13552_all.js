// Module ID: 13552
// Function ID: 13553
// Name: all
// Dependencies: [13525]

// Module 13552 (all)

export default (arg0) => {
  if (require(13525) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
