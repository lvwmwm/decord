// Module ID: 16199
// Function ID: 16200
// Name: useFrameBySurface
// Dependencies: [9464, 589, 2]
// Exports: default

// Module 16199 (useFrameBySurface)
import closure_2 from "map" /* 9464 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default function useFrameBySurface(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      return closure_1_2.getFrameBySurface(tmp, closure_1);
    }
  }, items1);
};
