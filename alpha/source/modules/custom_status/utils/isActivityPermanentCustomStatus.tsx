// Module ID: 17462
// Function ID: 17463
// Name: isActivityPermanentCustomStatus
// Dependencies: [5533, 2]
// Exports: isActivityPermanentCustomStatus

// Module 17462 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5533 */;
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
