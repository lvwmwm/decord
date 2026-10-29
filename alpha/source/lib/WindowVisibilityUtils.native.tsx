// Module ID: 5865
// Function ID: 5866
// Name: WindowVisibilityUtils
// Dependencies: [1999, 1084, 5862, 2]
// Exports: default

// Module 5865 (WindowVisibilityUtils)
import Constants from "Constants" /* 1084 */;
import ExternalPipDefault from "ExternalPip" /* 5862 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = AppStateStore.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  const obj = ExternalPipDefault;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
