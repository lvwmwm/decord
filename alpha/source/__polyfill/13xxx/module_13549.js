// Module ID: 13549
// Function ID: 13550
// Dependencies: [13541]

// Module 13549
import _mod13541 from "module_13541" /* 13541 */;


export default (str, arg1) => {
  const tmp = _mod13541;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
