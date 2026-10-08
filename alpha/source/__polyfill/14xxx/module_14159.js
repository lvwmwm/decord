// Module ID: 14159
// Function ID: 14160
// Dependencies: [14151]

// Module 14159
import _mod14151 from "module_14151" /* 14151 */;

let version;


export default (str, arg1) => {
  const tmp = _mod14151;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
