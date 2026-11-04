// Module ID: 15907
// Function ID: 15908
// Dependencies: [15899]

// Module 15907
import _mod15899 from "module_15899" /* 15899 */;


export default (str, arg1) => {
  const tmp = _mod15899;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
