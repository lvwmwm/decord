// Module ID: 13895
// Function ID: 13896
// Name: useFrameRunsInBackground
// Dependencies: [1193, 6623, 504, 6952, 2]
// Exports: default

// Module 13895 (useFrameRunsInBackground)
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 6952 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import FramesStore from "FramesStore" /* 6623 */;
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
