// Module ID: 12668
// Function ID: 97352
// Name: valid
// Dependencies: []

// Module 12668 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(dependencyMap[0])(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
