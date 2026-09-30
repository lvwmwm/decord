// Module ID: 13762
// Function ID: 13763
// Dependencies: [13754]

// Module 13762
import _mod13754 from "module_13754" /* 13754 */;


export default (str, arg1) => {
  const tmp = _mod13754;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
