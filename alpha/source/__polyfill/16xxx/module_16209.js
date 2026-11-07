// Module ID: 16209
// Function ID: 16210
// Dependencies: [16201]

// Module 16209
import _mod16201 from "module_16201" /* 16201 */;


export default (str, arg1) => {
  const tmp = _mod16201;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
