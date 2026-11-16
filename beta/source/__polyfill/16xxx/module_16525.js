// Module ID: 16525
// Function ID: 16526
// Dependencies: [16517]

// Module 16525
import _mod16517 from "module_16517" /* 16517 */;


export default (str, arg1) => {
  const tmp = _mod16517;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
