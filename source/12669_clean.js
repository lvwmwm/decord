// Module ID: 12669
// Function ID: 97354
// Name: clean
// Dependencies: []

// Module 12669 (clean)

export default function clean(str) {
  const tmp = require(dependencyMap[0]);
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
