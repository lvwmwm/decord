// Module ID: 12660
// Function ID: 97299
// Name: clean
// Dependencies: []

// Module 12660 (clean)

export default function clean(str) {
  const tmp = require(dependencyMap[0]);
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
