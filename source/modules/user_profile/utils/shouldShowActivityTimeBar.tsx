// Module ID: 11956
// Function ID: 92534
// Name: shouldShowActivityTimeBar
// Dependencies: [653, 2]
// Exports: default

// Module 11956 (shouldShowActivityTimeBar)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/utils/shouldShowActivityTimeBar.tsx");

export default function shouldShowActivityTimeBar(type) {
  let tmp = type.type === ActivityTypes.LISTENING;
  if (!tmp) {
    tmp = type.type === ActivityTypes.WATCHING;
  }
  if (tmp) {
    const timestamps = type.timestamps;
    let start;
    if (null != timestamps) {
      start = timestamps.start;
    }
    tmp = null != start;
  }
  if (tmp) {
    tmp = null != type.timestamps.end;
  }
  return tmp;
};
