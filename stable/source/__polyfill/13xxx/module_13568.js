// Module ID: 13568
// Function ID: 13569
// Dependencies: [13560]

// Module 13568
import _mod13560 from "module_13560" /* 13560 */;


export default (str, arg1) => {
  const tmp = _mod13560;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
