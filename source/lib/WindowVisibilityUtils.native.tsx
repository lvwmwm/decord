// Module ID: 10704
// Function ID: 10705
// Name: isDiscordVisible
// Dependencies: [6878, 676, 9771, 2]
// Exports: default

// Module 10704 (isDiscordVisible)
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
