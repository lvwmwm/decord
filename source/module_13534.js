// Module ID: 13534
// Function ID: 13535
// Dependencies: [13481, 13532, 13515]

// Module 13534

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13532) /* defineProperty */.f(arg0, arg1, require(13515)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
