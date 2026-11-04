// Module ID: 16152
// Function ID: 16153
// Dependencies: [16144]

// Module 16152
import _mod16144 from "module_16144" /* 16144 */;


export default (str, arg1) => {
  const tmp = _mod16144;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
