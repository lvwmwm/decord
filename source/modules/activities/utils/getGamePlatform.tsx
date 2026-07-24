// Module ID: 15476
// Function ID: 118949
// Name: getGamePlatform
// Dependencies: [653, 11949, 2]
// Exports: default

// Module 15476 (getGamePlatform)
import ME from "ME";

let closure_2;
let closure_3;
({ ActivityTypes: closure_2, ActivityGamePlatforms: closure_3 } = ME);
const result = require("set").fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === constants.PLAYING) {
        if (importDefault(11949)(type)) {
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
