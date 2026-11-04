// Module ID: 15913
// Function ID: 15914
// Dependencies: [15899]

// Module 15913
import _mod15899 from "module_15899" /* 15899 */;


export default (arg0, arg1) => {
  const tmp = _mod15899(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
