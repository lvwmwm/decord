// Module ID: 16139
// Function ID: 16140
// Dependencies: [16131]

// Module 16139
import _mod16131 from "module_16131" /* 16131 */;


export default (str, arg1) => {
  const tmp = _mod16131;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
