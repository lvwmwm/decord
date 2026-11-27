// Module ID: 19089
// Function ID: 19090
// Name: getGamePlatform
// Dependencies: [6015, 14907, 7768, 2]
// Exports: default

// Module 19089 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 6015 */;
import isOnXboxDefault from "isOnXbox" /* 14907 */;
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
          DESKTOP = tmp2(7768).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(7768).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
