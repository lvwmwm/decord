// Module ID: 15267
// Function ID: 15268
// Dependencies: [15259]

// Module 15267
import _mod15259 from "module_15259" /* 15259 */;


export default (str, arg1) => {
  const tmp = _mod15259;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
