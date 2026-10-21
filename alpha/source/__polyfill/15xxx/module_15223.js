// Module ID: 15223
// Function ID: 15224
// Dependencies: [15215]

// Module 15223
import _mod15215 from "module_15215" /* 15215 */;


export default (str, arg1) => {
  const tmp = _mod15215;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
