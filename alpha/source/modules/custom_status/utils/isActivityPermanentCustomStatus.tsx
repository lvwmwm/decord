// Module ID: 18068
// Function ID: 18069
// Name: isActivityPermanentCustomStatus
// Dependencies: [5757, 2]
// Exports: isActivityPermanentCustomStatus

// Module 18068 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5757 */;
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
