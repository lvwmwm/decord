// Module ID: 14692
// Function ID: 14693
// Dependencies: [14684]

// Module 14692
import _mod14684 from "module_14684" /* 14684 */;


export default (str, arg1) => {
  const tmp = _mod14684;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
