// Module ID: 10757
// Function ID: 10758
// Name: isDiscordVisible
// Dependencies: [6917, 676, 9812, 2]
// Exports: default

// Module 10757 (isDiscordVisible)
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
