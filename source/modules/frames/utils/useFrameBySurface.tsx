// Module ID: 16537
// Function ID: 16538
// Name: useFrameBySurface
// Dependencies: [9439, 586, 2]
// Exports: default

// Module 16537 (useFrameBySurface)
import closure_2 from "map" /* 9439 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default function useFrameBySurface(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return _require(586).useStateFromStores(items, () => {
    if (null != closure_0) {
      return closure_1_2.getFrameBySurface(tmp, closure_1);
    }
  }, items1);
};
