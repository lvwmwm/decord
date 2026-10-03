// Module ID: 13836
// Function ID: 13837
// Dependencies: [13828]

// Module 13836
import _mod13828 from "module_13828" /* 13828 */;


export default (str, arg1) => {
  const tmp = _mod13828;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
