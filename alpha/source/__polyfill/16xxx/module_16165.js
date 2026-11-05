// Module ID: 16165
// Function ID: 16166
// Dependencies: [16157]

// Module 16165
import _mod16157 from "module_16157" /* 16157 */;


export default (str, arg1) => {
  const tmp = _mod16157;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
