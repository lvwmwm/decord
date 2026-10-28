// Module ID: 15360
// Function ID: 15361
// Dependencies: [15352]

// Module 15360
import _mod15352 from "module_15352" /* 15352 */;


export default (str, arg1) => {
  const tmp = _mod15352;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
