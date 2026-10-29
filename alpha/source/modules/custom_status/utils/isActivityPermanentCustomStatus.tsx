// Module ID: 18005
// Function ID: 18006
// Name: isActivityPermanentCustomStatus
// Dependencies: [1084, 2]
// Exports: isActivityPermanentCustomStatus

// Module 18005 (isActivityPermanentCustomStatus)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

export function isActivityPermanentCustomStatus(type) {
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
}
