// Module ID: 18777
// Function ID: 18778
// Name: getGamePlatform
// Dependencies: [5757, 14810, 9718, 2]
// Exports: default

// Module 18777 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5757 */;
import isOnXboxDefault from "isOnXbox" /* 14810 */;
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
          DESKTOP = tmp2(9718).ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = tmp2(9718).ActivityGamePlatforms.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
