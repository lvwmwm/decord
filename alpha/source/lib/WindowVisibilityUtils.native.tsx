// Module ID: 6011
// Function ID: 6012
// Name: WindowVisibilityUtils
// Dependencies: [2122, 1072, 6008, 2]
// Exports: default

// Module 6011 (WindowVisibilityUtils)
import Constants from "Constants" /* 1072 */;
import ExternalPipDefault from "ExternalPip" /* 6008 */;
import AppStateStore from "AppStateStore" /* 2122 */;
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
