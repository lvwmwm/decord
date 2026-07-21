// Module ID: 12662
// Function ID: 97321
// Name: clean
// Dependencies: []

// Module 12662 (clean)

export default function clean(str) {
  const tmp = require(dependencyMap[0]);
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
