// Module ID: 9540
// Function ID: 9541
// Name: isDiscordVisible
// Dependencies: [7347, 673, 9539, 2]
// Exports: default

// Module 9540 (isDiscordVisible)
import closure_2 from "getState" /* 7347 */;
import { AppStates } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
