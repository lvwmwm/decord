// Module ID: 6014
// Function ID: 6015
// Name: WindowVisibilityUtils
// Dependencies: [2122, 1072, 6011, 2]
// Exports: default

// Module 6014 (WindowVisibilityUtils)
import Constants from "Constants" /* 1072 */;
import ExternalPipDefault from "ExternalPip" /* 6011 */;
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
