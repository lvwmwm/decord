// Module ID: 8879
// Function ID: 8880
// Name: WindowVisibilityUtils
// Dependencies: [1979, 1074, 8878, 2]
// Exports: default

// Module 8879 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 1979 */;

const AppStates = fn(1074).AppStates;
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
