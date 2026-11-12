// Module ID: 19397
// Function ID: 19398
// Name: getGamePlatform
// Dependencies: [6006, 15600, 7406, 2]
// Exports: default

// Module 19397 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 6006 */;
import isOnXboxDefault from "isOnXbox" /* 15600 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === ActivityTypes.ActivityTypes.PLAYING) {
        let DESKTOP;
        if (isOnXboxDefault(type)) {
          DESKTOP = tmp2(7406).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(7406).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
