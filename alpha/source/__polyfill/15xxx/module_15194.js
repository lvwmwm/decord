// Module ID: 15194
// Function ID: 15195
// Dependencies: [15186]

// Module 15194
import _mod15186 from "module_15186" /* 15186 */;


export default (str, arg1) => {
  const tmp = _mod15186;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
