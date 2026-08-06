// Module ID: 13542
// Function ID: 13543
// Dependencies: [13489, 13540, 13523]

// Module 13542

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13540) /* defineProperty */.f(arg0, arg1, require(13523)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
