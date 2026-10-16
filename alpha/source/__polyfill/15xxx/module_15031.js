// Module ID: 15031
// Function ID: 15032
// Dependencies: [15023]

// Module 15031
import _mod15023 from "module_15023" /* 15023 */;


export default (str, arg1) => {
  const tmp = _mod15023;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
