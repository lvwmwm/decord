// Module ID: 18904
// Function ID: 18905
// Name: getGamePlatform
// Dependencies: [5531, 14368, 6955, 2]
// Exports: default

// Module 18904 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5531 */;
import isOnXboxDefault from "isOnXbox" /* 14368 */;
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
          DESKTOP = tmp2(6955).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(6955).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
