// Module ID: 1463
// Function ID: 1464
// Name: hasPropertyDescriptors
// Dependencies: [1316]

// Module 1463 (hasPropertyDescriptors)
const require = globalThis.__r;

function hasPropertyDescriptors() {
  return require("flag");
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  const tmp = require;
  if (require("flag")) {
    try {
      return 1 !== tmp(1316)([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
