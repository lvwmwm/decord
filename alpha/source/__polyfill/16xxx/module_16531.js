// Module ID: 16531
// Function ID: 16532
// Dependencies: [16517]

// Module 16531
import _mod16517 from "module_16517" /* 16517 */;


export default (arg0, arg1) => {
  const tmp = _mod16517(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
