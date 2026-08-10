// Module ID: 13628
// Function ID: 13629
// Dependencies: [13575, 13626, 13609]

// Module 13628

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13626) /* defineProperty */.f(arg0, arg1, require(13609)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
