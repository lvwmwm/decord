// Module ID: 19221
// Function ID: 19222
// Name: getGamePlatform
// Dependencies: [5923, 15116, 9861, 2]
// Exports: default

// Module 19221 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5923 */;
import isOnXboxDefault from "isOnXbox" /* 15116 */;
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
          DESKTOP = tmp2(9861).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(9861).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
