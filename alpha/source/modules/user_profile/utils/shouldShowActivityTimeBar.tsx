// Module ID: 14058
// Function ID: 14059
// Name: shouldShowActivityTimeBar
// Dependencies: [1087, 2]
// Exports: default

// Module 14058 (shouldShowActivityTimeBar)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/user_profile/utils/shouldShowActivityTimeBar.tsx");

export default function shouldShowActivityTimeBar(type) {
  let tmp2 = type.type === ActivityTypes.LISTENING || type.type === tmp.WATCHING;
  if (tmp2) {
    const timestamps = type.timestamps;
    let start;
    if (timestamps != null) {
      start = timestamps.start;
    }
    tmp2 = null != start;
  }
  if (tmp2) {
    tmp2 = null != type.timestamps.end;
  }
  return tmp2;
};
