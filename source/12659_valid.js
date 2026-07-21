// Module ID: 12659
// Function ID: 97297
// Name: valid
// Dependencies: []

// Module 12659 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(dependencyMap[0])(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
