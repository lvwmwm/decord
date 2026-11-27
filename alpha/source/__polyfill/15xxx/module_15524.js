// Module ID: 15524
// Function ID: 15525
// Dependencies: [15510]

// Module 15524
import _mod15510 from "module_15510" /* 15510 */;


export default (arg0, arg1) => {
  const tmp = _mod15510(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
