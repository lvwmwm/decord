// Module ID: 5955
// Function ID: 5956
// Name: WindowVisibilityUtils
// Dependencies: [2119, 1071, 5952, 2]
// Exports: default

// Module 5955 (WindowVisibilityUtils)
import Constants from "Constants" /* 1071 */;
import ExternalPipDefault from "ExternalPip" /* 5952 */;
import AppStateStore from "AppStateStore" /* 2119 */;
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
