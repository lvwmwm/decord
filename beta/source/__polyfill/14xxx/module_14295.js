// Module ID: 14295
// Function ID: 14296
// Dependencies: [14287]

// Module 14295
import _mod14287 from "module_14287" /* 14287 */;


export default (str, arg1) => {
  const tmp = _mod14287;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
