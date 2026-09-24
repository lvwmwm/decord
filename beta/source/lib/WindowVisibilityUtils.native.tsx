// Module ID: 9729
// Function ID: 9730
// Name: WindowVisibilityUtils
// Dependencies: [1983, 1078, 9728, 2]
// Exports: default

// Module 9729 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 1983 */;

const AppStates = fn(1078).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = AppStateStore.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
