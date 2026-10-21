// Module ID: 5807
// Function ID: 5808
// Name: WindowVisibilityUtils
// Dependencies: [2001, 1087, 5804, 2]
// Exports: default

// Module 5807 (WindowVisibilityUtils)
import Constants from "Constants" /* 1087 */;
import ExternalPipDefault from "ExternalPip" /* 5804 */;
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
