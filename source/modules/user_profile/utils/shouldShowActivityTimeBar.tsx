// Module ID: 13007
// Function ID: 13008
// Name: shouldShowActivityTimeBar
// Dependencies: [1074, 2]
// Exports: default

// Module 13007 (shouldShowActivityTimeBar)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/user_profile/utils/shouldShowActivityTimeBar.tsx");

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
