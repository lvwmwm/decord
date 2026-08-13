// Module ID: 10673
// Function ID: 10674
// Name: isDiscordVisible
// Dependencies: [6923, 676, 9816, 2]
// Exports: default

// Module 10673 (isDiscordVisible)
import getState from "getState";
import { AppStates } from "ME";

const result = require("NativeEventEmitter").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
