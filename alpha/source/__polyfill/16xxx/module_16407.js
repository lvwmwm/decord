// Module ID: 16407
// Function ID: 16408
// Dependencies: [16399]

// Module 16407
import _mod16399 from "module_16399" /* 16399 */;


export default (str, arg1) => {
  const tmp = _mod16399;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
