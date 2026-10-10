// Module ID: 14310
// Function ID: 14311
// Dependencies: [14302]

// Module 14310
import _mod14302 from "module_14302" /* 14302 */;


export default (str, arg1) => {
  const tmp = _mod14302;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
