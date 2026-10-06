// Module ID: 13574
// Function ID: 13575
// Dependencies: [13560]

// Module 13574
import _mod13560 from "module_13560" /* 13560 */;


export default (arg0, arg1) => {
  const tmp = _mod13560(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
