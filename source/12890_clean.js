// Module ID: 12890
// Function ID: 100136
// Name: clean
// Dependencies: [12882]

// Module 12890 (clean)

export default function clean(str) {
  const tmp = require(12882) /* parse */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
