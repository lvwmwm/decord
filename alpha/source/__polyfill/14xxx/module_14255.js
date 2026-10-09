// Module ID: 14255
// Function ID: 14256
// Dependencies: [14247]

// Module 14255
import _mod14247 from "module_14247" /* 14247 */;


export default (str, arg1) => {
  const tmp = _mod14247;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
