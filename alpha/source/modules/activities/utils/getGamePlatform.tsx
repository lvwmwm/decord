// Module ID: 18728
// Function ID: 18729
// Name: getGamePlatform
// Dependencies: [5533, 14336, 6954, 2]
// Exports: default

// Module 18728 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5533 */;
import isOnXboxDefault from "isOnXbox" /* 14336 */;
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
          DESKTOP = tmp2(6954).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(6954).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
