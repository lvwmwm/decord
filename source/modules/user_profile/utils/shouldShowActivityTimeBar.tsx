// Module ID: 12000
// Function ID: 12001
// Name: shouldShowActivityTimeBar
// Dependencies: [676, 2]
// Exports: default

// Module 12000 (shouldShowActivityTimeBar)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/utils/shouldShowActivityTimeBar.tsx");

export default function shouldShowActivityTimeBar(type) {
  let tmp2 = type.type === ActivityTypes.LISTENING || type.type === tmp.WATCHING;
  if (tmp2) {
    const timestamps = type.timestamps;
    let start;
    if (timestamps != null) {
      start = timestamps.start;
    }
    tmp2 = null != start;
  }
  if (tmp2) {
    tmp2 = null != type.timestamps.end;
  }
  return tmp2;
};
