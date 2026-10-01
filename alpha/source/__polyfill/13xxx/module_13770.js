// Module ID: 13770
// Function ID: 13771
// Dependencies: [13762]

// Module 13770
import _mod13762 from "module_13762" /* 13762 */;


export default (str, arg1) => {
  const tmp = _mod13762;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
