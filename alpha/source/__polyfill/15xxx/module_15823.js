// Module ID: 15823
// Function ID: 15824
// Dependencies: [15815]

// Module 15823
import _mod15815 from "module_15815" /* 15815 */;

let version;


export default (str, arg1) => {
  const tmp = _mod15815;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
