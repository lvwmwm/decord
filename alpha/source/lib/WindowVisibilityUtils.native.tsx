// Module ID: 5281
// Function ID: 5282
// Name: WindowVisibilityUtils
// Dependencies: [1999, 1085, 5280, 2]
// Exports: default

// Module 5281 (WindowVisibilityUtils)
import Constants from "Constants" /* 1085 */;
import ExternalPipDefault from "ExternalPip" /* 5280 */;
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
