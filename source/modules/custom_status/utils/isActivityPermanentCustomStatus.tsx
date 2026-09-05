// Module ID: 16064
// Function ID: 16065
// Name: isActivityPermanentCustomStatus
// Dependencies: [1074, 2]
// Exports: isActivityPermanentCustomStatus

// Module 16064 (isActivityPermanentCustomStatus)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

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
