// Module ID: 14338
// Function ID: 14339
// Dependencies: [14330]

// Module 14338
import _mod14330 from "module_14330" /* 14330 */;


export default (str, arg1) => {
  const tmp = _mod14330;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
