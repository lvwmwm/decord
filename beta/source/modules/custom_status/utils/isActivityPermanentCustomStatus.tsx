// Module ID: 16403
// Function ID: 16404
// Name: isActivityPermanentCustomStatus
// Dependencies: [1074, 2]
// Exports: isActivityPermanentCustomStatus

// Module 16403 (isActivityPermanentCustomStatus)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

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
