// Module ID: 13741
// Function ID: 13742
// Name: prerelease
// Dependencies: [13727]

// Module 13741 (prerelease)
import _mod13727 from "module_13727" /* 13727 */;


export default (arg0, arg1) => {
  const tmp = _mod13727(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
