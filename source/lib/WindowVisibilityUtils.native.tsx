// Module ID: 9593
// Function ID: 9594
// Name: isDiscordVisible
// Dependencies: [7166, 673, 9592, 2]
// Exports: default

// Module 9593 (isDiscordVisible)
import closure_2 from "getState" /* 7166 */;
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
