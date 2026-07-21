// Module ID: 13163
// Function ID: 99556
// Dependencies: []

// Module 13163

export default require(dependencyMap[0]) ? (arg0, arg1, arg2) => require(dependencyMap[1]).f(arg0, arg1, require(dependencyMap[2])(1, arg2)) : (arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
};
