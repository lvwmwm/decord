// Module ID: 15230
// Function ID: 15231
// Dependencies: [15222]

// Module 15230
import _mod15222 from "module_15222" /* 15222 */;


export default (str, arg1) => {
  const tmp = _mod15222;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
