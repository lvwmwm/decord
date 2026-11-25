// Module ID: 17596
// Function ID: 17597
// Name: isActivityPermanentCustomStatus
// Dependencies: [5652, 2]
// Exports: isActivityPermanentCustomStatus

// Module 17596 (isActivityPermanentCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5652 */;
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
