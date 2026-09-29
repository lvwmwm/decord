// Module ID: 14323
// Function ID: 14324
// Dependencies: [14315]

// Module 14323
import _mod14315 from "module_14315" /* 14315 */;


export default (str, arg1) => {
  const tmp = _mod14315;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
