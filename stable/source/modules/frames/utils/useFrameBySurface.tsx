// Module ID: 16719
// Function ID: 16720
// Name: useFrameBySurface
// Dependencies: [9640, 504, 2]
// Exports: default

// Module 16719 (useFrameBySurface)
import FramesStore from "FramesStore" /* 9640 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default function useFrameBySurface(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [FramesStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      return FramesStore.getFrameBySurface(tmp, closure_1);
    }
  }, items1);
};
