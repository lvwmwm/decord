// Module ID: 15317
// Function ID: 15318
// Dependencies: [15309]

// Module 15317
import _mod15309 from "module_15309" /* 15309 */;


export default (str, arg1) => {
  const tmp = _mod15309;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
