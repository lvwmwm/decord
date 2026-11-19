// Module ID: 13803
// Function ID: 13804
// Name: useFrameRunsInBackground
// Dependencies: [1194, 6502, 504, 6833, 2]
// Exports: default

// Module 13803 (useFrameRunsInBackground)
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 6833 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import FramesStore from "FramesStore" /* 6502 */;
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
