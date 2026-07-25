// Module ID: 13350
// Function ID: 102221
// Dependencies: [13297, 13348, 13331]

// Module 13350

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13348) /* defineProperty */.f(arg0, arg1, require(13331)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
