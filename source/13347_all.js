// Module ID: 13347
// Function ID: 102217
// Name: all
// Dependencies: [13320]

// Module 13347 (all)

export default (arg0) => {
  if (require(13320) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
