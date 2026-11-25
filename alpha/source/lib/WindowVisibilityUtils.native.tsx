// Module ID: 5924
// Function ID: 5925
// Name: WindowVisibilityUtils
// Dependencies: [2118, 1071, 5921, 2]
// Exports: default

// Module 5924 (WindowVisibilityUtils)
import Constants from "Constants" /* 1071 */;
import ExternalPipDefault from "ExternalPip" /* 5921 */;
import AppStateStore from "AppStateStore" /* 2118 */;
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
