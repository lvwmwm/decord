// Module ID: 16249
// Function ID: 16250
// Dependencies: [16241]

// Module 16249
import _mod16241 from "module_16241" /* 16241 */;


export default (str, arg1) => {
  const tmp = _mod16241;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
