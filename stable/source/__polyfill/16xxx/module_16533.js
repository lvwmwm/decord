// Module ID: 16533
// Function ID: 16534
// Dependencies: [16519]

// Module 16533
import _mod16519 from "module_16519" /* 16519 */;


export default (arg0, arg1) => {
  const tmp = _mod16519(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
