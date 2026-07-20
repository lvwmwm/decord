// Module ID: 12653
// Function ID: 97276
// Name: clean
// Dependencies: [49]

// Module 12653 (clean)

export default function clean(str) {
  const tmp = require(dependencyMap[0]);
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
