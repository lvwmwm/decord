// Module ID: 13567
// Function ID: 13568
// Dependencies: [13559]

// Module 13567
import _mod13559 from "module_13559" /* 13559 */;


export default (str, arg1) => {
  const tmp = _mod13559;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
