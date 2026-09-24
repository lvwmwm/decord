// Module ID: 16411
// Function ID: 16412
// Name: isActivityPermanentCustomStatus
// Dependencies: [1078, 2]
// Exports: isActivityPermanentCustomStatus

// Module 16411 (isActivityPermanentCustomStatus)
import Constants from "Constants" /* 1078 */;
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
