// Module ID: 15104
// Function ID: 15105
// Dependencies: [15096]

// Module 15104
import _mod15096 from "module_15096" /* 15096 */;


export default (str, arg1) => {
  const tmp = _mod15096;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
