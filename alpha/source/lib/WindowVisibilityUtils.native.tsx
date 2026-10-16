// Module ID: 5284
// Function ID: 5285
// Name: WindowVisibilityUtils
// Dependencies: [2001, 1087, 5283, 2]
// Exports: default

// Module 5284 (WindowVisibilityUtils)
import Constants from "Constants" /* 1087 */;
import ExternalPipDefault from "ExternalPip" /* 5283 */;
import AppStateStore from "AppStateStore" /* 2001 */;
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
