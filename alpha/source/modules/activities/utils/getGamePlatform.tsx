// Module ID: 19102
// Function ID: 19103
// Name: getGamePlatform
// Dependencies: [5896, 15064, 9888, 2]
// Exports: default

// Module 19102 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5896 */;
import isOnXboxDefault from "isOnXbox" /* 15064 */;
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
