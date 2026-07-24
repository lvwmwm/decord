// Module ID: 14975
// Function ID: 114138
// Name: isActivityTemporaryCustomStatus
// Dependencies: [653, 2]
// Exports: isActivityTemporaryCustomStatus

// Module 14975 (isActivityTemporaryCustomStatus)
import { ActivityTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx");

export const isActivityTemporaryCustomStatus = function isActivityTemporaryCustomStatus(type) {
  let tmp = type.type === ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    const timestamps = type.timestamps;
    let end;
    if (null != timestamps) {
      end = timestamps.end;
    }
    tmp = null != end;
  }
  if (tmp) {
    const timestamps2 = type.timestamps;
    let end1;
    if (null != timestamps2) {
      end1 = timestamps2.end;
    }
    tmp = end1 > 0;
  }
  return tmp;
};
