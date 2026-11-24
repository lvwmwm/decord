// Module ID: 17626
// Function ID: 17627
// Name: isActivityPermanentCustomStatus
// Dependencies: [5889, 2]
// Exports: isActivityPermanentCustomStatus

// Module 17626 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5889 */;
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
