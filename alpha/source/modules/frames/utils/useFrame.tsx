// Module ID: 18831
// Function ID: 18832
// Name: useFrame
// Dependencies: [6966, 504, 2]
// Exports: default

// Module 18831 (useFrame)
import FramesStore from "FramesStore" /* 6966 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/frames/utils/useFrame.tsx");

export default function useFrame(arg0) {
  let closure_0;
  _require = arg0;
  const items = [FramesStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => FramesStore.getFrame(closure_0), items1);
};
