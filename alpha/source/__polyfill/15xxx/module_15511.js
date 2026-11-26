// Module ID: 15511
// Function ID: 15512
// Dependencies: [15503]

// Module 15511
import _mod15503 from "module_15503" /* 15503 */;


export default (str, arg1) => {
  const tmp = _mod15503;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
