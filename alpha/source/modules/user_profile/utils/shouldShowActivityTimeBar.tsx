// Module ID: 15091
// Function ID: 15092
// Name: shouldShowActivityTimeBar
// Dependencies: [5891, 2]
// Exports: default

// Module 15091 (shouldShowActivityTimeBar)
import ActivityTypes from "ActivityTypes" /* 5891 */;
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
