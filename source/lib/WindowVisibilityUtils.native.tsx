// Module ID: 9580
// Function ID: 9581
// Name: isDiscordVisible
// Dependencies: [7157, 676, 9579, 2]
// Exports: default

// Module 9580 (isDiscordVisible)
import closure_2 from "getState" /* 7157 */;
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
