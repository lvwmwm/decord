// Module ID: 15027
// Function ID: 15028
// Dependencies: [15013]

// Module 15027
import _mod15013 from "module_15013" /* 15013 */;


export default (arg0, arg1) => {
  const tmp = _mod15013(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
