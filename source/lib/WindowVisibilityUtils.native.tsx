// Module ID: 12503
// Function ID: 12504
// Name: isDiscordVisible
// Dependencies: [7421, 676, 10066, 2]
// Exports: default

// Module 12503 (isDiscordVisible)
import closure_2 from "getState" /* 7421 */;
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
