// Module ID: 16158
// Function ID: 16159
// Dependencies: [16144]

// Module 16158
import _mod16144 from "module_16144" /* 16144 */;


export default (arg0, arg1) => {
  const tmp = _mod16144(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
