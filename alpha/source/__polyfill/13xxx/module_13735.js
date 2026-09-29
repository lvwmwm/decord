// Module ID: 13735
// Function ID: 13736
// Dependencies: [13727]

// Module 13735
import _mod13727 from "module_13727" /* 13727 */;


export default (str, arg1) => {
  const tmp = _mod13727;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
