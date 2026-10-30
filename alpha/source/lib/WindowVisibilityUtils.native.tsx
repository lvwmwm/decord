// Module ID: 5872
// Function ID: 5873
// Name: WindowVisibilityUtils
// Dependencies: [1994, 1072, 5869, 2]
// Exports: default

// Module 5872 (WindowVisibilityUtils)
import Constants from "Constants" /* 1072 */;
import ExternalPipDefault from "ExternalPip" /* 5869 */;
import AppStateStore from "AppStateStore" /* 1994 */;
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
