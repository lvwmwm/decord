// Module ID: 1476
// Function ID: 1477
// Name: hasPropertyDescriptors
// Dependencies: [1329]

// Module 1476 (hasPropertyDescriptors)
const require = globalThis.__r;

function hasPropertyDescriptors() {
  return require("flag");
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  const tmp = require;
  if (require("flag")) {
    try {
      return 1 !== tmp(1329)([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
