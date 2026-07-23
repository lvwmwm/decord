// Module ID: 9073
// Function ID: 71194
// Name: isGameActivity
// Dependencies: [653, 2]
// Exports: default

// Module 9073 (isGameActivity)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
