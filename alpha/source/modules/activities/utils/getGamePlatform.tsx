// Module ID: 18855
// Function ID: 18856
// Name: getGamePlatform
// Dependencies: [5652, 14458, 7074, 2]
// Exports: default

// Module 18855 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5652 */;
import isOnXboxDefault from "isOnXbox" /* 14458 */;
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
          DESKTOP = tmp2(7074).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(7074).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
