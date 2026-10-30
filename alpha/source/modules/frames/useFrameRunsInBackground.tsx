// Module ID: 14361
// Function ID: 14362
// Name: useFrameRunsInBackground
// Dependencies: [1195, 6840, 504, 14362, 2]
// Exports: default

// Module 14361 (useFrameRunsInBackground)
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 14362 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import FramesStore from "FramesStore" /* 6840 */;
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
