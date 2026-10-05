// Module ID: 13844
// Function ID: 13845
// Dependencies: [13830]

// Module 13844
import _mod13830 from "module_13830" /* 13830 */;


export default (arg0, arg1) => {
  const tmp = _mod13830(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
