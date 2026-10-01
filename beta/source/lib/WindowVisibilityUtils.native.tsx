// Module ID: 8887
// Function ID: 8888
// Name: WindowVisibilityUtils
// Dependencies: [1980, 1074, 8886, 2]
// Exports: default

// Module 8887 (WindowVisibilityUtils)
import Constants from "Constants" /* 1074 */;
import ExternalPipDefault from "ExternalPip" /* 8886 */;
import AppStateStore from "AppStateStore" /* 1980 */;
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
