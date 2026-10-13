// Module ID: 14660
// Function ID: 14661
// Dependencies: [14646]

// Module 14660
import _mod14646 from "module_14646" /* 14646 */;


export default (arg0, arg1) => {
  const tmp = _mod14646(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
