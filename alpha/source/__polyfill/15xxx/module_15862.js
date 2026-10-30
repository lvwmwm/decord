// Module ID: 15862
// Function ID: 15863
// Dependencies: [15854]

// Module 15862
import _mod15854 from "module_15854" /* 15854 */;


export default (str, arg1) => {
  const tmp = _mod15854;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
