// Module ID: 18401
// Function ID: 18402
// Name: isActivityPermanentCustomStatus
// Dependencies: [5918, 2]
// Exports: isActivityPermanentCustomStatus

// Module 18401 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5918 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

export function isActivityPermanentCustomStatus(type) {
  let tmp = type.type === ActivityTypes.ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    const timestamps = type.timestamps;
    let end;
    if (timestamps != null) {
      end = timestamps.end;
    }
    tmp = null == end;
  }
  return tmp;
}
