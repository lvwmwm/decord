// Module ID: 9611
// Function ID: 9612
// Name: isDiscordVisible
// Dependencies: [1895, 1074, 9610, 2]
// Exports: default

// Module 9611 (isDiscordVisible)
import closure_2 from "getState" /* 1895 */;
import { AppStates } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
