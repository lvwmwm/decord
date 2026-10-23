// Module ID: 15301
// Function ID: 15302
// Dependencies: [15293]

// Module 15301
import _mod15293 from "module_15293" /* 15293 */;


export default (str, arg1) => {
  const tmp = _mod15293;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
