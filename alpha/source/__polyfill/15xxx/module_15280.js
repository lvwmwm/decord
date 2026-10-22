// Module ID: 15280
// Function ID: 15281
// Dependencies: [15272]

// Module 15280
import _mod15272 from "module_15272" /* 15272 */;


export default (str, arg1) => {
  const tmp = _mod15272;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
