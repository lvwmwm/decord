// Module ID: 14301
// Function ID: 14302
// Name: prerelease
// Dependencies: [14287]

// Module 14301 (prerelease)
import _mod14287 from "module_14287" /* 14287 */;


export default (arg0, arg1) => {
  const tmp = _mod14287(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
