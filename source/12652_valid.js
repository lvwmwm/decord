// Module ID: 12652
// Function ID: 97274
// Name: valid
// Dependencies: [49]

// Module 12652 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(dependencyMap[0])(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
