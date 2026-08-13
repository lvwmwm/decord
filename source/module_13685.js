// Module ID: 13685
// Function ID: 13686
// Dependencies: [13632, 13683, 13666]

// Module 13685

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13683) /* defineProperty */.f(arg0, arg1, require(13666)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
