// Module ID: 15694
// Function ID: 15695
// Name: isActivityPermanentCustomStatus
// Dependencies: [1086, 2]
// Exports: isActivityPermanentCustomStatus

// Module 15694 (isActivityPermanentCustomStatus)
import Constants from "Constants" /* 1086 */;
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
