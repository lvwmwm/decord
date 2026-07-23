// Module ID: 12783
// Function ID: 99510
// Name: clean
// Dependencies: [12775]

// Module 12783 (clean)

export default function clean(str) {
  const tmp = require(12775) /* parse */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
