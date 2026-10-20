// Module ID: 15132
// Function ID: 15133
// Dependencies: [15124]

// Module 15132
import _mod15124 from "module_15124" /* 15124 */;


export default (str, arg1) => {
  const tmp = _mod15124;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
