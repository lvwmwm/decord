// Module ID: 8885
// Function ID: 8886
// Name: WindowVisibilityUtils
// Dependencies: [1986, 1086, 8884, 2]
// Exports: default

// Module 8885 (WindowVisibilityUtils)
import Constants from "Constants" /* 1086 */;
import ExternalPipDefault from "ExternalPip" /* 8884 */;
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
