// Module ID: 9537
// Function ID: 9538
// Name: isGameActivity
// Dependencies: [676, 2]
// Exports: default

// Module 9537 (isGameActivity)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
