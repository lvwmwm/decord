// Module ID: 16251
// Function ID: 16252
// Dependencies: [16243]

// Module 16251
import _mod16243 from "module_16243" /* 16243 */;


export default (str, arg1) => {
  const tmp = _mod16243;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
