// Module ID: 16561
// Function ID: 16562
// Dependencies: [16553]

// Module 16561
import _mod16553 from "module_16553" /* 16553 */;


export default (str, arg1) => {
  const tmp = _mod16553;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
