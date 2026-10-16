// Module ID: 15021
// Function ID: 15022
// Dependencies: [15013]

// Module 15021
import _mod15013 from "module_15013" /* 15013 */;


export default (str, arg1) => {
  const tmp = _mod15013;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
