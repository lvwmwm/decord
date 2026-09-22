// Module ID: 16977
// Function ID: 16978
// Name: useFrameBySurface
// Dependencies: [9318, 504, 2]
// Exports: default

// Module 16977 (useFrameBySurface)
import FramesStore from "FramesStore" /* 9318 */;

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
