// Module ID: 15315
// Function ID: 15316
// Dependencies: [15307]

// Module 15315
import _mod15307 from "module_15307" /* 15307 */;


export default (str, arg1) => {
  const tmp = _mod15307;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
