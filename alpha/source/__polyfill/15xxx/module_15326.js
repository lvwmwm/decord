// Module ID: 15326
// Function ID: 15327
// Dependencies: [15318]

// Module 15326
import _mod15318 from "module_15318" /* 15318 */;


export default (str, arg1) => {
  const tmp = _mod15318;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
