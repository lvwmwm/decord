// Module ID: 9111
// Function ID: 9112
// Name: WindowVisibilityUtils
// Dependencies: [1986, 1085, 9110, 2]
// Exports: default

// Module 9111 (WindowVisibilityUtils)
import Constants from "Constants" /* 1085 */;
import ExternalPipDefault from "ExternalPip" /* 9110 */;
import AppStateStore from "AppStateStore" /* 1986 */;
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
