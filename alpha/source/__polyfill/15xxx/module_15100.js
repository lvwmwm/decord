// Module ID: 15100
// Function ID: 15101
// Dependencies: [15092]

// Module 15100
import _mod15092 from "module_15092" /* 15092 */;


export default (str, arg1) => {
  const tmp = _mod15092;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
