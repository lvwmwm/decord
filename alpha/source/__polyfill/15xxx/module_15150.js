// Module ID: 15150
// Function ID: 15151
// Dependencies: [15142]

// Module 15150
import _mod15142 from "module_15142" /* 15142 */;


export default (str, arg1) => {
  const tmp = _mod15142;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
