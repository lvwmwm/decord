// Module ID: 10536
// Function ID: 81530
// Name: isDiscordVisible
// Dependencies: [6307, 653, 10237, 2]
// Exports: default

// Module 10536 (isDiscordVisible)
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
