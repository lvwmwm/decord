// Module ID: 13573
// Function ID: 13574
// Name: prerelease
// Dependencies: [13559]

// Module 13573 (prerelease)
import _mod13559 from "module_13559" /* 13559 */;


export default (arg0, arg1) => {
  const tmp = _mod13559(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
