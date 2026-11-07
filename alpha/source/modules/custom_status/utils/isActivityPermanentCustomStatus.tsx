// Module ID: 18448
// Function ID: 18449
// Name: isActivityPermanentCustomStatus
// Dependencies: [5891, 2]
// Exports: isActivityPermanentCustomStatus

// Module 18448 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5891 */;
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
