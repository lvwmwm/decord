// Module ID: 12408
// Function ID: 12409
// Name: useFrameBySurface
// Dependencies: [6934, 504, 2]
// Exports: default

// Module 12408 (useFrameBySurface)
import FramesStore from "FramesStore" /* 6934 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default function useFrameBySurface(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [FramesStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      return FramesStore.getFrameBySurface(tmp, closure_1);
    }
  }, items1);
};
