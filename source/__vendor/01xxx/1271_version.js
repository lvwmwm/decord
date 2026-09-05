// Module ID: 1271
// Function ID: 1272
// Name: version
// Dependencies: [1260]

// Module 1271 (version)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function version(arr) {
  if (module(1260)(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
