// Module ID: 17924
// Function ID: 17925
// Name: getGamePlatform
// Dependencies: [1087, 14090, 2]
// Exports: default

// Module 17924 (getGamePlatform)
import isOnXboxDefault from "isOnXbox" /* 14090 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ ActivityTypes: c2, ActivityGamePlatforms: c3 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === constants.PLAYING) {
        let DESKTOP;
        if (isOnXboxDefault(type)) {
          DESKTOP = constants2.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = constants2.DESKTOP;
        }
        tmp = DESKTOP;
      }
    }
  }
  return tmp;
};
