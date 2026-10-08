// Module ID: 14165
// Function ID: 14166
// Dependencies: [14151]

// Module 14165
import _mod14151 from "module_14151" /* 14151 */;


export default (arg0, arg1) => {
  const tmp = _mod14151(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
