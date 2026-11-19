// Module ID: 5647
// Function ID: 5648
// Name: WindowVisibilityUtils
// Dependencies: [2120, 1072, 5644, 2]
// Exports: default

// Module 5647 (WindowVisibilityUtils)
import Constants from "Constants" /* 1072 */;
import ExternalPipDefault from "ExternalPip" /* 5644 */;
import AppStateStore from "AppStateStore" /* 2120 */;
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
