// Module ID: 14292
// Function ID: 14293
// Dependencies: [14284]

// Module 14292
import _mod14284 from "module_14284" /* 14284 */;


export default (str, arg1) => {
  const tmp = _mod14284;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
