// Module ID: 12845
// Function ID: 99958
// Name: clean
// Dependencies: [12837]

// Module 12845 (clean)

export default function clean(str) {
  const tmp = require(12837) /* parse */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
