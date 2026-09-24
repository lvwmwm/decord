// Module ID: 17321
// Function ID: 17322
// Name: getGamePlatform
// Dependencies: [1074, 13391, 2]
// Exports: default

// Module 17321 (getGamePlatform)
import isOnXboxDefault from "isOnXbox" /* 13391 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityTypes: c2, ActivityGamePlatforms: c3 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === constants.PLAYING) {
        if (isOnXboxDefault(type)) {
          let DESKTOP = constants2.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = constants2.DESKTOP;
        }
      }
    }
  }
  return tmp;
};
