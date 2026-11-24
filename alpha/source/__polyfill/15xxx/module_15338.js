// Module ID: 15338
// Function ID: 15339
// Dependencies: [15330]

// Module 15338
import _mod15330 from "module_15330" /* 15330 */;


export default (str, arg1) => {
  const tmp = _mod15330;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
