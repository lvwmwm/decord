// Module ID: 15229
// Function ID: 15230
// Dependencies: [15215]

// Module 15229
import _mod15215 from "module_15215" /* 15215 */;


export default (arg0, arg1) => {
  const tmp = _mod15215(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
