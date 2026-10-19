// Module ID: 15110
// Function ID: 15111
// Dependencies: [15096]

// Module 15110
import _mod15096 from "module_15096" /* 15096 */;


export default (arg0, arg1) => {
  const tmp = _mod15096(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
