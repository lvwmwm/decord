// Module ID: 18111
// Function ID: 18112
// Name: isActivityPermanentCustomStatus
// Dependencies: [5762, 2]
// Exports: isActivityPermanentCustomStatus

// Module 18111 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5762 */;
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
