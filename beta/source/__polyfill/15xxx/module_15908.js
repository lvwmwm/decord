// Module ID: 15908
// Function ID: 15909
// Dependencies: [15894]

// Module 15908
import _mod15894 from "module_15894" /* 15894 */;


export default (arg0, arg1) => {
  const tmp = _mod15894(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
