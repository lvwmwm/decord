// Module ID: 9707
// Function ID: 9708
// Name: isGameActivity
// Dependencies: [676, 2]
// Exports: default

// Module 9707 (isGameActivity)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
