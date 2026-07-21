// Module ID: 12661
// Function ID: 97319
// Name: valid
// Dependencies: []

// Module 12661 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(dependencyMap[0])(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
