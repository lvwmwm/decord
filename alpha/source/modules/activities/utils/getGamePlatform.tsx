// Module ID: 19133
// Function ID: 19134
// Name: getGamePlatform
// Dependencies: [5899, 15077, 9894, 2]
// Exports: default

// Module 19133 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5899 */;
import isOnXboxDefault from "isOnXbox" /* 15077 */;
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
          DESKTOP = tmp2(9894).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(9894).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
