// Module ID: 15721
// Function ID: 15722
// Name: shouldShowActivityTimeBar
// Dependencies: [6059, 2]
// Exports: default

// Module 15721 (shouldShowActivityTimeBar)
import ActivityTypes from "ActivityTypes" /* 6059 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/shouldShowActivityTimeBar.tsx");

export default function shouldShowActivityTimeBar(type) {
  let tmp3 = type.type === ActivityTypes.ActivityTypes.LISTENING;
  if (!tmp3) {
    tmp3 = type.type === ActivityTypes.ActivityTypes.WATCHING;
  }
  if (tmp3) {
    const timestamps = type.timestamps;
    let start;
    if (timestamps != null) {
      start = timestamps.start;
    }
    tmp3 = null != start;
  }
  if (tmp3) {
    tmp3 = null != type.timestamps.end;
  }
  return tmp3;
};
