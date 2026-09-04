// Module ID: 15986
// Function ID: 15987
// Name: isActivityPermanentCustomStatus
// Dependencies: [673, 2]
// Exports: isActivityPermanentCustomStatus

// Module 15986 (isActivityPermanentCustomStatus)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

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
