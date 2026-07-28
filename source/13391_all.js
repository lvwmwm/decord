// Module ID: 13391
// Function ID: 102390
// Name: all
// Dependencies: [13364]

// Module 13391 (all)

export default (arg0) => {
  if (require(13364) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
