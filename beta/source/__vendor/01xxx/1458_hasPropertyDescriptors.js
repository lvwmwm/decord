// Module ID: 1458
// Function ID: 1459
// Name: hasPropertyDescriptors
// Dependencies: [1305]

// Module 1458 (hasPropertyDescriptors)
const require = globalThis.__r;

function hasPropertyDescriptors() {
  return require("flag");
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  const tmp = require;
  if (require("flag")) {
    try {
      return 1 !== tmp(1305)([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
