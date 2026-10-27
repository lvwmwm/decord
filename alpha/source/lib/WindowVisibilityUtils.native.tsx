// Module ID: 5828
// Function ID: 5829
// Name: WindowVisibilityUtils
// Dependencies: [1998, 1084, 5825, 2]
// Exports: default

// Module 5828 (WindowVisibilityUtils)
import Constants from "Constants" /* 1084 */;
import ExternalPipDefault from "ExternalPip" /* 5825 */;
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
