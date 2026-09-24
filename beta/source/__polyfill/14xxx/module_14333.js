// Module ID: 14333
// Function ID: 14334
// Dependencies: [14325]

// Module 14333
import _mod14325 from "module_14325" /* 14325 */;


export default (str, arg1) => {
  const tmp = _mod14325;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
