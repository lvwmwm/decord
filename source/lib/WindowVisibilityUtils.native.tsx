// Module ID: 10856
// Function ID: 10857
// Name: isDiscordVisible
// Dependencies: [7085, 676, 9989, 2]
// Exports: default

// Module 10856 (isDiscordVisible)
import closure_2 from "getState" /* 7085 */;
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
