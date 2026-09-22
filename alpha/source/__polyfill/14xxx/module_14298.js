// Module ID: 14298
// Function ID: 14299
// Dependencies: [14290]

// Module 14298
import _mod14290 from "module_14290" /* 14290 */;


export default (str, arg1) => {
  const tmp = _mod14290;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
