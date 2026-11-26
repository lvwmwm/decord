// Module ID: 15329
// Function ID: 15330
// Dependencies: [15321]

// Module 15329
import _mod15321 from "module_15321" /* 15321 */;


export default (str, arg1) => {
  const tmp = _mod15321;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
