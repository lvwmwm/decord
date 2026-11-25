// Module ID: 15466
// Function ID: 15467
// Dependencies: [15452]

// Module 15466
import _mod15452 from "module_15452" /* 15452 */;


export default (arg0, arg1) => {
  const tmp = _mod15452(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
