// Module ID: 13626
// Function ID: 13627
// Dependencies: [13573, 13624, 13607]

// Module 13626

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13624) /* defineProperty */.f(arg0, arg1, require(13607)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
