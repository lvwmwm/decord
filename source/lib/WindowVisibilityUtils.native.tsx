// Module ID: 10609
// Function ID: 82789
// Name: isDiscordVisible
// Dependencies: [6651, 653, 10263, 2]
// Exports: default

// Module 10609 (isDiscordVisible)
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
