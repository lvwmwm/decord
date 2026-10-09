// Module ID: 14261
// Function ID: 14262
// Dependencies: [14247]

// Module 14261
import _mod14247 from "module_14247" /* 14247 */;


export default (arg0, arg1) => {
  const tmp = _mod14247(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
