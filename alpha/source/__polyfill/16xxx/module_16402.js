// Module ID: 16402
// Function ID: 16403
// Dependencies: [16394]

// Module 16402
import _mod16394 from "module_16394" /* 16394 */;


export default (str, arg1) => {
  const tmp = _mod16394;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
