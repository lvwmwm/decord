// Module ID: 16050
// Function ID: 16051
// Dependencies: [16042]

// Module 16050
import _mod16042 from "module_16042" /* 16042 */;

let version;


export default (str, arg1) => {
  const tmp = _mod16042;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
