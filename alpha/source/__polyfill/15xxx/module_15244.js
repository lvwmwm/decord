// Module ID: 15244
// Function ID: 15245
// Dependencies: [15236]

// Module 15244
import _mod15236 from "module_15236" /* 15236 */;


export default (str, arg1) => {
  const tmp = _mod15236;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
