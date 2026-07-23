// Module ID: 10580
// Function ID: 82597
// Name: isDiscordVisible
// Dependencies: [6651, 653, 10233, 2]
// Exports: default

// Module 10580 (isDiscordVisible)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AppStates } from "ME";

const result = require("NativeModules").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
