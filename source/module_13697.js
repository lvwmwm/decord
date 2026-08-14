// Module ID: 13697
// Function ID: 13698
// Dependencies: [13644, 13695, 13678]

// Module 13697

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13695) /* defineProperty */.f(arg0, arg1, require(13678)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
