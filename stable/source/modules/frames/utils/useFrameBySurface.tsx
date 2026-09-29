// Module ID: 16969
// Function ID: 16970
// Name: useFrameBySurface
// Dependencies: [9345, 504, 2]
// Exports: default

// Module 16969 (useFrameBySurface)
import FramesStore from "FramesStore" /* 9345 */;

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
