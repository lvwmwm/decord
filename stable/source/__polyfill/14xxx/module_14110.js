// Module ID: 14110
// Function ID: 14111
// Dependencies: [14102]

// Module 14110
import _mod14102 from "module_14102" /* 14102 */;


export default (str, arg1) => {
  const tmp = _mod14102;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
