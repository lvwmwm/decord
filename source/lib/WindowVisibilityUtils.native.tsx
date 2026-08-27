// Module ID: 9501
// Function ID: 9502
// Name: isDiscordVisible
// Dependencies: [7091, 676, 9500, 2]
// Exports: default

// Module 9501 (isDiscordVisible)
import closure_2 from "getState" /* 7091 */;
import { AppStates } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
