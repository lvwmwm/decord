// Module ID: 6038
// Function ID: 6039
// Name: WindowVisibilityUtils
// Dependencies: [2117, 1072, 6035, 2]
// Exports: default

// Module 6038 (WindowVisibilityUtils)
import Constants from "Constants" /* 1072 */;
import ExternalPipDefault from "ExternalPip" /* 6035 */;
import AppStateStore from "AppStateStore" /* 2117 */;
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
