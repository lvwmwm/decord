// Module ID: 19088
// Function ID: 19089
// Name: getGamePlatform
// Dependencies: [5896, 15063, 9888, 2]
// Exports: default

// Module 19088 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5896 */;
import isOnXboxDefault from "isOnXbox" /* 15063 */;
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
          DESKTOP = tmp2(9888).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(9888).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
