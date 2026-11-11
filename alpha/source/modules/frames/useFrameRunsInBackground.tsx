// Module ID: 15058
// Function ID: 15059
// Name: useFrameRunsInBackground
// Dependencies: [1194, 6956, 504, 7284, 2]
// Exports: default

// Module 15058 (useFrameRunsInBackground)
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 7284 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import FramesStore from "FramesStore" /* 6956 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/frames/useFrameRunsInBackground.tsx");

export default function useFrameRunsInBackground(arg0) {
  let closure_0;
  _require = arg0;
  const items = [FramesStore, UnsyncedUserSettingsStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const tmp = frameRunsInBackgroundDefault;
    return tmp(FramesStore.getFrame(closure_0), UnsyncedUserSettingsStore);
  }, items1);
};
