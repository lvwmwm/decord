// Module ID: 15712
// Function ID: 15713
// Name: getGamePlatform
// Dependencies: [676, 12193, 2]
// Exports: default

// Module 15712 (getGamePlatform)
import ME from "ME";

let c3;
let obj1;
({ ActivityTypes: obj1, ActivityGamePlatforms: c3 } = ME);
const result = require("set").fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === constants.PLAYING) {
        if (importDefault(12193)(type)) {
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
