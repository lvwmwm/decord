// Module ID: 16567
// Function ID: 16568
// Dependencies: [16553]

// Module 16567
import _mod16553 from "module_16553" /* 16553 */;


export default (arg0, arg1) => {
  const tmp = _mod16553(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
