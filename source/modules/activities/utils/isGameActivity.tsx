// Module ID: 9902
// Function ID: 9903
// Name: isGameActivity
// Dependencies: [676, 2]
// Exports: default

// Module 9902 (isGameActivity)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
