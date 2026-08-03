// Module ID: 10758
// Function ID: 10759
// Name: isDiscordVisible
// Dependencies: [6773, 676, 10411, 2]
// Exports: default

// Module 10758 (isDiscordVisible)
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
