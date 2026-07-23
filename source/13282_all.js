// Module ID: 13282
// Function ID: 101758
// Name: all
// Dependencies: [13255]

// Module 13282 (all)

export default (arg0) => {
  if (require(13255) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
