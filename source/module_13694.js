// Module ID: 13694
// Function ID: 13695
// Dependencies: [13641, 13692, 13675]

// Module 13694

export default require("getOwnPropertyDescriptor") ? ((arg0, arg1, arg2) => require(13692) /* defineProperty */.f(arg0, arg1, require(13675)(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
