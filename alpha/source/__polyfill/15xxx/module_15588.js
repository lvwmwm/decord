// Module ID: 15588
// Function ID: 15589
// Dependencies: [15580]

// Module 15588
import _mod15580 from "module_15580" /* 15580 */;


export default (str, arg1) => {
  const tmp = _mod15580;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
