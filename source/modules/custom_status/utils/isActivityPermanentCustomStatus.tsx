// Module ID: 14927
// Function ID: 113815
// Name: isActivityPermanentCustomStatus
// Dependencies: [653, 2]
// Exports: isActivityPermanentCustomStatus

// Module 14927 (isActivityPermanentCustomStatus)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

export const isActivityPermanentCustomStatus = function isActivityPermanentCustomStatus(type) {
  let tmp = type.type === ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    const timestamps = type.timestamps;
    let end;
    if (null != timestamps) {
      end = timestamps.end;
    }
    tmp = null == end;
  }
  return tmp;
};
