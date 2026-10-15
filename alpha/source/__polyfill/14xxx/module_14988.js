// Module ID: 14988
// Function ID: 14989
// Dependencies: [14980]

// Module 14988
import _mod14980 from "module_14980" /* 14980 */;


export default (str, arg1) => {
  const tmp = _mod14980;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
