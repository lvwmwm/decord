// Module ID: 14388
// Function ID: 14389
// Dependencies: [14380]

// Module 14388
import _mod14380 from "module_14380" /* 14380 */;


export default (str, arg1) => {
  const tmp = _mod14380;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
