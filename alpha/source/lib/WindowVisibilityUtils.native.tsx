// Module ID: 5825
// Function ID: 5826
// Name: WindowVisibilityUtils
// Dependencies: [2001, 1087, 5822, 2]
// Exports: default

// Module 5825 (WindowVisibilityUtils)
import Constants from "Constants" /* 1087 */;
import ExternalPipDefault from "ExternalPip" /* 5822 */;
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
