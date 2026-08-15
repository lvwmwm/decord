// Module ID: 12451
// Function ID: 12452
// Name: isDiscordVisible
// Dependencies: [7383, 676, 10027, 2]
// Exports: default

// Module 12451 (isDiscordVisible)
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
