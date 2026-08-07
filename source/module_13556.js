// Module ID: 13556
// Function ID: 13557
// Dependencies: [13503, 13554, 13537]

// Module 13556

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13554) /* defineProperty */.f(arg0, arg1, require(13537)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
