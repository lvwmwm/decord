// Module ID: 15902
// Function ID: 15903
// Dependencies: [15894]

// Module 15902
import _mod15894 from "module_15894" /* 15894 */;


export default (str, arg1) => {
  const tmp = _mod15894;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
