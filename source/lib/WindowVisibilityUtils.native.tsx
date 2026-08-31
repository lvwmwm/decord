// Module ID: 9541
// Function ID: 9542
// Name: isDiscordVisible
// Dependencies: [7125, 676, 9540, 2]
// Exports: default

// Module 9541 (isDiscordVisible)
import closure_2 from "getState" /* 7125 */;
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
