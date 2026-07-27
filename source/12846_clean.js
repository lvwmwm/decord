// Module ID: 12846
// Function ID: 99963
// Name: clean
// Dependencies: [12838]

// Module 12846 (clean)

export default function clean(str) {
  const tmp = require(12838) /* parse */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
