// Module ID: 15518
// Function ID: 15519
// Dependencies: [15510]

// Module 15518
import _mod15510 from "module_15510" /* 15510 */;


export default (str, arg1) => {
  const tmp = _mod15510;
  str = str.trim();
  const tmpResult = tmp(str.replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
