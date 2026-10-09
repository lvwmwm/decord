// Module ID: 5221
// Function ID: 5222
// Name: WindowVisibilityUtils
// Dependencies: [1999, 1085, 5220, 2]
// Exports: default

// Module 5221 (WindowVisibilityUtils)
import Constants from "Constants" /* 1085 */;
import ExternalPipDefault from "ExternalPip" /* 5220 */;
import AppStateStore from "AppStateStore" /* 1999 */;
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
