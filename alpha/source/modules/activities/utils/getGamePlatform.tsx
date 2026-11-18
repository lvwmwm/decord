// Module ID: 18912
// Function ID: 18913
// Name: getGamePlatform
// Dependencies: [5562, 14381, 6985, 2]
// Exports: default

// Module 18912 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5562 */;
import isOnXboxDefault from "isOnXbox" /* 14381 */;
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
          DESKTOP = tmp2(6985).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(6985).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
