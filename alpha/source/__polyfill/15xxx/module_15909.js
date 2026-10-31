// Module ID: 15909
// Function ID: 15910
// Dependencies: [15895]

// Module 15909
import _mod15895 from "module_15895" /* 15895 */;


export default (arg0, arg1) => {
  const tmp = _mod15895(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
