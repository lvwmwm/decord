// Module ID: 1475
// Function ID: 1476
// Name: hasPropertyDescriptors
// Dependencies: [1328]

// Module 1475 (hasPropertyDescriptors)
const require = globalThis.__r;

function hasPropertyDescriptors() {
  return require("flag");
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  const tmp = require;
  if (require("flag")) {
    try {
      return 1 !== tmp(1328)([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
