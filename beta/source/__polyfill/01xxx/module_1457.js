// Module ID: 1457
// Function ID: 1458
// Dependencies: [1305]

// Module 1457
const require = globalThis.__r;

function hasPropertyDescriptors() {
  return require("flag");
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require("flag")) {
    try {
      return 1 !== require("flag")([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
