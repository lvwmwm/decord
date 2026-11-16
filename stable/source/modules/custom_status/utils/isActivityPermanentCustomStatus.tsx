// Module ID: 18496
// Function ID: 18497
// Name: isActivityPermanentCustomStatus
// Dependencies: [5923, 2]
// Exports: isActivityPermanentCustomStatus

// Module 18496 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5923 */;
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
