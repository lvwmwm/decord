// Module ID: 15362
// Function ID: 15363
// Dependencies: [15354]

// Module 15362
import _mod15354 from "module_15354" /* 15354 */;


export default (str, arg1) => {
  const tmp = _mod15354;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
