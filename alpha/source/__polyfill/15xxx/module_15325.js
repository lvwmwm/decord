// Module ID: 15325
// Function ID: 15326
// Dependencies: [15317]

// Module 15325
import _mod15317 from "module_15317" /* 15317 */;


export default (str, arg1) => {
  const tmp = _mod15317;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
