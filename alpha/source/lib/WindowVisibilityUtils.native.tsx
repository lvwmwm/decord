// Module ID: 5220
// Function ID: 5221
// Name: WindowVisibilityUtils
// Dependencies: [1998, 1085, 5219, 2]
// Exports: default

// Module 5220 (WindowVisibilityUtils)
import Constants from "Constants" /* 1085 */;
import ExternalPipDefault from "ExternalPip" /* 5219 */;
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
