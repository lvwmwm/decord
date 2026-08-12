// Module ID: 13693
// Function ID: 13694
// Dependencies: [13640, 13691, 13674]

// Module 13693

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13691) /* defineProperty */.f(arg0, arg1, require(13674)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
