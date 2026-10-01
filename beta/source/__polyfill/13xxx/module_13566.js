// Module ID: 13566
// Function ID: 13567
// Dependencies: [13558]

// Module 13566
import _mod13558 from "module_13558" /* 13558 */;


export default (str, arg1) => {
  const tmp = _mod13558;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
