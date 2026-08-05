// Module ID: 13505
// Function ID: 13506
// Dependencies: [13452, 13503, 13486]

// Module 13505

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13503) /* defineProperty */.f(arg0, arg1, require(13486)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
