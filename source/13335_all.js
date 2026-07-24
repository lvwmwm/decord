// Module ID: 13335
// Function ID: 102085
// Name: all
// Dependencies: [13308]

// Module 13335 (all)

export default (arg0) => {
  if (require(13308) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
