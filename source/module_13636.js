// Module ID: 13636
// Function ID: 13637
// Dependencies: [13583, 13634, 13617]

// Module 13636

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13634) /* defineProperty */.f(arg0, arg1, require(13617)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
