// Module ID: 17231
// Function ID: 17232
// Name: getGamePlatform
// Dependencies: [1078, 13334, 2]
// Exports: default

// Module 17231 (getGamePlatform)
import isOnXboxDefault from "isOnXbox" /* 13334 */;
import Constants from "Constants" /* 1078 */;
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
