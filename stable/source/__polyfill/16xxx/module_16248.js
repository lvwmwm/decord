// Module ID: 16248
// Function ID: 16249
// Dependencies: [16240]

// Module 16248
import _mod16240 from "module_16240" /* 16240 */;


export default (str, arg1) => {
  const tmp = _mod16240;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
