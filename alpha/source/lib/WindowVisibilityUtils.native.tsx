// Module ID: 8887
// Function ID: 8888
// Name: WindowVisibilityUtils
// Dependencies: [1980, 1074, 8886, 2]
// Exports: default

// Module 8887 (WindowVisibilityUtils)
import AppStateStore from "AppStateStore" /* 1980 */;

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
