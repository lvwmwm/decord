// Module ID: 15321
// Function ID: 15322
// Dependencies: [15313]

// Module 15321
import _mod15313 from "module_15313" /* 15313 */;


export default (str, arg1) => {
  const tmp = _mod15313;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
