// Module ID: 16527
// Function ID: 16528
// Dependencies: [16519]

// Module 16527
import _mod16519 from "module_16519" /* 16519 */;


export default (str, arg1) => {
  const tmp = _mod16519;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
