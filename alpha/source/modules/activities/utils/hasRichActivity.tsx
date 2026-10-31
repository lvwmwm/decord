// Module ID: 5763
// Function ID: 5764
// Name: hasRichActivity
// Dependencies: [5762, 2]
// Exports: default

// Module 5763 (hasRichActivity)
import ActivityTypes from "ActivityTypes" /* 5762 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasRichActivity.tsx");

export default function hasRichActivity(type) {
  let tmp = null != type && type.type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    let tmp4 = null != type.details;
    if (!tmp4) {
      let tmp5 = null != type.assets;
      if (tmp5) {
        tmp5 = null != type.assets.large_image || null != type.assets.small_text;
      }
      tmp4 = tmp5;
    }
    if (!tmp4) {
      tmp4 = null != type.party;
    }
    if (!tmp4) {
      tmp4 = null != type.secrets;
    }
    if (!tmp4) {
      tmp4 = null != type.state;
    }
    tmp = tmp4;
  }
  return tmp;
};
