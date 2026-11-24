// Module ID: 5829
// Function ID: 5830
// Name: WindowVisibilityUtils
// Dependencies: [2118, 1071, 5826, 2]
// Exports: default

// Module 5829 (WindowVisibilityUtils)
import Constants from "Constants" /* 1071 */;
import ExternalPipDefault from "ExternalPip" /* 5826 */;
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
