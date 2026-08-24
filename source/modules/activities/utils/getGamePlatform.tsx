// Module ID: 16058
// Function ID: 16059
// Name: getGamePlatform
// Dependencies: [676, 12151, 2]
// Exports: default

// Module 16058 (getGamePlatform)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12151 */;
import ME from "ME" /* 676 */;

({ ActivityTypes: obj1, ActivityGamePlatforms: c3 } = ME);
const result = set.fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

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
