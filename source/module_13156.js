// Module ID: 13156
// Function ID: 99533
// Dependencies: [2097152051, 2080374835, 1946157107]

// Module 13156

export default require(dependencyMap[0]) ? (arg0, arg1, arg2) => require(dependencyMap[1]).f(arg0, arg1, require(dependencyMap[2])(1, arg2)) : (arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
};
