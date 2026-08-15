// Module ID: 13725
// Function ID: 13726
// Name: all
// Dependencies: [13698]

// Module 13725 (all)

export default (arg0) => {
  if (require(13698) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
