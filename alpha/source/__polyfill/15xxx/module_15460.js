// Module ID: 15460
// Function ID: 15461
// Dependencies: [15452]

// Module 15460
import _mod15452 from "module_15452" /* 15452 */;


export default (str, arg1) => {
  const tmp = _mod15452;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
