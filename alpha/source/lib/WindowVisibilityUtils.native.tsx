// Module ID: 5863
// Function ID: 5864
// Name: WindowVisibilityUtils
// Dependencies: [1998, 1084, 5860, 2]
// Exports: default

// Module 5863 (WindowVisibilityUtils)
import Constants from "Constants" /* 1084 */;
import ExternalPipDefault from "ExternalPip" /* 5860 */;
import AppStateStore from "AppStateStore" /* 1998 */;
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
