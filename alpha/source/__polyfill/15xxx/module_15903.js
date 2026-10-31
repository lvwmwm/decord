// Module ID: 15903
// Function ID: 15904
// Dependencies: [15895]

// Module 15903
import _mod15895 from "module_15895" /* 15895 */;


export default (str, arg1) => {
  const tmp = _mod15895;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
