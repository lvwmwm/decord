// Module ID: 14379
// Function ID: 14380
// Dependencies: [14371]

// Module 14379
import _mod14371 from "module_14371" /* 14371 */;


export default (str, arg1) => {
  const tmp = _mod14371;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
