// Module ID: 9730
// Function ID: 9731
// Name: WindowVisibilityUtils
// Dependencies: [1979, 1074, 9729, 2]
// Exports: default

// Module 9730 (WindowVisibilityUtils)
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
