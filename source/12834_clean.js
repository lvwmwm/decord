// Module ID: 12834
// Function ID: 99831
// Name: clean
// Dependencies: [12826]

// Module 12834 (clean)

export default function clean(str) {
  const tmp = require(12826) /* parse */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
