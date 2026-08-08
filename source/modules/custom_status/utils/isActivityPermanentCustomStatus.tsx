// Module ID: 15196
// Function ID: 15197
// Name: isActivityPermanentCustomStatus
// Dependencies: [676, 2]
// Exports: isActivityPermanentCustomStatus

// Module 15196 (isActivityPermanentCustomStatus)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

export const isActivityPermanentCustomStatus = function isActivityPermanentCustomStatus(type) {
  let tmp = type.type === ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    const timestamps = type.timestamps;
    let end;
    if (timestamps != null) {
      end = timestamps.end;
    }
    tmp = null == end;
  }
  return tmp;
};
