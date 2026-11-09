// Module ID: 16219
// Function ID: 16220
// Dependencies: [16211]

// Module 16219
import _mod16211 from "module_16211" /* 16211 */;


export default (str, arg1) => {
  const tmp = _mod16211;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
