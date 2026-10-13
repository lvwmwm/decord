// Module ID: 14654
// Function ID: 14655
// Dependencies: [14646]

// Module 14654
import _mod14646 from "module_14646" /* 14646 */;


export default (str, arg1) => {
  const tmp = _mod14646;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
