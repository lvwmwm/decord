// Module ID: 9597
// Function ID: 9598
// Name: isDiscordVisible
// Dependencies: [7167, 673, 9596, 2]
// Exports: default

// Module 9597 (isDiscordVisible)
import closure_2 from "getState" /* 7167 */;
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
