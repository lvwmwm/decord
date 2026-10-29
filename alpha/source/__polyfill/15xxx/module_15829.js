// Module ID: 15829
// Function ID: 15830
// Dependencies: [15815]

// Module 15829
import _mod15815 from "module_15815" /* 15815 */;


export default (arg0, arg1) => {
  const tmp = _mod15815(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
