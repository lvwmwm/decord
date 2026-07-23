// Module ID: 13286
// Function ID: 101767
// Dependencies: [13233, 13284, 13267]

// Module 13286

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13284) /* defineProperty */.f(arg0, arg1, require(13267)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
