// Module ID: 10498
// Function ID: 81409
// Name: isDiscordVisible
// Dependencies: [6271, 653, 10197, 2]
// Exports: default

// Module 10498 (isDiscordVisible)
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
