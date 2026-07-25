// Module ID: 13325
// Function ID: 102169
// Name: all
// Dependencies: [13320, 13326]

// Module 13325 (all)

export default (arg0) => {
  if (require(13320) /* all */(arg0)) {
    return arg0;
  } else {
    const prototype = TypeError.prototype;
    const tmp6 = new TypeError(require(13326)(arg0) + " is not a function");
    throw tmp6;
  }
};
