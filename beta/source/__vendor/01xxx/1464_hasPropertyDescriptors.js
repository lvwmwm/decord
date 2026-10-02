// Module ID: 1464
// Function ID: 1465
// Name: hasPropertyDescriptors
// Dependencies: [1317]

// Module 1464 (hasPropertyDescriptors)
const require = globalThis.__r;

function hasPropertyDescriptors() {
  return require("flag");
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  const tmp = require;
  if (require("flag")) {
    try {
      return 1 !== tmp(1317)([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
