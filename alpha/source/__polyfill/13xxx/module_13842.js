// Module ID: 13842
// Function ID: 13843
// Dependencies: [13828]

// Module 13842
import _mod13828 from "module_13828" /* 13828 */;


export default (arg0, arg1) => {
  const tmp = _mod13828(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
