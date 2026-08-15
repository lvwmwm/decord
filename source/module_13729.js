// Module ID: 13729
// Function ID: 13730
// Dependencies: [13676, 13727, 13710]

// Module 13729

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13727) /* defineProperty */.f(arg0, arg1, require(13710)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
