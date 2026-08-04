// Module ID: 13533
// Function ID: 13534
// Dependencies: [13480, 13531, 13514]

// Module 13533

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13531) /* defineProperty */.f(arg0, arg1, require(13514)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
