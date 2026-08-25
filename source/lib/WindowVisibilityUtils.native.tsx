// Module ID: 10784
// Function ID: 10785
// Name: isDiscordVisible
// Dependencies: [7019, 676, 9922, 2]
// Exports: default

// Module 10784 (isDiscordVisible)
import closure_2 from "getState" /* 7019 */;
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
