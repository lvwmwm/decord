// Module ID: 13500
// Function ID: 13501
// Dependencies: [13447, 13498, 13481]

// Module 13500

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13498) /* defineProperty */.f(arg0, arg1, require(13481)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
