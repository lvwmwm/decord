// Module ID: 16161
// Function ID: 16162
// Dependencies: [16153]

// Module 16161
import _mod16153 from "module_16153" /* 16153 */;


export default (str, arg1) => {
  const tmp = _mod16153;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
